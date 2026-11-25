/* মেধার লড়াই — চাকরি প্রস্তুতি প্রশ্নব্যাংক সম্প্রসারণ ব্যাচ ৩০ */
(()=>{'use strict';
const additions=[
  {
    "id": "extra_1066",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘সন্ধি’ ব্যাকরণের কোন অংশের আলোচ্য বিষয়?",
    "o": [
      "ধ্বনিতত্ত্ব",
      "শব্দার্থতত্ত্ব",
      "বাক্যতত্ত্ব",
      "ছন্দতত্ত্ব"
    ],
    "a": 0,
    "e": "সন্ধিতে পাশাপাশি ধ্বনির মিলন বা পরিবর্তন ঘটে; তাই এটি ধ্বনিতত্ত্বের আলোচ্য।",
    "source": "বাংলা ব্যাকরণ",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1067",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘যে উপকারীর উপকার স্বীকার করে’—এক কথায় কী?",
    "o": [
      "কৃতজ্ঞ",
      "কৃতঘ্ন",
      "পরোপকারী",
      "উপকারী"
    ],
    "a": 0,
    "e": "যে অন্যের উপকার স্বীকার করে, তাকে কৃতজ্ঞ বলা হয়।",
    "source": "শব্দার্থ",
    "d": "সহজ",
    "sourceUrl": ""
  },
  {
    "id": "extra_1068",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘নীলকণ্ঠ’ শব্দটি কোন সমাসের উদাহরণ?",
    "o": [
      "দ্বন্দ্ব",
      "বহুব্রীহি",
      "অব্যয়ীভাব",
      "কর্মধারয়"
    ],
    "a": 1,
    "e": "যার কণ্ঠ নীল—এমন ব্যক্তি বা সত্তাকে বোঝায়; সমাসবদ্ধ পদটি অন্যকে নির্দেশ করায় এটি বহুব্রীহি সমাস।",
    "source": "সমাস",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1069",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘অগ্নিবীণা’ কাব্যগ্রন্থের প্রথম প্রকাশকাল কোনটি?",
    "o": [
      "১৯২২",
      "১৯২৩",
      "১৯২৪",
      "১৯২৫"
    ],
    "a": 0,
    "e": "কাজী নজরুল ইসলামের প্রথম কাব্যগ্রন্থ ‘অগ্নিবীণা’ ১৯২২ সালে প্রকাশিত হয়।",
    "source": "বাংলা সাহিত্য",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1070",
    "c": "English",
    "q": "Choose the correct passive form: “People speak English all over the world.”",
    "o": [
      "English was spoken all over the world.",
      "English is spoken all over the world.",
      "English has spoken all over the world.",
      "English speaks all over the world."
    ],
    "a": 1,
    "e": "The sentence is in the simple present; its passive form is “is spoken”.",
    "source": "Voice",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1071",
    "c": "English",
    "q": "Identify the figure of speech in “The wind whispered through the trees.”",
    "o": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "a": 2,
    "e": "The wind is given the human ability to whisper; this is personification.",
    "source": "Figures of speech",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1072",
    "c": "English",
    "q": "Choose the correctly punctuated sentence.",
    "o": [
      "Its raining, lets go inside.",
      "It's raining; let's go inside.",
      "Its raining; lets go inside.",
      "It's raining let's go, inside."
    ],
    "a": 1,
    "e": "“It's” and “let's” require apostrophes; a semicolon correctly joins the closely related independent clauses.",
    "source": "Punctuation",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1074",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "জাতিসংঘের আন্তর্জাতিক বিচার আদালত (ICJ) কোথায় অবস্থিত?",
    "o": [
      "জেনেভা",
      "নিউইয়র্ক",
      "দ্য হেগ",
      "ভিয়েনা"
    ],
    "a": 2,
    "e": "আন্তর্জাতিক বিচার আদালত নেদারল্যান্ডসের দ্য হেগ শহরের পিস প্যালেসে অবস্থিত।",
    "source": "জাতিসংঘ",
    "d": "সহজ",
    "sourceUrl": "https://www.icj-cij.org/court"
  },
  {
    "id": "extra_1075",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "বিশ্বব্যাংকের সদর দপ্তর কোন শহরে?",
    "o": [
      "ওয়াশিংটন, ডি.সি.",
      "নিউইয়র্ক",
      "লন্ডন",
      "প্যারিস"
    ],
    "a": 0,
    "e": "বিশ্বব্যাংক গ্রুপের সদর দপ্তর যুক্তরাষ্ট্রের ওয়াশিংটন, ডি.সি.-তে।",
    "source": "আন্তর্জাতিক সংস্থা",
    "d": "সহজ",
    "sourceUrl": "https://www.worldbank.org/ext/en/contacts"
  },
  {
    "id": "extra_1076",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "বাংলাদেশের জাতীয় সংসদ ভবনের স্থপতি কে?",
    "o": [
      "মাজহারুল ইসলাম",
      "লুই আই কান",
      "ফজলুর রহমান খান",
      "পল রুডলফ"
    ],
    "a": 1,
    "e": "জাতীয় সংসদ ভবনের নকশা করেন মার্কিন স্থপতি লুই আই কান।",
    "source": "বাংলাদেশ স্থাপত্য",
    "d": "সহজ",
    "sourceUrl": "https://www.parliament.gov.bd/about/history"
  },
  {
    "id": "extra_1078",
    "c": "সাধারণ বিজ্ঞান",
    "q": "শব্দের বেগ কোন মাধ্যমে সাধারণত সবচেয়ে বেশি?",
    "o": [
      "বায়ু",
      "পানি",
      "ইস্পাত",
      "শূন্যস্থান"
    ],
    "a": 2,
    "e": "এই বিকল্পগুলোর মধ্যে ইস্পাতে শব্দের বেগ পানির ও বায়ুর চেয়ে বেশি; শূন্যস্থানে শব্দ চলতে পারে না।",
    "source": "পদার্থবিজ্ঞান",
    "d": "মাঝারি",
    "sourceUrl": "https://openstax.org/books/university-physics-volume-1/pages/17-2-speed-of-sound",
    "auditStatus": "content_checked_batches_26_30"
  },
  {
    "id": "extra_1080",
    "c": "কম্পিউটার ও ICT",
    "q": "রিলেশনাল ডেটাবেজে Primary Key-এর প্রধান বৈশিষ্ট্য কী?",
    "o": [
      "একই মান একাধিকবার থাকতে পারে",
      "প্রতিটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করে",
      "শুধু টেক্সট সংরক্ষণ করে",
      "টেবিল মুছে ফেলে"
    ],
    "a": 1,
    "e": "Primary Key প্রতিটি রেকর্ডকে অনন্যভাবে শনাক্ত করে; এর মান পুনরাবৃত্ত বা NULL হতে পারে না।",
    "source": "ডেটাবেজ",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1082",
    "c": "কম্পিউটার ও ICT",
    "q": "HTML-এ হাইপারলিংক তৈরির জন্য কোন ট্যাগ ব্যবহৃত হয়?",
    "o": [
      "<p>",
      "<a>",
      "<img>",
      "<link>"
    ],
    "a": 1,
    "e": "HTML-এর anchor বা <a> ট্যাগ দিয়ে হাইপারলিংক তৈরি করা হয়।",
    "source": "ওয়েব প্রযুক্তি",
    "d": "সহজ",
    "sourceUrl": ""
  },
  {
    "id": "extra_1083",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে 1 KiB সমান কত বাইট?",
    "o": [
      "১০০০",
      "১০২৪",
      "১০০",
      "২০৪৮"
    ],
    "a": 1,
    "e": "বাইনারি এককে ১ KiB (kibibyte) = ১০২৪ বাইট।",
    "source": "ডেটা পরিমাপ",
    "d": "সহজ",
    "sourceUrl": ""
  },
  {
    "id": "extra_1085",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি পরীক্ষায় ৪০% নম্বর পেয়ে একজন ২৪ নম্বরের জন্য ফেল করল। পাস নম্বর ৫০% হলে পূর্ণমান কত?",
    "o": [
      "২০০",
      "২৪০",
      "৪০০",
      "৪৮০"
    ],
    "a": 1,
    "e": "পাস ও প্রাপ্ত নম্বরের ব্যবধান ১০% = ২৪। তাই পূর্ণমান = ২৪÷০.১০ = ২৪০।",
    "source": "শতকরা",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1086",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি কাজ A একা ১২ দিনে এবং B একা ১৮ দিনে করতে পারে। একত্রে কাজটি কত দিনে করবে?",
    "o": [
      "৬ দিন",
      "৭.২ দিন",
      "৮ দিন",
      "৯ দিন"
    ],
    "a": 1,
    "e": "এক দিনের কাজ = ১/১২+১/১৮=৫/৩৬। সময় = ৩৬/৫ = ৭.২ দিন।",
    "source": "কাজ ও সময়",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1087",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি সুষম ছক্কা একবার নিক্ষেপে জোড় সংখ্যা অথবা ৩ পাওয়ার সম্ভাবনা কত?",
    "o": [
      "১/৩",
      "১/২",
      "২/৩",
      "৫/৬"
    ],
    "a": 2,
    "e": "অনুকূল ফল ২, ৩, ৪, ৬—মোট ৪টি। সম্ভাবনা ৪/৬=২/৩।",
    "source": "সম্ভাবনা",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1088",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "বক্তব্য: সব কবি সৃজনশীল। কিছু শিক্ষক কবি। সিদ্ধান্ত কোনটি অবশ্যই সত্য?",
    "o": [
      "সব শিক্ষক সৃজনশীল",
      "কিছু শিক্ষক সৃজনশীল",
      "কোনো শিক্ষক সৃজনশীল নন",
      "সব সৃজনশীল ব্যক্তি কবি"
    ],
    "a": 1,
    "e": "যে কিছু শিক্ষক কবি, তারা সবাই সৃজনশীল; তাই কিছু শিক্ষক সৃজনশীল—এটি অবশ্যই সত্য।",
    "source": "সিলোজিজম",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1090",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "ঘড়িতে ৩টা ৩০ মিনিটে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্রতর কোণ কত?",
    "o": [
      "৬০°",
      "৭৫°",
      "৯০°",
      "১০৫°"
    ],
    "a": 1,
    "e": "মিনিটের কাঁটা ১৮০° এবং ঘণ্টার কাঁটা ১০৫° অবস্থানে; পার্থক্য ৭৫°।",
    "source": "ঘড়ি",
    "d": "কঠিন",
    "sourceUrl": ""
  },
  {
    "id": "extra_1091",
    "c": "English Literature",
    "q": "Who is the author of the novel “Middlemarch”?",
    "o": [
      "Jane Austen",
      "George Eliot",
      "Emily Brontë",
      "Virginia Woolf"
    ],
    "a": 1,
    "e": "George Eliot, the pen name of Mary Ann Evans, wrote Middlemarch.",
    "source": "Victorian novel",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1092",
    "c": "English Literature",
    "q": "“Paradise Lost” is primarily written in which verse form?",
    "o": [
      "Heroic couplets",
      "Blank verse",
      "Free verse",
      "Ballad metre"
    ],
    "a": 1,
    "e": "John Milton's Paradise Lost is an epic poem written in unrhymed iambic pentameter, known as blank verse.",
    "source": "Epic poetry",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1093",
    "c": "English Literature",
    "q": "Which literary period is most closely associated with the works of Alexander Pope?",
    "o": [
      "Romantic Age",
      "Augustan Age",
      "Victorian Age",
      "Modern Age"
    ],
    "a": 1,
    "e": "Alexander Pope is a major poet of the Augustan Age, noted for heroic couplets and satire.",
    "source": "Literary periods",
    "d": "মাঝারি",
    "sourceUrl": ""
  },
  {
    "id": "extra_1094",
    "c": "English Literature",
    "q": "Who wrote the novel “Things Fall Apart”?",
    "o": [
      "Chinua Achebe",
      "Wole Soyinka",
      "Ngũgĩ wa Thiong'o",
      "Nadine Gordimer"
    ],
    "a": 0,
    "e": "Nigerian writer Chinua Achebe published Things Fall Apart in 1958.",
    "source": "African literature",
    "d": "সহজ",
    "sourceUrl": ""
  }
];
additions.push({"id":"extra_1095","c":"সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান","q":"২০২৫ সালে জাতিসংঘের জলবায়ু পরিবর্তন সম্মেলন COP30 কোন দেশে অনুষ্ঠিত হয়?","o":["ব্রাজিল","আজারবাইজান","সংযুক্ত আরব আমিরাত","মিশর"],"a":0,"e":"COP30 ২০২৫ সালের ১০–২১ নভেম্বর ব্রাজিলের বেলেম শহরে অনুষ্ঠিত হয়।","source":"UNFCCC, COP30","sourceUrl":"https://unfccc.int/cop30/about-cop30","d":"সহজ"});
const bank=window.JOB_PREP_BANK;
if(!Array.isArray(bank)) throw new Error('JOB_PREP_BANK পাওয়া যায়নি।');
const norm=s=>String(s||'').normalize('NFC').replace(/\\s+/g,' ').trim().toLocaleLowerCase('bn');
const seen=new Set(bank.map(q=>(window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))),ids=new Set(bank.map(q=>q.id));
let added=0,duplicates=0;
for(const q of additions){if(seen.has((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))||ids.has(q.id)){duplicates++;continue;}bank.push(q);seen.add((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')));ids.add(q.id);added++;}
window.JOB_PREP_EXPANSION_BATCH_30={candidates:additions.length,added,duplicates};
})();
