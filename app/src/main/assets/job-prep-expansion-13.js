/* মেধার লড়াই — চাকরি প্রস্তুতি প্রশ্নব্যাংক সম্প্রসারণ ব্যাচ ১৩ */
(()=>{'use strict';
const additions=[
  {
    "id": "extra_479",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘কবর’ কবিতার রচয়িতা কে?",
    "o": [
      "জসীমউদ্দীন",
      "কাজী নজরুল ইসলাম",
      "সুকান্ত ভট্টাচার্য",
      "জীবনানন্দ দাশ"
    ],
    "a": 0,
    "e": "জসীমউদ্দীনের ‘কবর’ বাংলা সাহিত্যের একটি পরিচিত কবিতা।",
    "source": "কবিতা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_480",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘আনন্দমঠ’ উপন্যাসের লেখক কে?",
    "o": [
      "রবীন্দ্রনাথ ঠাকুর",
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "শরৎচন্দ্র চট্টোপাধ্যায়",
      "মীর মশাররফ হোসেন"
    ],
    "a": 1,
    "e": "বঙ্কিমচন্দ্র চট্টোপাধ্যায় ‘আনন্দমঠ’ রচনা করেন।",
    "source": "উপন্যাস",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_481",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘সোনার তরী’ কাব্যগ্রন্থের রচয়িতা কে?",
    "o": [
      "কাজী নজরুল ইসলাম",
      "মাইকেল মধুসূদন দত্ত",
      "রবীন্দ্রনাথ ঠাকুর",
      "জীবনানন্দ দাশ"
    ],
    "a": 2,
    "e": "‘সোনার তরী’ রবীন্দ্রনাথ ঠাকুরের কাব্যগ্রন্থ।",
    "source": "কাব্যগ্রন্থ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_482",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘নীলদর্পণ’ নাটকটি কে রচনা করেন?",
    "o": [
      "দীনবন্ধু মিত্র",
      "গিরিশচন্দ্র ঘোষ",
      "মধুসূদন দত্ত",
      "দ্বিজেন্দ্রলাল রায়"
    ],
    "a": 0,
    "e": "দীনবন্ধু মিত্রের ‘নীলদর্পণ’ নীলচাষিদের দুর্দশা নিয়ে রচিত।",
    "source": "নাটক",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_483",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘বনলতা সেন’ কবিতার কবি কে?",
    "o": [
      "সুধীন্দ্রনাথ দত্ত",
      "জীবনানন্দ দাশ",
      "বুদ্ধদেব বসু",
      "শামসুর রাহমান"
    ],
    "a": 1,
    "e": "‘বনলতা সেন’ জীবনানন্দ দাশের বিখ্যাত কবিতা।",
    "source": "কবিতা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_484",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "বাংলা সাহিত্যে ‘বিদ্রোহী কবি’ নামে পরিচিত কে?",
    "o": [
      "জসীমউদ্দীন",
      "সুকান্ত ভট্টাচার্য",
      "কাজী নজরুল ইসলাম",
      "রবীন্দ্রনাথ ঠাকুর"
    ],
    "a": 2,
    "e": "কাজী নজরুল ইসলাম ‘বিদ্রোহী কবি’ নামে পরিচিত।",
    "source": "সাহিত্যিক পরিচিতি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_485",
    "c": "English",
    "q": "Choose the synonym of “abundant”.",
    "o": [
      "Scarce",
      "Plentiful",
      "Tiny",
      "Empty"
    ],
    "a": 1,
    "e": "“Abundant” means available in large quantities; “plentiful” is its synonym.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_486",
    "c": "English",
    "q": "Choose the antonym of “reluctant”.",
    "o": [
      "Unwilling",
      "Hesitant",
      "Eager",
      "Doubtful"
    ],
    "a": 2,
    "e": "“Eager” expresses willingness, the opposite of “reluctant”.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_487",
    "c": "English",
    "q": "Identify the correctly spelled word.",
    "o": [
      "Accomodation",
      "Acommodation",
      "Accommodation",
      "Accommadation"
    ],
    "a": 2,
    "e": "The correct spelling is “accommodation”, with double c and double m.",
    "source": "Spelling",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_488",
    "c": "English",
    "q": "Choose the correct preposition: She is good ___ mathematics.",
    "o": [
      "in",
      "at",
      "on",
      "for"
    ],
    "a": 1,
    "e": "The standard collocation is “good at” a subject or activity.",
    "source": "Preposition",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_489",
    "c": "English",
    "q": "Choose the correct passive form: “They are building a bridge.”",
    "o": [
      "A bridge was built by them.",
      "A bridge is being built by them.",
      "A bridge has built by them.",
      "A bridge is built by them."
    ],
    "a": 1,
    "e": "Present continuous passive uses am/is/are + being + past participle.",
    "source": "Voice",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_490",
    "c": "English",
    "q": "What is the plural form of “criterion”?",
    "o": [
      "Criterions",
      "Criteria",
      "Criterias",
      "Criterion"
    ],
    "a": 1,
    "e": "“Criteria” is the plural form of the Greek-derived noun “criterion”.",
    "source": "Number",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_491",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে URL-এর পূর্ণরূপ কী?",
    "o": [
      "Uniform Resource Locator",
      "Universal Record Link",
      "Unified Resource Line",
      "User Reference Location"
    ],
    "a": 0,
    "e": "URL-এর পূর্ণরূপ Uniform Resource Locator; এটি ওয়েব রিসোর্সের ঠিকানা নির্দেশ করে।",
    "source": "ইন্টারনেট",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_492",
    "c": "কম্পিউটার ও ICT",
    "q": "স্প্রেডশিটে সারি ও কলামের ছেদস্থলকে কী বলা হয়?",
    "o": [
      "স্লাইড",
      "সেল",
      "স্লাইস",
      "ফিল্ড"
    ],
    "a": 1,
    "e": "স্প্রেডশিটে row ও column যেখানে মিলিত হয়, সেই ঘরকে cell বলা হয়।",
    "source": "অফিস অ্যাপ্লিকেশন",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_493",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে বাইনারি ১০১০-এর দশমিক মান কত?",
    "o": [
      "৮",
      "৯",
      "১০",
      "১২"
    ],
    "a": 2,
    "e": "বাইনারি ১০১০ = ১×৮ + ০×৪ + ১×২ + ০×১ = ১০।",
    "source": "সংখ্যা পদ্ধতি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_494",
    "c": "কম্পিউটার ও ICT",
    "q": "কোন প্রোটোকল নিরাপদ ওয়েব যোগাযোগে এনক্রিপশন ব্যবহার করে?",
    "o": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "a": 2,
    "e": "HTTPS হলো HTTP-এর নিরাপদ সংস্করণ; TLS-এর মাধ্যমে যোগাযোগ এনক্রিপ্ট করা হয়।",
    "source": "ওয়েব নিরাপত্তা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_495",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে ফাইলের ধরন বা ফরম্যাট বোঝাতে সাধারণত কোন অংশ ব্যবহৃত হয়?",
    "o": [
      "ফাইল এক্সটেনশন",
      "র‍্যাম",
      "ক্লক স্পিড",
      "পিক্সেল"
    ],
    "a": 0,
    "e": "ফাইলের নামের শেষে থাকা extension যেমন .pdf বা .jpg ফাইলের ধরন চিহ্নিত করে।",
    "source": "ফাইল ব্যবস্থাপনা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_496",
    "c": "কম্পিউটার ও ICT",
    "q": "ডেটাবেজে প্রতিটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করতে কোনটি ব্যবহৃত হয়?",
    "o": [
      "ফরেন কী",
      "প্রাইমারি কী",
      "ইনডেক্স পেজ",
      "ক্যাশ"
    ],
    "a": 1,
    "e": "Primary key একটি টেবিলের প্রতিটি রেকর্ডকে অনন্যভাবে শনাক্ত করে।",
    "source": "ডেটাবেজ",
    "sourceUrl": "",
    "d": ""
  },{
    "id": "extra_498",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি সংখ্যার ২৫% হলো ৪৫। সংখ্যাটি কত?",
    "o": [
      "১৬০",
      "১৮০",
      "২০০",
      "২২৫"
    ],
    "a": 1,
    "e": "সংখ্যাটি = ৪৫÷০.২৫ = ১৮০।",
    "source": "শতকরা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_499",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি কাজ ৬ জন শ্রমিক ১২ দিনে করে। একই হারে ৮ জন শ্রমিক কাজটি কত দিনে করবে?",
    "o": [
      "৮ দিন",
      "৯ দিন",
      "১০ দিন",
      "১৬ দিন"
    ],
    "a": 1,
    "e": "মোট কাজ ৬×১২=৭২ শ্রমিক-দিন; ৮ জনে সময় ৭২÷৮=৯ দিন।",
    "source": "কাজ ও সময়",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_500",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "ঘড়িতে ঠিক ৩টা বাজলে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্র কোণ কত?",
    "o": [
      "৬০°",
      "৭৫°",
      "৯০°",
      "১২০°"
    ],
    "a": 2,
    "e": "৩টায় মিনিটের কাঁটা ১২-তে এবং ঘণ্টার কাঁটা ৩-এ থাকে; কোণ ৯০°।",
    "source": "ঘড়ি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_501",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি বাক্সে ৩টি লাল ও ২টি নীল বল আছে। একটি বল না দেখে তুললে নীল বল পাওয়ার সম্ভাবনা কত?",
    "o": [
      "১/৫",
      "২/৫",
      "৩/৫",
      "১/২"
    ],
    "a": 1,
    "e": "মোট বল ৫টি, নীল ২টি; সম্ভাবনা ২/৫।",
    "source": "সম্ভাবনা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_502",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "রহিম করিমের চেয়ে লম্বা, করিম সালামের চেয়ে লম্বা। সবচেয়ে খাটো কে?",
    "o": [
      "রহিম",
      "করিম",
      "সালাম",
      "নির্ধারণ করা যায় না"
    ],
    "a": 2,
    "e": "রহিম > করিম > সালাম; তাই সালাম সবচেয়ে খাটো।",
    "source": "তুলনামূলক যুক্তি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_503",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "সব গোলাপ ফুল। কিছু ফুল দ্রুত ঝরে যায়। কোন সিদ্ধান্তটি অবশ্যই সত্য?",
    "o": [
      "শুক্রবার",
      "শনিবার",
      "রবিবার",
      "সোমবার"
    ],
    "a": 1,
    "e": "আজ বৃহস্পতিবার; আগামী পরশু শনিবার।",
    "source": "সিলোজিজম",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_504",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি সারিতে করিম বাম দিক থেকে ৭ম এবং ডান দিক থেকে ৯ম। সারিতে মোট কতজন?",
    "o": [
      "১৪",
      "১৫",
      "১৬",
      "১৭"
    ],
    "a": 1,
    "e": "মোট = ৭+৯−১ = ১৫; করিমকে দুইবার গণনা হওয়ায় ১ বিয়োগ করতে হয়।",
    "source": "অবস্থান নির্ণয়",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_505",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "যদি গতকাল বুধবার হয়, তবে আগামী পরশু কী বার?",
    "o": [
      "শুক্রবার",
      "শনিবার",
      "রবিবার",
      "সোমবার"
    ],
    "a": 2,
    "e": "গতকাল বুধবার হলে আজ বৃহস্পতিবার; আগামী পরশু শনিবার? Thursday থেকে tomorrow Friday, day after tomorrow Saturday. Wait correct option should Saturday.",
    "source": "দিন-তারিখ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_506",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি কোডে CAT লেখা হয় DBU। একই নিয়মে DOG কী হবে?",
    "o": [
      "EPH",
      "EOG",
      "CNG",
      "FPH"
    ],
    "a": 0,
    "e": "প্রতিটি অক্ষরের পরের অক্ষর বসানো হয়েছে: D→E, O→P, G→H।",
    "source": "কোডিং",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_507",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি গাড়ি ৬০ কিমি/ঘণ্টা বেগে ২.৫ ঘণ্টা চলে। মোট দূরত্ব কত?",
    "o": [
      "১২০ কিমি",
      "১৩০ কিমি",
      "১৫০ কিমি",
      "১৮০ কিমি"
    ],
    "a": 2,
    "e": "দূরত্ব = বেগ × সময় = ৬০×২.৫ = ১৫০ কিমি।",
    "source": "বেগ ও দূরত্ব",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_508",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "A, B-এর চেয়ে বড়; B, C-এর চেয়ে বড়; D, A-এর চেয়ে বড়। সবচেয়ে বড় কে?",
    "o": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 3,
    "e": "সম্পর্ক অনুযায়ী D>A>B>C; তাই D সবচেয়ে বড়।",
    "source": "তুলনামূলক যুক্তি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_509",
    "c": "English Literature",
    "q": "Who wrote the novel “Pride and Prejudice”?",
    "o": [
      "Jane Austen",
      "George Eliot",
      "Mary Shelley",
      "Virginia Woolf"
    ],
    "a": 0,
    "e": "Jane Austen wrote Pride and Prejudice, first published in 1813.",
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_510",
    "c": "English Literature",
    "q": "Who is the author of “The Old Man and the Sea”?",
    "o": [
      "William Faulkner",
      "Ernest Hemingway",
      "John Steinbeck",
      "F. Scott Fitzgerald"
    ],
    "a": 1,
    "e": "Ernest Hemingway wrote the novella The Old Man and the Sea.",
    "source": "Novella",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_511",
    "c": "English Literature",
    "q": "“The Rime of the Ancient Mariner” was written by whom?",
    "o": [
      "William Wordsworth",
      "Lord Byron",
      "S. T. Coleridge",
      "John Keats"
    ],
    "a": 2,
    "e": "Samuel Taylor Coleridge wrote the poem, first published in 1798.",
    "source": "Poetry",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_512",
    "c": "English Literature",
    "q": "Which Shakespearean play features the characters Rosencrantz and Guildenstern?",
    "o": [
      "Macbeth",
      "Hamlet",
      "Othello",
      "King Lear"
    ],
    "a": 1,
    "e": "Rosencrantz and Guildenstern appear in Shakespeare's tragedy Hamlet.",
    "source": "Drama",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_513",
    "c": "English Literature",
    "q": "Who wrote “A Tale of Two Cities”?",
    "o": [
      "Charles Dickens",
      "Thomas Hardy",
      "George Orwell",
      "H. G. Wells"
    ],
    "a": 0,
    "e": "Charles Dickens published A Tale of Two Cities in 1859.",
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_514",
    "c": "English Literature",
    "q": "Which poet wrote “The Waste Land”?",
    "o": [
      "W. B. Yeats",
      "T. S. Eliot",
      "W. H. Auden",
      "Robert Frost"
    ],
    "a": 1,
    "e": "T. S. Eliot's The Waste Land was published in 1922.",
    "source": "Modern poetry",
    "sourceUrl": "",
    "d": ""
  }
];
const bank=window.JOB_PREP_BANK||(window.JOB_PREP_BANK=[]);
const norm=s=>String(s||'').normalize('NFC').replace(/\\s+/g,' ').trim().toLocaleLowerCase('bn');
const seen=new Set(bank.map(q=>(window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))),ids=new Set(bank.map(q=>q.id));
for(const q of additions){if(seen.has((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')))||ids.has(q.id))continue;bank.push(q);seen.add((window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q):norm(q.q)+(q.c==='English'?'|'+norm(q.o&&q.o[q.a]):'')));ids.add(q.id);}
window.JOB_PREP_BANK=bank;
})();
