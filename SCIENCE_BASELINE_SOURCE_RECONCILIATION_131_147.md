# সাধারণ বিজ্ঞান — Baseline source reconciliation: active source additions 131–147

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **CONTENT_REAUDIT_COMPLETE_PENDING_FINAL_DEVICE_RUNTIME_SMOKE_TEST_NOT_LOCKED**

## Source reconciliation
- `job-prep-suite.js`-এ মোট ১৫০টি সাধারণ বিজ্ঞান `Q()` entry শনাক্ত।
- এর মধ্যে ১৩৩টি পূর্ণ exact-signature-এ আগের master-এর কোনো record-এর সঙ্গে মিলে গেছে।
- বাকি ১৭টি active entry আগের master-এ পূর্ণ exact-signature হিসেবে ছিল না: ১৪টি নতুন question stem এবং ৩টি একই stem হলেও ভিন্ন সম্পূর্ণ option set-সহ।
- ১৭টির সবগুলোতে প্রশ্নের তথ্য, চারটি option, keyed answer, explanation এবং strict exact-duplicate signature যাচাই করা হয়েছে।
- ১৭টিই retained; এই গ্রুপে exact duplicate ০; অন্য master records-এর সঙ্গে exact duplicate ০।
- ৩টি same-stem/different-option variant-ও retained; strict duplicate নীতিতে option set আলাদা হলে বাদ দেওয়া যাবে না।
- পূর্ববর্তী expansion records-এর সঙ্গে conceptual overlap আলাদা করে রাখা হয়েছে: insulin secretion, chromosome count, O-negative RBC donor, cellulose/cell wall, kidney filtration, resistance unit ইত্যাদি।

## নতুনভাবে নথিভুক্ত ১৭টি
| ID | প্রশ্ন |
|---|---|
| suite_131 | মানবদেহে পিত্তরস তৈরি হয় কোন অঙ্গে? |
| suite_132 | কোন রক্তের গ্রুপকে সাধারণভাবে সর্বজনীন লোহিত কণিকা দাতা বলা হয়? |
| suite_133 | শক্তির SI একক কী? |
| suite_134 | মানবদেহে শ্বেত রক্তকণিকার প্রধান কাজ কী? |
| suite_135 | বিদ্যুৎ রোধের SI একক কী? |
| suite_136 | রক্তের লোহিত কণিকার গড় আয়ু কত? |
| suite_137 | মানবদেহে ইনসুলিন উৎপন্ন হয় কোথা থেকে? |
| suite_138 | মানবদেহের স্বাভাবিক তাপমাত্রা প্রায় কত? |
| suite_139 | উদ্ভিদের কোষপ্রাচীর প্রধানত কোন পদার্থ দিয়ে গঠিত? |
| suite_140 | উদ্ভিদের বাষ্পমোচন প্রধানত কোন অংশ দিয়ে ঘটে? |
| suite_141 | মানবদেহে রক্ত পরিশোধনের প্রধান অঙ্গ কোনটি? |
| suite_142 | মানবদেহে ইনসুলিন উৎপন্ন হয় কোন অঙ্গে? |
| suite_143 | মানবদেহে স্বাভাবিক ক্রোমোজোম সংখ্যা কত? |
| suite_144 | মানবদেহের স্বাভাবিক ক্রোমোজোম সংখ্যা কত? |
| suite_145 | উদ্ভিদের খাদ্য তৈরির প্রক্রিয়ার নাম কী? |
| suite_146 | বায়ুমণ্ডলে সবচেয়ে বেশি কোন গ্যাস রয়েছে? |
| suite_147 | কোন রক্তের গ্রুপকে সাধারণভাবে সর্বজনীন লোহিত রক্তকণিকা দাতা বলা হয়? |

## Fact-check nuance
- O-negative হলো জরুরি পরিস্থিতিতে সাধারণভাবে universal red-cell donor; তবু সম্ভব হলে blood typing ও crossmatch প্রয়োজন।
- ৩৭°C হলো গড় প্রচলিত স্বাভাবিক দেহতাপমাত্রা; ব্যক্তি/সময়/মাপার স্থানে পার্থক্য হতে পারে।
- ৪৬টি chromosome অধিকাংশ দেহকোষে; জননকোষে ২৩টি।
- পত্ররন্ধ্র দিয়ে অধিকাংশ বাষ্পমোচন ঘটে, তবে অন্য পৃষ্ঠ দিয়েও অল্প হয়।
- বৃক্ক রক্তের বর্জ্য ছেঁকে মূত্র তৈরি করে; পিত্ত যকৃতে তৈরি হয় এবং পিত্তথলিতে সঞ্চিত থাকে।

## Revised totals
- Baseline active unique records: **১৪৭** (আগের ১৩০ + ১৭ source additions)
- Expansion retained records: **১০১**
- Total master records: **২৪৮**
- Full-set exact duplicate signatures: **০**
- Malformed records: **০**
- Missing/invalid source URLs: **০**
- Invalid answer indices: **০**

## Decision
বিষয়বস্তুর substantive audit ও source-to-master content reconciliation সম্পন্ন। HTML loading order ও expansion merge logic পর্যালোচিত; CI validation green। বাস্তব Android device-এ smoke test হয়নি, তাই চূড়ান্ত **LOCK এখনো দেওয়া হয়নি**।
