import json
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import scripts.authentic_generators.waec_full as wf
import scripts.authentic_generators.waec_l7_l9 as wl
import scripts.generate_waec as w1
import scripts.waec_part2 as w2
import scripts.waec_part3 as w3

OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "../src/lib/assessment/banks/waec-math-bank.ts")

def compile_waec():
    items_wf = wf.get_waec_items() # l1-l6 (84 items)
    items_l79 = wl.get_waec_l7_l9_items() # l7-l9 (42 items)
    items_w1 = [x for x in w1.generate_waec_bank() if x['lessonId'] in ['l10', 'l11', 'l12']] # l10-l12 (42 items)
    items_w2 = w2.get_waec_part2_items() # l13-l15 (42 items)
    items_w3 = w3.get_waec_part3_items() # l16-l19 (56 items)

    all_items = items_wf + items_l79 + items_w1 + items_w2 + items_w3
    print(f"Total WAEC items compiled: {len(all_items)}")

    content = f"""import {{ AssessmentItem }} from "../types";

export const WAEC_MATH_BANK: AssessmentItem[] = {json.dumps(all_items, indent=2)};
"""
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Successfully saved {len(all_items)} items to {OUTPUT_FILE}")

if __name__ == "__main__":
    compile_waec()
