# গণিত — Candidate Rewrite Group 31–40 (২৬ নভেম্বর ২০২৬)

- সর্বশেষ master exclusion ledger থেকে পরবর্তী ১০টি candidate নির্বাচন করে পুনর্লিখন: math_L16_Q6, math_L16_Q9, math_L17_Q3, math_L17_Q5, math_L17_Q7, math_L17_Q8, math_L17_Q10, math_L18_Q2, math_L18_Q4, math_L18_Q7।
- অস্থায়ী checkpoint: প্রথম ৫টি rewrite শেষে recorded; ১০টি শেষে group checkpoint recorded।
- Runtime source: `app/src/main/assets/math-levels.js`; নতুন source blob: `63e477294446260dc0e16a06c5f3eac45af1c46e`।
- ১০/১০ প্রশ্নে independent calculation ও keyed option = expected PASS; ১০/১০ চারটি distinct option ও valid answer index PASS।
- Runtime compile PASS; মোট ৩০০ প্রশ্ন, ৩০ লেভেল, প্রতি লেভেলে ১০টি প্রশ্ন অক্ষুণ্ণ।
- Full runtime structural scan: invalid option/key mismatch ০; strict normalized category + stem + sorted options + keyed answer duplicate groups ০।
- Master-এ একই runtime content sync; replacement draft মোট ৫২; exclusion ledger থেকে এই ১০টি সরানোর পর reversible candidate অবশিষ্ট 131; permanent deletion ০।
- **গণিত LOCKED নয়।** Final content QA, remaining candidate rewrite, distractor redesign ও app integration validation বাকি।
