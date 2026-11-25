# GK Audit: Batches 46–50

- Source records after cleanup: 115 (25, 20, 21, 26, 23).
- GK candidates: 14; exact duplicate copies removed: 2; retained: 12.
- Master 1–50: 101 unique expansion questions.
- Malformed retained entries: 0.

## Removed exact duplicates
- `extra_1584` → duplicate of `extra_373` (FAO headquarters).
- `extra_1643` → duplicate of `extra_886` (National Martyrs' Memorial architect).

## Correction
- `extra_1553`: ৫:৩ and ১০:৬ are equivalent ratios. Replaced distractor ৫:৩ with ৫:২; correct answer ১০:৬ remains.

## Retained IDs and answers
- `extra_1553` — জাতীয় পতাকার অনুপাত: ১০:৬
- `extra_1556` — বৃহত্তম উষ্ণমণ্ডলীয় বৃষ্টিবন: আমাজন
- `extra_1557` — সরাসরি নির্বাচিত সাধারণ আসন: ৩০০
- `extra_1587` — প্রথম নারী স্পিকার: শিরীন শারমিন চৌধুরী
- `extra_1617` — বিশ্বব্যাংক সদর দপ্তর: ওয়াশিংটন, ডি.সি.
- `extra_1644` — অস্থায়ী সরকারের শপথস্থান: মুজিবনগর
- `extra_1645` — ICJ-এর আসন: দ্য হেগ
- `extra_1646` — WHO প্রতিষ্ঠার বছর: ১৯৪৮
- `extra_1647` — প্রথম নারী স্পিকার: শিরীন শারমিন চৌধুরী (ভিন্ন অপশনসেট, তাই রাখা হয়েছে)
- `extra_1674` — মুক্তিযুদ্ধের সেক্টর: ১১
- `extra_1676` — IMF সদর দপ্তর: ওয়াশিংটন, ডি.সি.
- `extra_1677` — ইউরোজোনের অভিন্ন মুদ্রা: ইউরো

Source URLs for every retained question are stored in `GK_AUDIT_MASTER_01_50.json`.
Official checks: Bangladesh Flag Rules; Bangladesh Parliament brochure; IPU; World Bank; IMF; Banglapedia; ICJ; WHO; European Union.

## Commits
- Ratio-option correction: `bd5ce2e136573d5e296f372144a3fa8c3bad56a7`.
- Duplicate `extra_1584` removal: `332c415f9420cbbf4aef66bdc5e74cdd26e1e760`.
- Duplicate `extra_1643` removal: `39a7003ee80516cb39eba170ee064008d3cafc0d`.
- Master: `026b3b7d8c79c3962a4a901d4d39abc0da4b3808`.

Policy: only exact duplicates with identical normalized category, question wording, complete option set and correct answer are removed. Different wording or option sets remain.
