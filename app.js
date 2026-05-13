// ============ ICON LIBRARY (SVG paths) ============
const ICONS = {
  default: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3"/><circle cx="50" cy="50" r="15" fill="currentColor"/></svg>',
  essere: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.3"/><circle cx="50" cy="50" r="20" fill="currentColor"/></svg>',
  avere: '<svg viewBox="0 0 100 100"><rect x="25" y="35" width="50" height="40" rx="6" fill="currentColor"/><path d="M30 35 L30 25 Q30 15 50 15 Q70 15 70 25 L70 35" stroke="currentColor" stroke-width="5" fill="none"/></svg>',
  fare: '<svg viewBox="0 0 100 100"><rect x="40" y="30" width="20" height="40" fill="currentColor"/><rect x="20" y="60" width="60" height="10" fill="currentColor"/><circle cx="50" cy="25" r="6" fill="currentColor"/></svg>',
  stare: '<svg viewBox="0 0 100 100"><rect x="20" y="60" width="60" height="20" fill="currentColor" opacity="0.4"/><circle cx="50" cy="40" r="20" fill="currentColor"/></svg>',
  andare: '<svg viewBox="0 0 100 100"><path d="M20 50 L70 50 M55 35 L70 50 L55 65" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  potere: '<svg viewBox="0 0 100 100"><path d="M55 15 L25 55 L45 55 L40 85 L75 45 L55 45 Z" fill="currentColor"/></svg>',
  volere: '<svg viewBox="0 0 100 100"><path d="M50 80 L20 50 Q15 35 30 30 Q42 30 50 42 Q58 30 70 30 Q85 35 80 50 Z" fill="currentColor"/></svg>',
  dovere: '<svg viewBox="0 0 100 100"><path d="M50 15 L80 30 L80 55 Q80 75 50 85 Q20 75 20 55 L20 30 Z" fill="currentColor"/></svg>',
  dire: '<svg viewBox="0 0 100 100"><path d="M20 30 Q20 20 30 20 L70 20 Q80 20 80 30 L80 55 Q80 65 70 65 L45 65 L30 80 L30 65 Q20 65 20 55 Z" fill="currentColor"/></svg>',
  parlare: '<svg viewBox="0 0 100 100"><ellipse cx="35" cy="40" rx="20" ry="15" fill="currentColor" opacity="0.5"/><ellipse cx="65" cy="55" rx="20" ry="15" fill="currentColor"/></svg>',
  sapere: '<svg viewBox="0 0 100 100"><path d="M50 15 Q70 15 75 35 Q75 50 65 55 L65 70 L35 70 L35 55 Q25 50 25 35 Q30 15 50 15 Z" fill="currentColor"/><rect x="38" y="75" width="24" height="6" fill="currentColor"/></svg>',
  conoscere: '<svg viewBox="0 0 100 100"><circle cx="50" cy="40" r="18" fill="currentColor"/><path d="M20 85 Q20 60 50 60 Q80 60 80 85" fill="currentColor"/></svg>',
  chiedere: '<svg viewBox="0 0 100 100"><path d="M30 35 Q30 20 50 20 Q70 20 70 35 Q70 50 55 55 L55 65 L45 65 L45 55 Q30 50 30 35" fill="currentColor"/><circle cx="50" cy="78" r="5" fill="currentColor"/></svg>',
  rispondere: '<svg viewBox="0 0 100 100"><path d="M25 35 L75 35 L75 60 L55 60 L40 75 L40 60 L25 60 Z" fill="currentColor"/></svg>',
  vedere: '<svg viewBox="0 0 100 100"><path d="M15 50 Q35 25 50 25 Q65 25 85 50 Q65 75 50 75 Q35 75 15 50 Z" fill="currentColor"/><circle cx="50" cy="50" r="10" fill="white"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>',
  sentire: '<svg viewBox="0 0 100 100"><path d="M55 25 Q35 25 30 50 Q30 70 50 80 Q60 80 60 70 Q55 60 55 50 Q55 35 60 30 Z" fill="currentColor"/><path d="M70 35 Q80 50 70 65" stroke="currentColor" stroke-width="3" fill="none"/></svg>',
  pensare: '<svg viewBox="0 0 100 100"><path d="M30 30 Q25 20 40 20 Q50 15 60 20 Q75 20 75 35 Q80 45 70 50 Q70 60 60 60 L40 60 Q30 60 30 50 Q20 45 30 30 Z" fill="currentColor"/><circle cx="35" cy="70" r="4" fill="currentColor"/><circle cx="30" cy="80" r="3" fill="currentColor"/></svg>',
  credere: '<svg viewBox="0 0 100 100"><path d="M50 20 L55 40 L75 40 L60 53 L65 73 L50 60 L35 73 L40 53 L25 40 L45 40 Z" fill="currentColor"/></svg>',
  capire: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3"/><path d="M35 50 L45 60 L65 40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  venire: '<svg viewBox="0 0 100 100"><path d="M80 50 L30 50 M45 35 L30 50 L45 65" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dare: '<svg viewBox="0 0 100 100"><path d="M30 50 Q30 35 50 35 Q70 35 70 50" stroke="currentColor" stroke-width="6" fill="none"/><path d="M60 45 L70 50 L60 55" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="30" cy="55" r="8" fill="currentColor"/></svg>',
  prendere: '<svg viewBox="0 0 100 100"><path d="M30 30 L30 60 Q30 70 40 70 L60 70 Q70 70 70 60 L70 30" stroke="currentColor" stroke-width="6" fill="none"/><circle cx="50" cy="20" r="8" fill="currentColor"/></svg>',
  mettere: '<svg viewBox="0 0 100 100"><rect x="20" y="60" width="60" height="20" fill="currentColor" opacity="0.4"/><rect x="35" y="35" width="30" height="25" fill="currentColor"/><path d="M50 15 L50 30 M40 25 L50 35 L60 25" stroke="currentColor" stroke-width="3" fill="none"/></svg>',
  portare: '<svg viewBox="0 0 100 100"><circle cx="35" cy="35" r="10" fill="currentColor"/><path d="M25 50 L25 75 L45 75 L45 50" fill="currentColor"/><rect x="55" y="40" width="30" height="35" rx="3" fill="currentColor" opacity="0.6"/></svg>',
  trovare: '<svg viewBox="0 0 100 100"><circle cx="42" cy="42" r="22" stroke="currentColor" stroke-width="6" fill="none"/><path d="M58 58 L78 78" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
  vivere: '<svg viewBox="0 0 100 100"><path d="M50 15 L80 35 L80 80 L55 80 L55 60 L45 60 L45 80 L20 80 L20 35 Z" fill="currentColor"/></svg>',
  lavorare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="22" stroke="currentColor" stroke-width="5" fill="none"/><circle cx="50" cy="50" r="6" fill="currentColor"/><path d="M50 25 L50 35 M50 65 L50 75 M25 50 L35 50 M65 50 L75 50" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>',
  mangiare: '<svg viewBox="0 0 100 100"><path d="M25 30 L25 80 M30 25 L30 80 M22 25 Q22 35 30 35" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="65" cy="50" r="22" stroke="currentColor" stroke-width="4" fill="none"/><circle cx="65" cy="50" r="12" fill="currentColor"/></svg>',
  bere: '<svg viewBox="0 0 100 100"><path d="M30 25 L70 25 L65 80 L35 80 Z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="3"/><path d="M33 45 L67 45 L65 75 L35 75 Z" fill="currentColor"/></svg>',
  piacere: '<svg viewBox="0 0 100 100"><path d="M50 80 L20 50 Q15 35 30 30 Q42 30 50 42 Q58 30 70 30 Q85 35 80 50 Z" fill="currentColor"/><path d="M40 55 Q50 65 60 55" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',
  uscire: '<svg viewBox="0 0 100 100"><rect x="20" y="20" width="40" height="60" stroke="currentColor" stroke-width="5" fill="none"/><path d="M40 50 L80 50 M65 35 L80 50 L65 65" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  tornare: '<svg viewBox="0 0 100 100"><path d="M30 50 Q30 25 55 25 Q80 25 80 50 Q80 75 55 75" stroke="currentColor" stroke-width="6" fill="none"/><path d="M40 60 L30 50 L40 40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  aspettare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="5" fill="none"/><path d="M50 30 L50 50 L62 58" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/></svg>',
  cercare: '<svg viewBox="0 0 100 100"><circle cx="42" cy="42" r="22" stroke="currentColor" stroke-width="6" fill="none"/><circle cx="42" cy="42" r="6" fill="currentColor"/><path d="M58 58 L78 78" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
  chiamare: '<svg viewBox="0 0 100 100"><path d="M25 30 Q25 25 30 25 L40 25 Q45 25 47 30 L52 45 Q53 50 48 53 L43 56 Q50 70 60 75 L63 70 Q66 65 71 66 L80 71 Q83 73 83 78 L80 85 Q72 92 60 88 Q35 80 22 55 Q15 40 25 30 Z" fill="currentColor"/></svg>',
  scrivere: '<svg viewBox="0 0 100 100"><path d="M20 75 L25 80 L70 35 L65 30 Z" fill="currentColor"/><path d="M70 35 L80 25 L75 20 L65 30 Z" fill="currentColor" opacity="0.7"/><path d="M20 75 L18 85 L28 83 Z" fill="currentColor"/></svg>',
  leggere: '<svg viewBox="0 0 100 100"><path d="M15 30 L50 30 L50 75 L15 75 Z" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3"/><path d="M50 30 L85 30 L85 75 L50 75 Z" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3"/><line x1="50" y1="30" x2="50" y2="75" stroke="currentColor" stroke-width="3"/></svg>',
  comprare: '<svg viewBox="0 0 100 100"><path d="M25 35 L75 35 L70 80 L30 80 Z" stroke="currentColor" stroke-width="4" fill="currentColor" opacity="0.3"/><path d="M35 35 Q35 20 50 20 Q65 20 65 35" stroke="currentColor" stroke-width="4" fill="none"/></svg>',
  diventare: '<svg viewBox="0 0 100 100"><circle cx="30" cy="50" r="12" fill="currentColor" opacity="0.4"/><path d="M45 50 L65 50 M55 42 L65 50 L55 58" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polygon points="78,38 85,50 78,62 65,50" fill="currentColor"/></svg>',
  sembrare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="4 3"/><circle cx="42" cy="45" r="3" fill="currentColor"/><circle cx="58" cy="45" r="3" fill="currentColor"/><path d="M40 60 Q50 65 60 60" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',
  amare: '<svg viewBox="0 0 100 100"><path d="M50 80 L18 50 Q12 32 28 28 Q42 28 50 42 Q58 28 72 28 Q88 32 82 50 Z" fill="currentColor"/></svg>',
  giocare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="4" fill="none"/><path d="M50 22 L50 78 M22 50 L78 50 M30 30 L70 70 M70 30 L30 70" stroke="currentColor" stroke-width="3" opacity="0.6"/></svg>',
  dormire: '<svg viewBox="0 0 100 100"><path d="M75 50 Q75 70 50 70 Q30 70 25 55 Q35 60 50 55 Q65 50 75 35 Q78 42 75 50 Z" fill="currentColor"/></svg>',
  cominciare: '<svg viewBox="0 0 100 100"><polygon points="30,20 30,80 78,50" fill="currentColor"/></svg>',
  finire: '<svg viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="currentColor"/></svg>',
  ricordare: '<svg viewBox="0 0 100 100"><path d="M50 15 Q70 15 75 35 Q75 55 60 60 L60 75 L40 75 L40 60 Q25 55 25 35 Q30 15 50 15 Z" fill="currentColor"/><circle cx="50" cy="40" r="4" fill="white"/></svg>',
  studiare: '<svg viewBox="0 0 100 100"><path d="M20 30 L50 25 L80 30 L80 70 L50 75 L20 70 Z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="3"/><line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" stroke-width="3"/></svg>',
  guardare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="32" fill="currentColor"/><circle cx="50" cy="50" r="18" fill="white"/><circle cx="50" cy="50" r="10" fill="currentColor"/></svg>',
  ascoltare: '<svg viewBox="0 0 100 100"><path d="M55 22 Q35 22 28 45 Q26 65 45 78 Q55 78 55 70 Q50 60 50 50 Q50 35 55 28 Z" fill="currentColor"/><path d="M68 32 Q80 50 68 68 M75 25 Q92 50 75 75" stroke="currentColor" stroke-width="3" fill="none"/></svg>',
  arrivare: '<svg viewBox="0 0 100 100"><path d="M50 75 L50 25 M35 40 L50 25 L65 40" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="25" y1="80" x2="75" y2="80" stroke="currentColor" stroke-width="4"/></svg>',
  conoscersi: '<svg viewBox="0 0 100 100"><circle cx="35" cy="40" r="14" fill="currentColor"/><circle cx="65" cy="40" r="14" fill="currentColor" opacity="0.6"/><path d="M15 78 Q15 60 35 60 Q42 60 50 65 Q58 60 65 60 Q85 60 85 78" fill="currentColor" opacity="0.4"/></svg>',
  // New verbs
  pulire: '<svg viewBox="0 0 100 100"><path d="M30 75 L30 35 L40 25 L60 25 L70 35 L70 75 Z" fill="currentColor" opacity="0.4"/><path d="M40 25 L40 15 L60 15 L60 25" stroke="currentColor" stroke-width="4" fill="none"/><circle cx="42" cy="55" r="3" fill="white"/><circle cx="58" cy="50" r="3" fill="white"/></svg>',
  correre: '<svg viewBox="0 0 100 100"><circle cx="60" cy="22" r="8" fill="currentColor"/><path d="M55 35 L40 50 L30 75 L40 78 L48 60 L60 50 L75 65 L82 60 L65 42 Z" fill="currentColor"/></svg>',
  accendere: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="currentColor"/><path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50 M25 25 L32 32 M68 68 L75 75 M75 25 L68 32 M32 68 L25 75" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  spegnere: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="4" fill="none"/><line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
  sedersi: '<svg viewBox="0 0 100 100"><circle cx="50" cy="22" r="8" fill="currentColor"/><path d="M30 80 L30 50 L70 50 L70 80" stroke="currentColor" stroke-width="5" fill="none"/><path d="M40 50 L40 35 L60 35 L60 50" fill="currentColor"/></svg>',
  'stare in piedi': '<svg viewBox="0 0 100 100"><circle cx="50" cy="20" r="8" fill="currentColor"/><rect x="46" y="30" width="8" height="40" fill="currentColor"/><path d="M40 75 L46 70 L46 85 L40 85 Z M60 75 L54 70 L54 85 L60 85 Z" fill="currentColor"/></svg>',
  fermarsi: '<svg viewBox="0 0 100 100"><polygon points="35,20 65,20 80,35 80,65 65,80 35,80 20,65 20,35" fill="currentColor"/><text x="50" y="58" text-anchor="middle" fill="white" font-size="20" font-weight="bold">STOP</text></svg>',
  cucinare: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="65" rx="32" ry="8" fill="currentColor"/><path d="M22 55 L22 65 Q22 75 50 75 Q78 75 78 65 L78 55 Z" fill="currentColor" opacity="0.6"/><path d="M30 50 Q35 35 40 50 M48 45 Q53 30 58 45 M65 50 Q70 38 75 50" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
  indossare: '<svg viewBox="0 0 100 100"><path d="M30 30 L40 20 L60 20 L70 30 L80 35 L75 50 L70 50 L70 80 L30 80 L30 50 L25 50 L20 35 Z" fill="currentColor"/></svg>',
  lavare: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="4" fill="none"/><circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.4"/><path d="M40 45 Q50 55 60 45" stroke="currentColor" stroke-width="3" fill="none"/></svg>'
};

// ============ ICONS (keep your existing ICONS object — paste it here) ============
//

// ============ ICONS LIBRARY ============
// Paste your existing ICONS = { ... } object from the previous app.js HERE
// (The full library with default, essere, avere, fare, etc. — keep it exactly as before)

// ⚠️ KEEP YOUR EXISTING ICONS OBJECT — I'm not retyping it to save space
// It starts with: const ICONS = { default: '<svg ...>', essere: '<svg ...>', ... };

// ============ SPEECH ENGINE ============
const speech = {
  supported: 'speechSynthesis' in window,
  italianVoice: null,
  rate: 1.0,
  currentBtn: null,

  init() {
    if (!this.supported) return;
    // Voice list loads asynchronously in some browsers
    this.loadVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoice();
    }
  },

  loadVoice() {
    const voices = speechSynthesis.getVoices();
    // Prefer Italian-Italy voices; fall back to any "it" locale
    this.italianVoice =
      voices.find(v => v.lang === 'it-IT' && /alice|luca|federica|paolo/i.test(v.name)) ||
      voices.find(v => v.lang === 'it-IT') ||
      voices.find(v => v.lang.startsWith('it')) ||
      null;
  },

  hasItalian() {
    return this.supported && (this.italianVoice !== null || speechSynthesis.getVoices().some(v => v.lang.startsWith('it')));
  },

  speak(text, btn = null) {
    if (!this.supported) return;
    speechSynthesis.cancel(); // stop anything in progress

    if (this.currentBtn) this.currentBtn.classList.remove('speaking');
    if (btn) {
      btn.classList.add('speaking');
      this.currentBtn = btn;
    }

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'it-IT';
    u.rate = this.rate;
    u.pitch = 1.0;
    if (this.italianVoice) u.voice = this.italianVoice;

    u.onend = () => {
      if (btn) btn.classList.remove('speaking');
      this.currentBtn = null;
    };
    u.onerror = () => {
      if (btn) btn.classList.remove('speaking');
      this.currentBtn = null;
    };

    speechSynthesis.speak(u);
  },

  setRate(rate) { this.rate = rate; }
};

// ============ STATE ============
const state = {
  filtered: [...VERBS],
  index: 0,
  flipped: false,
  known: new Set(),
  tense: "pres",
  slowSpeech: false
};

const STORAGE_KEY = "lingua-italiana-known";

function loadKnown() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) state.known = new Set(JSON.parse(stored));
  } catch {}
}

function saveKnown() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.known])); } catch {}
}

const $ = id => document.getElementById(id);

// ============ NAV ============
function setupNav() {
  const links   = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");
  const toggle  = $("menu-toggle");
  const menu    = $("nav-menu");
  const hero    = document.querySelector(".hero");

  function navigateTo(target) {
    links.forEach(l => l.classList.toggle("active", l.dataset.section === target));
    sections.forEach(s => s.classList.toggle("active", s.id === "section-" + target));
    // Hero is only shown on the home page
    if (hero) hero.classList.toggle("hero-hidden", target !== "home");
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Nav links
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      navigateTo(link.dataset.section);
    });
  });

  // Brand logo → home
  document.querySelector(".brand").addEventListener("click", e => {
    e.preventDefault();
    navigateTo("home");
  });

  // Home section cards
  document.querySelectorAll(".home-card-live[data-section]").forEach(card => {
    card.addEventListener("click", () => navigateTo(card.dataset.section));
  });

  // Mobile menu toggle
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

// ============ POPULATE CATEGORIES ============
function populateCategorySelect() {
  const sel = $("fc-category");
  sel.innerHTML = CATEGORIES.map(c => {
    const count = c.key === "all" ? VERBS.length : VERBS.filter(v => v.cat === c.key).length;
    return `<option value="${c.key}">${c.label} (${count})</option>`;
  }).join("");
}

// ============ SPEAK ICON SVG (small) ============
const SPEAK_ICON_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>`;

// ============ RENDER ============
function renderDots() {
  const dots = $("fc-dots");
  dots.innerHTML = "";
  state.filtered.forEach((v, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === state.index) dot.classList.add("active");
    if (state.known.has(v.v)) dot.classList.add("known");
    dots.appendChild(dot);
  });
}

function renderTabs() {
  const wrap = $("fc-tense-tabs");
  wrap.innerHTML = "";
  TENSES.forEach(t => {
    const btn = document.createElement("button");
    btn.textContent = t.label;
    btn.className = "tense-tab" + (t.key === state.tense ? " active" : "");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", t.key === state.tense);
    btn.addEventListener("click", e => {
      e.stopPropagation();
      state.tense = t.key;
      renderTabs();
      renderConjugation();
    });
    wrap.appendChild(btn);
  });
}

function renderConjugation() {
  const v = state.filtered[state.index];
  if (!v) return;
  const forms = v.conj[state.tense];
  const supportsSpeech = speech.supported;

  $("fc-conjugation").innerHTML = forms.map((form, i) => {
    // Strip "/a" "/e" alternates and reflexive prefixes when speaking
    const speakText = form.replace(/\/[ae]/g, '').trim();
    const speakBtn = supportsSpeech
      ? `<button class="speak-btn-inline" data-speak="${escapeHtml(speakText)}" aria-label="Listen to ${speakText}">${SPEAK_ICON_SVG}</button>`
      : '';
    return `<div>
      <span class="conj-pronoun">${PRONOUNS[i]}</span>
      <span class="conj-form-wrap">
        <span class="conj-form">${form}</span>
        ${speakBtn}
      </span>
    </div>`;
  }).join("");

  // Wire up the inline buttons
  $("fc-conjugation").querySelectorAll(".speak-btn-inline").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      speech.speak(btn.dataset.speak, btn);
    });
  });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function render() {
  const v = state.filtered[state.index];
  if (!v) return;
  const p = PALETTES[v.cat];

  // FRONT
  const front = $("fc-front");
  front.style.backgroundColor = p.lightBg;
  front.style.borderColor = p.border;
  front.style.color = p.lightFg;

  const iconBg = $("fc-icon-bg");
  const iconKey = ICONS[v.v] ? v.v : "default";
  iconBg.innerHTML = ICONS[iconKey].replace('<svg ', `<svg style="color: ${p.lightFg};" `);

  $("fc-verb").textContent = v.v;
  $("fc-verb").style.color = p.lightFg;
  $("fc-ipa").textContent = v.ipa;
  $("fc-ipa").style.color = p.lightFg;

  const hint = $("fc-hint-translation");
  hint.textContent = v.t;
  hint.style.background = p.accent;

  const pill = $("fc-category-badge");
  pill.textContent = v.catLabel;
  pill.style.background = p.pillBg;
  pill.style.color = p.pillFg;

  // BACK
  const header = $("fc-back-header");
  header.style.background = p.lightBg;
  header.style.color = p.lightFg;
  header.style.borderLeftColor = p.accent;

  $("fc-back-icon").innerHTML = ICONS[iconKey].replace('<svg ', `<svg style="color: ${p.accent};" `);

  $("fc-back-verb").textContent = v.v;
  $("fc-back-translation").textContent = v.t;
  $("fc-aux-info").textContent = `aux: ${v.aux} · pp: ${v.pp} · ger: ${v.ger}`;
  $("fc-meaning").textContent = v.meaning;

  // Examples with per-line speak buttons
  const supportsSpeech = speech.supported;
  $("fc-examples").innerHTML = v.ex.map(([it, en]) => {
    const speakBtn = supportsSpeech
      ? `<button class="speak-btn-inline" data-speak="${escapeHtml(it)}" aria-label="Listen">${SPEAK_ICON_SVG}</button>`
      : '';
    return `<div class="example-row">
      <div>
        <span class="it" style="color: ${p.lightFg}">${it}</span>
        <span class="en">${en}</span>
      </div>
      ${speakBtn}
    </div>`;
  }).join("");

  $("fc-examples").querySelectorAll(".speak-btn-inline").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      speech.speak(btn.dataset.speak, btn);
    });
  });

  const noteEl = $("fc-note");
  if (v.note) {
    noteEl.textContent = "💡 " + v.note;
    noteEl.hidden = false;
  } else {
    noteEl.hidden = true;
  }

  $("fc-progress").textContent = `${state.index + 1} / ${state.filtered.length}`;
  $("fc-known").textContent = `${state.known.size} known`;

  renderTabs();
  renderConjugation();
  renderDots();

  state.flipped = false;
  $("fc-card").classList.remove("flipped");

  const knownBtn = $("fc-known-btn");
  if (state.known.has(v.v)) {
    knownBtn.textContent = "✓ Known";
    knownBtn.classList.add("is-known");
  } else {
    knownBtn.textContent = "Mark known";
    knownBtn.classList.remove("is-known");
  }

  // Hide speech buttons gracefully if not supported
  if (!supportsSpeech) {
    document.querySelectorAll('.speak-btn-large, .speak-btn-small').forEach(b => b.style.display = 'none');
  }
}

function flip() {
  state.flipped = !state.flipped;
  $("fc-card").classList.toggle("flipped", state.flipped);
}

function next() {
  speechSynthesis.cancel();
  state.index = (state.index + 1) % state.filtered.length;
  render();
}

function prev() {
  speechSynthesis.cancel();
  state.index = (state.index - 1 + state.filtered.length) % state.filtered.length;
  render();
}

function shuffle() {
  for (let i = state.filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.filtered[i], state.filtered[j]] = [state.filtered[j], state.filtered[i]];
  }
  state.index = 0;
  render();
}

function filterCategory(cat) {
  state.filtered = cat === "all" ? [...VERBS] : VERBS.filter(v => v.cat === cat);
  state.index = 0;
  render();
}

function toggleKnown() {
  const v = state.filtered[state.index];
  if (state.known.has(v.v)) state.known.delete(v.v);
  else state.known.add(v.v);
  saveKnown();
  render();
}

function reset() {
  if (!confirm("Reset all 'known' marks?")) return;
  state.known.clear();
  saveKnown();
  render();
}

function speakCurrentVerb(btn) {
  const v = state.filtered[state.index];
  if (!v) return;
  // Strip "stare in piedi" → speak the whole phrase; just use the v string directly
  speech.speak(v.v, btn);
}

function toggleSpeed() {
  state.slowSpeech = !state.slowSpeech;
  speech.setRate(state.slowSpeech ? 0.65 : 1.0);
  const btn = $("fc-speed");
  btn.textContent = state.slowSpeech ? "🐢 Slow" : "🐇 Normal";
  btn.classList.toggle("slow-mode", state.slowSpeech);
}

// ============ INIT ============
function init() {
  setupNav();
  loadKnown();
  populateCategorySelect();
  speech.init();

  $("fc-card").addEventListener("click", e => {
    if (e.target.closest("button") || e.target.closest("select")) return;
    flip();
  });
  $("fc-next").addEventListener("click", e => { e.stopPropagation(); next(); });
  $("fc-prev").addEventListener("click", e => { e.stopPropagation(); prev(); });
  $("fc-shuffle").addEventListener("click", e => { e.stopPropagation(); shuffle(); });
  $("fc-reset").addEventListener("click", e => { e.stopPropagation(); reset(); });
  $("fc-known-btn").addEventListener("click", e => { e.stopPropagation(); toggleKnown(); });
  $("fc-category").addEventListener("change", e => filterCategory(e.target.value));
  $("fc-speed").addEventListener("click", e => { e.stopPropagation(); toggleSpeed(); });

  $("fc-speak-verb").addEventListener("click", e => {
    e.stopPropagation();
    speakCurrentVerb(e.currentTarget);
  });

  $("fc-speak-verb-back").addEventListener("click", e => {
    e.stopPropagation();
    speakCurrentVerb(e.currentTarget);
  });

  document.addEventListener("keydown", e => {
    if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
    if (!$("section-verbs").classList.contains("active")) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === " ") { e.preventDefault(); flip(); }
    else if (e.key.toLowerCase() === "k") toggleKnown();
    else if (e.key.toLowerCase() === "p") {
      e.preventDefault();
      const btn = state.flipped ? $("fc-speak-verb-back") : $("fc-speak-verb");
      speakCurrentVerb(btn);
    }
  });

  render();
}

document.addEventListener("DOMContentLoaded", init);