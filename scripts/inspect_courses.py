import json

with open("scripts/courses-summary.json", "r", encoding="utf-8") as f:
    courses = json.load(f)

for c in courses:
    total_l = sum(len(m["lessons"]) for m in c["modules"])
    print(f"{c['courseSlug']}: {len(c['modules'])} modules, {total_l} lessons")
    for m in c["modules"]:
        print(f"  {m['id']}: {[l['id'] for l in m['lessons']]}")
