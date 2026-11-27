# সাধারণ জ্ঞান — মূল ব্যাংক পুনঃযাচাই অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬

## পরিধি
- মূল runtime ফাইল: `app/src/main/assets/job-prep-suite.js`; সর্বশেষ blob SHA: `aeccb1acd3a0e62c193a17a8f4bbb172951b7242`।
- আগের সম্প্রসারণ মাস্টার `GK_AUDIT_MASTER_01_56.json`: ১১০টি প্রশ্ন, অপরিবর্তিত ও LOCKED; blob SHA: `b76c8c49ca81675d371ff61dcc06973f86669fe8`।
- মূল ব্যাংকে ১২৬টি প্রশ্ন (আগের ধাপে ছয়টি exact duplicate copy বাদ দেওয়া হয়েছে)।

## তথ্যগত বাছাই ও সংশোধন
1. জাতীয় সংগীতের প্রথম ১০ চরণকে সংবিধানের ৪(১) অনুচ্ছেদে নির্ধারণ করা হয়েছে। তাই “কোন তফসিল” প্রশ্নটি ভুল/পুরোনো; সংশোধন করে Article 4(1) করা হয়েছে।
2. জাতীয় সংগীতের প্রথম দশ চরণ কোন “গ্রন্থ” থেকে—এই প্রশ্নের ভাষা অস্পষ্ট/ভুল ছিল; “কোন গানের প্রথম দশটি চরণ” করা হয়েছে।
3. “বৃহত্তম গ্যাসক্ষেত্র” প্রশ্নটি reserve/production গুলিয়ে ফেলতে পারে। এটিকে “বর্তমানে সর্বাধিক গ্যাস উৎপাদনকারী গ্যাসক্ষেত্র” করা হয়েছে এবং উত্তর Bibiyana; Chevron ও Petrobangla-র প্রকাশিত তথ্য দিয়ে যাচাই।
4. “প্রথম বেসরকারি বাণিজ্যিক ব্যাংক” প্রশ্নের উত্তর National Bank ভুল ছিল। Bangladesh Bank-এর তালিকা এবং AB Bank-এর নিজস্ব ইতিহাস অনুযায়ী AB Bank ১২ এপ্রিল ১৯৮২ কার্যক্রম শুরু করে; প্রশ্ন/অপশন/উত্তর সংশোধন করা হয়েছে।

## কাঠামোগত যাচাই ও duplicate cleanup
- আগের ১৩২টি মূল প্রশ্ন থেকে সম্প্রসারণ মাস্টারে থাকা ছয়টি exact duplicate copy বাদ; canonical ১১০টি expansion প্রশ্ন অক্ষত।
- cleanup-এর পর ১২৬টি মূল GK প্রশ্ন; আগের পুনরায়-fetch scan-এ ১২৬/১২৬ parse, ৪টি option, valid answer index ও explanation; structural error ০; internal exact duplicate ০।
- মোট পাঁচটি তথ্যগত সংশোধন runtime-এ অন্তর্ভুক্ত: আগের চারটি (জাতীয় সংগীত/সংবিধান, গ্যাস উৎপাদন, AB Bank) এবং প্রথম জাতীয় সংসদের স্পিকার।
- ১২৬টি মূল GK প্রশ্নের প্রশ্ন-উত্তর তালিকা পুনরায় দেখে তথ্যগত অসংগতি, দ্ব্যর্থতা ও পুনরাবৃত্তি যাচাই করা হয়েছে। যাচাইকৃত গুরুত্বপূর্ণ ঐতিহাসিক/সাংবিধানিক দাবিগুলোতে প্রাথমিক বা নির্ভরযোগ্য উৎস ব্যবহার করা হয়েছে।
- “বাংলাদেশের জাতীয় সংসদের প্রথম স্পিকার” প্রশ্নের উত্তর আগে শাহ আবদুল হামিদ ছিল—ভুল। সংশোধিত উত্তর মোহাম্মদ মোহাম্মদউল্লাহ; শাহ আবদুল হামিদ ছিলেন গণপরিষদের স্পিকার। BSS-এর ২০২৩ সালের সংসদ-ইতিহাস প্রতিবেদনে প্রথম সংসদের স্পিকার হিসেবে মোহাম্মদ মোহাম্মদউল্লাহ নিশ্চিত।
- ইডেন মহিলা কলেজের প্রশ্নে ১৮৭৩ সালকে প্রতিষ্ঠানটির প্রাথমিক সূচনা/স্কুল হিসেবে ধরা হয়েছে; কলেজ শাখার পরবর্তী ইতিহাস আলাদা—ব্যাখ্যায় এই পার্থক্য স্পষ্ট রাখা হয়েছে।
- ভিন্ন অপশনসেটসহ একই প্রশ্নের দুই রূপ রাখা হয়েছে; ব্যবহারকারীর নির্ধারিত নিয়ম অনুযায়ী ভিন্ন অপশনসেটকে duplicate বলে বাদ দেওয়া হয়নি।

## ব্যবহৃত প্রাথমিক/বিশ্বস্ত তথ্যসূত্র
- Bangladesh Laws: Constitution, Article 4(1): https://bdlaws.minlaw.gov.bd/act-367/section-24551.html?lang=en
- Bangladesh Laws: National Anthem, Flag and Emblem Order, 1972: https://bdlaws.minlaw.gov.bd/act-418/section-18411.html?lang=en
- Bangladesh Bank annual report appendix (private commercial banks and operation dates): https://www.bb.org.bd/pub/annual/anreport/ar1819/app03.pdf
- AB Bank official history: https://abbl.com/background/
- Chevron official Bibiyana field page: https://bangladesh.chevron.com/our-businesses/bibiyana
- Petrobangla Annual Report 2022–23: https://petrobangla.org.bd/sites/default/files/files/petrobangla.portal.gov.bd/annual_reports/22137eda_60d5_4f48_be2d_8ae973e87ffc/2024-12-04-11-04-31d5f6a0fc3eb6d8f0ab8c17c71e3060.pdf

## চূড়ান্ত অবস্থা
**🔒 LOCKED — সাধারণ জ্ঞান (মূল ব্যাংক): ১২৬টি প্রশ্ন।** তথ্যগত বাছাই সম্পন্ন; শনাক্ত ভুল সংশোধন, উত্তরসূচি পুনরায় যাচাই এবং কাঠামোগত পরীক্ষা সম্পন্ন। ১১০টি expansion master আগের মতো পৃথকভাবে LOCKED।

## GitHub পরিবর্তন
- Duplicate cleanup commit: `820e3812fd1d71af3ae0b5da7485451eda446664`।
- Fact corrections commit: `2543cd6fed720e9450b7af8590a9b1db2710fba2`।
- First Speaker correction commit: `17963f3fee5709438a6f115a5a41d938d5303b7f`।
- Parliament history source: https://www.bssnews.net/news/119170
- Eden Mohila College official history: https://emc.edu.bd/about-us/history/
- Flag designer distinction: https://www.thedailystar.net/news/bangladesh/news/national-flags-first-designer-shib-narayan-passes-away-3590491
