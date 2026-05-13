// ============ GRAMMAR DATA ============

const GRAMMAR_LEVELS = [
  { key: "A1", label: "A1", desc: "Beginner",   color: "#009246", bg: "rgba(0,146,70,0.09)" },
  { key: "A2", label: "A2", desc: "Elementary", color: "#CE2B37", bg: "rgba(206,43,55,0.09)" }
];

const GRAMMAR_TOPICS = {
  A1: [
    {
      id: "articles", icon: "📰",
      title: "Articles", titleIt: "Gli Articoli",
      intro: "Every Italian noun needs an article that matches its gender and number. There are definite articles (the) and indefinite articles (a/an).",
      rules: [
        { label: "Definite articles — 'the'",
          content: "Masculine sg: il (most consonants), lo (s+cons, z, gn, ps), l' (vowel)\nMasculine pl: i (il words), gli (lo/l' words)\nFeminine sg: la (consonant), l' (vowel)\nFeminine pl: le" },
        { label: "Indefinite articles — 'a / an'",
          content: "Masculine: un (most words), uno (s+cons, z, gn, ps)\nFeminine: una (consonant), un' (vowel)" }
      ],
      table: {
        headers: ["", "Masc. singular", "Masc. plural", "Fem. singular", "Fem. plural"],
        rows: [
          ["Definite (the)", "il libro · lo zaino · l'amico", "i libri · gli zaini · gli amici", "la porta · l'amica", "le porte · le amiche"],
          ["Indefinite (a/an)", "un libro · uno zaino · un amico", "—", "una porta · un'amica", "—"]
        ]
      },
      examples: [
        ["Il ragazzo è italiano.", "The boy is Italian."],
        ["Ho un'idea!", "I have an idea!"],
        ["Gli studenti studiano molto.", "The students study a lot."],
        ["Vuoi una pizza?", "Do you want a pizza?"]
      ],
      tip: "Use lo/uno/gli before: s+consonant (studente), z (zaino), gn (gnocchi), ps (psicologo), x (xilofono).",
      quiz: [
        { q: "Choose the correct article for 'ragazzo' (boy, m.sg.):",
          options: ["la", "il", "lo", "le"], correct: 1,
          why: "'Ragazzo' is masculine singular, starts with a regular consonant → il." },
        { q: "Which article goes before 'studente' (student, m.sg.)?",
          options: ["il", "un", "lo", "la"], correct: 2,
          why: "'Studente' starts with st- (s+consonant) → lo." },
        { q: "Complete: '___ amica di Maria è simpatica.'",
          options: ["Il", "La", "L'", "Lo"], correct: 2,
          why: "'Amica' is feminine and starts with a vowel → elided form l'." }
      ]
    },
    {
      id: "gender", icon: "⚧️",
      title: "Noun Gender & Number", titleIt: "Genere e Numero",
      intro: "Every Italian noun has a grammatical gender (masculine or feminine) and a number (singular or plural). Gender affects articles, adjectives, and past participle agreement.",
      rules: [
        { label: "Gender patterns",
          content: "Usually masculine (-o): libro, ragazzo, tavolo\nUsually feminine (-a): porta, ragazza, scuola\nEither gender (-e): padre (m), madre (f), studente (m), notte (f)\nExceptions exist: problema (m), mano (f)" },
        { label: "Forming the plural",
          content: "-o → -i : libro → libri, ragazzo → ragazzi\n-a → -e : porta → porte, ragazza → ragazze\n-e → -i : studente → studenti, padre → padri\nInvariable (accented vowel or foreign): città, caffè, film, sport" }
      ],
      examples: [
        ["Il libro è sul tavolo.", "The book is on the table."],
        ["Le ragazze sono in classe.", "The girls are in class."],
        ["I ragazzi giocano a calcio.", "The boys are playing football."],
        ["La città è bellissima.", "The city is beautiful."]
      ],
      tip: "Some nouns change meaning with gender: il fine (purpose) vs. la fine (the end); il capitale (capital/money) vs. la capitale (capital city).",
      quiz: [
        { q: "What is the plural of 'libro'?",
          options: ["libra", "libre", "libri", "libros"], correct: 2,
          why: "Masculine -o nouns form the plural with -i: libro → libri." },
        { q: "'Studentessa' ends in -a. What gender is it?",
          options: ["Masculine", "Feminine", "Neuter", "Depends on context"], correct: 1,
          why: "Nouns ending in -a are almost always feminine." },
        { q: "Which word does NOT change in the plural?",
          options: ["porta", "ragazzo", "caffè", "libro"], correct: 2,
          why: "Words ending in an accented vowel are invariable: un caffè, due caffè." }
      ]
    },
    {
      id: "pronouns", icon: "👤",
      title: "Subject Pronouns", titleIt: "I Pronomi Soggetto",
      intro: "Italian subject pronouns identify who performs the action. Because verb endings already signal the subject, pronouns are often omitted — but used for emphasis or clarity.",
      rules: [
        { label: "The subject pronouns",
          content: "io (I) · tu (you, informal) · lui (he) · lei (she) · Lei (you, formal)\nnoi (we) · voi (you pl.) · loro (they)" },
        { label: "When to use them",
          content: "Emphasis: Io non capisco, ma tu sì. (I don't understand, but you do.)\nContrast: Lui studia, lei lavora.\nAfter 'anche': Anche noi siamo italiani.\nNote: Lei (capital L) = formal 'you' (strangers, elders, professional contexts)" }
      ],
      examples: [
        ["Io sono di Roma.", "I am from Rome."],
        ["Tu parli italiano molto bene!", "You speak Italian very well!"],
        ["Noi studiamo insieme.", "We study together."],
        ["Loro arrivano domani.", "They arrive tomorrow."]
      ],
      tip: "In Italian you almost never need to say 'io' or 'tu' — parLO already means 'I speak', parLI already means 'you speak'. Add the pronoun only for emphasis or contrast.",
      quiz: [
        { q: "Which pronoun means 'we' in Italian?",
          options: ["voi", "loro", "noi", "lui"], correct: 2,
          why: "'Noi' means 'we' in Italian." },
        { q: "'Lei' with a capital L means:",
          options: ["She", "Formal you", "They", "He"], correct: 1,
          why: "Capital 'Lei' is the formal singular 'you', used with strangers and in professional settings." },
        { q: "Why are subject pronouns often omitted in Italian?",
          options: ["They sound rude", "Verb endings already show the subject", "Italian has no subject pronouns", "They are only written"], correct: 1,
          why: "Italian verb endings encode person and number, making subject pronouns redundant in most situations." }
      ]
    },
    {
      id: "essere", icon: "⭐",
      title: "Verb: essere", titleIt: "Il Verbo essere",
      intro: "'Essere' (to be) is one of the two essential Italian auxiliary verbs. It expresses identity, origin, profession, location, and is used to form compound tenses of many verbs.",
      rules: [
        { label: "Present tense of essere",
          content: "io sono · tu sei · lui/lei è · noi siamo · voi siete · loro sono" },
        { label: "Main uses of essere",
          content: "Identity / description: Sono Marco. Sei gentile.\nNationality / origin: Siamo italiani. Sono di Napoli.\nProfession: È medico. (He/she is a doctor.)\nLocation: Dove sei? Sono a casa.\nTime / date: Sono le tre. È lunedì." }
      ],
      table: {
        headers: ["Pronoun", "Form", "Example"],
        rows: [
          ["io", "sono", "Sono stanco. (I am tired.)"],
          ["tu", "sei", "Sei italiano? (Are you Italian?)"],
          ["lui / lei", "è", "È tardi. (It is late.)"],
          ["noi", "siamo", "Siamo a casa. (We are home.)"],
          ["voi", "siete", "Siete pronti? (Are you ready?)"],
          ["loro", "sono", "Sono amici. (They are friends.)"]
        ]
      },
      examples: [
        ["Sono uno studente di italiano.", "I am a student of Italian."],
        ["Mia madre è di Milano.", "My mother is from Milan."],
        ["Siamo stanchi dopo il viaggio.", "We are tired after the trip."],
        ["Che ore sono? Sono le otto.", "What time is it? It's eight o'clock."]
      ],
      tip: "'Io sono' and 'loro sono' are identical — context clarifies which. Also: Italian uses 'essere' for telling time (sono le tre) and for days/dates (è lunedì, è il 3 maggio).",
      quiz: [
        { q: "Complete: 'Noi ___ italiani.' (We are Italian.)",
          options: ["sei", "sono", "siamo", "siete"], correct: 2,
          why: "For 'noi' the form is 'siamo'." },
        { q: "Which form is used for 'lui/lei'?",
          options: ["sei", "è", "siete", "sono"], correct: 1,
          why: "Third person singular of essere is 'è' (with accent)." },
        { q: "How do you say 'It's three o'clock' in Italian?",
          options: ["È le tre.", "Sono le tre.", "Siamo le tre.", "È tre."], correct: 1,
          why: "Italian uses plural 'sono' for time (except 'È l'una' — 1 o'clock)." }
      ]
    },
    {
      id: "avere", icon: "✋",
      title: "Verb: avere", titleIt: "Il Verbo avere",
      intro: "'Avere' (to have) expresses possession, age, and many physical/emotional states that English expresses with 'to be'. It is also the primary auxiliary for compound tenses.",
      rules: [
        { label: "Present tense of avere",
          content: "io ho · tu hai · lui/lei ha · noi abbiamo · voi avete · loro hanno\n⚠️ The 'h' is silent but always written to distinguish from: o (or), ai (to the), a (at/to), anno (year)." },
        { label: "Key avere expressions (where Italian differs from English)",
          content: "Age: Ho vent'anni. (I am 20.) — lit. 'I have 20 years'\nHunger/thirst: Ho fame. Ho sete.\nHot/cold: Ho caldo. Ho freddo.\nFear: Ho paura.\nIn a hurry: Ho fretta.\nRight/wrong: Hai ragione. Hai torto." }
      ],
      table: {
        headers: ["Pronoun", "Form", "Example"],
        rows: [
          ["io", "ho", "Ho una macchina. (I have a car.)"],
          ["tu", "hai", "Hai fame? (Are you hungry?)"],
          ["lui / lei", "ha", "Ha 25 anni. (He/she is 25.)"],
          ["noi", "abbiamo", "Abbiamo fretta. (We are in a hurry.)"],
          ["voi", "avete", "Avete ragione. (You are right.)"],
          ["loro", "hanno", "Hanno paura. (They are afraid.)"]
        ]
      },
      examples: [
        ["Ho trent'anni.", "I am thirty years old."],
        ["Hai sete? Vuoi dell'acqua?", "Are you thirsty? Do you want some water?"],
        ["Il bambino ha freddo.", "The child is cold."],
        ["Abbiamo un appuntamento alle tre.", "We have an appointment at three."]
      ],
      tip: "The most common mistake for English speakers: saying 'Sono 30 anni' instead of 'Ho 30 anni'. In Italian you HAVE age, hunger, thirst, cold, and fear — you don't BE them.",
      quiz: [
        { q: "How do you say 'I am 20 years old' in Italian?",
          options: ["Sono 20 anni.", "Ho 20 anni.", "Avere 20 anni.", "Hai 20 anni."], correct: 1,
          why: "Age uses 'avere': Ho 20 anni (I have 20 years)." },
        { q: "Complete: 'Loro ___ fame.' (They are hungry.)",
          options: ["ho", "hai", "hanno", "ha"], correct: 2,
          why: "For 'loro' the form is 'hanno'." },
        { q: "Why is 'h' written in ho/hai/ha/hanno?",
          options: ["The h is pronounced", "To distinguish from o, ai, a, anno", "It is optional", "Latin spelling only"], correct: 1,
          why: "Silent 'h' avoids confusion: ho (I have) ≠ o (or); ha (he has) ≠ a (to); hanno (they have) ≠ anno (year)." }
      ]
    },
    {
      id: "present_are", icon: "💬",
      title: "Present: -are Verbs", titleIt: "Il Presente: -are",
      intro: "The -are conjugation is the largest verb group in Italian. Drop the -are infinitive ending and add the personal ending for each subject pronoun.",
      rules: [
        { label: "Endings for -are verbs",
          content: "io -o · tu -i · lui/lei -a · noi -iamo · voi -ate · loro -ano\nExample — parlare (to speak):\nparlo · parli · parla · parliamo · parlate · parlano" },
        { label: "Spelling notes",
          content: "-care/-gare verbs add 'h' before -i/-iamo to keep the hard sound:\ncercare → cerco, cerchi, cerca, cerchiamo, cercate, cercano\npagare → pago, paghi, paga, paghiamo, pagate, pagano\n-iare verbs drop the 'i' before -i/-iamo:\nmangiare → mangio, mangi, mangia, mangiamo, mangiate, mangiano" }
      ],
      table: {
        headers: ["Pronoun", "Ending", "parlare", "lavorare", "abitare"],
        rows: [
          ["io",     "-o",    "parlo",    "lavoro",    "abito"],
          ["tu",     "-i",    "parli",    "lavori",    "abiti"],
          ["lui/lei","-a",    "parla",    "lavora",    "abita"],
          ["noi",    "-iamo", "parliamo", "lavoriamo", "abitiamo"],
          ["voi",    "-ate",  "parlate",  "lavorate",  "abitate"],
          ["loro",   "-ano",  "parlano",  "lavorano",  "abitano"]
        ]
      },
      examples: [
        ["Parlo italiano e inglese.", "I speak Italian and English."],
        ["Dove abiti? Abito a Roma.", "Where do you live? I live in Rome."],
        ["Lavoriamo dalle nove alle cinque.", "We work from nine to five."],
        ["Mangiano la pizza ogni venerdì.", "They eat pizza every Friday."]
      ],
      tip: "Common -are verbs: amare (love), arrivare (arrive), ascoltare (listen), aspettare (wait), camminare (walk), comprare (buy), guardare (watch), studiare (study), telefonare (call).",
      quiz: [
        { q: "Conjugate 'abitare' (to live) for 'lei' (she):",
          options: ["abito", "abiti", "abita", "abitano"], correct: 2,
          why: "For lui/lei the -are ending is -a: abita." },
        { q: "What is the 'voi' form of 'ascoltare' (to listen)?",
          options: ["ascoltamo", "ascolta", "ascoltate", "ascoltano"], correct: 2,
          why: "'Voi' takes -ate: ascoltat + e = ascoltate." },
        { q: "Why does 'cercare' become 'cerchi' (tu) and not 'cerci'?",
          options: ["Irregular spelling", "To keep the hard 'k' sound before -i", "It is an error", "All -are verbs do this"], correct: 1,
          why: "-care/-gare verbs add 'h' before -i and -iamo to preserve the hard consonant sound." }
      ]
    },
    {
      id: "present_ere_ire", icon: "📚",
      title: "Present: -ere & -ire Verbs", titleIt: "Il Presente: -ere/-ire",
      intro: "The -ere and -ire groups use different endings from -are. Some -ire verbs insert -isc- in four of the six forms — these are called 'isc-verbs'.",
      rules: [
        { label: "-ere endings",
          content: "io -o · tu -i · lui/lei -e · noi -iamo · voi -ete · loro -ono\nExample — leggere: leggo · leggi · legge · leggiamo · leggete · leggono" },
        { label: "-ire endings: regular vs. isc-",
          content: "Regular (dormire): dormo · dormi · dorme · dormiamo · dormite · dormono\n-isc- verbs (capire): capisco · capisci · capisce · capiamo · capite · capiscono\n⚠️ -isc- appears in io/tu/lui/loro but NOT in noi/voi.\nOther isc-verbs: finire, preferire, pulire, costruire, spedire" }
      ],
      table: {
        headers: ["Pronoun", "leggere (-ere)", "dormire (-ire)", "capire (isc)"],
        rows: [
          ["io",      "leggo",    "dormo",    "capisco"],
          ["tu",      "leggi",    "dormi",    "capisci"],
          ["lui/lei", "legge",    "dorme",    "capisce"],
          ["noi",     "leggiamo", "dormiamo", "capiamo"],
          ["voi",     "leggete",  "dormite",  "capite"],
          ["loro",    "leggono",  "dormono",  "capiscono"]
        ]
      },
      examples: [
        ["Leggo un libro ogni settimana.", "I read a book every week."],
        ["Non capisco questa regola.", "I don't understand this rule."],
        ["Dormite bene di solito?", "Do you usually sleep well?"],
        ["Preferiscono il caffè al tè.", "They prefer coffee to tea."]
      ],
      tip: "Regular -ire verbs (no isc): dormire, sentire, partire, aprire, coprire, offrire, soffrire, seguire, vestire. When in doubt, check — most -ire verbs in Italian ARE isc-type.",
      quiz: [
        { q: "What is the 'io' form of 'capire'?",
          options: ["capo", "capisco", "capisce", "capire"], correct: 1,
          why: "'Capire' is an isc-verb. io → cap + isco = capisco." },
        { q: "Conjugate 'leggere' (to read) for 'voi':",
          options: ["leggono", "leggete", "leggiamo", "legge"], correct: 1,
          why: "For -ere verbs 'voi' takes -ete: legg + ete = leggete." },
        { q: "Which is the correct 'noi' form of 'capire'?",
          options: ["capisciamo", "capiamo", "capiamo", "capiscono"], correct: 1,
          why: "-isc- is NOT used for noi/voi: capiamo (not *capisciamo)." }
      ]
    },
    {
      id: "negation_questions", icon: "❓",
      title: "Negation & Questions", titleIt: "Negazione e Domande",
      intro: "Forming negatives in Italian is simple — place 'non' before the verb. Questions are usually formed by changing intonation, or by using question words at the start of the sentence.",
      rules: [
        { label: "Negation with 'non'",
          content: "Place 'non' directly before the verb:\nNon parlo tedesco. (I don't speak German.)\nNon è a casa. (He/she is not home.)\nDouble negatives are standard in Italian:\nNon mangio mai carne. (I never eat meat.) ← both 'non' AND 'mai' stay" },
        { label: "Question words (Parole interrogative)",
          content: "Chi? (Who?) · Cosa / Che cosa? (What?) · Dove? (Where?)\nQuando? (When?) · Come? (How?) · Perché? (Why?)\nQuanto/a/i/e? (How much/many?) · Quale/i? (Which?)" }
      ],
      examples: [
        ["Non capisco. Puoi ripetere?", "I don't understand. Can you repeat?"],
        ["Non ho mai visto questo film.", "I have never seen this film."],
        ["Dove abiti? Abito a Firenze.", "Where do you live? I live in Florence."],
        ["Come si chiama? Mi chiamo Luca.", "What is your name? My name is Luca."]
      ],
      tip: "'Perché' means BOTH 'why' (in questions) and 'because' (in answers): Perché studi l'italiano? — Perché è bella! (Why do you study Italian? — Because it's beautiful!)",
      quiz: [
        { q: "How do you say 'I don't speak Spanish'?",
          options: ["Parlo non spagnolo.", "Non parlo spagnolo.", "Parlo spagnolo non.", "No parlo spagnolo."], correct: 1,
          why: "'Non' goes directly before the verb: Non parlo spagnolo." },
        { q: "Which word means 'where'?",
          options: ["Quando", "Come", "Dove", "Chi"], correct: 2,
          why: "'Dove' means 'where': Dove sei? (Where are you?)" },
        { q: "Complete: 'Non mangio ___ carne.' (I never eat meat.)",
          options: ["sempre", "mai", "molto", "anche"], correct: 1,
          why: "'Mai' = never. Italian uses double negatives as standard: Non mangio mai." }
      ]
    }
  ],

  A2: [
    {
      id: "passato_prossimo", icon: "⏰",
      title: "Passato Prossimo", titleIt: "Il Passato Prossimo",
      intro: "The passato prossimo is Italian's main past tense for completed actions. It is formed with the present of 'avere' or 'essere' + the past participle of the main verb.",
      rules: [
        { label: "Forming the past participle",
          content: "-are → -ato : parlare → parlato, mangiare → mangiato\n-ere → -uto : avere → avuto, credere → creduto\n-ire → -ito : dormire → dormito, finire → finito\nCommon irregulars: leggere→letto, scrivere→scritto, vedere→visto, fare→fatto, dire→detto, aprire→aperto, prendere→preso, mettere→messo" },
        { label: "Avere vs. essere as auxiliary",
          content: "With AVERE (participle invariable):\n→ Most transitive verbs: Ho mangiato, ho letto, ho fatto.\nWith ESSERE (participle agrees with subject gender/number):\n→ Movement/state verbs: andare, venire, partire, arrivare, tornare, uscire, entrare, nascere, morire\n→ All reflexive verbs: mi sono alzato/a\n→ essere/stare: sono stato/a, sono rimasto/a" }
      ],
      table: {
        headers: ["With avere", "With essere (m / f)"],
        rows: [
          ["Ho mangiato (I ate)",       "Sono andato / andata (I went)"],
          ["Hai parlato (You spoke)",   "Sei partito / partita (You left)"],
          ["Ha scritto (She/he wrote)", "È arrivato / arrivata (He/she arrived)"],
          ["Abbiamo finito (We finished)","Siamo tornati / tornate (We returned)"],
          ["Avete visto (You saw)",     "Siete usciti / uscite (You went out)"],
          ["Hanno fatto (They did)",    "Sono venuti / venute (They came)"]
        ]
      },
      examples: [
        ["Ho studiato tutta la notte.", "I studied all night."],
        ["Siamo andati al cinema ieri sera.", "We went to the cinema last night."],
        ["Hai mai mangiato la pizza napoletana?", "Have you ever eaten Neapolitan pizza?"],
        ["Maria è arrivata in ritardo.", "Maria arrived late."]
      ],
      tip: "With essere verbs, the participle acts like an adjective: Marco è andato · Maria è andata · I ragazzi sono andati · Le ragazze sono andate. With avere verbs it never changes: Ho mangiato (always).",
      quiz: [
        { q: "Which auxiliary does 'andare' (to go) use in the passato prossimo?",
          options: ["avere", "essere", "stare", "fare"], correct: 1,
          why: "'Andare' is a movement verb → essere: sono andato/a." },
        { q: "What is the past participle of 'leggere'?",
          options: ["legguto", "leggito", "letto", "leggato"], correct: 2,
          why: "'Leggere' has the irregular past participle 'letto'." },
        { q: "Maria went home early. Complete: 'Maria ___ andata a casa presto.'",
          options: ["ha", "è", "ho", "sei"], correct: 1,
          why: "'Andare' uses essere. Subject is Maria (f.sg.) → è andata." }
      ]
    },
    {
      id: "imperfetto", icon: "📖",
      title: "Imperfetto", titleIt: "L'Imperfetto",
      intro: "The imperfetto describes past habits, repeated actions, ongoing states, and background descriptions. It contrasts with the passato prossimo (single completed event).",
      rules: [
        { label: "Forming the imperfetto",
          content: "Drop -re, add imperfetto endings:\n-are verbs: -avo · -avi · -ava · -avamo · -avate · -avano\n-ere verbs: -evo · -evi · -eva · -evamo · -evate · -evano\n-ire verbs: -ivo · -ivi · -iva · -ivamo · -ivate · -ivano\nIrregular: essere → ero/eri/era/eravamo/eravate/erano" },
        { label: "Imperfetto vs. Passato prossimo",
          content: "Imperfetto → habit/repeated: Da bambino guardavo i cartoni. (As a child I watched cartoons.)\nImperfetto → description/state: Era una bella giornata. (It was a beautiful day.)\nPassato prossimo → single completed: Ieri ho guardato un film.\nTogether → background (imp.) + event (p.p.): Leggevo quando ha suonato il telefono." }
      ],
      table: {
        headers: ["Pronoun", "parlare", "leggere", "dormire", "essere"],
        rows: [
          ["io",      "parlavo",    "leggevo",    "dormivo",    "ero"],
          ["tu",      "parlavi",    "leggevi",    "dormivi",    "eri"],
          ["lui/lei", "parlava",    "leggeva",    "dormiva",    "era"],
          ["noi",     "parlavamo",  "leggevamo",  "dormivamo",  "eravamo"],
          ["voi",     "parlavate",  "leggevate",  "dormivate",  "eravate"],
          ["loro",    "parlavano",  "leggevano",  "dormivano",  "erano"]
        ]
      },
      examples: [
        ["Da piccolo abitavo in campagna.", "As a child I lived in the countryside."],
        ["Mentre mangiavo, ho ricevuto una telefonata.", "While I was eating, I received a phone call."],
        ["Erano le tre di notte.", "It was three in the morning."],
        ["Di solito andavamo al mare d'estate.", "We usually went to the sea in summer."]
      ],
      tip: "Signal words for imperfetto: di solito (usually), sempre (always), ogni giorno (every day), da bambino (as a child), spesso (often), mentre (while), in quel periodo (at that time), prima (before).",
      quiz: [
        { q: "Which tense expresses a past habit?",
          options: ["Passato prossimo", "Imperfetto", "Futuro", "Presente"], correct: 1,
          why: "Imperfetto is used for repeated past actions and habits." },
        { q: "Complete (past habit): 'Da giovane, ___ molto.' (I used to read a lot.)",
          options: ["ho letto", "leggevo", "leggo", "leggerò"], correct: 1,
          why: "'Da giovane' signals a past habit → imperfetto: leggevo." },
        { q: "Imperfetto or passato prossimo? 'Yesterday I watched a film.'",
          options: ["Imperfetto — guardavo", "Passato prossimo — ho guardato", "Both are correct", "Neither"], correct: 1,
          why: "'Yesterday I watched a film' is a single completed action → passato prossimo: ho guardato." }
      ]
    },
    {
      id: "reflexive", icon: "🔄",
      title: "Reflexive Verbs", titleIt: "I Verbi Riflessivi",
      intro: "Reflexive verbs describe actions the subject performs on themselves. They use reflexive pronouns before the verb. In Italian they are especially common for daily routines.",
      rules: [
        { label: "Reflexive pronouns + position",
          content: "io → mi · tu → ti · lui/lei → si · noi → ci · voi → vi · loro → si\nThe pronoun goes directly before the conjugated verb:\nMi alzo alle sette. (I get up at seven.)\nSi chiama Giulia. (Her name is Giulia.)\nWith infinitive: attach to the end: alzarsi → voglio alzarmi." },
        { label: "Common reflexive verbs",
          content: "alzarsi (get up) · svegliarsi (wake up) · addormentarsi (fall asleep)\nlavarsi (wash) · vestirsi (get dressed) · pettinarsi (comb hair)\nchiamarsi (be named) · sentirsi (feel) · divertirsi (enjoy oneself)\nsedersi (sit down) · fermarsi (stop) · incontrarsi (meet each other)" }
      ],
      table: {
        headers: ["Pronoun", "Reflexive pronoun", "alzarsi (to get up)"],
        rows: [
          ["io",      "mi", "mi alzo"],
          ["tu",      "ti", "ti alzi"],
          ["lui/lei", "si", "si alza"],
          ["noi",     "ci", "ci alziamo"],
          ["voi",     "vi", "vi alzate"],
          ["loro",    "si", "si alzano"]
        ]
      },
      examples: [
        ["Mi chiamo Luca. E tu, come ti chiami?", "My name is Luca. And you, what is your name?"],
        ["Si sveglia sempre tardi.", "He/she always wakes up late."],
        ["Ci divertiamo molto alle feste!", "We have a great time at parties!"],
        ["Vi vestite velocemente la mattina?", "Do you get dressed quickly in the morning?"]
      ],
      tip: "In the passato prossimo ALL reflexive verbs use 'essere', and the participle agrees with the subject: Mi sono alzato (m) / Mi sono alzata (f) · Si sono alzati (m.pl.) / Si sono alzate (f.pl.).",
      quiz: [
        { q: "Complete: 'Come ___ chiami?' (What is your name?)",
          options: ["mi", "si", "ti", "ci"], correct: 2,
          why: "For 'tu', the reflexive pronoun is 'ti': ti chiami." },
        { q: "Which auxiliary do reflexive verbs use in the passato prossimo?",
          options: ["avere", "essere", "stare", "fare"], correct: 1,
          why: "All reflexive verbs use 'essere' in compound tenses." },
        { q: "What does 'divertirsi' mean?",
          options: ["to dress oneself", "to introduce oneself", "to enjoy oneself", "to wash oneself"], correct: 2,
          why: "'Divertirsi' = to enjoy oneself / have fun: Mi diverto! (I'm having fun!)" }
      ]
    },
    {
      id: "object_pronouns", icon: "🎯",
      title: "Direct Object Pronouns", titleIt: "I Pronomi Diretti",
      intro: "Direct object pronouns replace a noun receiving the action. They come before the conjugated verb (or attach to the end of an infinitive).",
      rules: [
        { label: "The direct object pronouns",
          content: "mi (me) · ti (you sg.) · lo (him/it m.) · la (her/it f.)\nci (us) · vi (you pl.) · li (them m.) · le (them f.)\n\nPosition: before the verb → Lo mangio. (I eat it.)\nWith infinitive: attach → Voglio mangiarlo. or Lo voglio mangiare." },
        { label: "Agreement in passato prossimo",
          content: "When a direct object pronoun precedes avere in the passato prossimo, the past participle MUST agree with the pronoun:\nHo visto Maria → L'ho vista. (vista agrees with la/l')\nHo comprato i libri → Li ho comprati. (comprati agrees with li)\nHo comprato le scarpe → Le ho comprate." }
      ],
      table: {
        headers: ["Person", "Pronoun", "Example"],
        rows: [
          ["me",        "mi", "Mi chiama ogni giorno. (He calls me every day.)"],
          ["you (sg.)", "ti", "Ti vedo domani. (I'll see you tomorrow.)"],
          ["him / it",  "lo", "Lo conosco bene. (I know him well.)"],
          ["her / it",  "la", "La vedo spesso. (I see her often.)"],
          ["us",        "ci", "Ci aiuti? (Will you help us?)"],
          ["you (pl.)", "vi", "Vi chiamo stasera. (I'll call you tonight.)"],
          ["them (m.)", "li", "Li trovo simpatici. (I find them nice.)"],
          ["them (f.)", "le", "Le ho incontrate ieri. (I met them yesterday.)"]
        ]
      },
      examples: [
        ["Conosci Marco? Sì, lo conosco.", "Do you know Marco? Yes, I know him."],
        ["La pizza? La mangio sempre volentieri.", "Pizza? I always eat it gladly."],
        ["Hai fatto i compiti? Li ho già fatti.", "Did you do the homework? I already did it."],
        ["Mi puoi aiutare? / Puoi aiutarmi?", "Can you help me?"]
      ],
      tip: "Lo/la can abbreviate to l' before a vowel or h: Ho visto Maria → L'ho vista. Lo/la → l' is very common in speech.",
      quiz: [
        { q: "'Mangio la pizza.' Replace the object with a pronoun:",
          options: ["Lo mangio.", "La mangio.", "Li mangio.", "Le mangio."], correct: 1,
          why: "'Pizza' is feminine singular → direct object pronoun 'la': La mangio." },
        { q: "Complete: 'Conosci i miei amici? Sì, ___ conosco.'",
          options: ["le", "lo", "li", "la"], correct: 2,
          why: "'Amici' is masculine plural → direct object pronoun 'li'." },
        { q: "Agreement: 'Ho visto Maria' → using a pronoun becomes:",
          options: ["Lo ho visto.", "La ho vista.", "L'ho vista.", "L'ho visto."], correct: 2,
          why: "Maria is feminine → la (→ l' before vowel). Participle agrees: vista (f.sg.)." }
      ]
    },
    {
      id: "modals", icon: "💪",
      title: "Modal Verbs", titleIt: "I Verbi Modali",
      intro: "Dovere (must), potere (can/may), and volere (want to) are modal verbs that always precede an infinitive. They are highly irregular in the present tense.",
      rules: [
        { label: "Present tense of the three modals",
          content: "DOVERE (must/have to):\ndevo · devi · deve · dobbiamo · dovete · devono\nPOTERE (can/may/be able to):\nposso · puoi · può · possiamo · potete · possono\nVOLERE (want to):\nvoglio · vuoi · vuole · vogliamo · volete · vogliono" },
        { label: "Usage and object pronouns",
          content: "Always followed by infinitive: Devo studiare. Posso entrare?\nObject pronouns: place before the modal OR attach to infinitive:\nLo voglio mangiare. = Voglio mangiarlo.\nIn passato prossimo: auxiliary follows the NEXT verb:\nSono dovuto/a andare. (movement verb) vs. Ho dovuto aspettare." }
      ],
      table: {
        headers: ["Pronoun", "dovere", "potere", "volere"],
        rows: [
          ["io",      "devo",     "posso",    "voglio"],
          ["tu",      "devi",     "puoi",     "vuoi"],
          ["lui/lei", "deve",     "può",      "vuole"],
          ["noi",     "dobbiamo", "possiamo", "vogliamo"],
          ["voi",     "dovete",   "potete",   "volete"],
          ["loro",    "devono",   "possono",  "vogliono"]
        ]
      },
      examples: [
        ["Devo studiare per l'esame.", "I must study for the exam."],
        ["Puoi aprire la finestra?", "Can you open the window?"],
        ["Voglio imparare l'italiano perfettamente!", "I want to learn Italian perfectly!"],
        ["Non possiamo venire stasera.", "We cannot come tonight."]
      ],
      tip: "For polite requests, use the conditional: Potresti aprire la finestra? (Could you open the window?) · Vorrei un caffè. (I would like a coffee.) This is the standard polite register in Italian.",
      quiz: [
        { q: "Complete: 'Noi ___ studiare di più.' (We must study more.)",
          options: ["possiamo", "dobbiamo", "vogliamo", "andiamo"], correct: 1,
          why: "For obligation use dovere: dobbiamo (noi form)." },
        { q: "What is the 'tu' form of 'potere'?",
          options: ["poti", "puoi", "può", "possi"], correct: 1,
          why: "Irregular 'tu' form of potere is 'puoi'." },
        { q: "'Voglio mangiarlo' can also be said as:",
          options: ["Lo voglio mangiare", "Mangio lo voglio", "Lo mangiare voglio", "Voglio lo mangio"], correct: 0,
          why: "Object pronouns can precede the modal: Lo voglio mangiare = Voglio mangiarlo." }
      ]
    },
    {
      id: "prepositions_art", icon: "🔗",
      title: "Prepositions + Articles", titleIt: "Le Preposizioni Articolate",
      intro: "When certain prepositions are followed by a definite article, they must combine into a single contracted word. This contraction is obligatory — you cannot keep them separate.",
      rules: [
        { label: "The 5 main contracting prepositions",
          content: "a (to/at) · di (of/from) · da (from/by/since) · in (in/to) · su (on)\nFormula: preposition + article = one word\na + il = al · di + la = della · su + i = sui · in + gli = negli\nOther prepositions (con, per, tra) generally do NOT contract." },
        { label: "Full contraction table",
          content: "     il    lo    la    l'    i     gli   le\na:   al    allo  alla  all'  ai    agli  alle\ndi:  del   dello della dell' dei   degli delle\nda:  dal   dallo dalla dall' dai   dagli dalle\nin:  nel   nello nella nell' nei   negli nelle\nsu:  sul   sullo sulla sull' sui   sugli sulle" }
      ],
      table: {
        headers: ["Prep.", "+ il", "+ lo", "+ la", "+ l'", "+ i", "+ gli", "+ le"],
        rows: [
          ["a",  "al",  "allo",  "alla",  "all'",  "ai",  "agli",  "alle"],
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        ["Vado al supermercato.", "I'm going to the supermarket."],
        ["Il libro è sul tavolo.", "The book is on the table."],
        ["Vengo dall'Italia.", "I come from Italy."],
        ["Parliamo degli studenti.", "We are talking about the students."]
      ],
      tip: "With cities use 'a' (no article): Abito a Roma. With countries use 'in' (no article): Vivo in Italia. But with a definite article: nel nord Italia, nella Sicilia del Settecento.",
      quiz: [
        { q: "Combine 'a' + 'il': 'Vado ___ cinema.'",
          options: ["a il", "al", "dello", "allo"], correct: 1,
          why: "'a' + 'il' = 'al'. Contractions are obligatory in Italian." },
        { q: "What is 'su' + 'la'?",
          options: ["sula", "sull'", "sulla", "sulle"], correct: 2,
          why: "'su' + 'la' = 'sulla': Il gatto è sulla sedia." },
        { q: "Complete: 'Vengo ___ Italia.' (I come from Italy.)",
          options: ["da l'", "dall'", "dal", "delle"], correct: 1,
          why: "'Italia' starts with a vowel → 'da' + 'l'' = 'dall'': Vengo dall'Italia." }
      ]
    },
    {
      id: "possessives", icon: "🏠",
      title: "Possessive Adjectives", titleIt: "Gli Aggettivi Possessivi",
      intro: "Possessive adjectives in Italian agree in gender and number with the THING possessed (not the possessor). They normally require a definite article — with one important exception.",
      rules: [
        { label: "Possessive forms (agree with the noun)",
          content: "mio/mia/miei/mie (my)\ntuo/tua/tuoi/tue (your sg.)\nsuo/sua/suoi/sue (his/her/its · your formal)\nnostro/nostra/nostri/nostre (our)\nvostro/vostra/vostri/vostre (your pl.)\nloro (their — completely invariable)" },
        { label: "Article rule + family exception",
          content: "Normally: il mio libro · la mia casa · i miei amici · le mie scarpe\n\nFamily members (singular, unmodified): NO article!\nmio padre · mia madre · mio fratello · mia sorella · mio figlio\n\nBut article IS required with: loro (il loro padre), plurals (i miei fratelli), diminutives/augmentatives (il mio fratellino)" }
      ],
      table: {
        headers: ["", "m. sg.", "f. sg.", "m. pl.", "f. pl."],
        rows: [
          ["my",       "mio",    "mia",    "miei",   "mie"],
          ["your",     "tuo",    "tua",    "tuoi",   "tue"],
          ["his/her",  "suo",    "sua",    "suoi",   "sue"],
          ["our",      "nostro", "nostra", "nostri", "nostre"],
          ["your pl.", "vostro", "vostra", "vostri", "vostre"],
          ["their",    "loro",   "loro",   "loro",   "loro"]
        ]
      },
      examples: [
        ["Il mio appartamento è al terzo piano.", "My apartment is on the third floor."],
        ["Mia madre abita a Napoli.", "My mother lives in Naples. (no article!)"],
        ["I loro figli studiano all'università.", "Their children study at university."],
        ["Come si chiama tuo fratello?", "What is your brother's name? (no article!)"]
      ],
      tip: "'Suo/sua/suoi/sue' covers his, her, and formal your. Context usually clarifies. When genuinely ambiguous, add 'di lui' or 'di lei': il libro di lui (his book) vs. il suo libro (ambiguous).",
      quiz: [
        { q: "How do you say 'my books' (m.pl.)?",
          options: ["mia libri", "miei libri", "il mio libri", "i miei libri"], correct: 3,
          why: "'Libri' is m.pl. → 'miei' + article 'i': i miei libri." },
        { q: "Why is there no article in 'mia sorella'?",
          options: ["Sorella is special", "Possessives never take articles", "Singular family members drop the article with possessives", "Mia already contains the article"], correct: 2,
          why: "With singular unmodified family members the definite article is dropped: mia sorella, tuo padre." },
        { q: "How do you say 'their house'?",
          options: ["la loro casa", "le loro casa", "il suo casa", "la sua casa"], correct: 0,
          why: "'Loro' is invariable and always keeps the article: la loro casa." }
      ]
    },
    {
      id: "comparative", icon: "⚖️",
      title: "Comparatives", titleIt: "Il Comparativo",
      intro: "Comparatives allow you to compare two things. Italian uses 'più ... di/che' (more than), 'meno ... di/che' (less than), and '(così) ... come / (tanto) ... quanto' (as ... as).",
      rules: [
        { label: "Superiority and inferiority — di vs. che",
          content: "più + adj + di (more than) / meno + adj + di (less than)\nUse DI before nouns/pronouns being compared:\nMarco è più alto di Luca. · Maria è meno stanca di me.\nUse CHE when comparing two adjectives/verbs/adverbs on the same subject:\nÈ più simpatico che intelligente. · È più facile studiare che lavorare." },
        { label: "Equality and irregular comparatives",
          content: "Equality: (così) ... come / (tanto) ... quanto\nMaria è (così) alta come sua sorella.\nSono (tanto) stanco quanto te.\n\nIrregular: buono → migliore (better) / il migliore (the best)\ncattivo → peggiore (worse) / il peggiore (the worst)\ngrande → maggiore (greater/older)\npiccolo → minore (lesser/younger)" }
      ],
      examples: [
        ["Roma è più grande di Firenze.", "Rome is bigger than Florence."],
        ["L'italiano è meno difficile del russo.", "Italian is less difficult than Russian."],
        ["Maria è tanto simpatica quanto sua sorella.", "Maria is as nice as her sister."],
        ["Questo è il migliore gelato che abbia mai mangiato!", "This is the best ice cream I've ever had!"]
      ],
      tip: "'Di' contracts with the article: più alto del ragazzo (di + il), più bella della ragazza (di + la), più giovane dell'insegnante (di + l'). Don't forget these contractions!",
      quiz: [
        { q: "Complete: 'L'italiano è ___ difficile del cinese.'",
          options: ["più", "meno", "tanto", "come"], correct: 1,
          why: "'Meno ... di' expresses inferiority: meno difficile del cinese." },
        { q: "'Di' or 'che'? 'Marco è più simpatico ___ intelligente.'",
          options: ["di", "che", "come", "quanto"], correct: 1,
          why: "Comparing two qualities of the same person → 'che': più simpatico che intelligente." },
        { q: "What is the irregular comparative of 'buono'?",
          options: ["più buono", "buonissimo", "migliore", "maggiore"], correct: 2,
          why: "'Buono' → 'migliore' (better). Questa pizza è migliore!" }
      ]
    }
  ]
};

// ============ GRAMMAR STATE ============
const grammarState = {
  level: "A1",
  quizIndex: 0,
  quizAnswered: false,
  quizScore: 0,
  quizDone: false,
  currentTopic: null
};

// ============ RENDER TOPIC GRID ============
function renderGrammarTopics() {
  const lvl = GRAMMAR_LEVELS.find(l => l.key === grammarState.level);

  // Level buttons
  const btns = document.getElementById("grammar-level-btns");
  btns.innerHTML = GRAMMAR_LEVELS.map(l => `
    <button class="grammar-level-btn${l.key === grammarState.level ? " glb-active" : ""}"
      data-level="${l.key}" style="--glc:${l.color};--glb:${l.bg};">${l.label} · ${l.desc}</button>
  `).join("");
  btns.querySelectorAll(".grammar-level-btn").forEach(b =>
    b.addEventListener("click", () => { grammarState.level = b.dataset.level; renderGrammarTopics(); })
  );

  // Topic grid
  const grid = document.getElementById("grammar-topic-grid");
  grid.innerHTML = GRAMMAR_TOPICS[grammarState.level].map(t => `
    <button class="grammar-topic-card" data-id="${t.id}" style="--gtc:${lvl.color};--gtb:${lvl.bg};">
      <span class="grammar-topic-icon">${t.icon}</span>
      <div class="grammar-topic-info">
        <span class="grammar-topic-it">${t.titleIt}</span>
        <span class="grammar-topic-en">${t.title}</span>
      </div>
    </button>
  `).join("");
  grid.querySelectorAll(".grammar-topic-card").forEach(c =>
    c.addEventListener("click", () => {
      const t = GRAMMAR_TOPICS[grammarState.level].find(x => x.id === c.dataset.id);
      if (t) showGrammarLesson(t);
    })
  );
}

// ============ RENDER LESSON ============
function showGrammarLesson(topic) {
  grammarState.currentTopic = topic;
  grammarState.quizIndex = 0;
  grammarState.quizAnswered = false;
  grammarState.quizScore = 0;
  grammarState.quizDone = false;

  const lvl = GRAMMAR_LEVELS.find(l => l.key === grammarState.level);

  document.getElementById("grammar-topic-view").classList.add("grammar-hidden");
  const view = document.getElementById("grammar-lesson-view");
  view.classList.remove("grammar-hidden");

  const tableHtml = topic.table ? `
    <h3 class="grammar-sec-label" style="margin-top:1.25rem;">Reference Table</h3>
    <div class="grammar-table-wrap">
      <table class="grammar-table">
        <thead><tr>${topic.table.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${topic.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>` : "";

  const rulesHtml = topic.rules.map(r => `
    <div class="grammar-rule-box" style="--grc:${lvl.color};">
      <strong class="grammar-rule-label">${r.label}</strong>
      <p class="grammar-rule-content">${r.content.replace(/\n/g, "<br>")}</p>
    </div>`).join("");

  const examplesHtml = topic.examples.map(([it, en]) => `
    <div class="grammar-ex-row" style="--grc:${lvl.color};">
      <span class="grammar-ex-it">${it}</span>
      <span class="grammar-ex-en">${en}</span>
    </div>`).join("");

  view.innerHTML = `
    <button id="grammar-back-btn" class="grammar-back-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      Back to topics
    </button>
    <div class="grammar-lesson-header" style="--glc:${lvl.color};--glb:${lvl.bg};">
      <span class="grammar-lvl-badge" style="background:${lvl.bg};color:${lvl.color};">${grammarState.level}</span>
      <div>
        <h2 class="grammar-lesson-title-it">${topic.icon} ${topic.titleIt}</h2>
        <p class="grammar-lesson-title-en">${topic.title}</p>
      </div>
    </div>
    <p class="grammar-intro">${topic.intro}</p>
    <h3 class="grammar-sec-label">Key Rules</h3>
    ${rulesHtml}
    ${tableHtml}
    <h3 class="grammar-sec-label" style="margin-top:1.25rem;">Examples</h3>
    <div class="grammar-examples">${examplesHtml}</div>
    <div class="grammar-tip-box">
      <span class="grammar-tip-emoji">💡</span>
      <p>${topic.tip}</p>
    </div>
    <h3 class="grammar-sec-label">Practice Quiz</h3>
    <div id="grammar-quiz-wrap"></div>
  `;

  document.getElementById("grammar-back-btn").addEventListener("click", () => {
    view.classList.add("grammar-hidden");
    document.getElementById("grammar-topic-view").classList.remove("grammar-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  renderGrammarQuiz(topic);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============ QUIZ ============
function renderGrammarQuiz(topic) {
  const wrap = document.getElementById("grammar-quiz-wrap");
  const lvl  = GRAMMAR_LEVELS.find(l => l.key === grammarState.level);
  const total = topic.quiz.length;

  if (grammarState.quizDone) {
    const s = grammarState.quizScore;
    const pct = Math.round((s / total) * 100);
    const emoji = pct === 100 ? "🎉" : pct >= 67 ? "👍" : pct >= 34 ? "🤔" : "📖";
    const msg = pct === 100 ? "Perfetto! You got everything right!" :
                pct >= 67  ? "Bravo! Good progress — review the rules and try again." :
                pct >= 34  ? "Keep studying — re-read the key rules above and retry." :
                             "Don't give up! Read through the rules again, then retry.";
    wrap.innerHTML = `
      <div class="grammar-quiz-result" style="--grc:${lvl.color};">
        <span class="grammar-result-emoji">${emoji}</span>
        <span class="grammar-result-score">${s} / ${total}</span>
        <span class="grammar-result-pct">${pct}% correct</span>
        <p class="grammar-result-msg">${msg}</p>
        <button id="grammar-retry-btn" class="grammar-quiz-action-btn" style="--grc:${lvl.color};">↺ Try again</button>
      </div>`;
    document.getElementById("grammar-retry-btn").addEventListener("click", () => {
      grammarState.quizIndex = 0;
      grammarState.quizAnswered = false;
      grammarState.quizScore = 0;
      grammarState.quizDone = false;
      renderGrammarQuiz(topic);
    });
    return;
  }

  const q    = topic.quiz[grammarState.quizIndex];
  const qNum = grammarState.quizIndex + 1;

  wrap.innerHTML = `
    <div class="grammar-quiz-card" style="--grc:${lvl.color};">
      <div class="grammar-quiz-top">
        <span class="grammar-quiz-counter">Question ${qNum} of ${total}</span>
        <div class="grammar-quiz-dots">
          ${topic.quiz.map((_, i) => `<span class="gqdot${i < grammarState.quizIndex ? " gqdot-done" : i === grammarState.quizIndex ? " gqdot-active" : ""}"></span>`).join("")}
        </div>
      </div>
      <p class="grammar-quiz-q">${q.q}</p>
      <div class="grammar-quiz-opts" id="grammar-quiz-opts">
        ${q.options.map((o, i) => `<button class="grammar-quiz-opt" data-i="${i}">${o}</button>`).join("")}
      </div>
      <div class="grammar-quiz-fb" id="grammar-quiz-fb" style="display:none;"></div>
      <button class="grammar-quiz-action-btn" id="grammar-quiz-next" style="display:none;--grc:${lvl.color};">
        ${grammarState.quizIndex === total - 1 ? "See results →" : "Next question →"}
      </button>
    </div>`;

  wrap.querySelectorAll(".grammar-quiz-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      if (grammarState.quizAnswered) return;
      grammarState.quizAnswered = true;
      const chosen  = parseInt(btn.dataset.i);
      const correct = q.correct;
      if (chosen === correct) grammarState.quizScore++;

      wrap.querySelectorAll(".grammar-quiz-opt").forEach((b, i) => {
        if (i === correct) b.classList.add("gqopt-correct");
        else if (i === chosen) b.classList.add("gqopt-wrong");
        b.disabled = true;
      });

      const fb = document.getElementById("grammar-quiz-fb");
      fb.style.display = "block";
      fb.className = `grammar-quiz-fb ${chosen === correct ? "gqfb-ok" : "gqfb-err"}`;
      fb.innerHTML = `<strong>${chosen === correct ? "✓ Correct!" : "✗ Not quite."}</strong> ${q.why}`;

      document.getElementById("grammar-quiz-next").style.display = "inline-flex";
    });
  });

  document.getElementById("grammar-quiz-next").addEventListener("click", () => {
    grammarState.quizIndex++;
    grammarState.quizAnswered = false;
    if (grammarState.quizIndex >= total) grammarState.quizDone = true;
    renderGrammarQuiz(topic);
  });
}

// ============ INIT ============
function setupGrammar() {
  renderGrammarTopics();
}
document.addEventListener("DOMContentLoaded", setupGrammar);
