import json

courses = json.load(open('scripts/courses-summary.json', encoding='utf-8'))
for c in courses:
    print(f"=== {c['courseSlug']} ({len(c['modules'])} modules) ===")
    for m in c['modules']:
        print(f" Module: {m['id']} - {m['title']}")
        for l in m['lessons']:
            print(f"   {l['id']}: {l['title']} [topic: {l.get('topicId')}]")
