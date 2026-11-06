import json

courses = json.load(open('scripts/courses-summary.json', encoding='utf-8'))
for c in courses:
    if c['courseSlug'] == 'waec-ssce-mathematics-mastery':
        continue
    print(f"\n==========================================")
    print(f"COURSE: {c['courseSlug']}")
    print(f"==========================================")
    for m in c['modules']:
        for l in m['lessons']:
            print(f"  Lesson {l['id']}: {l['title']}")
            for obj in l.get('objectives', []):
                print(f"    - Obj: {obj}")
            for kp in l.get('keyPoints', []):
                print(f"    - KP: {kp}")
