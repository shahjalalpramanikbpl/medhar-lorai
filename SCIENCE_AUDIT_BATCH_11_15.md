# সাধারণ বিজ্ঞান — ব্যাচ ১১–১৫ অডিট রিপোর্ট

- ব্যাচ ১১–১৫-এর মোট উৎস রেকর্ড: ১৭৪টি (৩৮ + ৩৯ + ৩৪ + ২৮ + ৩৫)।
- সাধারণ বিজ্ঞানের প্রশ্ন পাওয়া গেছে ২টি; দুটিই batch 15-এ।
- পূর্ববর্তী master ১–১০-এর সঙ্গে full signature তুলনায় exact duplicate: ০।
- নতুন স্বতন্ত্র ও তথ্যগতভাবে যাচাইকৃত প্রশ্ন রাখা হয়েছে: ২টি।
- master ১–১৫: ১৬০টি (১৩০টি baseline + ৩০টি যাচাইকৃত expansion)।
- malformed retained entry: ০।

## রাখা প্রশ্ন
- `extra_560`: মানবদেহে ইনসুলিন কোন অঙ্গ থেকে নিঃসৃত হয়? — অগ্ন্যাশয়। অগ্ন্যাশয়ের islets of Langerhans-এর beta cell ইনসুলিন নিঃসরণ করে।
- `extra_563`: উদ্ভিদের বাষ্পমোচন প্রধানত কোন অংশের মাধ্যমে ঘটে? — পত্ররন্ধ্র। পাতার stomata দিয়ে অধিকাংশ বাষ্পমোচন হয়।

## উৎস
- Insulin: NCBI Bookshelf / StatPearls — `https://www.ncbi.nlm.nih.gov/books/NBK459261/`
- Transpiration: OpenStax Biology — `https://openstax.org/books/biology/pages/30-5-transport-of-water-and-solutes-in-plants`
উৎস URL প্রশ্নের record-এও যুক্ত হয়েছে।

## সীমা
মূল suite-এর ১৩০টি baseline প্রশ্ন duplicate comparison-এর জন্য master-এ আছে; সেগুলোর পূর্ণ factual audit বাকি। এই রিপোর্ট কেবল expansion batch ১১–১৫-এর দুটি প্রশ্নের যাচাই নিশ্চিত করে।

## নীতি
কেবল normalized category + normalized question + sorted full option set + normalized correct answer এক হলে duplicate copy বাদ। ভিন্ন wording বা option set রাখা হয়।
