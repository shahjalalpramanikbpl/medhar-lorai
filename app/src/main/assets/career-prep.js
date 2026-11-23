/* মেধার লড়াই — চাকরি প্রস্তুতি মডিউল v1
 * পুরোনো প্রশ্ন/স্কোর/লেভেল অপরিবর্তিত রেখে নতুন বিষয়ভিত্তিক প্রশ্ন ও ব্যাখ্যা যোগ করে।
 */
(()=> {
 const Q=(c,q,o,a,d,e)=>({id:'career_'+c+'_'+q.slice(0,18),c,q,o,a,d,e});
 const bank=[
 Q('গণিত · শতকরা','৮০০ টাকার ১৫% কত?', ['১০০ টাকা','১২০ টাকা','১৪০ টাকা','১৬০ টাকা'],1,'সহজ','৮০০ × ১৫ ÷ ১০০ = ১২০ টাকা।'),
 Q('গণিত · শতকরা','কোনো সংখ্যার ২৫% = ৬০ হলে সংখ্যাটি কত?', ['১৮০','২০০','২৪০','২৬০'],2,'মাঝারি','সংখ্যা = ৬০ × ১০০ ÷ ২৫ = ২৪০।'),
 Q('গণিত · লাভ-ক্ষতি','একটি পণ্য ৫০০ টাকায় কিনে ৫৭৫ টাকায় বিক্রি করলে লাভের হার কত?', ['১০%','১২%','১৫%','২০%'],2,'সহজ','লাভ = ৫৭৫−৫০০ = ৭৫। লাভের হার = ৭৫÷৫০০×১০০ = ১৫%।'),
 Q('গণিত · লাভ-ক্ষতি','২০% ক্ষতিতে ৪৮০ টাকায় বিক্রি হলে ক্রয়মূল্য কত?', ['৫৬০','৫৮০','৬০০','৬২০'],2,'মাঝারি','৮০% = ৪৮০ টাকা; ১০০% = ৪৮০×১০০÷৮০ = ৬০০ টাকা।'),
 Q('গণিত · অনুপাত','দুটি সংখ্যার অনুপাত ৩:৫ এবং যোগফল ৬৪। বড় সংখ্যাটি কত?', ['২৪','৩২','৪০','৪৮'],2,'সহজ','মোট অংশ ৮; প্রতি অংশ ৬৪÷৮=৮। বড় সংখ্যা ৫×৮=৪০।'),
 Q('গণিত · গড়','৫টি সংখ্যার গড় ১৮। একটি সংখ্যা ২৬ বাদ দিলে বাকি চারটির গড় কত?', ['১৫','১৬','১৭','১৮'],1,'মাঝারি','মোট = ৫×১৮=৯০। বাকি যোগফল ৯০−২৬=৬৪; গড় ৬৪÷৪=১৬।'),
 Q('গণিত · সুদ','১,০০০ টাকার ৫% বার্ষিক সরল সুদে ৩ বছরে সুদ কত?', ['১০০','১৫০','২০০','২৫০'],1,'সহজ','সরল সুদ = (মূলধন×হার×সময়)÷১০০ = ১০০০×৫×৩÷১০০ = ১৫০ টাকা।'),
 Q('গণিত · সময় ও কাজ','ক একজন ১০ দিনে এবং খ ১৫ দিনে কাজটি করতে পারে। একত্রে কত দিনে করবে?', ['৫ দিন','৬ দিন','৭ দিন','৮ দিন'],1,'মাঝারি','এক দিনের কাজ = ১/১০+১/১৫ = ১/৬। তাই সময় ৬ দিন।'),
 Q('গণিত · সময় ও দূরত্ব','ঘণ্টায় ৬০ কিমি বেগে ২ ঘণ্টা ৩০ মিনিটে কত দূরত্ব অতিক্রম করবে?', ['১২০ কিমি','১৩০ কিমি','১৪০ কিমি','১৫০ কিমি'],3,'সহজ','সময় ২.৫ ঘণ্টা। দূরত্ব = বেগ×সময় = ৬০×২.৫ = ১৫০ কিমি।'),
 Q('গণিত · নৌকা ও স্রোত','স্থির পানিতে নৌকার বেগ ১০ কিমি/ঘণ্টা, স্রোতের বেগ ২ কিমি/ঘণ্টা। অনুকূলে বেগ কত?', ['৮','১০','১২','১৪'],2,'সহজ','অনুকূলে বেগ = স্থির পানির বেগ + স্রোতের বেগ = ১০+২ = ১২ কিমি/ঘণ্টা।'),
 Q('গণিত · বয়স','পিতা ও পুত্রের বয়সের যোগফল ৬০ বছর। পিতার বয়স পুত্রের ৩ গুণ। পুত্রের বয়স কত?', ['১২','১৫','১৮','২০'],1,'মাঝারি','পুত্রের বয়স x হলে ৪x=৬০; x=১৫ বছর।'),
 Q('গণিত · বীজগণিত','3x−7=20 হলে x-এর মান কত?', ['৭','৮','৯','১০'],2,'সহজ','৩x=২০+৭=২৭; x=২৭÷৩=৯।'),
 Q('গণিত · বীজগণিত','(a+b)² এর সঠিক বিস্তৃতি কোনটি?', ['a²+b²','a²−2ab+b²','a²+2ab+b²','a²−b²'],2,'মাঝারি','সূত্র: (a+b)² = a²+2ab+b²।'),
 Q('গণিত · সংখ্যা','১২ ও ১৮-এর ল.সা.গু কত?', ['২৪','৩০','৩৬','৫৪'],2,'সহজ','১২=২²×৩ এবং ১৮=২×৩²; সর্বোচ্চ ঘাত নিয়ে ল.সা.গু=২²×৩²=৩৬।'),
 Q('গণিত · সংখ্যা','৪৮ ও ৬০-এর গ.সা.গু কত?', ['৬','৮','১২','১৬'],2,'সহজ','৪৮ ও ৬০-এর সর্বোচ্চ সাধারণ গুণনীয়ক ১২।'),
 Q('গণিত · জ্যামিতি','একটি আয়তক্ষেত্রের দৈর্ঘ্য ১২ মিটার ও প্রস্থ ৭ মিটার। ক্ষেত্রফল কত?', ['৩৮','৭৬','৮৪','৯৬'],2,'সহজ','ক্ষেত্রফল = দৈর্ঘ্য×প্রস্থ = ১২×৭ = ৮৪ বর্গমিটার।'),
 Q('গণিত · জ্যামিতি','ত্রিভুজের ভূমি ১০ সেমি ও উচ্চতা ৮ সেমি হলে ক্ষেত্রফল কত?', ['১৮','৪০','৮০','৯০'],1,'সহজ','ত্রিভুজের ক্ষেত্রফল = ১/২×ভূমি×উচ্চতা = ১/২×১০×৮ = ৪০ বর্গসেমি।'),
 Q('গণিত · পরিমিতি','বৃত্তের ব্যাসার্ধ ৭ সেমি হলে পরিধি কত? (π=২২/৭)', ['২২','৪৪','৮৮','১৫৪'],1,'মাঝারি','পরিধি = ২πr = ২×২২/৭×৭ = ৪৪ সেমি।'),
 Q('গণিত · ধারা','২, ৬, ১৮, ৫৪, ... ধারার পরের সংখ্যা কত?', ['১০৮','১২৬','১৬২','১৮০'],2,'মাঝারি','প্রতিটি পদ আগের পদের ৩ গুণ; ৫৪×৩=১৬২।'),
 Q('গণিত · সম্ভাবনা','একটি ছক্কা একবার নিক্ষেপে জোড় সংখ্যা পাওয়ার সম্ভাবনা কত?', ['১/৬','১/৩','১/২','২/৩'],2,'মাঝারি','জোড় ফল ২,৪,৬—অনুকূল ৩টি; মোট ৬টি। সম্ভাবনা ৩/৬=১/২।'),
 Q('বাংলা','“অগ্নি” শব্দের সমার্থক কোনটি?', ['অনল','অম্বর','অরণ্য','অচল'],0,'সহজ','অগ্নি শব্দের সমার্থক অনল, বহ্নি, পাবক।'),
 Q('বাংলা','“যে উপকারীর উপকার স্বীকার করে” এক কথায় কী?', ['কৃতঘ্ন','কৃতজ্ঞ','পরোপকারী','উদার'],1,'মাঝারি','যে উপকারীর উপকার স্বীকার করে, সে কৃতজ্ঞ।'),
 Q('বাংলা','“রাজপুত্র” কোন সমাস?', ['দ্বন্দ্ব','কর্মধারয়','ষষ্ঠী তৎপুরুষ','বহুব্রীহি'],2,'কঠিন','রাজার পুত্র—সম্বন্ধপদে ষষ্ঠী তৎপুরুষ সমাস।'),
 Q('English','Choose the correct sentence.', ['He go to school.','He goes to school.','He going to school.','He gone to school.'],1,'সহজ','Third-person singular subject “He” takes “goes” in the simple present tense.'),
 Q('English','What is the antonym of “Scarce”?', ['Rare','Limited','Abundant','Insufficient'],2,'সহজ','Scarce means insufficient or hard to find; its antonym is abundant.'),
 Q('English','Choose the correct passive form: “They built the bridge.”', ['The bridge is built by them.','The bridge was built by them.','The bridge has built by them.','The bridge had build by them.'],1,'মাঝারি','Simple past active changes to “was/were + past participle” in passive voice.'),
 Q('সাধারণ জ্ঞান','বাংলাদেশের সংবিধান কার্যকর হয় কবে?', ['২৬ মার্চ ১৯৭১','১৬ ডিসেম্বর ১৯৭২','৭ মার্চ ১৯৭১','১০ জানুয়ারি ১৯৭২'],1,'মাঝারি','বাংলাদেশের সংবিধান ৪ নভেম্বর ১৯৭২ গৃহীত এবং ১৬ ডিসেম্বর ১৯৭২ কার্যকর হয়।'),
 Q('সাধারণ জ্ঞান','জাতিসংঘ প্রতিষ্ঠিত হয় কত সালে?', ['১৯১৯','১৯৪৫','১৯৪৮','১৯৫২'],1,'সহজ','জাতিসংঘ ২৪ অক্টোবর ১৯৪৫ সালে প্রতিষ্ঠিত হয়।'),
 Q('বিজ্ঞান','ভিটামিন C-এর অভাবে কোন রোগ হয়?', ['রিকেটস','স্কার্ভি','রাতকানা','বেরিবেরি'],1,'সহজ','ভিটামিন C-এর অভাবে স্কার্ভি রোগ হয়।'),
 Q('তথ্যপ্রযুক্তি','কম্পিউটারে বাইনারি সংখ্যা পদ্ধতির ভিত্তি কত?', ['২','৮','১০','১৬'],0,'সহজ','বাইনারি পদ্ধতিতে ০ ও ১—দুটি অঙ্ক ব্যবহৃত হয়; ভিত্তি ২।'),
 Q('মানসিক দক্ষতা','বেমানানটি চিহ্নিত করুন: ৪, ৯, ১৬, ২০, ২৫', ['৪','৯','২০','২৫'],2,'মাঝারি','৪, ৯, ১৬ ও ২৫ পূর্ণবর্গ সংখ্যা; ২০ পূর্ণবর্গ নয়।'),
 Q('মানসিক দক্ষতা','ঘড়িতে ৩টা ৩০ মিনিটে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্র কোণ কত?', ['৬০°','৭৫°','৯০°','১০৫°'],1,'কঠিন','মিনিটের কাঁটা ১৮০°-এ, ঘণ্টার কাঁটা ১০৫°-এ; পার্থক্য ৭৫°।')
 ];
 const existing=window.ML_CONTENT?.questions||[];
 const seen=new Set(existing.map(x=>String(x.q).trim().toLowerCase()));
 bank.forEach(x=>{if(!seen.has(x.q.trim().toLowerCase())){existing.push(x);seen.add(x.q.trim().toLowerCase())}});
 if(window.ML_CONTENT) window.ML_CONTENT.questions=existing;
 window.ML_CAREER_BANK=bank;
 function launch(){
  const panel=document.getElementById('featurePanel'),title=document.getElementById('featureTitle'),body=document.getElementById('featureBody');
  if(!panel||!body)return;
  title.textContent='চাকরির প্রস্তুতি';
  let mode='model',pool=bank.slice(),pos=0,score=0,answered=false;
  const subjects=[...new Set(bank.map(x=>x.c.split(' · ')[0]))];
  function shell(){body.innerHTML='<div class="notice">বিষয়ভিত্তিক অনুশীলন, ব্যাখ্যাসহ শেখা এবং চাকরির পরীক্ষার আদলে মডেল টেস্ট। এই সংস্করণে নতুন সংযোজিত প্রশ্নগুলো দিয়ে অনুশীলন শুরু করুন।</div><div class="home-actions">'+subjects.map(s=>'<button class="home-action" data-sub="'+s+'"><b>'+s+'</b><small>বিষয়ভিত্তিক অনুশীলন</small></button>').join('')+'</div><div class="row" style="margin:14px 0"><button id="careerModel">📝 ২০ প্রশ্নের মডেল টেস্ট</button><button id="careerBack" class="secondary">হোমে ফিরুন</button></div><div id="careerQuiz"></div>';
   body.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>begin(bank.filter(x=>x.c.startsWith(b.dataset.sub)),false));
   document.getElementById('careerModel').onclick=()=>begin(bank.slice(),true);
   document.getElementById('careerBack').onclick=()=>{window.show('home')};
  }
  function begin(items,isModel){pool=items.slice().sort(()=>Math.random()-.5).slice(0,isModel?20:items.length);pos=0;score=0;mode=isModel?'model':'practice';draw()}
  function draw(){answered=false;const q=pool[pos],el=document.getElementById('careerQuiz');if(!q){el.innerHTML='<div class="card"><h3>পরীক্ষা সম্পন্ন</h3><p>স্কোর: '+score+' / '+pool.length+'</p><p>ভুল উত্তরসহ প্রতিটি প্রশ্নের ব্যাখ্যা দেখে আবার অনুশীলন করুন।</p><button id="careerRetry">আবার চেষ্টা করুন</button></div>';document.getElementById('careerRetry').onclick=shell;return}
   el.innerHTML='<div class="qitem"><div class="row"><b>'+q.c+'</b><small>প্রশ্ন '+(pos+1)+' / '+pool.length+'</small></div><div class="question">'+q.q+'</div><div class="answers">'+q.o.map((v,i)=>'<button class="answer" data-answer="'+i+'">'+['ক','খ','গ','ঘ'][i]+'. '+v+'</button>').join('')+'</div><div id="careerExplain" class="notice hidden" style="margin-top:12px"></div><div class="row" style="margin-top:12px"><b>স্কোর: '+score+'</b><button id="careerNext" class="hidden">পরের প্রশ্ন</button></div></div>';
   el.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const n=Number(b.dataset.answer);if(n===q.a)score++;el.querySelectorAll('[data-answer]').forEach((x,i)=>{x.disabled=true;if(i===q.a)x.style.border='2px solid #67e0bd'});const ex=document.getElementById('careerExplain');ex.classList.remove('hidden');ex.innerHTML='<b>'+(n===q.a?'সঠিক উত্তর!':'সঠিক উত্তর: '+q.o[q.a])+'</b><br>'+q.e;document.getElementById('careerNext').classList.remove('hidden')});
   document.getElementById('careerNext').onclick=()=>{pos++;draw()};
  }
  shell();window.show('featurePanel');
 }
 function addButton(){const host=document.querySelector('#home .home-actions');if(!host||document.getElementById('careerPrepBtn'))return;const b=document.createElement('button');b.className='home-action';b.id='careerPrepBtn';b.innerHTML='<span>🎯</span><b>চাকরির প্রস্তুতি</b><small>বিষয়ভিত্তিক অনুশীলন ও মডেল টেস্ট</small>';b.onclick=launch;host.prepend(b)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addButton);else addButton();
 setTimeout(addButton,500);
})();