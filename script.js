'use strict';

const tracks = [
  {id:1,title:'ᴇᴀrly ʙird',file:'early_bird',tags:'ранняя пташка рано вставать сон',category:'wellbeing'},
  {id:2,title:'vᴀʍᴩirᴇ',file:'vampire',tags:'вампир клыки аура внешность',category:'appearance'},
  {id:3,title:'dᴇsirᴇd ᴀᴩᴩᴇᴀrᴀnᴄᴇ',file:'desired_appearance',tags:'желаемая внешность красота лицо',category:'appearance'},
  {id:4,title:'nᴇw ᴩhᴏnᴇ',file:'new_phone',tags:'новый телефон айфон гаджет',category:'lifestyle'},
  {id:5,title:'wᴇighᴛ lᴏss',file:'weight_loss',tags:'похудение стройность тело вес',category:'wellbeing'},
  {id:6,title:'ᴛiʍᴇ ᴄᴏɴᴛrᴏl',file:'time_control',tags:'время контроль тайм менеджмент',category:'success'},
  {id:7,title:'ʙᴏᴏsᴛᴇʀ',file:'booster',tags:'бустер усиление мотивация',category:'success'},
  {id:8,title:'dᴏll ʙᴇᴀuᴛʏ',file:'doll_beauty',tags:'кукольная красота лицо',category:'appearance'},
  {id:9,title:'rᴇsᴩᴇᴄᴛ frᴏʍ ᴛᴇᴀᴄhᴇrs',file:'respect_from_teachers',tags:'уважение учителей школа учеба',category:'success'},
  {id:10,title:'lᴏvᴇ',file:'love',tags:'любовь отношения',category:'relationships'},
  {id:11,title:'ᏌᏚᎪ',file:'usa',tags:'сша америка переезд',category:'lifestyle'},
  {id:12,title:'ⲋⲏⲓϝⲧⲓⲛⳋ',file:'shifting',tags:'шифтинг перемещение',category:'shifting'},
  {id:13,title:'ⲓⲇⲉⲁⳑ ⲃⲟⲇⲩ',file:'ideal_body',tags:'идеальное тело фигура',category:'appearance'},
  {id:14,title:'ⲓⲇⲉⲁⳑ ⲋⲕⲓⲛ',file:'ideal_skin',tags:'идеальная кожа лицо',category:'appearance'},
  {id:15,title:'ʍᴏgg',file:'mogg',tags:'моггинг внешность челюсть',category:'appearance'},
  {id:16,title:'suᴄᴄᴇss',file:'success',tags:'успех победа',category:'success'},
  {id:17,title:'luᴄᴋ',file:'luck',tags:'удача везение',category:'success'},
  {id:18,title:'ᴩᴏwᴇrful sᴇlf ᴄᴏɴᴄᴇᴩᴛ',file:'powerful_self_concept',tags:'селф концепт уверенность самооценка',category:'wellbeing'},
  {id:19,title:'ʍᴏnᴇy',file:'money',tags:'деньги богатство финансы',category:'lifestyle'},
  {id:20,title:'friᴇndshiᴩ',file:'friendship',tags:'дружба друзья общение',category:'relationships'},
  {id:21,title:'ᴩᴇᴛ',file:'pet',tags:'питомец животное кот собака',category:'lifestyle'},
  {id:22,title:'ᴄᴩ',file:'cp',tags:'к4 одержимость отношения',category:'relationships'},
  {id:23,title:'idᴇᴀl ʍᴇ',file:'ideal_me',tags:'идеальный я всё включено',category:'wellbeing'},
  {id:24,title:'ʍᴏnᴇy fᴏr hᴏʙʙy',file:'money_for_hobby',tags:'деньги хобби заработок',category:'lifestyle'},
  {id:25,title:'ᴇnglish Ꮯ2',file:'english_c2',tags:'английский язык c2',category:'success'}
];
const affirmations=[
  {id:'c1',category:'confidence',text:'Я могу двигаться вперёд в своём темпе.'},
  {id:'c2',category:'confidence',text:'Мой голос и мои границы имеют значение.'},
  {id:'c3',category:'confidence',text:'Я замечаю свои усилия и признаю свой рост.'},
  {id:'s1',category:'self-care',text:'Я заслуживаю заботы, которую дарю другим.'},
  {id:'s2',category:'self-care',text:'Отдых — важная часть моего пути.'},
  {id:'s3',category:'self-care',text:'Я могу принимать себя и продолжать меняться.'},
  {id:'g1',category:'success',text:'Я разбиваю большие цели на посильные шаги.'},
  {id:'g2',category:'success',text:'Каждый маленький шаг помогает мне учиться.'},
  {id:'g3',category:'success',text:'Я могу попросить о помощи, когда она нужна.'},
  {id:'m1',category:'calm',text:'Я возвращаю внимание к тому, что могу сделать сейчас.'},
  {id:'m2',category:'calm',text:'Мне можно сделать паузу и выбрать следующий шаг позже.'},
  {id:'m3',category:'calm',text:'Я замечаю момент, в котором нахожусь.'}
];
const KEY='mr1ucid.workspace.v1';
const today=()=>new Date().toISOString().slice(0,10);
const uid=()=>crypto.randomUUID?crypto.randomUUID():String(Date.now())+'-'+Math.random().toString(36).slice(2);
const blank=()=>({version:1,favorites:[],playlists:[],activePlaylistId:'',history:[],queue:[],currentTrackId:null,currentTime:0,volume:1,shuffle:false,repeat:false,playCount:0,scripts:[],intention369:'',progress369:{morning:0,day:0,night:0},method55:{phrase:'',day:today(),count:0,days:[]},dailyIntentions:{},dreams:[],customAffirmations:[],favoriteAffirmations:[],currentAffirmationId:'',boardItems:[],theme:'midnight',quoteDay:'',quoteText:''});
function parseJSON(value,fallback){try{const x=JSON.parse(value);return x&&typeof x==='object'?x:fallback;}catch{return fallback;}}
function cleanString(value,max){return typeof value==='string'?value.slice(0,max):'';}
function cleanIds(value){return Array.isArray(value)?Array.from(new Set(value.filter(n=>Number.isInteger(n)&&n>0&&n<=25))):[];}
function normalize(raw){
  const s=blank();if(!raw||typeof raw!=='object'||Array.isArray(raw))return s;
  s.favorites=cleanIds(raw.favorites);s.history=cleanIds(raw.history).slice(0,25);s.queue=cleanIds(raw.queue).slice(0,100);
  s.playlists=Array.isArray(raw.playlists)?raw.playlists.slice(0,40).map(p=>({id:cleanString(p&&p.id,80)||uid(),name:cleanString(p&&p.name,40),trackIds:cleanIds(p&&p.trackIds)})).filter(p=>p.name):[];
  s.activePlaylistId=cleanString(raw.activePlaylistId,80);
  s.currentTrackId=Number.isInteger(raw.currentTrackId)&&raw.currentTrackId>0&&raw.currentTrackId<=25?raw.currentTrackId:null;
  s.currentTime=Number.isFinite(raw.currentTime)&&raw.currentTime>=0?Math.min(raw.currentTime,86400):0;
  s.volume=Number.isFinite(raw.volume)?Math.max(0,Math.min(1,raw.volume)):1;s.shuffle=Boolean(raw.shuffle);s.repeat=Boolean(raw.repeat);
  s.playCount=Number.isInteger(raw.playCount)&&raw.playCount>0?Math.min(raw.playCount,1000000):0;
  s.scripts=Array.isArray(raw.scripts)?raw.scripts.slice(0,300).map(x=>({id:cleanString(x&&x.id,80)||uid(),name:cleanString(x&&x.name,80),desc:cleanString(x&&x.desc,10000),updatedAt:cleanString(x&&x.updatedAt,30)})).filter(x=>x.name&&x.desc):[];
  s.intention369=cleanString(raw.intention369,180);const p=raw.progress369&&typeof raw.progress369==='object'?raw.progress369:{};
  s.progress369={morning:Math.max(0,Math.min(3,Number(p.morning)||0)),day:Math.max(0,Math.min(6,Number(p.day)||0)),night:Math.max(0,Math.min(9,Number(p.night)||0))};
  const m=raw.method55&&typeof raw.method55==='object'?raw.method55:{};
  s.method55={phrase:cleanString(m.phrase,180),day:/^\\d{4}-\\d{2}-\\d{2}$/.test(m.day||'')?m.day:today(),count:Math.max(0,Math.min(55,Number(m.count)||0)),days:Array.isArray(m.days)?Array.from(new Set(m.days.filter(d=>/^\\d{4}-\\d{2}-\\d{2}$/.test(d)))).slice(-5):[]};
  if(raw.dailyIntentions&&typeof raw.dailyIntentions==='object')s.dailyIntentions=Object.fromEntries(Object.entries(raw.dailyIntentions).slice(-120).map(([d,v])=>[cleanString(d,10),cleanString(v,1000)]));
  s.dreams=Array.isArray(raw.dreams)?raw.dreams.slice(0,500).map(d=>({id:cleanString(d&&d.id,80)||uid(),title:cleanString(d&&d.title,100),body:cleanString(d&&d.body,5000),date:/^\\d{4}-\\d{2}-\\d{2}$/.test((d&&d.date)||'')?d.date:today(),mood:cleanString(d&&d.mood,30),tags:cleanString(d&&d.tags,160),favorite:Boolean(d&&d.favorite)})).filter(d=>d.title&&d.body):[];
  s.customAffirmations=Array.isArray(raw.customAffirmations)?raw.customAffirmations.slice(0,300).map(a=>({id:cleanString(a&&a.id,80)||uid(),text:cleanString(a&&a.text,300)})).filter(a=>a.text):[];
  s.favoriteAffirmations=Array.isArray(raw.favoriteAffirmations)?raw.favoriteAffirmations.filter(x=>typeof x==='string').slice(0,500):[];
  s.currentAffirmationId=cleanString(raw.currentAffirmationId,80);
  s.boardItems=Array.isArray(raw.boardItems)?raw.boardItems.slice(0,60).map(i=>({id:cleanString(i&&i.id,80)||uid(),caption:cleanString(i&&i.caption,120),imageData:typeof(i&&i.imageData)==='string'&&i.imageData.startsWith('data:image/')?i.imageData.slice(0,1500000):''})).filter(i=>i.caption||i.imageData):[];
  s.theme=['midnight','silver','rose'].includes(raw.theme)?raw.theme:'midnight';s.quoteDay=cleanString(raw.quoteDay,10);s.quoteText=cleanString(raw.quoteText,300);return s;
}
function initialState(){
  const saved=parseJSON(localStorage.getItem(KEY),null);if(saved)return normalize(saved);
  const s=blank(),oldScripts=parseJSON(localStorage.getItem('mr_scripts'),'[]'),old369=parseJSON(localStorage.getItem('mr_369'),{});
  if(Array.isArray(oldScripts))s.scripts=oldScripts.map(x=>({id:uid(),name:String(x&&x.name||'').slice(0,80),desc:String(x&&x.desc||'').slice(0,10000),updatedAt:new Date().toISOString()})).filter(x=>x.name&&x.desc);
  if(old369&&typeof old369==='object')s.progress369={morning:Math.min(3,Number(old369.morning)||0),day:Math.min(6,Number(old369.day)||0),night:Math.min(9,Number(old369.night)||0)};
  return s;
}

document.addEventListener('DOMContentLoaded',()=>{
  let state=initialState(),currentIndex=tracks.findIndex(t=>t.id===state.currentTrackId),timer=null,debounce=null,toastTimer=null;
  const $=id=>document.getElementById(id),audio=$('mainAudio'),root=document.documentElement,player=$('globalPlayer');
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));if($('storageStatus'))$('storageStatus').textContent='Локальная копия сохранена.';return true;}catch(error){if($('storageStatus'))$('storageStatus').textContent='Не удалось сохранить: освободи место или скачай резервную копию.';console.error('Storage write failed',error);return false;}}
  function notify(message){const el=$('toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2400);}
  function button(label,cls,fn,aria){const b=document.createElement('button');b.type='button';b.className=cls;b.textContent=label;if(aria)b.setAttribute('aria-label',aria);b.addEventListener('click',fn);return b;}
  function getTrack(id){return tracks.find(t=>t.id===id)||null;}
  function goToPage(hash){const id=(hash||'#home').slice(1),page=$(id)&&$('app-container').contains($(id))?id:'home';document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===page));document.querySelectorAll('[data-page]').forEach(x=>{const on=x.dataset.page===page;x.classList.toggle('active',on);if(on)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current');});window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  window.addEventListener('hashchange',()=>goToPage(location.hash));goToPage();

  function filteredTracks(){
    const q=$('searchInput').value.trim().toLocaleLowerCase(),mode=$('trackFilter').value,category=$('trackCategory').value,playlistId=$('playlistSelect').value;
    let out=[...tracks];
    if(mode==='favorites')out=out.filter(t=>state.favorites.includes(t.id));
    if(mode==='recent')out=state.history.map(getTrack).filter(Boolean);
    if(category!=='all')out=out.filter(t=>t.category===category);
    if(playlistId){const list=state.playlists.find(p=>p.id===playlistId);out=out.filter(t=>list&&list.trackIds.includes(t.id));}
    if(q)out=out.filter(t=>(t.title+' '+t.tags).toLocaleLowerCase().includes(q));
    return out;
  }
  function renderTracks(){
    const grid=$('libraryGrid');grid.replaceChildren();const items=filteredTracks();
    $('libraryStatus').textContent=items.length?items.length+' трек'+(items.length===1?'':'ов'):'Ничего не найдено. Измени поиск или фильтры.';
    items.forEach(track=>{
      const card=document.createElement('article');card.className='track-card';
      const cover=document.createElement('div');cover.className='track-cover';cover.setAttribute('aria-hidden','true');
      const icon=document.createElement('span');icon.textContent='♫';cover.append(icon);
      const image=document.createElement('img');image.src='images/'+String(track.id).padStart(2,'0')+'.jpg';image.alt='';image.loading='lazy';image.addEventListener('error',()=>image.remove(),{once:true});cover.append(image);
      const title=document.createElement('h3');title.className='track-title';title.textContent=track.title;
      const tags=document.createElement('p');tags.className='track-tags';tags.textContent=track.tags;
      const actions=document.createElement('div');actions.className='track-actions';
      actions.append(button(state.currentTrackId===track.id&&!audio.paused?'Пауза':'Слушать','btn-primary play-track',()=>startTrack(track.id), 'Воспроизвести '+track.title));
      const favorite=state.favorites.includes(track.id),fav=button(favorite?'★':'☆','btn-secondary',()=>toggleFavorite(track.id),favorite?'Убрать из избранного':'Добавить в избранное');if(favorite)fav.classList.add('is-favorite');actions.append(fav);
      actions.append(button('В очередь','btn-secondary',()=>{state.queue.push(track.id);save();renderQueue();notify('Добавлено в очередь');}));
      const playlist=state.playlists.find(p=>p.id===$('playlistSelect').value);
      if(playlist)actions.append(button('В плейлист','btn-secondary',()=>{if(!playlist.trackIds.includes(track.id))playlist.trackIds.push(track.id);save();renderTracks();notify('Добавлено в плейлист');}));
      card.append(cover,title,tags,actions);grid.append(card);
    });
  }
  function renderPlaylistOptions(){const select=$('playlistSelect'),old=select.value;select.replaceChildren(new Option('Все треки',''));state.playlists.forEach(p=>select.add(new Option(p.name,p.id)));select.value=state.playlists.some(p=>p.id===old)?old:state.activePlaylistId||'';}
  ['searchInput','trackFilter','trackCategory'].forEach(id=>$(id).addEventListener(id==='searchInput'?'input':'change',renderTracks));
  $('playlistSelect').addEventListener('change',()=>{state.activePlaylistId=$('playlistSelect').value;save();renderTracks();});
  $('playlistForm').addEventListener('submit',e=>{e.preventDefault();const name=$('playlistName').value.trim();if(!name)return;if(state.playlists.some(x=>x.name.toLocaleLowerCase()===name.toLocaleLowerCase())){notify('Такой плейлист уже есть');return;}const item={id:uid(),name,trackIds:[]};state.playlists.push(item);state.activePlaylistId=item.id;$('playlistName').value='';renderPlaylistOptions();$('playlistSelect').value=item.id;save();renderTracks();notify('Плейлист создан');});
  function toggleFavorite(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):state.favorites.concat(id);save();renderTracks();updatePlayerFavorite();renderAchievements();}
  function renderQueue(){const list=$('queueList');list.replaceChildren();if(!state.queue.length){const li=document.createElement('li');li.textContent='Очередь пуста';list.append(li);return;}state.queue.forEach((id,index)=>{const t=getTrack(id);if(!t)return;const li=document.createElement('li'),label=document.createElement('span');label.textContent=t.title;li.append(label,button('▶','text-button',()=>startTrack(id),'Воспроизвести '+t.title),button('Убрать','text-button',()=>{state.queue.splice(index,1);save();renderQueue();}));list.append(li);});}
  $('clearQueueBtn').addEventListener('click',()=>{state.queue=[];save();renderQueue();});
  function updatePlayerFavorite(){const on=state.favorites.includes(state.currentTrackId);$('favoriteTrack').textContent=on?'★':'☆';$('favoriteTrack').classList.toggle('is-favorite',on);$('favoriteTrack').setAttribute('aria-pressed',String(on));}
  function syncModes(){[['shuffleBtn','shuffle'],['repeatBtn','repeat']].forEach(pair=>{$(pair[0]).classList.toggle('is-favorite',state[pair[1]]);$(pair[0]).setAttribute('aria-pressed',String(state[pair[1]]));});}
  function clockTime(n){if(!Number.isFinite(n)||n<0)return '0:00';return Math.floor(n/60)+':'+String(Math.floor(n%60)).padStart(2,'0');}
  function setPlaying(on){$('playPauseBtn').textContent=on?'⏸':'▶';$('playPauseBtn').setAttribute('aria-label',on?'Пауза':'Воспроизвести');}
  function setTrack(id,autoplay){
    const track=getTrack(id);if(!track)return;currentIndex=tracks.findIndex(t=>t.id===id);state.currentTrackId=id;state.currentTime=0;
    audio.src='audio/'+track.file+'.mp3';audio.load();player.classList.add('active');$('playerTitle').textContent=track.title;$('playerStatus').textContent='Загрузка…';
    const cover=$('playerCover');cover.replaceChildren();const image=document.createElement('img');image.src='images/'+String(id).padStart(2,'0')+'.jpg';image.alt='Обложка: '+track.title;image.addEventListener('error',()=>image.remove(),{once:true});cover.append(image);
    updatePlayerFavorite();save();renderTracks();
    if(autoplay)audio.play().catch(()=>{$('playerStatus').textContent='Нажми Play, чтобы начать';setPlaying(false);});
  }
  function startTrack(id){if(state.currentTrackId===id&&!audio.paused){audio.pause();return;}setTrack(id,true);}
  function nextTrack(){
    if(state.queue.length){const id=state.queue.shift();save();renderQueue();setTrack(id,true);return;}
    if(currentIndex<0)return;let next;
    if(state.shuffle&&tracks.length>1){do{next=Math.floor(Math.random()*tracks.length);}while(next===currentIndex);}
    else next=(currentIndex+1)%tracks.length;
    setTrack(tracks[next].id,true);
  }
  function onTrackStarted(){const t=getTrack(state.currentTrackId);if(!t)return;state.history=[t.id].concat(state.history.filter(id=>id!==t.id)).slice(0,25);state.playCount++;save();renderTracks();renderAchievements();}
  $('playPauseBtn').addEventListener('click',()=>{if(!state.currentTrackId){notify('Сначала выбери трек');return;}if(audio.paused)audio.play().catch(()=>{$('playerStatus').textContent='Не удалось начать воспроизведение';});else audio.pause();});
  $('prevBtn').addEventListener('click',()=>{if(audio.currentTime>3){audio.currentTime=0;return;}if(currentIndex>=0)setTrack(tracks[(currentIndex-1+tracks.length)%tracks.length].id,true);});
  $('nextBtn').addEventListener('click',nextTrack);
  $('favoriteTrack').addEventListener('click',()=>{if(state.currentTrackId)toggleFavorite(state.currentTrackId);});
  $('shuffleBtn').addEventListener('click',()=>{state.shuffle=!state.shuffle;syncModes();save();});
  $('repeatBtn').addEventListener('click',()=>{state.repeat=!state.repeat;syncModes();save();});
  audio.volume=state.volume;$('volumeControl').value=String(state.volume);
  $('volumeControl').addEventListener('input',e=>{audio.volume=Number(e.target.value);state.volume=audio.volume;$('muteBtn').textContent=audio.volume===0?'🔇':'🔊';$('muteBtn').setAttribute('aria-pressed',String(audio.volume===0));save();});
  $('muteBtn').addEventListener('click',()=>{if(audio.volume>0){state.volume=audio.volume;audio.volume=0;}else audio.volume=state.volume||1;$('volumeControl').value=String(audio.volume);$('muteBtn').textContent=audio.volume===0?'🔇':'🔊';$('muteBtn').setAttribute('aria-pressed',String(audio.volume===0));save();});
  $('progressBar').addEventListener('input',e=>{if(Number.isFinite(audio.duration)&&audio.duration>0)audio.currentTime=Number(e.target.value)*audio.duration/100;});
  audio.addEventListener('timeupdate',()=>{if(Number.isFinite(audio.duration)&&audio.duration>0){$('progressBar').value=String(audio.currentTime/audio.duration*100);$('currentTime').textContent=clockTime(audio.currentTime);}if(Math.floor(audio.currentTime)%5===0&&state.currentTime!==Math.floor(audio.currentTime)){state.currentTime=Math.floor(audio.currentTime);save();}});
  audio.addEventListener('loadedmetadata',()=>{$('duration').textContent=clockTime(audio.duration);if(state.currentTime>0)audio.currentTime=Math.min(state.currentTime,audio.duration||state.currentTime);});
  audio.addEventListener('playing',()=>{$('playerStatus').textContent='Воспроизводится';setPlaying(true);if(!audio.dataset.counted){audio.dataset.counted='true';onTrackStarted();}});
  audio.addEventListener('pause',()=>{if(!audio.ended){$('playerStatus').textContent='Пауза';setPlaying(false);state.currentTime=Math.floor(audio.currentTime||0);save();}audio.dataset.counted='';});
  audio.addEventListener('waiting',()=>{$('playerStatus').textContent='Загрузка…';});
  audio.addEventListener('error',()=>{$('playerStatus').textContent='Не удалось загрузить аудио';setPlaying(false);});
  audio.addEventListener('ended',()=>{audio.dataset.counted='';state.currentTime=0;if(state.repeat){audio.currentTime=0;audio.play().catch(()=>{});}else nextTrack();});
  $('sleepTimerBtn').addEventListener('click',()=>{if(timer){clearTimeout(timer);timer=null;$('sleepTimerBtn').classList.remove('is-favorite');notify('Таймер отменён');return;}const value=prompt('Остановить воспроизведение через сколько минут? (1–180)','30');if(value===null)return;const minutes=Number(value);if(!Number.isInteger(minutes)||minutes<1||minutes>180){notify('Введи число от 1 до 180');return;}timer=setTimeout(()=>{audio.pause();timer=null;$('sleepTimerBtn').classList.remove('is-favorite');},minutes*60000);$('sleepTimerBtn').classList.add('is-favorite');notify('Таймер на '+minutes+' минут');});

  function renderScripts(){const host=$('savedScripts');host.replaceChildren();if(!state.scripts.length){const p=document.createElement('p');p.className='muted';p.textContent='Сохранённых сценариев пока нет.';host.append(p);return;}state.scripts.forEach(s=>{const card=document.createElement('article');card.className='script-item';const h=document.createElement('h4');h.textContent=s.name;const p=document.createElement('p');p.textContent=s.desc;const actions=document.createElement('div');actions.className='entry-actions';actions.append(button('Изменить','btn-secondary',()=>editScript(s.id)),button('Скачать','btn-secondary',()=>downloadJSON('mr1ucid-script.json',s)),button('Удалить','btn-secondary',()=>deleteScript(s.id)));card.append(h,p,actions);host.append(card);});}
  function editScript(id){const s=state.scripts.find(x=>x.id===id);if(!s)return;$('scriptId').value=s.id;$('drName').value=s.name;$('drDesc').value=s.desc;$('scriptFormHeading').textContent='Редактирование сценария';$('saveScriptBtn').textContent='Сохранить изменения';$('cancelScriptEditBtn').hidden=false;$('drName').focus();}
  function resetScriptForm(){$('scriptId').value='';$('drScriptForm').reset();$('scriptFormHeading').textContent='DR Script Creator';$('saveScriptBtn').textContent='Сохранить';$('cancelScriptEditBtn').hidden=true;}
  function deleteScript(id){if(!confirm('Удалить этот сценарий?'))return;state.scripts=state.scripts.filter(s=>s.id!==id);save();renderScripts();renderAchievements();}
  $('drScriptForm').addEventListener('submit',e=>{e.preventDefault();const name=$('drName').value.trim(),desc=$('drDesc').value.trim(),id=$('scriptId').value;if(!name||!desc)return;if(id){const s=state.scripts.find(x=>x.id===id);if(s){s.name=name;s.desc=desc;s.updatedAt=new Date().toISOString();}}else state.scripts.unshift({id:uid(),name,desc,updatedAt:new Date().toISOString()});save();resetScriptForm();renderScripts();renderAchievements();notify('Сценарий сохранён');});
  $('cancelScriptEditBtn').addEventListener('click',resetScriptForm);

  function render369(){const p=state.progress369,total=p.morning+p.day+p.night;$('countMorning').textContent=p.morning+'/3';$('countDay').textContent=p.day+'/6';$('countNight').textContent=p.night+'/9';$('status369').textContent='Прогресс: '+total+'/18';$('intention369').value=state.intention369;}
  $('intention369').addEventListener('input',e=>{state.intention369=e.target.value.slice(0,180);save();});
  document.querySelectorAll('[data-369]').forEach(btn=>btn.addEventListener('click',()=>{const period=btn.dataset['369'],max={morning:3,day:6,night:9}[period];if(state.progress369[period]<max){state.progress369[period]++;save();render369();}}));
  $('reset369').addEventListener('click',()=>{if(!confirm('Сбросить прогресс метода 369?'))return;state.progress369={morning:0,day:0,night:0};save();render369();});
  function render55(){if(state.method55.day!==today()){state.method55.day=today();state.method55.count=0;}$('intention55').value=state.method55.phrase;$('count55').value=String(state.method55.count);$('status55').textContent=state.method55.days.length+'/5 дней завершено';}
  $('save55').addEventListener('click',()=>{const phrase=$('intention55').value.trim(),count=Math.max(0,Math.min(55,Number($('count55').value)||0));if(!phrase){notify('Сначала запиши фразу');return;}state.method55.phrase=phrase;state.method55.count=count;state.method55.day=today();if(count===55&&!state.method55.days.includes(today()))state.method55.days=state.method55.days.concat(today()).slice(-5);save();render55();notify('Прогресс сохранён');});

  let shownAffirmationId='';
  function allAffirmations(){return affirmations.concat(state.customAffirmations.map(x=>({id:x.id,category:'custom',text:x.text})));}
  function showAffirmation(item){shownAffirmationId=item.id;state.currentAffirmationId=item.id;$('affirmationText').textContent=item.text;$('favoriteAffirmation').textContent=state.favoriteAffirmations.includes(item.id)?'★ В избранном':'☆ В избранное';}
  function toggleAffirmationFavorite(id){state.favoriteAffirmations=state.favoriteAffirmations.includes(id)?state.favoriteAffirmations.filter(x=>x!==id):state.favoriteAffirmations.concat(id);save();renderAffirmations();const item=allAffirmations().find(x=>x.id===id);if(item)showAffirmation(item);}
  function renderAffirmations(){const cat=$('affirmationCategory').value,q=$('affirmationSearch').value.trim().toLocaleLowerCase(),list=$('affirmationResults');list.replaceChildren();const matches=allAffirmations().filter(x=>(cat==='all'||cat===x.category)&&(!q||x.text.toLocaleLowerCase().includes(q)));matches.forEach(item=>{const li=document.createElement('li'),span=document.createElement('span');span.textContent=item.text;li.append(span,button(state.favoriteAffirmations.includes(item.id)?'★':'☆','text-button',()=>toggleAffirmationFavorite(item.id),'Избранная аффирмация'));li.addEventListener('click',e=>{if(!e.target.closest('button'))showAffirmation(item);});list.append(li);});if(!matches.length){const li=document.createElement('li');li.textContent='Совпадений нет.';list.append(li);}}
  $('affirmationCategory').addEventListener('change',renderAffirmations);$('affirmationSearch').addEventListener('input',renderAffirmations);
  $('nextAffirmation').addEventListener('click',()=>{const cat=$('affirmationCategory').value,pool=allAffirmations().filter(x=>cat==='all'||x.category===cat);if(pool.length)showAffirmation(pool[Math.floor(Math.random()*pool.length)]);});
  $('favoriteAffirmation').addEventListener('click',()=>{if(shownAffirmationId)toggleAffirmationFavorite(shownAffirmationId);});
  $('copyAffirmation').addEventListener('click',async()=>{const text=$('affirmationText').textContent;if(!text)return;try{await navigator.clipboard.writeText(text);notify('Скопировано');}catch{notify('Не удалось скопировать в этом браузере');}});
  $('customAffirmationForm').addEventListener('submit',e=>{e.preventDefault();const text=$('customAffirmation').value.trim();if(!text)return;state.customAffirmations.unshift({id:uid(),text:text.slice(0,300)});$('customAffirmation').value='';$('affirmationCategory').value='custom';save();renderAffirmations();notify('Аффирмация добавлена');});
  $('affirmationResults').addEventListener('click',e=>{const item=e.target.closest('li');if(!item||e.target.closest('button'))return;const text=item.querySelector('span')?.textContent,found=allAffirmations().find(x=>x.text===text);if(found)showAffirmation(found);});

  $('dailyIntention').value=state.dailyIntentions[today()]||'';
  $('dailyIntention').addEventListener('input',()=>{clearTimeout(debounce);$('intentionSaved').textContent='Сохраняю…';debounce=setTimeout(()=>{state.dailyIntentions[today()]=$('dailyIntention').value.slice(0,1000);save();$('intentionSaved').textContent='Сохранено на этом устройстве';},350);});

  function renderDreams(){const host=$('dreamEntries'),q=$('dreamSearch').value.trim().toLocaleLowerCase();host.replaceChildren();const items=[...state.dreams].filter(d=>(d.title+' '+d.body+' '+d.tags+' '+d.mood).toLocaleLowerCase().includes(q)).sort((a,b)=>b.date.localeCompare(a.date));if(!items.length){const p=document.createElement('p');p.className='muted';p.textContent='Записей пока нет.';host.append(p);return;}items.forEach(d=>{const card=document.createElement('article');card.className='entry-card';const h=document.createElement('h4');h.textContent=d.title;const meta=document.createElement('p');meta.className='entry-meta';meta.textContent=new Date(d.date+'T12:00:00').toLocaleDateString('ru-RU')+' · '+d.mood+(d.tags?' · '+d.tags:'');const body=document.createElement('p');body.textContent=d.body;const actions=document.createElement('div');actions.className='entry-actions';actions.append(button(d.favorite?'★ Избранное':'☆ В избранное','btn-secondary',()=>{d.favorite=!d.favorite;save();renderDreams();}),button('Изменить','btn-secondary',()=>editDream(d.id)),button('Удалить','btn-secondary',()=>deleteDream(d.id)));card.append(h,meta,body,actions);host.append(card);});}
  function editDream(id){const d=state.dreams.find(x=>x.id===id);if(!d)return;$('dreamId').value=d.id;$('dreamTitle').value=d.title;$('dreamText').value=d.body;$('dreamDate').value=d.date;$('dreamMood').value=d.mood;$('dreamTags').value=d.tags;$('saveDreamBtn').textContent='Сохранить изменения';$('cancelDreamEditBtn').hidden=false;$('dreamTitle').focus();}
  function resetDream(){ $('dreamForm').reset();$('dreamId').value='';$('dreamDate').value=today();$('saveDreamBtn').textContent='Сохранить запись';$('cancelDreamEditBtn').hidden=true;}
  function deleteDream(id){if(!confirm('Удалить эту запись сна?'))return;state.dreams=state.dreams.filter(x=>x.id!==id);save();renderDreams();renderAchievements();}
  $('dreamSearch').addEventListener('input',renderDreams);$('cancelDreamEditBtn').addEventListener('click',resetDream);
  $('dreamForm').addEventListener('submit',e=>{e.preventDefault();const id=$('dreamId').value||uid(),old=state.dreams.find(x=>x.id===id);const item={id,title:$('dreamTitle').value.trim(),body:$('dreamText').value.trim(),date:$('dreamDate').value||today(),mood:$('dreamMood').value,tags:$('dreamTags').value.trim(),favorite:old?old.favorite:false};if(!item.title||!item.body)return;const index=state.dreams.findIndex(x=>x.id===id);if(index<0)state.dreams.unshift(item);else state.dreams[index]=item;save();resetDream();renderDreams();renderAchievements();notify('Запись сохранена');});
  $('dreamDate').value=today();

  function openDb(){if(!('indexedDB'in window))return Promise.reject(new Error('IndexedDB unavailable'));return new Promise((resolve,reject)=>{const req=indexedDB.open('mr1ucid-local-media',1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('images'))req.result.createObjectStore('images');};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
  function db(action,id,value){return openDb().then(database=>new Promise((resolve,reject)=>{const tx=database.transaction('images',action==='put'||action==='delete'?'readwrite':'readonly'),store=tx.objectStore('images'),req=action==='put'?store.put(value,id):action==='delete'?store.delete(id):store.get(id);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);tx.oncomplete=()=>database.close();tx.onerror=()=>{database.close();reject(tx.error);};}));}
  const objectUrls=new Map();
  async function renderBoard(){const host=$('visionBoard');host.replaceChildren();for(const item of state.boardItems){const card=document.createElement('article');card.className='vision-item';card.draggable=true;card.dataset.itemId=item.id;let imageData=item.imageData;
    if(!imageData){try{const blob=await db('get',item.id);if(blob){const url=URL.createObjectURL(blob);objectUrls.set(item.id,url);imageData=url;}}catch{}}
    if(imageData){const img=document.createElement('img');img.src=imageData;img.alt=item.caption||'Изображение Vision Board';card.append(img);}
    if(item.caption){const p=document.createElement('p');p.textContent=item.caption;card.append(p);}
    card.append(button('×','text-button',()=>removeBoard(item.id),'Удалить элемент'));
    card.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',item.id));
    card.addEventListener('dragover',e=>e.preventDefault());
    card.addEventListener('drop',e=>{e.preventDefault();const from=e.dataTransfer.getData('text/plain'),a=state.boardItems.findIndex(x=>x.id===from),b=state.boardItems.findIndex(x=>x.id===item.id);if(a<0||b<0||a===b)return;const moved=state.boardItems.splice(a,1)[0];state.boardItems.splice(b,0,moved);save();renderBoard();});
    host.append(card);
  }}
  async function removeBoard(id){if(!confirm('Удалить этот элемент Vision Board?'))return;state.boardItems=state.boardItems.filter(x=>x.id!==id);const url=objectUrls.get(id);if(url)URL.revokeObjectURL(url);objectUrls.delete(id);try{await db('delete',id);}catch{}save();renderBoard();renderAchievements();}
  $('boardForm').addEventListener('submit',async e=>{e.preventDefault();const caption=$('boardCaption').value.trim(),file=$('boardImage').files[0];if(!caption&&!file){notify('Добавь подпись или изображение');return;}if(state.boardItems.length>=60){notify('Максимум 60 элементов');return;}if(file&&(!file.type.startsWith('image/')||file.size>4*1024*1024)){notify('Изображение должно быть меньше 4 МБ');return;}const item={id:uid(),caption,imageData:''};if(file){try{await db('put',item.id,file);}catch{if(file.size>300000){notify('Локальная база недоступна; попробуй изображение до 300 КБ');return;}item.imageData=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result));reader.onerror=()=>reject(reader.error);reader.readAsDataURL(file);});}}state.boardItems.unshift(item);save();$('boardForm').reset();renderBoard();renderAchievements();notify('Добавлено на Vision Board');});
  function blobData(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob);});}
  $('exportBoard').addEventListener('click',async()=>{const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=800;const ctx=canvas.getContext('2d');if(!ctx){notify('Экспорт PNG недоступен');return;}ctx.fillStyle='#09090D';ctx.fillRect(0,0,1200,800);ctx.fillStyle='#C7C5D0';ctx.font='42px Georgia';ctx.fillText('MY VISION BOARD',48,64);const w=350,h=210,g=26;for(let i=0;i<state.boardItems.length&&i<9;i++){const item=state.boardItems[i],x=48+(i%3)*(w+g),y=94+Math.floor(i/3)*(h+g);let src=item.imageData;if(!src){try{const blob=await db('get',item.id);if(blob)src=await blobData(blob);}catch{}}if(src){try{const image=await new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;});ctx.drawImage(image,x,y,w,150);}catch{}}ctx.fillStyle='#F1EFF5';ctx.font='20px Arial';ctx.fillText((item.caption||'').slice(0,42),x,y+180);}canvas.toBlob(blob=>{if(!blob){notify('Не удалось сохранить PNG');return;}const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='mr1ucid-vision-board.png';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'image/png');});

  function renderAchievements(){const items=[['Moon Child','Прослушай первый трек',state.playCount>=1],['Dream Weaver','Сохрани запись сна',state.dreams.length>0],['Reality Architect','Создай DR-сценарий',state.scripts.length>0],['Vision Creator','Добавь элемент на доску',state.boardItems.length>0],['Consistency Star','Запусти аудио 7 раз',state.playCount>=7]],host=$('achievementList');host.replaceChildren();items.forEach(x=>{const badge=document.createElement('span');badge.className='achievement-badge'+(x[2]?' earned':'');badge.textContent=(x[2]?'✦ ':'☆ ')+x[0];badge.title=x[1]+(x[2]?' — получено':'');host.append(badge);});}
  function applyTheme(){root.dataset.theme=state.theme;$('themeSelect').value=state.theme;}
  $('themeSelect').addEventListener('change',e=>{state.theme=e.target.value;applyTheme();save();});

  function downloadJSON(filename,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=filename;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  async function exportBackup(){const copy=JSON.parse(JSON.stringify(state));for(const item of copy.boardItems){if(!item.imageData){try{const blob=await db('get',item.id);if(blob)item.imageData=await blobData(blob);}catch{}}}downloadJSON('mr1ucid-backup-'+today()+'.json',{app:'MR1UCID',version:1,exportedAt:new Date().toISOString(),data:copy});notify('Резервная копия скачана');}
  $('exportData').addEventListener('click',exportBackup);
  $('importData').addEventListener('change',async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;if(file.size>15*1024*1024){notify('Файл копии больше 15 МБ');return;}try{const parsed=JSON.parse(await file.text()),raw=parsed&&parsed.app==='MR1UCID'?parsed.data:parsed;if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('invalid backup');if(!confirm('Восстановить данные? Текущие записи будут заменены.'))return;state=normalize(raw);for(const item of state.boardItems){if(item.imageData){try{const response=await fetch(item.imageData),blob=await response.blob();await db('put',item.id,blob);item.imageData='';}catch{}}}save();renderAll();notify('Данные восстановлены');}catch(error){console.warn('Backup import failed',error);notify('Не удалось прочитать JSON-копию');}});
  $('clearData').addEventListener('click',async()=>{if(!confirm('Удалить все личные записи, избранное, прогресс и настройки? Сначала скачай копию, если она нужна.'))return;const ids=state.boardItems.map(x=>x.id);state=blank();for(const id of ids){try{await db('delete',id);}catch{}}localStorage.removeItem('mr_scripts');localStorage.removeItem('mr_369');save();renderAll();notify('Локальные данные очищены');});

  function renderAll(){renderPlaylistOptions();renderTracks();renderQueue();renderScripts();render369();render55();renderAffirmations();renderDreams();renderBoard();renderAchievements();updatePlayerFavorite();syncModes();applyTheme();}
  $('offlineNotice').hidden=navigator.onLine;window.addEventListener('online',()=>{$('offlineNotice').hidden=true;});window.addEventListener('offline',()=>{$('offlineNotice').hidden=false;});
  function updateClock(){const now=new Date();$('clock').textContent=now.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});$('date').textContent=now.toLocaleDateString('ru-RU',{weekday:'long',month:'long',day:'numeric'});}
  updateClock();setInterval(updateClock,30000);
  const quotes=['Я могу выбирать свой следующий шаг.','Маленькие действия тоже имеют значение.','Мне можно менять планы и пробовать снова.','Моё внимание принадлежит мне.','Я создаю пространство для того, что важно.'];
  if(state.quoteDay!==today()){state.quoteDay=today();state.quoteText=quotes[new Date().getDate()%quotes.length];save();}$('quoteOfDay').textContent=state.quoteText;
  if(state.currentTrackId){const track=getTrack(state.currentTrackId);if(track){currentIndex=tracks.findIndex(t=>t.id===track.id);$('playerTitle').textContent=track.title;player.classList.add('active');const img=document.createElement('img');img.src='images/'+String(track.id).padStart(2,'0')+'.jpg';img.alt='Обложка: '+track.title;$('playerCover').append(img);audio.src='audio/'+track.file+'.mp3';audio.addEventListener('loadedmetadata',()=>{audio.currentTime=Math.min(state.currentTime,audio.duration||0);},{once:true});}}
  if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').then(reg=>reg.update().catch(()=>{})).catch(error=>console.info('Offline cache unavailable',error));
  renderAll();
});
