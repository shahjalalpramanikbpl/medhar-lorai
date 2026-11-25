# গণিত অডিট — ব্যাচ ২১–৩০ এবং ১–২০ সম্মিলিত তুলনা
তারিখ: ২৬ নভেম্বর ২০২৬

## প্রথমে আগের দুই গ্রুপের চূড়ান্ত তুলনা
- ব্যাচ ১–১০: প্রশ্ন ১–১০০; ৮৯ provisional retain, ১১ reversible exclusion candidate।
- ব্যাচ ১১–২০: প্রশ্ন ১০১–২০০; ৬৩ provisional retain, ৩৭ reversible exclusion candidate।
- ১–১০ বনাম ১১–২০ strict exact duplicate: ০।
- সম্মিলিত ১–২০: ২০০ প্রশ্ন; ১৫২ provisional retain; ৪৮ reversible exclusion candidate; স্থায়ী deletion ০।
- Strict duplicate key: normalized category + normalized stem + complete option set (sorted; order ignored) + keyed answer.
- Topic/template overlap আছে, কিন্তু ভিন্ন মান/স্টেম/অপশন হওয়ায় সেগুলো exact duplicate নয়।

## ব্যাচ ২১–৩০: অডিট ফল
- প্রশ্ন: ২০১–৩০০ (লেভেল ২১–৩০), ১০ ব্যাচ × ১০।
- গণনা/উত্তর/ব্যাখ্যা: ১০০টি প্রশ্নে যাচাই; stored expected value ও keyed option mismatch ০।
- চারটি স্বতন্ত্র অপশন/valid answer index: structural error ০।
- আগের consolidated ১–২০-এর সঙ্গে exact duplicate: 0।
- নতুন ২১–৩০-এর মধ্যে exact duplicate: 0।
- provisional retain: 17।
- reversible exclusion candidate: 83।
- স্থায়ী deletion: ০।

## ব্যাচভিত্তিক ফল
- Batch 21: ১০টি যাচাই; exclusion candidate 8টি; math_L21_Q1, math_L21_Q3, math_L21_Q4, math_L21_Q5, math_L21_Q6, math_L21_Q7, math_L21_Q8, math_L21_Q10।
- Batch 22: ১০টি যাচাই; exclusion candidate 7টি; math_L22_Q3, math_L22_Q4, math_L22_Q5, math_L22_Q6, math_L22_Q7, math_L22_Q9, math_L22_Q10।
- Batch 23: ১০টি যাচাই; exclusion candidate 9টি; math_L23_Q1, math_L23_Q2, math_L23_Q3, math_L23_Q4, math_L23_Q5, math_L23_Q6, math_L23_Q8, math_L23_Q9, math_L23_Q10।
- Batch 24: ১০টি যাচাই; exclusion candidate 10টি; math_L24_Q1, math_L24_Q2, math_L24_Q3, math_L24_Q4, math_L24_Q5, math_L24_Q6, math_L24_Q7, math_L24_Q8, math_L24_Q9, math_L24_Q10।
- Batch 25: ১০টি যাচাই; exclusion candidate 9টি; math_L25_Q1, math_L25_Q2, math_L25_Q3, math_L25_Q4, math_L25_Q5, math_L25_Q6, math_L25_Q7, math_L25_Q8, math_L25_Q9।
- Batch 26: ১০টি যাচাই; exclusion candidate 9টি; math_L26_Q1, math_L26_Q2, math_L26_Q3, math_L26_Q4, math_L26_Q5, math_L26_Q6, math_L26_Q7, math_L26_Q8, math_L26_Q10।
- Batch 27: ১০টি যাচাই; exclusion candidate 9টি; math_L27_Q1, math_L27_Q2, math_L27_Q3, math_L27_Q4, math_L27_Q5, math_L27_Q6, math_L27_Q7, math_L27_Q9, math_L27_Q10।
- Batch 28: ১০টি যাচাই; exclusion candidate 8টি; math_L28_Q1, math_L28_Q2, math_L28_Q3, math_L28_Q4, math_L28_Q5, math_L28_Q6, math_L28_Q8, math_L28_Q10।
- Batch 29: ১০টি যাচাই; exclusion candidate 8টি; math_L29_Q1, math_L29_Q2, math_L29_Q3, math_L29_Q4, math_L29_Q5, math_L29_Q7, math_L29_Q8, math_L29_Q9।
- Batch 30: ১০টি যাচাই; exclusion candidate 6টি; math_L30_Q1, math_L30_Q2, math_L30_Q3, math_L30_Q4, math_L30_Q6, math_L30_Q8।

## বাস্তবতা/বিষয়বস্তুর গুরুতর ত্রুটি
### ১০০%-এর বেশি ঘনত্ব
নিচের মিশ্রণ প্রশ্নগুলোর গাণিতিক weighted-average উত্তর ঠিক, কিন্তু দ্রবণের ঘনত্ব ১০০%-এর বেশি হওয়া অসম্ভব:
- math_L24_Q6
- math_L25_Q5
- math_L26_Q4
- math_L27_Q3
- math_L28_Q2
- math_L29_Q1

### অবাস্তব বয়স
পিতা-সন্তানের মোট বয়স ৩৬৪, ৩৭৮, ৩৯২ ও ৪০৬ বছর—এমন stem আছে:
- math_L21_Q4
- math_L22_Q3
- math_L23_Q2
- math_L24_Q1

## অস্থায়ী exclusion ledger — ব্যাচ ২১–৩০
- math_L21_Q1
- math_L21_Q3
- math_L21_Q4
- math_L21_Q5
- math_L21_Q6
- math_L21_Q7
- math_L21_Q8
- math_L21_Q10
- math_L22_Q3
- math_L22_Q4
- math_L22_Q5
- math_L22_Q6
- math_L22_Q7
- math_L22_Q9
- math_L22_Q10
- math_L23_Q1
- math_L23_Q2
- math_L23_Q3
- math_L23_Q4
- math_L23_Q5
- math_L23_Q6
- math_L23_Q8
- math_L23_Q9
- math_L23_Q10
- math_L24_Q1
- math_L24_Q2
- math_L24_Q3
- math_L24_Q4
- math_L24_Q5
- math_L24_Q6
- math_L24_Q7
- math_L24_Q8
- math_L24_Q9
- math_L24_Q10
- math_L25_Q1
- math_L25_Q2
- math_L25_Q3
- math_L25_Q4
- math_L25_Q5
- math_L25_Q6
- math_L25_Q7
- math_L25_Q8
- math_L25_Q9
- math_L26_Q1
- math_L26_Q2
- math_L26_Q3
- math_L26_Q4
- math_L26_Q5
- math_L26_Q6
- math_L26_Q7
- math_L26_Q8
- math_L26_Q10
- math_L27_Q1
- math_L27_Q2
- math_L27_Q3
- math_L27_Q4
- math_L27_Q5
- math_L27_Q6
- math_L27_Q7
- math_L27_Q9
- math_L27_Q10
- math_L28_Q1
- math_L28_Q2
- math_L28_Q3
- math_L28_Q4
- math_L28_Q5
- math_L28_Q6
- math_L28_Q8
- math_L28_Q10
- math_L29_Q1
- math_L29_Q2
- math_L29_Q3
- math_L29_Q4
- math_L29_Q5
- math_L29_Q7
- math_L29_Q8
- math_L29_Q9
- math_L30_Q1
- math_L30_Q2
- math_L30_Q3
- math_L30_Q4
- math_L30_Q6
- math_L30_Q8
এগুলো hard job-exam level-এর তুলনায় অতিরিক্ত সরল/একধাপের অথবা অবাস্তব stem-এর কারণে reversible candidate। কোনো প্রশ্ন স্থায়ীভাবে delete করা হয়নি।

## অস্থায়ী checkpoint
- Batch ২১–২৫ শেষে: মোট ২৫০ প্রশ্ন reviewed; মোট exclusion candidate 91।
- Batch ২৬–৩০ শেষে: মোট ৩০০ প্রশ্ন reviewed; মোট exclusion candidate 131।
- ৩০০ প্রশ্নের সামগ্রিক provisional retained: 169।
- সামগ্রিক reversible exclusion candidate: 131।
- Hard standalone যোগ, বিয়োগ, গুণ ও ভাগ—চার অপারেশনের উপযুক্ত কঠিন প্রশ্নের ঘাটতি এখনো রয়ে গেছে।

## সিদ্ধান্ত
- ১–১০ বনাম ১১–২০ তুলনা সম্পন্ন।
- ২১–৩০ বনাম consolidated ১–২০ তুলনা সম্পন্ন।
- ৩০০ প্রশ্নের substantive review সম্পন্ন; কিন্তু candidate replacement, option redesign, difficulty alignment ও app integration বাকি।
- **অবস্থা: BATCHES 01–30 REVIEWED — PENDING FINAL CONSOLIDATION — NOT LOCKED.**
