/* মেধার লড়াই — চাকরি প্রস্তুতি প্রশ্নব্যাংক সম্প্রসারণ ব্যাচ ৪০ */
(()=>{'use strict';
const additions=[
{id:"extra_1366",c:"বাংলা ভাষা ও সাহিত্য",q:"‘কপালকুণ্ডলা’ উপন্যাসের রচয়িতা কে?",o:["মীর মশাররফ হোসেন","বঙ্কিমচন্দ্র চট্টোপাধ্যায়","রবীন্দ্রনাথ ঠাকুর","প্রমথ চৌধুরী"],a:1,e:"বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের ‘কপালকুণ্ডলা’ ১৮৬৬ সালে প্রকাশিত হয়।",source:"বাংলা সাহিত্য — উপন্যাস",d:"সহজ"},
{id:"extra_1368",c:"বাংলা ভাষা ও সাহিত্য",q:"‘নীলকণ্ঠ’ কোন সমাসের উদাহরণ?",o:["দ্বিগু","কর্মধারয়","বহুব্রীহি","দ্বন্দ্ব"],a:2,e:"‘যার কণ্ঠ নীল’—এই ব্যাসবাক্য থেকে ‘নীলকণ্ঠ’ বহুব্রীহি সমাস।",source:"বাংলা ব্যাকরণ — শব্দগঠন",d:"মাঝারি"},

{id:"extra_1369",c:"English",q:"Choose the correct indirect speech: He said, 'I am busy now.'",o:["He said that I am busy now.","He said that he was busy then.","He said that he is busy now.","He told that he had busy then."],a:1,e:"In reported speech, the pronoun changes to 'he', present 'am' backshifts to 'was', and 'now' changes to 'then'.",source:"English Grammar — Narration",d:"মাঝারি"},
{id:"extra_1370",c:"English",q:"Choose the correctly spelled word.",o:["Accomodation","Acommodation","Accommodation","Accommudation"],a:2,e:"The correct spelling is 'accommodation'—with double c and double m.",source:"English Vocabulary — Spelling",d:"সহজ"},
{id:"extra_1371",c:"English",q:"Fill in the blank: 'Hardly had the train left ___ it began to rain.'",o:["than","when","then","while"],a:1,e:"The correlative construction is 'Hardly ... when'.",source:"English Grammar — Correlative Conjunction",d:"কঠিন"},

{id:"extra_1372",c:"বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",q:"বাংলাদেশের বর্তমান জাতীয় পতাকার চূড়ান্ত নকশা কে প্রণয়ন করেন?",o:["কামরুল হাসান","জয়নুল আবেদিন","হামিদুর রহমান","কাইয়ুম চৌধুরী"],a:0,e:"বাংলাদেশের বর্তমান জাতীয় পতাকার নকশা চূড়ান্ত করেন শিল্পী কামরুল হাসান।",source:"বাংলাদেশ বিষয়াবলি — জাতীয় প্রতীক",d:"সহজ"},
{id:"extra_1373",c:"বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",q:"সার্ক (SAARC) প্রতিষ্ঠিত হয় কোন সালে?",o:["১৯৮০","১৯৮৩","১৯৮৫","১৯৮৭"],a:2,e:"দক্ষিণ এশীয় আঞ্চলিক সহযোগিতা সংস্থা সার্ক ৮ ডিসেম্বর ১৯৮৫ সালে প্রতিষ্ঠিত হয়।",source:"আন্তর্জাতিক বিষয়াবলি — আঞ্চলিক সংস্থা",d:"সহজ"},
{id:"extra_1374",c:"বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান",q:"বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম কী?",o:["বঙ্গবন্ধু-১","বাংলাদেশ-১","বিজয়-১","সোনার বাংলা-১"],a:0,e:"বাংলাদেশের প্রথম যোগাযোগ উপগ্রহের নাম বঙ্গবন্ধু-১; এটি ২০১৮ সালে উৎক্ষেপিত হয়।",source:"বাংলাদেশ বিষয়াবলি — মহাকাশ প্রযুক্তি",d:"সহজ"},

{id:"extra_1375",c:"সাধারণ বিজ্ঞান",q:"উদ্ভিদের সালোকসংশ্লেষণ প্রধানত কোষের কোন অঙ্গাণুতে ঘটে?",o:["মাইটোকন্ড্রিয়া","রাইবোজোম","ক্লোরোপ্লাস্ট","গলজি বডি"],a:2,e:"ক্লোরোপ্লাস্টে ক্লোরোফিল থাকে এবং সেখানেই সালোকসংশ্লেষণের আলোক-নির্ভর ও কার্বন স্থিতিকরণ ধাপ সংঘটিত হয়।",source:"জীববিজ্ঞান — কোষ",d:"সহজ"},
{id:"extra_1376",c:"সাধারণ বিজ্ঞান",q:"বিশুদ্ধ পানির স্ফুটনাঙ্ক স্বাভাবিক বায়ুচাপে কত?",o:["০°C","৫০°C","১০০°C","১২০°C"],a:2,e:"সমুদ্রপৃষ্ঠের কাছাকাছি ১ বায়ুমণ্ডল চাপে বিশুদ্ধ পানি ১০০°C তাপমাত্রায় ফুটে।",source:"পদার্থবিজ্ঞান — তাপ",d:"সহজ"},

{id:"extra_1378",c:"কম্পিউটার ও ICT",q:"কম্পিউটারে Ctrl + Z সাধারণত কোন কাজ করে?",o:["কপি","পেস্ট","আগের কাজ বাতিল (Undo)","সব নির্বাচন"],a:2,e:"বেশিরভাগ ডেস্কটপ অ্যাপ্লিকেশনে Ctrl + Z সর্বশেষ সম্পাদনা Undo করে।",source:"কম্পিউটার ব্যবহারিক — কিবোর্ড শর্টকাট",d:"সহজ"},
{id:"extra_1379",c:"কম্পিউটার ও ICT",q:"IPv4 ঠিকানা কত bit দীর্ঘ?",o:["১৬ bit","৩২ bit","৬৪ bit","১২৮ bit"],a:1,e:"IPv4 ঠিকানা ৩২ bit দীর্ঘ; IPv6 ঠিকানা ১২৮ bit দীর্ঘ।",source:"কম্পিউটার নেটওয়ার্ক — IP",d:"মাঝারি"},
{id:"extra_1380",c:"কম্পিউটার ও ICT",q:"Phishing বলতে কী বোঝায়?",o:["কম্পিউটারের গতি বাড়ানো","প্রতারণার মাধ্যমে গোপন তথ্য হাতিয়ে নেওয়ার চেষ্টা","ফাইল সংকুচিত করা","নেটওয়ার্কের তার পরীক্ষা করা"],a:1,e:"Phishing হলো ভুয়া বার্তা বা ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড বা আর্থিক তথ্যের মতো সংবেদনশীল তথ্য চুরির কৌশল।",source:"সাইবার নিরাপত্তা",d:"মাঝারি"},

{id:"extra_1382",c:"মানসিক দক্ষতা ও IQ",q:"একটি সারিতে রিনা বাম দিক থেকে ১২তম এবং ডান দিক থেকে ৯ম। সারিতে মোট কতজন?",o:["১৯","২০","২১","২২"],a:1,e:"মোট ব্যক্তি = বাম দিকের অবস্থান + ডান দিকের অবস্থান − ১ = ১২+৯−১ = ২০।",source:"অবস্থান নির্ণয়",d:"সহজ"},
{id:"extra_1383",c:"মানসিক দক্ষতা ও IQ",q:"যদি গতকাল শুক্রবার হয়ে থাকে, তবে আগামী পরশু কী বার হবে?",o:["রবিবার","সোমবার","মঙ্গলবার","বুধবার"],a:1,e:"গতকাল শুক্রবার হলে আজ শনিবার; আগামী পরশু অর্থ আজ থেকে দুই দিন পর, সোমবার।",source:"দিন নির্ণয়",d:"সহজ"},

{id:"extra_1384",c:"যুক্তি ও বিশ্লেষণ",q:"সব A হলো B এবং কোনো B হলো C নয়। তাহলে কোনটি অবশ্যই সত্য?",o:["কিছু A হলো C","কোনো A হলো C নয়","সব C হলো A","কিছু B হলো A নয়"],a:1,e:"A-এর প্রতিটি সদস্য B-এর অন্তর্ভুক্ত; B ও C-এর কোনো সদস্যের মিল নেই। তাই কোনো A-ই C নয়।",source:"যুক্তি — শ্রেণিসম্পর্ক",d:"মাঝারি"},
{id:"extra_1385",c:"যুক্তি ও বিশ্লেষণ",q:"একটি ঘড়ি প্রতি ঘণ্টায় ৫ মিনিট এগিয়ে যায়। সকাল ৮টায় ঘড়িটি সঠিক করা হলে প্রকৃত সময় দুপুর ১২টায় ঘড়িটি কত দেখাবে?",o:["১২টা ১০ মিনিট","১২টা ১৫ মিনিট","১২টা ২০ মিনিট","১২টা ২৫ মিনিট"],a:2,e:"৪ ঘণ্টায় ঘড়িটি ৪×৫=২০ মিনিট এগিয়ে যাবে; তাই ১২টার সময় দেখাবে ১২টা ২০ মিনিট।",source:"যুক্তি — ঘড়ি",d:"মাঝারি"},
{id:"extra_1386",c:"যুক্তি ও বিশ্লেষণ",q:"একটি কোডে প্রতিটি অক্ষর ইংরেজি বর্ণমালায় ২ ঘর পরের অক্ষর দিয়ে লেখা হয়। BOOK-এর কোড কী?",o:["DQQM","DPPM","CQQM","DQQN"],a:0,e:"B→D, O→Q, O→Q, K→M; তাই BOOK-এর কোড DQQM।",source:"কোডিং-ডিকোডিং",d:"সহজ"},

{id:"extra_1387",c:"সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",q:"২০২৩ সালের ICC পুরুষ ক্রিকেট বিশ্বকাপ কোন দেশ আয়োজন করে?",o:["ইংল্যান্ড","ভারত","অস্ট্রেলিয়া","দক্ষিণ আফ্রিকা"],a:1,e:"২০২৩ সালের ICC পুরুষ ক্রিকেট বিশ্বকাপ ভারতের বিভিন্ন ভেন্যুতে অনুষ্ঠিত হয়।",source:"আন্তর্জাতিক ক্রীড়া — ক্রিকেট বিশ্বকাপ ২০২৩",sourceUrl:"https://www.icc-cricket.com/tournaments/cricketworldcup",d:"সহজ"},
{id:"extra_1388",c:"সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",q:"২০২৩ সালের নোবেল সাহিত্য পুরস্কার কে পান?",o:["অ্যানি এরনো","জন ফস","আব্দুলরাজাক গুরনাহ","লুইজ গ্লুক"],a:1,e:"নরওয়ের লেখক ও নাট্যকার ইয়োন ফসে (Jon Fosse) ২০২৩ সালের নোবেল সাহিত্য পুরস্কার পান।",source:"নোবেল পুরস্কার ২০২৩",sourceUrl:"https://www.nobelprize.org/prizes/literature/2023/summary/",d:"মাঝারি"},
{id:"extra_1389",c:"সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান",q:"২০২৪ সালের গ্রীষ্মকালীন প্যারালিম্পিক কোথায় অনুষ্ঠিত হয়?",o:["লন্ডন","প্যারিস","রিও ডি জেনেইরো","টোকিও"],a:1,e:"২০২৪ সালের গ্রীষ্মকালীন প্যারালিম্পিক ফ্রান্সের প্যারিসে অনুষ্ঠিত হয়।",source:"আন্তর্জাতিক ক্রীড়া — প্যারালিম্পিক ২০২৪",sourceUrl:"https://www.paralympic.org/paris-2024",d:"সহজ"},

{id:"extra_1390",c:"English Literature",q:"Who wrote the novel 'Wuthering Heights'?",o:["Charlotte Brontë","Emily Brontë","Anne Brontë","George Eliot"],a:1,e:"Wuthering Heights, published in 1847, is the only novel by Emily Brontë.",source:"English Literature — Novel",d:"সহজ"},
{id:"extra_1391",c:"English Literature",q:"'Paradise Lost' is an epic poem by whom?",o:["John Milton","Alexander Pope","Geoffrey Chaucer","Edmund Spenser"],a:0,e:"John Milton wrote the epic poem Paradise Lost, first published in 1667.",source:"English Literature — Epic Poetry",d:"সহজ"},
{id:"extra_1392",c:"English Literature",q:"Which literary period is most closely associated with Geoffrey Chaucer?",o:["Romantic period","Victorian period","Middle English period","Modernist period"],a:2,e:"Geoffrey Chaucer is a major poet of the Middle English period, best known for The Canterbury Tales.",source:"English Literature — Literary Periods",d:"মাঝারি"},

{id:"extra_1393",c:"গণিত",q:"একটি সংখ্যার ২০% বৃদ্ধি করে পরে ২০% হ্রাস করা হলো। মূল সংখ্যার তুলনায় চূড়ান্ত পরিবর্তন কত?",o:["৪% বৃদ্ধি","৪% হ্রাস","কোনো পরিবর্তন নেই","২% হ্রাস"],a:1,e:"ধরি মূল সংখ্যা ১০০। ২০% বাড়লে ১২০; ২০% কমলে ৯৬। অর্থাৎ ৪% হ্রাস।",source:"শতকরা",d:"মাঝারি"},
{id:"extra_1394",c:"গণিত",q:"x:y = ২:৩ এবং y:z = ৪:৫ হলে x:z কত?",o:["৮:১৫","২:৫","৬:৫","৪:১৫"],a:0,e:"x:y=২:৩ এবং y:z=৪:৫। y সমান করতে প্রথম অনুপাত ৪ দিয়ে ও দ্বিতীয়টি ৩ দিয়ে গুণ করলে x:y:z=৮:১২:১৫; তাই x:z=৮:১৫।",source:"অনুপাত ও সমানুপাত",d:"মাঝারি"},
{id:"extra_1395",c:"গণিত",q:"একটি বৃত্তের পরিধি ৪৪ সেমি হলে ব্যাসার্ধ কত? (π = ২২/৭)",o:["৫ সেমি","৬ সেমি","৭ সেমি","১৪ সেমি"],a:2,e:"পরিধি = ২πr; তাই r = ৪৪÷(২×২২/৭)=৭ সেমি।",source:"জ্যামিতি — বৃত্ত",d:"সহজ"}
];
const bank=window.JOB_PREP_BANK;
if(!Array.isArray(bank)) throw new Error('JOB_PREP_BANK পাওয়া যায়নি।');
const norm=s=>String(s||'').normalize('NFC').replace(/\\s+/g,' ').trim().toLocaleLowerCase('bn');
const key=q=>window.JOB_PREP_QUESTION_KEY?window.JOB_PREP_QUESTION_KEY(q,q.c):norm(q.c)+'|'+norm(q.q)+'|'+(q.o||[]).map(norm).sort().join('|')+'|'+norm((q.o||[])[q.a]);const seen=new Set(bank.map(key)),ids=new Set(bank.map(q=>q.id));
let added=0,duplicates=0;
for(const q of additions){if(seen.has(key(q))||ids.has(q.id)){duplicates++;continue;}bank.push(q);seen.add(key(q));ids.add(q.id);added++;}
window.JOB_PREP_EXPANSION_BATCH_40={candidates:additions.length,added,duplicates};
})();