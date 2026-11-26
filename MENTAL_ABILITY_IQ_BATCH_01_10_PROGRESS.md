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


## বিষয়ভিত্তিক শ্রেণিবিন্যাস — প্রাথমিক source inspection (২৭ নভেম্বর ২০২৬)
- ব্যবহারকারীর নির্দেশ অনুসারে LOCK-এর আগে content audit-এর সঙ্গেই subject-fit classification শুরু হয়েছে।
- বর্তমান main source পুনরায় পরীক্ষা করে `job-prep-suite.js`-এ `Q('মানসিক দক্ষতা ও IQ', ...)` ফরম্যাটে **১১৬টি** record পাওয়া গেছে; আগের inventory-তে লেখা ১৫০টির সঙ্গে অমিল। এই ৩৪টির পার্থক্য resolve না করে ১৫০-কে verified count বলা হবে না।
- Expansion batch ০১–১০-এর JSON record-এ category `মানসিক দক্ষতা ও IQ` হিসেবে **৪৪টি** প্রশ্ন পাওয়া গেছে; file-by-file পুরোনো inventory count-এর সঙ্গে মিলিয়ে final source map পুনরায় তৈরি হবে।
- তাই বর্তমানে সরাসরি source scan-এ শনাক্ত scope **১৬০টি (১১৬ base + ৪৪ expansion)**; এটি final bank count নয়, কারণ base inventory discrepancy এবং final runtime/load-order reconciliation বাকি।
- প্রাথমিকভাবে Quantitative Aptitude/গণিতের জন্য flag করা হয়েছে: সরাসরি শতকরা/ছাড়/লাভ-ক্ষতি, গড়, গতি-দূরত্ব, কাজ-সময়, অনুপাত/ভগ্নাংশের প্রয়োগ, সম্ভাব্যতা, LCM/HCF এবং জ্যামিতির ক্ষেত্রফল/পরিসীমার formula-based item। উদাহরণ: base source lines 175, 187, 193, 202, 485, 567, 845–846, 979–983, 1003–1006, 1029–1033, 1056–1058, 1081–1083, 1136–1140, 1177; expansion IDs extra_030, extra_066, extra_069, extra_106, extra_109, extra_110, extra_146, extra_147, extra_149, extra_150, extra_264, extra_302, extra_303, extra_304, extra_388।
- এগুলো এখনো **প্রস্তাবিত classification**, final transfer নয়। যেমন clock/calendar, ranking, series, coding, syllogism, lateral-thinking, handshake-combination এবং pattern-based numerical reasoning IQ/Reasoning-এ থাকবে। Probability, age/work-rate, ratio ও remainder-এর মতো boundary cases প্রশ্নের cognitive demand দেখে একে একে সিদ্ধান্ত হবে।
- কোনো runtime category এখনো পরিবর্তন করা হয়নি; অন্য subject-এ স্থানান্তরের আগে locked Math master-এর সঙ্গে exact-signature duplicate check এবং validator reconciliation করতে হবে।
- পরবর্তী ধাপ: (১) ১৫০ বনাম ১১৬ base count discrepancy resolve, (২) ১৬০টি source record-এর item-wise content/answer/explanation/ambiguity audit, (৩) সব boundary case-সহ final subject classification, (৪) master ও runtime exact reconciliation। **IN_PROGRESS / NOT LOCKED**।


## Source inventory discrepancy — resolved (২৭ নভেম্বর ২০২৬)
- আগের প্রাথমিক scan-এ শুধু single-quote `Q('মানসিক দক্ষতা ও IQ',...)` format ধরা হয়েছিল; double-quote `Q("মানসিক দক্ষতা ও IQ",...)` format-এর ৩৪টি record বাদ পড়েছিল।
- উভয় quote format মিলিয়ে main runtime source-এ **১৫০টি base record** নিশ্চিত: single-quote ১১৬ + double-quote ৩৪।
- Expansion batch ০১–১০-এ **৪৪টি** IQ record; সুতরাং প্রকৃত source inventory **১৯৪টি** (১৫০ + ৪৪)। পূর্বে লেখা ১১৬/১৬০ interim count বাতিল; এটি source parser-এর অসম্পূর্ণতার ফল, runtime bank-এর ঘাটতি নয়।
- শ্রেণিবিন্যাসের কাজ চলমান; কোনো প্রশ্ন সরানো বা runtime category পরিবর্তন এখনো করা হয়নি। **IN_PROGRESS / NOT LOCKED**।


## Base content review ও subject classification update (২৭ নভেম্বর ২০২৬)
- Main suite-এর IQ category-র **১৫০টি base প্রশ্ন** item-by-item review: প্রশ্ন, চার option, keyed answer ও explanation-এর consistency পরীক্ষা সম্পন্ন।
- একটি নিশ্চিত answer-key error ধরা ও সংশোধন: `base_024`-এ ধারার সঠিক উত্তর ২১৬০ (×২, ×৩, ×৪, ×৫, ×৬); ভুল key index ২ থেকে ৩ করা হয়েছে। Runtime re-fetch-এ সংশোধন নিশ্চিত।
- Expansion ০১–১০-এর ৪৪টি reviewed record-এর final exact-signature reconciliation-এ ২টি exact duplicate copy বাদ: `extra_026` → `base_051`, `extra_345` → `base_055`; দুই ID-ই runtime file থেকে অনুপস্থিত re-fetch করে নিশ্চিত।
- বর্তমান inventory: **১৫০ base + ৪২ expansion = ১৯২**; malformed ০, full-signature exact duplicate group ০।
- Subject classification: **৯৮টি** quantitative aptitude/math-এ স্থানান্তরের প্রস্তাব (৮৩ base + ১৫ expansion); **৯৪টি** Mental Ability & IQ-তে রাখার প্রস্তাব (৬৭ base + ২৭ expansion)। বিস্তারিত ID ও নিয়ম `MENTAL_ABILITY_IQ_BASE_CONTENT_REVIEW_001_150.md`।
- প্রস্তাবিত ৯৮টির question/options/answer signature category বাদ দিয়ে locked Math master-এর ৩০০ প্রশ্নের সঙ্গে তুলনা: exact collision ০।
- Math master/runtime source SHA mismatch দেখা গেছে এবং Math runtime generated ৩০-level system; তাই কোনো category এখনো পরিবর্তন বা Math runtime-এ স্থানান্তর করা হয়নি। Migration path/source reconciliation বাকি; **IN_PROGRESS / NOT LOCKED**।


## Math source SHA reconciliation (২৭ নভেম্বর ২০২৬)
- Math master-এর recorded source blob (`4404ff9bd1c0b03ee9b4c8370ab0e83400746158`) এবং current `math-levels.js` SHA আলাদা ছিল।
- দুই source content line-by-line তুলনায় পার্থক্য মাত্র **২টি line**: পুরোনো interstitial launcher logic এবং level-completion AdMob callback। ৩০০ প্রশ্নের generator/bank content-এ কোনো line difference পাওয়া যায়নি।
- অতএব এটি question-content drift নয়; post-lock ad-integration change। Math ৩০০-question LOCK অক্ষত। IQ-এর ৯৮টি quantitative candidate Math-এর ৩০০ master-এর সঙ্গে exact duplicate collision ০; কিন্তু এগুলো যোগ করার জন্য Math module-এ পৃথক supplementary practice integration প্রয়োজন, যা এখনো করা হয়নি।
- Classification master: `MENTAL_ABILITY_IQ_CLASSIFICATION_MASTER_BATCH_01_10.json` — ১৯২ record; proposed Math ৯৮, retain IQ ৯৪; status `CLASSIFICATION_REVIEWED_PENDING_RUNTIME_MIGRATION_NOT_LOCKED`।


## পরিমাণগত দক্ষতা আলাদা অনুশীলন — ২৭ নভেম্বর ২০২৬
- মানসিক দক্ষতা ও IQ-এর অডিটকৃত ১৯২টি অনন্য প্রশ্নের মধ্যে ৯৮টি শতকরা, গড়, লাভ-ক্ষতি, অনুপাত, বয়স/কাজ, গতি-দূরত্ব, সম্ভাবনা, বীজগণিত ও ক্ষেত্রফলভিত্তিক প্রশ্ন আলাদা **“পরিমাণগত দক্ষতা অনুশীলন”** বিভাগে স্থানান্তরের জন্য runtime-এ শ্রেণিবিন্যাস কোড যোগ করা হয়েছে।
- IQ বিভাগে রাখার জন্য নির্ধারিত প্রশ্ন: **৯৪টি**।
- মূল গণিতের ৩০ লেভেলের ৩০০ প্রশ্ন অপরিবর্তিত; নতুন ৯৮টি প্রশ্ন আলাদা অনুশীলন বিভাগে থাকবে, মূল গণিত ব্যাংকে মেশানো হয়নি।
- নতুন বিভাগে ১০টি করে প্রশ্নের ধারাবাহিক লেভেল হবে; ৯৮ প্রশ্নে ৯টি পূর্ণ লেভেল ও শেষ লেভেলে ৮টি প্রশ্ন।
- Runtime পরিবর্তন commits: `68d77f6`, `8f0c8c7`।
- **এখনো LOCK নয়:** GitHub Actions-এ বাস্তব runtime count (৯৮/৯৪), malformed/duplicate validation, regression এবং release build সফলভাবে যাচাই হওয়ার পরই IQ বিভাগ চূড়ান্ত LOCK করা হবে।


### Runtime count reconciliation (27-11-2026)
- CI found that the full loaded IQ runtime bank includes later expansion batches beyond the first audited 10-batch group. Therefore the total live IQ pool was 311, not 192.
- Exactly 98 individually reviewed quantitative questions are now reclassified into **পরিমাণগত দক্ষতা অনুশীলন**.
- IQ runtime retains **213**: 94 reviewed IQ questions from this checkpoint + 119 questions from later batches that remain untouched and pending their own 10-batch audit.
- This avoids silently dropping later-batch questions or falsely reporting them as audited. The first 10-batch classification is migrated; the subject is **not LOCKED** until the later batches are audited and final count is reconciled.
