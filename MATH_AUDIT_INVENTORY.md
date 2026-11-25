# গণিত প্রশ্নব্যাংক — প্রাথমিক ইনভেন্টরি ও অডিট সূচনা

তারিখ: ২৬ নভেম্বর ২০২৬

## পূর্ববর্তী রেকর্ড যাচাই
- সর্বশেষ `QUESTION_BANK_AUDIT_STATUS.md`-এ গণিতের ৩০০টি প্রশ্ন/৩০টি লেভেল runtime-এ লোড হওয়ার কথা আছে এবং structure, option count, answer index ও duplicate-signature checks-এ error না পাওয়ার উল্লেখ আছে।
- কিন্তু repository root-এ গণিতের কোনো পূর্ববর্তী subject-specific substantive audit report বা গণিত audit master পাওয়া যায়নি।
- অতএব আগের structural/runtime check-কে ৩০০ প্রশ্নের factual, calculation, explanation বা job-exam suitability audit হিসেবে গণ্য করা যাবে না।

## উৎস ও baseline snapshot
- মূল উৎস: `app/src/main/assets/math-levels.js`
- উৎস blob SHA: `e00b1e6544e4255a9073e3e802d803b6d9dcf706`
- উৎসে `make(level,k)` generator দিয়ে ৩০ × ১০ = **৩০০টি প্রশ্ন** তৈরি হয়; এটি ৩০০টি আলাদা static hand-authored record নয়।
- baseline snapshot: `MATH_AUDIT_MASTER_BASELINE_300.json`
- Master status: **BASELINE_SNAPSHOT_PENDING_SUBSTANTIVE_AUDIT**। এই snapshot সংরক্ষণ করা হয়েছে; কোনো প্রশ্ন এখনো audited/LOCKED ঘোষণা করা হয়নি।

## প্রাথমিক structural inventory
- লেভেল: **৩০টি**
- প্রতি লেভেলে: **১০টি**
- মোট প্রশ্ন: **৩০০টি**
- প্রতিটি প্রশ্নে ৪টি option: **৩০০/৩০০**
- keyed answer index ও generator-এর expected numeric answer মেলে: **৩০০/৩০০**
- malformed record: **০**
- canonical exact duplicate group/copy: **০/০**
- এই structural ফলাফল factual correctness বা difficulty fit প্রমাণ করে না।

## প্রথম screening-এ শনাক্তযোগ্য বিষয়
1. Generator-এ ১৬টি topic family আছে; শতকরা, লাভ-ক্ষতি, অনুপাত, গড়, সুদ, ঐকিক নিয়ম, সময়-কাজ, সময়-দূরত্ব, বয়স, বীজগণিত, ল.সা.গু/গ.সা.গু, জ্যামিতি, ধারা, মিশ্রণ, পরিমিতি ও ছাড়/মূল্য নির্ণয়।
2. যোগ, বিয়োগ, গুণ ও ভাগের জন্য আলাদা topic family বা স্বতন্ত্র কঠিন-স্তরের প্রশ্ন নেই। ব্যবহারকারীর নির্দেশ অনুযায়ী প্রতিটি অপারেশনের জন্য অন্তত একটি কঠিন, চাকরি-পরীক্ষামানের প্রশ্ন সংযোজন/প্রতিস্থাপনের প্রয়োজন হবে।
3. Difficulty metadata-তে লেভেল ১–১০ সহজ, ১১–২০ মাঝারি, ২১–৩০ কঠিন; কিন্তু level-band label-এ ১৬–২০-কে “কঠিন” এবং ২১–৩০-কে “বিসিএস ও উচ্চতর নিয়োগ” বলা হয়েছে। এই metadata alignment পর্যালোচনা করতে হবে।
4. প্রশ্নের ধরন `(level+k)%16` দিয়ে ঘুরে ঘুরে আসে; সংখ্যা বদলালেই প্রশ্নের মান বা কঠিনতা বেড়েছে—এমন ধরে নেওয়া যাবে না। বিশেষ করে উচ্চ লেভেলের প্রশ্নের প্রকৃত multi-step reasoning ও exam-standard difficulty যাচাই আবশ্যক।
5. কিছু প্রশ্নে দশমিক/ভগ্নাংশ ফল, বিকল্পের বাস্তবসম্মততা, একক, rounding এবং solution-এর ধাপ আলাদাভাবে পরীক্ষা করতে হবে।

## বাদ দেওয়ার নীতি
- প্রথমে প্রশ্নকে `RETAIN`, `CORRECT`, `EXCLUDE_CANDIDATE` বা `REPLACE_REQUIRED` হিসেবে চিহ্নিত করতে হবে।
- স্থায়ীভাবে মুছে ফেলার আগে exclusion ledger-এ ID, কারণ ও বিকল্প/প্রতিস্থাপন নথিভুক্ত থাকবে।
- exact duplicate ছাড়া একই ধারণার ভিন্ন প্রশ্নকে স্বয়ংক্রিয়ভাবে বাদ দেওয়া যাবে না।
- প্রতি ৫টি ব্যাচ শেষে recovery checkpoint; প্রতি ১০টি ব্যাচ শেষে consolidated master-এর সঙ্গে তুলনা, ফলাফল ও LOCK status সংরক্ষণ করতে হবে।

## পরবর্তী কাজ
- প্রথমে ৩০০ প্রশ্নের baseline snapshot অপরিবর্তিত রেখে suitability screening শুরু।
- প্রতিটি প্রশ্নে stem, চারটি option, সঠিক উত্তর, স্বাধীন হিসাব, explanation, একক/rounding, difficulty ও job-exam fit পরীক্ষা।
- বাদ দেওয়ার আগে exclusion ledger; প্রয়োজনীয় চারটি কঠিন arithmetic replacement অন্তর্ভুক্ত।
- substantive audit ও app/source integration শেষ না হওয়া পর্যন্ত গণিত **NOT LOCKED** থাকবে।

বর্তমান সিদ্ধান্ত: **BASELINE SNAPSHOT VERIFIED — SUBSTANTIVE AUDIT NOT STARTED / NOT LOCKED**।
