// ============ PHRASES DATA ============

const PHRASE_CATEGORIES = [
  {
    key: "greetings",
    label: "Greetings",
    labelIt: "Saluti",
    icon: "👋",
    accent: "#009246",
    bg: "rgba(0,146,70,0.09)",
    phrases: [
      { it: "Ciao!",                          en: "Hi! / Bye!",                    note: "Informal — used between friends" },
      { it: "Buongiorno!",                    en: "Good morning!",                  note: "Used until early afternoon" },
      { it: "Buon pomeriggio!",               en: "Good afternoon!",                note: "Used from about 1 pm" },
      { it: "Buonasera!",                     en: "Good evening!",                  note: "Used from early evening" },
      { it: "Buonanotte!",                    en: "Good night!",                    note: "Said when parting at night" },
      { it: "Arrivederci!",                   en: "Goodbye!",                       note: "Formal farewell" },
      { it: "A presto!",                      en: "See you soon!",                  note: "Friendly goodbye" },
      { it: "Come stai?",                     en: "How are you?",                   note: "Informal — tu form" },
      { it: "Come sta?",                      en: "How are you?",                   note: "Formal — Lei form" },
      { it: "Bene, grazie! E tu?",            en: "Fine, thanks! And you?",         note: "Standard reply" },
      { it: "Non c'è male.",                  en: "Not bad.",                       note: "Common relaxed answer" },
      { it: "Piacere di conoscerti!",         en: "Nice to meet you!",              note: "Informal; 'conoscerla' for formal" }
    ]
  },
  {
    key: "polite",
    label: "Polite Expressions",
    labelIt: "Frasi di cortesia",
    icon: "🙏",
    accent: "#2980B9",
    bg: "rgba(41,128,185,0.09)",
    phrases: [
      { it: "Per favore.",                    en: "Please.",                        note: "Also: per piacere" },
      { it: "Grazie mille!",                  en: "Thank you very much!",           note: "Literally 'a thousand thanks'" },
      { it: "Prego!",                         en: "You're welcome!",                note: "Also used to say 'please, go ahead'" },
      { it: "Mi dispiace.",                   en: "I'm sorry.",                     note: "For apologies and condolences" },
      { it: "Scusa! / Scusi!",                en: "Sorry! / Excuse me!",            note: "Scusa (informal), Scusi (formal)" },
      { it: "Non capisco.",                   en: "I don't understand.",            note: "Key phrase for learners!" },
      { it: "Puoi ripetere?",                 en: "Can you repeat that?",           note: "Informal; 'Può ripetere?' for formal" },
      { it: "Parla più lentamente, per favore.", en: "Please speak more slowly.",  note: "Essential for beginners" },
      { it: "Non parlo bene l'italiano.",     en: "I don't speak Italian well.",   note: "Honest and appreciated" },
      { it: "Parla inglese?",                 en: "Do you speak English?",          note: "Formal; 'Parli inglese?' informal" },
      { it: "Come si dice ... in italiano?",  en: "How do you say ... in Italian?", note: "Great for vocabulary building" },
      { it: "Non lo so.",                     en: "I don't know.",                  note: "Short: 'Non so.'" }
    ]
  },
  {
    key: "introductions",
    label: "Introductions",
    labelIt: "Presentarsi",
    icon: "🤝",
    accent: "#8E44AD",
    bg: "rgba(142,68,173,0.09)",
    phrases: [
      { it: "Mi chiamo ...",                  en: "My name is ...",                 note: "Literally 'I call myself'" },
      { it: "Sono ...",                       en: "I am ...",                       note: "Used for name or nationality" },
      { it: "Di dove sei?",                   en: "Where are you from?",            note: "Informal; 'Di dov'è?' for formal" },
      { it: "Sono di ...",                    en: "I'm from ...",                   note: "E.g. Sono di Londra." },
      { it: "Quanti anni hai?",               en: "How old are you?",               note: "Informal; 'Quanti anni ha?' formal" },
      { it: "Ho ... anni.",                   en: "I am ... years old.",            note: "Use 'avere', not 'essere'" },
      { it: "Che lavoro fai?",                en: "What do you do for work?",       note: "Informal" },
      { it: "Sono studente / insegnante.",    en: "I'm a student / teacher.",       note: "No article needed before professions" },
      { it: "Abito a ...",                    en: "I live in ...",                  note: "E.g. Abito a Roma." },
      { it: "Sono qui in vacanza.",           en: "I'm here on holiday.",           note: "Common travel phrase" },
      { it: "Sono qui per lavoro.",           en: "I'm here for work.",             note: "" },
      { it: "È la mia prima volta in Italia!", en: "It's my first time in Italy!",  note: "Italians love to hear this" }
    ]
  },
  {
    key: "restaurant",
    label: "At the Restaurant",
    labelIt: "Al ristorante",
    icon: "🍝",
    accent: "#C0392B",
    bg: "rgba(192,57,43,0.09)",
    phrases: [
      { it: "Un tavolo per due, per favore.", en: "A table for two, please.",       note: "Change 'due' to your party size" },
      { it: "Posso vedere il menu?",          en: "Can I see the menu?",             note: "Also: 'Il menu, per favore.'" },
      { it: "Cosa mi consiglia?",             en: "What do you recommend?",         note: "Great way to get local tips" },
      { it: "Vorrei ...",                     en: "I would like ...",               note: "Polite form of 'voglio'" },
      { it: "Per me, la pasta al pomodoro.", en: "For me, the pasta with tomato.",  note: "Use 'per me' to order your dish" },
      { it: "Sono vegetariano/a.",            en: "I'm vegetarian.",                note: "-o masc., -a fem." },
      { it: "Ho un'allergia a ...",           en: "I have an allergy to ...",       note: "Important to know!" },
      { it: "Il conto, per favore.",          en: "The bill, please.",              note: "The essential end-of-meal phrase" },
      { it: "È compreso il servizio?",        en: "Is the service charge included?", note: "Useful in Italy" },
      { it: "È delizioso!",                   en: "It's delicious!",                note: "Italians will love you for this" },
      { it: "Acqua naturale o frizzante?",    en: "Still or sparkling water?",      note: "You'll hear this constantly" },
      { it: "Salute!",                        en: "Cheers! / To your health!",      note: "The Italian toast" }
    ]
  },
  {
    key: "shopping",
    label: "Shopping",
    labelIt: "Fare shopping",
    icon: "🛍️",
    accent: "#E67E22",
    bg: "rgba(230,126,34,0.09)",
    phrases: [
      { it: "Quanto costa?",                  en: "How much does it cost?",         note: "For one item" },
      { it: "Quanto costano?",                en: "How much do they cost?",         note: "For multiple items" },
      { it: "È troppo caro.",                 en: "It's too expensive.",            note: "" },
      { it: "Ha qualcosa di meno caro?",      en: "Do you have something cheaper?", note: "" },
      { it: "Posso provarlo?",                en: "Can I try it on?",               note: "For clothing" },
      { it: "Che taglia è?",                  en: "What size is it?",               note: "" },
      { it: "Lo prendo.",                     en: "I'll take it.",                  note: "Lo (m.) / La (f.)" },
      { it: "Posso pagare con la carta?",     en: "Can I pay by card?",             note: "" },
      { it: "Dov'è la cassa?",                en: "Where is the checkout?",         note: "" },
      { it: "Ha il resto?",                   en: "Do you have change?",            note: "" },
      { it: "Mi può fare uno sconto?",        en: "Can you give me a discount?",    note: "Worth trying!" },
      { it: "Sto solo guardando, grazie.",    en: "I'm just browsing, thanks.",     note: "" }
    ]
  },
  {
    key: "directions",
    label: "Asking Directions",
    labelIt: "Chiedere indicazioni",
    icon: "🗺️",
    accent: "#1ABC9C",
    bg: "rgba(26,188,156,0.09)",
    phrases: [
      { it: "Dov'è ...?",                     en: "Where is ...?",                  note: "E.g. Dov'è la stazione?" },
      { it: "Come arrivo a ...?",             en: "How do I get to ...?",           note: "" },
      { it: "È lontano da qui?",              en: "Is it far from here?",           note: "" },
      { it: "È vicino?",                      en: "Is it nearby?",                  note: "" },
      { it: "Vada sempre dritto.",            en: "Go straight ahead.",             note: "Formal imperative" },
      { it: "Giri a destra / a sinistra.",    en: "Turn right / left.",             note: "Formal imperative" },
      { it: "Prenda la prima strada.",        en: "Take the first street.",         note: "Formal imperative" },
      { it: "È a dieci minuti a piedi.",      en: "It's ten minutes on foot.",      note: "" },
      { it: "Mi sono perso/a.",               en: "I'm lost.",                      note: "-o masc., -a fem." },
      { it: "Può mostrarmi sulla mappa?",     en: "Can you show me on the map?",    note: "Formal" },
      { it: "C'è una fermata dell'autobus qui vicino?", en: "Is there a bus stop nearby?", note: "" },
      { it: "Dov'è la stazione della metro?", en: "Where is the metro station?",   note: "" }
    ]
  },
  {
    key: "travel",
    label: "Travel",
    labelIt: "In viaggio",
    icon: "✈️",
    accent: "#D4A017",
    bg: "rgba(212,160,23,0.09)",
    phrases: [
      { it: "Un biglietto per ..., per favore.", en: "A ticket to ..., please.",   note: "" },
      { it: "A che ora parte il treno?",      en: "What time does the train leave?", note: "" },
      { it: "Su quale binario?",              en: "On which platform?",             note: "" },
      { it: "Ho perso il treno.",             en: "I missed the train.",            note: "" },
      { it: "Vorrei prenotare un posto.",     en: "I'd like to book a seat.",       note: "" },
      { it: "Dov'è il bagno?",                en: "Where is the bathroom?",         note: "Essential phrase!" },
      { it: "A che ora è il check-in?",       en: "What time is check-in?",         note: "" },
      { it: "Ho una prenotazione.",           en: "I have a reservation.",          note: "" },
      { it: "Può chiamarmi un taxi?",         en: "Can you call me a taxi?",        note: "Formal" },
      { it: "Dov'è l'uscita?",               en: "Where is the exit?",             note: "" },
      { it: "Il mio volo è in ritardo.",      en: "My flight is delayed.",          note: "" },
      { it: "Ho perso il passaporto.",        en: "I've lost my passport.",         note: "Go to the nearest consulate" }
    ]
  },
  {
    key: "emergencies",
    label: "Emergencies",
    labelIt: "Emergenze",
    icon: "🆘",
    accent: "#CE2B37",
    bg: "rgba(206,43,55,0.09)",
    phrases: [
      { it: "Aiuto!",                         en: "Help!",                          note: "" },
      { it: "Chiami un'ambulanza!",           en: "Call an ambulance!",             note: "" },
      { it: "Chiami la polizia!",             en: "Call the police!",               note: "Police number in Italy: 113" },
      { it: "Mi sono fatto/a male.",          en: "I've hurt myself.",              note: "-o masc., -a fem." },
      { it: "Ho bisogno di un medico.",       en: "I need a doctor.",               note: "" },
      { it: "Dov'è l'ospedale più vicino?",  en: "Where is the nearest hospital?", note: "" },
      { it: "Ho perso il portafoglio.",       en: "I've lost my wallet.",           note: "" },
      { it: "Mi hanno rubato la borsa.",      en: "My bag has been stolen.",        note: "" },
      { it: "Non mi sento bene.",             en: "I don't feel well.",             note: "" },
      { it: "È un'emergenza!",                en: "It's an emergency!",             note: "" },
      { it: "Dov'è la farmacia?",             en: "Where is the pharmacy?",         note: "Pharmacies display a green cross" },
      { it: "Ho bisogno di aiuto.",           en: "I need help.",                   note: "" }
    ]
  }
];

// ============ PHRASES STATE ============
let phrasesActiveCat = PHRASE_CATEGORIES[0].key;

// ============ RENDER ============
const PHRASE_SPEAK_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;

function renderPhraseTabs() {
  const bar = document.getElementById('phrases-tab-bar');
  if (!bar) return;
  bar.innerHTML = PHRASE_CATEGORIES.map(cat => `
    <button class="phrase-tab${cat.key === phrasesActiveCat ? ' phrase-tab-active' : ''}"
      data-cat="${cat.key}" style="--ph-accent:${cat.accent};">
      <span class="phrase-tab-icon">${cat.icon}</span>
      <span class="phrase-tab-label">${cat.labelIt}</span>
    </button>
  `).join('');

  bar.querySelectorAll('.phrase-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      phrasesActiveCat = btn.dataset.cat;
      renderPhraseTabs();
      renderPhraseList();
    });
  });
}

function renderPhraseList() {
  const container = document.getElementById('phrases-list');
  if (!container) return;
  const cat = PHRASE_CATEGORIES.find(c => c.key === phrasesActiveCat);
  if (!cat) return;

  container.innerHTML = `
    <div class="phrase-cat-header" style="--ph-accent:${cat.accent};--ph-bg:${cat.bg};">
      <span class="phrase-cat-icon">${cat.icon}</span>
      <div>
        <h2 class="phrase-cat-title">${cat.labelIt}</h2>
        <p class="phrase-cat-sub">${cat.label} · ${cat.phrases.length} phrases</p>
      </div>
    </div>
    <div class="phrase-list">
      ${cat.phrases.map(p => `
        <div class="phrase-card" style="--ph-accent:${cat.accent};--ph-bg:${cat.bg};">
          <div class="phrase-card-main">
            <div class="phrase-card-texts">
              <span class="phrase-it">${p.it}</span>
              <span class="phrase-en">${p.en}</span>
              ${p.note ? `<span class="phrase-note">${p.note}</span>` : ''}
            </div>
            <button class="phrase-speak-btn" data-speak="${p.it.replace(/"/g, '&quot;')}" title="Listen">
              ${PHRASE_SPEAK_SVG}
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.phrase-speak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof speech !== 'undefined') speech.speak(btn.dataset.speak, btn);
    });
  });

  container.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupPhrases() {
  renderPhraseTabs();
  renderPhraseList();
}

document.addEventListener('DOMContentLoaded', setupPhrases);
