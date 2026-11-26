# মানসিক দক্ষতা ও IQ — ব্যাচ ০১–১০ অডিট অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: IN_PROGRESS — LOCK করা হয়নি

## GitHub source inventory
- মূল runtime bank: `app/src/main/assets/job-prep-suite.js` — ১৫০টি IQ/মানসিক দক্ষতা প্রশ্ন।
- Expansion batch ১–১০: ৪৪টি candidate প্রশ্ন।
- মোট যাচাইয়ের আওতায়: ১৯৪টি প্রশ্ন।
- Expansion file অনুযায়ী: batch ১=৫, ২=৪, ৩=৫, ৪=৫, ৫=৩, ৬=৪, ৭=৫, ৮=৬, ৯=৪, ১০=৩।

## কাঠামোগত ও ডুপ্লিকেট পরীক্ষা
- মূল ব্যাংকের ১৫০টি Q() record সম্পূর্ণ parse হয়েছে।
- Expansion-এর ৪৪টি JSON record সম্পূর্ণ parse হয়েছে।
- চারটি option ও বৈধ answer index: সব ১৯৪টিতে কাঠামোগতভাবে ঠিক।
- normalized question + sorted option set + correct answer signature দিয়ে মূল ব্যাংক ও expansion মিলিয়ে exact duplicate group: ০।
- এই ফল কেবল exact duplicate-এর জন্য; বিষয়গত/near-duplicate review আলাদা।

## Content review ও সংশোধন
- Expansion ১–১০-এর ৪৪টি প্রশ্নের উত্তর ও ব্যাখ্যা পর্যালোচনা করা হয়েছে।
- `extra_070`: ৬:৩০-এ ঘণ্টা ও মিনিটের কাঁটার ক্ষুদ্রতর কোণ ১৫°—answer index 0 সঠিক। ব্যাখ্যার শেষে থাকা বিভ্রান্তিকর “সংশোধন” শব্দ সরিয়ে গাণিতিক ধাপ স্পষ্ট করা হয়েছে।
- সংশোধিত ফাইল: `app/src/main/assets/job-prep-expansion-02.js`।
- Correction commit: 77bdb64ea28fcfa4e12594f6c99f286c087d3833
- Expansion-এ কয়েকটি প্রশ্ন শতকরা, গড়, ছাড়, বেগ-দূরত্ব ও ক্ষেত্রফলভিত্তিক। এগুলো চাকরির পরীক্ষায় প্রাসঙ্গিক হলেও IQ/মানসিক দক্ষতা বিভাগের উপযোগিতা নিয়ে final classification review বাকি।
- মূল ১৫০টি প্রশ্নের পূর্ণ content/answer/explanation audit এখনো শেষ হয়নি; সেগুলোকে audited/locked বলা হচ্ছে না।

## পরবর্তী কাজ
1. Expansion ১–১০-এর বিষয়-উপযোগিতা ও near-duplicate review সম্পন্ন।
2. মূল ১৫০টি প্রশ্নকে ১০টি করে checkpoint-এ content/answer/explanation review; checkpoint ফল GitHub-এ নথিভুক্ত।
3. প্রয়োজনীয় correction ও classification সম্পন্ন করে master reconcile।
4. চূড়ান্ত exact duplicate scan শেষে ১–১০ master LOCK।
5. তারপর ১১–২০ ব্যাচকে locked ১–১০ master-এর সঙ্গে তুলনা।

## Duplicate policy
ব্যবহারকারীর নীতি: হুবহু একই প্রশ্নের অতিরিক্ত কপি বাদ; ভিন্ন উদাহরণ বা ভিন্ন option set থাকলে প্রশ্ন রাখা হবে। Similar topic মাত্রেই duplicate নয়।


## ব্যবহারকারীর নির্দেশে যুক্ত — চূড়ান্ত বিষয়ভিত্তিক শ্রেণিবিন্যাস (২৭ নভেম্বর ২০২৬)
- LOCK দেওয়ার আগে অন্য বাকি content/answer/explanation/near-duplicate audit-এর সঙ্গেই সব ১৯৪টি প্রশ্নের subject-fit classification সম্পন্ন করতে হবে।
- শতকরা, গড়, লাভ-ক্ষতি, ছাড়, বেগ-দূরত্ব, ক্ষেত্রফল ইত্যাদি প্রশ্ন চাকরির পরীক্ষায় প্রয়োজনীয় হলেও কেবল এই কারণে Mental Ability & IQ-তে রাখা যাবে না।
- প্রতিটি প্রশ্নের মূল দক্ষতা/প্রশ্নের ধরন দেখে শ্রেণিবিন্যাস হবে: যুক্তি, pattern, series, coding, analytical reasoning, puzzle, clock/calendar, spatial বা logical problem-solving হলে Mental Ability & IQ; সরাসরি arithmetic/quantitative aptitude হলে গণিত/পরিমাণগত দক্ষতার উপযুক্ত শ্রেণিতে চিহ্নিত হবে।
- কোনো প্রশ্নকে স্বয়ংক্রিয়ভাবে বাদ দেওয়া হবে না। ভিন্ন subject-এ স্থানান্তরের প্রস্তাব থাকলে সংশ্লিষ্ট locked subject master-এর সঙ্গে exact-signature মিলিয়ে এবং নতুন সংযোজন হিসেবে আলাদা validation করে তবেই runtime পরিবর্তন করা যাবে।
- Classification ফল, স্থানান্তর/রাখার সংখ্যা এবং প্রয়োজনীয় runtime পরিবর্তন master ও final report-এ নথিভুক্ত হবে। এই কাজ শেষ না হওয়া পর্যন্ত Mental Ability & IQ **IN_PROGRESS / NOT LOCKED** থাকবে।
