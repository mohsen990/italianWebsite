// ============ STORIES DATA ============

const STORIES = [
  {
    id: 1,
    image: "stories/1.jpg",
    level: "A1",
    levelColor: "#009246",
    title: "Una giornata in città",
    sentences: [
      "Oggi vado in città con mia sorella.",
      "Prendiamo l'autobus alle dieci.",
      "Ci sono molte persone per strada.",
      "Camminiamo nel centro storico.",
      "Vediamo una chiesa antica e una piazza grande.",
      "Entriamo in un negozio di vestiti.",
      "Io compro una maglietta blu.",
      "Mia sorella compra una borsa nuova.",
      "Poi andiamo in un piccolo bar.",
      "Beviamo un cappuccino e mangiamo un cornetto.",
      "Parliamo e ridiamo insieme.",
      "Nel pomeriggio torniamo a casa.",
      "È una bella giornata."
    ],
    vocab: [
      { it: "centro storico",   en: "historic centre" },
      { it: "chiesa antica",    en: "ancient church" },
      { it: "negozio",          en: "shop / store" },
      { it: "maglietta",        en: "t-shirt" },
      { it: "borsa",            en: "bag" },
      { it: "cornetto",         en: "croissant" },
      { it: "insieme",          en: "together" }
    ],
    grammar: "Presente indicativo (noi/io) · articoli determinativi e indeterminativi"
  },
  {
    id: 2,
    image: "stories/2.png",
    level: "A1",
    levelColor: "#009246",
    title: "Al ristorante",
    sentences: [
      "Stasera vado al ristorante con il mio amico Marco.",
      "Il ristorante è in centro.",
      "C'è molta gente, ma troviamo un tavolo libero.",
      "Il cameriere arriva e ci dà il menù.",
      "Io ordino la pasta al pomodoro.",
      "Marco prende una pizza margherita.",
      "Beviamo acqua e un bicchiere di vino rosso.",
      "Il cibo è buono e caldo.",
      "Parliamo del lavoro e della famiglia.",
      "Alla fine chiediamo il conto.",
      "Paghiamo e usciamo contenti.",
      "Torniamo a casa a piedi."
    ],
    vocab: [
      { it: "cameriere",          en: "waiter" },
      { it: "menù",               en: "menu" },
      { it: "ordinare",           en: "to order" },
      { it: "pasta al pomodoro",  en: "pasta with tomato sauce" },
      { it: "pizza margherita",   en: "margherita pizza" },
      { it: "bicchiere",          en: "glass" },
      { it: "conto",              en: "bill / check" }
    ],
    grammar: "Verbi prendere, ordinare, pagare · preposizioni al, in, con"
  },
  {
    id: 3,
    image: "stories/3.png",
    level: "A1",
    levelColor: "#009246",
    title: "Una telefonata con la mamma",
    sentences: [
      "Oggi è domenica e chiamo mia madre.",
      "Lei abita in un'altra città.",
      "Il telefono squilla due volte.",
      "\"Pronto, mamma! Come stai?\"",
      "\"Ciao, tesoro! Sto bene, grazie.\"",
      "Parliamo per mezz'ora.",
      "Lei mi racconta del giardino e dei fiori.",
      "Io le racconto del lavoro e degli amici.",
      "Mia madre cucina sempre cose buone.",
      "Dice: \"La prossima settimana vieni a pranzo?\"",
      "Io rispondo: \"Sì, certo! Vengo sabato.\"",
      "Sono felice di sentire la sua voce."
    ],
    vocab: [
      { it: "squillare",          en: "to ring" },
      { it: "pronto",             en: "hello (on the phone)" },
      { it: "tesoro",             en: "darling / treasure" },
      { it: "raccontare",         en: "to tell / to recount" },
      { it: "giardino",           en: "garden" },
      { it: "prossima settimana", en: "next week" }
    ],
    grammar: "Pronomi indiretti (mi, le) · verbi venire, dire, raccontare"
  },
  {
    id: 4,
    image: "stories/4.png",
    level: "A1–A2",
    levelColor: "#E67E22",
    title: "Una giornata di pioggia",
    sentences: [
      "Oggi piove tanto.",
      "Il cielo è grigio e fa freddo.",
      "Non posso uscire di casa.",
      "Resto in salotto con una coperta calda.",
      "Bevo una tazza di tè e mangio dei biscotti.",
      "Accendo il computer e guardo un film.",
      "Il film è divertente e mi fa ridere.",
      "Dopo leggo un libro vicino alla finestra.",
      "Sento il rumore della pioggia.",
      "È un suono rilassante.",
      "Nel pomeriggio chiamo un'amica.",
      "Parliamo per un'ora.",
      "Le giornate di pioggia sono tranquille."
    ],
    vocab: [
      { it: "piovere",      en: "to rain" },
      { it: "cielo grigio", en: "grey sky" },
      { it: "coperta",      en: "blanket" },
      { it: "tazza di tè",  en: "cup of tea" },
      { it: "biscotti",     en: "biscuits / cookies" },
      { it: "rumore",       en: "noise / sound" },
      { it: "rilassante",   en: "relaxing" }
    ],
    grammar: "Verbi modali (posso) · espressioni di tempo atmosferico (piove, fa freddo)"
  },
  {
    id: 5,
    image: "stories/5.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "In palestra",
    sentences: [
      "Tre volte alla settimana vado in palestra.",
      "La palestra è vicino a casa mia.",
      "Mi cambio nello spogliatoio e metto le scarpe da ginnastica.",
      "Prima faccio dieci minuti di riscaldamento sul tapis roulant.",
      "Poi sollevo i pesi per mezz'ora.",
      "A volte faccio una lezione di yoga.",
      "L'istruttrice si chiama Laura ed è molto brava.",
      "Dopo l'allenamento sono stanco ma contento.",
      "Faccio la doccia e bevo molta acqua.",
      "Lo sport mi aiuta a stare bene.",
      "Mi sento più forte ogni settimana."
    ],
    vocab: [
      { it: "spogliatoio",           en: "changing room / locker room" },
      { it: "scarpe da ginnastica",  en: "trainers / gym shoes" },
      { it: "riscaldamento",         en: "warm-up" },
      { it: "pesi",                  en: "weights" },
      { it: "allenamento",           en: "training / workout" },
      { it: "istruttrice",           en: "instructor (f.)" }
    ],
    grammar: "Verbi riflessivi (mi cambio, mi sento) · avverbi di frequenza (tre volte, a volte)"
  },
  {
    id: 6,
    image: "stories/6.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "Il mio lavoro",
    sentences: [
      "Lavoro in un ufficio in centro.",
      "Comincio alle nove del mattino.",
      "Prendo la metro per andare al lavoro.",
      "In ufficio ho un computer, una scrivania e tante carte.",
      "I miei colleghi sono simpatici.",
      "Alle undici facciamo una pausa caffè insieme.",
      "A pranzo mangio un panino al bar.",
      "Il pomeriggio rispondo alle email e parlo con i clienti.",
      "A volte ho delle riunioni importanti.",
      "Finisco di lavorare alle sei.",
      "Torno a casa stanco ma soddisfatto.",
      "Mi piace il mio lavoro."
    ],
    vocab: [
      { it: "ufficio",       en: "office" },
      { it: "scrivania",     en: "desk" },
      { it: "colleghi",      en: "colleagues" },
      { it: "pausa caffè",   en: "coffee break" },
      { it: "riunione",      en: "meeting" },
      { it: "clienti",       en: "clients" },
      { it: "soddisfatto",   en: "satisfied" }
    ],
    grammar: "Presente indicativo regolare · preposizioni di luogo e tempo"
  },
  {
    id: 7,
    image: "stories/7.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "Una visita dal medico",
    sentences: [
      "Oggi non sto bene.",
      "Ho mal di testa e un po' di febbre.",
      "Telefono al dottore per prendere un appuntamento.",
      "La segretaria mi dice di venire alle quattro.",
      "Arrivo in studio e aspetto in sala d'attesa.",
      "Ci sono altre due persone prima di me.",
      "Il dottore mi chiama e mi visita.",
      "Mi misura la febbre e ascolta il respiro.",
      "Dice che ho un raffreddore leggero.",
      "Mi prescrive una medicina e mi consiglia di riposare.",
      "Vado in farmacia a comprare le pillole.",
      "Torno a casa e bevo una tisana calda."
    ],
    vocab: [
      { it: "mal di testa",    en: "headache" },
      { it: "febbre",          en: "fever / temperature" },
      { it: "appuntamento",    en: "appointment" },
      { it: "sala d'attesa",   en: "waiting room" },
      { it: "raffreddore",     en: "cold (illness)" },
      { it: "prescrivere",     en: "to prescribe" },
      { it: "farmacia",        en: "pharmacy" },
      { it: "tisana",          en: "herbal tea" }
    ],
    grammar: "Verbi avere per stati fisici (ho mal di testa, ho febbre) · pronomi diretti (mi visita, mi chiama)"
  },
  {
    id: 8,
    image: "stories/8.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "Una festa di compleanno",
    sentences: [
      "Oggi è il compleanno della mia amica Sofia.",
      "Lei compie venticinque anni.",
      "Organizziamo una festa a casa sua.",
      "Arrivo alle otto di sera con un regalo.",
      "Le porto un libro e dei fiori.",
      "A casa ci sono già molti amici.",
      "La musica è alta e tutti ballano.",
      "Sofia taglia la torta al cioccolato.",
      "Cantiamo \"Tanti auguri a te\".",
      "Beviamo spumante e facciamo un brindisi.",
      "Parliamo, ridiamo e scattiamo molte foto.",
      "La festa finisce a mezzanotte.",
      "Torno a casa felice e stanco."
    ],
    vocab: [
      { it: "compleanno",    en: "birthday" },
      { it: "compiere",      en: "to turn (age)" },
      { it: "regalo",        en: "gift / present" },
      { it: "fiori",         en: "flowers" },
      { it: "torta",         en: "cake" },
      { it: "brindisi",      en: "toast (drinking)" },
      { it: "spumante",      en: "sparkling wine" },
      { it: "scattare foto", en: "to take photos" },
      { it: "mezzanotte",    en: "midnight" }
    ],
    grammar: "Numeri ed età · verbi organizzare, portare, tagliare"
  },
  {
    id: 9,
    image: "stories/9.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "In vacanza a Roma",
    sentences: [
      "L'estate scorsa sono andato a Roma per una settimana.",
      "Il viaggio in treno è durato tre ore.",
      "Ho dormito in un piccolo albergo vicino al centro.",
      "La camera era pulita e comoda.",
      "Ogni mattina facevo colazione con cornetto e caffè.",
      "Ho visitato il Colosseo, il Pantheon e Piazza Navona.",
      "Ho buttato una moneta nella Fontana di Trevi.",
      "Ho mangiato la pasta carbonara in un ristorante tipico.",
      "Era deliziosa!",
      "Ho camminato molto e ho fatto tante foto.",
      "Le persone erano gentili e simpatiche.",
      "È stata una vacanza indimenticabile."
    ],
    vocab: [
      { it: "viaggio",          en: "trip / journey" },
      { it: "albergo",          en: "hotel" },
      { it: "camera",           en: "room" },
      { it: "colazione",        en: "breakfast" },
      { it: "monumento",        en: "monument" },
      { it: "moneta",           en: "coin" },
      { it: "deliziosa",        en: "delicious" },
      { it: "indimenticabile",  en: "unforgettable" }
    ],
    grammar: "Passato prossimo (sono andato, ho visitato) · imperfetto (era, facevo)"
  },
  {
    id: 10,
    image: "stories/10.png",
    level: "A2",
    levelColor: "#CE2B37",
    title: "Imparare una nuova lingua",
    sentences: [
      "Da sei mesi studio l'italiano.",
      "All'inizio era molto difficile.",
      "Non capivo niente e non sapevo parlare.",
      "Adesso va meglio.",
      "Ogni giorno studio trenta minuti.",
      "Leggo storie semplici e guardo video su YouTube.",
      "Ascolto la musica italiana in macchina.",
      "La mia canzone preferita è di Lucio Battisti.",
      "Ho un'amica italiana che si chiama Giulia.",
      "Parliamo insieme una volta alla settimana.",
      "Lei mi corregge quando sbaglio.",
      "Voglio andare in Italia il prossimo anno.",
      "Imparare una lingua è difficile, ma molto bello."
    ],
    vocab: [
      { it: "studiare",       en: "to study" },
      { it: "all'inizio",     en: "at first / in the beginning" },
      { it: "capire",         en: "to understand" },
      { it: "correggere",     en: "to correct" },
      { it: "sbagliare",      en: "to make a mistake" },
      { it: "canzone",        en: "song" },
      { it: "prossimo anno",  en: "next year" }
    ],
    grammar: "Contrasto presente vs imperfetto (adesso studio / prima non capivo) · volere + infinito"
  }
];

// ============ LIGHTBOX ============

function openLightbox(src, alt) {
  let lb = document.getElementById('story-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'story-lightbox';
    lb.className = 'story-lightbox';
    lb.innerHTML = `
      <button class="story-lb-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
      <img class="story-lb-img" src="" alt="">
    `;
    document.body.appendChild(lb);
    lb.querySelector('.story-lb-close').addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }
  lb.querySelector('.story-lb-img').src = src;
  lb.querySelector('.story-lb-img').alt = alt;
  lb.classList.add('story-lb-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('story-lightbox');
  if (lb) lb.classList.remove('story-lb-open');
  document.body.style.overflow = '';
}

// ============ STORY PLAYER ============

const storyPlayer = {
  utterance: null,
  playing: false,
  activeBtn: null,

  play(story, btn) {
    if (this.playing) {
      this.stop();
      return;
    }
    window.speechSynthesis.cancel();
    const text = story.sentences.join(' ').replace(/"/g, '');
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = 'it-IT';
    this.utterance.rate = 0.88;
    this.utterance.pitch = 1;

    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const itVoice = voices.find(v => v.lang.startsWith('it'));
      if (itVoice) this.utterance.voice = itVoice;
    };
    setVoice();
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoice;
    }

    this.utterance.onstart = () => {
      this.playing = true;
      this.activeBtn = btn;
      btn.classList.add('story-btn-playing');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Stop`;
    };
    const onDone = () => {
      this.playing = false;
      this.activeBtn = null;
      btn.classList.remove('story-btn-playing');
      btn.innerHTML = STORY_PLAY_ICON + ' Listen';
    };
    this.utterance.onend = onDone;
    this.utterance.onerror = onDone;
    window.speechSynthesis.speak(this.utterance);
  },

  stop() {
    window.speechSynthesis.cancel();
    this.playing = false;
    if (this.activeBtn) {
      this.activeBtn.classList.remove('story-btn-playing');
      this.activeBtn.innerHTML = STORY_PLAY_ICON + ' Listen';
      this.activeBtn = null;
    }
  }
};

const STORY_PLAY_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>`;

// ============ RENDER ============

let storiesActivePage = 'grid';
let storiesActiveId   = null;

function renderStoriesGrid() {
  storiesActivePage = 'grid';
  storyPlayer.stop();
  const section = document.getElementById('stories-root');
  if (!section) return;

  section.innerHTML = `
    <div class="stories-header">
      <h2 class="stories-title">Storie Italiane</h2>
      <p class="stories-sub">Short graded stories for A1 and A2 learners · audio included</p>
    </div>
    <div class="stories-grid">
      ${STORIES.map(s => `
        <button class="story-card" data-id="${s.id}">
          <div class="story-card-img-wrap">
            <img src="${s.image}" alt="${s.title}" class="story-card-img" loading="lazy">
            <span class="story-card-level" style="background:${s.levelColor};">${s.level}</span>
          </div>
          <div class="story-card-body">
            <span class="story-card-num">Storia ${s.id}</span>
            <span class="story-card-title">${s.title}</span>
          </div>
        </button>
      `).join('')}
    </div>
  `;

  section.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
      const story = STORIES.find(s => s.id === parseInt(card.dataset.id));
      if (story) renderStoryView(story);
    });
  });
}

function renderStoryView(story) {
  storiesActivePage = 'detail';
  storiesActiveId   = story.id;
  storyPlayer.stop();
  const section = document.getElementById('stories-root');
  if (!section) return;

  const prevStory = STORIES.find(s => s.id === story.id - 1);
  const nextStory = STORIES.find(s => s.id === story.id + 1);

  section.innerHTML = `
    <button class="story-back-btn" id="story-back-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      All stories
    </button>

    <div class="story-view">

      <div class="story-view-img-wrap">
        <img src="${story.image}" alt="${story.title}" class="story-view-img">
        <span class="story-view-level" style="background:${story.levelColor};">${story.level}</span>
      </div>

      <div class="story-view-body">

        <div class="story-view-meta">
          <span class="story-view-num">Storia ${story.id} di ${STORIES.length}</span>
          <h2 class="story-view-title">${story.title}</h2>
        </div>

        <button class="story-listen-btn" id="story-listen-btn">
          ${STORY_PLAY_ICON} Listen
        </button>

        <div class="story-text">
          ${story.sentences.map(s => `<p class="story-sentence">${s}</p>`).join('')}
        </div>

        <div class="story-vocab-section">
          <h3 class="story-section-label">📖 Vocabolario chiave</h3>
          <div class="story-vocab-grid">
            ${story.vocab.map(v => `
              <div class="story-vocab-item">
                <span class="story-vocab-it">${v.it}</span>
                <span class="story-vocab-en">${v.en}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="story-grammar-section">
          <h3 class="story-section-label">✏️ Grammatica</h3>
          <p class="story-grammar-text">${story.grammar}</p>
        </div>

        <div class="story-nav-btns">
          ${prevStory ? `<button class="story-nav-btn" data-id="${prevStory.id}">← Storia ${prevStory.id}</button>` : '<span></span>'}
          ${nextStory ? `<button class="story-nav-btn story-nav-next" data-id="${nextStory.id}">Storia ${nextStory.id} →</button>` : '<span></span>'}
        </div>

      </div>
    </div>
  `;

  document.getElementById('story-back-btn').addEventListener('click', renderStoriesGrid);

  section.querySelector('.story-view-img-wrap').addEventListener('click', () => {
    openLightbox(story.image, story.title);
  });

  document.getElementById('story-listen-btn').addEventListener('click', function() {
    storyPlayer.play(story, this);
  });

  section.querySelectorAll('.story-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = STORIES.find(s => s.id === parseInt(btn.dataset.id));
      if (next) renderStoryView(next);
    });
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupStories() {
  renderStoriesGrid();
}

document.addEventListener('DOMContentLoaded', setupStories);
