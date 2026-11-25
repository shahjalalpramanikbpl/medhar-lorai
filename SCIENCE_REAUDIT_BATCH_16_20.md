# সাধারণ বিজ্ঞান — পুনঃযাচাই রিপোর্ট: Expansion Batch ১৬–২০

তারিখ: ২৫ নভেম্বর ২০২৬  
অবস্থা: **এই গ্রুপের যাচাই সম্পন্ন; বিষয়টি এখনো LOCKED নয়**

## ১. উৎস ও candidate গণনা
- Batch ১৬–১৯-এ সাধারণ বিজ্ঞানের প্রশ্ন: ০টি।
- Batch ২০-এ সাধারণ বিজ্ঞানের retained source entry: ৭টি।
- Master-এর পূর্ববর্তী batch reconciliation অনুযায়ী Batch ১৬–২০-এ মোট candidate ছিল ৮টি; এর মধ্যে `extra_747` আগেই `extra_238`-এর exact duplicate হিসেবে বাদ দেওয়া হয়েছিল।
- তাই এই গ্রুপে নতুন করে যাচাই করা হয়েছে ৭টি retained প্রশ্ন; ১টি duplicate অপসারণ আগের রেকর্ডে নথিভুক্ত।

## ২. প্রশ্নভিত্তিক তথ্য, অপশন, উত্তর ও ব্যাখ্যা যাচাই

| ID | বিষয় | সঠিক উত্তর | সিদ্ধান্ত |
|---|---|---|---|
| extra_741 | লোহিত রক্তকণিকা কোথায় তৈরি হয় | অস্থিমজ্জা | সঠিক |
| extra_742 | শিশুদের ভিটামিন D ঘাটতিতে রোগ | রিকেটস | সঠিক |
| extra_745 | সালোকসংশ্লেষণে ব্যবহৃত গ্যাস | কার্বন ডাই-অক্সাইড | সঠিক |
| extra_746 | পানির রাসায়নিক সংকেত | H₂O | সঠিক |
| extra_748 | স্বাভাবিক দেহতাপমাত্রা (প্রায়) | ৩৭°C | সঠিক; আনুমানিক মান |
| extra_751 | শূন্যস্থানে আলোর বেগ (প্রায়) | ৩×১০⁸ মিটার/সেকেন্ড | সঠিক; NIST-এর নির্দিষ্ট মান ২৯৯,৭৯২,৪৫৮ মি/সে |
| extra_752 | ইনসুলিন নিঃসরণকারী অঙ্গ | অগ্ন্যাশয় | সঠিক; বিটা কোষ থেকে |

প্রতিটি retained প্রশ্নের চারটি অপশন, answer index এবং explanation মিলিয়ে দেখা হয়েছে। এই সাতটির কোনো উত্তর বা ব্যাখ্যায় সংশোধন প্রয়োজন হয়নি।

## ৩. ডুপ্লিকেট তুলনা
- ১–১৫ ব্যাচের সমন্বিত retained set এবং baseline master-এর সঙ্গে পূর্ণ signature তুলনা: নতুন exact duplicate **0**।
- Signature: normalized category + normalized question + sorted normalized four-option set + keyed answer।
- পূর্বে বাদ দেওয়া `extra_747` → `extra_238` duplicate-টি এই রিপোর্টে পুনরায় বাদ দেওয়া হয়নি; আগের removal ledger বহাল।
- কাছাকাছি ধারণার প্রশ্ন exact duplicate হিসেবে গণ্য করা হয়নি।

## ৪. প্রামাণ্য তথ্যসূত্র
- লোহিত রক্তকণিকা অস্থিমজ্জায় তৈরি: https://www.ncbi.nlm.nih.gov/books/NBK607436/
- শিশুদের ভিটামিন D ঘাটতি ও রিকেটস: https://ods.od.nih.gov/factsheets/VitaminD-healthProfessional/
- সালোকসংশ্লেষণ ও কার্বন ডাই-অক্সাইড: https://www.ncbi.nlm.nih.gov/books/NBK26838/
- পানির রাসায়নিক পরিচয়: https://pubchem.ncbi.nlm.nih.gov/compound/Water
- স্বাভাবিক দেহতাপমাত্রা—প্রায় ৩৭°C একটি প্রচলিত গড়; ব্যক্তিভেদে/সময়ভেদে পরিবর্তন হয়: https://www.ncbi.nlm.nih.gov/books/NBK507838/
- শূন্যস্থানে আলোর নির্দিষ্ট বেগ: https://physics.nist.gov/cgi-bin/cuu/Value?c%7Csearch_for=speed+light
- ইনসুলিন অগ্ন্যাশয়ের beta cell থেকে নিঃসৃত: https://www.ncbi.nlm.nih.gov/books/NBK459261/

## ৫. অগ্রগতি
- Batch ১–৫: ১৪টি retained প্রশ্ন
- Batch ৬–১০: ১৩টি retained প্রশ্ন
- Batch ১১–১৫: ২টি retained প্রশ্ন
- Batch ১৬–২০: ৭টি retained প্রশ্ন
- Expansion batch ১–২০-এ পুনঃযাচাইকৃত retained প্রশ্ন: **৩৬টি**
- এই গ্রুপে নতুন correction: ০
- এই গ্রুপে নতুন exact duplicate (পূর্ববর্তী set-এর সঙ্গে): **0**
- সাধারণ বিজ্ঞানের চূড়ান্ত LOCK: **এখনো নয়**। Baseline ১৩০টি প্রশ্নের substantive re-audit এবং অবশিষ্ট expansion group-গুলো সম্পন্ন না হওয়া পর্যন্ত LOCK করা হবে না।

## ৬. পরবর্তী ধাপ
Batch ২১–২৫-এর candidate প্রশ্ন যাচাই করে ১–২০ ব্যাচের সম্মিলিত সেটের সঙ্গে একই signature policy-তে তুলনা করা হবে।
