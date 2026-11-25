/* মেধার লড়াই — ৩০ স্তরের গণিত প্রস্তুতি: ৩০০টি প্রশ্ন */
(()=> {
 'use strict';
 const bn=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[+d]);
 const topics=['শতকরা','লাভ-ক্ষতি ও ছাড়','অনুপাত-সমানুপাত','গড়','সরল ও চক্রবৃদ্ধি সুদ','ঐকিক নিয়ম','সময় ও কাজ','সময়-দূরত্ব','বয়স','বীজগণিত','ল.সা.গু ও গ.সা.গু','জ্যামিতি ও ক্ষেত্রফল','ধারা','মিশ্রণ','পরিমিতি','ছাড় ও মূল্য নির্ণয়'];
 const bands=l=>l<=5?'মৌলিক':l<=10?'প্রাথমিক চাকরি পরীক্ষা':l<=15?'মাঝারি প্রতিযোগিতামূলক':l<=20?'উচ্চ-মাঝারি প্রতিযোগিতামূলক':'বিসিএস ও উচ্চতর নিয়োগ';const PROGRESS_KEY='ml_math_level_progress';const readProgress=()=>{try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}')}catch(e){return {}}};const saveProgress=(l,v)=>{try{const p=readProgress(),old=p[l]||{attempts:0,best:0};p[l]={attempts:old.attempts+1,best:Math.max(old.best,v),lastScore:v,completedAt:new Date().toISOString()};localStorage.setItem(PROGRESS_KEY,JSON.stringify(p))}catch(e){console.warn('গণিতের অগ্রগতি সংরক্ষণ হয়নি',e)}};
 const make=(level,k)=>{
  const n=level*3+k+5, p=5+(level*3+k*2)%36, x=level+k+4;
  let q,ans,formula,solution,shortcut,topic=topics[(level+k)%topics.length];
  switch((level+k)%16){
   case 0:{const base=100*(level+2),rate=p;ans=base*rate/100;q=bn(base)+' টাকার '+bn(rate)+'% কত?';formula='শতকরা পরিমাণ = মূল সংখ্যা × হার ÷ ১০০';solution=bn(base)+' × '+bn(rate)+' ÷ ১০০ = '+bn(ans)+' টাকা।';shortcut=rate%10===0?'১০% বের করে প্রয়োজনীয় গুণিতক নিন।':'হারকে ভগ্নাংশে লিখে মূল সংখ্যার সঙ্গে গুণ করুন।';break}
   case 1:{const cp=100*(level+3),rate=5+(level*2+k*3)%31;if(level%2===0){ans=cp*(100-rate)/100;q='একটি পণ্যের ক্রয়মূল্য '+bn(cp)+' টাকা। '+bn(rate)+'% ক্ষতিতে বিক্রি করলে বিক্রয়মূল্য কত?';formula='বিক্রয়মূল্য = ক্রয়মূল্য × (১০০ − ক্ষতির হার) ÷ ১০০';solution=bn(cp)+' × '+bn(100-rate)+' ÷ ১০০ = '+bn(ans)+' টাকা।';shortcut='ক্ষতির ক্ষেত্রে ১০০% থেকে ক্ষতির হার বাদ দিয়ে গুণ করুন।'}else{ans=cp*(100+rate)/100;q='একটি পণ্যের ক্রয়মূল্য '+bn(cp)+' টাকা। '+bn(rate)+'% লাভে বিক্রয়মূল্য কত?';formula='বিক্রয়মূল্য = ক্রয়মূল্য × (১০০ + লাভের হার) ÷ ১০০';solution=bn(cp)+' × '+bn(100+rate)+' ÷ ১০০ = '+bn(ans)+' টাকা।';shortcut='১০০% ক্রয়মূল্যের সঙ্গে লাভের হার যোগ করে গুণ করুন।'}break}
   case 2:{const a=level+2,b=level*2+5,total=(a+b)*(level+3);ans=total*b/(a+b);q='দুটি সংখ্যার অনুপাত '+bn(a)+':'+bn(b)+' এবং যোগফল '+bn(total)+'। বড় সংখ্যাটি কত?';formula='বড় সংখ্যা = যোগফল × বড় অনুপাত ÷ অনুপাতের যোগফল';solution='মোট অংশ '+bn(a+b)+'; বড় সংখ্যা = '+bn(total)+' × '+bn(b)+' ÷ '+bn(a+b)+' = '+bn(ans)+'।';shortcut='মোট অংশ দিয়ে যোগফল ভাগ করে বড় অংশ দিয়ে গুণ করুন।';break}
   case 3:{const count=4+(level+k)%7,avg=10+level*2;const total=count*avg;ans=total;q=bn(count)+'টি সংখ্যার গড় '+bn(avg)+'। সংখ্যাগুলোর মোট যোগফল কত?';formula='মোট যোগফল = গড় × পদসংখ্যা';solution=bn(avg)+' × '+bn(count)+' = '+bn(total)+'।';shortcut='গড়কে সংখ্যার পরিমাণ দিয়ে গুণ করলেই যোগফল।';break}
   case 4:{const principal=1000*(level+2),rate=2+(level+k)%9,years=1+Math.floor((level-1)/5);if(level%2===0){ans=principal*Math.pow(1+rate/100,years)-principal;q=bn(principal)+' টাকার '+bn(rate)+'% বার্ষিক চক্রবৃদ্ধি সুদে '+bn(years)+' বছরে সুদ কত?';formula='চক্রবৃদ্ধি সুদ = মূলধন × (১ + হার/১০০)^সময় − মূলধন';solution=bn(principal)+' × (১ + '+bn(rate)+'/১০০)^'+bn(years)+' − '+bn(principal)+' = '+bn(ans.toFixed(2))+' টাকা।';shortcut='প্রথমে (১ + হার/১০০) এর সময়-ঘাত বের করে মূলধন দিয়ে গুণ করুন।'}else{ans=principal*rate*years/100;q=bn(principal)+' টাকার '+bn(rate)+'% বার্ষিক সরল সুদে '+bn(years)+' বছরে সুদ কত?';formula='সরল সুদ = মূলধন × হার × সময় ÷ ১০০';solution=bn(principal)+' × '+bn(rate)+' × '+bn(years)+' ÷ ১০০ = '+bn(ans)+' টাকা।';shortcut='প্রথমে ১ বছরের সুদ বের করে বছরের সংখ্যা দিয়ে গুণ করুন।'}break}
   case 5:{const unit=level+3,qty=level+4;ans=unit*qty;q='একটি পণ্যের দাম '+bn(unit)+' টাকা হলে '+bn(qty)+'টি পণ্যের দাম কত?';ans=unit*qty;formula='প্রয়োজনীয় মূল্য = এককের মূল্য × পরিমাণ';solution='একটির দাম '+bn(unit)+' টাকা; '+bn(unit)+' × '+bn(qty)+' = '+bn(ans)+' টাকা।';shortcut='একটির দাম বের করে সরাসরি প্রয়োজনীয় সংখ্যায় গুণ করুন।';break}
   case 6:{const d1=level+1,d2=level+2;if(level%3===0){const d3=level+4;ans=1/(1/d1+1/d2+1/d3);q='ক, খ ও গ যথাক্রমে '+bn(d1)+', '+bn(d2)+' ও '+bn(d3)+' দিনে কাজটি করতে পারে। একত্রে কত দিনে করবে?';formula='যৌথ সময় = ১ ÷ (১/সময়₁ + ১/সময়₂ + ১/সময়₃)';solution='এক দিনের কাজ = ১/'+bn(d1)+' + ১/'+bn(d2)+' + ১/'+bn(d3)+'; যৌথ সময় = '+bn(ans.toFixed(2))+' দিন।';shortcut='প্রত্যেকের এক দিনের কাজ যোগ করে ১ দিয়ে ভাগ করুন।'}else{ans=d1*d2/(d1+d2);q='ক একটি কাজ '+bn(d1)+' দিনে করতে পারে এবং খ কাজটি '+bn(d2)+' দিনে করতে পারে। তারা একত্রে কাজটি কত দিনে শেষ করবে?';formula='যৌথ সময় = (প্রথম সময় × দ্বিতীয় সময়) ÷ (সময় দুটির যোগফল)';solution='এক দিনের কাজ = ১/'+bn(d1)+' + ১/'+bn(d2)+' = '+bn(d1+d2)+'/'+bn(d1*d2)+'; সময় = '+bn(ans.toFixed(2))+' দিন।';shortcut='দুই কর্মীর দিনের সংখ্যা গুণ করে যোগফল দিয়ে ভাগ করুন।'}break}
   case 7:{if(level%3===0){const boat=12+level,stream=2+level%4,hours=2+Math.floor(level/10);ans=(boat-stream)*hours;q='স্থির পানিতে নৌকার বেগ ঘণ্টায় '+bn(boat)+' কিমি এবং স্রোতের বেগ ঘণ্টায় '+bn(stream)+' কিমি। উজানে '+bn(hours)+' ঘণ্টায় কত দূর যাবে?';formula='উজানের বেগ = নৌকার বেগ − স্রোতের বেগ; দূরত্ব = বেগ × সময়';solution='উজানের বেগ = '+bn(boat)+' − '+bn(stream)+' = '+bn(boat-stream)+' কিমি/ঘণ্টা; দূরত্ব = '+bn(boat-stream)+' × '+bn(hours)+' = '+bn(ans)+' কিমি।';shortcut='উজানে বেগ বিয়োগ, ভাটিতে বেগ যোগ; এরপর সময় দিয়ে গুণ।'}else if(level%3===1){const train=120+level*5,platform=180+level*5,speed=20+level;ans=(train+platform)/speed;q='একটি '+bn(train)+' মিটার দীর্ঘ ট্রেন '+bn(platform)+' মিটার প্ল্যাটফর্ম '+bn(speed)+' মি/সে বেগে অতিক্রম করে। সময় কত?';formula='সময় = (ট্রেনের দৈর্ঘ্য + প্ল্যাটফর্মের দৈর্ঘ্য) ÷ বেগ';solution='সময় = ('+bn(train)+' + '+bn(platform)+') ÷ '+bn(speed)+' = '+bn(ans.toFixed(2))+' সেকেন্ড।';shortcut='প্ল্যাটফর্ম পার হতে ট্রেন ও প্ল্যাটফর্ম—দুই দৈর্ঘ্য যোগ করুন।'}else{const speed=20+level*5,hours=1+Math.floor((level-1)/5);ans=speed*hours;q='ঘণ্টায় '+bn(speed)+' কিমি বেগে '+bn(hours)+' ঘণ্টায় কত দূরত্ব অতিক্রম করবে?';formula='দূরত্ব = বেগ × সময়';solution=bn(speed)+' × '+bn(hours)+' = '+bn(ans)+' কিমি।';shortcut='সময় ঘণ্টায় আছে কি না নিশ্চিত করে বেগের সঙ্গে গুণ করুন।'}break}
   case 8:{const son=10+level*2,factor=2+Math.floor((level-1)/5);ans=son;q='পিতা ও সন্তানের বর্তমান বয়সের যোগফল '+bn(son*(factor+1))+' বছর। পিতার বয়স সন্তানের '+bn(factor)+' গুণ। সন্তানের বয়স কত?';formula='সন্তানের বয়স = মোট বয়স ÷ (গুণিতক + ১)';solution='মোট বয়সের অংশ '+bn(factor+1)+'; সন্তানের বয়স = '+bn(son*(factor+1))+' ÷ '+bn(factor+1)+' = '+bn(ans)+' বছর।';shortcut='মোট বয়সকে অনুপাতের মোট অংশ দিয়ে ভাগ করুন।';break}
   case 9:{const coeff=level+1,constant=level*2+3;ans=constant;q=bn(coeff)+'x + '+bn(constant)+' = '+bn(coeff*constant+constant)+' হলে x কত?';formula='ax+b=c হলে x=(c−b)÷a';solution=bn(coeff)+'x = '+bn(coeff*constant)+'; x = '+bn(coeff*constant)+' ÷ '+bn(coeff)+' = '+bn(ans)+'।';shortcut='ধ্রুবক পদ অন্য পাশে নিয়ে সহগ দিয়ে ভাগ করুন।';break}
   case 10:{const a=12+level,b=18+2*level;const gcd=(u,v)=>v?gcd(v,u%v):u;if(level%3===0){ans=gcd(a,b);q=bn(a)+' ও '+bn(b)+'-এর গ.সা.গু কত?';formula='গ.সা.গু = উভয় সংখ্যাকে নিঃশেষে বিভাজ্য সর্বোচ্চ সংখ্যা';solution='ইউক্লিডীয় পদ্ধতিতে '+bn(a)+' ও '+bn(b)+'-এর গ.সা.গু = '+bn(ans)+'।';shortcut='বড় সংখ্যাকে ছোট সংখ্যা দিয়ে ভাগ করে ভাগশেষের সাহায্যে পুনরাবৃত্তি করুন।'}else if(level%3===1){ans=a*b/gcd(a,b);q=bn(a)+' ও '+bn(b)+'-এর ল.সা.গু কত?';formula='ল.সা.গু = সংখ্যা দুটির গুণফল ÷ গ.সা.গু';solution=bn(a)+' × '+bn(b)+' ÷ '+bn(gcd(a,b))+' = '+bn(ans)+'।';shortcut='প্রথমে গ.সা.গু বের করে সংখ্যা দুটির গুণফলকে তা দিয়ে ভাগ করুন।'}else{let n=20+level*3;const prime=v=>{if(v<2)return false;for(let z=2;z*z<=v;z++)if(v%z===0)return false;return true};while(!prime(n))n++;ans=n;q=bn(n-1)+'-এর পরের ক্ষুদ্রতম মৌলিক সংখ্যা কত?';formula='মৌলিক সংখ্যা ১-এর বড় এবং ১ ও নিজে ছাড়া অন্য কোনো ধনাত্মক গুণনীয়ক নেই';solution=bn(n-1)+'-এর পরের সংখ্যা থেকে পরীক্ষা করলে '+bn(ans)+' মৌলিক; এর ১ ও নিজে ছাড়া ভাজক নেই।';shortcut='√n পর্যন্ত সম্ভাব্য মৌলিক ভাজক দিয়ে পরীক্ষা করলেই যথেষ্ট।'}break}
   case 11:{if(level%3===0){const side=4+level;ans=side*side*side;q='একটি ঘনকের এক বাহু '+bn(side)+' সেমি। আয়তন কত?';formula='ঘনকের আয়তন = বাহু³';solution=bn(side)+' × '+bn(side)+' × '+bn(side)+' = '+bn(ans)+' ঘন সেমি।';shortcut='বাহুর মান তিনবার গুণ করুন।'}else if(level%3===1){const base=8+level*2,height=5+level;ans=base*height/2;q='একটি ত্রিভুজের ভূমি '+bn(base)+' সেমি ও উচ্চতা '+bn(height)+' সেমি। ক্ষেত্রফল কত?';formula='ত্রিভুজের ক্ষেত্রফল = ১/২ × ভূমি × উচ্চতা';solution='১/২ × '+bn(base)+' × '+bn(height)+' = '+bn(ans)+' বর্গ সেমি।';shortcut='ভূমি ও উচ্চতা গুণ করে অর্ধেক নিন।'}else{const length=5+level*2,width=3+level;ans=length*width;q='একটি আয়তক্ষেত্রের দৈর্ঘ্য '+bn(length)+' মিটার ও প্রস্থ '+bn(width)+' মিটার। ক্ষেত্রফল কত?';formula='আয়তক্ষেত্রের ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ';solution=bn(length)+' × '+bn(width)+' = '+bn(ans)+' বর্গমিটার।';shortcut='দৈর্ঘ্য ও প্রস্থ গুণ করুন; একক হবে বর্গ একক।'}break}
   case 12:{const first=level*2+2,diff=level+1,term=level+4;ans=first+(term-1)*diff;q='একটি সমান্তর ধারার প্রথম পদ '+bn(first)+', সাধারণ অন্তর '+bn(diff)+'।';q='একটি সমান্তর ধারার প্রথম পদ '+bn(first)+', সাধারণ অন্তর '+bn(diff)+'। '+bn(term)+'তম পদ কত?';formula='n-তম পদ = প্রথম পদ + (n−১) × সাধারণ অন্তর';solution=bn(first)+' + ('+bn(term)+'−১) × '+bn(diff)+' = '+bn(ans)+'।';shortcut='শেষ পদ বের করতে প্রথম পদের সঙ্গে অন্তরের (n−১) গুণ যোগ করুন।';break}
   case 13:{const v1=20+level*2,v2=30+level*3,total=v1+v2;ans=(v1*2+v2*3)/5;q=bn(v1)+' লিটার '+bn(v2)+'% ঘনত্বের দ্রবণ এবং '+bn(v2)+' লিটার '+bn(v1)+'% ঘনত্বের দ্রবণ মেশালে গড় ঘনত্ব কত?';ans=(v1*v2+v2*v1)/(v1+v2);formula='মিশ্রণের গড় ঘনত্ব = (পরিমাণ₁×ঘনত্ব₁ + পরিমাণ₂×ঘনত্ব₂) ÷ মোট পরিমাণ';solution='('+bn(v1)+'×'+bn(v2)+' + '+bn(v2)+'×'+bn(v1)+') ÷ '+bn(total)+' = '+bn(ans)+'%।';shortcut='প্রতিটি পরিমাণকে তার ঘনত্ব দিয়ে গুণ করে মোট পরিমাণ দিয়ে ভাগ করুন।';break}
   case 15:{const marked=500+level*100,discount=5+(level%6)*5;ans=marked*(100-discount)/100;q='একটি পণ্যের চিহ্নিত মূল্য '+bn(marked)+' টাকা। '+bn(discount)+'% ছাড় দিলে বিক্রয়মূল্য কত?';formula='ছাড়ের পর মূল্য = চিহ্নিত মূল্য × (১০০ − ছাড়ের হার) ÷ ১০০';solution=bn(marked)+' × '+bn(100-discount)+' ÷ ১০০ = '+bn(ans)+' টাকা।';shortcut='চিহ্নিত মূল্য থেকে ছাড়ের শতাংশ বাদ দিয়ে অবশিষ্ট শতাংশের মূল্য বের করুন।';break}
   default:{const radius=7+level*2;ans=2*22/7*radius;q='বৃত্তের ব্যাসার্ধ '+bn(radius)+' সেমি হলে পরিধি কত? (π=২২/৭)';formula='বৃত্তের পরিধি = ২πr';solution='২ × ২২/৭ × '+bn(radius)+' = '+bn(ans)+' সেমি।';shortcut='ব্যাসার্ধকে ৪৪/৭ দিয়ে গুণ করুন।';break}
  }
  const val=Number(ans.toFixed(2));ans=val;
  const candidates=[val,val+Math.max(1,Math.abs(val)*.1),val-Math.max(1,Math.abs(val)*.1),val+Math.max(2,Math.abs(val)*.2)];
  const opts=[...new Set(candidates.map(v=>Number(v.toFixed(2))))];while(opts.length<4)opts.push(Number((val+opts.length*3.17+1).toFixed(2)));
  const ordered=[val,...opts.filter(v=>v!==val).slice(0,3)].sort((a,b)=>((level*13+k*7+Math.round(a))%11)-((level*13+k*7+Math.round(b))%11));
  const a=ordered.indexOf(val);
  return {id:'math_L'+level+'_Q'+(k+1),c:'গণিত · '+topic,q,o:ordered.map(v=>bn(v)),a,level,d:level<=10?'সহজ':level<=20?'মাঝারি':'কঠিন',topic,e:solution,formula,shortcut,expected:val};
 };

 const bank=Array.from({length:30},(_,i)=>Array.from({length:10},(_,k)=>make(i+1,k))).flat();
 // Final consolidation: targeted replacements for invalid premises and arithmetic skill gaps.
 const replaceQuestion=(id,topic,q,options,answer,expected,formula,explanation,shortcut)=>{
  const item=bank.find(x=>x.id===id);if(!item)throw new Error('Missing math question '+id);
  item.c='গণিত · '+topic;item.topic=topic;item.q=q;item.o=options;item.a=answer;item.expected=expected;
  item.d='কঠিন';item.formula=formula;item.e=explanation;item.shortcut=shortcut;
 };
 replaceQuestion('math_L27_Q1','যোগ','একটি প্রতিষ্ঠানের চারটি শাখার ব্যয় যথাক্রমে ৪৮,৭৬৫ টাকা, ৩৯,৮৭৬ টাকা, ২৭,৯৫৮ টাকা ও ১৮,৪৯৭ টাকা। মোট ব্যয় কত?',
 ['১৩৪,০৯৬','১৩৫,০৯৬','১৩৫,৯০৬','১২৫,০৯৬'],1,135096,
 'মোট = চারটি ব্যয়ের যোগফল','৪৮,৭৬৫ + ৩৯,৮৭৬ + ২৭,৯৫৮ + ১৮,৪৯৭ = ১,৩৫,০৯৬ টাকা।',
 'এককের ঘর থেকে ধারসহ কলাম ধরে যোগ করুন; শেষে মোটটি পুনরায় যোগ করে মিলিয়ে নিন।');
 replaceQuestion('math_L28_Q2','বিয়োগ','একটি প্রকল্পের জন্য বরাদ্দ ৩,৫০,০০০ টাকা। প্রথম ধাপে ১,২৮,৭৫০ টাকা এবং দ্বিতীয় ধাপে ৮৬,৯৭৫ টাকা ব্যয় হলে অবশিষ্ট কত?',
 ['১,৩৪,২৭৫','১,৩৫,২৭৫','১,৩৩,০২৫','১,৪৪,২৭৫'],0,134275,
 'অবশিষ্ট = মোট বরাদ্দ − প্রথম ব্যয় − দ্বিতীয় ব্যয়','৩,৫০,০০০ − ১,২৮,৭৫০ = ২,২১,২৫০; ২,২১,২৫০ − ৮৬,৯৭৫ = ১,৩৪,২৭৫ টাকা।',
 'পরপর বিয়োগ করুন; দ্বিতীয় বিয়োগে ধার নেওয়ার ঘরগুলো আলাদা করে যাচাই করুন।');
 replaceQuestion('math_L29_Q1','গুণ','একটি কারখানায় প্রতিদিন ১,২৫৬টি পণ্য তৈরি হয়। ২৪৮ দিনে মোট কতটি পণ্য তৈরি হবে?',
 ['৩১০,৪৮৮','৩১১,৪৮৮','৩১১,৫৮৮','৩২১,৪৮৮'],1,311488,
 'মোট উৎপাদন = দৈনিক উৎপাদন × দিনের সংখ্যা','১,২৫৬ × ২৪৮ = ১,২৫৬ × (২৫০ − ২) = ৩১৪,০০০ − ২,৫১২ = ৩১১,৪৮৮টি।',
 '২৪৮-কে ২৫০ − ২ ধরে গুণ করলে বড় গুণ সহজ হয়।');
 replaceQuestion('math_L30_Q1','ভাগ','৯,৭২,০০০ টাকা ২৪টি শাখায় সমানভাবে ভাগ করা হলো। প্রতিটি শাখার বরাদ্দ আবার ১৫টি প্রকল্পে সমান ভাগ করলে প্রতি প্রকল্প কত টাকা পাবে?',
 ['২,৬০০','২,৭০০','২,৮০০','২৭,০০০'],1,2700,
 'প্রতি প্রকল্পের বরাদ্দ = মোট অর্থ ÷ (শাখা × প্রকল্প)','৯,৭২,০০০ ÷ ২৪ = ৪০,৫০০; ৪০,৫০০ ÷ ১৫ = ২,৭০০ টাকা।',
 'ধাপে ধাপে ভাগ করুন অথবা ২৪ × ১৫ = ৩৬০ দিয়ে মোট অর্থ ভাগ করুন।');
 replaceQuestion('math_L21_Q4','বয়স','একজন পিতার বর্তমান বয়স তাঁর ছেলের বয়সের ৩ গুণ। ১২ বছর পর পিতার বয়স ছেলের বয়সের ২ গুণ হবে। ছেলের বর্তমান বয়স কত?',
 ['১০','১২','১৪','১৬'],1,12,
 'বর্তমান পিতার বয়স = ৩x; ১২ বছর পর ৩x+১২ = ২(x+১২)','৩x + ১২ = ২x + ২৪; x = ১২ বছর।',
 'বর্তমান বয়সকে x ধরে উভয়ের ভবিষ্যৎ বয়সের সমীকরণ গঠন করুন।');
 replaceQuestion('math_L22_Q3','বয়স','একজন পিতার বয়স তাঁর মেয়ের বয়সের চেয়ে ২৮ বছর বেশি। ৪ বছর পর পিতার বয়স মেয়ের বয়সের দ্বিগুণ হবে। মেয়ের বর্তমান বয়স কত?',
 ['২০','২২','২৪','২৬'],2,24,
 'পিতার বয়স = মেয়ের বয়স + ২৮; ৪ বছর পর পিতার বয়স = মেয়ের দ্বিগুণ','ধরি মেয়ের বয়স x; (x+২৮)+৪ = ২(x+৪); তাই x = ২৪ বছর।',
 'বর্তমান বয়সের পার্থক্য অপরিবর্তিত থাকে—এই তথ্য দিয়ে সমীকরণ করুন।');
 replaceQuestion('math_L23_Q2','বয়স','একজন পিতার বর্তমান বয়স তাঁর ছেলের বয়সের ৪ গুণ। ৮ বছর পর পিতার বয়স ছেলের বয়সের ৩ গুণ হবে। ছেলের বর্তমান বয়স কত?',
 ['১৪','১৬','১৮','২০'],1,16,
 'বর্তমান পিতার বয়স = ৪x; ৮ বছর পর ৪x+৮ = ৩(x+৮)','৪x + ৮ = ৩x + ২৪; x = ১৬ বছর।',
 'ভবিষ্যৎ বয়সের অনুপাত থেকে বর্তমান বয়সের সমীকরণ তৈরি করুন।');
 replaceQuestion('math_L24_Q1','বয়স','একজন মায়ের বর্তমান বয়স তাঁর মেয়ের বয়সের ৩ গুণ। ১০ বছর পর মা ও মেয়ের বয়সের যোগফল ৭৬ বছর হবে। মেয়ের বর্তমান বয়স কত?',
 ['১২','১৩','১৪','১৫'],2,14,
 'বর্তমান মোট বয়স = ৩x+x; ১০ বছর পর মোট = ৪x+২০','৪x + ২০ = ৭৬; ৪x = ৫৬; x = ১৪ বছর।',
 'দুইজনের বয়সে ১০ বছর করে যোগ হবে, তাই মোট বয়স ২০ বছর বাড়বে।');
 replaceQuestion('math_L24_Q6','মিশ্রণ','৪০ লিটার ৩০% ঘনত্বের দ্রবণের সঙ্গে ৬০ লিটার ৫০% ঘনত্বের দ্রবণ মেশানো হলো। মিশ্রণের ঘনত্ব কত?',
 ['৪০%','৪২%','৪৫%','৪৮%'],1,42,
 'মিশ্রণের ঘনত্ব = (পরিমাণ₁×ঘনত্ব₁ + পরিমাণ₂×ঘনত্ব₂) ÷ মোট পরিমাণ',
 '(৪০×৩০ + ৬০×৫০) ÷ ১০০ = ৪২%।',
 'প্রতিটি দ্রবণের বিশুদ্ধ উপাদানের পরিমাণ যোগ করে মোট আয়তন দিয়ে ভাগ করুন।');
 replaceQuestion('math_L25_Q5','মিশ্রণ','৮০ লিটার ২৫% ঘনত্বের দ্রবণের সঙ্গে ১২০ লিটার ৪০% ঘনত্বের দ্রবণ মেশানো হলো। মিশ্রণের ঘনত্ব কত?',
 ['৩২%','৩৪%','৩৬%','৩৮%'],1,34,
 'মিশ্রণের ঘনত্ব = (পরিমাণ₁×ঘনত্ব₁ + পরিমাণ₂×ঘনত্ব₂) ÷ মোট পরিমাণ',
 '(৮০×২৫ + ১২০×৪০) ÷ ২০০ = ৬,৮০০ ÷ ২০০ = ৩৪%।',
 'ওজনযুক্ত গড় ব্যবহার করুন; দুই ঘনত্বের সাধারণ গড় নেবেন না।');
 replaceQuestion('math_L26_Q4','মিশ্রণ','৬০ লিটার ২০% ঘনত্বের দ্রবণের সঙ্গে ৯০ লিটার ৫০% ঘনত্বের দ্রবণ মেশানো হলো। মিশ্রণের ঘনত্ব কত?',
 ['৩৪%','৩৬%','৩৮%','৪০%'],2,38,
 'মিশ্রণের ঘনত্ব = (পরিমাণ₁×ঘনত্ব₁ + পরিমাণ₂×ঘনত্ব₂) ÷ মোট পরিমাণ',
 '(৬০×২০ + ৯০×৫০) ÷ ১৫০ = ৩৮%।',
 'প্রথম ও দ্বিতীয় দ্রবণের পরিমাণ আলাদা ওজন হিসেবে ব্যবহার করুন।');
 replaceQuestion('math_L27_Q3','মিশ্রণ','৭৫ লিটার ৩২% ঘনত্বের দ্রবণের সঙ্গে ১২৫ লিটার ৪৮% ঘনত্বের দ্রবণ মেশানো হলো। মিশ্রণের ঘনত্ব কত?',
 ['৪০%','৪২%','৪৪%','৪৬%'],1,42,
 'মিশ্রণের ঘনত্ব = (পরিমাণ₁×ঘনত্ব₁ + পরিমাণ₂×ঘনত্ব₂) ÷ মোট পরিমাণ',
 '(৭৫×৩২ + ১২৫×৪৮) ÷ ২০০ = ৪২%।',
 'মোট দ্রবণের পরিমাণ ২০০ লিটার; উপাদানের পরিমাণের যোগফলকে ২০০ দিয়ে ভাগ করুন।');

 window.ML_MATH_LEVELS=Array.from({length:30},(_,i)=>({level:i+1,title:'লেভেল '+bn(i+1),band:bands(i+1),questions:bank.filter(q=>q.level===i+1)}));
 window.ML_MATH_BANK=bank;
 function openMath(){const panel=document.getElementById('featurePanel'),title=document.getElementById('featureTitle'),body=document.getElementById('featureBody');if(!panel||!body)return;title.textContent='গণিত · ৩০ স্তরের প্রস্তুতি';
 let level=1,pos=0,score=0,done=false,levelSaved=false;
 const getNextLevel=()=>{const p=readProgress();for(let n=1;n<=30;n++)if(!p[n]?.completedAt)return n;return 31};
 const drawHome=()=>{const p=readProgress(),completed=Object.keys(p).filter(k=>p[k]?.completedAt&&Number(k)>=1&&Number(k)<=30).length,nextLevel=getNextLevel(),shownLevel=nextLevel<=30?nextLevel:30,pct=Math.round(completed/30*100);level=shownLevel;body.innerHTML='<div class="notice"><b>গণিত প্রস্তুতি · ৩০টি ধারাবাহিক স্তর</b><br>মোট ৩০০টি প্রশ্ন। প্রতি স্তরে ১০টি প্রশ্ন। একটি স্তর শেষ করলেই পরের স্তর স্বয়ংক্রিয়ভাবে চালু হবে। সঠিক উত্তরে +১, ভুল উত্তরে −০.২৫।</div><div class="card"><div class="row"><b>আপনার অগ্রগতি</b><b>'+bn(completed)+'/৩০</b></div><div class="progress"><div class="bar" style="width:'+pct+'%"></div></div><h3>'+(nextLevel<=30?'এখনকার স্তর: '+bn(nextLevel):'সব ৩০টি স্তর সম্পন্ন!')+'</h3><p class="muted">'+(nextLevel<=30?'পরের স্তরগুলো তালিকা থেকে বেছে নিতে হবে না—একটির পর একটি খুলবে।':'আপনি সম্পূর্ণ গণিত প্রস্তুতি শেষ করেছেন। চাইলে শেষ স্তরটি আবার অনুশীলন করতে পারেন।')+'</p><button id="mathStart" class="start-3d">'+(nextLevel<=30?'▶ প্রস্তুতি চালিয়ে যান':'শেষ স্তর আবার অনুশীলন')+'</button></div><button id="mathReturn" class="secondary">চাকরির প্রস্তুতি কেন্দ্রে ফিরুন</button>';document.getElementById('mathStart').textContent=nextLevel<=30?'▶ প্রস্তুতি চালিয়ে যান':'শেষ স্তর আবার অনুশীলন';document.getElementById('mathStart').onclick=()=>nextLevel<=30?launchLevel(nextLevel):start(30);document.getElementById('mathReturn').onclick=()=>typeof window.openJobPrep==='function'?window.openJobPrep():window.show('home')};
 const start=l=>{level=l;pos=0;score=0;done=false;levelSaved=false;drawQuestion()};
 const launchLevel=l=>{if(l>30)return;const showInterstitial=window.ML_SHOW_INTERSTITIAL_AD;if(l>1&&(l-1)%2===0&&typeof showInterstitial==='function'){showInterstitial(()=>start(l));}else start(l)};
 const drawQuestion=()=>{const q=window.ML_MATH_LEVELS[level-1].questions[pos];if(!q){if(!levelSaved){saveProgress(level,score);levelSaved=true;}const next=level+1;body.innerHTML='<div class="card"><h3>লেভেল '+bn(level)+' সম্পন্ন! 🎉</h3><p>এই লেভেলে অর্জিত স্কোর: '+bn(score.toFixed(2))+' / ১০</p><div class="notice">'+(next<=30?'চমৎকার! পরবর্তী লেভেল '+bn(next)+' এখন প্রস্তুত। লেভেল বাটন খুঁজতে হবে না—নিচের বোতাম চাপলেই পরের ধাপ শুরু হবে।':'অভিনন্দন! আপনি গণিতের সব ৩০টি লেভেল সম্পন্ন করেছেন।')+'</div><button id="mathNextLevel" class="start-3d">'+(next<=30?'পরবর্তী লেভেল শুরু করুন':'সব লেভেল সম্পন্ন · আবার শুরু')+'</button><button id="mathLevels" class="secondary">চাকরির প্রস্তুতি কেন্দ্রে ফিরুন</button></div>';document.getElementById('mathNextLevel').textContent=next<=30?'পরবর্তী লেভেল শুরু করুন':'সব লেভেল সম্পন্ন · আবার শুরু';document.getElementById('mathNextLevel').onclick=()=>next<=30?launchLevel(next):drawHome();document.getElementById('mathLevels').onclick=()=>typeof window.openJobPrep==='function'?window.openJobPrep():window.show('home');return}
 body.innerHTML='<div class="row"><b>লেভেল '+bn(level)+' · '+q.topic+'</b><small>প্রশ্ন '+bn(pos+1)+'/১০</small></div><div class="question">'+q.q+'</div><div class="answers">'+q.o.map((v,i)=>'<button class="answer" data-i="'+i+'">'+['ক','খ','গ','ঘ'][i]+'. '+v+'</button>').join('')+'</div><div id="mathFeedback" class="notice hidden"></div><div class="row"><b>স্কোর: '+bn(score.toFixed(2))+'</b><button id="mathContinue" class="hidden">পরের প্রশ্ন</button></div>';
 body.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{if(done)return;done=true;const ok=+b.dataset.i===q.a;score=Number((score+(ok?1:-.25)).toFixed(2));body.querySelectorAll('[data-i]').forEach((x,i)=>{x.disabled=true;if(i===q.a)x.style.border='2px solid #67e0bd'});const f=document.getElementById('mathFeedback');f.classList.remove('hidden');f.innerHTML='<b>'+(ok?'সঠিক উত্তর! +১':'ভুল উত্তর। −০.২৫ · সঠিক উত্তর: '+q.o[q.a])+'</b><br><b>সূত্র:</b> '+q.formula+'<br><b>সমাধান:</b> '+q.e+'<br><b>দ্রুত কৌশল:</b> '+q.shortcut;document.getElementById('mathContinue').classList.remove('hidden')});document.getElementById('mathContinue').onclick=()=>{pos++;done=false;drawQuestion()};};
 drawHome();window.show('featurePanel');}
 window.openMathLevelHome=openMath;
 // গণিতের প্রবেশপথ চাকরির প্রস্তুতি ড্যাশবোর্ডের বিষয় তালিকায় রয়েছে।
})();