# সাধারণ জ্ঞান — মূল ব্যাংক পুনঃযাচাই অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬

## পরিধি ও সংরক্ষিত পূর্ববর্তী কাজ
- মূল runtime ফাইল: `app/src/main/assets/job-prep-suite.js` (GitHub blob SHA: `58bdc38a9da67ca6d86d1b56d8addaf95ccf50f5`)।
- মূল ফাইলে সাধারণ জ্ঞানের category call: ১৩২টি; স্বয়ংক্রিয় parser-এ 132টি entry সম্পূর্ণ parse হয়েছে।
- আগের সম্প্রসারণ মাস্টার `GK_AUDIT_MASTER_01_56.json`: 110টি প্রশ্ন, অপরিবর্তিত; blob SHA `b76c8c49ca81675d371ff61dcc06973f86669fe8`।

## প্রাথমিক structural/dedup scan (এটি পূর্ণ factual audit নয়)
- স্বয়ংক্রিয়ভাবে parse করা মূল প্রশ্ন: 132টি।
- parse করা প্রশ্নের মধ্যে ৪টি option ও valid answer index: 124টি।
- option parse/structure-এ manual inspection প্রয়োজন: 8টি; এগুলোকে ভুল প্রশ্ন হিসেবে গণ্য করা হয়নি।
- মূল ব্যাংকের parsed অংশে exact duplicate: 0টি।
- সম্প্রসারণ মাস্টারের সঙ্গে exact-signature match: 6টি candidate; delete করার আগে manual verification আবশ্যক।
- ১১০টি expansion প্রশ্নের মধ্যে sourceUrl ফাঁকা: 41টি; আগের LOCKED report-এ সীমাবদ্ধতা নথিভুক্ত।

## বর্তমান অবস্থা
**IN PROGRESS — NOT LOCKED.** এখনো ১৩২টি মূল প্রশ্নের প্রতিটির তথ্য, option, answer, explanation এবং expansion master-এর সঙ্গে final comparison সম্পন্ন হয়নি। কোনো প্রশ্ন মুছে ফেলা হয়নি; locked expansion master-ও পরিবর্তন করা হয়নি।

## পরবর্তী কাজ
1. ১৩২টি source call-এর পূর্ণ parse ও structural validation।
2. candidate duplicate-গুলো প্রশ্ন/option/answer মিলিয়ে যাচাই।
3. প্রতিটি প্রশ্নের factual accuracy ও explanation যাচাই; correction source-সহ নথিভুক্ত।
4. reconciled master ও audit status commit করে পুনরায় fetch verification।
