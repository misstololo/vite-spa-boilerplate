import './style.css'

// ─── STATE ────────────────────────────────────────────────────────────────────
let lang = 'en'
let _animId = null
let _resizeHandler = null

// ─── SVG ICONS ───────────────────────────────────────────────────────────────
const ic = {
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,

  wave: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,12 5,12 7,5 9,19 11,12 13,12 15,8 17,16 19,12 22,12"/></svg>`,

  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,

  chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>`,

  bed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,

  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="12" y1="6" x2="16" y2="6"/><line x1="12" y1="10" x2="16" y2="10"/></svg>`,

  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
}

// ─── STATIC VISUALS (no translatable text) ───────────────────────────────────
const orbVisual = `
  <div class="orb-wrap">
    <div class="orb-ring orb-ring-3"></div>
    <div class="orb-ring orb-ring-2"></div>
    <div class="orb-ring orb-ring-1"></div>
    <div class="orb-sphere">
      <div class="orb-highlight"></div>
    </div>
    <div class="orb-dot orb-dot-1"></div>
    <div class="orb-dot orb-dot-2"></div>
    <div class="orb-dot orb-dot-3"></div>
  </div>`

const patternVisual = `
  <svg class="pattern-svg" width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="30"  x2="380" y2="30"  stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="90"  x2="380" y2="90"  stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="210" x2="380" y2="210" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <text x="28" y="34"  fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">High</text>
    <text x="28" y="154" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">Mid</text>
    <text x="28" y="214" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">Low</text>
    <text x="80"  y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 1</text>
    <text x="160" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 2</text>
    <text x="240" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 3</text>
    <text x="320" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 4</text>
    <defs>
      <linearGradient id="lineGrad1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#a78bfa"/>
        <stop offset="100%" stop-color="#c084fc"/>
      </linearGradient>
      <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#60a5fa"/>
        <stop offset="100%" stop-color="#34d399"/>
      </linearGradient>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#a78bfa" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M40,170 C80,150 100,60 160,80 S240,50 280,70 S340,90 380,50 L380,220 L40,220 Z"
          fill="url(#areaGrad)" class="p-line p-line-anim"/>
    <path d="M40,170 C80,150 100,60 160,80 S240,50 280,70 S340,90 380,50"
          stroke="url(#lineGrad1)" stroke-width="2.5" stroke-linecap="round"
          class="p-line p-line-anim" fill="none"/>
    <path d="M40,190 C70,185 100,140 140,150 S200,110 240,120 S300,145 380,100"
          stroke="url(#lineGrad2)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 4"
          class="p-line p-line-anim-2" fill="none"/>
    <circle class="p-dot" cx="40"  cy="170" r="5" fill="#a78bfa" style="animation-delay:1.8s"/>
    <circle class="p-dot" cx="160" cy="80"  r="5" fill="#a78bfa" style="animation-delay:2.1s"/>
    <circle class="p-dot" cx="280" cy="70"  r="7" fill="#c084fc" style="animation-delay:2.4s"/>
    <circle class="p-dot" cx="380" cy="50"  r="5" fill="#e879f9" style="animation-delay:2.7s"/>
    <circle cx="380" cy="50" r="14" fill="#e879f9" fill-opacity="0.15" class="p-dot" style="animation-delay:2.7s"/>
    <g class="p-dot" style="animation-delay:2.9s">
      <rect x="288" y="38" width="88" height="26" rx="6" fill="#1c1c1e" stroke="rgba(167,139,250,0.4)" stroke-width="1"/>
      <text x="332" y="55" fill="#a78bfa" font-size="11" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">Peak Vivid</text>
    </g>
  </svg>`

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: {
    langBtn: 'עברית',
    nav: {
      features: 'Features',
      explore: 'Explore',
      howItWorks: 'How it Works',
      cta: 'Start Dreaming',
    },
    hero: {
      eyebrow: 'Introducing DreamSense',
      line1: 'Sleep.',
      line2: 'Dream.',
      line3: 'Discover.',
      subtitle: 'DreamSense connects to your mind while you sleep, capturing and interpreting your dreams with the power of AI. Wake up knowing exactly what you experienced.',
      cta1: 'Start Dreaming',
      cta2: 'Learn more',
    },
    statement: {
      label: 'Dream Technology',
      title: 'Your dreams,<br>finally understood.',
      subtitle: 'Wake up knowing exactly what you experienced. DreamSense captures every scene, emotion, and symbol while you sleep — and delivers it to you each morning.',
    },
    features: {
      label: 'Features',
      title: 'Everything your<br>dreams deserve.',
      subtitle: 'Powerful tools designed around the science of sleep and the mystery of dreams.',
      cards: [
        { title: 'Dream Recording',    desc: 'Capture every detail of your dreams automatically while you sleep. Nothing is lost to the fog of morning.' },
        { title: 'AI Interpretation',  desc: 'Advanced AI analyzes thousands of dream symbols, emotions, and patterns to give you deeply personal insights.' },
        { title: 'Pattern Recognition',desc: 'Track recurring themes, symbols, and feelings across weeks to reveal what your subconscious is trying to say.' },
        { title: 'Sleep Analysis',     desc: 'Monitor your REM cycles and correlate sleep stages with dream intensity and clarity for deeper understanding.' },
        { title: 'Dream Journal',      desc: 'A beautiful, searchable journal that organizes all your dream experiences with AI-generated summaries and art.' },
        { title: 'Dream Community',    desc: 'Explore shared dreams from around the world. Find comfort and wonder in the collective human dreamscape.' },
      ],
    },
    aiSplit: {
      label: 'AI Interpretation',
      title: 'Dreams decoded<br>in seconds.',
      subtitle: 'Our AI analyzes thousands of dream patterns, symbols, and emotions to deliver a deeply personal interpretation of what your dreams really mean.',
      btn: 'Learn more',
    },
    patternSplit: {
      label: 'Pattern Recognition',
      title: 'Discover what<br>repeats.',
      subtitle: 'Track recurring themes, emotions, and symbols across weeks and months. Understanding your dream patterns reveals powerful insights about your subconscious mind.',
      btn: 'Learn more',
    },
    gallery: {
      label: 'Dream Gallery',
      title: 'Explore the<br>dreamscape.',
      subtitle: 'Discover how others experience the world of dreams. Browse shared interpretations and find meaning in the collective unconscious.',
      cards: [
        { tag: 'Adventure',   title: 'The Midnight Ocean',    desc: 'Swimming through crystalline waters that stretched beyond the horizon, guided by bioluminescent jellyfish…' },
        { tag: 'Lucid Dream', title: 'City of Light',         desc: 'I became aware I was dreaming, and began reshaping the entire city skyline with a single thought…' },
        { tag: 'Symbolic',    title: 'Forest of Whispers',    desc: 'Ancient trees whispered secrets as I walked barefoot on glowing moss under a moonlit canopy…' },
      ],
    },
    howItWorks: {
      label: 'How it Works',
      title: 'Three steps to<br>understanding.',
      subtitle: 'DreamSense is remarkably simple. You sleep — we listen — you discover.',
      steps: [
        { n: '01', title: 'Place & Connect',  desc: 'Place the DreamSense device on your nightstand before you sleep. It pairs wirelessly with your phone in seconds.' },
        { n: '02', title: 'Sleep Naturally',  desc: 'Our sensors detect your REM sleep stages and begin capturing dream signals — no effort required from you.' },
        { n: '03', title: 'Wake & Discover',  desc: 'Open the app each morning to read your detailed, AI-interpreted dream report. Relive it like it just happened.' },
      ],
    },
    cta: {
      title: 'Start your dream<br>journey today.',
      subtitle: 'Join millions of dreamers who wake up with clarity, insight, and wonder every single morning.',
      cta1: 'Start Dreaming',
      cta2: 'Watch the Demo',
    },
    footer: {
      copy: 'Copyright &copy; 2026 DreamSense Inc. All rights reserved.',
      links: ['Privacy', 'Terms', 'Support', 'Contact'],
    },
  },

  he: {
    langBtn: 'English',
    nav: {
      features: 'תכונות',
      explore: 'חקור',
      howItWorks: 'איך זה עובד',
      cta: 'התחל לחלום',
    },
    hero: {
      eyebrow: 'מציגים: DreamSense',
      line1: 'שינה.',
      line2: 'חלום.',
      line3: 'גילוי.',
      subtitle: 'DreamSense מתחברת לתודעתך בזמן שאתה ישן, לוכדת ומפרשת את חלומותיך בכוח הבינה המלאכותית. התעורר כל בוקר ודע בדיוק מה חווית.',
      cta1: 'התחל לחלום',
      cta2: 'למידע נוסף',
    },
    statement: {
      label: 'טכנולוגיית חלומות',
      title: 'החלומות שלך,<br>סוף סוף מובנים.',
      subtitle: 'התעורר וגלה בדיוק מה חווית. DreamSense לוכדת כל סצנה, רגש וסמל בזמן שאתה ישן — ומגישה לך אותם בכל בוקר מחדש.',
    },
    features: {
      label: 'תכונות',
      title: 'כל מה שחלומותיך<br>ראויים לו.',
      subtitle: 'כלים עוצמתיים שנבנו סביב מדע השינה ומסתורין החלומות.',
      cards: [
        { title: 'הקלטת חלומות', desc: 'לכוד כל פרט מחלומותיך אוטומטית בזמן שאתה ישן. שום דבר לא יאבד בערפל הבוקר.' },
        { title: 'פרשנות AI',    desc: 'בינה מלאכותית מתקדמת מנתחת אלפי סמלי חלומות, רגשות ודפוסים ומספקת תובנות עמוקות ואישיות.' },
        { title: 'זיהוי דפוסים', desc: 'עקוב אחר נושאים חוזרים, סמלים ורגשות לאורך שבועות כדי לחשוף מה תת-ההכרה שלך מנסה לומר.' },
        { title: 'ניתוח שינה',   desc: 'עקוב אחר מחזורי ה-REM שלך וקשר שלבי שינה עם עצמת החלום ובהירותו להבנה עמוקה יותר.' },
        { title: 'יומן חלומות',  desc: 'יומן יפהפה וניתן לחיפוש שמארגן את כל חוויות החלום שלך עם סיכומים ואמנות שנוצרו על ידי AI.' },
        { title: 'קהילת חולמים', desc: 'גלה חלומות משותפים מרחבי העולם. מצא נחמה ופלא בנוף החלומות האנושי המשותף.' },
      ],
    },
    aiSplit: {
      label: 'פרשנות AI',
      title: 'חלומות מפוענחים<br>תוך שניות.',
      subtitle: 'הבינה המלאכותית שלנו מנתחת אלפי דפוסי חלומות, סמלים ורגשות כדי להעניק לך פרשנות עמוקה ואישית של מה שחלומותיך באמת אומרים.',
      btn: 'למידע נוסף',
    },
    patternSplit: {
      label: 'זיהוי דפוסים',
      title: 'גלה את<br>מה שחוזר.',
      subtitle: 'עקוב אחר נושאים, רגשות וסמלים חוזרים לאורך שבועות וחודשים. הבנת דפוסי החלום שלך חושפת תובנות עוצמתיות על תת-ההכרה.',
      btn: 'למידע נוסף',
    },
    gallery: {
      label: 'גלריית חלומות',
      title: 'חקור את<br>נוף החלומות.',
      subtitle: 'גלה כיצד אחרים חווים את עולם החלומות. עיין בפרשנויות משותפות ומצא משמעות בתת-המודע הקולקטיבי.',
      cards: [
        { tag: 'הרפתקה',    title: 'האוקיינוס של חצות', desc: 'שחייה במים גבישיים שהשתרעו מעבר לאופק, בהנחיית מדוזות ביולומינסנטיות…' },
        { tag: 'חלום צלול', title: 'עיר האור',           desc: 'הבנתי שאני חולם, והתחלתי לעצב מחדש את קו הרקיע של העיר כולה במחשבה אחת בלבד…' },
        { tag: 'סמלי',      title: 'יער הלחישות',        desc: 'עצים עתיקים לחשו סודות כשהלכתי יחפה על אזוב זוהר תחת חופת ירח מואר…' },
      ],
    },
    howItWorks: {
      label: 'איך זה עובד',
      title: 'שלושה שלבים<br>להבנה.',
      subtitle: 'DreamSense פשוטה להפליא. אתה ישן — אנחנו מקשיבים — אתה מגלה.',
      steps: [
        { n: '01', title: 'הנח וחבר',         desc: 'הנח את מכשיר DreamSense על שידת הלילה לפני השינה. הוא מתחבר באלחוט לטלפון שלך תוך שניות.' },
        { n: '02', title: 'ישן באופן טבעי',   desc: 'החיישנים שלנו מזהים את שלבי שינת ה-REM שלך ומתחילים ללכוד אותות חלומות — ללא כל מאמץ מצדך.' },
        { n: '03', title: 'התעורר וגלה',      desc: 'פתח את האפליקציה כל בוקר כדי לקרוא את דוח החלום המפורט שלך, מפורש על ידי AI. חווה אותו מחדש כאילו זה עתה קרה.' },
      ],
    },
    cta: {
      title: 'התחל את מסע<br>החלומות שלך היום.',
      subtitle: 'הצטרף למיליוני חולמים שמתעוררים עם בהירות, תובנה ופלא כל בוקר.',
      cta1: 'התחל לחלום',
      cta2: 'צפה בהדגמה',
    },
    footer: {
      copy: 'זכויות יוצרים &copy; 2026 DreamSense Inc. כל הזכויות שמורות.',
      links: ['פרטיות', 'תנאים', 'תמיכה', 'צור קשר'],
    },
  },
}

// ─── FEATURE META (icon + animation, language-independent) ───────────────────
const featureIcons = [ic.wave, ic.sparkle, ic.chart, ic.bed, ic.book, ic.globe]
const featureAnims = ['wave', 'sparkle', 'chart', 'bed', 'book', 'globe']

const dreamCardBgs = [
  'linear-gradient(160deg, #0f2027 0%, #203a43 45%, #2c5364 100%)',
  'linear-gradient(160deg, #1a0533 0%, #3d1a78 50%, #5c2d9e 100%)',
  'linear-gradient(160deg, #071a10 0%, #1a3a2a 50%, #0d4a1e 100%)',
]
const dreamCardAccents = [
  'rgba(32, 178, 170, 0.5)',
  'rgba(167, 139, 250, 0.5)',
  'rgba(34, 197, 94, 0.4)',
]

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderPage() {
  const tx = T[lang]

  const featuresHTML = tx.features.cards.map((c, i) => `
    <div class="feature-card reveal rd${i + 1}">
      <div class="feature-icon icon-anim-${featureAnims[i]}">${featureIcons[i]}</div>
      <h3 class="feature-card-title">${c.title}</h3>
      <p class="feature-card-desc">${c.desc}</p>
    </div>`).join('')

  const dreamCardsHTML = tx.gallery.cards.map((c, i) => `
    <div class="dream-card">
      <div class="dream-card-bg" style="background: ${dreamCardBgs[i]};">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 30%, ${dreamCardAccents[i]}, transparent 70%);"></div>
      </div>
      <div class="dream-card-overlay">
        <span class="dream-tag">${c.tag}</span>
        <h3 class="dream-card-title">${c.title}</h3>
        <p class="dream-card-desc">${c.desc}</p>
      </div>
    </div>`).join('')

  const stepsHTML = tx.howItWorks.steps.map(s => `
    <div class="step">
      <div class="step-num">${s.n}</div>
      <h3 class="step-title">${s.title}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>`).join('')

  document.getElementById('app').innerHTML = `

<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      ${ic.moon}
      DreamSense
    </a>
    <ul class="nav-links">
      <li><a href="#features">${tx.nav.features}</a></li>
      <li><a href="#gallery">${tx.nav.explore}</a></li>
      <li><a href="#how-it-works">${tx.nav.howItWorks}</a></li>
    </ul>
    <button id="lang-btn" class="lang-btn">${tx.langBtn}</button>
    <a href="#" class="btn btn-primary nav-cta" style="font-size:13px;padding:7px 18px;">${tx.nav.cta}</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-content">
    <p class="hero-eyebrow">${tx.hero.eyebrow}</p>
    <h1 class="hero-title">${tx.hero.line1}<br>${tx.hero.line2}<br><em>${tx.hero.line3}</em></h1>
    <p class="hero-subtitle">${tx.hero.subtitle}</p>
    <div class="hero-actions">
      <a href="#" class="btn btn-primary btn-lg">${tx.hero.cta1}</a>
      <a href="#features" class="btn btn-ghost btn-lg">${tx.hero.cta2}</a>
    </div>
  </div>
</section>

<!-- STATEMENT -->
<section class="section section-dark-2">
  <div class="container text-center">
    <span class="section-label reveal">${tx.statement.label}</span>
    <h2 class="section-title reveal">${tx.statement.title}</h2>
    <p class="section-subtitle reveal">${tx.statement.subtitle}</p>
  </div>
</section>

<!-- FEATURES GRID -->
<section class="section section-dark" id="features">
  <div class="container">
    <div class="text-center">
      <span class="section-label reveal">${tx.features.label}</span>
      <h2 class="section-title reveal">${tx.features.title}</h2>
      <p class="section-subtitle reveal">${tx.features.subtitle}</p>
    </div>
    <div class="features-grid">
      ${featuresHTML}
    </div>
  </div>
</section>

<!-- SPLIT: AI INTERPRETATION -->
<section class="section-dark-2" style="padding:0;" id="ai">
  <div class="split">
    <div class="split-text reveal">
      <span class="section-label">${tx.aiSplit.label}</span>
      <h2 class="section-title">${tx.aiSplit.title}</h2>
      <p class="section-subtitle">${tx.aiSplit.subtitle}</p>
      <a href="#" class="btn btn-secondary" style="margin-top:28px;">${tx.aiSplit.btn}</a>
    </div>
    <div class="split-visual" style="background:linear-gradient(135deg,#06000f,#0f0020,#050010);">
      ${orbVisual}
    </div>
  </div>
</section>

<!-- SPLIT: PATTERN RECOGNITION -->
<section class="section-dark" style="padding:0;">
  <div class="split">
    <div class="split-visual" style="background:linear-gradient(135deg,#000510,#00081a,#020810);">
      ${patternVisual}
    </div>
    <div class="split-text reveal">
      <span class="section-label">${tx.patternSplit.label}</span>
      <h2 class="section-title">${tx.patternSplit.title}</h2>
      <p class="section-subtitle">${tx.patternSplit.subtitle}</p>
      <a href="#" class="btn btn-secondary" style="margin-top:28px;">${tx.patternSplit.btn}</a>
    </div>
  </div>
</section>

<!-- DREAM GALLERY -->
<section class="section section-dark-2" id="gallery">
  <div class="container">
    <div class="text-center">
      <span class="section-label reveal">${tx.gallery.label}</span>
      <h2 class="section-title reveal">${tx.gallery.title}</h2>
      <p class="section-subtitle reveal">${tx.gallery.subtitle}</p>
    </div>
    <div class="dreams-grid reveal">
      ${dreamCardsHTML}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section section-light" id="how-it-works">
  <div class="container">
    <div class="text-center">
      <span class="section-label reveal" style="color:#7c3aed;">${tx.howItWorks.label}</span>
      <h2 class="section-title reveal" style="color:var(--text-dark);">${tx.howItWorks.title}</h2>
      <p class="section-subtitle reveal" style="color:var(--text-gray-dark);">${tx.howItWorks.subtitle}</p>
    </div>
    <div class="steps reveal">
      ${stepsHTML}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="cta-glow"></div>
  <div class="cta-content">
    <h2 class="cta-title reveal">${tx.cta.title}</h2>
    <p class="cta-subtitle reveal">${tx.cta.subtitle}</p>
    <div class="cta-actions reveal">
      <a href="#" class="btn btn-primary btn-lg">${tx.cta.cta1}</a>
      <a href="#how-it-works" class="btn btn-ghost btn-lg">${tx.cta.cta2}</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">${tx.footer.copy}</p>
    <ul class="footer-links">
      ${tx.footer.links.map(l => `<li><a href="#">${l}</a></li>`).join('')}
    </ul>
  </div>
</footer>
`

  initLangToggle()
  initReveal()
}

// ─── LANG TOGGLE ──────────────────────────────────────────────────────────────
function initLangToggle() {
  document.getElementById('lang-btn').addEventListener('click', () => {
    lang = lang === 'en' ? 'he' : 'en'
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    renderPage()
    initStars()
  })
}

// ─── STARFIELD CANVAS ─────────────────────────────────────────────────────────
function initStars() {
  if (_animId) { cancelAnimationFrame(_animId); _animId = null }
  if (_resizeHandler) { window.removeEventListener('resize', _resizeHandler); _resizeHandler = null }

  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let width, height, stars

  function resize() {
    width = canvas.width = canvas.offsetWidth
    height = canvas.height = canvas.offsetHeight
    spawnStars()
  }

  function spawnStars() {
    stars = Array.from({ length: 220 }, () => {
      const bright = Math.random() < 0.15
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: bright ? Math.random() * 1.6 + 0.9 : Math.random() * 1.2 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.003,
        vx: (Math.random() - 0.5) * 0.07,
        vy: (Math.random() - 0.5) * 0.04,
        bright,
      }
    })
  }

  function draw() {
    ctx.clearRect(0, 0, width, height)

    const grd = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.65)
    grd.addColorStop(0, 'rgba(100, 58, 200, 0.14)')
    grd.addColorStop(0.5, 'rgba(88, 28, 180, 0.06)')
    grd.addColorStop(1, 'transparent')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, width, height)

    const grd2 = ctx.createRadialGradient(width * 0.3, height * 0.4, 0, width * 0.3, height * 0.4, width * 0.45)
    grd2.addColorStop(0, 'rgba(192, 132, 252, 0.08)')
    grd2.addColorStop(1, 'transparent')
    ctx.fillStyle = grd2
    ctx.fillRect(0, 0, width, height)

    stars.forEach(s => {
      s.phase += s.speed
      s.x += s.vx
      s.y += s.vy
      if (s.x < -2) s.x = width + 2
      if (s.x > width + 2) s.x = -2
      if (s.y < -2) s.y = height + 2
      if (s.y > height + 2) s.y = -2

      const alpha = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(s.phase))

      if (s.bright) {
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(210,190,255,${alpha * 0.9})`
      }

      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = s.bright
        ? `rgba(235,225,255,${alpha})`
        : `rgba(255,255,255,${alpha})`
      ctx.fill()

      if (s.bright) {
        ctx.shadowBlur = 0
        ctx.shadowColor = 'transparent'
      }
    })

    _animId = requestAnimationFrame(draw)
  }

  resize()
  _resizeHandler = () => { cancelAnimationFrame(_animId); resize(); draw() }
  window.addEventListener('resize', _resizeHandler)
  draw()
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
renderPage()
initStars()
