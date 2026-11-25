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
- এই পর্যায়ে মোট **১৩২টি বাংলা exact duplicate copy** GitHub-এর main branch থেকে মুছে দেওয়া হয়েছে। এটি বর্তমান cleanup পর্যায়ের নিশ্চিত deletion count; চূড়ান্ত বাংলা unique count নয়।
- পরিবর্তনগুলো GitHub commit-এ সংরক্ষিত। প্রতিটি deletion-এ duplicate signature-এর চারটি উপাদান মিলিয়ে দেখা হয়েছে; একই বিষয়/টপিকের ভিন্ন উদাহরণ ইচ্ছাকৃতভাবে বাদ দেওয়া হয়নি।
- বাংলা unique count এখনো চূড়ান্ত নয়: সব expansion batch-এর মধ্যে পূর্ণ all-pairs cross-check, runtime parsing এবং final reconciliation বাকি।
- প্রশ্নের উত্তর, অপশন, ব্যাখ্যা, বানান, দ্ব্যর্থতা ও ভুল তথ্যের পূর্ণ বিষয়বস্তু-অডিটও বাকি। তাই বাংলা প্রশ্নব্যাংককে এখনো সম্পূর্ণ নির্ভুল/চূড়ান্ত বলা যাবে না।

## স্থির অডিট নীতি
- English final result: **৪৬৩টি unique প্রশ্ন** — অপরিবর্তিত ও লক।
- কেবল হুবহু duplicate copy বাদ।
- একই বিষয় যাচাই করা ভিন্ন উদাহরণ, ভিন্ন option set বা ভিন্ন সঠিক উত্তর থাকলে প্রশ্ন রাখা।
- duplicate signature: normalized category + normalized question + sorted options + correct answer; option order উপেক্ষা করা হয়।
- প্রমাণিত ভুল ছাড়া প্রশ্নের উত্তর/বিষয়বস্তু নীরবে পরিবর্তন নয়।
- উভয় বিষয়ের audit ও স্বয়ংক্রিয় content validation সফল হওয়ার পরেই BUILD-trigger commit দিয়ে Android Debug APK, signed Release APK এবং AAB তৈরি হবে।
- Build ফলাফল ও artifact যাচাই না হওয়া পর্যন্ত APK প্রস্তুত বলে দাবি করা যাবে না।

## পরবর্তী কাজ
১. expansion batch-গুলোর অবশিষ্ট all-pairs duplicate cross-check শেষ করা।
২. বাংলা প্রশ্নের উত্তর, option, ব্যাখ্যা, বানান, ambiguity ও factual accuracy audit করা।
৩. বাংলা unique final count runtime-এ যাচাই করে স্থির করা।
৪. বাংলা + ইংরেজির চূড়ান্ত audit report তৈরি করা; English ৪৬৩ অপরিবর্তিত থাকবে।
৫. validation সফল হলে Android build ও artifact verification।
