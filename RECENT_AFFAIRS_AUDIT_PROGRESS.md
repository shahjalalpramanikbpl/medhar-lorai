# সাম্প্রতিক ঘটনা — অডিট অগ্রগতি (২৭ নভেম্বর ২০২৬)

## Source inventory
- Runtime source: `app/src/main/assets/job-prep-suite.js`
- Source blob SHA: `d8ce4584068188bb6e3f79e67631d6e778d4b731`
- বর্তমান ক্যাটাগরি: `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান`
- Q() source record: **১৫০টি**।
- প্রতিটি record-এ URL আছে: **১৫০/১৫০**।
- প্রতিটি record-এ তারিখের pattern আছে: **১৫০/১৫০**।
- প্রতিটি record-এ explanation field আছে: **১৫০/১৫০**।
- প্রতিটি record-এ ৪টি option ও ০–৩ answer index-এর structural scan: malformed **০**।
- exact question-text duplicate scan: **০** match। এটি question-text-only scan; normalized question+option-set master comparison এখনো হয়নি।

## গুরুত্বপূর্ণ সতর্কতা
- পূর্বের ১২৫ সংখ্যাটি ভুল; বর্তমান source scan-এ ১৫০টি record।
- ১৫০টি URL/date/structure থাকা মানেই ১৫০টি তথ্যগতভাবে স্বাধীন ও নির্ভুলভাবে fact-check হয়েছে—এমন নয়।
- একই সরকারি গেজেট/একই ঘটনার ভিন্নভাবে জিজ্ঞাসা করা প্রশ্ন আছে; exact-copy নীতি অনুযায়ী শুধু কাছাকাছি বিষয় দেখে বাদ দেওয়া যাবে না।
- কিছু source attribution field-এর নাম/প্রকাশক কাঠামোগত pattern দিয়ে স্বয়ংক্রিয়ভাবে শ্রেণিবদ্ধ করা যায়নি; তাই সেগুলোকে missing source বলা হচ্ছে না, item-wise source identity validation বাকি।
- এখনো কোনো প্রশ্ন সংশোধন/মুছে ফেলা হয়নি; master তৈরি হয়নি; বিষয় **IN_PROGRESS / NOT LOCKED**।

## পরবর্তী যাচাই
1. ১০-ব্যাচ checkpoint হিসেবে প্রকৃত source order অনুযায়ী records ভাগ করা; এগুলো processing checkpoints, মূল source batch দাবি নয়।
2. প্রতি checkpoint-এ আগের consolidated master-এর সঙ্গে exact question + option-set comparison।
3. প্রত্যেক record-এর answer, explanation, event date, publication date ও cited source মিলিয়ে দেখা।
4. মেয়াদোত্তীর্ণ/অপ্রাসঙ্গিক current-affairs item আলাদা flag করা; ব্যবহারকারীর অনুমতি ছাড়া নীরবে বাদ নয়।
5. সংশোধন/duplicate removal শেষে master ও runtime count reconcile করে final LOCK।

**এই প্রতিবেদন শুধু structural inventory checkpoint; factual audit বা LOCK-এর দাবি নয়।**

## Checkpoint 01–10 — item-wise factual check (২৭ নভেম্বর ২০২৬)
প্রথম ১০টি source-order প্রশ্নের তথ্য, উত্তরসূচি ও ব্যাখ্যা সরকারি গেজেট/BSS-এর সঙ্গে মিলিয়ে দেখা হয়েছে:
- ১: আনোয়ার ইব্রাহিমের সফর ৭–৮ ডিসেম্বর ২০২৬ — সরকারি গেজেটে নিশ্চিত।
- ২–৫: ২০২৬ সনের ১১১–১১৪ নম্বর আইন ও নাম — ২২ নভেম্বরের সরকারি গেজেটের তালিকার সঙ্গে নিশ্চিত।
- ৬–৯: মাধ্যমিক/কারিগরি শিক্ষাপ্রতিষ্ঠানের শিক্ষক শূন্যপদ, পূরণকৃত পদ — ১৮ নভেম্বরের সংসদীয় তথ্য ও BSS প্রতিবেদনের সঙ্গে নিশ্চিত।
- ১০: ৫০তম BCS-এর মৌখিক পরীক্ষা সম্পন্ন — BSS প্রতিবেদনে নিশ্চিত।
- এই ১০টি প্রশ্নে ভুল answer index শনাক্ত হয়নি। একই গেজেট বা সংসদীয় প্রতিবেদনের একাধিক পৃথক পরিসংখ্যান/আইন নিয়ে প্রশ্ন আছে; প্রশ্ন ও option set হুবহু এক নয় বলে exact-copy নীতিতে রাখা হয়েছে।
- Checkpoint 01–10 factual check: **10/10 verified**. পরবর্তী ১১–২০ checkpoint বাকি; তাই subject এখনো **IN_PROGRESS / NOT LOCKED**।

Sources: Bangladesh Government Press extraordinary gazette (22-Nov-2026), BSS JS Session report (18-Nov-2026).


## Checkpoint 11–20 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order অনুযায়ী ১১–২০ নম্বর ১০টি প্রশ্নের উত্তর, অপশন, ব্যাখ্যা, তারিখ ও উৎস মিলিয়ে দেখা হয়েছে:
- ১১–১৪: ২০২৭ সালের সরকারি ছুটির গেজেট (১৩ নভেম্বর ২০২৬) অনুযায়ী সাধারণ ছুটি ১৫ দিন; ঈদুল ফিতরের নির্বাহী আদেশের ছুটি ৪ দিন এবং ঈদুল আজহার নির্বাহী আদেশের ছুটি ৫ দিন—প্রশ্নের নির্দিষ্ট শ্রেণিবিভাগ অনুযায়ী উত্তর সঠিক।
- ১৫: এসেনশিয়াল ড্রাগস কোম্পানি লিমিটেডের পুনর্গঠিত বোর্ডে স্বাস্থ্য ও পরিবার কল্যাণমন্ত্রী সরদার মোঃ সাখাওয়াত হোসেন চেয়ারম্যান—গেজেটের সঙ্গে সঠিক।
- ১৬: ICT startup grant policy 2026-এর গেজেট ১২ নভেম্বর প্রকাশিত; মন্ত্রণালয়ের নাম ও উত্তর সঠিক।
- ১৭: ত্রয়োদশ জাতীয় সংসদের চতুর্থ অধিবেশন ১৮ নভেম্বরের বৈঠকের পর সমাপ্ত—সংসদীয় তথ্য/গেজেটের সঙ্গে সঠিক।
- ১৮–২০: বাংলাদেশ ব্যাংকের তথ্যভিত্তিক ১–২২ নভেম্বর রেমিট্যান্স ২.৩৫৭ বিলিয়ন ডলার, বছরওয়ারি বৃদ্ধি ১০.৪%, এবং ১ জুলাই–২২ নভেম্বর FY2026–27 মোট ১৩.৮২২ বিলিয়ন ডলার—BSS/UNB প্রতিবেদনের সঙ্গে সঠিক।
- ভুল answer index বা তথ্যগত ভুল: **০টি শনাক্ত**।
- একই ছুটির গেজেট বা একই রেমিট্যান্স প্রতিবেদনের ভিন্ন পরিসংখ্যানভিত্তিক প্রশ্নগুলো প্রশ্ন+option-set হুবহু এক নয়; duplicate নীতিতে রাখা হয়েছে।
- Checkpoint 11–20: **10/10 verified**। মোট item-wise verified: **20/150 (আগের inventory অনুযায়ী)**।

### Inventory discrepancy — যাচাই চলমান
বর্তমান runtime ফাইলে category-র exact string `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান` দিয়ে Q() call গুনলে **১২৫টি** পাওয়া যাচ্ছে; আগের structural report-এ **১৫০টি** বলা হয়েছিল। তাই ১৫০-কে আপাতত নিশ্চিত চূড়ান্ত source count ধরা হচ্ছে না। পরবর্তী ধাপে category alias/অন্য data structure-সহ পূর্ণ inventory পুনর্মিলন করা হবে। এই discrepancy-র কারণে subject **IN_PROGRESS / NOT LOCKED** থাকবে।

Sources: Bangladesh Government Press Gazette 13-Nov-2026; 16-Nov-2026; 12-Nov-2026; Bangladesh Parliament; BSS 23-Nov-2026; UNB 23-Nov-2026.


## Checkpoint 21–30 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ২১–৩০ যাচাই:
- ২১: ১৬৪ কিশোরগঞ্জ-৩ আসন শূন্য ঘোষণার গেজেট—সঠিক।
- ২২: সিটি কর্পোরেশন এলাকায় ই-রিকশা চলাচল বিধিমালা ২০২৬ স্থানীয় সরকার বিভাগের অধীনে—সঠিক।
- ২৩–২৪: SDG-এর ২০৩০ সময়সীমা ও বিশ্ব জনসংখ্যা দিবস ১১ জুলাই—উত্তর সঠিক, কিন্তু এগুলো evergreen সাধারণ জ্ঞান; সাম্প্রতিক ঘটনা নয়। উভয়ের date field-এ ২০২৬-১১-২৪ বসানোও event date নয়। **দুটি item reclassify/replace করার জন্য flag করা হলো; এখনো runtime থেকে বাদ/পরিবর্তন করা হয়নি।**
- ২৫: ২০২৫ UN Ocean Conference—নিস, ফ্রান্স; সঠিক।
- ২৬: COP30—ব্রাজিলের বেলেম; সঠিক।
- ২৭: World Expo 2025—ওসাকা; সঠিক।
- ২৮: ৮০তম UNGA High-Level Week—২৩–২৯ সেপ্টেম্বর ২০২৫; সঠিক।
- ২৯: ২০২৫ International Year of Glaciers’ Preservation; সঠিক।
- ৩০: ২০২৫ Nobel Peace Prize—Maria Corina Machado; সঠিক।
- ভুল উত্তরসূচি: **০টি শনাক্ত**; ২৩–২৪-এর শ্রেণিবিন্যাস/তারিখ metadata issue আলাদা করে flag।
- Checkpoint 21–30: ১০টি যাচাই; ৮টি current affairs হিসেবে গ্রহণযোগ্য, ২টি evergreen reclassify/replace flag। মোট item-wise review: **৩০টি**।

### Source inventory reconciliation
- সম্পূর্ণ runtime file পুনরায় scan: exact category string `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান`-এর Q() call **১২৫টি**। “সাম্প্রতিক” শব্দযুক্ত অন্য category string নেই।
- আগের ১৫০ সংখ্যাটি এই source-এ সমর্থিত নয়; আগের inventory report-এর ১৫০-কে **ভুল গণনা** হিসেবে সংশোধন করা হলো। এখনকার যাচাইকৃত raw count ১২৫ (duplicate/eligibility review শেষে final retained count নয়)।
- source blob SHA অপরিবর্তিত: `d8ce4584068188bb6e3f79e67631d6e778d4b731`।
- ১২৫টির পূর্ণ normalized question+option-set duplicate master comparison এবং remaining ৯৫টি item-এর factual review বাকি; তাই **IN_PROGRESS / NOT LOCKED**।

Sources: Bangladesh Gazette 17-Nov-2026; BSS 17-Nov-2026; Bangladesh Gazette 02-Nov-2026; UN SDGs; UNFPA; UNEP; UNFCCC; United Nations 2025 calendar; Nobel Peace Prize official announcement.


## Checkpoint 31–40 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৩১–৪০ যাচাই:
- ৩১: ২০২৫ সালের সাহিত্যে নোবেল—László Krasznahorkai; NobelPrize.org-এ নিশ্চিত।
- ৩২: ১৭তম BRICS Summit—রিও ডি জেনেইরো, ৬–৭ জুলাই ২০২৫; BRICS-এর নিজস্ব ঘোষণায় নিশ্চিত।
- ৩৩: জাতিসংঘের ৮১তম সাধারণ পরিষদের অধিবেশন শুরু ৮ সেপ্টেম্বর ২০২৬; UN-এর সূচিতে নিশ্চিত।
- ৩৪: ৮১তম অধিবেশনের সাধারণ বিতর্ক শুরু ২২ সেপ্টেম্বর ২০২৬; UN-এর সূচিতে নিশ্চিত।
- ৩৫–৩৮: COP31 তুরস্কের আন্তালিয়ায় অনুষ্ঠিত; সম্মেলন ৯ নভেম্বর শুরু হয়ে ২২ নভেম্বর সমাপ্ত; Antalya Pact/সামগ্রিক cover decision-এ ঐকমত্য হয়নি। ৩৫–৩৮-এর উত্তর সঠিক। ৩৫-এর ব্যাখ্যায় নির্ধারিত ৯–২০ নভেম্বর সময়সীমা লেখা আছে, কিন্তু বাস্তবে সম্মেলন ২২ নভেম্বর পর্যন্ত গড়ায়—ব্যাখ্যায় এই অতিরিক্ত তথ্য যোগ করে সংশোধন প্রয়োজন।
- ৩৯: World Economic Forum Annual Meeting ২০২৬, দাভোস-ক্লোস্টার্স, ১৯–২৩ জানুয়ারি; WEF-এর নিজস্ব পৃষ্ঠায় নিশ্চিত।
- ৪০: World Environment Day ৫ জুন—তথ্য সঠিক, কিন্তু এটি বার্ষিক স্থায়ী দিবসের তথ্য; সাম্প্রতিক ঘটনা নয়। **সাধারণ জ্ঞানে reclassify/replace flag** করা হলো।
- ভুল answer index: **০টি শনাক্ত**। ৩৫-এর explanation update এবং ৪০-এর category suitability flag করা হয়েছে; runtime এখনো সম্পাদিত হয়নি।
- ৩১–৪০-এর মধ্যে এবং আগের ১–৩০ master-এর সঙ্গে দৃশ্যমান exact question+option-set copy পাওয়া যায়নি; COP31/UNGA-র একাধিক প্রশ্ন ভিন্ন তথ্য/option set জিজ্ঞাসা করে, তাই duplicate নয়।
- Checkpoint 31–40: **১০টি item reviewed**; ৩৫ explanation correction, ৪০ reclassify/replace flag। মোট source-order item reviewed: **৪০/১২৫**।

Sources: NobelPrize.org; BRICS Brazil official Rio Declaration; UN General Assembly 81st session schedule; UNFCCC/United Nations COP31 outcomes; World Economic Forum Annual Meeting 2026.


## Checkpoint 41–50 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৪১–৫০-এর প্রশ্ন, তারিখ, উত্তরসূচি, ব্যাখ্যা ও উৎস যাচাই:
- ৪১: World Oceans Day — ৮ জুন; ২০২৬ UN calendar-এ নিশ্চিত।
- ৪২: World Population Day — ১১ জুলাই; UN calendar-এ নিশ্চিত।
- ৪৩: World Teachers’ Day — ৫ অক্টোবর; UN calendar-এ নিশ্চিত।
- ৪৪: World Food Day — ১৬ অক্টোবর; UN calendar-এ নিশ্চিত।
- ৪৫: World Science Day for Peace and Development — ১০ নভেম্বর; UN calendar-এ নিশ্চিত।
- ৪৬: World Wildlife Day — ৩ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৭: International Day of Forests — ২১ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৮: World Water Day — ২২ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৯: World Meteorological Day — ২৩ মার্চ; UN calendar-এ নিশ্চিত।
- ৫০: International Day of Zero Waste — ৩০ মার্চ; UN calendar-এ নিশ্চিত।
- ১০টির উত্তরসূচি/তারিখে ভুল পাওয়া যায়নি; ব্যাখ্যাগুলোও ঘোষিত দিবসের তারিখের সঙ্গে সামঞ্জস্যপূর্ণ। একই ২০২৬ UN calendar URL ব্যবহার করা হয়েছে এবং পৃষ্ঠায় এই দশটি দিবসের তারিখ পাওয়া যায়।
- **বিষয়-উপযোগিতা:** এগুলো সবই প্রতি বছর নির্দিষ্ট দিনে পালিত স্থায়ী আন্তর্জাতিক দিবস; ২০২৬ সালের নতুন ঘটনা/এককালীন সাম্প্রতিক ঘটনা নয়। তাই ১০টিই “সাম্প্রতিক ঘটনা” থেকে reclassify/replace করার জন্য flag করা হলো। এগুলোকে সাধারণ জ্ঞান/গুরুত্বপূর্ণ দিবস বিভাগে রাখা যেতে পারে; ব্যবহারকারীর অনুমতি ছাড়া runtime থেকে সরানো হয়নি।
- এই checkpoint-এ দৃশ্যমান হুবহু প্রশ্ন+option-set duplicate পাওয়া যায়নি। তবে পূর্ণ normalized master comparison এখনো তৈরি হয়নি; তাই global duplicate-free দাবি করা হচ্ছে না।
- Checkpoint 41–50: **১০টি item reviewed**। মোট source-order item-wise review: **৫০/১২৫**। Subject **IN_PROGRESS / NOT LOCKED**।

Source: United Nations, *2026 Calendar of Selected United Nations Events* — https://www.un.org/en/node/238917


## Checkpoint 51–60 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৫১–৬০-এর প্রশ্ন, option, answer index, ব্যাখ্যা, date ও cited source যাচাই:
- ৫১: World Refugee Day ২০ জুন—তারিখ সঠিক; তবে এটি প্রতি বছরের স্থায়ী আন্তর্জাতিক দিবস, সাম্প্রতিক ঘটনা নয়। **Reclassify/replace flag**।
- ৫২: FY2026–27 জাতীয় বাজেটের আকার ৯.৩৮ লাখ কোটি টাকা—সঠিক।
- ৫৩: বাজেট পাস ৩০ জুন ২০২৬—সঠিক।
- ৫৪: অর্থমন্ত্রী আমির খসরু মাহমুদ চৌধুরী ১১ জুন বাজেট প্রস্তাব উপস্থাপন করেন—সঠিক।
- ৫৫: GDP প্রবৃদ্ধির লক্ষ্য ৬.৫%—সঠিক।
- ৫৬: মূল্যস্ফীতি কমানোর লক্ষ্য ৭.৫%—সঠিক।
- ৫৭: রাজস্ব আয়ের লক্ষ্যমাত্রা ৬.৯৫ লাখ কোটি টাকা—সঠিক; ৩০ জুনের চূড়ান্ত বাজেট প্রতিবেদন দিয়ে যাচাই।
- ৫৮: ADP ৩ লাখ কোটি টাকা—সঠিক।
- ৫৯: ব্যক্তিগত করদাতার করমুক্ত আয়সীমা ৪ লাখ টাকা—Finance Bill-এর সংশোধনীসহ চূড়ান্ত অনুমোদনের পর সঠিক; প্রাথমিক বাজেট প্রস্তাবে ৩.৭৫ লাখ ছিল।
- ৬০: UNGA High-Level Week-এর প্রশ্নে উত্তর ২১–২৮ সেপ্টেম্বর দেওয়া হয়েছে; UN-এর ২০২৬ ক্যালেন্ডার অনুযায়ী সময়সীমা **২২–২৮ সেপ্টেম্বর**। তাই প্রশ্নের option-এ তারিখ ভুল; সঠিক option **২২–২৮ সেপ্টেম্বর** দিয়ে প্রতিস্থাপন এবং ব্যাখ্যা সংশোধন প্রয়োজন। বর্তমান answer index-কে সঠিক বলা যাবে না যতক্ষণ option সংশোধিত না হয়।
- ৫২–৫৯-এর আটটি বাজেট-প্রশ্নে তথ্য ও উত্তর সঠিক; একই বাজেট উৎস ব্যবহৃত হলেও প্রশ্ন/option set আলাদা, তাই exact-copy duplicate নয়।
- Checkpoint 51–60: ১০টি item reviewed; ৫১ reclassify/replace flag, ৬০ factual option/date correction। মোট source-order item-wise review: **৬০/১২৫**।
- Source inventory-তে এখনও ১২৫টি record রয়েছে; অতএব ৫১–৬০-কে শেষ batch বলা যাবে না। ৬১–১২৫-এর ৬৫টি record এখনও item-wise audit বাকি। পূর্ণ normalized question+option-set master comparison-ও pending। Subject **IN_PROGRESS / NOT LOCKED**।

Sources: BSS FY27 budget highlights; bdnews24.com final budget approval report (30-Jun-2026); The Business Standard final budget details (30-Jun-2026); Bangladesh NBR FY2026–27 budget speech; United Nations 2026 calendar and 81st UNGA schedule.


### Checkpoint 61–70 — ২৭ নভেম্বর ২০২৬
- source-order ৬১–৭০: ১০/১০ item যাচাই। Q61 CSW70-এর ৯–২০ মার্চ; Q62 ECOSOC Youth Forum ১৪–১৬ এপ্রিল; Q63 AI for Good Global Summit জেনেভা; Q64 UNGA 81 শুরু ৮ সেপ্টেম্বর; Q65 South-South Cooperation Day ১২ সেপ্টেম্বর; Q66 Ozone Layer Day ১৬ সেপ্টেম্বর; Q67 UN Day ২৪ অক্টোবর; Q68 Persons with Disabilities Day ৩ ডিসেম্বর; Q69 AI for Good আয়োজক ITU; Q70 World Cities Day ৩১ অক্টোবর।
- Q63-এর city, Q69-এর organizer এবং summit-এর ৭–১০ জুলাইয়ের সময় ITU official source-এও মিলে গেছে। Q61–68/70-এর তারিখ United Nations 2026 calendar-এ মেলে।
- Q65, Q66, Q67, Q68 ও Q70 বার্ষিক স্থায়ী দিবস; সাম্প্রতিক ঘটনা হিসেবে মানানসই নয়—reclassify/replace flag। Q68-এর ৩ ডিসেম্বর ২০২৬ তারিখ ভবিষ্যৎ নির্ধারিত observance, ভুল নয়।
- এই checkpoint-এ ভুল answer index পাওয়া যায়নি। Q61–70-এর মধ্যে দৃশ্যমান হুবহু প্রশ্ন-অপশন duplicate পাওয়া যায়নি; পূর্ণ normalized master comparison এখনও বাকি। Runtime edit করা হয়নি।
- মোট item-wise review: **৭০/১২৫**; বাকি **৫৫টি (৭১–১২৫)**। **IN_PROGRESS / NOT LOCKED**।


### Checkpoint 71–80 — ২৭ নভেম্বর ২০২৬
- source-order ৭১–৮০: ১০/১০ তথ্য ও answer key যাচাই। Q71–74 যথাক্রমে ২৫ নভেম্বর, ২০ ফেব্রুয়ারি, ১১ ফেব্রুয়ারি ও ২২ মে—তারিখ সঠিক; চারটিই বার্ষিক আন্তর্জাতিক দিবস, তাই reclassify/replace flag।
- Q75–80: ২০২৫ সালের পদার্থ, রসায়ন, চিকিৎসা, অর্থনীতি নোবেলজয়ী এবং রসায়ন/পদার্থ পুরস্কারের স্বীকৃতির বিষয়—সবই Nobel Prize-এর official 2025 তালিকার সঙ্গে মিলে গেছে; ভুল answer index ০।
- এই checkpoint-এ দৃশ্যমান হুবহু প্রশ্ন-অপশন duplicate পাওয়া যায়নি; পূর্ণ normalized master comparison এখনও বাকি। Runtime edit করা হয়নি।
- মোট item-wise review: **৮০/১২৫**; বাকি **৪৫টি (৮১–১২৫)**। **IN_PROGRESS / NOT LOCKED**।


### Checkpoint 81–90 — ২৭ নভেম্বর ২০২৬
- source-order ৮১–৯০: **১০/১০ তথ্য, উত্তরসূচি ও ব্যাখ্যা যাচাই**। Q81–84: ২০২৫ সালের চিকিৎসাবিজ্ঞান/অর্থনীতি নোবেল, ১০ ডিসেম্বর পুরস্কার প্রদান এবং মোট ১৪ জন laureate—Nobel Prize-এর official তালিকা/বার্ষিক প্রতিবেদনে নিশ্চিত।
- Q85–90: FY2026–27 বাজেটের আকার ৯.৩৮ লাখ কোটি, উন্নয়ন ব্যয় ৩.১৬ লাখ কোটি, Health Services Division ৪৯৩.৮৭ বিলিয়ন, Secondary & Higher Education Division ৫৭৩.০২ বিলিয়ন, করমুক্ত আয়সীমা ৪ লাখ এবং উন্নয়ন ব্যয়ের অনুপাত ৩৩.৭০%—চূড়ান্ত বাজেট প্রতিবেদন ও সরকারি বাজেট নথির সঙ্গে মিলে গেছে।
- ভুল answer index: **০টি**। ৮১–৮৪ নোবেল এবং ৮৫–৯০ বাজেটের প্রশ্নগুলো আগের নোবেল/বাজেট প্রশ্নের বিষয়-সংশ্লিষ্ট হলেও ভিন্ন প্রশ্ন ও option set; দৃশ্যমান exact-copy পাওয়া যায়নি।
- মোট item-wise review: **৯০/১২৫**; বাকি **৩৫টি (৯১–১২৫)**। পূর্ণ normalized question+option-set master comparison এখনও বাকি; তাই **IN_PROGRESS / NOT LOCKED**। Runtime পরিবর্তন করা হয়নি।

Sources: NobelPrize.org, All Nobel Prizes and Annual Report 2025; bdnews24.com final FY2026–27 budget report; Bangladesh Customs/NBR official FY2026–27 budget speech.


### Checkpoint 91–100 — ২৭ নভেম্বর ২০২৬
- source-order ৯১–১০০: **১০/১০ তথ্য ও answer index যাচাই**। Q91: FY2026–27-এ ঋণের সুদে ১.২৭ ট্রিলিয়ন টাকা বরাদ্দ; Q92: করমুক্ত আয়সীমা বৃদ্ধির সংশোধনী Finance Bill 2026; Q93: GDP growth target ৬.৫%, আগের FY2025–26 target ৫.৫%-এর চেয়ে বেশি—বাজেট প্রতিবেদন দিয়ে নিশ্চিত। Q93-এর প্রশ্নে তুলনার ভিত্তি স্পষ্ট করতে wording-এ “আগের অর্থবছরের লক্ষ্যমাত্রা” বলা উচিত।
- Q94: 64th Commission for Social Development, New York, 2–11 February; Q95: 29th Commission on Science and Technology for Development, Geneva, 20–24 April; Q96: 1951 Refugee Convention-এর 75তম বার্ষিকী 28 July; Q98: HLPF 6–10 July—UN 2026 calendar-এ মেলে।
- Q97 World Youth Day/International Youth Day 12 August, Q99 World Day for Cultural Diversity 21 May, Q100 World Day to Combat Desertification and Drought 17 June—তারিখ সঠিক, তবে এগুলো বার্ষিক স্থায়ী observance; সাম্প্রতিক ঘটনা ব্যাংকে reclassify/replace flag।
- ভুল answer index: **০টি**। দৃশ্যমান exact-copy duplicate নেই; পূর্ণ normalized question+option-set master comparison এখনও pending। Runtime edit হয়নি।
- মোট item-wise review: **১০০/১২৫**; বাকি **২৫টি (১০১–১২৫)**। বিষয় **IN_PROGRESS / NOT LOCKED**।

Sources: bdnews24.com FY2026–27 budget report; Bangladesh NBR/Finance Division budget documents; United Nations 2026 Calendar of Selected UN Events.


### Checkpoint 101–110 — ২৭ নভেম্বর ২০২৬ (source-order পুনর্মিলন)
- আগের checkpoint note-এ parser-এর কারণে ভুল করে ১০১–১১০-এর বদলে অন্য ১০টি record-এর বিবরণ ঢুকে গিয়েছিল; সেটি বাতিল। runtime-এর category-নির্দিষ্ট Q() call ১২৫টি ধরে পুনরায় source-order parse করে সঠিক ১০১–১১০ যাচাই করা হয়েছে।
- ১০১: International Day of Clean Energy—২৬ জানুয়ারি; ১০২: International Day of Education—২৪ জানুয়ারি; ১০৩: World Wetlands Day—২ ফেব্রুয়ারি; ১০৪: International Day of Multilateralism and Diplomacy for Peace—২৪ এপ্রিল; ১০৫: 64th Commission for Social Development-এর শেষ তারিখ ১১ ফেব্রুয়ারি; ১০৬: Humanitarian Networks and Partnerships Week—জেনেভা ও অনলাইন; ১০৭: ACUNS Annual Meeting—লিসবন; ১০৮: UNGA 81st session উদ্বোধন—৮ সেপ্টেম্বর; ১০৯: COP31-এর নির্ধারিত সময় ৯–২০ নভেম্বর; ১১০: COP31 President nominee—Murat Kurum।
- UN-এর ২০২৬ Calendar এবং UNFCCC-এর COP31 official page-এ তথ্য/তারিখ/স্থান নিশ্চিত। সব answer index সঠিক; ভুল index **০টি**।
- এই দশকের কয়েকটি প্রশ্ন বার্ষিক আন্তর্জাতিক দিবস (১০১–১০৪); এগুলো সাম্প্রতিক ঘটনা নয়, reclassify/replace flag। বাকি প্রশ্নগুলো ২০২৬ সালের নির্দিষ্ট অধিবেশন/সম্মেলন। দৃশ্যমান exact-copy duplicate নেই; full normalized master comparison pending। Runtime edit হয়নি।
- মোট item-wise review **১১০/১২৫**; বাকি **১৫টি (১১১–১২৫)**। বিষয় **IN_PROGRESS / NOT LOCKED**।

Sources: United Nations, 2026 Calendar of Selected UN Events; UNFCCC, About COP31 / COP31 official conference page.


### Checkpoint 111–120 — ২৭ নভেম্বর ২০২৬
- source-order ১১১–১২০: **১০/১০ তথ্য ও answer index যাচাই**। ১১১: Chris Bowen ছিলেন COP31 President of Negotiations; ১১২: COP31 Antalya, Türkiye-তে; ১১৩: প্রস্তাবিত Antalya Pact-এ ঐকমত্য হয়নি; ১১৪: COP32 ২০২৭ সালে Addis Ababa-তে হওয়ার কথা—UN/UNFCCC এবং COP31-পরবর্তী UN বিবৃতিতে নিশ্চিত।
- ১১৫: ২০২৫ UN Ocean Conference Nice, France; ১১৬: Expo 2025-এর আয়োজক Japan; ১১৭: ২০২৫ G20 Leaders’ Summit South Africa; ১১৮–১১৯: ২০২৫ BRICS Summit Brazil-এ, জুলাইয়ে; ১২০: ২০২৫ UN Ocean Conference ছিল তৃতীয় সম্মেলন—UN/UNEP, Japan government, G20 South Africa এবং BRICS official programme-এ নিশ্চিত।
- ভুল answer index: **০টি**। Q115 ও Q120 একই সম্মেলন নিয়ে হলেও প্রশ্ন/option set আলাদা; exact-copy duplicate নয়।
- Q115–১২০-এর ঘটনাগুলো ২০২৫ সালের; ২০২৬ সালের শেষভাগে এগুলোর freshness তুলনামূলক কম—replacement/আপডেটের জন্য flag। Runtime edit হয়নি। পূর্ণ normalized question+option-set comparison pending।
- মোট item-wise review **১২০/১২৫**; বাকি **৫টি (১২১–১২৫)**। বিষয় **IN_PROGRESS / NOT LOCKED**।

Sources: UNFCCC COP31 official pages; United Nations COP31 closing update; UNEP/UN 2025 Ocean Conference; Japan Cabinet Office/Expo 2025; G20 South Africa official summit records; BRICS Brazil official summit programme.


### Checkpoint 121–125 — ২৭ নভেম্বর ২০২৬ (শেষ source-order group)
- source-order ১২১–১২৫: **৫/৫ তথ্য ও answer index যাচাই**। ১২১: ২০২৫ সালে G20 Presidency—South Africa; ১২২: ৮০তম UNGA সাধারণ বিতর্ক—সেপ্টেম্বর ২০২৫ (২৩–২৯ সেপ্টেম্বরের মধ্যে নির্ধারিত অধিবেশন); ১২৩: ২০২৫ UN Ocean Conference-এর আয়োজক দেশ France; ১২৪: Expo 2025 Osaka সমাপ্তি ১৩ অক্টোবর; ১২৫: COP30-এর বেলেম শহর ব্রাজিলের Pará রাজ্যে, Amazon অঞ্চলের প্রবেশদ্বার/অংশ—সরকারি South Africa/UN/Japan/Brazil সূত্রে নিশ্চিত।
- ভুল answer index: **০টি**। ১২৩ ও ১১৫ একই conference-কে ভিন্নভাবে জিজ্ঞাসা করে; ১২৪ ও ১১৬ Expo-র আলাদা তথ্য; ১২১ ও ১১৭ G20 presidency বনাম summit-host—এগুলো exact-copy duplicate নয়।
- মোট item-wise factual review **১২৫/১২৫ সম্পন্ন**। তবে ২০২৫ সালের কয়েকটি ঘটনা (বিশেষত ১২১–১২৫) এখন পুরোনো; freshness/replacement flag। পূর্ণ normalized question+option-set duplicate comparison এখনো final gate; তাই বিষয় **IN_PROGRESS / NOT LOCKED**। Runtime edit হয়নি।

Sources: South African Government G20 Presidency; UN General Assembly 80th session/2025 calendar; Japan Cabinet Office Expo 2025; UNEP 2025 UN Ocean Conference; Brazilian Government/official COP30 pages.
