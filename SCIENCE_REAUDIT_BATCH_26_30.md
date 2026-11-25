# সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই রিপোর্ট: Expansion Batch ২৬–৩০

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **Batch ২৬–৩০ পুনঃযাচাই সম্পন্ন; বিষয়টি LOCKED নয়**

## ১. প্রার্থী ও retained হিসাব
- Batch ২৬: ১টি সাধারণ বিজ্ঞান প্রশ্ন (extra_921)
- Batch ২৭: ১টি (extra_949)
- Batch ২৮: ০টি retained; এই batch-এর বিজ্ঞান candidate extra_986 আগেই suite_5-এর exact duplicate হিসেবে বাদ।
- Batch ২৯: ০টি।
- Batch ৩০: ১টি retained (extra_1078); extra_1077 ও extra_1079 আগেই duplicate ledger-এ বাদ।
- পাঁচ ব্যাচের মূল candidate মোট **৬টি**; পূর্বে exact duplicate হিসেবে বাদ **৩টি**; retained **৩টি**। পূর্বে বাদ দেওয়া কপিগুলো: extra_986→suite_5, extra_1077→extra_560, extra_1079→extra_890। এই checkpoint-এ নতুন source deletion লাগেনি।

## ২. retained প্রশ্নের বিষয়বস্তু যাচাই
| ID | যাচাইকৃত বিষয় | নির্ধারিত উত্তর | সিদ্ধান্ত |
|---|---|---|---|
| extra_921 | বিদ্যুৎ প্রবাহের SI একক | অ্যাম্পিয়ার | সঠিক |
| extra_949 | রক্ত জমাট বাঁধায় গুরুত্বপূর্ণ ভিটামিন | ভিটামিন K | সঠিক |
| extra_1078 | প্রদত্ত মাধ্যমগুলোর মধ্যে শব্দের বেগ সর্বাধিক | ইস্পাত | সঠিক |

প্রতিটি প্রশ্নে তথ্য, চারটি অপশনের প্রাসঙ্গিকতা, keyed answer এবং ব্যাখ্যা পরীক্ষা করা হয়েছে। নতুন factual correction: **০**।

## ৩. আগের ১–২৫ ব্যাচের সঙ্গে তুলনা
পূর্ণ exact-signature নীতি (normalized category + normalized question + সম্পূর্ণ option set + keyed answer) অনুসারে নতুন exact duplicate: **০**।

বিষয়গত পুনরাবৃত্তি/overlap আলাদা করে চিহ্নিত:
- extra_921 বনাম suite_7: বিদ্যুৎ প্রবাহের SI একক একই জ্ঞান; প্রশ্নের wording আলাদা।
- extra_949 বনাম suite_16/suite_51/suite_83/extra_807: Vitamin K ও রক্ত জমাট বাঁধা; wording বা option set আলাদা।
- extra_1078 বনাম suite_104/extra_782: শব্দের বেগের প্রশ্ন; wording আলাদা।
নীতিমতে এগুলো exact duplicate নয়, তাই স্বয়ংক্রিয়ভাবে বাদ দেওয়া হয়নি।

## ৪. তথ্যসূত্র
- Ampere — SI unit of electric current: https://www.nist.gov/pml/owm/si-units-electric-current
- Vitamin K and blood clotting: https://ods.od.nih.gov/factsheets/vitaminK-HealthProfessional/
- Speed of sound in different media: https://openstax.org/books/university-physics-volume-1/pages/17-2-speed-of-sound

## ৫. সমন্বিত পুনঃযাচাই অগ্রগতি
- Batch ১–৫: ১৪ retained
- Batch ৬–১০: ১৩ retained
- Batch ১১–১৫: ২ retained
- Batch ১৬–২০: ৭ retained
- Batch ২১–২৫: ১৩ retained
- Batch ২৬–৩০: ৩ retained
- Expansion Batch ১–৩০-এ প্রকৃত পুনঃযাচাইকৃত retained প্রশ্ন: **৫২টি**
- Baseline ১৩০টি প্রশ্নের প্রকৃত প্রশ্নভিত্তিক factual re-audit এখনো বাকি। তাই সাধারণ বিজ্ঞান **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।

## ৬. পরবর্তী ধাপ
ব্যবহারকারীর নির্ধারিত পাঁচ-ব্যাচ পদ্ধতি অনুসারে Batch ৩১–৩৫ যাচাই করে Batch ১–৩০-এর সম্মিলিত master-এর সঙ্গে তুলনা করা হবে।
