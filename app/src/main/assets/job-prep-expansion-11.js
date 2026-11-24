/* মেধার লড়াই — সম্প্রসারণ ব্যাচ ১১: ৪০টি নতুন প্রার্থী প্রশ্ন */
(()=>{'use strict';
const additions=[
  {
    "id": "extra_399",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘কপালকুণ্ডলা’ উপন্যাসের রচয়িতা কে?",
    "o": [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "রবীন্দ্রনাথ ঠাকুর",
      "শরৎচন্দ্র চট্টোপাধ্যায়",
      "মীর মশাররফ হোসেন"
    ],
    "a": 0,
    "e": "বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের অন্যতম উপন্যাস ‘কপালকুণ্ডলা’।",
    "source": "উপন্যাস",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_400",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘বিষাদ-সিন্ধু’ গ্রন্থের লেখক কে?",
    "o": [
      "মীর মশাররফ হোসেন",
      "কায়কোবাদ",
      "ঈশ্বরচন্দ্র বিদ্যাসাগর",
      "দীনবন্ধু মিত্র"
    ],
    "a": 0,
    "e": "‘বিষাদ-সিন্ধু’ মীর মশাররফ হোসেন রচিত ঐতিহাসিক উপন্যাস।",
    "source": "সাহিত্য",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_401",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘আনন্দমঠ’ উপন্যাসে কোন গানটি অন্তর্ভুক্ত?",
    "o": [
      "আমার সোনার বাংলা",
      "বন্দে মাতরম্",
      "ধনধান্যে পুষ্পে ভরা",
      "চল চল চল"
    ],
    "a": 1,
    "e": "বঙ্কিমচন্দ্রের ‘আনন্দমঠ’ উপন্যাসে ‘বন্দে মাতরম্’ গানটি অন্তর্ভুক্ত।",
    "source": "সাহিত্য",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_402",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘পল্লীকবি’ উপাধিতে পরিচিত কে?",
    "o": [
      "জসীমউদ্‌দীন",
      "কাজী নজরুল ইসলাম",
      "জীবনানন্দ দাশ",
      "সুকান্ত ভট্টাচার্য"
    ],
    "a": 0,
    "e": "গ্রামীণ জীবনভিত্তিক কবিতার জন্য জসীমউদ্‌দীন পল্লীকবি নামে পরিচিত।",
    "source": "কবি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_403",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘নীলদর্পণ’ নাটকের মূল বিষয় কী?",
    "o": [
      "নীলকরদের অত্যাচার",
      "ভাষা আন্দোলন",
      "মুঘল দরবার",
      "সাঁওতাল বিদ্রোহ"
    ],
    "a": 0,
    "e": "দীনবন্ধু মিত্রের ‘নীলদর্পণ’ নাটকে নীলচাষিদের ওপর নীলকরদের অত্যাচার চিত্রিত হয়েছে।",
    "source": "নাটক",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_404",
    "c": "বাংলা ভাষা ও সাহিত্য",
    "q": "‘সঞ্চয়িতা’ কোন কবির কবিতাসংকলন?",
    "o": [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "মাইকেল মধুসূদন দত্ত",
      "জীবনানন্দ দাশ"
    ],
    "a": 0,
    "e": "‘সঞ্চয়িতা’ রবীন্দ্রনাথ ঠাকুরের নির্বাচিত কবিতার সংকলন।",
    "source": "কবিতাসংকলন",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_405",
    "c": "English",
    "q": "Choose the correct synonym of “Abundant”.",
    "o": [
      "Scarce",
      "Plentiful",
      "Insufficient",
      "Limited"
    ],
    "a": 1,
    "e": "“Abundant” means existing in large quantities; “plentiful” is its synonym.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_406",
    "c": "English",
    "q": "Choose the antonym of “Reluctant”.",
    "o": [
      "Unwilling",
      "Hesitant",
      "Willing",
      "Doubtful"
    ],
    "a": 2,
    "e": "“Reluctant” means unwilling; its opposite is “willing”.",
    "source": "Vocabulary",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_407",
    "c": "English",
    "q": "Which sentence is grammatically correct?",
    "o": [
      "She do not like tea.",
      "She does not likes tea.",
      "She does not like tea.",
      "She don't likes tea."
    ],
    "a": 2,
    "e": "With “does not”, the main verb takes its base form: like.",
    "source": "Grammar",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_408",
    "c": "English",
    "q": "Fill in the blank: Neither of the answers ___ correct.",
    "o": [
      "are",
      "were",
      "is",
      "have"
    ],
    "a": 2,
    "e": "“Neither” is singular in standard formal usage, so it takes “is”.",
    "source": "Subject-verb agreement",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_409",
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
    "source": "Plural",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_410",
    "c": "English",
    "q": "Choose the correct spelling.",
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
    "id": "extra_411",
    "c": "কম্পিউটার ও ICT",
    "q": "কম্পিউটারের CPU-তে ALU-এর প্রধান কাজ কী?",
    "o": [
      "গাণিতিক ও যৌক্তিক কাজ সম্পাদন",
      "তথ্য স্থায়ীভাবে সংরক্ষণ",
      "ছবি মুদ্রণ",
      "নেটওয়ার্ক সংযোগ"
    ],
    "a": 0,
    "e": "ALU বা Arithmetic Logic Unit গাণিতিক হিসাব ও যৌক্তিক অপারেশন সম্পাদন করে।",
    "source": "কম্পিউটার সংগঠন",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_412",
    "c": "কম্পিউটার ও ICT",
    "q": "নিচের কোনটি একটি অপারেটিং সিস্টেম?",
    "o": [
      "Oracle",
      "Linux",
      "Python",
      "HTML"
    ],
    "a": 1,
    "e": "Linux একটি অপারেটিং সিস্টেম; Python প্রোগ্রামিং ভাষা এবং HTML মার্কআপ ভাষা।",
    "source": "অপারেটিং সিস্টেম",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_413",
    "c": "কম্পিউটার ও ICT",
    "q": "এক বাইটে সাধারণত কত বিট থাকে?",
    "o": [
      "৪",
      "৮",
      "১৬",
      "৩২"
    ],
    "a": 1,
    "e": "এক বাইট সমান ৮ বিট।",
    "source": "ডেটা একক",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_414",
    "c": "কম্পিউটার ও ICT",
    "q": "URL-এর পূর্ণরূপ কী?",
    "o": [
      "Uniform Resource Locator",
      "Universal Record Link",
      "Unified Routing Language",
      "User Reference Location"
    ],
    "a": 0,
    "e": "URL-এর পূর্ণরূপ Uniform Resource Locator।",
    "source": "ইন্টারনেট",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_415",
    "c": "কম্পিউটার ও ICT",
    "q": "ডেটাবেজে প্রাইমারি কি-এর বৈশিষ্ট্য কোনটি?",
    "o": [
      "একই মান একাধিক রেকর্ডে থাকতে পারে",
      "এটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করে",
      "এটি সব সময় ফাঁকা থাকে",
      "এটি কেবল ছবি সংরক্ষণ করে"
    ],
    "a": 1,
    "e": "প্রাইমারি কি প্রতিটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করে এবং সাধারণত অনন্য ও নাল-বিহীন হয়।",
    "source": "ডেটাবেজ",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_416",
    "c": "কম্পিউটার ও ICT",
    "q": "ফিশিং বলতে কী বোঝায়?",
    "o": [
      "কম্পিউটার ঠান্ডা রাখা",
      "প্রতারণার মাধ্যমে গোপন তথ্য হাতিয়ে নেওয়ার চেষ্টা",
      "ফাইল সংকুচিত করা",
      "ডেটা ব্যাকআপ নেওয়া"
    ],
    "a": 1,
    "e": "ফিশিং হলো ভুয়া বার্তা বা ওয়েবসাইটের মাধ্যমে পাসওয়ার্ডসহ সংবেদনশীল তথ্য চুরির কৌশল।",
    "source": "সাইবার নিরাপত্তা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_417",
    "c": "কম্পিউটার ও ICT",
    "q": "স্প্রেডশিটে একটি সেল কী দিয়ে চিহ্নিত হয়?",
    "o": [
      "সারি ও কলামের ঠিকানা দিয়ে",
      "শুধু রঙ দিয়ে",
      "ফাইলের নাম দিয়ে",
      "শুধু সূত্র দিয়ে"
    ],
    "a": 0,
    "e": "স্প্রেডশিটে সেলের ঠিকানা কলাম-অক্ষর ও সারি-সংখ্যা দিয়ে গঠিত, যেমন A1।",
    "source": "স্প্রেডশিট",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_418",
    "c": "কম্পিউটার ও ICT",
    "q": "কোন প্রোটোকল সাধারণত ওয়েব পেজ আদান-প্রদানে ব্যবহৃত হয়?",
    "o": [
      "HTTP",
      "FTP",
      "SMTP",
      "SSH"
    ],
    "a": 0,
    "e": "HTTP হলো ওয়েবের হাইপারটেক্সট আদান-প্রদানের প্রচলিত প্রোটোকল।",
    "source": "নেটওয়ার্ক প্রোটোকল",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_419",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "ধারা পূরণ করুন: ২, ৬, ১২, ২০, ৩০, ?",
    "o": [
      "৩৬",
      "৪০",
      "৪২",
      "৪৮"
    ],
    "a": 2,
    "e": "পার্থক্য ৪, ৬, ৮, ১০; পরের পার্থক্য ১২। তাই ৩০+১২=৪২।",
    "source": "সংখ্যাধারা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_420",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি ঘড়িতে ৩টা ৩০ মিনিটে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্রতর কোণ কত?",
    "o": [
      "৬০°",
      "৭৫°",
      "৯০°",
      "১০৫°"
    ],
    "a": 1,
    "e": "৩টা ৩০ মিনিটে মিনিটের কাঁটা ১৮০° এবং ঘণ্টার কাঁটা ১০৫° অবস্থানে থাকে; ব্যবধান ৭৫°।",
    "source": "ঘড়ি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_421",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "যদি CAT-কে DBU লেখা হয়, তবে DOG-কে কী লেখা হবে?",
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
    "id": "extra_422",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি শ্রেণিতে ৩০ জনের মধ্যে রাহিম ওপর থেকে ৮ম। নিচ থেকে তার অবস্থান কত?",
    "o": [
      "২১তম",
      "২২তম",
      "২৩তম",
      "২৪তম"
    ],
    "a": 2,
    "e": "নিচ থেকে অবস্থান = ৩০−৮+১ = ২৩তম।",
    "source": "অবস্থান নির্ণয়",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_423",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি সংখ্যার ২৫% হলো ৪৫। সংখ্যাটি কত?",
    "o": [
      "১৫০",
      "১৬০",
      "১৮০",
      "২০০"
    ],
    "a": 2,
    "e": "সংখ্যাটি = ৪৫ ÷ ০.২৫ = ১৮০।",
    "source": "শতকরা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_424",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "ধারা পূরণ করুন: ১, ১, ২, ৩, ৫, ৮, ?",
    "o": [
      "১১",
      "১২",
      "১৩",
      "১৫"
    ],
    "a": 2,
    "e": "প্রতিটি পদ আগের দুই পদের যোগফল; ৫+৮=১৩।",
    "source": "ফিবোনাচ্চি ধারা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_425",
    "c": "মানসিক দক্ষতা ও IQ",
    "q": "একটি বাক্সে ৫টি লাল ও ৫টি নীল বল আছে। না দেখে অন্তত কতটি বল তুললে একই রঙের ২টি নিশ্চিত হবে?",
    "o": [
      "২",
      "৩",
      "৪",
      "৫"
    ],
    "a": 1,
    "e": "দুই রঙের একটি করে বল তোলার পর তৃতীয় বলটি অবশ্যই কোনো এক রঙের দ্বিতীয় বল হবে।",
    "source": "নিশ্চয়তা নীতি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_426",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "সব গোলাপ ফুল। কিছু ফুল দ্রুত ঝরে যায়। এ থেকে নিশ্চিতভাবে কোনটি বলা যায়?",
    "o": [
      "সব গোলাপ দ্রুত ঝরে যায়",
      "কিছু গোলাপ দ্রুত ঝরে যায়",
      "কোনো গোলাপ ঝরে না",
      "গোলাপ ফুল—এটুকুই নিশ্চিত"
    ],
    "a": 3,
    "e": "দ্বিতীয় তথ্যটি গোলাপ সম্পর্কে নির্দিষ্ট করে কিছু বলে না; তাই শুধু প্রথম বক্তব্যটি নিশ্চিত।",
    "source": "যুক্তিবিদ্যা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_427",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "A, B-এর চেয়ে লম্বা এবং B, C-এর চেয়ে লম্বা। সবচেয়ে খাটো কে?",
    "o": [
      "A",
      "B",
      "C",
      "নির্ধারণ করা যায় না"
    ],
    "a": 2,
    "e": "A>B এবং B>C হলে C সবচেয়ে খাটো।",
    "source": "তুলনামূলক যুক্তি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_428",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "আজ মঙ্গলবার হলে ১০০ দিন পর কী বার হবে?",
    "o": [
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার"
    ],
    "a": 1,
    "e": "১০০ কে ৭ দিয়ে ভাগ করলে ভাগশেষ ২; মঙ্গলবারের দুই দিন পর বৃহস্পতিবার।",
    "source": "দিন গণনা",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_429",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি সভায় ৮ জন প্রত্যেকে অন্য প্রত্যেকের সঙ্গে একবার করে করমর্দন করলে মোট করমর্দন কতটি?",
    "o": [
      "১৬",
      "২৪",
      "২৮",
      "৩২"
    ],
    "a": 2,
    "e": "প্রতিটি জোড়া একবার: ৮×৭÷২ = ২৮।",
    "source": "সমন্বয়",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_430",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "যদি কোনো সিদ্ধান্তের সব পূর্বশর্ত সত্য হয় এবং যুক্তির গঠন বৈধ হয়, তবে সিদ্ধান্তটি কী হবে?",
    "o": [
      "অবশ্যই সত্য",
      "অবশ্যই মিথ্যা",
      "অনিশ্চিত",
      "শুধু সম্ভাব্য"
    ],
    "a": 0,
    "e": "বৈধ অবরোহী যুক্তিতে সব পূর্বশর্ত সত্য হলে সিদ্ধান্তও সত্য হয়।",
    "source": "অবরোহী যুক্তি",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_431",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "একটি কাজ A একা ৬ দিনে এবং B একা ৩ দিনে করে। একসঙ্গে কাজটি কত দিনে করবে?",
    "o": [
      "১ দিন",
      "২ দিন",
      "৩ দিন",
      "৪ দিন"
    ],
    "a": 1,
    "e": "এক দিনে কাজের হার ১/৬+১/৩=১/২; পুরো কাজ শেষ হবে ২ দিনে।",
    "source": "কাজ ও সময়",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_432",
    "c": "যুক্তি ও বিশ্লেষণ",
    "q": "পাঁচজনের সারিতে করিম বাম দিক থেকে দ্বিতীয় এবং ডান দিক থেকে চতুর্থ। এ তথ্য থেকে কী বোঝা যায়?",
    "o": [
      "সারি ৫ জনের",
      "সারি ৬ জনের",
      "করিম মাঝখানে",
      "তথ্য অসংগত"
    ],
    "a": 0,
    "e": "বাম থেকে দ্বিতীয় ও ডান থেকে চতুর্থ হলে মোট অবস্থান ২+৪−১=৫।",
    "source": "অবস্থান",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_433",
    "c": "English Literature",
    "q": "Who wrote the novel “Pride and Prejudice”?",
    "o": [
      "Charlotte Brontë",
      "Jane Austen",
      "George Eliot",
      "Mary Shelley"
    ],
    "a": 1,
    "e": "Jane Austen published Pride and Prejudice in 1813.",
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_434",
    "c": "English Literature",
    "q": "“The Waste Land” is a poem by whom?",
    "o": [
      "W. B. Yeats",
      "T. S. Eliot",
      "W. H. Auden",
      "John Keats"
    ],
    "a": 1,
    "e": "T. S. Eliot's modernist poem The Waste Land was published in 1922.",
    "source": "Poetry",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_435",
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
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_436",
    "c": "English Literature",
    "q": "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    "o": [
      "Macbeth",
      "Hamlet",
      "Othello",
      "King Lear"
    ],
    "a": 1,
    "e": "Rosencrantz and Guildenstern appear in Shakespeare’s Hamlet.",
    "source": "Drama",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_437",
    "c": "English Literature",
    "q": "Who wrote “A Tale of Two Cities”?",
    "o": [
      "Charles Dickens",
      "Thomas Hardy",
      "William Thackeray",
      "George Orwell"
    ],
    "a": 0,
    "e": "A Tale of Two Cities is a historical novel by Charles Dickens, published in 1859.",
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  },
  {
    "id": "extra_438",
    "c": "English Literature",
    "q": "“The Old Man and the Sea” was written by whom?",
    "o": [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner"
    ],
    "a": 1,
    "e": "Ernest Hemingway wrote The Old Man and the Sea, published in 1952.",
    "source": "Novel",
    "sourceUrl": "",
    "d": ""
  }
];
const bank=window.JOB_PREP_BANK||(window.JOB_PREP_BANK=[]);
const norm=s=>String(s||'').normalize('NFC').replace(/\s+/g,' ').trim().toLocaleLowerCase('bn');
const seen=new Set(bank.map(item=>norm(item.q)+(item.c==='English'?'|'+norm(item.o&&item.o[item.a]):'')));const ids=new Set(bank.map(item=>item.id));
for(const item of additions){if(seen.has(norm(item.q)+(item.c==='English'?'|'+norm(item.o&&item.o[item.a]):''))||ids.has(item.id))continue;bank.push(item);seen.add(norm(item.q)+(item.c==='English'?'|'+norm(item.o&&item.o[item.a]):''));ids.add(item.id);}
window.JOB_PREP_BANK=bank;
})();