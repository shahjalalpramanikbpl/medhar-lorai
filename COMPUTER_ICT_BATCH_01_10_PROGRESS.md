# Computer & ICT — Batch 01–10 Audit Checkpoint

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: **CONTENT REVIEWED — FINAL LOCK VALIDATION PENDING**

## Inventory and duplicate reconciliation
- Base runtime bank: **১৫০** Computer & ICT questions.
- Expansion batches 01–10: initially **৪২** ICT entries.
- Initial candidate total: **১৯২**.
- Exact duplicate copies removed from expansion runtime:
  - `extra_025` — duplicate of base_079.
  - `extra_141` — duplicate of base_075.
  - `extra_385` — duplicate of base_105.
- All three removed IDs were re-fetched and verified absent.
- Post-cleanup inventory: **১৫০ base + ৩৯ expansion = ১৮৯ unique candidates**.
- Canonical exact-signature check: **০ duplicate groups / ০ duplicate copies**.
- Structure check: all ১৮৯ records have four options and a valid answer index; malformed records **০**.

## Content review
- Reviewed the full set of ১৫০ base questions and ৩৯ retained expansion questions for factual correctness, answer key, explanation quality, ambiguous wording and usefulness for competitive-job preparation.
- Verified key computer architecture, binary/byte, RAM/ROM, ALU, networking and protocol facts against authoritative educational/technical references.
- One terminology precision issue was identified and corrected in three questions: the binary quantity of 1024 bytes is now named **কিবিবাইট (KiB)**, explicitly distinguished from SI **কিলোবাইট (kB = 1000 bytes)**:
  - Base bank: two questions (previously used “কিলোবাইট” for 1024 bytes).
  - Expansion: `extra_343`.
- Other reviewed answer keys and explanations: no additional confirmed factual error identified in this pass. Similar-topic questions with different wording or option sets were retained under the user's duplicate policy.

## Corrections committed
- Base source correction: `1ff716ff9ef811389ae22ac2f575a473ebbbcedd`
- Expansion `extra_343` correction: `12dfb66921ff27b8e79247645ccf364d1a96ca7b`
- Exact duplicate removals:
  - `fd5b35dcc1309e6bb4d1dc00340abe7309d58569`
  - `04df44538190bc0f169c94e1281e7ee11bd3f656`
  - `19f5fb4c702d14ee0abbf55ee8161aa71733d3c6`

## Sources consulted
- OpenStax, Introduction to Computer Science — computer systems, CPU/ALU, RAM, bits and bytes.
- NCBI Bookshelf, Reference Guide on Computer Science — binary encoding, CPU and networking fundamentals.
- Stanford CS101 — HTML, HTTP, URLs and web client/server.
- Technical standards/educational reference on IPv4/IPv6, HTTPS/TLS, SMTP, IMAP, FTP and DNS.

## Final lock gate — still pending
Before marking this group LOCKED:
1. Re-fetch all current runtime sources after edits.
2. Re-run exact-signature duplicate scan and four-option/answer-index validation against the final files.
3. Generate the consolidated Batch 01–10 master and final audit report.
4. Commit the final LOCKED state only after those checks pass.

**Current decision: content review completed; final master/runtime reconciliation pending. NOT LOCKED YET.**
