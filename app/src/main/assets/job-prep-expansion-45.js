(function(){
const additions=[
  {
    "id": "extra_1516",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘পদ্মা নদীর মাঝি’ উপন্যাসের রচয়িতা কে?",
    "o": [
      "মানিক বন্দ্যোপাধ্যায়",
      "তারাশঙ্কর বন্দ্যোপাধ্যায়",
      "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      "শরৎচন্দ্র চট্টোপাধ্যায়"
    ],
    "a": 0,
    "e": "‘পদ্মা নদীর মাঝি’ মানিক বন্দ্যোপাধ্যায়ের রচিত উপন্যাস।",
    "source": "বাংলা সাহিত্য — উপন্যাস",
    "d": "সহজ"
  },
  {
    "id": "extra_1518",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘সবার উপরে মানুষ সত্য, তাহার উপরে নাই’—উক্তিটি কার?",
    "o": [
      "চণ্ডীদাস",
      "বিদ্যাপতি",
      "লালন শাহ",
      "জ্ঞানদাস"
    ],
    "a": 0,
    "e": "মধ্যযুগের কবি চণ্ডীদাসের নামে উক্তিটি প্রচলিত।",
    "source": "বাংলা সাহিত্য — মধ্যযুগ",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1519",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘বিষাদ-সিন্ধু’ গ্রন্থের লেখক কে?",
    "o": [
      "কায়কোবাদ",
      "মীর মশাররফ হোসেন",
      "ইসমাইল হোসেন সিরাজী",
      "আবুল ফজল"
    ],
    "a": 1,
    "e": "মীর মশাররফ হোসেন ‘বিষাদ-সিন্ধু’ রচনা করেন।",
    "source": "বাংলা সাহিত্য — গদ্য",
    "d": "সহজ"
  },
  {
    "id": "extra_1520",
    "c": "English",
    "q": "Choose the correct sentence.",
    "o": [
      "Neither of the boys are present.",
      "Neither of the boys is present.",
      "Neither boys is present.",
      "Neither of boys are present."
    ],
    "a": 1,
    "e": "Neither is grammatically singular in standard formal usage, so it takes “is”.",
    "source": "English Grammar — Subject-Verb Agreement",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1521",
    "c": "English",
    "q": "What is the plural form of “criterion”?",
    "o": [
      "Criterions",
      "Criteria",
      "Criterias",
      "Criterion"
    ],
    "a": 1,
    "e": "The Greek-derived plural of criterion is criteria.",
    "source": "English Vocabulary — Plurals",
    "d": "সহজ"
  },
  {
    "id": "extra_1522",
    "c": "English",
    "q": "Choose the word closest in meaning to “Abundant”.",
    "o": [
      "Scarce",
      "Plentiful",
      "Insufficient",
      "Rare"
    ],
    "a": 1,
    "e": "Abundant means existing in large quantities; plentiful is a close synonym.",
    "source": "English Vocabulary — Synonym",
    "d": "সহজ"
  },
  {
    "id": "extra_1525",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?",
    "o": [
      "জেনেভা",
      "নিউইয়র্ক",
      "প্যারিস",
      "লন্ডন"
    ],
    "a": 1,
    "e": "জাতিসংঘের প্রধান সদর দপ্তর যুক্তরাষ্ট্রের নিউইয়র্কে।",
    "source": "আন্তর্জাতিক বিষয়াবলি — সংস্থা",
    "d": "সহজ"
  },
  {
    "id": "extra_1526",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "বিশ্বব্যাংকের সদর দপ্তর কোন শহরে?",
    "o": [
      "ওয়াশিংটন, ডি.সি.",
      "নিউইয়র্ক",
      "জেনেভা",
      "লন্ডন"
    ],
    "a": 0,
    "e": "বিশ্বব্যাংকের সদর দপ্তর যুক্তরাষ্ট্রের ওয়াশিংটন, ডি.সি.-তে।",
    "source": "আন্তর্জাতিক বিষয়াবলি — অর্থনীতি",
    "d": "সহজ"
  },
  {
    "id": "extra_1527",
    "c": "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",
    "q": "বাংলাদেশের মুক্তিযুদ্ধের সময় অস্থায়ী সরকার শপথ নেয় কোথায়?",
    "o": [
      "ঢাকা",
      "মুজিবনগর",
      "চট্টগ্রাম",
      "কলকাতা"
    ],
    "a": 1,
    "e": "১৯৭১ সালের ১৭ এপ্রিল মেহেরপুরের বৈদ্যনাথতলায় অস্থায়ী সরকার শপথ নেয়; স্থানটি মুজিবনগর নামে পরিচিত।",
    "source": "বাংলাদেশ বিষয়াবলি — মুক্তিযুদ্ধ",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1532",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে RAM কোন ধরনের মেমোরি?",
    "o": [
      "স্থায়ী",
      "অস্থায়ী (ভোলাটাইল)",
      "অপটিক্যাল",
      "শুধু পাঠযোগ্য"
    ],
    "a": 1,
    "e": "RAM বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে সাধারণত তথ্য ধরে রাখতে পারে না; এটি ভোলাটাইল মেমোরি।",
    "source": "ICT — মেমোরি",
    "d": "সহজ"
  },
  {
    "id": "extra_1533",
    "c": "কম্পিউটার ও ICT",
    "q": "ই-মেইলে BCC ব্যবহারের উদ্দেশ্য কী?",
    "o": [
      "বার্তা এনক্রিপ্ট করা",
      "প্রাপকদের ঠিকানা অন্য প্রাপকদের কাছ থেকে গোপন রাখা",
      "ফাইল সংকুচিত করা",
      "বার্তা মুছে ফেলা"
    ],
    "a": 1,
    "e": "BCC-তে থাকা প্রাপকদের ঠিকানা সাধারণত অন্য প্রাপকেরা দেখতে পান না।",
    "source": "ICT — ই-মেইল",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1535",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি সংখ্যার ২৫% হলো ৬০। সংখ্যাটি কত?",
    "o": [
      "১৮০",
      "২০০",
      "২৪০",
      "২৬০"
    ],
    "a": 2,
    "e": "সংখ্যাটি = ৬০ ÷ ০.২৫ = ২৪০।",
    "source": "মানসিক দক্ষতা — শতকরা",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1536",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "ধারা পূরণ করুন: ২, ৬, ১২, ২০, ৩০, ...",
    "o": [
      "৩৬",
      "৪০",
      "৪২",
      "৪৪"
    ],
    "a": 2,
    "e": "পার্থক্য ৪, ৬, ৮, ১০; পরের পার্থক্য ১২। তাই পরের সংখ্যা ৪২।",
    "source": "মানসিক দক্ষতা — সংখ্যার ধারা",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1537",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "রহিম করিমের চেয়ে লম্বা, করিম সালামের চেয়ে লম্বা। সবচেয়ে খাটো কে?",
    "o": [
      "রহিম",
      "করিম",
      "সালাম",
      "নির্ণয় করা যায় না"
    ],
    "a": 2,
    "e": "রহিম > করিম > সালাম; তাই সালাম সবচেয়ে খাটো।",
    "source": "যুক্তি — তুলনামূলক ক্রম",
    "d": "সহজ"
  },
  {
    "id": "extra_1538",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "যদি A=1, B=2, ... Z=26 হয়, তবে BAD শব্দের অক্ষরগুলোর মানের যোগফল কত?",
    "o": [
      "৬",
      "৭",
      "৮",
      "৯"
    ],
    "a": 1,
    "e": "B=2, A=1, D=4; যোগফল ২+১+৪=৭।",
    "source": "যুক্তি — বর্ণসংখ্যা",
    "d": "সহজ"
  },
  {
    "id": "extra_1539",
    "c": "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",
    "q": "২০২৪ সালের গ্রীষ্মকালীন প্যারালিম্পিক কোন শহরে অনুষ্ঠিত হয়?",
    "o": [
      "প্যারিস",
      "লন্ডন",
      "রিও ডি জেনেইরো",
      "টোকিও"
    ],
    "a": 0,
    "e": "২০২৪ সালের গ্রীষ্মকালীন প্যারালিম্পিক প্যারিসে অনুষ্ঠিত হয়।",
    "source": "সমসাময়িক ক্রীড়া — Paris 2024",
    "d": "সহজ"
  },
  {
    "id": "extra_1540",
    "c": "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",
    "q": "২০২৪ সালের G20 শীর্ষ সম্মেলনের আয়োজক দেশ কোনটি?",
    "o": [
      "ভারত",
      "ব্রাজিল",
      "দক্ষিণ আফ্রিকা",
      "ইতালি"
    ],
    "a": 1,
    "e": "২০২৪ সালের G20 নেতৃবৃন্দের শীর্ষ সম্মেলন ব্রাজিলের রিও ডি জেনেইরোতে অনুষ্ঠিত হয়।",
    "source": "সমসাময়িক বিশ্ব — G20 2024",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1541",
    "c": "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",
    "q": "২০২৫ সালের ICC Champions Trophy ক্রিকেট প্রতিযোগিতার চ্যাম্পিয়ন কোন দেশ?",
    "o": [
      "অস্ট্রেলিয়া",
      "নিউজিল্যান্ড",
      "ভারত",
      "দক্ষিণ আফ্রিকা"
    ],
    "a": 2,
    "e": "২০২৫ সালের ICC Champions Trophy-র ফাইনালে নিউজিল্যান্ডকে হারিয়ে ভারত চ্যাম্পিয়ন হয়।",
    "source": "সমসাময়িক ক্রীড়া — ক্রিকেট ২০২৫",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1543",
    "c": "English Literature",
    "q": "Which poet wrote “Ode to a Nightingale”?",
    "o": [
      "William Wordsworth",
      "John Keats",
      "Percy Bysshe Shelley",
      "Lord Byron"
    ],
    "a": 1,
    "e": "Ode to a Nightingale is a celebrated ode by John Keats.",
    "source": "English Literature — Romantic Poetry",
    "d": "সহজ"
  },
  {
    "id": "extra_1544",
    "c": "English Literature",
    "q": "Who is the author of “Gulliver’s Travels”?",
    "o": [
      "Daniel Defoe",
      "Jonathan Swift",
      "Henry Fielding",
      "Samuel Richardson"
    ],
    "a": 1,
    "e": "Jonathan Swift wrote Gulliver’s Travels, published in 1726.",
    "source": "English Literature — Satire",
    "d": "সহজ"
  },
  {
    "id": "extra_1545",
    "c": "English Literature",
    "q": "In which Shakespeare play does the character Prospero appear?",
    "o": [
      "The Tempest",
      "Twelfth Night",
      "Julius Caesar",
      "Much Ado About Nothing"
    ],
    "a": 0,
    "e": "Prospero is the central character in Shakespeare’s The Tempest.",
    "source": "English Literature — Shakespeare",
    "d": "সহজ"
  }
];
const bank=window.JOB_PREP_BANK||(window.JOB_PREP_BANK=[]);
const norm=s=>String(s||'').normalize('NFC').replace(/\\s+/g,' ').trim().toLocaleLowerCase('bn');
const key=q=>window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q,q.c):norm(q.c)+'|'+norm(q.q)+'|'+(q.o||[]).map(norm).sort().join('|')+'|'+norm((q.o||[])[q.a]);const seen=new Set(bank.map(key)),ids=new Set(bank.map(q=>q.id));
for(const q of additions){if(seen.has(key(q))||ids.has(q.id))continue;bank.push(q);seen.add(key(q));ids.add(q.id);}
window.JOB_PREP_BANK=bank;
})();