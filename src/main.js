import './style.css'

// ─── SVG ICONS ──────────────────────────────────────────────────────────────
const ic = {
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,

  wave: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,12 5,12 7,5 9,19 11,12 13,12 15,8 17,16 19,12 22,12"/></svg>`,

  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,

  chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>`,

  bed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,

  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="12" y1="6" x2="16" y2="6"/><line x1="12" y1="10" x2="16" y2="10"/></svg>`,

  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
}

// ─── FEATURE CARDS ───────────────────────────────────────────────────────────
const features = [
  { icon: ic.wave,    title: 'Dream Recording',    desc: 'Capture every detail of your dreams automatically while you sleep. Nothing is lost to the fog of morning.' },
  { icon: ic.sparkle, title: 'AI Interpretation',  desc: 'Advanced AI analyzes thousands of dream symbols, emotions, and patterns to give you deeply personal insights.' },
  { icon: ic.chart,   title: 'Pattern Recognition',desc: 'Track recurring themes, symbols, and feelings across weeks to reveal what your subconscious is trying to say.' },
  { icon: ic.bed,     title: 'Sleep Analysis',     desc: 'Monitor your REM cycles and correlate sleep stages with dream intensity and clarity for deeper understanding.' },
  { icon: ic.book,    title: 'Dream Journal',      desc: 'A beautiful, searchable journal that organizes all your dream experiences with AI-generated summaries and art.' },
  { icon: ic.globe,   title: 'Dream Community',    desc: 'Explore shared dreams from around the world. Find comfort and wonder in the collective human dreamscape.' },
]

const featuresHTML = features.map(f => `
  <div class="feature-card">
    <div class="feature-icon">${f.icon}</div>
    <h3 class="feature-card-title">${f.title}</h3>
    <p class="feature-card-desc">${f.desc}</p>
  </div>`).join('')

// ─── DREAM GALLERY CARDS ─────────────────────────────────────────────────────
const dreamCards = [
  {
    tag: 'Adventure',
    title: 'The Midnight Ocean',
    desc: 'Swimming through crystalline waters that stretched beyond the horizon, guided by bioluminescent jellyfish…',
    bg: 'linear-gradient(160deg, #0f2027 0%, #203a43 45%, #2c5364 100%)',
    accent: 'rgba(32, 178, 170, 0.5)',
  },
  {
    tag: 'Lucid Dream',
    title: 'City of Light',
    desc: 'I became aware I was dreaming, and began reshaping the entire city skyline with a single thought…',
    bg: 'linear-gradient(160deg, #1a0533 0%, #3d1a78 50%, #5c2d9e 100%)',
    accent: 'rgba(167, 139, 250, 0.5)',
  },
  {
    tag: 'Symbolic',
    title: 'Forest of Whispers',
    desc: 'Ancient trees whispered secrets as I walked barefoot on glowing moss under a moonlit canopy…',
    bg: 'linear-gradient(160deg, #071a10 0%, #1a3a2a 50%, #0d4a1e 100%)',
    accent: 'rgba(34, 197, 94, 0.4)',
  },
]

const dreamCardsHTML = dreamCards.map(c => `
  <div class="dream-card">
    <div class="dream-card-bg" style="background: ${c.bg};">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 30%, ${c.accent}, transparent 70%);"></div>
    </div>
    <div class="dream-card-overlay">
      <span class="dream-tag">${c.tag}</span>
      <h3 class="dream-card-title">${c.title}</h3>
      <p class="dream-card-desc">${c.desc}</p>
    </div>
  </div>`).join('')

// ─── AI ORB VISUAL ───────────────────────────────────────────────────────────
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

// ─── PATTERN SVG VISUAL ───────────────────────────────────────────────────────
// Simulated multi-week dream intensity chart + constellation overlay
const patternVisual = `
  <svg class="pattern-svg" width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid lines -->
    <line x1="40" y1="30"  x2="380" y2="30"  stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="90"  x2="380" y2="90"  stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <line x1="40" y1="210" x2="380" y2="210" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

    <!-- Y-axis labels -->
    <text x="28" y="34"  fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">High</text>
    <text x="28" y="154" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">Mid</text>
    <text x="28" y="214" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="end" font-family="Inter,sans-serif">Low</text>

    <!-- X-axis labels -->
    <text x="80"  y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 1</text>
    <text x="160" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 2</text>
    <text x="240" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 3</text>
    <text x="320" y="248" fill="rgba(255,255,255,0.3)" font-size="10" text-anchor="middle" font-family="Inter,sans-serif">Week 4</text>

    <!-- Dream intensity line 1 (vivid dreams) -->
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

    <!-- Area fill -->
    <path d="M40,170 C80,150 100,60 160,80 S240,50 280,70 S340,90 380,50 L380,220 L40,220 Z"
          fill="url(#areaGrad)" class="p-line p-line-anim"/>

    <!-- Line 1 (main dream curve) -->
    <path d="M40,170 C80,150 100,60 160,80 S240,50 280,70 S340,90 380,50"
          stroke="url(#lineGrad1)" stroke-width="2.5" stroke-linecap="round"
          class="p-line p-line-anim" fill="none"/>

    <!-- Line 2 (REM cycles) -->
    <path d="M40,190 C70,185 100,140 140,150 S200,110 240,120 S300,145 380,100"
          stroke="url(#lineGrad2)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 4"
          class="p-line p-line-anim-2" fill="none"/>

    <!-- Highlight dots on line 1 -->
    <circle class="p-dot" cx="40"  cy="170" r="5" fill="#a78bfa" style="animation-delay:1.8s"/>
    <circle class="p-dot" cx="160" cy="80"  r="5" fill="#a78bfa" style="animation-delay:2.1s"/>
    <circle class="p-dot" cx="280" cy="70"  r="7" fill="#c084fc" style="animation-delay:2.4s"/>
    <circle class="p-dot" cx="380" cy="50"  r="5" fill="#e879f9" style="animation-delay:2.7s"/>

    <!-- Glow on peak -->
    <circle cx="380" cy="50" r="14" fill="#e879f9" fill-opacity="0.15" class="p-dot" style="animation-delay:2.7s"/>

    <!-- Tooltip annotation -->
    <g class="p-dot" style="animation-delay:2.9s">
      <rect x="288" y="38" width="88" height="26" rx="6" fill="#1c1c1e" stroke="rgba(167,139,250,0.4)" stroke-width="1"/>
      <text x="332" y="55" fill="#a78bfa" font-size="11" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">Peak Vivid</text>
    </g>
  </svg>`

// ─── STEPS ────────────────────────────────────────────────────────────────────
const steps = [
  { n: '01', title: 'Place & Connect',   desc: 'Place the DreamSense device on your nightstand before you sleep. It pairs wirelessly with your phone in seconds.' },
  { n: '02', title: 'Sleep Naturally',   desc: 'Our sensors detect your REM sleep stages and begin capturing dream signals — no effort required from you.' },
  { n: '03', title: 'Wake & Discover',   desc: 'Open the app each morning to read your detailed, AI-interpreted dream report. Relive it like it just happened.' },
]

const stepsHTML = steps.map(s => `
  <div class="step">
    <div class="step-num">${s.n}</div>
    <h3 class="step-title">${s.title}</h3>
    <p class="step-desc">${s.desc}</p>
  </div>`).join('')

// ─── BUILD PAGE HTML ──────────────────────────────────────────────────────────
document.getElementById('app').innerHTML = `

<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      ${ic.moon}
      DreamSense
    </a>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#gallery">Explore</a></li>
      <li><a href="#how-it-works">How it Works</a></li>
    </ul>
    <a href="#" class="btn btn-primary nav-cta" style="font-size:13px;padding:7px 18px;">Start Dreaming</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-content">
    <p class="hero-eyebrow">Introducing DreamSense</p>
    <h1 class="hero-title">Sleep.<br>Dream.<br><em>Discover.</em></h1>
    <p class="hero-subtitle">DreamSense connects to your mind while you sleep, capturing and interpreting your dreams with the power of AI. Wake up knowing exactly what you experienced.</p>
    <div class="hero-actions">
      <a href="#" class="btn btn-primary btn-lg">Start Dreaming</a>
      <a href="#features" class="btn btn-ghost btn-lg">Learn more</a>
    </div>
  </div>
</section>

<!-- STATEMENT -->
<section class="section section-dark-2">
  <div class="container text-center">
    <span class="section-label reveal">Dream Technology</span>
    <h2 class="section-title reveal">Your dreams,<br>finally understood.</h2>
    <p class="section-subtitle reveal">Wake up knowing exactly what you experienced. DreamSense captures every scene, emotion, and symbol while you sleep — and delivers it to you each morning.</p>
  </div>
</section>

<!-- FEATURES GRID -->
<section class="section section-dark" id="features">
  <div class="container">
    <div class="text-center">
      <span class="section-label reveal">Features</span>
      <h2 class="section-title reveal">Everything your<br>dreams deserve.</h2>
      <p class="section-subtitle reveal">Powerful tools designed around the science of sleep and the mystery of dreams.</p>
    </div>
    <div class="features-grid">
      ${features.map((f, i) => `
        <div class="feature-card reveal rd${i + 1}">
          <div class="feature-icon">${f.icon}</div>
          <h3 class="feature-card-title">${f.title}</h3>
          <p class="feature-card-desc">${f.desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- SPLIT: AI INTERPRETATION -->
<section class="section-dark-2" style="padding:0;" id="ai">
  <div class="split">
    <div class="split-text reveal">
      <span class="section-label">AI Interpretation</span>
      <h2 class="section-title">Dreams decoded<br>in seconds.</h2>
      <p class="section-subtitle">Our AI analyzes thousands of dream patterns, symbols, and emotions to deliver a deeply personal interpretation of what your dreams really mean.</p>
      <a href="#" class="btn btn-secondary" style="margin-top:28px;">Learn more</a>
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
      <span class="section-label">Pattern Recognition</span>
      <h2 class="section-title">Discover what<br>repeats.</h2>
      <p class="section-subtitle">Track recurring themes, emotions, and symbols across weeks and months. Understanding your dream patterns reveals powerful insights about your subconscious mind.</p>
      <a href="#" class="btn btn-secondary" style="margin-top:28px;">Learn more</a>
    </div>
  </div>
</section>

<!-- DREAM GALLERY -->
<section class="section section-dark-2" id="gallery">
  <div class="container">
    <div class="text-center">
      <span class="section-label reveal">Dream Gallery</span>
      <h2 class="section-title reveal">Explore the<br>dreamscape.</h2>
      <p class="section-subtitle reveal">Discover how others experience the world of dreams. Browse shared interpretations and find meaning in the collective unconscious.</p>
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
      <span class="section-label reveal" style="color:#7c3aed;">How it Works</span>
      <h2 class="section-title reveal" style="color:var(--text-dark);">Three steps to<br>understanding.</h2>
      <p class="section-subtitle reveal" style="color:var(--text-gray-dark);">DreamSense is remarkably simple. You sleep — we listen — you discover.</p>
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
    <h2 class="cta-title reveal">Start your dream<br>journey today.</h2>
    <p class="cta-subtitle reveal">Join millions of dreamers who wake up with clarity, insight, and wonder every single morning.</p>
    <div class="cta-actions reveal">
      <a href="#" class="btn btn-primary btn-lg">Start Dreaming</a>
      <a href="#how-it-works" class="btn btn-ghost btn-lg">Watch the Demo</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">Copyright &copy; 2026 DreamSense Inc. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</footer>
`

// ─── STARFIELD CANVAS ─────────────────────────────────────────────────────────
function initStars() {
  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let width, height, stars, animId

  function resize() {
    width = canvas.width = canvas.offsetWidth
    height = canvas.height = canvas.offsetHeight
    spawnStars()
  }

  function spawnStars() {
    stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.006 + 0.002,
    }))
  }

  function draw() {
    ctx.clearRect(0, 0, width, height)

    // Subtle nebula glow
    const grd = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.65)
    grd.addColorStop(0, 'rgba(100, 58, 200, 0.14)')
    grd.addColorStop(0.5, 'rgba(88, 28, 180, 0.06)')
    grd.addColorStop(1, 'transparent')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, width, height)

    // Second glow offset
    const grd2 = ctx.createRadialGradient(width * 0.3, height * 0.4, 0, width * 0.3, height * 0.4, width * 0.45)
    grd2.addColorStop(0, 'rgba(192, 132, 252, 0.08)')
    grd2.addColorStop(1, 'transparent')
    ctx.fillStyle = grd2
    ctx.fillRect(0, 0, width, height)

    stars.forEach(s => {
      s.phase += s.speed
      const alpha = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(s.phase))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.fill()
    })

    animId = requestAnimationFrame(draw)
  }

  resize()
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId)
    resize()
    draw()
  })
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
initStars()
initReveal()
