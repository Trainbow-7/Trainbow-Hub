import re

files_info = [
    {
        "path": "src/lib/data/courses/chemistry-senior-secondary.ts",
        "track": "senior-secondary",
        "price": 2500000
    },
    {
        "path": "src/lib/data/courses/chemistry-exam-prep.ts",
        "track": "exam-prep",
        "price": 3000000
    },
    {
        "path": "src/lib/data/courses/chemistry-practical-bootcamps.ts",
        "track": "practical-bootcamp",
        "price": 2000000
    },
    {
        "path": "src/lib/data/courses/chemistry-deep-dives.ts",
        "track": "deep-dive",
        "price": 1800000
    }
]

for item in files_info:
    path = item["path"]
    track = item["track"]
    price = item["price"]

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Match each course object starting with id: "crs-chm-..."
    # We want to insert subject, subjectSlug, track, instructorName, instructorTitle, priceMinorUnits, currency, shortDescription
    def replacer(m):
        full = m.group(0)
        if 'subject: "Chemistry"' in full:
            return full
        
        # Extract title or description to form shortDescription
        desc_match = re.search(r'description:\s*"([^"]+)"', full)
        short_desc = desc_match.group(1)[:120] + "..." if desc_match else "Curriculum-aligned senior secondary chemistry mastery."

        injection = (
            f'\n    subject: "Chemistry",\n'
            f'    subjectSlug: "chemistry",\n'
            f'    track: "{track}",\n'
            f'    instructorName: "Trainbow HUB Academy",\n'
            f'    instructorTitle: "Senior Chemistry Educator & Examiner",\n'
            f'    priceMinorUnits: {price},\n'
            f'    currency: "NGN",\n'
            f'    shortDescription: "{short_desc}",'
        )
        return m.group(1) + injection + m.group(2)

    new_content = re.sub(
        r'(\{\s*id:\s*"crs-chm-[^"]+",\s*slug:\s*"[^"]+",\s*title:\s*"[^"]+",)(.*?\n\s*level:\s*"[^"]+",)',
        replacer,
        content,
        flags=re.DOTALL
    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"✓ Fixed course types in {path}")

