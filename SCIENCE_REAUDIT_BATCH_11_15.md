# সাধারণ বিজ্ঞান — পুনঃযাচাই অগ্রগতি: Expansion Batch ১১–১৫

তারিখ: ২৫ নভেম্বর ২০২৬  
পর্যায়: **সম্পন্ন — Batch ১–১০-এর সমন্বিত সেটের সঙ্গে তুলনা সম্পন্ন**  

## ১. উৎস ফাইল থেকে ব্যাচভিত্তিক উপস্থিতি যাচাই
মূল Expansion source file-এর additions array পরীক্ষা করে দেখা হয়েছে:
- Batch ১১: ৩৮টি মোট প্রশ্ন; সাধারণ বিজ্ঞান ০
- Batch ১২: ৩৯টি মোট প্রশ্ন; সাধারণ বিজ্ঞান ০
- Batch ১৩: ৩৪টি মোট প্রশ্ন; সাধারণ বিজ্ঞান ০
- Batch ১৪: ২৮টি মোট প্রশ্ন; সাধারণ বিজ্ঞান ০
- Batch ১৫: ৩৫টি মোট প্রশ্ন; সাধারণ বিজ্ঞান ২

অতএব Batch ১১–১৫-এ সাধারণ বিজ্ঞানের candidate মোট **২টি**; master-এ থাকা দুই প্রশ্নই source file-এ পাওয়া গেছে। কোনো অনুপস্থিত সাধারণ বিজ্ঞান প্রশ্ন পাওয়া যায়নি।

## ২. প্রশ্নভিত্তিক তথ্য যাচাই

| ID | যাচাইকৃত তথ্য/উত্তর | সিদ্ধান্ত |
|---|---|---|
| extra_560 | ইনসুলিন অগ্ন্যাশয়ের Langerhans islet-এর beta cell থেকে নিঃসৃত হয়; সঠিক উত্তর অগ্ন্যাশয় | সঠিক |
| extra_563 | উদ্ভিদের অধিকাংশ বাষ্পমোচন পাতার stomata/পত্ররন্ধ্র দিয়ে ঘটে | সঠিক |

### অপশন, উত্তর ও ব্যাখ্যা
- দুই প্রশ্নের প্রতিটিতে চারটি অপশন, keyed answer index ও explanation পরীক্ষা করা হয়েছে।
- উভয় প্রশ্নের keyed answer সঠিক; ব্যাখ্যায় কোনো তথ্যগত বিরোধ নেই।
- কোনো correction প্রয়োজন হয়নি।

## ৩. Batch ১১–১৫ বনাম Batch ১–১০ + baseline duplicate তুলনা
- Candidate: ২টি; retained: ২টি; এই group-এ duplicate removal: ০।
- Batch ১–১০-এর সমন্বিত retained set এবং baseline ১৩০টির সঙ্গে পূর্ণ exact signature (normalized category + normalized question + sorted normalized four-option set + keyed answer) তুলনায় নতুন exact duplicate: **০**।
- **বিষয়গত overlap:** extra_560 (ইনসুলিন অগ্ন্যাশয় থেকে নিঃসরণ) আগের extra_016, extra_198 ও extra_335-এর একই মূল তথ্য পুনরায় জিজ্ঞেস করে; তবে wording/পূর্ণ option set এক নয়, তাই এটি exact duplicate নয়। এটি conceptual repetition হিসেবে নথিভুক্ত; স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়নি।
- extra_563 নতুন বিষয়বস্তু; পূর্ববর্তী প্রশ্নগুলোর সঙ্গে exact বা স্পষ্ট পুনরাবৃত্তি পাওয়া যায়নি।

## ৪. প্রামাণ্য উৎস
- NCBI Bookshelf — Physiology, Pancreas: insulin source is pancreatic islet beta cells: https://www.ncbi.nlm.nih.gov/books/NBK459261/
- OpenStax Biology 2e — Transport of Water and Solutes in Plants: transpiration is water-vapor loss through stomata; stomatal regulation: https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants

## ৫. অগ্রগতি ও পরবর্তী ধাপ
- Batch ১–৫: ১৪ retained প্রশ্ন পুনঃযাচাই।
- Batch ৬–১০: ১৩ retained প্রশ্ন পুনঃযাচাই।
- Batch ১১–১৫: ২ retained প্রশ্ন পুনঃযাচাই।
- Expansion Batch ১–১৫ মিলিয়ে substantive re-audit: **২৯টি retained প্রশ্ন সম্পন্ন**।
- পরবর্তী ধাপ: Batch ১৬–২০ যাচাই করে Batch ১–১৫-এর সমন্বিত set-এর সঙ্গে তুলনা।
- baseline-এর ১৩০টি প্রশ্নের পূর্ণ factual re-audit এখনো বাকি; তাই সাধারণ বিজ্ঞান **IN PROGRESS — NOT LOCKED**।
