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


## ২৫ নভেম্বর ২০২৬ — পরবর্তী অডিট অগ্রগতি
- Current-affairs validator-এর schema mismatch সংশোধন করা হয়েছে: `d` কখনো difficulty, কখনো source date হিসেবে ব্যবহৃত হচ্ছিল; এখন `sourceDate`, ISO-date-যুক্ত `d` বা ISO-date-যুক্ত `difficulty` field থেকে তারিখ শনাক্ত হয়। তারিখ যাচাইয়ে escaped-regex ত্রুটিও ঠিক করা হয়েছে।
- `job-prep-expansion-15.js`-এর বাংলাদেশ FY2026–27 বাজেট, GDP growth target, ২০২৬ জাতীয় নির্বাচন, প্রধানমন্ত্রীর শপথ এবং LDC preparatory-period extension—এই ৫টি প্রশ্নে source date যোগ করা হয়েছে; ৫টির source URL-ও যাচাই/সংশোধন করা হয়েছে। LDC extension-এর তারিখ ২৯ অক্টোবর ২০২৬ এবং নতুন সময়সীমা ২৪ নভেম্বর ২০২৯।
- সংশোধিত validator-এর runtime-এ ২০২৬ current-affairs metadata check আর error দেয়নি। Job-preparation bank **৩,১৪৯টি**, English grammar/vocabulary **৪৬৩টি**, Math **৩০০টি/৩০ লেভেল**, Model Test **৫টি** লোড হয়েছে। Subject-bank duplicate/structure, math checks ও model-test selection-এ কোনো error log হয়নি।
- সামগ্রিক release validation এখনো **FAIL**, তবে বর্তমান ব্যর্থতার কারণ দুটি legacy main-quiz bank-এর release threshold: `ML_CONTENT.questions` = **৫৯৭/১,০০০** এবং `ML_CONTENT.facts` = **৯৭৪/১,০০০**। কোনো প্রশ্ন/তথ্য কৃত্রিমভাবে যোগ করে threshold পূরণ করা হয়নি।
- সর্বশেষ workflow run: `45604597582`; validation ধাপে ওই দুই threshold-এর কারণে ব্যর্থ; regression/UI checks এবং APK build skip হয়েছে।
- সংশোধন commits: `b0ce863` (৫টি ২০২৬ প্রশ্নের sourceDate ও URL), `102809c` (JSON syntax fix), `915619f` এবং `8181fd0` (validator schema support), `0bdfbdb` (date-regex fix)।
- পরবর্তী কাজ: legacy `ML_CONTENT` প্রশ্ন/তথ্য ব্যাংকের ঘাটতি পূরণ বা release target-এর অনুমোদিত পরিবর্তন; এরপর পূর্ণ বাংলা প্রশ্নের factual audit ও final count reconciliation। APK এখনো তৈরি হয়নি।


### Legacy `ML_CONTENT` bank — স্বাধীন structural/duplicate পরীক্ষা
- `content-bank.js` runtime-এ সরাসরি লোড করে পুনরায় পরীক্ষা: **৫৯৭টি প্রশ্ন, ৯৭৪টি fact**।
- প্রশ্নের structural error: **০**; পূর্ণ signature-এ exact duplicate group/copy: **০/০**।
- Facts-এর malformed/empty entry: validator-এ ধরা পড়েনি; exact duplicate group/copy: **০/০**।
- অতএব বর্তমান legacy-bank blocker duplicate বা malformed record নয়; কেবল ঘোষিত release target-এর তুলনায় প্রশ্ন **৪০৩টি** এবং fact **২৬টি** কম।

## ২৫ নভেম্বর ২০২৬ — বাংলা runtime reconciliation (যাচাইকৃত)
- GitHub Actions run `45624336694`-এ main branch-এর সব job-preparation script ও expansion batch load করে runtime count পাওয়া গেছে।
- বাংলা ভাষা ও সাহিত্য: **৪০৩টি প্রশ্ন**।
- বাংলা malformed structure: **০টি** (প্রশ্ন, চারটি option, answer index—validator-এর কাঠামোগত নিয়মে)।
- বাংলা exact duplicate: **০টি** (runtime-এ canonical signature: normalized category + normalized question + sorted options + correct answer)।
- English grammar/vocabulary: **৪৬৩টি** — অপরিবর্তিত।
- Job-preparation মোট: **৩,১৪৯টি** প্রশ্ন।
- এই ফলাফল বাংলা প্রশ্নব্যাংকের **সংখ্যা, কাঠামো ও হুবহু duplicate যাচাই** নিশ্চিত করে; উত্তর/ব্যাখ্যার সত্যতা, ভাষাগত শুদ্ধতা, বানান, দ্ব্যর্থতা ও প্রশ্নের মানের মানবীয় বিষয়বস্তু-অডিট এখনো সম্পন্ন নয়। তাই বাংলা ব্যাংককে এখনো চূড়ান্ত বলা হচ্ছে না।
- একই workflow-তে সামগ্রিক validation ব্যর্থ হয়েছে কেবল legacy `ML_CONTENT` release threshold-এর কারণে: প্রশ্ন ৫৯৭/১,০০০ এবং facts ৯৭৪/১,০০০। এই কারণে regression/UI checks ও Android build skip হয়েছে; APK তৈরি হয়নি।
- Workflow: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45624336694

## বাংলা বিষয়বস্তু অডিট — ব্যাচ ১–৭ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ১–৭-এর সব বাংলা রেকর্ড থেকে **৩১টি প্রশ্ন** নিয়ে প্রশ্ন, চারটি বিকল্প, keyed answer এবং explanation মিলিয়ে দেখা হয়েছে।
- এই ৩১টির মধ্যে নিশ্চিত ভুল keyed answer বা ব্যাখ্যা শনাক্ত হয়নি।
- ‘সবার উপরে মানুষ সত্য…’ প্রশ্নটির উত্তর চণ্ডীদাস—প্রচলিত সাহিত্য/নিয়োগ-পরীক্ষার রেফারেন্সে সমর্থিত; ব্যাখ্যায় “চণ্ডীদাসের নামে বহুল পরিচিত” বলা হয়েছে, তাই নির্দিষ্ট চণ্ডীদাসের পরিচয় নিয়ে অতিরিক্ত দাবি করা হয়নি।
- এই ধাপটি ব্যাচ ১–৭-এর ৩১টি প্রশ্নের প্রাথমিক বিষয়বস্তু পর্যালোচনা; পূর্ণ ৪০৩ প্রশ্নের factual/linguistic audit নয়। পরবর্তী ব্যাচগুলোর review বাকি।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ৮–১৪ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ৮–১৪-এর বাংলা রেকর্ড থেকে **৩৬টি প্রশ্ন**; প্রশ্ন, বিকল্প, সঠিক উত্তর ও ব্যাখ্যা মিলিয়ে পর্যালোচনা করা হয়েছে।
- এই পর্যালোচনায় নিশ্চিত ভুল keyed answer বা ব্যাখ্যা পাওয়া যায়নি।
- একই সাহিত্যকর্ম/বিষয় নিয়ে একাধিক প্রশ্নে option set আলাদা থাকায় সেগুলো exact duplicate নয়; নির্ধারিত নীতি অনুযায়ী রাখা হয়েছে।
- ব্যাচ ১–১৪ মিলিয়ে প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **৬৭টি**। অবশিষ্ট runtime bank-এর পূর্ণ ৪০৩ প্রশ্নের content audit চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ১৫–১৯ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ১৫–১৯ থেকে **২৮টি বাংলা প্রশ্ন**; keyed answer, বিকল্প ও ব্যাখ্যা পর্যালোচনা করা হয়েছে।
- এই নমুনায় নিশ্চিত ভুল keyed answer শনাক্ত হয়নি।
- ব্যাচ ২০-এ বাংলা ভাষা ও সাহিত্যের কোনো প্রশ্ন পাওয়া যায়নি।
- ব্যাচ ১–১৯ পর্যন্ত মোট প্রাথমিকভাবে পর্যালোচিত প্রশ্ন: **৯৫টি** (আগের ৬৭ + এই ধাপের ২৮)। পূর্ণ ৪০৩টির অডিট এখনো অসমাপ্ত; যাচাই ছাড়া বাকি প্রশ্নকে নির্ভুল ঘোষণা করা হয়নি।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ২১–২৬
- ব্যাচ ২১–২৬ থেকে **১১টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ২১-এ বাংলা প্রশ্ন ছিল না।
- ‘বিদ্রোহী’ কবিতার প্রথম প্রকাশ-সংক্রান্ত প্রশ্নে প্রকাশনা-ইতিহাসের মতভেদ ব্যাখ্যায় স্পষ্টভাবে উল্লেখ আছে; একক বিতর্কিত তথ্যকে নিঃশর্ত সত্য হিসেবে উপস্থাপন করা হয়নি।
- এই ১১টির মধ্যে নিশ্চিত ভুল keyed answer শনাক্ত হয়নি।
- ব্যাচ ১–২৬ পর্যন্ত প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্নের সংখ্যা: **১০৬টি**। অবশিষ্ট ২৯৭টি প্রশ্নের অডিট চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ২৭–৩২
- ব্যাচ ২৭–৩২ থেকে **২৫টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ৩২-এ বাংলা প্রশ্ন ছিল না।
- উত্তরসূচি ও ব্যাখ্যায় নিশ্চিত ভুল শনাক্ত হয়নি। সাহিত্যকর্মের পরিচয়, ব্যাকরণ, প্রকাশকাল ও প্রকাশনা-সংক্রান্ত দাবিগুলোতে প্রশ্নের সীমা ও ব্যাখ্যার সামঞ্জস্যও দেখা হয়েছে।
- ব্যাচ ১–৩২ পর্যন্ত মোট প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **১৩১টি** (পূর্ববর্তী ১০৬ + ২৫)। অবশিষ্ট ২৭২টি প্রশ্নের অডিট চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ৩৩–৩৮
- ব্যাচ ৩৩–৩৮ থেকে **২৪টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ৩৫ ও ৩৭-এ বাংলা প্রশ্ন ছিল না।
- এই নমুনায় উত্তরসূচি/ব্যাখ্যার নিশ্চিত ভুল পাওয়া যায়নি। সাহিত্যকর্ম, চরিত্র, লেখক, ভাষা-ব্যাকরণ ও বাগধারার উত্তর মিলিয়ে দেখা হয়েছে।
- ব্যাচ ১–৩৮ পর্যন্ত প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **১৫৫টি**। runtime count ৪০৩-এর মধ্যে অবশিষ্ট **২৪৮টি** প্রশ্নের বিষয়বস্তু-অডিট বাকি।

## লিগ্যাসি কনটেন্ট ব্যাংক — সংযোজনের অগ্রগতি
- ব্যবহারকারীর অনুমোদিত সিদ্ধান্ত: বিদ্যমান ১,০০০ প্রশ্ন/১,০০০ facts ভ্যালিডেশন সীমা বহাল রেখে ঘাটতি পূরণে যাচাইকৃত ও স্বতন্ত্র কনটেন্ট যোগ করা হবে; সীমা কমানো হবে না।
- প্রকৃত ফাইলের অবস্থান শনাক্ত: `app/src/main/assets/content-bank.js`।
- সংযোজন ব্যাচ ০১-এ ৩০টি স্থায়ী সাধারণ জ্ঞান/বিজ্ঞান/ভূগোল/বাংলাদেশ/ইতিহাস/সাহিত্য/প্রযুক্তি/গণিত/পরিবেশভিত্তিক প্রশ্ন এবং ২৬টি স্বতন্ত্র তথ্য যোগ করা হয়েছে।
- নতুন কনটেন্ট source file-এ সংরক্ষিত; runtime dedup filter একই category-র একই প্রশ্ন-শিরোনাম বা একই fact পুনরাবৃত্ত হলে বাদ দেবে।
- এই ব্যাচের পর স্বয়ংক্রিয় CI ফলাফল যাচাই বাকি। CI-তে গণনা নিশ্চিত না হওয়া পর্যন্ত ৩০/৪০৩ বা facts-এর চূড়ান্ত নিট বৃদ্ধি হিসেবে দাবি করা হচ্ছে না।
- পরবর্তী কাজ: CI লগে প্রকৃত প্রশ্ন/fact count ও duplicate/structure error যাচাই; তারপর পরবর্তী ব্যাচে বাকি ঘাটতি পূরণ। একই সঙ্গে বাংলা বিষয়বস্তু অডিটের অবশিষ্ট ২৪৮টি প্রশ্ন পর্যালোচনা চলবে।

- CI run `45626619593`-এ ব্যাচ ০১-এর পর যাচাই: প্রশ্ন ৬১৯, facts ১,০০০; facts-এর লক্ষ্য পূরণ হয়েছে। প্রশ্ন এখনো ৩৮১টি কম। ব্যাচ ০১-এর ৩০টি raw প্রশ্নের মধ্যে runtime dedup-এর পর নিট বৃদ্ধি ২২টি।
- ব্যাচ ০২-এ আরও ৫০টি সাধারণ জ্ঞান/বিজ্ঞান/ভূগোল/বাংলাদেশ/ইতিহাস/সাহিত্য/প্রযুক্তি/গণিত/পরিবেশ প্রশ্ন যোগ করা হয়েছে। CI ফলাফল অপেক্ষমাণ।


## ২৫ নভেম্বর ২০২৬ — বাংলা অডিট পুনর্মিলন (সর্বশেষ CI)
- batch 02 সংযোজনের পর GitHub Actions run `45627729747`-এ runtime Bengali subject count **৪০৬টি**; malformed **০টি**; canonical signature-এ exact duplicate **০টি**।
- English grammar/vocabulary **৪৬৩টি** — অপরিবর্তিত।
- একই run-এ legacy main quiz bank: **৬৫৯টি প্রশ্ন / ১,০০০ facts**। facts threshold পূরণ; প্রশ্নের threshold ১,০০০-এর তুলনায় **৩৪১টি কম**। এ কারণে validation FAIL; regression/UI checks ও APK build skip হয়েছে।
- আগের অডিট নোটে ৪০৩টির মধ্যে ১৫৫টি reviewed এবং ২৪৮টি বাকি বলা হয়েছিল। বর্তমান runtime count ৪০৬ হওয়ায় ওই review denominator-এর সঙ্গে বর্তমান প্রশ্নগুলোর ID-ভিত্তিক পুনর্মিলন এখনো হয়নি। তাই **১৫৫/৪০৬ বা ২৫১ বাকি—কোনোটিকেই আপাতত যাচাইকৃত চূড়ান্ত অডিট-গণনা বলা হচ্ছে না**।
- বাংলা প্রশ্নব্যাংকের চূড়ান্ত বিষয়বস্তু-অডিটের আগে প্রতিটি runtime Bengali question ID-কে review ledger-এর সঙ্গে মেলাতে হবে; অনুপস্থিত/নতুন প্রশ্ন আলাদা করে পর্যালোচনা করতে হবে। কাঠামো ও duplicate check PASS হলেও factual/linguistic audit অসম্পূর্ণ।
- সর্বশেষ validation workflow: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45627729747


## ২৫ নভেম্বর ২০২৬ — বাংলা বিষয়বস্তু অডিট সমাপ্তির নোট
- মূল চাকরি-প্রস্তুতি ফাইলের ১২৭টি বাংলা প্রশ্ন এবং expansion/numbered expansion ফাইলের বাংলা রেকর্ডগুলো ব্যাচ ধরে পর্যালোচনা করা হয়েছে। বাংলা প্রশ্ন নেই এমন ব্যাচও আলাদা করে শনাক্ত করা হয়েছে; কেবল আগের review ledger-এর যোগফল ধরে অডিট সম্পন্ন বলা হয়নি।
- সর্বশেষ যাচাইকৃত runtime count **৪০৬টি বাংলা প্রশ্ন**; validator-এ malformed **০**, canonical exact duplicate **০**। ৪০৬টি প্রশ্নের উত্তরসূচি, বিকল্প ও ব্যাখ্যার বিষয়বস্তু পর্যালোচনা করা হয়েছে।
- অডিটে একটি দ্ব্যর্থক এক কথায় প্রকাশের প্রশ্ন শনাক্ত হয়েছে: `extra_209`-এ “ইতিহাসবিদ” ও “ইতিহাসকার”—দুটিই সম্ভাব্য উত্তর হতে পারত। distractor “ইতিহাসবিদ” বদলে “ইতিহাসপাঠক” করা হয়েছে; সঠিক উত্তর “ইতিহাসকার” অপরিবর্তিত। Commit: `68c1bca017fa2a0927835c14e263a2338fe39bd2`।
- “সবার উপরে মানুষ সত্য…” পঙ্‌ক্তির ক্ষেত্রে চণ্ডীদাস-নামটি প্রচলিত attribution হিসেবে রাখা হয়েছে; ব্যাখ্যাতেও “চণ্ডীদাসের নামে বহুল পরিচিত/প্রচলিত” বলা আছে। “বিদ্রোহী” কবিতার প্রথম প্রকাশ-সংক্রান্ত প্রশ্নে প্রকাশনা-ইতিহাসের মতভেদ ব্যাখ্যায় উল্লেখিত। বাংলা ভাষার প্রাচীন উৎসে মাগধী প্রাকৃতের সম্পর্কটিও প্রচলিত ভাষা-ইতিহাসের পাঠ্যবইভিত্তিক ব্যাখ্যা হিসেবে সীমাবদ্ধ রাখা হয়েছে।
- অতএব বাংলা ব্যাংকের **বিষয়বস্তু-পর্যালোচনা সম্পন্ন**। পরবর্তী push-এর CI run `45632197708`-এ পুনরায় নিশ্চিত: বাংলা ৪০৬, malformed ০, exact duplicate ০; মোট job-preparation ৩,১৯১; English ৪৬৩। এই audit status মানে প্রতিটি ঐতিহাসিক/ভাষাতাত্ত্বিক মতভেদের একাডেমিক বিতর্ক নিষ্পত্তি নয়।
- English grammar/vocabulary **৪৬৩টি — অপরিবর্তিত ও locked**; ইংরেজি ব্যাংকে কোনো পরিবর্তন করা হয়নি।
- এই ধাপে নতুন বাংলা তথ্য যোগ করা হয়নি। বাংলা অডিট শেষ হওয়ার পরই পৃথক ধাপে নতুন, যাচাইকৃত ও স্বতন্ত্র তথ্য যোগ করা হবে।

- বাংলা অডিট-সংশোধনের পরের CI run: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45632197708 । Validation এখনো FAIL শুধু legacy ML_CONTENT প্রশ্ন ৬৫৯/১,০০০ (ঘাটতি ৩৪১); facts ১,০০০/১,০০০। বাংলা malformed/duplicate বা English ৪৬৩-এ কোনো ব্যর্থতা নেই। APK build আগের মতোই validation gate-এ আটকে আছে।


## ২৫ নভেম্বর ২০২৬ — বাংলা ও ইংরেজি লক; ১,০০০ প্রশ্নের লক্ষ্য পূরণ
- বাংলা ভাষা ও সাহিত্য ব্যাংক: **৪০৬টি — LOCKED**। Validator-এ ঠিক ৪০৬টি থাকার শর্ত যোগ করা হয়েছে; malformed ০ এবং canonical exact duplicate ০।
- English grammar/vocabulary: **৪৬৩টি — LOCKED**। Validator-এ ঠিক ৪৬৩টি থাকার শর্ত যোগ করা হয়েছে। কোনো ইংরেজি প্রশ্ন পরিবর্তন করা হয়নি।
- মূল সাধারণ কুইজ ব্যাংকে নতুন সংযোজন ব্যাচ ০৩ ও পরিপূরক ব্যাচ যোগের পর সর্বশেষ CI-তে **১,০১৭টি স্বতন্ত্র প্রশ্ন** এবং **১,০০০টি facts** পাওয়া গেছে। প্রশ্নের ন্যূনতম ১,০০০ লক্ষ্যমাত্রা ১৭টি বেশি পূরণ হয়েছে।
- সর্বশেষ CI run `45633211550`: content validation PASSED; regression safety PASSED; release UI smoke checks **১৭/১৭ PASSED**। বাংলার ৪০৬ এবং ইংরেজির ৪৬৩—দুটিই অপরিবর্তিত ও locked হিসেবে যাচাই হয়েছে।
- নতুন সাধারণ কুইজ প্রশ্ন সংযোজনের পর মূল কুইজ ব্যাংকের duplicate filter সক্রিয় ছিল; চূড়ান্ত ১,০১৭ গণনা runtime unique question count।
- APK build/upload ধাপ এই run-এ skipped ছিল; তাই CI validation সফল হলেও নতুন APK তৈরি হয়েছে—এমন দাবি করা হচ্ছে না।
- পরবর্তী পরিবর্তন: নতুন সাধারণ জ্ঞান সংযোজন বা বাংলা/ইংরেজি locked ব্যাংকে কোনো পরিবর্তন করার আগে আলাদা অনুমোদন ও পুনঃঅডিট আবশ্যক।


## Android build trigger — ২৫ নভেম্বর ২০২৬
- ব্যবহারকারীর নির্দেশে validation সফল হওয়ার পর Android Debug APK, signed Release APK এবং Play Store AAB তৈরির workflow trigger করা হয়েছে। Build সফল ও artifacts প্রকাশিত না হওয়া পর্যন্ত APK প্রস্তুত বলে গণ্য হবে না।

## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — ব্যাচ ১–৫ অডিট (২৫ নভেম্বর ২০২৬)
- নিরীক্ষার পরিধি: expansion batch ১–৫ (job-prep-expansion.js, job-prep-expansion-02.js থেকে -05.js)। এই পাঁচ ফাইলে মোট ১৬৪টি রেকর্ড শনাক্ত; এর মধ্যে বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিভাগের ১৭টি প্রশ্ন আলাদা করে পর্যালোচনা করা হয়েছে।
- ১৭টি প্রশ্নের প্রশ্নবাক্য, চারটি বিকল্প, উত্তরসূচি ও ব্যাখ্যা যাচাই করা হয়েছে। প্রাথমিক ব্যাচগুলোর নিজেদের মধ্যে canonical full signature-এ exact duplicate পাওয়া যায়নি।
- মূল job-prep-suite.js-এর সাধারণ জ্ঞান ব্যাংকের সঙ্গে তুলনায় ২টি exact duplicate পাওয়া যায়: extra_094 (WHO সদর দপ্তর) এবং extra_131 (জাতীয় কবি)। দুই অতিরিক্ত কপি সংশ্লিষ্ট expansion ফাইল থেকে বাদ দেওয়া হয়েছে; মূল suite-এর প্রশ্ন অক্ষত আছে।
- অবশিষ্ট ১৫টি স্বতন্ত্র প্রশ্ন রাখা হয়েছে। ভিন্ন option set-সহ একই প্রশ্নবাক্যের ক্ষেত্রে নির্ধারিত নীতি অনুসরণ করে সেগুলো রাখা হয়েছে।
- বিষয়বস্তু সংশোধন/স্পষ্টীকরণ:
  1. extra_012: বঙ্গবন্ধু স্যাটেলাইট-১ প্রশ্নের ভুল সাহিত্য-সংক্রান্ত source label সংশোধন করে পররাষ্ট্র মন্ত্রণালয়ের তথ্যসূত্র যুক্ত।
  2. extra_015: সেন্ট মার্টিনকে সরাসরি “প্রবাল দ্বীপ” বলার ভূতাত্ত্বিক অস্পষ্টতা দূর করে প্রবাল কলোনি পাওয়া যায়—এভাবে প্রশ্ন ও ব্যাখ্যা নির্দিষ্ট করা হয়েছে।
  3. extra_091: বাংলাদেশের বর্তমান মানচিত্রবিহীন পতাকার নকশা চূড়ান্ত করার কৃতিত্ব সম্পর্কে প্রশ্নটি স্পষ্ট করা হয়েছে; ১৯৭১ সালের প্রথম পতাকায় শিবনারায়ণ দাসের ভূমিকার কথাও ব্যাখ্যায় আলাদা করা হয়েছে।
- যাচাই করা গুরুত্বপূর্ণ তথ্যের মধ্যে বঙ্গবন্ধু-১, সংবিধান গৃহীত/কার্যকর হওয়ার তারিখ, WHO সদর দপ্তর, জাতিসংঘ প্রতিষ্ঠা, SAARC প্রতিষ্ঠা, বিশ্বব্যাংকের সদর দপ্তর, জাতীয় স্মৃতিসৌধের স্থপতি এবং খালেদা জিয়ার প্রথম নারী প্রধানমন্ত্রী হওয়া অন্তর্ভুক্ত।
- GitHub-এ সংরক্ষিত commits: b0d5a39, e08ef15, 69b54f6। এই ধাপের অডিট সম্পন্ন; পরবর্তী ধাপে যাওয়ার আগে এই রেকর্ডই ধারাবাহিকতার ভিত্তি।
- এই ফলাফল কেবল বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিষয়ের ব্যাচ ১–৫-এর জন্য; ব্যাচ ৬–১০ এখনো শুরু হয়নি।
