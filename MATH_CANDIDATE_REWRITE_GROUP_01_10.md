# গণিত — Candidate Rewrite Group 01–10

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **COMPLETED — PENDING FINAL QA; NOT LOCKED**

## পদ্ধতি
- আগের consolidated master-এর ১১৯টি reversible candidate-এর ক্রমানুসারে প্রথম ১০টি প্রশ্ন নেওয়া হয়েছে।
- ৫টি প্রশ্ন শেষে অস্থায়ী checkpoint এবং ১০টি শেষে group checkpoint নথিভুক্ত।
- কোনো প্রশ্ন স্থায়ীভাবে মুছে ফেলা হয়নি; প্রতিটি পুরোনো দুর্বল stem একই question ID-তে উন্নত প্রশ্ন দিয়ে প্রতিস্থাপিত।

## ১০টি পুনর্লিখিত প্রশ্ন
| ID | নতুন বিষয়/দক্ষতা | সঠিক উত্তর |
|---|---|---:|
| math_L1_Q5 | ঐকিক নিয়ম, একক মূল্য থেকে মোট | ১২০ টাকা |
| math_L2_Q4 | শ্রমিক-দিন ব্যস্তানুপাত | ৯ দিন |
| math_L2_Q6 | সময়কে ঘণ্টায় রূপান্তর করে দূরত্ব | ৭২ কিমি |
| math_L3_Q3 | চিহ্নিত মূল্যের ওপর ছাড় | ২,০৪০ টাকা |
| math_L4_Q2 | গড় থেকে অনুপস্থিত সংখ্যা | ৩৬ |
| math_L5_Q1 | অনুপাত ও মোট যোগফল | ২৪০ |
| math_L5_Q3 | ট্রেন-খুঁটি অতিক্রম, একক রূপান্তর | ৫৪ কিমি/ঘণ্টা |
| math_L7_Q10 | ধারাবাহিক ছাড় | ১,৭১০ টাকা |
| math_L8_Q9 | সরল সুদ | ১,২০০ টাকা |
| math_L9_Q8 | ধারাবাহিক শতকরা বৃদ্ধি ও ছাড় | ১,২৪২ টাকা |

## যাচাই
- নতুন ১০টির calculation/key/expected value: ১০/১০ PASS.
- চারটি স্বতন্ত্র option ও valid answer index: ১০/১০ PASS.
- Runtime JavaScript compile: PASS.
- Runtime bank: ৩০০ প্রশ্ন, ৩০ level, প্রতি level-এ ১০ প্রশ্ন: PASS.
- Full current runtime strict signature duplicate scan: ০ duplicate groups.
- Level 1–10 replacement difficulty metadata: সহজ; level progression অক্ষুণ্ণ।
- এটি পূর্ণ external CI বা device test নয়।

## অগ্রগতি
- মোট replacement draft: ২২ (আগের ১২ + নতুন ১০)।
- অবশিষ্ট reversible candidate: ১০৯।
- Permanent deletion: ০।
- Math LOCKED: **না**।

পরবর্তী ধাপ: candidate list-এর পরবর্তী ১০টি প্রশ্ন (১১–২০) একই পদ্ধতিতে পুনর্লিখন; তারপর ৫/১০ checkpoint, duplicate scan, calculation/option validation এবং GitHub update।
