document.addEventListener('DOMContentLoaded', () => {
  
  // ================= 1. SPA РОУТИНГ =================
  const pages = document.querySelectorAll('.page');
  const bottomNavItems = document.querySelectorAll('.bottom-nav__item');

  function navigateTo(hash) {
    const targetId = hash.replace('#', '') || 'home';
    pages.forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(targetId);
    if (targetPage) targetPage.classList.add('active');
    window.scrollTo(0, 0);

    // Подсветка нижней навигации
    bottomNavItems.forEach(item => {
      item.classList.toggle('active', item.dataset.page === targetId);
    });
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
    { id: 6, title: 'ᴛiʍᴇ ᴄᴏɴᴛrᴏl', file: 'time_control', tags: 'время контроль тайм менеджмент' },
    { id: 7, title: 'ʙᴏᴏsᴛᴇr', file: 'booster', tags: 'бустер усиление мотивация' },
    { id: 8, title: 'dᴏll ʙᴇᴀuᴛʏ', file: 'doll_beauty', tags: 'кукольная красота лицо' },
    { id: 9, title: 'rᴇsᴩᴇᴄᴛ frᴏʍ ᴛᴇᴀᴄhᴇrs', file: 'respect_from_teachers', tags: 'уважение учителей школа учеба' },
    { id: 10, title: 'lᴏvᴇ', file: 'love', tags: 'любовь отношения' },
    { id: 11, title: 'ᏌᏚᎪ', file: 'usa', tags: 'сша америка переезд' },
    { id: 12, title: 'ⲋⲏⲓϝⲧⲓⲛⳋ', file: 'shifting', tags: 'шифтинг перемещение' },
    { id: 13, title: 'ⲓⲇⲉⲁⳑ ⲃⲟⲇⲩ', file: 'ideal_body', tags: 'идеальное тело фигура' },
    { id: 14, title: 'ⲓⲇⲉⲁⳑ ⲋⲕⲓⲛ', file: 'ideal_skin', tags: 'идеальная кожа лицо' },
    { id: 15, title: 'ʍᴏgg', file: 'mogg', tags: 'моггинг внешность челюсть' },
    { id: 16, title: 'suᴄᴄᴇss', file: 'success', tags: 'успех победа' },
    { id: 17, title: 'luᴄᴋ', file: 'luck', tags: 'удача везение' },
    { id: 18, title: 'ᴩᴏwᴇrful sᴇlf ᴄᴏɴᴄᴇᴩᴛ', file: 'powerful_self_concept', tags: 'селф концепт уверенность самооценка' },
    { id: 19, title: 'ʍᴏnᴇy', file: 'money', tags: 'деньги богатство финансы' },
    { id: 20, title: 'friᴇndshiᴩ', file: 'friendship', tags: 'дружба друзья общение' },
    { id: 21, title: 'ᴩᴇᴛ', file: 'pet', tags: 'питомец животное кот собака' },
    { id: 22, title: 'ᴄᴩ', file: 'cp', tags: 'к4 одержимость отношения' },
    { id: 23, title: 'idᴇᴀl ʍᴇ', file: 'ideal_me', tags: 'идеальный я всё включено' },
    { id: 24, title: 'ʍᴏnᴇy fᴏr hᴏʙʙy', file: 'money_for_hobby', tags: 'деньги хобби заработок' },
    { id: 25, title: 'ᴇnglish Ꮯ2', file: 'english_c2', tags: 'английский язык c2' }
  ];

  const libraryGrid = document.getElementById('libraryGrid');
  
  // ================= 3. РЕНДЕР КАРТОЧЕК С ОБЛОЖКАМИ =================
  function renderTracks(filter = '') {
    libraryGrid.innerHTML = '';
    const filtered = subliminals.filter(s => 
      s.title.toLowerCase().includes(filter.toLowerCase()) || 
      s.tags.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(track => {
      const card = document.createElement('div');
      card.className = 'track-card';
      
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
  
  renderTracks();

  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderTracks(e.target.value);
  });

  // ================= 4. АУДИОПЛЕЕР =================
  const audio = document.getElementById('mainAudio');
  const player = document.getElementById('globalPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const progressBar = document.getElementById('progressBar');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');
  const playerCover = document.getElementById('playerCover');
  const playerTitle = document.getElementById('playerTitle');
  const playerStatus = document.getElementById('playerStatus');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const sleepTimerBtn = document.getElementById('sleepTimerBtn');

  let currentTrackIndex = -1;
  let isShuffle = false;
  let isRepeat = false;
  let sleepTimer = null;

  function playTrack(track) {
    const trackIndex = subliminals.findIndex(t => t.id === track.id);
    
    if (currentTrackIndex === trackIndex && !audio.paused) {
      audio.pause();
      playPauseBtn.textContent = '▶';
      return;
    }
    
    currentTrackIndex = trackIndex;
    audio.src = `audio/${track.file}.mp3`;
    audio.load();
    audio.play().catch(e => console.log("Audio error:", e));
    
    player.classList.add('active');
    playerTitle.textContent = track.title;
    playerStatus.textContent = 'Playing...';
    playPauseBtn.textContent = '⏸';

    // Обложка в плеере
    const imgNum = track.id.toString().padStart(2, '0');
    playerCover.innerHTML = `<img src="images/${imgNum}.jpg" alt="${track.title}" onerror="this.style.display='none'">`;
  }

  // Play / Pause
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playPauseBtn.textContent = '⏸'; }
    else { audio.pause(); playPauseBtn.textContent = '▶'; }
  });

  // Next
  nextBtn.addEventListener('click', () => {
    if (currentTrackIndex === -1) return;
    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * subliminals.length);
    } else {
      nextIndex = currentTrackIndex + 1;
      if (nextIndex >= subliminals.length) nextIndex = 0;
    }
    playTrack(subliminals[nextIndex]);
  });

  // Prev
  prevBtn.addEventListener('click', () => {
    if (currentTrackIndex === -1) return;
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) prevIndex = subliminals.length - 1;
    playTrack(subliminals[prevIndex]);
  });

  // Прогресс
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      progressBar.value = (audio.currentTime / audio.duration) * 100;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  progressBar.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });

  audio.addEventListener('ended', () => {
    if (isRepeat) {
      audio.currentTime = 0;
      audio.play();
    } else {
      nextBtn.click();
    }
  });

  audio.addEventListener('playing', () => {
    playerStatus.textContent = 'Playing';
    playPauseBtn.textContent = '⏸';
  });

  audio.addEventListener('pause', () => {
    playerStatus.textContent = 'Paused';
    playPauseBtn.textContent = '▶';
  });

  audio.addEventListener('waiting', () => {
    playerStatus.textContent = 'Buffering...';
  });

  audio.addEventListener('error', () => {
    playerStatus.textContent = 'Error loading audio';
  });

  // Shuffle / Repeat
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.color = isShuffle ? 'var(--lavender)' : 'var(--silver)';
  });

  repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.style.color = isRepeat ? 'var(--lavender)' : 'var(--silver)';
  });

  // Sleep Timer
  sleepTimerBtn.addEventListener('click', () => {
    if (sleepTimer) {
      clearTimeout(sleepTimer);
      sleepTimer = null;
      sleepTimerBtn.style.color = 'var(--silver)';
      alert('Таймер сна отменен');
      return;
    }
    const minutes = prompt('Через сколько минут выключить музыку? (15, 30, 45, 60, 90)', '30');
    if (!minutes) return;
    const ms = parseInt(minutes) * 60 * 1000;
    if (isNaN(ms)) return;
    
    sleepTimer = setTimeout(() => {
      // Плавное затухание
      let vol = audio.volume;
      const fade = setInterval(() => {
        if (vol > 0.01) {
          vol -= 0.01;
          audio.volume = vol;
        } else {
          clearInterval(fade);
          audio.pause();
          audio.volume = 1;
          sleepTimer = null;
          sleepTimerBtn.style.color = 'var(--silver)';
        }
      }, 100);
    }, ms);
    
    sleepTimerBtn.style.color = 'var(--lavender)';
    alert(`Таймер установлен на ${minutes} минут`);
  });

  function formatTime(sec) {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // ================= 5. SHIFTING (DR Script Creator) =================
  const drForm = document.getElementById('drScriptForm');
  const savedScriptsDiv = document.getElementById('savedScripts');

  function loadScripts() {
    if (!savedScriptsDiv) return;
    try {
      const scripts = JSON.parse(localStorage.getItem('mr_scripts') || '[]');
      savedScriptsDiv.innerHTML = '';
      scripts.forEach((s, index) => {
        const item = document.createElement('div');
        item.className = 'script-item';
        const h4 = document.createElement('h4');
        h4.textContent = s.name;
        const p = document.createElement('p');
        p.textContent = s.desc;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Удалить';
        delBtn.className = 'btn-secondary';
        delBtn.style.marginTop = '8px';
        delBtn.addEventListener('click', () => {
          if (confirm('Удалить сценарий?')) {
            const scripts = JSON.parse(localStorage.getItem('mr_scripts') || '[]');
            scripts.splice(index, 1);
            localStorage.setItem('mr_scripts', JSON.stringify(scripts));
            loadScripts();
          }
        });
        item.appendChild(h4);
        item.appendChild(p);
        item.appendChild(delBtn);
        savedScriptsDiv.appendChild(item);
      });
    } catch (e) {
      console.error('Ошибка загрузки сценариев', e);
    }
  }

  if (drForm) {
    drForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('drName').value.trim();
      const desc = document.getElementById('drDesc').value.trim();
      if (!name || !desc) return;
      try {
        const scripts = JSON.parse(localStorage.getItem('mr_scripts') || '[]');
        scripts.push({ name, desc });
        localStorage.setItem('mr_scripts', JSON.stringify(scripts));
        drForm.reset();
        loadScripts();
      } catch (e) {
        console.error('Ошибка сохранения', e);
      }
    });
    loadScripts();
  }

  // ================= 6. MANIFESTATION (369 и Аффирмации) =================
  let progress369 = JSON.parse(localStorage.getItem('mr_369') || '{"morning":0,"day":0,"night":0}');
  const status369El = document.getElementById('status369');

  function update369UI() {
    if (status369El) {
      status369El.textContent = `Progress: ${progress369.morning + progress369.day + progress369.night}/18`;
    }
  }

  window.update369 = (time) => {
    if (time === 'morning' && progress369.morning < 3) progress369.morning++;
    else if (time === 'day' && progress369.day < 6) progress369.day++;
    else if (time === 'night' && progress369.night < 9) progress369.night++;
    localStorage.setItem('mr_369', JSON.stringify(progress369));
    update369UI();
  };

  const resetBtn = document.getElementById('reset369');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Сбросить прогресс 369?')) {
        progress369 = { morning: 0, day: 0, night: 0 };
        localStorage.setItem('mr_369', JSON.stringify(progress369));
        update369UI();
      }
    });
  }
  update369UI();

  // 200 аффирмаций
  const affirmations = [
    "Я — творец своей реальности.", "Я обладаю невероятной харизмой.", "Я абсолютно уверен(а) в себе.", "Я люблю себя без условий.", "Мое самоощущение непоколебимо.", "Я всегда выбираю себя.", "Я достоин(на) всего самого лучшего.", "Мое мнение о себе важнее чужого.", "Я живу в гармонии с собой.", "Я смело смотрю в будущее.", "Я горжусь тем, кем становлюсь.", "Мой внутренний мир прекрасен.", "Я излучаю спокойствие и силу.", "Я не позволяю сомнениям управлять мной.", "Каждый день я становлюсь лучше.", "Я заслуживаю уважения и любви.", "Мой разум ясен, а сердце спокойно.", "Я принимаю себя целиком и полностью.", "Я — магнит для позитивных людей.", "Моя жизнь наполнена смыслом.", "Я контролирую свои мысли и эмоции.", "Я свободен(на) от чужого осуждения.", "Я сильная и независимая личность.", "Я легко справляюсь с любыми трудностями.", "Мой внутренний голос поддерживает меня.", "Я отпускаю прошлое и живу настоящим.", "Я всегда знаю, что для меня лучше.", "Я уникален(на) и неповторим(а).", "Я источник вдохновения для других.", "Я счастлив(а) просто потому, что существую.", "Я позволяю себе мечтать по-крупному.", "Я не боюсь быть собой.", "Моя уверенность растет с каждым днем.", "Я достоин(на) быть услышанным(ой).", "Я создаю свою жизнь своими руками.", "Я выбираю мысли, которые делают меня сильнее.", "Мое будущее светло и прекрасно.", "Я живу в состоянии внутреннего покоя.", "Я — лучшая версия себя прямо сейчас.", "Я легко отпускаю то, что мне не служит.",
    "Моя внешность становится всё более привлекательной.", "Я выгляжу потрясающе каждый день.", "Моя кожа чистая, сияющая и здоровая.", "Мои волосы густые, блестящие и красивые.", "Мое лицо привлекает восхищенные взгляды.", "Я стройный(ая) и подтянутый(ая).", "Мое тело с каждым днем становится здоровее.", "У меня идеальная фигура моей мечты.", "Мои глаза сияют и притягивают людей.", "Я выгляжу моложе с каждым днем.", "Моя улыбка неотразима.", "Я излучаю магнетическую привлекательность.", "Мое тело идеально для меня.", "Я легко поддерживаю свой идеальный вес.", "Мое отражение в зеркале восхищает меня.", "У меня безупречный вкус в одежде.", "Моя кожа излучает здоровое сияние.", "Я выгляжу стильно и дорого.", "Мои черты лица становятся всё более гармоничными.", "Я доволен(на) своей внешностью на 100%.", "Мое тело становится всё более точеным.", "У меня роскошные и густые волосы.", "Мои ногти крепкие и красивые.", "Я выгляжу отдохнувшим(ей) и свежим(ей).", "Мое тело быстро восстанавливается.", "Я привлекаю внимание своей эстетикой.", "Мой образ уникален и красив.", "Я чувствую себя комфортно в своем теле.", "Моя красота раскрывается с каждым днем.", "У меня идеальная осанка и легкая походка.",
    "Деньги легко приходят в мою жизнь.", "Я живу в изобильной вселенной.", "Мой доход растет с каждым днем.", "Я магнит для денег и возможностей.", "Финансовое благополучие — моя норма.", "Я получаю деньги с радостью и благодарностью.", "У меня всегда достаточно денег на все желания.", "Мое финансовое положение улучшается стремительно.", "Я легко зарабатываю деньги.", "Богатство течет ко мне рекой.", "Я заслуживаю финансовой свободы.", "Мои инвестиции приносят огромную прибыль.", "Я получаю неожиданные подарки от вселенной.", "Деньги любят меня, а я люблю деньги.", "Я умею грамотно управлять своими финансами.", "Мое хобби приносит мне стабильный доход.", "Я живу богато и ни в чем себе не отказываю.", "Все мои финансовые цели достигаются легко.", "Изобилие — это мое естественное состояние.", "Я благодарен(на) за каждый рубль, приходящий ко мне.", "Я открыт(а) для новых источников дохода.", "Мои сбережения постоянно растут.", "Я могу позволить себе всё, что пожелаю.", "Деньги приходят ко мне из неожиданных мест.", "Я привлекаю выгодные предложения.", "Моя работа приносит мне огромный доход.", "Я живу в роскоши и комфорте.", "Финансовые потоки всегда направлены в мою сторону.", "Я легко оплачиваю все свои счета.", "Мое богатство приносит пользу миру.",
    "Я притягиваю идеального партнера.", "Я любим(а) и обожаем(а).", "Мои отношения наполнены любовью и гармонией.", "Я строю здоровые и счастливые отношения.", "Любовь окружает меня повсюду.", "Я достоин(на) искренней и верной любви.", "Мой партнер ценит и уважает меня.", "Я легко привлекаю внимание противоположного пола.", "Мое сердце открыто для настоящей любви.", "Я получаю любовь, которую отдаю.", "Мои отношения с каждым днем крепнут.", "Я нахожусь в союзе с человеком моей мечты.", "Я излучаю любовь и притягиваю ее обратно.", "Меня окружают заботливые и добрые люди.", "У меня крепкая и счастливая семья.", "Я умею любить и принимать любовь.", "Мой идеальный партнер уже в пути ко мне.", "В моей жизни царит атмосфера нежности и доверия.", "Я легко прощаю и отпускаю обиды.", "Мои друзья искренне любят и поддерживают меня.", "Я создаю пространство любви вокруг себя.", "Мое сердце полно благодарности.", "Я привлекаю людей, которые хотят для меня лучшего.", "Моя личная жизнь полна приятных сюрпризов.", "Я наслаждаюсь каждым моментом в отношениях.", "Взаимность и гармония — основа моей любви.", "Я магнит для романтики.", "Мой партнер заботится обо мне.", "Я строю планы на будущее с любимым человеком.", "Любовь к себе притягивает любовь других.",
    "Я во всем и всегда невероятно везучий(ая).", "Удача идет со мной рука об руку.", "Все двери открываются передо мной.", "Я легко достигаю поставленных целей.", "Мои желания исполняются наилучшим образом.", "Я притягиваю успех во всех начинаниях.", "Я — мастер шифтинга.", "Мой разум легко переносит меня в DR.", "Я просыпаюсь в своей желаемой реальности.", "Шифтинг дается мне легко и приятно.", "Я осознанно управляю своими снами.", "Моя DR уже ждет меня, и я чувствую ее.", "Я отпускаю контроль и позволяю шифтингу случиться.", "Я — творец своих миров.", "Учителя и окружающие уважают меня.", "Я сдаю все экзамены на отлично без труда.", "Информация легко усваивается моим мозгом.", "Я абсолютный победитель по жизни.", "Все мои планы успешно реализуются.", "Я получаю желаемое без промедлений.", "Фортуна всегда на моей стороне.", "Я нахожусь в нужном месте в нужное время.", "Все события в моей жизни ведут к лучшему.", "Я легко преодолеваю любые препятствия.", "Я уверенно иду к своему успеху.", "Каждый мой день наполнен удачей.", "Мои мечты сбываются прямо сейчас.", "Я притягиваю чудеса в свою жизнь.", "Успех стал моим естественным состоянием.", "Я легко получаю то, что хочу.",
    "Я обладаю бесконечным запасом энергии.", "Мое тело абсолютно здорово.", "Я встаю рано и чувствую себя прекрасно.", "Мой сон глубокий и восстанавливающий.", "Я просыпаюсь в отличном настроении.", "Все процессы в моем организме работают идеально.", "Я чувствую легкость во всем теле.", "Мой иммунитет непоколебим.", "Я полон(на) сил и жизненной энергии.", "Каждая клеточка моего тела излучает здоровье.", "У меня идеальное пищеварение.", "Я легко отказываюсь от вредной пищи.", "Я выбираю здоровые привычки.", "Мой организм быстро восстанавливается.", "Я чувствую себя бодрым(ой) и активным(ой) весь день.", "Мой вес и здоровье идеально сбалансированы.", "Я выгляжу и чувствую себя на 10 лет моложе.", "Время подвластно мне.", "Я успеваю всё, что запланировал(а).", "Я всегда нахожу время для отдыха и себя."
  ];

  window.generateAffirmation = () => {
    const el = document.getElementById('randomAffirmation');
    if (el) {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      el.textContent = `"${affirmations[randomIndex]}"`;
    }
  };

  // ================= 7. MY SPACE (Часы) =================
  function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('date').textContent = now.toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' });
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ================= 8. PWA INSTALL =================
  let deferredPrompt;
  const installBtn = document.getElementById('installPwaBtn');
  if (installBtn) {
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
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW reg failed', err));
  }
});