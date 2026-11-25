(()=>{'use strict';
const additions=[
  {
    "id": "extra_693",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘অমিতব্যয়ী’ শব্দের বিপরীতার্থক কোনটি?",
    "o": [
      "মিতব্যয়ী",
      "অপব্যয়ী",
      "উদার",
      "বিলাসী"
    ],
    "a": 0,
    "e": "অমিতব্যয়ী অর্থ অতিরিক্ত ব্যয়কারী; এর বিপরীত মিতব্যয়ী।",
    "source": "শব্দার্থ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_694",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘নির্ঝর’ শব্দের সমার্থক কোনটি?",
    "o": [
      "ঝরনা",
      "মরুভূমি",
      "সমুদ্র",
      "হ্রদ"
    ],
    "a": 0,
    "e": "নির্ঝর অর্থ ঝরনা বা অবিরাম জলধারা।",
    "source": "সমার্থক শব্দ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_695",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘যা সহজে লাভ করা যায়’—এক কথায় কী?",
    "o": [
      "দুর্লভ",
      "সুলভ",
      "দুষ্প্রাপ্য",
      "অলভ্য"
    ],
    "a": 1,
    "e": "যা সহজে পাওয়া যায় তাকে সুলভ বলা হয়।",
    "source": "এক কথায় প্রকাশ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_696",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘কুম্ভকর্ণ’ বাগধারাটি কোন অর্থে ব্যবহৃত হয়?",
    "o": [
      "অতি ভোজনকারী",
      "অতি নিদ্রালু ব্যক্তি",
      "অতি সাহসী ব্যক্তি",
      "অতি ধীর ব্যক্তি"
    ],
    "a": 1,
    "e": "রামায়ণের কুম্ভকর্ণ দীর্ঘ সময় ঘুমাতেন; তাই অতি নিদ্রালু ব্যক্তিকে বোঝায়।",
    "source": "বাগধারা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_697",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘রাজপুত্র’ কোন সমাসের উদাহরণ?",
    "o": [
      "দ্বন্দ্ব",
      "কর্মধারয়",
      "ষষ্ঠী তৎপুরুষ",
      "বহুব্রীহি"
    ],
    "a": 2,
    "e": "রাজার পুত্র—এখানে ষষ্ঠী বিভক্তির লোপ হয়েছে; তাই ষষ্ঠী তৎপুরুষ সমাস।",
    "source": "সমাস",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_698",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘উন্নতি’ শব্দের বিপরীতার্থক কোনটি?",
    "o": [
      "অবনতি",
      "অগ্রগতি",
      "সমৃদ্ধি",
      "প্রগতি"
    ],
    "a": 0,
    "e": "উন্নতির বিপরীত শব্দ অবনতি।",
    "source": "বিপরীতার্থক শব্দ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_699",
    "c": "English",
    "q": "Choose the correct sentence.",
    "o": [
      "Neither of the boys are absent.",
      "Neither of the boys is absent.",
      "Neither boys is absent.",
      "Neither of boys are absent."
    ],
    "a": 1,
    "e": "“Neither” is singular in formal standard usage, so it takes “is”.",
    "source": "Subject-verb agreement",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_700",
    "c": "English",
    "q": "What is the antonym of “transparent”?",
    "o": [
      "Clear",
      "Opaque",
      "Visible",
      "Lucid"
    ],
    "a": 1,
    "e": "“Opaque” means not allowing light to pass through; it is the opposite of transparent.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_701",
    "c": "English",
    "q": "Choose the correct preposition: She is proficient ___ mathematics.",
    "o": [
      "at",
      "in",
      "on",
      "for"
    ],
    "a": 1,
    "e": "The standard collocation is “proficient in” a subject or skill.",
    "source": "Preposition",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_702",
    "c": "English",
    "q": "What is the plural form of “criterion”?",
    "o": [
      "Criterions",
      "Criteria",
      "Criterias",
      "Criteriones"
    ],
    "a": 1,
    "e": "“Criterion” is singular; its Greek-derived plural is “criteria”.",
    "source": "Plural forms",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_703",
    "c": "English",
    "q": "Identify the adjective in the sentence: “The old bridge collapsed.”",
    "o": [
      "The",
      "old",
      "bridge",
      "collapsed"
    ],
    "a": 1,
    "e": "“Old” describes the noun “bridge”, so it is an adjective.",
    "source": "Parts of speech",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_704",
    "c": "English",
    "q": "Choose the correct passive form: “They have completed the work.”",
    "o": [
      "The work has been completed by them.",
      "The work had completed by them.",
      "The work is completed by them.",
      "The work has completed by them."
    ],
    "a": 0,
    "e": "Present perfect passive is formed with has/have + been + past participle.",
    "source": "Voice",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_705",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে DNS-এর প্রধান কাজ কী?",
    "o": [
      "ডোমেইন নামকে IP ঠিকানায় রূপান্তর করা",
      "ফাইল সংকুচিত করা",
      "ভাইরাস শনাক্ত করা",
      "ডেটা এনক্রিপ্ট করা"
    ],
    "a": 0,
    "e": "DNS ডোমেইন নামের সঙ্গে সংশ্লিষ্ট IP ঠিকানা খুঁজে দেয়।",
    "source": "Networking",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_706",
    "c": "কম্পিউটার ও ICT",
    "q": "নিচের কোনটি ওপেন-সোর্স অপারেটিং সিস্টেমের উদাহরণ?",
    "o": [
      "Windows",
      "macOS",
      "GNU/Linux",
      "iOS"
    ],
    "a": 2,
    "e": "GNU/Linux-এর সোর্স কোড উন্মুক্ত লাইসেন্সের অধীনে পাওয়া যায়।",
    "source": "Operating Systems",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_707",
    "c": "কম্পিউটার ও ICT",
    "q": "ডেটাবেজে Primary Key-এর বৈশিষ্ট্য কী?",
    "o": [
      "একই মান একাধিকবার থাকতে পারে",
      "প্রতিটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করে",
      "শুধু ফাঁকা মান রাখে",
      "কেবল ছবি সংরক্ষণ করে"
    ],
    "a": 1,
    "e": "Primary Key প্রতিটি রেকর্ডের জন্য অনন্য পরিচয় নিশ্চিত করে এবং NULL হতে পারে না।",
    "source": "Database",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_708",
    "c": "কম্পিউটার ও ICT",
    "q": "HTTPS-এ ‘S’ দ্বারা কী বোঝায়?",
    "o": [
      "System",
      "Secure",
      "Server",
      "Source"
    ],
    "a": 1,
    "e": "HTTPS হলো HTTP-এর নিরাপদ সংস্করণ; S দ্বারা Secure বোঝায়।",
    "source": "Web Security",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_709",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারের CPU-তে ALU-এর কাজ কী?",
    "o": [
      "গাণিতিক ও যৌক্তিক অপারেশন করা",
      "বিদ্যুৎ সরবরাহ করা",
      "স্থায়ী ফাইল রাখা",
      "নেটওয়ার্ক সংযোগ দেওয়া"
    ],
    "a": 0,
    "e": "ALU বা Arithmetic Logic Unit গাণিতিক ও লজিক্যাল কাজ সম্পাদন করে।",
    "source": "Computer Architecture",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_710",
    "c": "কম্পিউটার ও ICT",
    "q": "স্প্রেডশিটে একটি সেলের ঠিকানা সাধারণত কীভাবে লেখা হয়?",
    "o": [
      "সারি নম্বর তারপর কলাম অক্ষর",
      "কলাম অক্ষর তারপর সারি নম্বর",
      "শুধু সারি নম্বর",
      "শুধু কলাম অক্ষর"
    ],
    "a": 1,
    "e": "যেমন B3: আগে কলামের অক্ষর, পরে সারির সংখ্যা।",
    "source": "Spreadsheet",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_711",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "ধারাটির পরবর্তী সংখ্যা কত: ২, ৬, ১২, ২০, ৩০, __?",
    "o": [
      "৩৬",
      "৪০",
      "৪২",
      "৪৮"
    ],
    "a": 2,
    "e": "পদগুলো n(n+1): ১×২, ২×৩, ৩×৪… পরেরটি ৬×৭ = ৪২।",
    "source": "Number Series",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_712",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি ঘড়িতে ৩টা ৩০ মিনিটে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্র কোণ কত?",
    "o": [
      "৬০°",
      "৭৫°",
      "৯০°",
      "১০৫°"
    ],
    "a": 1,
    "e": "মিনিটের কাঁটা ১৮০° এবং ঘণ্টার কাঁটা ১০৫° অবস্থানে; পার্থক্য ৭৫°।",
    "source": "Clock Reasoning",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_713",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি বাক্সে ৫টি লাল ও ৩টি নীল বল আছে। না দেখে একটি বল তুললে নীল বল পাওয়ার সম্ভাবনা কত?",
    "o": [
      "৩/৫",
      "৩/৮",
      "৫/৮",
      "১/৩"
    ],
    "a": 1,
    "e": "মোট বল ৮টি; নীল ৩টি। সম্ভাবনা = ৩/৮।",
    "source": "Probability",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_714",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি সংখ্যার ২৫% হলো ৪৫। সংখ্যাটি কত?",
    "o": [
      "১২০",
      "১৬০",
      "১৮০",
      "২০০"
    ],
    "a": 2,
    "e": "সংখ্যাটি = ৪৫ × ১০০ ÷ ২৫ = ১৮০।",
    "source": "Percentage",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_715",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "আজ বুধবার হলে ১০০ দিন পর কী বার হবে?",
    "o": [
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার",
      "রবিবার"
    ],
    "a": 1,
    "e": "১০০ ÷ ৭ ভাগে ভাগশেষ ২; বুধবারের দুই দিন পর শুক্রবার।",
    "source": "Calendar Reasoning",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_716",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "সব চিকিৎসক শিক্ষিত। কিছু শিক্ষিত ব্যক্তি লেখক। এ থেকে নিশ্চিতভাবে কোনটি বলা যায়?",
    "o": [
      "সব চিকিৎসক লেখক",
      "কিছু চিকিৎসক লেখক",
      "কোনো চিকিৎসক লেখক নন",
      "নিশ্চিতভাবে চিকিৎসক ও লেখকের মিল প্রমাণিত নয়"
    ],
    "a": 3,
    "e": "দুটি শ্রেণির তথ্য থেকে চিকিৎসক ও লেখকের মধ্যে সম্পর্ক নিশ্চিত হয় না।",
    "source": "Syllogism",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_717",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি কোডে CAT লেখা হয় DBU। একই নিয়মে DOG কীভাবে লেখা হবে?",
    "o": [
      "EPH",
      "EOG",
      "FPH",
      "CNG"
    ],
    "a": 0,
    "e": "প্রতিটি অক্ষরের পরের অক্ষর নেওয়া হয়েছে: D→E, O→P, G→H।",
    "source": "Coding-Decoding",
    "sourceUrl": "",
    "d": ""
  },{
    "id": "extra_719",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি সারিতে মিতা সামনে থেকে ৮ম এবং পেছন থেকে ১৩তম। সারিতে মোট কতজন?",
    "o": [
      "১৯",
      "২০",
      "২১",
      "২২"
    ],
    "a": 1,
    "e": "মোট = ৮ + ১৩ − ১ = ২০ জন।",
    "source": "Ranking",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_720",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "বক্তব্য: ‘সব গোলাপ ফুল। কিছু ফুল দ্রুত ঝরে যায়।’ কোন সিদ্ধান্তটি অবশ্যই সত্য?",
    "o": [
      "সব গোলাপ দ্রুত ঝরে যায়",
      "কিছু গোলাপ দ্রুত ঝরে যায়",
      "কোনো গোলাপ দ্রুত ঝরে না",
      "উপরের কোনোটিই নিশ্চিত নয়"
    ],
    "a": 3,
    "e": "দ্রুত ঝরে যাওয়া ফুলগুলো গোলাপ কি না বলা হয়নি; তাই কোনো সিদ্ধান্তই নিশ্চিত নয়।",
    "source": "Logical Deduction",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_721",
    "c": "English Literature",
    "q": "Who wrote the novel “Pride and Prejudice”?",
    "o": [
      "Charlotte Brontë",
      "Jane Austen",
      "George Eliot",
      "Mary Shelley"
    ],
    "a": 1,
    "e": "Jane Austen published “Pride and Prejudice” in 1813.",
    "source": "English Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_722",
    "c": "English Literature",
    "q": "“Paradise Lost” is primarily written in which poetic form?",
    "o": [
      "Heroic couplets",
      "Blank verse",
      "Terza rima",
      "Free verse"
    ],
    "a": 1,
    "e": "John Milton composed “Paradise Lost” in unrhymed iambic pentameter, known as blank verse.",
    "source": "Poetry",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_723",
    "c": "English Literature",
    "q": "Who is the author of “The Canterbury Tales”?",
    "o": [
      "Geoffrey Chaucer",
      "John Milton",
      "William Blake",
      "Thomas Hardy"
    ],
    "a": 0,
    "e": "Geoffrey Chaucer wrote “The Canterbury Tales” in Middle English.",
    "source": "Medieval Literature",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_724",
    "c": "English Literature",
    "q": "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    "o": [
      "Macbeth",
      "Hamlet",
      "Othello",
      "King Lear"
    ],
    "a": 1,
    "e": "Rosencrantz and Guildenstern appear in Shakespeare’s tragedy “Hamlet”.",
    "source": "Shakespeare",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_725",
    "c": "English Literature",
    "q": "Who wrote “A Tale of Two Cities”?",
    "o": [
      "Charles Dickens",
      "Thomas Hardy",
      "Daniel Defoe",
      "Oscar Wilde"
    ],
    "a": 0,
    "e": "Charles Dickens published “A Tale of Two Cities” in 1859.",
    "source": "English Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_726",
    "c": "English Literature",
    "q": "“The Waste Land” was written by whom?",
    "o": [
      "W. B. Yeats",
      "T. S. Eliot",
      "W. H. Auden",
      "Dylan Thomas"
    ],
    "a": 1,
    "e": "T. S. Eliot’s modernist poem “The Waste Land” was published in 1922.",
    "source": "Modern Poetry",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_727",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘অকালকুষ্মাণ্ড’ শব্দের অর্থ কী?",
    "o": [
      "অকর্মণ্য ব্যক্তি",
      "অত্যন্ত বুদ্ধিমান ব্যক্তি",
      "অল্পবয়সী শিশু",
      "সাহসী যোদ্ধা"
    ],
    "a": 0,
    "e": "অকালকুষ্মাণ্ড বলতে অপদার্থ বা অকর্মণ্য ব্যক্তিকে বোঝায়।",
    "source": "শব্দার্থ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_728",
    "c": "English",
    "q": "Choose the correct indirect speech: She said, “I can swim.”",
    "o": [
      "She said that she could swim.",
      "She said that I can swim.",
      "She says she could swim.",
      "She told that she can swim."
    ],
    "a": 0,
    "e": "In reported speech, “can” usually changes to “could” and “I” changes to “she”.",
    "source": "Narration",
    "sourceUrl": "",
    "d": ""
  }
];
const bank=window.JOB_PREP_BANK||(window.JOB_PREP_BANK=[]);
const norm=s=>String(s||'').normalize('NFC').replace(/\s+/g,' ').trim().toLocaleLowerCase('bn');
const seen=new Set(bank.map(q=>(window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))),ids=new Set(bank.map(q=>q.id));
for(const q of additions){if(seen.has((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))||ids.has(q.id))continue;bank.push(q);seen.add((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')));ids.add(q.id);}
window.JOB_PREP_BANK=bank;
})();
