# বাংলা ও ইংরেজি প্রশ্নব্যাংক অডিট — স্থায়ী অগ্রগতি

তারিখ: ২৫ নভেম্বর ২০২৬

## ইংরেজি — চূড়ান্ত ফলাফল লক
- মোট উৎস এন্ট্রি: ৪৮৭
- হুবহু পুনরাবৃত্তি: ২৪
- স্বতন্ত্র প্রশ্ন: **৪৬৩**
- চূড়ান্ত সংখ্যা **৪৬৩** — স্থির/লক করা; বাংলা অডিটে এটি পুনরায় গণনা বা পরিবর্তন করা হবে না।
- ইংরেজি প্রশ্নের পূর্ববর্তী সংশোধনসমূহ বহাল। এই পর্যায়ের বাংলা duplicate cleanup-এ ইংরেজি প্রশ্ন মুছে ফেলা হয়নি।
- Android release build এখনো অডিট-পরবর্তী যাচাইসহ সম্পন্ন হয়নি।

## বাংলা — duplicate cleanup চলমান; বিষয়বস্তুর নিরীক্ষা বাকি
- মূল `job-prep-suite.js`-এ মোট Q() এন্ট্রি parser-এ শনাক্ত: **১,১১০টি**; এর মধ্যে বাংলা প্রশ্ন: **৮৭৭টি**।
- মূল suite-এর ভেতরে পূর্ণ signature (normalized category + normalized question + sorted options + correct answer) দিয়ে হুবহু duplicate group: **০**।
- সম্প্রসারণ ব্যাচ ১-এ ৪০টি প্রশ্ন শনাক্ত; বাংলা ৩৫টি। মূল suite-এর সঙ্গে তুলনায় **৫টি বাংলা exact duplicate** মুছে দেওয়া হয়েছে। একটি ইংরেজি overlap অপরিবর্তিত রাখা হয়েছে।
- সম্প্রসারণ ব্যাচ ২–৫৬ এবং মূল suite-এর তুলনায় আরও **৫৩টি বাংলা exact duplicate copy** মুছে দেওয়া হয়েছে।
- সম্প্রসারণ ব্যাচগুলোর নির্বাচিত cross-batch তুলনায় আরও **৭৪টি বাংলা exact duplicate copy** মুছে দেওয়া হয়েছে।
- এই পর্যায়ে মোট **১৭০টি বাংলা exact duplicate copy** GitHub-এর main branch থেকে মুছে দেওয়া হয়েছে। ১–৫০ ব্যাচের পারস্পরিক তুলনায় এবং মূল suite-এর সঙ্গে cross-check-এ নতুন duplicate পাওয়া গেলে সেগুলোও বাদ দেওয়া হয়েছে। এটি source থেকে নিশ্চিত deletion count; চূড়ান্ত runtime unique count নয়।
- পরিবর্তনগুলো GitHub commit-এ সংরক্ষিত। প্রতিটি deletion-এ duplicate signature-এর চারটি উপাদান মিলিয়ে দেখা হয়েছে; একই বিষয়/টপিকের ভিন্ন উদাহরণ ইচ্ছাকৃতভাবে বাদ দেওয়া হয়নি।
- ব্যাচ ৪১–৪৫-এ ১২৫টি রেকর্ড parser-এ শনাক্ত; বাংলা প্রশ্ন ৯৪টি। ওই পাঁচ ব্যাচের ভেতরে, মূল suite-এর সঙ্গে, ৩৬–৪০ এবং ৪৬–৫০ ব্যাচের সঙ্গে পূর্ণ signature-এ তুলনায় কোনো অবশিষ্ট exact duplicate পাওয়া যায়নি। এটি ওই নির্দিষ্ট তুলনার ফল; সব ব্যাচের all-pairs সম্পন্ন হওয়ার দাবি নয়।
- বাংলা unique count এখনো চূড়ান্ত নয়: সব expansion batch-এর মধ্যে পূর্ণ all-pairs cross-check, runtime parsing এবং final reconciliation বাকি।
- প্রশ্নের উত্তর, অপশন, ব্যাখ্যা, বানান, দ্ব্যর্থতা ও ভুল তথ্যের পূর্ণ বিষয়বস্তু-অডিটও বাকি। তাই বাংলা প্রশ্নব্যাংককে এখনো সম্পূর্ণ নির্ভুল/চূড়ান্ত বলা যাবে না।

## সাম্প্রতিক কোড সংশোধন — exact duplicate policy
- `job-prep-suite.js`-এর canonical question key এখন সব subject-এর জন্য category + normalized question + sorted options + correct answer ব্যবহার করে; আগের মতো কিছু category-তে শুধু question text দিয়ে dedup হয় না।
- expansion batch ৩৩–৫০-এর local duplicate filter-ও canonical full signature ব্যবহার করে; একই stem কিন্তু আলাদা options/answer থাকলে প্রশ্ন আর অকারণে বাদ পড়বে না।
- batch ৫৬-এর final dedup pass এখন শুধু English/বাংলা সাহিত্য নয়, সব subject-এ একই full signature প্রয়োগ করে।
- `scripts/validate-content.js`-এর subject-bank duplicate checks ও model-test uniqueness checks-ও একই full signature নীতি অনুসরণ করে।
- `scripts/validate-content.js` এখন `job-prep-expansion.js` এবং ০২–৫৬ সব expansion file মূল app load-order-এ চালিয়ে পূর্ণ expanded bank যাচাই করবে; script syntax যাচাই PASS, কিন্তু পূর্ণ runtime validation এখনো চালানো হয়নি।
- সংশোধন commits: `4d145e0`, `3dd86af`, `947abeb`, `90cd3ff`, `563dc00`, `234150b`, `54ce283`, `a98c592`, `c59c377`, `3fa1054`, `a0b56b5`, `58ff16e`, `76613b5`, `2fed9aa`, `7ceaece`, `afe1e42`, `175fbac`, `255e624`, `ba88a26`, `8be965d`, `4186388`.

## স্থির অডিট নীতি
- English final result: **৪৬৩টি unique প্রশ্ন** — অপরিবর্তিত ও লক।
- কেবল হুবহু duplicate copy বাদ।
- একই বিষয় যাচাই করা ভিন্ন উদাহরণ, ভিন্ন option set বা ভিন্ন সঠিক উত্তর থাকলে প্রশ্ন রাখা।
- duplicate signature: normalized category + normalized question + sorted options + correct answer; option order উপেক্ষা করা হয়।
- প্রমাণিত ভুল ছাড়া প্রশ্নের উত্তর/বিষয়বস্তু নীরবে পরিবর্তন নয়।
- উভয় বিষয়ের audit ও স্বয়ংক্রিয় content validation সফল হওয়ার পরেই BUILD-trigger commit দিয়ে Android Debug APK, signed Release APK এবং AAB তৈরি হবে।
- Build ফলাফল ও artifact যাচাই না হওয়া পর্যন্ত APK প্রস্তুত বলে দাবি করা যাবে না।

## পরবর্তী কাজ
১. expansion batch-গুলোর অবশিষ্ট all-pairs duplicate cross-check সম্পন্ন করা; ১–৫০-এর মূল suite-সংযোগসহ বহু cross-group তুলনা সম্পন্ন, তবে পূর্ণ runtime reconciliation বাকি।
২. বাংলা প্রশ্নের উত্তর, option, ব্যাখ্যা, বানান, ambiguity ও factual accuracy audit করা।
৩. বাংলা unique final count runtime-এ যাচাই করে স্থির করা।
৪. বাংলা + ইংরেজির চূড়ান্ত audit report তৈরি করা; English ৪৬৩ অপরিবর্তিত থাকবে।
৫. validation সফল হলে Android build ও artifact verification।


## পূর্ণ runtime validation — ২৫ নভেম্বর ২০২৬ (সর্বশেষ পরীক্ষা)
- `scripts/validate-content.js`-এ অনুপস্থিত `node:path` import শনাক্ত করে সংশোধন করা হয়েছে; এখন main suite এবং সব expansion file load করে runtime পরীক্ষা চলে।
- validator-এর non-math subject threshold-এ `গণিত` ও `Math` category-কে ভুলভাবে non-math subject হিসেবে গণনা করার ত্রুটি সংশোধন করা হয়েছে।
- runtime-এ চাকরি-প্রস্তুতি subject bank: **৩,১৪৯টি প্রশ্ন**; English grammar/vocabulary: **৪৬৩টি**। ইংরেজির ৪৬৩টি প্রশ্ন অপরিবর্তিত।
- ৫টি model test এবং ৩০০টি math প্রশ্ন/৩০টি level runtime-এ load হয়েছে। structure, option count, answer index, duplicate signature এবং model-test selection checks-এ আলাদা কোনো error পাওয়া যায়নি।
- বর্তমান affairs category-তে **১০৩টি entry**-র dated source metadata অসম্পূর্ণ/ভুল: কিছুতে date ফাঁকা, কিছুতে date-এর জায়গায় difficulty label (`সহজ/মাঝারি`) আছে, আবার কিছু timeless general-knowledge প্রশ্ন current-affairs category-তে আছে। এগুলো যাচাই ও সংশোধন বাকি; কোনো date বা source অনুমান করে বসানো হয়নি।
- legacy `ML_CONTENT` bank-এ ৫৯৭টি প্রশ্ন (release threshold ১,০০০-এর কম) এবং ৯৭৪টি fact (threshold ১,০০০-এর কম); এই দুই ঘাটতির কারণে validator এখনো FAIL।
- তাই full runtime loading সফল হলেও overall release validation **FAIL**; regression checks, release UI checks এবং APK build এই run-এ চালু হয়নি। বাংলা বিষয়বস্তুর factual audit-ও এখনো সম্পন্ন নয়।
- সংশ্লিষ্ট commit: `500e32c` (path import), `6de1e1d` (math category threshold), `d430405` (missing current-affairs metadata diagnostics)।
