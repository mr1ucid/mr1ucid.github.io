document.addEventListener('DOMContentLoaded', () => {
  
  // ================= 1. SPA РОУТИНГ (Переключение страниц) =================
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-card');

  function navigateTo(hash) {
    const targetId = hash.replace('#', '') || 'home';
    pages.forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(targetId);
    if (targetPage) targetPage.classList.add('active');
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', () => navigateTo(window.location.hash));
  if (window.location.hash) navigateTo(window.location.hash);

  // ================= 2. ДАННЫЕ САБЛИМИНАЛОВ =================
  const subliminals = [
    { id: 1, title: 'ᴇᴀrly ʙird', file: 'early_bird', tags: 'ранняя пташка рано вставать сон' },
    { id: 2, title: 'vᴀʍᴩirᴇ', file: 'vampire', tags: 'вампир клыки аура внешность' },
    { id: 3, title: 'dᴇsirᴇd ᴀᴩᴩᴇᴀrᴀnᴄᴇ', file: 'desired_appearance', tags: 'желаемая внешность красота лицо' },
    { id: 4, title: 'nᴇw ᴩhᴏnᴇ', file: 'new_phone', tags: 'новый телефон айфон гаджет' },
    { id: 5, title: 'wᴇighᴛ lᴏss', file: 'weight_loss', tags: 'похудение стройность тело вес' },
    { id: 6, title: 'ᴛiʍᴇ ᴄᴏnᴛrᴏl', file: 'time_control', tags: 'время контроль тайм менеджмент' },
    { id: 7, title: 'ʙᴏᴏsᴛᴇr', file: 'booster', tags: 'бустер усиление мотивация' },
    { id: 8, title: 'dᴏll ʙᴇᴀuᴛy', file: 'doll_beauty', tags: 'кукольная красота лицо' },
    { id: 9, title: 'rᴇsᴩᴇᴄᴛ frᴏʍ ᴛᴇᴀᴄhᴇrs', file: 'respect_from_teachers', tags: 'уважение учителей школа учеба' },
    { id: 10, title: 'lᴏvᴇ', file: 'love', tags: 'любовь отношения' },
    { id: 11, title: 'ᏌᏚᎪ', file: 'usa', tags: 'сша америка переезд' },
    { id: 12, title: 'ⲋⲏⲓϝⲧⲓⲛⳋ', file: 'shifting', tags: 'шифтинг перемещение' },
    { id: 13, title: 'ⲓⲇⲉⲁⳑ ⲃⲟⲇⲩ', file: 'ideal_body', tags: 'идеальное тело фигура' },
    { id: 14, title: 'ⲓⲇⲉⲁⳑ ⲋⲕⲓⲛ', file: 'ideal_skin', tags: 'идеальная кожа лицо' },
    { id: 15, title: 'ʍᴏgg', file: 'mogg', tags: 'моггинг внешность челюсть' },
    { id: 16, title: 'suᴄᴄᴇss', file: 'success', tags: 'успех победа' },
    { id: 17, title: 'luᴄᴋ', file: 'luck', tags: 'удача везение' },
    { id: 18, title: 'ᴩᴏwᴇrful sᴇlf ᴄᴏnᴄᴇᴩᴛ', file: 'powerful_self_concept', tags: 'селф концепт уверенность самооценка' },
    { id: 19, title: 'ʍᴏnᴇy', file: 'money', tags: 'деньги богатство финансы' },
    { id: 20, title: 'friᴇndshiᴩ', file: 'friendship', tags: 'дружба друзья общение' },
    { id: 21, title: 'ᴩᴇᴛ', file: 'pet', tags: 'питомец животное кот собака' },
    { id: 22, title: 'ᴄᴩ', file: 'cp', tags: 'к4 одержимость отношения' },
    { id: 23, title: 'idᴇᴀl ʍᴇ', file: 'ideal_me', tags: 'идеальный я всё включено' },
    { id: 24, title: 'ʍᴏnᴇy fᴏr hᴏʙʙy', file: 'money_for_hobby', tags: 'деньги хобби заработок' },
    { id: 25, title: 'ᴇnglish Ꮯ2', file: 'english_c2', tags: 'английский язык c2' }
  ];

  const libraryGrid = document.getElementById('libraryGrid');
  
    function renderTracks(filter = '') {
    libraryGrid.innerHTML = '';
    const filtered = subliminals.filter(s => 
      s.title.toLowerCase().includes(filter.toLowerCase()) || 
      s.tags.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(track => {
      const card = document.createElement('div');
      card.className = 'track-card';
      
      // Формируем правильное имя картинки (01.jpg, 02.jpg и т.д.)
      const imgNum = track.id.toString().padStart(2, '0');
      
      card.innerHTML = `
        <div class="track-cover">
          <span class="fallback-icon">♫</span>
          <img src="images/${imgNum}.jpg" alt="${track.title}" onerror="this.style.display='none'">
        </div>
        <div class="track-title">${imgNum}. ${track.title}</div>
        <div class="play-icon">▶</div>
      `;
      card.addEventListener('click', () => playTrack(track));
      libraryGrid.appendChild(card);
    });
  }
  // Поиск
  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderTracks(e.target.value);
  });

  // ================= 3. АУДИОПЛЕЕР =================
  const audio = document.getElementById('mainAudio');
  const player = document.getElementById('globalPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressBar = document.getElementById('progressBar');
  let currentTrackIndex = -1;

  function playTrack(track) {
    const trackIndex = subliminals.findIndex(t => t.id === track.id);
    if (currentTrackIndex === trackIndex && !audio.paused) {
      audio.pause();
      return;
    }
    
    currentTrackIndex = trackIndex;
    // Путь к аудио, как в вашем оригинальном проекте
    audio.src = `audio/${track.file}.mp3`; 
    audio.play().catch(e => console.log("Audio error:", e));
    
    player.classList.add('active');
    document.getElementById('playerTitle').textContent = track.title;
    document.getElementById('playerStatus').textContent = 'Playing';
    playPauseBtn.textContent = '⏸';
  }

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playPauseBtn.textContent = '⏸'; }
    else { audio.pause(); playPauseBtn.textContent = '▶'; }
  });

  audio.addEventListener('timeupdate', () => {
    if(audio.duration) progressBar.value = (audio.currentTime / audio.duration) * 100;
  });

  progressBar.addEventListener('input', () => {
    if(audio.duration) audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  // ================= 4. SHIFTING (Сохранение скриптов) =================
  const drForm = document.getElementById('drScriptForm');
  const savedScriptsDiv = document.getElementById('savedScripts');

  function loadScripts() {
    const scripts = JSON.parse(localStorage.getItem('mr_scripts') || '[]');
    savedScriptsDiv.innerHTML = scripts.map(s => `
      <div class="script-item">
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  drForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('drName').value;
    const desc = document.getElementById('drDesc').value;
    const scripts = JSON.parse(localStorage.getItem('mr_scripts') || '[]');
    scripts.push({ name, desc });
    localStorage.setItem('mr_scripts', JSON.stringify(scripts));
    drForm.reset();
    loadScripts();
  });
  loadScripts();

  // ================= 5. MANIFESTATION =================
  let progress369 = { morning: 0, day: 0, night: 0 };
  
  window.update369 = (time) => {
    if (time === 'morning' && progress369.morning < 3) progress369.morning++;
    else if (time === 'day' && progress369.day < 6) progress369.day++;
    else if (time === 'night' && progress369.night < 9) progress369.night++;
    document.getElementById('status369').textContent = `Progress: ${progress369.morning + progress369.day + progress369.night}/18`;
  };

  const affirmations = [
    "Я — творец своей реальности.",
    "Моя внешность становится всё более привлекательной.",
    "Деньги легко приходят в мою жизнь.",
    "Я обладаю невероятной харизмой.",
    "Я уважаем(а) и любим(а) окружающими."
  ];

  window.generateAffirmation = () => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('randomAffirmation').textContent = `"${random}"`;
  };

  // ================= 6. MY SPACE (Часы) =================
  function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('clock');
    if(clockEl) {
      clockEl.textContent = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('date').textContent = now.toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' });
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ================= 7. PWA INSTALL =================
  let deferredPrompt;
  const installBtn = document.getElementById('installPwaBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
  });

  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') installBtn.style.display = 'none';
      deferredPrompt = null;
    }
  });

  // Регистрация Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW reg failed', err));
  }
});
