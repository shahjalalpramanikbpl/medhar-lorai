# English Literature — Base Bank + Expansion 01–10 Cross-Deduplication

তারিখ: ২৭ নভেম্বর ২০২৬

## পরিধি
- মূল `job-prep-suite.js`: cleanup-এর আগে ১৩৩টি English Literature record.
- Expansion batch ০১–১০: cleanup-এর আগে ৩৬টি English Literature record.
- মোট source record: ১৬৯টি.

## Exact duplicate ফলাফল
Canonical full signature: normalized category + normalized question + sorted normalized options + normalized correct answer.

মোট ৮টি duplicate record শনাক্ত ও runtime source থেকে বাদ:
1. `base_014` ↔ `extra_039` — Gulliver’s Travels; expansion duplicate অপসারণ।
2. `base_023` ↔ `extra_274` — The Old Man and the Sea; expansion duplicate অপসারণ।
3. `base_037` ↔ `extra_076` — Pride and Prejudice; expansion duplicate অপসারণ।
4. `base_044` ↔ `extra_158` — A Tale of Two Cities; expansion duplicate অপসারণ।
5. `base_045` ↔ `extra_156` — Wuthering Heights; expansion duplicate অপসারণ।
6. `base_055` ↔ `extra_159` — Ulysses; expansion duplicate অপসারণ।
7. `base_028` ↔ `base_048` — The Importance of Being Earnest; পরের base record অপসারণ।
8. `base_019` ↔ `base_068` — Great Expectations; পরের base record অপসারণ।

## Runtime source cleanup
- মূল base bank থেকে দুইটি exact duplicate Q() record বাদ।
- Expansion batch ১, ২, ৪ ও ৭ থেকে মোট ছয়টি exact duplicate object বাদ।
- কোনো unique/near-repeat প্রশ্ন শুধু একই সাহিত্যকর্ম নিয়ে বলে বাদ দেওয়া হয়নি।
- Cleanup-এর পর পুনরায় signature scan: **০ exact duplicate group**।

## বর্তমান সমন্বিত Master
- Base bank: ১৩১টি unique record.
- Expansion ০১–১০: ৩০টি unique record.
- মোট unique English Literature record: **১৬১টি**.
- Exact duplicate অপসারণ: **৮টি**.
- Master JSON: `ENGLISH_LITERATURE_MASTER_BASELINE_01_10.json`.
- Master commit: `4c9aa0c67743bed7070d26cff8c1361599e8368f`.

## Scope / quality status
এটি exact-duplicate cross-audit ও structural consolidation সম্পন্ন হওয়ার রেকর্ড। base-bank-এর প্রতিটি সাহিত্য-তথ্য, keyed answer ও explanation-কে পৃথক প্রাথমিক/প্রাতিষ্ঠানিক উৎস দিয়ে পূর্ণ fact-check এখনো সম্পন্ন নয়। তাই English Literature subject **এখনো LOCKED নয়**। expansion ১১–২০-এর সঙ্গে তুলনাও বাকি।
