/* Medhar Lorai - Offline Feature Pack v1
   Adds IQ Challenge, Knowledge Bank, Daily Challenge, Achievements,
   Progress Dashboard, and Word/Memory mini-games.
*/
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  };
  const tr = (bn, en) => (localStorage.getItem('ml_lang') || 'bn') === 'bn' ? bn : en;
  const points = () => Number(localStorage.getItem('ml_points') || 0);
  const savePoints = n => localStorage.setItem('ml_points', String(n));
  const level = () => Number(localStorage.getItem('ml_level') || 1);
  const count = key => Number(localStorage.getItem(key) || 0);
  const addCount = key => localStorage.setItem(key, String(count(key) + 1));
  const dateKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  };

  const style = document.createElement('style');
  style.textContent = `
    .ml-extra-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:14px}
    .ml-extra-btn{min-height:94px;padding:12px 6px;border-radius:16px;background:linear-gradient(150deg,#203b5d,#122239);color:#f4f7ff;border:1px solid #456486;box-shadow:0 5px 0 #091426;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px}
    .ml-extra-btn span{font-size:25px}.ml-extra-btn b{font-size:13px}
    .ml-panel{background:#192943;border:1px solid #3a506f;border-radius:20px;padding:18px;margin:14px 0;color:#f4f7ff}
    .ml-panel h2{margin-top:0}.ml-back{float:right;background:#344b6b;color:white}
    .ml-box{background:#101d32;border-radius:13px;padding:13px;margin:10px 0;line-height:1.6}
    .ml-option{display:block;width:100%;text-align:left;margin:8px 0;background:#2b405f;color:white}
    .ml-muted{color:#b4c1d7;font-size:13px}.ml-badge{display:inline-flex;gap:8px;align-items:center;padding:10px;margin:5px;background:#102039;border:1px solid #456486;border-radius:12px}
    .ml-locked{opacity:.4;filter:grayscale(1)}.ml-sequence{font-size:30px;letter-spacing:8px;text-align:center;padding:20px;background:#102039;border-radius:14px}
    .ml-panel input{width:100%;padding:11px;border:1px solid #3a506f;border-radius:10px;background:#0e1a2d;color:white;margin:8px 0}
    @media(max-width:420px){.ml-extra-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  `;
  document.head.appendChild(style);

  const panels = [
    ['mlIQ','🧠 IQ Challenge'], ['mlKnowledge','📚 জ্ঞানভাণ্ডার'],
    ['mlDaily','⚡ Daily Challenge'], ['mlAchievements','🏅 আমার অর্জন'],
    ['mlProgress','📈 আমার অগ্রগতি'], ['mlMiniGames','🎮 শব্দ ও স্মৃতির খেলা']
  ];
  const home = $('home');
  if (!home) return;
  const actions = home.querySelector('.home-actions') || home;
  const grid = document.createElement('div');
  grid.className = 'ml-extra-grid';
  panels.forEach(([id,title]) => {
    const b = document.createElement('button');
    b.className = 'ml-extra-btn';
    b.innerHTML = `<span>${title.split(' ')[0]}</span><b>${title.substring(title.indexOf(' ')+1)}</b>`;
    b.addEventListener('click', () => open(id));
    grid.appendChild(b);
  });
  actions.insertAdjacentElement('afterend', grid);

  panels.forEach(([id,title]) => {
    const section = document.createElement('section');
    section.id = id;
    section.className = 'ml-panel hidden';
    section.innerHTML = `<button class="ml-back" type="button">হোমে ফিরুন</button><h2>${title}</h2><div class="ml-content"></div>`;
    section.querySelector('.ml-back').onclick = () => {
      section.classList.add('hidden');
      $('home').classList.remove('hidden');
    };
    document.querySelector('main.wrap').appendChild(section);
  });

  function open(id) {
    ['home','game','result','admin','mlIQ','mlKnowledge','mlDaily','mlAchievements','mlProgress','mlMiniGames']
      .forEach(x => { const el=$(x); if(el) el.classList.toggle('hidden',x!==id); });
    if (id==='mlIQ') renderIQ();
    if (id==='mlKnowledge') renderKnowledge();
    if (id==='mlDaily') renderDaily();
    if (id==='mlAchievements') renderBadges();
    if (id==='mlProgress') renderProgress();
    if (id==='mlMiniGames') renderMiniGames();
  }
  const content = id => $(''+id).querySelector('.ml-content');

  const puzzles = [
    {q:'৩, ৬, ১২, ২৪, এরপর কোন সংখ্যা?',o:['৩০','৩৬','৪৮','৫৪'],a:2,why:'প্রতিবার আগের সংখ্যাকে ২ দিয়ে গুণ করা হয়েছে।'},
    {q:'একটি ঘড়িতে ৩টা বাজলে দুই কাঁটার কোণ কত?',o:['৩০°','৬০°','৯০°','১৮০°'],a:2,why:'৩টায় কাঁটা দুটি পরস্পর লম্ব, তাই ৯০°।'},
    {q:'যে জিনিস অন্যকে শুকাতে গিয়ে নিজে ভিজে যায়, সেটি কী?',o:['তোয়ালে','আগুন','বাতাস','কাগজ'],a:0,why:'তোয়ালে অন্য কিছু শুকাতে গিয়ে নিজে ভিজে যায়।'},
    {q:'৫টি মেশিন ৫ মিনিটে ৫টি জিনিস বানায়। ১০০টি মেশিন ১০০টি জিনিস বানাতে কত সময় নেবে?',o:['৫ মিনিট','২০ মিনিট','১০০ মিনিট','৫০০ মিনিট'],a:0,why:'প্রতিটি মেশিন ৫ মিনিটে একটি জিনিস বানায়।'},
    {q:'একটি পরিবারের ২ বাবা ও ২ ছেলে, কিন্তু সদস্য মাত্র ৩ জন। কীভাবে?',o:['যমজ','দাদা, বাবা ও ছেলে','ভুল গণনা','বন্ধু'],a:1,why:'তিন প্রজন্ম: দাদা, তাঁর ছেলে (বাবা) এবং নাতি।'}
  ];
  function renderIQ() {
    const c=content('mlIQ');
    c.innerHTML='<p class="ml-muted">ধাঁধা ও যুক্তির প্রশ্ন সমাধান করুন। সঠিক উত্তরে IQ স্কোর বাড়বে।</p><div class="ml-box" id="mlIqQ">নতুন ধাঁধা শুরু করুন।</div><div id="mlIqOptions"></div><p id="mlIqFeedback"></p><button id="mlNewIq">নতুন ধাঁধা</button><p>সফল সমাধান: <b>'+count('ml_iqscore')+'</b></p>';
    const next=()=> {
      const p=puzzles[Math.floor(Math.random()*puzzles.length)];
      $('mlIqQ').textContent=p.q; $('mlIqFeedback').textContent='';
      const box=$('mlIqOptions'); box.innerHTML='';
      p.o.forEach((v,i)=>{
        const b=document.createElement('button'); b.className='ml-option'; b.textContent=v;
        b.onclick=()=>{
          [...box.querySelectorAll('button')].forEach(x=>x.disabled=true);
          if(i===p.a){addCount('ml_iqscore');$('mlIqFeedback').textContent='সঠিক উত্তর! 🧠 '+p.why;}
          else $('mlIqFeedback').textContent='সঠিক উত্তর: '+p.o[p.a]+'. '+p.why;
        }; box.appendChild(b);
      });
    };
    $('mlNewIq').onclick=next; next();
  }

  const facts=[
    ['বিজ্ঞান','আলো পৃথিবী থেকে চাঁদে পৌঁছাতে প্রায় ১.৩ সেকেন্ড সময় নেয়।'],
    ['প্রকৃতি','অক্টোপাসের তিনটি হৃদপিণ্ড থাকে।'],
    ['মহাকাশ','সূর্যের আলো পৃথিবীতে পৌঁছাতে প্রায় ৮ মিনিট ২০ সেকেন্ড লাগে।'],
    ['মানবদেহ','মানুষের শরীরের সবচেয়ে বড় অঙ্গ হলো ত্বক।'],
    ['বাংলাদেশ','বাংলাদেশের জাতীয় স্মৃতিসৌধ সাভারে অবস্থিত।'],
    ['প্রযুক্তি','ওয়ার্ল্ড ওয়াইড ওয়েবের উদ্ভাবক টিম বার্নার্স-লি।'],
    ['গণিত','শূন্য একটি জোড় সংখ্যা।']
  ];
  function renderKnowledge(){
    content('mlKnowledge').innerHTML='<p class="ml-muted">ছোট ছোট তথ্য পড়ুন, প্রতিদিন নতুন কিছু জানুন।</p>'+facts.map((f,i)=>`<div class="ml-box"><b>${i+1}. ${f[0]}</b><br>${f[1]}</div>`).join('');
  }

  function getQuestions(){return read('ml_questions',[]);}
  let dailyIndex=0,dailyQuestions=[];
  function renderDaily(){
    const c=content('mlDaily');
    const done=localStorage.getItem('ml_daily_date')===dateKey();
    c.innerHTML=`<p class="ml-muted">প্রতিদিন ৫টি প্রশ্ন। সঠিক উত্তরে +১, ভুল উত্তরে −০.২৫ পয়েন্ট।</p><div class="ml-box" id="mlDailyStatus">${done?'আজকের চ্যালেঞ্জ সম্পন্ন। আগামীকাল আবার আসুন।':'আজকের চ্যালেঞ্জ এখনো বাকি।'}</div><div id="mlDailyQuestion"></div>${done?'':'<button id="mlDailyStart">চ্যালেঞ্জ শুরু করুন</button>'}`;
    if(!done) $('mlDailyStart').onclick=startDaily;
  }
  function startDaily(){
    const qs=getQuestions();
    if(qs.length<5){alert('Daily Challenge-এর জন্য অন্তত ৫টি প্রশ্ন প্রয়োজন।');return;}
    dailyQuestions=[...qs].sort(()=>Math.random()-.5).slice(0,5);dailyIndex=0;showDailyQuestion();
  }
  function showDailyQuestion(){
    const q=dailyQuestions[dailyIndex],box=$('mlDailyQuestion');
    box.innerHTML=`<div class="ml-box"><b>প্রশ্ন ${dailyIndex+1}/৫</b><p>${q.q}</p></div>`;
    q.o.forEach((v,i)=>{
      const b=document.createElement('button');b.className='ml-option';b.textContent=v;
      b.onclick=()=>{
        [...box.querySelectorAll('button')].forEach(x=>x.disabled=true);
        const p=points()+(i===Number(q.a)?1:-.25);savePoints(p);
        const msg=document.createElement('p');msg.textContent=i===Number(q.a)?'সঠিক! +১ পয়েন্ট':'ভুল! −০.২৫ পয়েন্ট';box.appendChild(msg);
        const n=document.createElement('button');n.textContent=dailyIndex===4?'চ্যালেঞ্জ শেষ':'পরের প্রশ্ন';n.onclick=()=>{
          dailyIndex++;
          if(dailyIndex>=5){localStorage.setItem('ml_daily_date',dateKey());box.innerHTML='<div class="ml-box">আজকের চ্যালেঞ্জ শেষ! 🎉</div>';}
          else showDailyQuestion();
        };box.appendChild(n);
      };box.appendChild(b);
    });
  }

  function renderBadges(){
    const a=count('ml_answered'),c=count('ml_correct'),best=count('ml_beststreak'),iq=count('ml_iqscore'),mem=count('ml_memorywins');
    const badges=[
      ['🌱','শুরু','১০টি প্রশ্নের উত্তর',a>=10],['🎯','নিখুঁত লক্ষ্য','১০টি সঠিক উত্তর',c>=10],
      ['🧠','মেধাবী','২৫টি সঠিক উত্তর',c>=25],['🔥','ধারাবাহিক','৫টি টানা সঠিক উত্তর',best>=5],
      ['🧩','ধাঁধাবাজ','৩টি IQ সমাধান',iq>=3],['💭','স্মৃতিশক্তি','৩টি স্মৃতি পরীক্ষা',mem>=3],
      ['🏆','লেভেল বিজয়ী','৫ম লেভেল',level()>=5]
    ];
    content('mlAchievements').innerHTML='<p class="ml-muted">শর্ত পূরণ হলে ব্যাজ উজ্জ্বল হবে।</p>'+badges.map(b=>`<span class="ml-badge ${b[3]?'':'ml-locked'}">${b[0]} <span><b>${b[1]}</b><br><small>${b[2]}</small></span></span>`).join('');
  }

  function renderProgress(){
    const a=count('ml_answered'),c=count('ml_correct'),w=Math.max(0,a-c),rate=a?Math.round(c/a*100):0;
    content('mlProgress').innerHTML=`<div class="ml-extra-grid"><div class="ml-box"><b>${a}</b><br>মোট উত্তর</div><div class="ml-box"><b>${c}</b><br>সঠিক উত্তর</div><div class="ml-box"><b>${w}</b><br>ভুল উত্তর</div><div class="ml-box"><b>${rate}%</b><br>সঠিক উত্তরের হার</div></div><div class="ml-box">মোট পয়েন্ট: <b>${points().toFixed(2)}</b><br>বর্তমান লেভেল: <b>${level()}</b><br>সেরা টানা সঠিক উত্তর: <b>${count('ml_beststreak')}</b><br>IQ সমাধান: <b>${count('ml_iqscore')}</b><br>স্মৃতি পরীক্ষা সফল: <b>${count('ml_memorywins')}</b></div><p class="ml-muted">এই পরিসংখ্যান এই ডিভাইসেই সংরক্ষিত থাকে।</p>`;
  }

  function renderMiniGames(){
    const c=content('mlMiniGames');
    c.innerHTML=`<div class="ml-box"><h3>🔢 স্মৃতিশক্তি পরীক্ষা</h3><p id="mlMemText">সংখ্যাটি মনে রাখুন।</p><div class="ml-sequence" id="mlSequence">?</div><input id="mlMemAnswer" inputmode="numeric" placeholder="মনে রাখা সংখ্যাটি লিখুন"><button id="mlMemStart">শুরু</button> <button id="mlMemCheck">যাচাই</button><p id="mlMemFeedback"></p></div><div class="ml-box"><h3>🔤 শব্দ সাজান</h3><p id="mlWordHint">অক্ষরগুলো সাজিয়ে সঠিক শব্দ তৈরি করুন।</p><div class="ml-sequence" id="mlScrambled">?</div><input id="mlWordAnswer" placeholder="সঠিক শব্দ লিখুন"><button id="mlWordNew">নতুন শব্দ</button> <button id="mlWordCheck">যাচাই</button><p id="mlWordFeedback"></p></div>`;
    let secret='';
    $('mlMemStart').onclick=()=>{
      secret=String(Math.floor(10000+Math.random()*90000));$('mlSequence').textContent=secret;$('mlMemAnswer').value='';$('mlMemFeedback').textContent='মনে রাখুন—২ সেকেন্ড পর লুকানো হবে।';
      setTimeout(()=>{if($('mlSequence')){$('mlSequence').textContent='?????';$('mlMemFeedback').textContent='এবার সংখ্যাটি লিখুন।';}},2200);
    };
    $('mlMemCheck').onclick=()=>{
      if(!secret){$('mlMemFeedback').textContent='আগে শুরু করুন।';return;}
      if($('mlMemAnswer').value.trim()===secret){$('mlMemFeedback').textContent='অসাধারণ! সঠিক মনে রেখেছেন।';addCount('ml_memorywins');}
      else $('mlMemFeedback').textContent='মিল হয়নি। আবার চেষ্টা করুন।';
      secret='';
    };
    const words=[['কম্পিউটার','কম্পিউটার'],['বাংলাদেশ','বাংলাদেশ'],['বিজ্ঞান','বিজ্ঞান'],['পৃথিবী','পৃথিবী'],['প্রযুক্তি','প্রযুক্তি']];
    let word='';
    function newWord(){const item=words[Math.floor(Math.random()*words.length)];word=item[1];$('mlScrambled').textContent=[...word].sort(()=>Math.random()-.5).join(' · ');$('mlWordAnswer').value='';$('mlWordFeedback').textContent='';}
    $('mlWordNew').onclick=newWord;
    $('mlWordCheck').onclick=()=>{$('mlWordFeedback').textContent=$('mlWordAnswer').value.trim()===word?'সঠিক! দারুণ করেছেন।':'আবার চেষ্টা করুন।';};
    newWord();
  }

  // Track quiz answers without replacing the original scoring rules.
  const originalAnswer=window.answer;
  if(typeof originalAnswer==='function' && !window.__mlFeatureTracking){
    window.__mlFeatureTracking=true;
    window.answer=function(n){
      const before=count('ml_answered');
      originalAnswer(n);
      if(count('ml_answered')===before){
        localStorage.setItem('ml_answered',String(before+1));
        const q=window.roundQuestions && window.roundQuestions[window.index];
        if(q && Number(n)===Number(q.a)){
          addCount('ml_correct');
          const streak=Number(localStorage.getItem('ml_streak')||0)+1;
          localStorage.setItem('ml_streak',String(streak));
          localStorage.setItem('ml_beststreak',String(Math.max(streak,count('ml_beststreak'))));
        }else localStorage.setItem('ml_streak','0');
      }
    };
  }

  // The existing quiz script uses a lexical answer function; safely observe its answer buttons instead.
  document.addEventListener('click',ev=>{
    const b=ev.target.closest('#answers .answer');
    if(!b || b.disabled) return;
    const before=count('ml_answered');
    setTimeout(()=>{
      if(count('ml_answered')===before){
        localStorage.setItem('ml_answered',String(before+1));
        const qText=$('question')?.textContent||'';
        const correctButton=[...document.querySelectorAll('#answers .answer')].find(x=>x.style.borderColor==='var(--accent)');
        const isCorrect=correctButton===b;
        if(isCorrect){
          addCount('ml_correct');
          const st=count('ml_streak')+1;localStorage.setItem('ml_streak',String(st));
          localStorage.setItem('ml_beststreak',String(Math.max(st,count('ml_beststreak'))));
        }else localStorage.setItem('ml_streak','0');
      }
    },30);
  },true);

  // Keep home-page counters in sync when the user returns.
  const observer=new MutationObserver(()=>{
    const hp=$('homePoints'),hl=$('homeLevel'),hq=$('homeQuestions');
    if(hp)hp.textContent=points().toFixed(2);
    if(hl)hl.textContent=level();
    if(hq)hq.textContent=getQuestions().length;
  });
  observer.observe(home,{attributes:true,attributeFilter:['class']});
})();
