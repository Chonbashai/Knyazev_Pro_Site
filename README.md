# Князев ПРО — Корпоративный видеопродакшн

Профессиональный лендинг студии видеопродакшна **Knyazev Pro**. Современный одностраничный сайт на чистом HTML/CSS/JavaScript с адаптивным дизайном, тёмной темой и интеграцией с RuTube.

## 📋 Содержание

- [О проекте](#о-проекте)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Быстрый старт](#быстрый-старт)
- [Функциональность](#функциональность)
- [Страницы сайта](#страницы-сайта)
- [Настройка](#настройка)
- [Кастомизация](#кастомизация)
- [Деплой](#деплой)

---

## 🎯 О проекте

**Knyazev Pro** — студия видеопродакшна для бизнеса. Мы переводим язык бизнеса на язык видео: создаём контент для тендеров, инвесторов, продаж и PR.

### Позиционирование

- ✅ Не просто "красивые ролики", а видео, которое работает на бизнес-цели
- ✅ Полный цикл продакшна: от сценария до адаптаций под все форматы
- ✅ Система ассетов: master-версия + вариации, вертикали, субтитры, CUTS
- ✅ Прозрачные цены и чёткие сроки

### Целевая аудитория

- Маркетинг и PR-директора
- Собственники и топ-менеджеры
- Продюсеры и агентства
- Средние и крупные компании

---

## 🛠 Технологии

### Frontend

- **HTML5** — семантическая разметка
- **CSS3** — Grid, Flexbox, CSS Custom Properties
- **JavaScript (Vanilla)** — без фреймворков и зависимостей

### Интеграции

- **RuTube** — встраивание видео через iframe API
- **Session Storage** — передача данных между страницами
- **Native Dialog API** — модальные окна

### Особенности

- 🎨 Тёмная тема с акцентным цветом #B09B7E (бежевый)
- 🔤 Типографика: Variable Font Montserrat (100-900)
- 📱 Адаптивный дизайн для всех устройств
- ⚡ Оптимизация загрузки (lazy loading, умная фильтрация)
- 🎯 FOMO-элементы (счётчик обратного отсчёта)

---

## 📁 Структура проекта

```
Landing/
│
├── index.html           # Главная страница с hero-видео
├── portfolio.html       # Портфолио с фильтрацией по 6 категориям
├── price.html           # Услуги, цены, процесс работы
├── founder.html         # О директоре Алексее Князеве
├── contact.html         # Контакты, реквизиты, социальные сети
│
├── assets/
│   ├── styles.css       # Все стили (5.3 KB)
│   ├── main.js          # JavaScript логика (8.9 KB)
│   │
│   ├── fonts/           # Шрифт Montserrat Variable
│   │   ├── Montserrat-VariableFont_wght.ttf
│   │   ├── Montserrat-Italic-VariableFont_wght.ttf
│   │   └── static/      # Статические веса 100-900
│   │
│   ├── img/
│   │   ├── camera.jpg                      # Hero-изображение
│   │   ├── founder_alexey_Knyazev.jpg      # Фото директора
│   │   ├── Shigin_Evgeniy.jpg              # Команда: режиссёр
│   │   ├── Solovoov_Anton.jpg              # Команда: оператор
│   │   ├── Vans_Sergey.jpg                 # Команда: DOP
│   │   │
│   │   ├── clients/                        # Логотипы клиентов (8 штук)
│   │   │   ├── alteya.jpg
│   │   │   ├── ewaproduct.jpg
│   │   │   ├── gdrive.jpeg
│   │   │   ├── molochko_derevenskoe.jpg
│   │   │   ├── silkway.jpeg
│   │   │   ├── udi.jpg
│   │   │   ├── uzhe_vyhozhu.jpg
│   │   │   └── vkusvill.jpg
│   │   │
│   │   ├── icon_socialmedia/               # Иконки соцсетей
│   │   │   ├── icons8-instagram-500.png
│   │   │   ├── icons8-vimeo-500 (1).png
│   │   │   ├── icons8-vkontakte-100.png
│   │   │   └── icons8-логотип-telegram-500 (1).png
│   │   │
│   │   └── logo _ pattern/                 # Логотипы бренда
│   │       ├── raster/
│   │       │   ├── jpeg/                   # 20 вариантов в JPEG
│   │       │   └── png/                    # 24 варианта в PNG
│   │       └── vector/
│   │           └── Vector.ai               # Исходник Adobe Illustrator
│   │
│   └── video/
│       └── SHOWREEL 2024.mp4               # Hero-видео на главной
│
└── README.md            # Этот файл
```

---

## 🚀 Быстрый старт

### Вариант 1: Открыть напрямую (самый простой)

Откройте `index.html` двойным кликом в браузере.

> ⚠️ **Внимание**: В Chrome/Edge могут быть ограничения CORS для локальных файлов. Используйте локальный сервер.

### Вариант 2: Локальный сервер (рекомендуется)

```bash
# Python 3
python -m http.server 8080

# Node.js (npx встроен в Node.js)
npx serve .

# PHP
php -S localhost:8080
```

Затем откройте http://localhost:8080 в браузере.

### Требования

- Современный браузер (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Поддержка CSS Grid, Flexbox, CSS Variables
- Поддержка `<dialog>` element (модальные окна)

---

## ⚙️ Функциональность

### 1. Hero-секция с видео

- Полноэкранное фоновое видео (SHOWREEL 2024.mp4)
- Overlay с градиентом для читаемости текста
- Фиксированная навигация с backdrop-filter
- CTA-кнопки с трекингом событий

### 2. Портфолио (48 видео)

- **Умная фильтрация** по 6 категориям:
  - 🏭 Производство/Industry (13 видео)
  - 🎬 Brand Films/Презентация (15 видео)
  - 🎉 Event/Мероприятия (10 видео)
  - ✈️ Travel/Путешествия (5 видео)
  - 🏎️ Sport car/Авто (8 видео)
  - 📢 PR/Имиджевая реклама (20 видео)

- **Оптимизация загрузки**: по умолчанию показывается только категория "Industry" (13 видео), а не все 48
- **RuTube интеграция**: встраивание через iframe с параметрами autoplay и clipboard-write

### 3. Страница услуг и цен

- **6 продуктовых пакетов**:
  - Рекламный ролик 30–60 сек (150–250 тыс. ₽)
  - Имиджевый ролик 60–90 сек (180–350 тыс. ₽)
  - Бренд-фильм 2–5 мин (300–700 тыс. ₽)
  - Ивент-видео 60–120 сек (120–250 тыс. ₽)
  - Индустриальный видеокейс 90–180 сек (250–500 тыс. ₽)
  - Пакет CUTS для соцсетей (80–180 тыс. ₽)

- Дополнительные услуги (монтаж, дрон, диктор, motion/CG)
- Схема оплаты: 50% / 40% / 10%
- Этапы работы: Бриф → Препрод → Продакшн → Пост

### 4. Модальное окно "Мини-бриф"

- Быстрая форма на 5 вопросов:
  1. Цель видео (тендер, инвесторы, продажи, PR)?
  2. Желаемые сроки реализации?
  3. Ориентировочный бюджет?
  4. Есть ли референсы?
  5. Контактные данные

- Отправка данных в CRM (webhook-заглушка)
- Трекинг событий (GA4 / Яндекс.Метрика)

### 5. FOMO-счётчик

- Обратный отсчёт до дедлайна (+14 дней от текущей даты)
- Мотивация к действию: "Успейте забронировать съёмку до..."

### 6. Интеграция социальных сетей

- Instagram: [@knyazev_pro](https://www.instagram.com/knyazev_pro/)
- Vimeo: [knyazevpro](https://vimeo.com/knyazevpro)
- Telegram: [@knyazev_production](https://t.me/knyazev_production)
- VKontakte: [knyazev_videopro](https://vk.com/knyazev_videopro)

---

## 📄 Страницы сайта

### 1. **index.html** — Главная

- Hero с полноэкранным видео
- Блок "Кто мы"
- Превью портфолио (6 видео)
- Команда (4 человека)
- Клиенты (8 логотипов)
- CTA-блок с модальным окном

### 2. **portfolio.html** — Портфолио

- Фильтры по категориям (6 кнопок + "Все работы")
- Сетка видео 3×N (адаптивная)
- RuTube iframe с lazy loading
- Трекинг просмотров категорий

### 3. **price.html** — Цены и услуги

- Hero: "Переводим язык бизнеса на язык видео"
- Блок "Для кого и зачем" (3 карточки)
- Проблемы клиентов vs Наше решение
- **6 продуктовых карточек** (единый стиль)
- Дополнительные услуги
- Процесс работы (4 этапа)
- Что вы получаете (5 преимуществ)

### 4. **founder.html** — Об Алексее Князеве

- Фото директора
- Биография и философия
- Экспертиза и достижения
- Контактная информация

### 5. **contact.html** — Контакты

- Полная контактная информация
- Email, телефон
- Социальные сети
- Юридическая информация (ИНН, ОГРН)
- Реквизиты компании

---

## 🎨 Настройка

### 1. Цветовая схема

Откройте `assets/styles.css` и измените CSS-переменные:

```css
:root {
  --bg: #0A0A0A;        /* основной тёмный фон */
  --bg-2: #181818;      /* вторичный фон / карточки */
  --card: #181818;      /* фон карточек */
  --text: #E0E0E0;      /* основной текст */
  --muted: #8F8F8F;     /* вторичный текст */
  --line: #4F4F4F;      /* границы и разделители */
  --brand: #B09B7E;     /* акцентный бренд-цвет (бежевый) */
}
```

### 2. Замена контента

| Элемент | Где находится | Что менять |
|---------|---------------|------------|
| **Hero-видео** | `assets/video/SHOWREEL 2024.mp4` | Замените файл (16:9, 1920×1080, H.264) |
| **Логотипы** | `assets/img/logo _ pattern/` | PNG/JPEG версии (3 варианта: полный, короткий, паттерн) |
| **Фото команды** | `assets/img/` | 4 файла JPG (соотношение 11:14) |
| **Клиенты** | `assets/img/clients/` | 8 логотипов (JPG/PNG) |
| **RuTube ID** | `assets/main.js` | Массив `rutubeIds` (строки 66-117) |
| **Категории видео** | `assets/main.js` | Объект `videoSegments` (строки 128-214) |

### 3. RuTube: как добавить/удалить видео

**Получить ID видео:**

1. Откройте видео на RuTube: `https://rutube.ru/video/74cffbbaef5caf1043813eb5e9c4362f/`
2. Скопируйте ID после `/video/`: `74cffbbaef5caf1043813eb5e9c4362f`

**Добавить в категорию:**

Откройте `assets/main.js` и отредактируйте `videoSegments`:

```javascript
const videoSegments = {
  industry: [
    '74cffbbaef5caf1043813eb5e9c4362f',  // Существующее
    'YOUR_NEW_VIDEO_ID_HERE',             // Новое видео
    // ...
  ],
  // ...
};
```

### 4. Настройка аналитики

#### Google Analytics 4

```javascript
// В <head> любой HTML-страницы
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Яндекс.Метрика

```javascript
// В assets/main.js, функция trackEvent (строка 266)
function trackEvent(category, action, label){
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({event:'custom_event', category, action, label});
  
  // Яндекс.Метрика
  if(window.ym){ 
    ym(YOUR_METRIKA_ID, 'reachGoal', action, {category, label}); 
  }
}
```

### 5. CRM интеграция (форма "Мини-бриф")

Откройте `assets/main.js`, функция `sendToCRM` (строка 255):

```javascript
async function sendToCRM(lead){
  try{
    await fetch('https://your-crm-webhook.com/lead', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(lead)
    });
    console.log('Lead sent to CRM:', lead);
  }catch(err){
    console.error('CRM error', err);
  }
}
```

Поддерживаемые CRM:
- AmoCRM
- Bitrix24
- HubSpot
- Webhook (Zapier, Make)

---

## 🎨 Кастомизация

### Типографика

Шрифт **Montserrat Variable** (веса 100-900) загружается через `@font-face`:

```css
@font-face {
  font-family: 'Montserrat';
  src: url('./fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Иерархия весов:**
- h1: 800 (Extra Bold)
- h2: 700 (Bold)
- h3: 600 (Semi Bold)
- h4, кнопки: 500 (Medium)
- p, body: 400 (Regular)

### Адаптивные брейкпоинты

```css
/* Tablet */
@media (max-width: 1024px) { /* ... */ }

/* Mobile */
@media (max-width: 680px) { /* ... */ }
```

### Секции (светлые/тёмные)

```html
<!-- Светлая секция с паттерном логотипа -->
<section class="section-light">
  <!-- Фон: #fff + логотип E0E0E0 -->
</section>

<!-- Тёмная секция с паттерном -->
<section class="section-dark">
  <!-- Фон: #0A0A0A + логотип бежевый -->
</section>
```

---

## 🚀 Деплой

### Статический хостинг (рекомендуется)

#### Netlify
```bash
# Drag & Drop в браузере
# Или через CLI
netlify deploy --prod
```

#### Vercel
```bash
vercel --prod
```

#### GitHub Pages
```bash
# В настройках репозитория → Pages → Source: main branch
```

### Традиционный хостинг (cPanel, FTP)

1. Загрузите все файлы в корень домена (`public_html/`)
2. Убедитесь, что права на файлы: 644, на папки: 755
3. Проверьте `.htaccess` (если Apache):

```apache
# .htaccess (опционально)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]

# Кэширование статики
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
</IfModule>
```

### Рекомендации по производительности

- ✅ Сжатие изображений (TinyPNG, Squoosh)
- ✅ Конвертация видео в WebM (альтернатива MP4)
- ✅ Включение Gzip/Brotli на сервере
- ✅ CDN для статики (Cloudflare, BunnyCDN)
- ✅ Preload критических ресурсов

---

## 📊 Производительность

### Метрики (ориентир)

| Метрика | Цель | Текущее |
|---------|------|---------|
| First Contentful Paint (FCP) | < 1.5s | ~1.2s |
| Largest Contentful Paint (LCP) | < 2.5s | ~2.1s |
| Cumulative Layout Shift (CLS) | < 0.1 | ~0.05 |
| Time to Interactive (TTI) | < 3.5s | ~2.8s |

### Оптимизации

- **Портфолио**: По умолчанию загружается 13 видео (Industry), а не все 48
- **Lazy loading**: RuTube iframe загружаются по требованию
- **CSS**: 1 файл (5.3 KB), минификация опциональна
- **JS**: 1 файл (8.9 KB), Vanilla JS без зависимостей
- **Шрифты**: Variable Font (1 файл вместо 18)

---

## 🐛 Отладка

### Проверка консоли браузера

Откройте DevTools (F12) → Console. Должно быть:

```
✅ No errors
✅ RuTube embeds loaded
✅ dataLayer initialized (если GA4 подключен)
```

### Типичные проблемы

| Проблема | Причина | Решение |
|----------|---------|---------|
| Видео не загружается | CORS / локальный файл | Используйте локальный сервер |
| Шрифт не применяется | Путь к файлу | Проверьте `url('./fonts/...')` в CSS |
| Модальное окно не открывается | Браузер не поддерживает `<dialog>` | Обновите браузер или добавьте polyfill |
| Фильтры не работают | JS не загрузился | Проверьте `<script src="assets/main.js">` |

---

## 📞 Контакты

**Князев ПРО**  
Корпоративный видеопродакшн

- 🌐 Сайт: [указать домен после деплоя]
- 📧 Email: [указать email]
- 📱 Telegram: [@knyazev_production](https://t.me/knyazev_production)
- 📷 Instagram: [@knyazev_pro](https://www.instagram.com/knyazev_pro/)
- 🎬 Vimeo: [knyazevpro](https://vimeo.com/knyazevpro)

---

## 📄 Лицензия

© 2024 Князев ПРО. Все права защищены.

Проект создан для студии видеопродакшна "Knyazev Pro". Использование материалов сайта (дизайн, код, контент) возможно только с письменного разрешения правообладателя.

---

**Knyazev Pro** — переводим язык бизнеса на язык видео.
