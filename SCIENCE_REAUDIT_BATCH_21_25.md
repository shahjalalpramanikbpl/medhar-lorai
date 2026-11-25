# সাধারণ বিজ্ঞান — পুনঃযাচাই রিপোর্ট: Expansion Batch ২১–২৫

তারিখ: ২৫ নভেম্বর ২০২৬  
অবস্থা: **ব্যাচ ২১–২৫ পুনঃযাচাই সম্পন্ন; বিষয়টি LOCKED নয়**

## ১. ব্যাচভিত্তিক candidate
- Batch ২১: ৮টি সাধারণ বিজ্ঞান candidate
- Batch ২২: ২টি
- Batch ২৩: ১টি
- Batch ২৪: ১টি
- Batch ২৫: ২টি
- মোট source candidate: ১৬টি

## ২. প্রশ্নভিত্তিক যাচাই
নিচের ১৩টি retained প্রশ্নের তথ্য, চারটি অপশন, keyed answer ও explanation পরীক্ষা করা হয়েছে:

| ID | প্রশ্নের বিষয় | সঠিক উত্তর | সিদ্ধান্ত |
|---|---|---|---|
| extra_779 | অক্সিজেন পরিবহনকারী রক্তকণিকা | লোহিত রক্তকণিকা | সঠিক |
| extra_781 | শিশুদের ভিটামিন D ঘাটতি | রিকেটস | সঠিক |
| extra_782 | শব্দের বেগ সর্বাধিক | ইস্পাত | প্রদত্ত মাধ্যমগুলোর মধ্যে সঠিক |
| extra_783 | শূন্যস্থানে আলোর বেগ | ৩×১০⁸ মি/সে | আনুমানিকভাবে সঠিক |
| extra_784 | বৈদ্যুতিক রোধের SI একক | ওহম | সঠিক |
| extra_785 | লেবুতে প্রধান অম্ল | সাইট্রিক অ্যাসিড | সঠিক |
| extra_786 | pH ৭-এর কম | অম্লীয় | ২৫°C-এ সঠিক |
| extra_787 | পারমাণবিক সংখ্যা | প্রোটন সংখ্যা | সঠিক |
| extra_788 | ওজোন স্তরের অবস্থান | স্ট্রাটোস্ফিয়ার | সঠিক |
| extra_807 | রক্ত জমাট বাঁধায় গুরুত্বপূর্ণ ভিটামিন | ভিটামিন K | সঠিক |
| extra_829 | লোহিত রক্তকণিকার গড় আয়ুষ্কাল | প্রায় ১২০ দিন | সঠিক |
| extra_859 | বৃহত্তম মানব গ্রন্থি | যকৃত | সঠিক |
| extra_889 | রক্ত থেকে বর্জ্য ছেঁকে বের করা প্রধান অঙ্গ | বৃক্ক | সঠিক; প্রশ্নের ভাষা আরও নির্ভুলভাবে “রক্ত থেকে বর্জ্য পদার্থ ছেঁকে বের করে” বলা যায় |

কোনো retained প্রশ্নের keyed answer পরিবর্তন করা হয়নি। extra_889-এর ব্যাখ্যা ও প্রশ্নের ভাষা একই অর্থ বহন করে; বড় ধরনের factual correction প্রয়োজন হয়নি।

## ৩. ডুপ্লিকেট শনাক্ত ও অপসারণ
এই গ্রুপে ৩টি exact duplicate copy শনাক্ত:
- `extra_804` → `suite_70`: ইনসুলিন নিঃসরণকারী অঙ্গ; option order আলাদা, কিন্তু একই পূর্ণ option set ও keyed answer। আগের ledger-এ অপসারণ নথিভুক্ত; batch source-এর runtime dedup filter-এ বাদ।
- `extra_805` → `extra_782`: শব্দের বেগের প্রশ্ন; আগের ledger-এ অপসারণ নথিভুক্ত।
- `extra_890` → `extra_786`: pH ৭-এর কম হলে দ্রবণ অম্লীয়—প্রশ্ন, চারটি option-এর সেট ও keyed answer একই; option order এবং বাংলা বানানের রূপ (অম্লীয়/অম্লীয়, ক্ষারীয়/ক্ষারীয়) আলাদা। কপিটি Batch ২৫ source ও master থেকে সরানো হয়েছে।

ফলে Batch ২১–২৫: ১৬ candidate − ৩ duplicate = **১৩ retained**। নতুন করে source থেকে অপসারণ করা হয়েছে `extra_890`; আগের দুই removal ledger-এ ছিল।

## ৪. আগের ব্যাচের সঙ্গে তুলনা
- Batch ১–২০-এর সম্মিলিত master-এর সঙ্গে full-signature তুলনা করা হয়েছে।
- নতুন cross-group exact duplicate: **১টি** (`extra_890`, `extra_786)-এর duplicate)।
- conceptual overlap আলাদা রাখা হয়েছে; যেমন insulin, RBC oxygen transport, vitamin D/rickets—প্রশ্নের option set/wording ভিন্ন হলে exact duplicate হিসেবে বাদ নয়।

## ৫. তথ্যসূত্র
- RBC oxygen transport / lifespan: https://www.ncbi.nlm.nih.gov/books/NBK2263/
- Vitamin D and rickets: https://medlineplus.gov/rickets.html
- Sound in solids: https://openstax.org/books/university-physics-volume-1/pages/17-2-speed-of-sound
- Speed of light: https://physics.nist.gov/cuu/Constants/Value/c.html
- Ohm as SI resistance unit: https://goldbook.iupac.org/terms/view/O04280
- Citric acid in lemon: https://pubmed.ncbi.nlm.nih.gov/24874375/
- pH and water: https://www.usgs.gov/water-science-school/science/ph-and-water
- Atomic number: https://goldbook.iupac.org/terms/view/A00499
- Ozone layer: https://csl.noaa.gov/assessments/ozone/2022/downloads/twentyquestions.pdf
- Vitamin K and coagulation: https://ods.od.nih.gov/factsheets/vitaminK-HealthProfessional/
- RBC lifespan: https://www.ncbi.nlm.nih.gov/books/NBK539702/
- Liver: https://www.ncbi.nlm.nih.gov/books/NBK500014/
- Kidney function: https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works

## ৬. সমন্বিত অগ্রগতি
- Batch ১–৫: ১৪ retained
- Batch ৬–১০: ১৩ retained
- Batch ১১–১৫: ২ retained
- Batch ১৬–২০: ৭ retained
- Batch ২১–২৫: ১৩ retained
- Expansion ১–২৫-এ substantive re-audit: **৪৯টি retained প্রশ্ন**
- Batch ২১–২৫-এ duplicate copy: ৩টি; নতুন correction: ০টি
- সাধারণ বিজ্ঞানের baseline ১৩০টি প্রশ্নের পূর্ণ factual re-audit এখনো বাকি; final status **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।

## ৭. পরবর্তী ধাপ
Batch ২৬–৩০ যাচাই করে Expansion Batch ১–২৫-এর সম্মিলিত master-এর সঙ্গে একই পদ্ধতিতে তুলনা করা হবে।
