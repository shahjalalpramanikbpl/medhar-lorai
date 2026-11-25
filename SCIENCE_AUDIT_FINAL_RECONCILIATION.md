# সাধারণ বিজ্ঞান — চূড়ান্ত সমন্বিত যাচাই ও LOCKED রিপোর্ট

## চূড়ান্ত হিসাব
- Original baseline: ১৩০টি — সবগুলো content-audited.
- Expansion batch ১–৫৬: ১০৫টি retained expansion question; batch ৫৬-এ General Science প্রশ্ন ছিল না।
- Expansion candidate মোট: ১১৯টি.
- Exact duplicate copy বাদ: ১৬টি.
- Expansion unique retained: ১০৩টি.
- মোট General Science master: ২৩৩টি (১৩০ baseline + ১০৩ expansion).

## Integrated automated reconciliation
- Question record: ২৩৩
- Missing/empty option set: ০
- চারটির কম/বেশি option: ০
- একই option set-এ duplicate option: ০
- Invalid answer index: ০
- Missing explanation: ০
- Missing source URL: ০
- Exact duplicate signatures across master: ০
- Wrong category: ০

## নীতি প্রয়োগ
কেবল normalized category + normalized question + sorted complete option set + normalized correct answer এক হলে duplicate copy বাদ দেওয়া হয়েছে। ভিন্ন wording বা option set-এর প্রশ্ন রাখা হয়েছে। যাচাইয়ে ধরা পড়া factual ambiguity/ভুলে প্রয়োজনীয় সীমিত সংশোধন করা হয়েছে।

## Source of truth
- Master: `SCIENCE_AUDIT_MASTER_01_56.json`
- Baseline audit groups: `SCIENCE_AUDIT_BASELINE_01_26.md`, `SCIENCE_AUDIT_BASELINE_27_52.md`, `SCIENCE_AUDIT_BASELINE_53_78.md`, `SCIENCE_AUDIT_BASELINE_79_104.md`, `SCIENCE_AUDIT_BASELINE_105_130.md`
- Expansion batch reports: `SCIENCE_AUDIT_BATCH_01_05.md` through `SCIENCE_AUDIT_BATCH_51_55.md`, plus `SCIENCE_AUDIT_BATCH_56_CLOSURE.md`

## Status
**CONTENT AUDIT COMPLETE — LOCKED.**
নতুন expansion এলে এই master-এর বিরুদ্ধে duplicate comparison ও content verification না করে অন্তর্ভুক্ত করা যাবে না। Runtime/CI validation আলাদা pipeline check; তা সফল না হওয়া পর্যন্ত build success দাবি করা হবে না।
