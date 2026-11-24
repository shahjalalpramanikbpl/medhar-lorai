/* মেধার লড়াই — চাকরি প্রস্তুতি প্রশ্নব্যাংক সম্প্রসারণ ব্যাচ ৩২ */
(()=>{'use strict';
const additions=[
  {
    "id": "extra_1126",
    "c": "English",
    "q": "Choose the correct synonym of 'Abundant'.",
    "o": [
      "Scarce",
      "Plentiful",
      "Tiny",
      "Empty"
    ],
    "a": 1,
    "e": "Abundant means plentiful or available in large quantities.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1127",
    "c": "English",
    "q": "Choose the antonym of 'Reluctant'.",
    "o": [
      "Unwilling",
      "Hesitant",
      "Willing",
      "Doubtful"
    ],
    "a": 2,
    "e": "Reluctant means unwilling; its opposite is willing.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1128",
    "c": "English",
    "q": "Fill in the blank: Neither of the two candidates ___ qualified.",
    "o": [
      "are",
      "were",
      "is",
      "have"
    ],
    "a": 2,
    "e": "Neither is singular in standard formal usage; therefore 'is' is correct.",
    "source": "Grammar",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1129",
    "c": "English",
    "q": "Choose the correct passive form: 'They have completed the work.'",
    "o": [
      "The work has been completed by them.",
      "The work had completed by them.",
      "The work is completed by them.",
      "The work was being completed by them."
    ],
    "a": 0,
    "e": "Present perfect active changes to present perfect passive: has been + past participle.",
    "source": "Voice",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1130",
    "c": "English",
    "q": "Identify the correctly spelt word.",
    "o": [
      "Accomodation",
      "Acommodation",
      "Accommodation",
      "Acomodation"
    ],
    "a": 2,
    "e": "The correct spelling is accommodation, with double c and double m.",
    "source": "Spelling",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1131",
    "c": "English",
    "q": "Choose the correct indirect speech: He said, 'I am busy.'",
    "o": [
      "He said that I am busy.",
      "He said that he was busy.",
      "He says he had been busy.",
      "He told that he is busy."
    ],
    "a": 1,
    "e": "In reported speech with a past reporting verb, present 'am' normally backshifts to 'was'.",
    "source": "Narration",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1132",
    "c": "সাধারণ বিজ্ঞান",
    "q": "মানবদেহে ইনসুলিন কোন অঙ্গের কোন কোষ থেকে নিঃসৃত হয়?",
    "o": [
      "যকৃতের হেপাটোসাইট",
      "অগ্ন্যাশয়ের বিটা কোষ",
      "থাইমাসের টি-কোষ",
      "কিডনির নেফ্রন"
    ],
    "a": 1,
    "e": "অগ্ন্যাশয়ের আইলেটস অব ল্যাঙ্গারহ্যান্সের বিটা কোষ ইনসুলিন নিঃসরণ করে।",
    "source": "মানব শারীরবিদ্যা",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1133",
    "c": "সাধারণ বিজ্ঞান",
    "q": "শব্দের বেগ সবচেয়ে বেশি কোন মাধ্যমে?",
    "o": [
      "বায়ু",
      "পানি",
      "শূন্যস্থান",
      "ইস্পাত"
    ],
    "a": 3,
    "e": "সাধারণত কঠিন পদার্থে কণার ঘনিষ্ঠতার কারণে শব্দের বেগ গ্যাসের তুলনায় বেশি; ইস্পাতে তা বেশি।",
    "source": "পদার্থবিজ্ঞান",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1134",
    "c": "সাধারণ বিজ্ঞান",
    "q": "pH মান ৭-এর কম হলে দ্রবণটি কেমন?",
    "o": [
      "ক্ষারীয়",
      "নিরপেক্ষ",
      "অম্লীয়",
      "লবণাক্ত"
    ],
    "a": 2,
    "e": "২৫° সেলসিয়াসে pH ৭-এর কম হলে দ্রবণ অম্লীয়।",
    "source": "রসায়ন",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1135",
    "c": "সাধারণ বিজ্ঞান",
    "q": "ভিটামিন C-এর অভাবে কোন রোগ হয়?",
    "o": [
      "রিকেটস",
      "স্কার্ভি",
      "বেরিবেরি",
      "রাতকানা"
    ],
    "a": 1,
    "e": "ভিটামিন C-এর অভাবে স্কার্ভি রোগ হয়।",
    "source": "পুষ্টিবিজ্ঞান",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1136",
    "c": "সাধারণ বিজ্ঞান",
    "q": "উদ্ভিদের কোষপ্রাচীর প্রধানত কোন পদার্থ দিয়ে গঠিত?",
    "o": [
      "গ্লাইকোজেন",
      "সেলুলোজ",
      "কাইটিন",
      "প্রোটিন"
    ],
    "a": 1,
    "e": "উদ্ভিদ কোষপ্রাচীরের প্রধান গাঠনিক উপাদান সেলুলোজ।",
    "source": "উদ্ভিদবিজ্ঞান",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1137",
    "c": "সাধারণ বিজ্ঞান",
    "q": "কোন রক্তকণিকা শরীরে অক্সিজেন পরিবহন করে?",
    "o": [
      "শ্বেত রক্তকণিকা",
      "অনুচক্রিকা",
      "লোহিত রক্তকণিকা",
      "লসিকাকণিকা"
    ],
    "a": 2,
    "e": "লোহিত রক্তকণিকার হিমোগ্লোবিন অক্সিজেন বহন করে।",
    "source": "জীববিজ্ঞান",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1138",
    "c": "সাধারণ বিজ্ঞান",
    "q": "আলোর প্রতিসরণ ঘটে কেন?",
    "o": [
      "আলোর রং বদলায়",
      "এক মাধ্যম থেকে অন্য মাধ্যমে গেলে আলোর বেগ পরিবর্তিত হয়",
      "আলো শোষিত হয়",
      "আলোর কম্পাঙ্ক শূন্য হয়"
    ],
    "a": 1,
    "e": "ভিন্ন মাধ্যমে আলোর বেগ পরিবর্তিত হওয়ার ফলে দিক পরিবর্তন বা প্রতিসরণ ঘটে।",
    "source": "আলোকবিজ্ঞান",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1139",
    "c": "সাধারণ বিজ্ঞান",
    "q": "পারমাণবিক সংখ্যার মান কোনটির সমান?",
    "o": [
      "নিউট্রনের সংখ্যা",
      "প্রোটন সংখ্যা",
      "প্রোটন ও নিউট্রনের যোগফল",
      "ইলেকট্রন ও নিউট্রনের যোগফল"
    ],
    "a": 1,
    "e": "কোনো মৌলের পারমাণবিক সংখ্যা তার নিউক্লিয়াসে প্রোটনের সংখ্যার সমান।",
    "source": "পরমাণুর গঠন",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1140",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারের CPU-তে গাণিতিক ও যৌক্তিক কাজ সম্পাদন করে কোন অংশ?",
    "o": [
      "CU",
      "ALU",
      "RAM",
      "ROM"
    ],
    "a": 1,
    "e": "Arithmetic Logic Unit বা ALU গাণিতিক ও যৌক্তিক অপারেশন সম্পাদন করে।",
    "source": "কম্পিউটার স্থাপত্য",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1141",
    "c": "কম্পিউটার ও ICT",
    "q": "নিচের কোনটি volatile memory?",
    "o": [
      "ROM",
      "SSD",
      "RAM",
      "DVD"
    ],
    "a": 2,
    "e": "RAM-এ বিদ্যুৎ সরবরাহ বন্ধ হলে সংরক্ষিত অস্থায়ী তথ্য হারিয়ে যায়; তাই এটি volatile memory।",
    "source": "মেমোরি",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1142",
    "c": "কম্পিউটার ও ICT",
    "q": "ডেটাবেজে SQL-এর পূর্ণরূপ কী?",
    "o": [
      "Structured Query Language",
      "Sequential Question Logic",
      "System Query Link",
      "Standard Queue Language"
    ],
    "a": 0,
    "e": "SQL-এর পূর্ণরূপ Structured Query Language।",
    "source": "ডেটাবেজ",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1143",
    "c": "কম্পিউটার ও ICT",
    "q": "কোন নেটওয়ার্ক টপোলজিতে সব ডিভাইস একটি কেন্দ্রীয় ডিভাইসের সঙ্গে যুক্ত থাকে?",
    "o": [
      "Bus",
      "Ring",
      "Star",
      "Mesh"
    ],
    "a": 2,
    "e": "Star topology-তে প্রতিটি নোড কেন্দ্রীয় hub বা switch-এর সঙ্গে যুক্ত থাকে।",
    "source": "নেটওয়ার্কিং",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1144",
    "c": "কম্পিউটার ও ICT",
    "q": "HTTPS-এ 'S' দ্বারা কী বোঝায়?",
    "o": [
      "System",
      "Secure",
      "Server",
      "Source"
    ],
    "a": 1,
    "e": "HTTPS হলো Hypertext Transfer Protocol Secure।",
    "source": "ইন্টারনেট",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1145",
    "c": "কম্পিউটার ও ICT",
    "q": "স্প্রেডশিটে একটি সেলের ঠিকানা কোন দুটি তথ্য দিয়ে গঠিত?",
    "o": [
      "সারি ও কলাম",
      "ফাইল ও ফোল্ডার",
      "শিট ও ফন্ট",
      "চার্ট ও সূত্র"
    ],
    "a": 0,
    "e": "সেলের ঠিকানা কলাম অক্ষর ও সারি নম্বর দিয়ে গঠিত, যেমন B5।",
    "source": "অফিস অ্যাপ্লিকেশন",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1146",
    "c": "কম্পিউটার ও ICT",
    "q": "কোনটি ওপেন-সোর্স অপারেটিং সিস্টেমের উদাহরণ?",
    "o": [
      "Windows",
      "macOS",
      "Linux",
      "iOS"
    ],
    "a": 2,
    "e": "Linux একটি বহুল ব্যবহৃত ওপেন-সোর্স অপারেটিং সিস্টেম কার্নেলভিত্তিক পরিবার।",
    "source": "অপারেটিং সিস্টেম",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1147",
    "c": "কম্পিউটার ও ICT",
    "q": "ফিশিং আক্রমণের মূল উদ্দেশ্য সাধারণত কী?",
    "o": [
      "কম্পিউটারের গতি বাড়ানো",
      "প্রতারণার মাধ্যমে গোপন তথ্য হাতিয়ে নেওয়া",
      "ফাইল সংকুচিত করা",
      "নেটওয়ার্কের ব্যান্ডউইথ বাড়ানো"
    ],
    "a": 1,
    "e": "ফিশিংয়ে ভুয়া বার্তা বা ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড ও আর্থিক তথ্য চুরি করার চেষ্টা করা হয়।",
    "source": "সাইবার নিরাপত্তা",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1148",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারে DNS-এর প্রধান কাজ কী?",
    "o": [
      "ডোমেইন নামকে IP ঠিকানায় রূপান্তর করা",
      "ফাইল এনক্রিপ্ট করা",
      "ছবি সম্পাদনা করা",
      "ই-মেইল পাঠানো"
    ],
    "a": 0,
    "e": "DNS ডোমেইন নামের সঙ্গে সংশ্লিষ্ট IP ঠিকানা খুঁজে দিতে সাহায্য করে।",
    "source": "নেটওয়ার্কিং",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1149",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "সব গোলাপ ফুল। কিছু ফুল দ্রুত ঝরে যায়। এ থেকে কোন সিদ্ধান্তটি অবশ্যই সত্য?",
    "o": [
      "সব গোলাপ দ্রুত ঝরে যায়",
      "কিছু গোলাপ দ্রুত ঝরে যায়",
      "সব দ্রুত ঝরে যাওয়া বস্তু ফুল",
      "সব গোলাপ ফুল"
    ],
    "a": 3,
    "e": "প্রথম বক্তব্য অনুযায়ী সব গোলাপই ফুল; অন্য বক্তব্য থেকে গোলাপ সম্পর্কে অতিরিক্ত সিদ্ধান্ত নিশ্চিত নয়।",
    "source": "সিলোজিজম",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1150",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি সংখ্যার ২৫% হলো ৪৫। সংখ্যাটি কত?",
    "o": [
      "১৬০",
      "১৮০",
      "২০০",
      "২২৫"
    ],
    "a": 1,
    "e": "সংখ্যা = ৪৫ × ১০০ ÷ ২৫ = ১৮০।",
    "source": "শতকরা",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1151",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "A, B-এর চেয়ে লম্বা; B, C-এর চেয়ে লম্বা; D, A-এর চেয়ে লম্বা। সবচেয়ে লম্বা কে?",
    "o": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 3,
    "e": "সম্পর্ক অনুযায়ী D > A > B > C; তাই D সবচেয়ে লম্বা।",
    "source": "তুলনামূলক বিশ্লেষণ",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1152",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি পণ্যের দাম ২০% বাড়িয়ে পরে ২০% কমানো হলো। প্রাথমিক দামের তুলনায় চূড়ান্ত দাম কী?",
    "o": [
      "সমান",
      "৪% কম",
      "৪% বেশি",
      "৮% কম"
    ],
    "a": 1,
    "e": "ধরা যাক প্রাথমিক দাম ১০০; ২০% বাড়লে ১২০, পরে ২০% কমলে ৯৬—অর্থাৎ ৪% কম।",
    "source": "শতকরা পরিবর্তন",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1153",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "ধারাটির পরবর্তী অক্ষর কী: A, C, F, J, O, ...?",
    "o": [
      "S",
      "T",
      "U",
      "V"
    ],
    "a": 2,
    "e": "অক্ষরগুলোর ব্যবধান +২, +৩, +৪, +৫; পরের ব্যবধান +৬। O-এর পর U।",
    "source": "অক্ষরধারা",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1154",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি কাজ ৬ জন শ্রমিক ১২ দিনে করে। একই হারে ৮ জন শ্রমিক কাজটি কত দিনে করবে?",
    "o": [
      "৮ দিন",
      "৯ দিন",
      "১০ দিন",
      "১৬ দিন"
    ],
    "a": 1,
    "e": "মোট কাজ ৬×১২=৭২ শ্রমিক-দিন; ৮ জনে সময় ৭২÷৮=৯ দিন।",
    "source": "কাজ ও সময়",
    "sourceUrl": "",
    "d": "মাঝারি"
  },
  {
    "id": "extra_1155",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "বক্তব্য: কোনো চিকিৎসক অলস নন। রফিক একজন চিকিৎসক। কোন সিদ্ধান্তটি সঠিক?",
    "o": [
      "রফিক অলস",
      "রফিক অলস নন",
      "সব অলস ব্যক্তি চিকিৎসক",
      "রফিক চিকিৎসক নন"
    ],
    "a": 1,
    "e": "চিকিৎসক শ্রেণির কেউ অলস নন এবং রফিক চিকিৎসক; তাই রফিক অলস নন।",
    "source": "সিলোজিজম",
    "sourceUrl": "",
    "d": "মাঝারি"
  }
];
const bank=window.JOB_PREP_BANK;
if(!Array.isArray(bank)) throw new Error('JOB_PREP_BANK পাওয়া যায়নি।');
const norm=s=>String(s||'').normalize('NFC').replace(/\\s+/g,' ').trim().toLocaleLowerCase('bn');
const seen=new Set(bank.map(q=>norm(q.q)+'|'+norm(q.o&&q.o[q.a]))),ids=new Set(bank.map(q=>q.id));
let added=0,duplicates=0;
for(const q of additions){if(seen.has(norm(q.q)+'|'+norm(q.o&&q.o[q.a]))||ids.has(q.id)){duplicates++;continue;}bank.push(q);seen.add(norm(q.q)+'|'+norm(q.o&&q.o[q.a]));ids.add(q.id);added++;}
window.JOB_PREP_EXPANSION_BATCH_32={candidates:additions.length,added,duplicates};
})();
