(function(){
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if(mobileMenuToggle && navMenu){
    mobileMenuToggle.addEventListener('click', function(){
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(){
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e){
      if(!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)){
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Mini-brief questions (по ТЗ)
  const miniBriefQuestions = [
    "Цель видео (тендер, инвесторы, продажи, PR)?",
    "Желаемые сроки реализации?",
    "Ориентировочный бюджет?",
    "Есть ли референсы?",
    "Контактные данные"
  ];

  // DOM refs
  const briefModal = document.getElementById('miniBriefModal');
  const briefForm = document.getElementById('miniBriefForm');

  // Bind CTA
  document.querySelectorAll('[data-action="mini-brief"]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(typeof briefModal.showModal === 'function'){
        briefModal.showModal();
      }else{
        briefModal.setAttribute('open','');
      }
      trackEvent('CTA','open_mini_brief','button_click');
    });
  });

  document.querySelectorAll('[data-action="open-portfolio"]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.getElementById('cases')?.scrollIntoView({behavior:'smooth'});
      trackEvent('CTA','open_portfolio','button_click');
    });
  });

  document.querySelectorAll('[data-action="scroll-to-consultation"]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.getElementById('consultation')?.scrollIntoView({behavior:'smooth'});
      trackEvent('CTA','scroll_to_consultation','button_click');
    });
  });

  // Countdown (FOMO) — 14 дней от сегодня, можно настроить под месяц
  const countdownEl = document.getElementById('countdown');
  const nextMonthEl = document.getElementById('nextMonth');
  if(countdownEl){
    // Определяем следующий месяц
    const nextDate = new Date();
    nextDate.setMonth(nextDate.getMonth() + 1);
    const months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    if(nextMonthEl){
      nextMonthEl.textContent = months[nextDate.getMonth()];
    }
    
    const target = new Date();
    target.setDate(target.getDate()+14);
    const tick = ()=>{
      const now = new Date();
      const diff = target-now;
      if(diff<=0){countdownEl.textContent='сегодня';return;}
      const days = Math.floor(diff/86400000);
      const hours = Math.floor((diff%86400000)/3600000);
      countdownEl.textContent = `${days} д ${hours} ч`;
    };
    tick();
    setInterval(tick,60000);
  }

  // Cases filtering
  const filterButtons = document.querySelectorAll('.case-filters button');
  const caseItems = document.querySelectorAll('.case-item');
  filterButtons.forEach(b=>b.addEventListener('click',()=>{
    filterButtons.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f = b.getAttribute('data-filter');
    caseItems.forEach(it=>{
      const ok = f==='all' || it.getAttribute('data-category')===f;
      it.style.display = ok? 'grid':'none';
    });
    trackEvent('Cases','filter',f||'all');
  }));

  // RuTube embeds
  const rutubeIds = [
    '74cffbbaef5caf1043813eb5e9c4362f',
    'b46817a47f3796204dfd06b814c25e17',
    'b918021f6cb0962e465b0ba0adf57a76',
    'c66903c6fd67a9bef55c3915db46ad05',
    'dcf1e99b5d0d0c9705a1b097fa691689',
    '544d970dc02a6dc2d96255b1f79d38aa',
    'e940e0fa8f703a920ca2f4b8f15dff43',
    '8d6a630f18044da9d67f7514b2e810f6',
    'af38430a9e2673028a48d9b7d9b53c9a',
    'a8efb366f4910b22fc68d2cd22b3db08',
    'e8a1d38afabc62bde9857357c1a97315',
    '39d6b75a64428d4780e7401753e2c168',
    '29e435126a3e109d14ac3a4456454933',
    '57aac7897318d9d12d4d10c33ccd996e',
    'd22b38eef78a151f8626be672dc572c5',
    'e70f39116df886968e3be00183c3e44b',
    'b46817a47f3796204dfd06b814c25e17',
    'd03501b3fd1be1ee5a4edb9e8584108c', 
    '73ef71914b1e8963aa77470a008177f0',         
    'ee6c7615808b67c9bab912839a5e7f57',
    '22b617ed91972e1294b1da31d37c0e1f',
    'dcf1e99b5d0d0c9705a1b097fa691689',
    'e22cdc6831b09a7c0fa5a962ee36cc6f', 
    '4c2a97327d3147bf79be95b3b37bd4da',
    'f80f3e1fd5e95a340d7fdfc2d7c88d99',
    '14f3935da1db9f67ab243c1b8ba14d52',
    'b2014bcad200196454a25c40ce93e7d0',
    'ec6f206f3445b09929373ad404bff3b7',
    '8f9da5b32c206451bef89155a703f860',
    '2620229e172a5d2172778e673e98f0ce',
    '74cffbbaef5caf1043813eb5e9c4362f',
    'b918021f6cb0962e465b0ba0adf57a76',
    '544d970dc02a6dc2d96255b1f79d38aa',
    '9935e7033fdff417efc6fb0c4ef906eb',
    'a7d34dd4befbec9a8a331d2abd800a5c',
    'cd7e38638c9a578ec2f9dfda64c6df3a',
    'bf373100ce030e8e61c9a99c470edadc',
    '47dcb638a7d00a1d9f674c0b905c5be4',
    '4907656e12e52aa5afb47ea0b656140d',
    'bd567efa5f684a9ff002b6d9f131f5c0',
    '20a5a6f6e6cd53ab7c1c0c3de7a6eab9',
    '1532f8781bb990992105095b41b2c137',
    'c66903c6fd67a9bef55c3915db46ad05',
    'efa5b2fd7db2dd99eaeaff3dcfc901c1',
    'd25ee5555f677a89edcbfb09ab3c697d', 
    'e348029d9b7f531396ea9aee45274dd9',
    'd98b1c27e63466a12fe3026a72a9cf0b',
    '3a5bf44c15d8126813c82b48c9076440',
    '36592b40dce5eb6c43c6ef77b95539e3',
    '26337a5b6f4bd39c6c09c55d952c3258',

  ];

  // Очистка и удаление дубликатов (убираем хвостовой "/" и пробелы)
  const rutubeIdsUnique = Array.from(new Set(
    rutubeIds
      .filter(Boolean)
      .map(id => String(id).trim().replace(/\/$/, ''))
  ));

  // Сегментация видео по категориям (industry по умолчанию, all в конце)
  const videoSegments = {
    industry: [                              // Производство/Industry
      'dcf1e99b5d0d0c9705a1b097fa691689',
      'e940e0fa8f703a920ca2f4b8f15dff43',
      'd98b1c27e63466a12fe3026a72a9cf0b',
      '9935e7033fdff417efc6fb0c4ef906eb',
      '2620229e172a5d2172778e673e98f0ce',
      'e22cdc6831b09a7c0fa5a962ee36cc6f',
      '544d970dc02a6dc2d96255b1f79d38aa',
      'c66903c6fd67a9bef55c3915db46ad05',
      '57aac7897318d9d12d4d10c33ccd996e',
      'a8efb366f4910b22fc68d2cd22b3db08',
      'e8a1d38afabc62bde9857357c1a97315',
      'af38430a9e2673028a48d9b7d9b53c9a',
      'e70f39116df886968e3be00183c3e44b'
    ],
    brand: [                                // Brand Films/Презентация о компании
      'bd567efa5f684a9ff002b6d9f131f5c0',
      '544d970dc02a6dc2d96255b1f79d38aa',
      '74cffbbaef5caf1043813eb5e9c4362f',
      'f80f3e1fd5e95a340d7fdfc2d7c88d99',
      'e22cdc6831b09a7c0fa5a962ee36cc6f',
      '57aac7897318d9d12d4d10c33ccd996e',
      'a8efb366f4910b22fc68d2cd22b3db08',
      'e940e0fa8f703a920ca2f4b8f15dff43',
      'ee6c7615808b67c9bab912839a5e7f57',
      '8d6a630f18044da9d67f7514b2e810f6',
      'dcf1e99b5d0d0c9705a1b097fa691689',
      '73ef71914b1e8963aa77470a008177f0',
      'e70f39116df886968e3be00183c3e44b',
      'e8a1d38afabc62bde9857357c1a97315',
      'af38430a9e2673028a48d9b7d9b53c9a'
    ],
    events: [                               // Event/мероприятия
      'ec6f206f3445b09929373ad404bff3b7',
      'd03501b3fd1be1ee5a4edb9e8584108c',
      '39d6b75a64428d4780e7401753e2c168',
      '26337a5b6f4bd39c6c09c55d952c3258',
      '74cffbbaef5caf1043813eb5e9c4362f',
      '14f3935da1db9f67ab243c1b8ba14d52',
      '22b617ed91972e1294b1da31d37c0e1f',
      '3a5bf44c15d8126813c82b48c9076440',
      '1532f8781bb990992105095b41b2c137',
      'cd7e38638c9a578ec2f9dfda64c6df3a'
    ],
    travel: [                               // Travel/Путешествия
      '3a5bf44c15d8126813c82b48c9076440',
      'efa5b2fd7db2dd99eaeaff3dcfc901c1',
      '20a5a6f6e6cd53ab7c1c0c3de7a6eab9',
      '47dcb638a7d00a1d9f674c0b905c5be4',
      'b918021f6cb0962e465b0ba0adf57a76'
    ],
    sport: [                                // Sport car/Авто
      '1532f8781bb990992105095b41b2c137',
      '4907656e12e52aa5afb47ea0b656140d',
      'bf373100ce030e8e61c9a99c470edadc',
      '544d970dc02a6dc2d96255b1f79d38aa',
      'b918021f6cb0962e465b0ba0adf57a76',
      '8f9da5b32c206451bef89155a703f860',
      'e22cdc6831b09a7c0fa5a962ee36cc6f',
      '4c2a97327d3147bf79be95b3b37bd4da'
    ],
    pr: [                                   // PR/Имиджевая реклама
      'bf373100ce030e8e61c9a99c470edadc',
      'cd7e38638c9a578ec2f9dfda64c6df3a',
      'e940e0fa8f703a920ca2f4b8f15dff43',
      'b46817a47f3796204dfd06b814c25e17',
      'd98b1c27e63466a12fe3026a72a9cf0b',
      '8d6a630f18044da9d67f7514b2e810f6',
      'bd567efa5f684a9ff002b6d9f131f5c0',
      '29e435126a3e109d14ac3a4456454933',
      'e348029d9b7f531396ea9aee45274dd9',
      'd22b38eef78a151f8626be672dc572c5',
      '57aac7897318d9d12d4d10c33ccd996e',
      '22b617ed91972e1294b1da31d37c0e1f',
      '2620229e172a5d2172778e673e98f0ce',
      '74cffbbaef5caf1043813eb5e9c4362f',
      '9935e7033fdff417efc6fb0c4ef906eb',
      'a7d34dd4befbec9a8a331d2abd800a5c',
      'b2014bcad200196454a25c40ce93e7d0',
      'b918021f6cb0962e465b0ba0adf57a76',
      'd03501b3fd1be1ee5a4edb9e8584108c',
      'e22cdc6831b09a7c0fa5a962ee36cc6f'
    ],
    other: [],                              // Пока пусто - ждем список ID
    all: rutubeIdsUnique                    // Все 48 видео (в конце для оптимизации)
  };

  function loadRuTubePortfolio(){
    const list = document.querySelector('#home-cases');
    if(!list) return;
    list.innerHTML = '';
    
    // Показываем 6 видео в сетке как в референсе
    const preview = rutubeIdsUnique.slice(0, 6);
    
    preview.forEach((id, index)=>{
      const article = document.createElement('article');
      article.className = 'case-item';
      const video = document.createElement('div');
      video.className = 'case-video';
      const iframe = document.createElement('iframe');
      iframe.src = `https://rutube.ru/play/embed/${id}/`;
      iframe.allow = 'clipboard-write; autoplay';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      video.appendChild(iframe);
      article.appendChild(video);
      list.appendChild(article);
    });
  }
  loadRuTubePortfolio();

  // Передача всех ID на страницу портфолио
  document.querySelectorAll('[data-action="open-portfolio"]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      try{ 
        sessionStorage.setItem('rutubeIdsUnique', JSON.stringify(rutubeIdsUnique));
        sessionStorage.setItem('videoSegments', JSON.stringify(videoSegments));
      }catch(e){}
      // если хотим сразу перейти на страницу
      if(btn.tagName.toLowerCase()==='a' || btn.getAttribute('href')) return;
      window.location.href = 'portfolio.html';
    });
  });

  // CRM webhook stub
  async function sendToCRM(lead){
    try{
      // Заглушка: сюда добавим your-webhook-url
      // await fetch('https://your-crm-webhook', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)});
      console.log('CRM lead:', lead);
    }catch(err){
      console.error('CRM error', err);
    }
  }

  // Analytics stub (GA4/Я.Метрика добавим позже)
  function trackEvent(category, action, label){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:'custom_event', category, action, label});
    // Яндекс.Метрика пример:
    // if(window.ym){ ym(YOUR_ID, 'reachGoal', action, {category,label}); }
  }
  window.trackEvent = trackEvent;

  // Submit mini-brief
  if(briefForm){
    briefForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const formData = new FormData(briefForm);
      const lead = Object.fromEntries(formData.entries());
      lead.source = (new URLSearchParams(location.search)).toString(); // UTM
      await sendToCRM(lead);
      trackEvent('Lead','mini_brief_submit','modal');
      briefModal.close();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    });
  }
})();


