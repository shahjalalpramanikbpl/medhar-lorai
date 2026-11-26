# Computer & ICT — Batch 01–10 Progress Checkpoint

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: **IN_PROGRESS — NOT LOCKED**

## Source inventory
- মূল runtime file `app/src/main/assets/job-prep-suite.js`: **১৫০টি** Computer & ICT base question.
- Expansion batch 01–10: প্রাথমিকভাবে **৪২টি** Computer & ICT candidate entry.
- মোট প্রাথমিক candidate: **১৯২টি**।
- Canonical exact-signature comparison-এ ৩টি duplicate copy পাওয়া যায়:
  - `extra_025` — base bank-এর `base_079)-এর হুবহু duplicate.
  - `extra_141` — base bank-এর `base_075)-এর হুবহু duplicate.
  - `extra_385` — base bank-এর `base_105)-এর হুবহু duplicate.
- তিনটি duplicate copy expansion runtime file থেকে বাদ দেওয়া হয়েছে; আগের base entry রাখা হয়েছে।
- বাদ দেওয়া entry-গুলোর runtime file পুনরায় fetch করে অনুপস্থিতি যাচাই করা হয়েছে।
- পুনরায় গণনায়: **১৫০ base + ৩৯ expansion = ১৮৯ unique candidates**।
- পুনরায় canonical signature check: exact duplicate group **০**, duplicate copy **০**।
- ১৮৯টির চারটি option এবং answer index কাঠামোগত পরীক্ষা: malformed record **০**।

## Duplicate policy
শুধু category + normalized question + sorted normalized options + correct answer একই হলে duplicate হিসেবে বাদ। ভিন্ন wording, ভিন্ন example বা ভিন্ন option set থাকলে রাখা হয়েছে।

## Content audit status
এটি কেবল source inventory, exact-duplicate cleanup এবং option/answer-index structure checkpoint। ১৮৯টি প্রশ্নের তথ্যগত সত্যতা, উত্তরসূচি, ব্যাখ্যা, ambiguous wording এবং current relevance-এর পূর্ণ বিষয়বস্তু-পর্যালোচনা এখনো চলমান। তাই এই পর্যায়ে **LOCKED ঘোষণা করা হয়নি** এবং কোনো প্রশ্নের factual accuracy সম্পর্কে সামগ্রিক PASS দাবি করা হচ্ছে না।

## Source snapshots
- Base file SHA at checkpoint: `8114bfeb65c49dfed0af037f71d5b1fe5c661e1a`
- Duplicate-removal commits:
  - `fd5b35dcc1309e6bb4d1dc00340abe7309d58569`
  - `04df44538190bc0f169c94e1281e7ee11bd3f656`
  - `19f5fb4c702d14ee0abbf55ee8161aa71733d3c6`
- Re-fetch verification: all three removed IDs absent.
- Post-cleanup expansion file hashes recorded in GitHub history.

## Next
1. ১৮৯টি প্রশ্নের factual review ও source verification সম্পন্ন করা।
2. ভুল উত্তর/ব্যাখ্যা/অস্পষ্ট প্রশ্ন থাকলে প্রমাণসহ সংশোধন।
3. Base 1–10 group master তৈরি ও final full-signature/structure/runtime validation।
4. সব পরীক্ষায় PASS হলে তবেই `LOCKED` status commit।
