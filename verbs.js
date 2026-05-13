// 60 essential Italian verbs with conjugations and examples

const VERBS = [
  // ============ AUXILIARIES & CORE ============
  {
    v: "essere", ipa: "/ˈɛs.se.re/", t: "to be", cat: "auxiliary", catLabel: "Auxiliary",
    aux: "essere", pp: "stato", ger: "essendo",
    meaning: "Identity, state, location. Auxiliary for reflexive and movement verbs.",
    ex: [
      ["Sono italiano.", "I am Italian."],
      ["È stanca.", "She is tired."],
      ["Siamo a Roma.", "We are in Rome."],
      ["Era una bella giornata.", "It was a beautiful day."]
    ],
    note: "Pairs with stare for the temporary/permanent contrast.",
    conj: { pres: ["sono","sei","è","siamo","siete","sono"], imp: ["ero","eri","era","eravamo","eravate","erano"], pp: ["sono stato/a","sei stato/a","è stato/a","siamo stati/e","siete stati/e","sono stati/e"], fut: ["sarò","sarai","sarà","saremo","sarete","saranno"], cond: ["sarei","saresti","sarebbe","saremmo","sareste","sarebbero"], sub: ["sia","sia","sia","siamo","siate","siano"] }
  },
  {
    v: "avere", ipa: "/aˈve.re/", t: "to have", cat: "auxiliary", catLabel: "Auxiliary",
    aux: "avere", pp: "avuto", ger: "avendo",
    meaning: "Possession, age, sensations. Primary auxiliary for compound tenses.",
    ex: [
      ["Ho una macchina.", "I have a car."],
      ["Ho 30 anni.", "I am 30 years old."],
      ["Hai fame?", "Are you hungry?"],
      ["Abbiamo molto lavoro.", "We have a lot of work."]
    ],
    note: "Italians 'have' age and hunger, not 'be' them.",
    conj: { pres: ["ho","hai","ha","abbiamo","avete","hanno"], imp: ["avevo","avevi","aveva","avevamo","avevate","avevano"], pp: ["ho avuto","hai avuto","ha avuto","abbiamo avuto","avete avuto","hanno avuto"], fut: ["avrò","avrai","avrà","avremo","avrete","avranno"], cond: ["avrei","avresti","avrebbe","avremmo","avreste","avrebbero"], sub: ["abbia","abbia","abbia","abbiamo","abbiate","abbiano"] }
  },
  {
    v: "fare", ipa: "/ˈfa.re/", t: "to do / to make", cat: "auxiliary", catLabel: "Auxiliary",
    aux: "avere", pp: "fatto", ger: "facendo",
    meaning: "Versatile — covers doing, making, weather, photos, asking.",
    ex: [
      ["Faccio i compiti.", "I do the homework."],
      ["Fa caldo oggi.", "It's hot today."],
      ["Facciamo una foto.", "Let's take a picture."],
      ["Cosa fai stasera?", "What are you doing tonight?"]
    ],
    conj: { pres: ["faccio","fai","fa","facciamo","fate","fanno"], imp: ["facevo","facevi","faceva","facevamo","facevate","facevano"], pp: ["ho fatto","hai fatto","ha fatto","abbiamo fatto","avete fatto","hanno fatto"], fut: ["farò","farai","farà","faremo","farete","faranno"], cond: ["farei","faresti","farebbe","faremmo","fareste","farebbero"], sub: ["faccia","faccia","faccia","facciamo","facciate","facciano"] }
  },
  {
    v: "stare", ipa: "/ˈsta.re/", t: "to stay / to be", cat: "auxiliary", catLabel: "Auxiliary",
    aux: "essere", pp: "stato", ger: "stando",
    meaning: "Temporary state, location, health. Forms the progressive tense.",
    ex: [
      ["Come stai?", "How are you?"],
      ["Sto leggendo.", "I am reading."],
      ["Sto a casa stasera.", "I'm staying home tonight."],
      ["Sta zitto!", "Be quiet!"]
    ],
    note: "Stare for temporary states, essere for permanent identity.",
    conj: { pres: ["sto","stai","sta","stiamo","state","stanno"], imp: ["stavo","stavi","stava","stavamo","stavate","stavano"], pp: ["sono stato/a","sei stato/a","è stato/a","siamo stati/e","siete stati/e","sono stati/e"], fut: ["starò","starai","starà","staremo","starete","staranno"], cond: ["starei","staresti","starebbe","staremmo","stareste","starebbero"], sub: ["stia","stia","stia","stiamo","stiate","stiano"] }
  },
  {
    v: "andare", ipa: "/anˈda.re/", t: "to go", cat: "auxiliary", catLabel: "Auxiliary",
    aux: "essere", pp: "andato", ger: "andando",
    meaning: "Movement toward a place. Used in many idioms.",
    ex: [
      ["Vado al lavoro.", "I'm going to work."],
      ["Va bene.", "It's fine."],
      ["Andiamo al cinema?", "Shall we go to the cinema?"],
      ["È andata via ieri.", "She left yesterday."]
    ],
    conj: { pres: ["vado","vai","va","andiamo","andate","vanno"], imp: ["andavo","andavi","andava","andavamo","andavate","andavano"], pp: ["sono andato/a","sei andato/a","è andato/a","siamo andati/e","siete andati/e","sono andati/e"], fut: ["andrò","andrai","andrà","andremo","andrete","andranno"], cond: ["andrei","andresti","andrebbe","andremmo","andreste","andrebbero"], sub: ["vada","vada","vada","andiamo","andiate","vadano"] }
  },

  // ============ MODALS ============
  {
    v: "potere", ipa: "/poˈte.re/", t: "can / to be able to", cat: "modal", catLabel: "Modal",
    aux: "avere/essere", pp: "potuto", ger: "potendo",
    meaning: "Ability or permission. Followed by infinitive.",
    ex: [
      ["Posso entrare?", "May I come in?"],
      ["Non posso venire.", "I can't come."],
      ["Possiamo aiutarti.", "We can help you."],
      ["Potrei avere il conto?", "Could I have the bill?"]
    ],
    note: "Auxiliary matches the following verb when used with movement/reflexive verbs.",
    conj: { pres: ["posso","puoi","può","possiamo","potete","possono"], imp: ["potevo","potevi","poteva","potevamo","potevate","potevano"], pp: ["ho potuto","hai potuto","ha potuto","abbiamo potuto","avete potuto","hanno potuto"], fut: ["potrò","potrai","potrà","potremo","potrete","potranno"], cond: ["potrei","potresti","potrebbe","potremmo","potreste","potrebbero"], sub: ["possa","possa","possa","possiamo","possiate","possano"] }
  },
  {
    v: "volere", ipa: "/voˈle.re/", t: "to want", cat: "modal", catLabel: "Modal",
    aux: "avere/essere", pp: "voluto", ger: "volendo",
    meaning: "Desire or will. Conditional 'vorrei' is essential for politeness.",
    ex: [
      ["Voglio un caffè.", "I want a coffee."],
      ["Vorrei un bicchiere d'acqua.", "I would like a glass of water."],
      ["Cosa vuoi fare?", "What do you want to do?"],
      ["Vogliamo partire presto.", "We want to leave early."]
    ],
    conj: { pres: ["voglio","vuoi","vuole","vogliamo","volete","vogliono"], imp: ["volevo","volevi","voleva","volevamo","volevate","volevano"], pp: ["ho voluto","hai voluto","ha voluto","abbiamo voluto","avete voluto","hanno voluto"], fut: ["vorrò","vorrai","vorrà","vorremo","vorrete","vorranno"], cond: ["vorrei","vorresti","vorrebbe","vorremmo","vorreste","vorrebbero"], sub: ["voglia","voglia","voglia","vogliamo","vogliate","vogliano"] }
  },
  {
    v: "dovere", ipa: "/doˈve.re/", t: "must / to have to", cat: "modal", catLabel: "Modal",
    aux: "avere/essere", pp: "dovuto", ger: "dovendo",
    meaning: "Obligation or duty. Conditional 'dovrei' = 'I should'.",
    ex: [
      ["Devo studiare.", "I must study."],
      ["Dovresti riposare.", "You should rest."],
      ["Devo andare ora.", "I have to go now."],
      ["Avresti dovuto chiamarmi.", "You should have called me."]
    ],
    conj: { pres: ["devo","devi","deve","dobbiamo","dovete","devono"], imp: ["dovevo","dovevi","doveva","dovevamo","dovevate","dovevano"], pp: ["ho dovuto","hai dovuto","ha dovuto","abbiamo dovuto","avete dovuto","hanno dovuto"], fut: ["dovrò","dovrai","dovrà","dovremo","dovrete","dovranno"], cond: ["dovrei","dovresti","dovrebbe","dovremmo","dovreste","dovrebbero"], sub: ["debba","debba","debba","dobbiamo","dobbiate","debbano"] }
  },

  // ============ COMMUNICATION ============
  {
    v: "dire", ipa: "/ˈdi.re/", t: "to say / to tell", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "detto", ger: "dicendo",
    meaning: "Reporting speech. Followed by 'di + infinitive' for indirect commands.",
    ex: [
      ["Dico la verità.", "I tell the truth."],
      ["Mi ha detto di aspettare.", "He told me to wait."],
      ["Cosa hai detto?", "What did you say?"],
      ["Dimmi tutto.", "Tell me everything."]
    ],
    conj: { pres: ["dico","dici","dice","diciamo","dite","dicono"], imp: ["dicevo","dicevi","diceva","dicevamo","dicevate","dicevano"], pp: ["ho detto","hai detto","ha detto","abbiamo detto","avete detto","hanno detto"], fut: ["dirò","dirai","dirà","diremo","direte","diranno"], cond: ["direi","diresti","direbbe","diremmo","direste","direbbero"], sub: ["dica","dica","dica","diciamo","diciate","dicano"] }
  },
  {
    v: "parlare", ipa: "/parˈla.re/", t: "to speak / to talk", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "parlato", ger: "parlando",
    meaning: "Speaking a language or having a conversation.",
    ex: [
      ["Parli inglese?", "Do you speak English?"],
      ["Parliamo di lavoro.", "Let's talk about work."],
      ["Parla più lentamente.", "Speak more slowly."],
      ["Ho parlato con Marco.", "I spoke with Marco."]
    ],
    conj: { pres: ["parlo","parli","parla","parliamo","parlate","parlano"], imp: ["parlavo","parlavi","parlava","parlavamo","parlavate","parlavano"], pp: ["ho parlato","hai parlato","ha parlato","abbiamo parlato","avete parlato","hanno parlato"], fut: ["parlerò","parlerai","parlerà","parleremo","parlerete","parleranno"], cond: ["parlerei","parleresti","parlerebbe","parleremmo","parlereste","parlerebbero"], sub: ["parli","parli","parli","parliamo","parliate","parlino"] }
  },
  {
    v: "sapere", ipa: "/saˈpe.re/", t: "to know (facts)", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "saputo", ger: "sapendo",
    meaning: "Know facts, information, or how to do something.",
    ex: [
      ["So la risposta.", "I know the answer."],
      ["So nuotare.", "I know how to swim."],
      ["Non so cosa fare.", "I don't know what to do."],
      ["Sai dov'è la stazione?", "Do you know where the station is?"]
    ],
    note: "Sapere = facts/skills. Conoscere = people/places.",
    conj: { pres: ["so","sai","sa","sappiamo","sapete","sanno"], imp: ["sapevo","sapevi","sapeva","sapevamo","sapevate","sapevano"], pp: ["ho saputo","hai saputo","ha saputo","abbiamo saputo","avete saputo","hanno saputo"], fut: ["saprò","saprai","saprà","sapremo","saprete","sapranno"], cond: ["saprei","sapresti","saprebbe","sapremmo","sapreste","saprebbero"], sub: ["sappia","sappia","sappia","sappiamo","sappiate","sappiano"] }
  },
  {
    v: "conoscere", ipa: "/koˈnoʃ.ʃe.re/", t: "to know (familiarity)", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "conosciuto", ger: "conoscendo",
    meaning: "Know people, places, or be familiar with something.",
    ex: [
      ["Conosco Marco.", "I know Marco."],
      ["Conosci Milano?", "Do you know Milan?"],
      ["Ho conosciuto sua madre.", "I met his mother."],
      ["Conosciamo un buon ristorante.", "We know a good restaurant."]
    ],
    note: "In passato remoto, 'conobbi' = 'I met' (first time).",
    conj: { pres: ["conosco","conosci","conosce","conosciamo","conoscete","conoscono"], imp: ["conoscevo","conoscevi","conosceva","conoscevamo","conoscevate","conoscevano"], pp: ["ho conosciuto","hai conosciuto","ha conosciuto","abbiamo conosciuto","avete conosciuto","hanno conosciuto"], fut: ["conoscerò","conoscerai","conoscerà","conosceremo","conoscerete","conosceranno"], cond: ["conoscerei","conosceresti","conoscerebbe","conosceremmo","conoscereste","conoscerebbero"], sub: ["conosca","conosca","conosca","conosciamo","conosciate","conoscano"] }
  },
  {
    v: "chiedere", ipa: "/ˈkjɛ.de.re/", t: "to ask", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "chiesto", ger: "chiedendo",
    meaning: "Asking for information or help. Use 'chiedere a qualcuno'.",
    ex: [
      ["Chiedo aiuto.", "I ask for help."],
      ["Mi ha chiesto l'ora.", "He asked me the time."],
      ["Chiedi a tuo padre.", "Ask your father."],
      ["Chiediamo il conto.", "Let's ask for the bill."]
    ],
    conj: { pres: ["chiedo","chiedi","chiede","chiediamo","chiedete","chiedono"], imp: ["chiedevo","chiedevi","chiedeva","chiedevamo","chiedevate","chiedevano"], pp: ["ho chiesto","hai chiesto","ha chiesto","abbiamo chiesto","avete chiesto","hanno chiesto"], fut: ["chiederò","chiederai","chiederà","chiederemo","chiederete","chiederanno"], cond: ["chiederei","chiederesti","chiederebbe","chiederemmo","chiedereste","chiederebbero"], sub: ["chieda","chieda","chieda","chiediamo","chiediate","chiedano"] }
  },
  {
    v: "rispondere", ipa: "/risˈpon.de.re/", t: "to answer", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "risposto", ger: "rispondendo",
    meaning: "Replying to a question, message, or call. Use 'rispondere a'.",
    ex: [
      ["Rispondo al telefono.", "I answer the phone."],
      ["Non ha risposto.", "He didn't reply."],
      ["Rispondi alla mia domanda.", "Answer my question."],
      ["Le ho risposto subito.", "I replied to her right away."]
    ],
    conj: { pres: ["rispondo","rispondi","risponde","rispondiamo","rispondete","rispondono"], imp: ["rispondevo","rispondevi","rispondeva","rispondevamo","rispondevate","rispondevano"], pp: ["ho risposto","hai risposto","ha risposto","abbiamo risposto","avete risposto","hanno risposto"], fut: ["risponderò","risponderai","risponderà","risponderemo","risponderete","risponderanno"], cond: ["risponderei","risponderesti","risponderebbe","risponderemmo","rispondereste","risponderebbero"], sub: ["risponda","risponda","risponda","rispondiamo","rispondiate","rispondano"] }
  },
  {
    v: "chiamare", ipa: "/kjaˈma.re/", t: "to call", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "chiamato", ger: "chiamando",
    meaning: "Reflexive 'chiamarsi' = 'to be called' (your name).",
    ex: [
      ["Ti chiamo dopo.", "I'll call you later."],
      ["Mi chiamo Anna.", "My name is Anna."],
      ["Chiama un taxi.", "Call a taxi."],
      ["Come ti chiami?", "What's your name?"]
    ],
    conj: { pres: ["chiamo","chiami","chiama","chiamiamo","chiamate","chiamano"], imp: ["chiamavo","chiamavi","chiamava","chiamavamo","chiamavate","chiamavano"], pp: ["ho chiamato","hai chiamato","ha chiamato","abbiamo chiamato","avete chiamato","hanno chiamato"], fut: ["chiamerò","chiamerai","chiamerà","chiameremo","chiamerete","chiameranno"], cond: ["chiamerei","chiameresti","chiamerebbe","chiameremmo","chiamereste","chiamerebbero"], sub: ["chiami","chiami","chiami","chiamiamo","chiamiate","chiamino"] }
  },
  {
    v: "scrivere", ipa: "/ˈskri.ve.re/", t: "to write", cat: "communication", catLabel: "Communication",
    aux: "avere", pp: "scritto", ger: "scrivendo",
    meaning: "Irregular past participle: scritto.",
    ex: [
      ["Scrivo un'email.", "I'm writing an email."],
      ["Ho scritto il libro.", "I wrote the book."],
      ["Scrivimi presto.", "Write to me soon."],
      ["Scriviamo una lettera insieme.", "Let's write a letter together."]
    ],
    conj: { pres: ["scrivo","scrivi","scrive","scriviamo","scrivete","scrivono"], imp: ["scrivevo","scrivevi","scriveva","scrivevamo","scrivevate","scrivevano"], pp: ["ho scritto","hai scritto","ha scritto","abbiamo scritto","avete scritto","hanno scritto"], fut: ["scriverò","scriverai","scriverà","scriveremo","scriverete","scriveranno"], cond: ["scriverei","scriveresti","scriverebbe","scriveremmo","scrivereste","scriverebbero"], sub: ["scriva","scriva","scriva","scriviamo","scriviate","scrivano"] }
  },

  // ============ COGNITION ============
  {
    v: "vedere", ipa: "/veˈde.re/", t: "to see", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "visto", ger: "vedendo",
    meaning: "Visual perception. Reflexive 'vedersi' = 'to see each other'.",
    ex: [
      ["Vedo la luna.", "I see the moon."],
      ["Ci vediamo!", "See you!"],
      ["Hai visto il film?", "Have you seen the film?"],
      ["Non vedo niente.", "I don't see anything."]
    ],
    conj: { pres: ["vedo","vedi","vede","vediamo","vedete","vedono"], imp: ["vedevo","vedevi","vedeva","vedevamo","vedevate","vedevano"], pp: ["ho visto","hai visto","ha visto","abbiamo visto","avete visto","hanno visto"], fut: ["vedrò","vedrai","vedrà","vedremo","vedrete","vedranno"], cond: ["vedrei","vedresti","vedrebbe","vedremmo","vedreste","vedrebbero"], sub: ["veda","veda","veda","vediamo","vediate","vedano"] }
  },
  {
    v: "sentire", ipa: "/senˈti.re/", t: "to hear / to feel", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "sentito", ger: "sentendo",
    meaning: "Hearing, feeling, smelling. Reflexive 'sentirsi' = 'to feel'.",
    ex: [
      ["Senti la musica?", "Do you hear the music?"],
      ["Mi sento bene.", "I feel well."],
      ["Sento un buon profumo.", "I smell something nice."],
      ["Non ti sento, parla più forte.", "I can't hear you, speak louder."]
    ],
    conj: { pres: ["sento","senti","sente","sentiamo","sentite","sentono"], imp: ["sentivo","sentivi","sentiva","sentivamo","sentivate","sentivano"], pp: ["ho sentito","hai sentito","ha sentito","abbiamo sentito","avete sentito","hanno sentito"], fut: ["sentirò","sentirai","sentirà","sentiremo","sentirete","sentiranno"], cond: ["sentirei","sentiresti","sentirebbe","sentiremmo","sentireste","sentirebbero"], sub: ["senta","senta","senta","sentiamo","sentiate","sentano"] }
  },
  {
    v: "guardare", ipa: "/ɡwarˈda.re/", t: "to watch / to look at", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "guardato", ger: "guardando",
    meaning: "Active looking (watching TV, looking at). No preposition needed.",
    ex: [
      ["Guardo la TV.", "I'm watching TV."],
      ["Guarda quello!", "Look at that!"],
      ["Guardiamo le foto insieme.", "Let's look at the photos together."],
      ["Mi guardava fissamente.", "He was staring at me."]
    ],
    note: "Guardare = active looking. Vedere = passive seeing.",
    conj: { pres: ["guardo","guardi","guarda","guardiamo","guardate","guardano"], imp: ["guardavo","guardavi","guardava","guardavamo","guardavate","guardavano"], pp: ["ho guardato","hai guardato","ha guardato","abbiamo guardato","avete guardato","hanno guardato"], fut: ["guarderò","guarderai","guarderà","guarderemo","guarderete","guarderanno"], cond: ["guarderei","guarderesti","guarderebbe","guarderemmo","guardereste","guarderebbero"], sub: ["guardi","guardi","guardi","guardiamo","guardiate","guardino"] }
  },
  {
    v: "ascoltare", ipa: "/as.kolˈta.re/", t: "to listen", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "ascoltato", ger: "ascoltando",
    meaning: "Active listening. No preposition: 'ascolto la musica' (not 'a la').",
    ex: [
      ["Ascolto la musica.", "I'm listening to music."],
      ["Ascoltami!", "Listen to me!"],
      ["Ascoltiamo il professore.", "We're listening to the professor."],
      ["Non mi ascolta mai.", "He never listens to me."]
    ],
    note: "Ascoltare = active listening. Sentire = hearing (passive).",
    conj: { pres: ["ascolto","ascolti","ascolta","ascoltiamo","ascoltate","ascoltano"], imp: ["ascoltavo","ascoltavi","ascoltava","ascoltavamo","ascoltavate","ascoltavano"], pp: ["ho ascoltato","hai ascoltato","ha ascoltato","abbiamo ascoltato","avete ascoltato","hanno ascoltato"], fut: ["ascolterò","ascolterai","ascolterà","ascolteremo","ascolterete","ascolteranno"], cond: ["ascolterei","ascolteresti","ascolterebbe","ascolteremmo","ascoltereste","ascolterebbero"], sub: ["ascolti","ascolti","ascolti","ascoltiamo","ascoltiate","ascoltino"] }
  },
  {
    v: "pensare", ipa: "/penˈsa.re/", t: "to think", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "pensato", ger: "pensando",
    meaning: "'Pensare che' triggers subjunctive. 'Pensare a' = think about.",
    ex: [
      ["Penso che sia vero.", "I think it's true."],
      ["Penso a te.", "I'm thinking of you."],
      ["Cosa ne pensi?", "What do you think about it?"],
      ["Pensavo di andare via.", "I was thinking of leaving."]
    ],
    conj: { pres: ["penso","pensi","pensa","pensiamo","pensate","pensano"], imp: ["pensavo","pensavi","pensava","pensavamo","pensavate","pensavano"], pp: ["ho pensato","hai pensato","ha pensato","abbiamo pensato","avete pensato","hanno pensato"], fut: ["penserò","penserai","penserà","penseremo","penserete","penseranno"], cond: ["penserei","penseresti","penserebbe","penseremmo","pensereste","penserebbero"], sub: ["pensi","pensi","pensi","pensiamo","pensiate","pensino"] }
  },
  {
    v: "credere", ipa: "/ˈkre.de.re/", t: "to believe", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "creduto", ger: "credendo",
    meaning: "Belief or opinion. 'Credere a' = believe (someone), 'credere in' = believe in.",
    ex: [
      ["Credo di sì.", "I believe so."],
      ["Non ci credo!", "I don't believe it!"],
      ["Credo in te.", "I believe in you."],
      ["Non gli credo affatto.", "I don't believe him at all."]
    ],
    conj: { pres: ["credo","credi","crede","crediamo","credete","credono"], imp: ["credevo","credevi","credeva","credevamo","credevate","credevano"], pp: ["ho creduto","hai creduto","ha creduto","abbiamo creduto","avete creduto","hanno creduto"], fut: ["crederò","crederai","crederà","crederemo","crederete","crederanno"], cond: ["crederei","crederesti","crederebbe","crederemmo","credereste","crederebbero"], sub: ["creda","creda","creda","crediamo","crediate","credano"] }
  },
  {
    v: "capire", ipa: "/kaˈpi.re/", t: "to understand", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "capito", ger: "capendo",
    meaning: "-isc verb: insert -isc- in singular and 3rd plural present.",
    ex: [
      ["Non capisco.", "I don't understand."],
      ["Hai capito?", "Did you get it?"],
      ["Capisco l'italiano.", "I understand Italian."],
      ["Adesso ho capito tutto.", "Now I understand everything."]
    ],
    conj: { pres: ["capisco","capisci","capisce","capiamo","capite","capiscono"], imp: ["capivo","capivi","capiva","capivamo","capivate","capivano"], pp: ["ho capito","hai capito","ha capito","abbiamo capito","avete capito","hanno capito"], fut: ["capirò","capirai","capirà","capiremo","capirete","capiranno"], cond: ["capirei","capiresti","capirebbe","capiremmo","capireste","capirebbero"], sub: ["capisca","capisca","capisca","capiamo","capiate","capiscano"] }
  },
  {
    v: "leggere", ipa: "/ˈlɛd.dʒe.re/", t: "to read", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "letto", ger: "leggendo",
    meaning: "Irregular past participle: letto. Passato remoto: lessi.",
    ex: [
      ["Leggo un libro.", "I'm reading a book."],
      ["Hai letto il giornale?", "Did you read the newspaper?"],
      ["Leggi ad alta voce.", "Read out loud."],
      ["Leggevo molto da bambino.", "I used to read a lot as a child."]
    ],
    conj: { pres: ["leggo","leggi","legge","leggiamo","leggete","leggono"], imp: ["leggevo","leggevi","leggeva","leggevamo","leggevate","leggevano"], pp: ["ho letto","hai letto","ha letto","abbiamo letto","avete letto","hanno letto"], fut: ["leggerò","leggerai","leggerà","leggeremo","leggerete","leggeranno"], cond: ["leggerei","leggeresti","leggerebbe","leggeremmo","leggereste","leggerebbero"], sub: ["legga","legga","legga","leggiamo","leggiate","leggano"] }
  },
  {
    v: "ricordare", ipa: "/ri.korˈda.re/", t: "to remember", cat: "cognition", catLabel: "Cognition",
    aux: "avere", pp: "ricordato", ger: "ricordando",
    meaning: "Reflexive 'ricordarsi di' is more common in everyday speech.",
    ex: [
      ["Ricordo il suo nome.", "I remember his name."],
      ["Mi ricordo di te.", "I remember you."],
      ["Non ricordo dove ho messo le chiavi.", "I don't remember where I put the keys."],
      ["Ricordati di chiamarmi.", "Remember to call me."]
    ],
    note: "Both 'ricordare' and 'ricordarsi' work — reflexive form is more colloquial.",
    conj: { pres: ["ricordo","ricordi","ricorda","ricordiamo","ricordate","ricordano"], imp: ["ricordavo","ricordavi","ricordava","ricordavamo","ricordavate","ricordavano"], pp: ["ho ricordato","hai ricordato","ha ricordato","abbiamo ricordato","avete ricordato","hanno ricordato"], fut: ["ricorderò","ricorderai","ricorderà","ricorderemo","ricorderete","ricorderanno"], cond: ["ricorderei","ricorderesti","ricorderebbe","ricorderemmo","ricordereste","ricorderebbero"], sub: ["ricordi","ricordi","ricordi","ricordiamo","ricordiate","ricordino"] }
  },

  // ============ ACTION & MOTION ============
  {
    v: "venire", ipa: "/veˈni.re/", t: "to come", cat: "action", catLabel: "Action",
    aux: "essere", pp: "venuto", ger: "venendo",
    meaning: "Movement toward speaker. Also used in passive constructions.",
    ex: [
      ["Vieni qui!", "Come here!"],
      ["Vengo dall'Italia.", "I come from Italy."],
      ["Vieni con noi?", "Are you coming with us?"],
      ["È venuta a trovarmi.", "She came to visit me."]
    ],
    conj: { pres: ["vengo","vieni","viene","veniamo","venite","vengono"], imp: ["venivo","venivi","veniva","venivamo","venivate","venivano"], pp: ["sono venuto/a","sei venuto/a","è venuto/a","siamo venuti/e","siete venuti/e","sono venuti/e"], fut: ["verrò","verrai","verrà","verremo","verrete","verranno"], cond: ["verrei","verresti","verrebbe","verremmo","verreste","verrebbero"], sub: ["venga","venga","venga","veniamo","veniate","vengano"] }
  },
  {
    v: "dare", ipa: "/ˈda.re/", t: "to give", cat: "action", catLabel: "Action",
    aux: "avere", pp: "dato", ger: "dando",
    meaning: "Giving + idioms: dare un esame, dare del tu (use informal address).",
    ex: [
      ["Mi dai una mano?", "Can you give me a hand?"],
      ["Dare un esame.", "To take an exam."],
      ["Dammi il libro.", "Give me the book."],
      ["Le ho dato un regalo.", "I gave her a gift."]
    ],
    conj: { pres: ["do","dai","dà","diamo","date","danno"], imp: ["davo","davi","dava","davamo","davate","davano"], pp: ["ho dato","hai dato","ha dato","abbiamo dato","avete dato","hanno dato"], fut: ["darò","darai","darà","daremo","darete","daranno"], cond: ["darei","daresti","darebbe","daremmo","dareste","darebbero"], sub: ["dia","dia","dia","diamo","diate","diano"] }
  },
  {
    v: "prendere", ipa: "/ˈprɛn.de.re/", t: "to take / to get", cat: "action", catLabel: "Action",
    aux: "avere", pp: "preso", ger: "prendendo",
    meaning: "Taking transport, food, drinks. High-frequency in cafés and restaurants.",
    ex: [
      ["Prendo l'autobus.", "I take the bus."],
      ["Prendo un caffè.", "I'll have a coffee."],
      ["Prendi le chiavi, per favore.", "Take the keys, please."],
      ["Ho preso un raffreddore.", "I caught a cold."]
    ],
    conj: { pres: ["prendo","prendi","prende","prendiamo","prendete","prendono"], imp: ["prendevo","prendevi","prendeva","prendevamo","prendevate","prendevano"], pp: ["ho preso","hai preso","ha preso","abbiamo preso","avete preso","hanno preso"], fut: ["prenderò","prenderai","prenderà","prenderemo","prenderete","prenderanno"], cond: ["prenderei","prenderesti","prenderebbe","prenderemmo","prendereste","prenderebbero"], sub: ["prenda","prenda","prenda","prendiamo","prendiate","prendano"] }
  },
  {
    v: "mettere", ipa: "/ˈmet.te.re/", t: "to put / to place", cat: "action", catLabel: "Action",
    aux: "avere", pp: "messo", ger: "mettendo",
    meaning: "Placing. Reflexive 'mettersi' = put on (clothes) or start doing.",
    ex: [
      ["Metti il libro sul tavolo.", "Put the book on the table."],
      ["Mi metto la giacca.", "I put on the jacket."],
      ["Dove hai messo le chiavi?", "Where did you put the keys?"],
      ["Mettiamoci al lavoro.", "Let's get to work."]
    ],
    conj: { pres: ["metto","metti","mette","mettiamo","mettete","mettono"], imp: ["mettevo","mettevi","metteva","mettevamo","mettevate","mettevano"], pp: ["ho messo","hai messo","ha messo","abbiamo messo","avete messo","hanno messo"], fut: ["metterò","metterai","metterà","metteremo","metterete","metteranno"], cond: ["metterei","metteresti","metterebbe","metteremmo","mettereste","metterebbero"], sub: ["metta","metta","metta","mettiamo","mettiate","mettano"] }
  },
  {
    v: "portare", ipa: "/porˈta.re/", t: "to bring / to wear", cat: "action", catLabel: "Action",
    aux: "avere", pp: "portato", ger: "portando",
    meaning: "Bringing, carrying, or wearing. Context disambiguates.",
    ex: [
      ["Porto il vino.", "I'll bring the wine."],
      ["Porta gli occhiali.", "He wears glasses."],
      ["Mi porti a casa?", "Will you take me home?"],
      ["Ho portato i bambini al parco.", "I took the children to the park."]
    ],
    conj: { pres: ["porto","porti","porta","portiamo","portate","portano"], imp: ["portavo","portavi","portava","portavamo","portavate","portavano"], pp: ["ho portato","hai portato","ha portato","abbiamo portato","avete portato","hanno portato"], fut: ["porterò","porterai","porterà","porteremo","porterete","porteranno"], cond: ["porterei","porteresti","porterebbe","porteremmo","portereste","porterebbero"], sub: ["porti","porti","porti","portiamo","portiate","portino"] }
  },
  {
    v: "trovare", ipa: "/troˈva.re/", t: "to find", cat: "action", catLabel: "Action",
    aux: "avere", pp: "trovato", ger: "trovando",
    meaning: "Finding. Reflexive 'trovarsi' = be located, feel comfortable.",
    ex: [
      ["Non trovo le chiavi.", "I can't find the keys."],
      ["Mi trovo bene qui.", "I feel good here."],
      ["Ho trovato un buon ristorante.", "I found a good restaurant."],
      ["Dove si trova il museo?", "Where is the museum located?"]
    ],
    conj: { pres: ["trovo","trovi","trova","troviamo","trovate","trovano"], imp: ["trovavo","trovavi","trovava","trovavamo","trovavate","trovavano"], pp: ["ho trovato","hai trovato","ha trovato","abbiamo trovato","avete trovato","hanno trovato"], fut: ["troverò","troverai","troverà","troveremo","troverete","troveranno"], cond: ["troverei","troveresti","troverebbe","troveremmo","trovereste","troverebbero"], sub: ["trovi","trovi","trovi","troviamo","troviate","trovino"] }
  },
  {
    v: "uscire", ipa: "/uʃˈʃi.re/", t: "to go out", cat: "action", catLabel: "Action",
    aux: "essere", pp: "uscito", ger: "uscendo",
    meaning: "Irregular present stem 'esc-' in singular and 3rd plural.",
    ex: [
      ["Esco con gli amici.", "I'm going out with friends."],
      ["A che ora esci?", "What time do you leave?"],
      ["Sono uscito di casa alle otto.", "I left home at eight."],
      ["Usciamo a cena stasera.", "Let's go out for dinner tonight."]
    ],
    conj: { pres: ["esco","esci","esce","usciamo","uscite","escono"], imp: ["uscivo","uscivi","usciva","uscivamo","uscivate","uscivano"], pp: ["sono uscito/a","sei uscito/a","è uscito/a","siamo usciti/e","siete usciti/e","sono usciti/e"], fut: ["uscirò","uscirai","uscirà","usciremo","uscirete","usciranno"], cond: ["uscirei","usciresti","uscirebbe","usciremmo","uscireste","uscirebbero"], sub: ["esca","esca","esca","usciamo","usciate","escano"] }
  },
  {
    v: "tornare", ipa: "/torˈna.re/", t: "to return", cat: "action", catLabel: "Action",
    aux: "essere", pp: "tornato", ger: "tornando",
    meaning: "Coming back to a place. Regular -are verb with essere auxiliary.",
    ex: [
      ["Torno a casa.", "I'm going home."],
      ["È tornato ieri.", "He came back yesterday."],
      ["Quando torni?", "When are you coming back?"],
      ["Torniamo a parlarne domani.", "Let's talk about it again tomorrow."]
    ],
    conj: { pres: ["torno","torni","torna","torniamo","tornate","tornano"], imp: ["tornavo","tornavi","tornava","tornavamo","tornavate","tornavano"], pp: ["sono tornato/a","sei tornato/a","è tornato/a","siamo tornati/e","siete tornati/e","sono tornati/e"], fut: ["tornerò","tornerai","tornerà","torneremo","tornerete","torneranno"], cond: ["tornerei","torneresti","tornerebbe","torneremmo","tornereste","tornerebbero"], sub: ["torni","torni","torni","torniamo","torniate","tornino"] }
  },
  {
    v: "aspettare", ipa: "/as.petˈta.re/", t: "to wait (for)", cat: "action", catLabel: "Action",
    aux: "avere", pp: "aspettato", ger: "aspettando",
    meaning: "No preposition before object — unlike English 'wait FOR'.",
    ex: [
      ["Aspetto l'autobus.", "I'm waiting for the bus."],
      ["Aspettami!", "Wait for me!"],
      ["Aspettiamo da un'ora.", "We've been waiting for an hour."],
      ["Aspetta un momento.", "Wait a moment."]
    ],
    conj: { pres: ["aspetto","aspetti","aspetta","aspettiamo","aspettate","aspettano"], imp: ["aspettavo","aspettavi","aspettava","aspettavamo","aspettavate","aspettavano"], pp: ["ho aspettato","hai aspettato","ha aspettato","abbiamo aspettato","avete aspettato","hanno aspettato"], fut: ["aspetterò","aspetterai","aspetterà","aspetteremo","aspetterete","aspetteranno"], cond: ["aspetterei","aspetteresti","aspetterebbe","aspetteremmo","aspettereste","aspetterebbero"], sub: ["aspetti","aspetti","aspetti","aspettiamo","aspettiate","aspettino"] }
  },
  {
    v: "cercare", ipa: "/tʃerˈka.re/", t: "to look for", cat: "action", catLabel: "Action",
    aux: "avere", pp: "cercato", ger: "cercando",
    meaning: "Adds 'h' before 'i' or 'e' to keep hard 'k' sound: cerchi, cercherò.",
    ex: [
      ["Cerco lavoro.", "I'm looking for a job."],
      ["Cosa cerchi?", "What are you looking for?"],
      ["Cerca di capire.", "Try to understand."],
      ["Sto cercando il mio cane.", "I'm looking for my dog."]
    ],
    conj: { pres: ["cerco","cerchi","cerca","cerchiamo","cercate","cercano"], imp: ["cercavo","cercavi","cercava","cercavamo","cercavate","cercavano"], pp: ["ho cercato","hai cercato","ha cercato","abbiamo cercato","avete cercato","hanno cercato"], fut: ["cercherò","cercherai","cercherà","cercheremo","cercherete","cercheranno"], cond: ["cercherei","cercheresti","cercherebbe","cercheremmo","cerchereste","cercherebbero"], sub: ["cerchi","cerchi","cerchi","cerchiamo","cerchiate","cerchino"] }
  },
  {
    v: "arrivare", ipa: "/ar.riˈva.re/", t: "to arrive", cat: "action", catLabel: "Action",
    aux: "essere", pp: "arrivato", ger: "arrivando",
    meaning: "Reaching a destination. Always uses essere as auxiliary.",
    ex: [
      ["Arrivo alle 8.", "I arrive at 8."],
      ["È arrivato il treno.", "The train has arrived."],
      ["Quando arrivi?", "When are you arriving?"],
      ["Siamo arrivati a casa.", "We arrived home."]
    ],
    conj: { pres: ["arrivo","arrivi","arriva","arriviamo","arrivate","arrivano"], imp: ["arrivavo","arrivavi","arrivava","arrivavamo","arrivavate","arrivavano"], pp: ["sono arrivato/a","sei arrivato/a","è arrivato/a","siamo arrivati/e","siete arrivati/e","sono arrivati/e"], fut: ["arriverò","arriverai","arriverà","arriveremo","arriverete","arriveranno"], cond: ["arriverei","arriveresti","arriverebbe","arriveremmo","arrivereste","arriverebbero"], sub: ["arrivi","arrivi","arrivi","arriviamo","arriviate","arrivino"] }
  },
  {
    v: "cominciare", ipa: "/ko.minˈtʃa.re/", t: "to start / to begin", cat: "action", catLabel: "Action",
    aux: "avere/essere", pp: "cominciato", ger: "cominciando",
    meaning: "'Cominciare a + infinitive' = to start doing. Synonym: iniziare.",
    ex: [
      ["Comincio alle 9.", "I start at 9."],
      ["Ha cominciato a piovere.", "It started raining."],
      ["Cominciamo dalla prima pagina.", "Let's start from the first page."],
      ["Il film è già cominciato.", "The film has already started."]
    ],
    note: "Avere when there's an object; essere when intransitive (the show started).",
    conj: { pres: ["comincio","cominci","comincia","cominciamo","cominciate","cominciano"], imp: ["cominciavo","cominciavi","cominciava","cominciavamo","cominciavate","cominciavano"], pp: ["ho cominciato","hai cominciato","ha cominciato","abbiamo cominciato","avete cominciato","hanno cominciato"], fut: ["comincerò","comincerai","comincerà","cominceremo","comincerete","cominceranno"], cond: ["comincerei","cominceresti","comincerebbe","cominceremmo","comincereste","comincerebbero"], sub: ["cominci","cominci","cominci","cominciamo","cominciate","comincino"] }
  },
  {
    v: "finire", ipa: "/fiˈni.re/", t: "to finish / to end", cat: "action", catLabel: "Action",
    aux: "avere/essere", pp: "finito", ger: "finendo",
    meaning: "-isc verb (finisco). 'Finire di + infinitive' = finish doing.",
    ex: [
      ["Finisco alle 18.", "I finish at 6 PM."],
      ["Ho finito i compiti.", "I finished my homework."],
      ["Il film è finito.", "The film is over."],
      ["Finisci di mangiare.", "Finish eating."]
    ],
    note: "Avere with object; essere when intransitive (the film ended).",
    conj: { pres: ["finisco","finisci","finisce","finiamo","finite","finiscono"], imp: ["finivo","finivi","finiva","finivamo","finivate","finivano"], pp: ["ho finito","hai finito","ha finito","abbiamo finito","avete finito","hanno finito"], fut: ["finirò","finirai","finirà","finiremo","finirete","finiranno"], cond: ["finirei","finiresti","finirebbe","finiremmo","finireste","finirebbero"], sub: ["finisca","finisca","finisca","finiamo","finiate","finiscano"] }
  },
  {
    v: "correre", ipa: "/ˈkor.re.re/", t: "to run", cat: "action", catLabel: "Action",
    aux: "avere/essere", pp: "corso", ger: "correndo",
    meaning: "To run (sport, hurry). Essere when there's a destination, avere otherwise.",
    ex: [
      ["Corro ogni mattina.", "I run every morning."],
      ["È corso a casa.", "He ran home."],
      ["Corri, è tardi!", "Run, it's late!"],
      ["Ho corso per dieci chilometri.", "I ran for ten kilometers."]
    ],
    note: "Auxiliary: 'è corso a casa' (with destination) vs 'ha corso molto' (general).",
    conj: { pres: ["corro","corri","corre","corriamo","correte","corrono"], imp: ["correvo","correvi","correva","correvamo","correvate","correvano"], pp: ["ho corso","hai corso","ha corso","abbiamo corso","avete corso","hanno corso"], fut: ["correrò","correrai","correrà","correremo","correrete","correranno"], cond: ["correrei","correresti","correrebbe","correremmo","correreste","correrebbero"], sub: ["corra","corra","corra","corriamo","corriate","corrano"] }
  },
  {
    v: "accendere", ipa: "/atˈtʃɛn.de.re/", t: "to turn on / to light", cat: "action", catLabel: "Action",
    aux: "avere", pp: "acceso", ger: "accendendo",
    meaning: "Switching on devices, lighting fires/cigarettes/candles.",
    ex: [
      ["Accendo la luce.", "I'm turning on the light."],
      ["Hai acceso il computer?", "Did you turn on the computer?"],
      ["Accende una candela.", "She lights a candle."],
      ["Accendi la TV, per favore.", "Turn on the TV, please."]
    ],
    note: "Opposite of spegnere. Past participle 'acceso' is also an adjective.",
    conj: { pres: ["accendo","accendi","accende","accendiamo","accendete","accendono"], imp: ["accendevo","accendevi","accendeva","accendevamo","accendevate","accendevano"], pp: ["ho acceso","hai acceso","ha acceso","abbiamo acceso","avete acceso","hanno acceso"], fut: ["accenderò","accenderai","accenderà","accenderemo","accenderete","accenderanno"], cond: ["accenderei","accenderesti","accenderebbe","accenderemmo","accendereste","accenderebbero"], sub: ["accenda","accenda","accenda","accendiamo","accendiate","accendano"] }
  },
  {
    v: "spegnere", ipa: "/ˈspeɲ.ɲe.re/", t: "to turn off / to extinguish", cat: "action", catLabel: "Action",
    aux: "avere", pp: "spento", ger: "spegnendo",
    meaning: "Switching off devices or extinguishing fires/candles.",
    ex: [
      ["Spegni la luce.", "Turn off the light."],
      ["Ho spento il telefono.", "I turned off the phone."],
      ["Spegni la candela e esprimi un desiderio.", "Blow out the candle and make a wish."],
      ["Il fuoco si è spento da solo.", "The fire went out on its own."]
    ],
    note: "Highly irregular: 'gn' becomes 'ng' in some forms (spengo, spengono).",
    conj: { pres: ["spengo","spegni","spegne","spegniamo","spegnete","spengono"], imp: ["spegnevo","spegnevi","spegneva","spegnevamo","spegnevate","spegnevano"], pp: ["ho spento","hai spento","ha spento","abbiamo spento","avete spento","hanno spento"], fut: ["spegnerò","spegnerai","spegnerà","spegneremo","spegnerete","spegneranno"], cond: ["spegnerei","spegneresti","spegnerebbe","spegneremmo","spegnereste","spegnerebbero"], sub: ["spenga","spenga","spenga","spegniamo","spegniate","spengano"] }
  },
  {
    v: "fermarsi", ipa: "/ferˈmar.si/", t: "to stop (oneself)", cat: "action", catLabel: "Action",
    aux: "essere", pp: "fermato", ger: "fermandosi",
    meaning: "Reflexive 'to stop'. Non-reflexive 'fermare' = to stop someone/something.",
    ex: [
      ["Mi fermo qui.", "I'm stopping here."],
      ["Si è fermato al semaforo.", "He stopped at the traffic light."],
      ["Fermati! Pericolo!", "Stop! Danger!"],
      ["Ci siamo fermati a pranzo.", "We stopped for lunch."]
    ],
    note: "Reflexive form is by far the most common.",
    conj: { pres: ["mi fermo","ti fermi","si ferma","ci fermiamo","vi fermate","si fermano"], imp: ["mi fermavo","ti fermavi","si fermava","ci fermavamo","vi fermavate","si fermavano"], pp: ["mi sono fermato/a","ti sei fermato/a","si è fermato/a","ci siamo fermati/e","vi siete fermati/e","si sono fermati/e"], fut: ["mi fermerò","ti fermerai","si fermerà","ci fermeremo","vi fermerete","si fermeranno"], cond: ["mi fermerei","ti fermeresti","si fermerebbe","ci fermeremmo","vi fermereste","si fermerebbero"], sub: ["mi fermi","ti fermi","si fermi","ci fermiamo","vi fermiate","si fermino"] }
  },

  // ============ DAILY LIFE ============
  {
    v: "vivere", ipa: "/ˈvi.ve.re/", t: "to live", cat: "daily", catLabel: "Daily life",
    aux: "essere/avere", pp: "vissuto", ger: "vivendo",
    meaning: "Live in a place (essere) or experience life (avere).",
    ex: [
      ["Vivo a Milano.", "I live in Milan."],
      ["Vivere un'esperienza.", "To live an experience."],
      ["Hanno vissuto una bella vita.", "They lived a good life."],
      ["Vivo da solo.", "I live alone."]
    ],
    conj: { pres: ["vivo","vivi","vive","viviamo","vivete","vivono"], imp: ["vivevo","vivevi","viveva","vivevamo","vivevate","vivevano"], pp: ["sono vissuto/a","sei vissuto/a","è vissuto/a","siamo vissuti/e","siete vissuti/e","sono vissuti/e"], fut: ["vivrò","vivrai","vivrà","vivremo","vivrete","vivranno"], cond: ["vivrei","vivresti","vivrebbe","vivremmo","vivreste","vivrebbero"], sub: ["viva","viva","viva","viviamo","viviate","vivano"] }
  },
  {
    v: "lavorare", ipa: "/la.voˈra.re/", t: "to work", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "lavorato", ger: "lavorando",
    meaning: "Regular -are verb. Use 'lavorare come' for profession.",
    ex: [
      ["Lavoro da casa.", "I work from home."],
      ["Lavora come ingegnere.", "He works as an engineer."],
      ["Lavoriamo insieme da anni.", "We've been working together for years."],
      ["Hai lavorato bene.", "You've done good work."]
    ],
    conj: { pres: ["lavoro","lavori","lavora","lavoriamo","lavorate","lavorano"], imp: ["lavoravo","lavoravi","lavorava","lavoravamo","lavoravate","lavoravano"], pp: ["ho lavorato","hai lavorato","ha lavorato","abbiamo lavorato","avete lavorato","hanno lavorato"], fut: ["lavorerò","lavorerai","lavorerà","lavoreremo","lavorerete","lavoreranno"], cond: ["lavorerei","lavoreresti","lavorerebbe","lavoreremmo","lavorereste","lavorerebbero"], sub: ["lavori","lavori","lavori","lavoriamo","lavoriate","lavorino"] }
  },
  {
    v: "mangiare", ipa: "/manˈdʒa.re/", t: "to eat", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "mangiato", ger: "mangiando",
    meaning: "Drops 'i' before 'i' or 'e' endings: mangio, mangi (not mangii).",
    ex: [
      ["Mangio la pizza.", "I'm eating pizza."],
      ["Andiamo a mangiare?", "Shall we go eat?"],
      ["Cosa mangiamo stasera?", "What are we eating tonight?"],
      ["Ho mangiato troppo.", "I ate too much."]
    ],
    conj: { pres: ["mangio","mangi","mangia","mangiamo","mangiate","mangiano"], imp: ["mangiavo","mangiavi","mangiava","mangiavamo","mangiavate","mangiavano"], pp: ["ho mangiato","hai mangiato","ha mangiato","abbiamo mangiato","avete mangiato","hanno mangiato"], fut: ["mangerò","mangerai","mangerà","mangeremo","mangerete","mangeranno"], cond: ["mangerei","mangeresti","mangerebbe","mangeremmo","mangereste","mangerebbero"], sub: ["mangi","mangi","mangi","mangiamo","mangiate","mangino"] }
  },
  {
    v: "bere", ipa: "/ˈbe.re/", t: "to drink", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "bevuto", ger: "bevendo",
    meaning: "Highly irregular: stem becomes 'bev-'. From Latin 'bibere'.",
    ex: [
      ["Bevo acqua.", "I drink water."],
      ["Cosa bevi?", "What are you drinking?"],
      ["Beviamo un caffè insieme.", "Let's drink a coffee together."],
      ["Ha bevuto troppo vino.", "He drank too much wine."]
    ],
    conj: { pres: ["bevo","bevi","beve","beviamo","bevete","bevono"], imp: ["bevevo","bevevi","beveva","bevevamo","bevevate","bevevano"], pp: ["ho bevuto","hai bevuto","ha bevuto","abbiamo bevuto","avete bevuto","hanno bevuto"], fut: ["berrò","berrai","berrà","berremo","berrete","berranno"], cond: ["berrei","berresti","berrebbe","berremmo","berreste","berrebbero"], sub: ["beva","beva","beva","beviamo","beviate","bevano"] }
  },
  {
    v: "comprare", ipa: "/komˈpra.re/", t: "to buy", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "comprato", ger: "comprando",
    meaning: "Regular -are verb. Synonym: acquistare (more formal).",
    ex: [
      ["Compro il pane.", "I'm buying bread."],
      ["L'ho comprato ieri.", "I bought it yesterday."],
      ["Cosa compriamo per cena?", "What shall we buy for dinner?"],
      ["Ha comprato una macchina nuova.", "He bought a new car."]
    ],
    conj: { pres: ["compro","compri","compra","compriamo","comprate","comprano"], imp: ["compravo","compravi","comprava","compravamo","compravate","compravano"], pp: ["ho comprato","hai comprato","ha comprato","abbiamo comprato","avete comprato","hanno comprato"], fut: ["comprerò","comprerai","comprerà","compreremo","comprerete","compreranno"], cond: ["comprerei","compreresti","comprerebbe","compreremmo","comprereste","comprerebbero"], sub: ["compri","compri","compri","compriamo","compriate","comprino"] }
  },
  {
    v: "studiare", ipa: "/stuˈdja.re/", t: "to study", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "studiato", ger: "studiando",
    meaning: "Regular -are verb. Drops 'i' before i/e: studi (not studii).",
    ex: [
      ["Studio italiano.", "I'm studying Italian."],
      ["Cosa studi?", "What do you study?"],
      ["Studiavo all'università.", "I used to study at university."],
      ["Devo studiare per l'esame.", "I have to study for the exam."]
    ],
    conj: { pres: ["studio","studi","studia","studiamo","studiate","studiano"], imp: ["studiavo","studiavi","studiava","studiavamo","studiavate","studiavano"], pp: ["ho studiato","hai studiato","ha studiato","abbiamo studiato","avete studiato","hanno studiato"], fut: ["studierò","studierai","studierà","studieremo","studierete","studieranno"], cond: ["studierei","studieresti","studierebbe","studieremmo","studiereste","studierebbero"], sub: ["studi","studi","studi","studiamo","studiate","studino"] }
  },
  {
    v: "dormire", ipa: "/dorˈmi.re/", t: "to sleep", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "dormito", ger: "dormendo",
    meaning: "Regular -ire verb (no -isc-). 'Andare a dormire' = to go to bed.",
    ex: [
      ["Dormo otto ore.", "I sleep eight hours."],
      ["Ho dormito bene.", "I slept well."],
      ["Dormi bene!", "Sleep well!"],
      ["Il bambino sta dormendo.", "The baby is sleeping."]
    ],
    conj: { pres: ["dormo","dormi","dorme","dormiamo","dormite","dormono"], imp: ["dormivo","dormivi","dormiva","dormivamo","dormivate","dormivano"], pp: ["ho dormito","hai dormito","ha dormito","abbiamo dormito","avete dormito","hanno dormito"], fut: ["dormirò","dormirai","dormirà","dormiremo","dormirete","dormiranno"], cond: ["dormirei","dormiresti","dormirebbe","dormiremmo","dormireste","dormirebbero"], sub: ["dorma","dorma","dorma","dormiamo","dormiate","dormano"] }
  },
  {
    v: "giocare", ipa: "/dʒoˈka.re/", t: "to play", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "giocato", ger: "giocando",
    meaning: "Play games or sports. Adds 'h' before i/e. Use 'suonare' for instruments.",
    ex: [
      ["Gioco a calcio.", "I play soccer."],
      ["I bambini giocano.", "The children are playing."],
      ["Giochiamo a carte?", "Shall we play cards?"],
      ["Ha giocato benissimo.", "He played really well."]
    ],
    note: "Sports/games = giocare. Musical instruments = suonare.",
    conj: { pres: ["gioco","giochi","gioca","giochiamo","giocate","giocano"], imp: ["giocavo","giocavi","giocava","giocavamo","giocavate","giocavano"], pp: ["ho giocato","hai giocato","ha giocato","abbiamo giocato","avete giocato","hanno giocato"], fut: ["giocherò","giocherai","giocherà","giocheremo","giocherete","giocheranno"], cond: ["giocherei","giocheresti","giocherebbe","giocheremmo","giochereste","giocherebbero"], sub: ["giochi","giochi","giochi","giochiamo","giochiate","giochino"] }
  },
  {
    v: "pulire", ipa: "/puˈli.re/", t: "to clean", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "pulito", ger: "pulendo",
    meaning: "-isc verb (pulisco). Cleaning anything: house, room, car, dishes.",
    ex: [
      ["Pulisco la casa il sabato.", "I clean the house on Saturdays."],
      ["Hai pulito la cucina?", "Did you clean the kitchen?"],
      ["Pulisci la tua stanza.", "Clean your room."],
      ["Stiamo pulendo dopo la festa.", "We're cleaning up after the party."]
    ],
    note: "Like capire and finire, takes -isc- in singular and 3rd plural present.",
    conj: { pres: ["pulisco","pulisci","pulisce","puliamo","pulite","puliscono"], imp: ["pulivo","pulivi","puliva","pulivamo","pulivate","pulivano"], pp: ["ho pulito","hai pulito","ha pulito","abbiamo pulito","avete pulito","hanno pulito"], fut: ["pulirò","pulirai","pulirà","puliremo","pulirete","puliranno"], cond: ["pulirei","puliresti","pulirebbe","puliremmo","pulireste","pulirebbero"], sub: ["pulisca","pulisca","pulisca","puliamo","puliate","puliscano"] }
  },
  {
    v: "cucinare", ipa: "/ku.tʃiˈna.re/", t: "to cook", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "cucinato", ger: "cucinando",
    meaning: "Regular -are verb. Synonym: cuocere (more about the cooking process itself).",
    ex: [
      ["Cucino la pasta.", "I'm cooking pasta."],
      ["Mia madre cucina benissimo.", "My mother cooks really well."],
      ["Hai cucinato tu stasera?", "Did you cook tonight?"],
      ["Cuciniamo insieme stasera.", "Let's cook together tonight."]
    ],
    note: "'Cucinare' = the act of preparing meals. 'Cuocere' = to cook (food on heat).",
    conj: { pres: ["cucino","cucini","cucina","cuciniamo","cucinate","cucinano"], imp: ["cucinavo","cucinavi","cucinava","cucinavamo","cucinavate","cucinavano"], pp: ["ho cucinato","hai cucinato","ha cucinato","abbiamo cucinato","avete cucinato","hanno cucinato"], fut: ["cucinerò","cucinerai","cucinerà","cucineremo","cucinerete","cucineranno"], cond: ["cucinerei","cucineresti","cucinerebbe","cucineremmo","cucinereste","cucinerebbero"], sub: ["cucini","cucini","cucini","cuciniamo","cuciniate","cucinino"] }
  },
  {
    v: "indossare", ipa: "/in.dosˈsa.re/", t: "to wear", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "indossato", ger: "indossando",
    meaning: "Wearing clothes. More formal/precise than 'portare' which can also mean 'to wear'.",
    ex: [
      ["Indosso un vestito nero.", "I'm wearing a black dress."],
      ["Indossa sempre gli occhiali.", "He always wears glasses."],
      ["Cosa indossi alla festa?", "What are you wearing to the party?"],
      ["Indossava una giacca elegante.", "He was wearing an elegant jacket."]
    ],
    note: "'Indossare' is more specific to clothes. 'Portare' is more general.",
    conj: { pres: ["indosso","indossi","indossa","indossiamo","indossate","indossano"], imp: ["indossavo","indossavi","indossava","indossavamo","indossavate","indossavano"], pp: ["ho indossato","hai indossato","ha indossato","abbiamo indossato","avete indossato","hanno indossato"], fut: ["indosserò","indosserai","indosserà","indosseremo","indosserete","indosseranno"], cond: ["indosserei","indosseresti","indosserebbe","indosseremmo","indossereste","indosserebbero"], sub: ["indossi","indossi","indossi","indossiamo","indossiate","indossino"] }
  },
  {
    v: "lavare", ipa: "/laˈva.re/", t: "to wash", cat: "daily", catLabel: "Daily life",
    aux: "avere", pp: "lavato", ger: "lavando",
    meaning: "Wash things or others. Reflexive 'lavarsi' = to wash oneself.",
    ex: [
      ["Lavo i piatti.", "I'm washing the dishes."],
      ["Devo lavare la macchina.", "I need to wash the car."],
      ["Mi lavo le mani prima di mangiare.", "I wash my hands before eating."],
      ["Hai lavato i vestiti?", "Did you wash the clothes?"]
    ],
    note: "Reflexive 'lavarsi' is essential daily vocabulary.",
    conj: { pres: ["lavo","lavi","lava","laviamo","lavate","lavano"], imp: ["lavavo","lavavi","lavava","lavavamo","lavavate","lavavano"], pp: ["ho lavato","hai lavato","ha lavato","abbiamo lavato","avete lavato","hanno lavato"], fut: ["laverò","laverai","laverà","laveremo","laverete","laveranno"], cond: ["laverei","laveresti","laverebbe","laveremmo","lavereste","laverebbero"], sub: ["lavi","lavi","lavi","laviamo","laviate","lavino"] }
  },
  {
    v: "sedersi", ipa: "/seˈder.si/", t: "to sit down", cat: "daily", catLabel: "Daily life",
    aux: "essere", pp: "seduto", ger: "sedendosi",
    meaning: "Reflexive verb. The non-reflexive 'sedere' is rare in modern Italian.",
    ex: [
      ["Mi siedo qui.", "I'm sitting here."],
      ["Siediti, per favore.", "Sit down, please."],
      ["Ci siamo seduti al bar.", "We sat down at the bar."],
      ["Si sedette accanto a me.", "He sat down next to me."]
    ],
    note: "Highly irregular: 'siedo', 'siedi', 'siede'. Past participle 'seduto' is also adjective.",
    conj: { pres: ["mi siedo","ti siedi","si siede","ci sediamo","vi sedete","si siedono"], imp: ["mi sedevo","ti sedevi","si sedeva","ci sedevamo","vi sedevate","si sedevano"], pp: ["mi sono seduto/a","ti sei seduto/a","si è seduto/a","ci siamo seduti/e","vi siete seduti/e","si sono seduti/e"], fut: ["mi siederò","ti siederai","si siederà","ci siederemo","vi siederete","si siederanno"], cond: ["mi siederei","ti siederesti","si siederebbe","ci siederemmo","vi siedereste","si siederebbero"], sub: ["mi sieda","ti sieda","si sieda","ci sediamo","vi sediate","si siedano"] }
  },
  {
    v: "stare in piedi", ipa: "/ˈsta.re in ˈpjɛ.di/", t: "to stand", cat: "daily", catLabel: "Daily life",
    aux: "essere", pp: "stato in piedi", ger: "stando in piedi",
    meaning: "Idiomatic phrase: 'stare' + 'in piedi' (literally 'to be on feet'). Conjugate 'stare'.",
    ex: [
      ["Sto in piedi tutto il giorno.", "I stand all day."],
      ["I bambini stavano in piedi.", "The children were standing."],
      ["Non riesco a stare in piedi.", "I can't stand up."],
      ["Stiamo in piedi per il discorso.", "We're standing for the speech."]
    ],
    note: "There's no single verb for 'to stand' — Italian uses this construction.",
    conj: { pres: ["sto in piedi","stai in piedi","sta in piedi","stiamo in piedi","state in piedi","stanno in piedi"], imp: ["stavo in piedi","stavi in piedi","stava in piedi","stavamo in piedi","stavate in piedi","stavano in piedi"], pp: ["sono stato/a in piedi","sei stato/a in piedi","è stato/a in piedi","siamo stati/e in piedi","siete stati/e in piedi","sono stati/e in piedi"], fut: ["starò in piedi","starai in piedi","starà in piedi","staremo in piedi","starete in piedi","staranno in piedi"], cond: ["starei in piedi","staresti in piedi","starebbe in piedi","staremmo in piedi","stareste in piedi","starebbero in piedi"], sub: ["stia in piedi","stia in piedi","stia in piedi","stiamo in piedi","stiate in piedi","stiano in piedi"] }
  },

  // ============ EMOTION & SOCIAL ============
  {
    v: "piacere", ipa: "/pjaˈtʃe.re/", t: "to like", cat: "emotion", catLabel: "Emotion",
    aux: "essere", pp: "piaciuto", ger: "piacendo",
    meaning: "Inverted: thing liked is the subject. Verb agrees with it.",
    ex: [
      ["Mi piace il caffè.", "I like coffee."],
      ["Mi piacciono i libri.", "I like books."],
      ["Ti piace questa canzone?", "Do you like this song?"],
      ["Le è piaciuto il film.", "She liked the film."]
    ],
    note: "Mostly used in 3rd person sing/plural with indirect pronouns (mi, ti, gli, le).",
    conj: { pres: ["piaccio","piaci","piace","piacciamo","piacete","piacciono"], imp: ["piacevo","piacevi","piaceva","piacevamo","piacevate","piacevano"], pp: ["sono piaciuto/a","sei piaciuto/a","è piaciuto/a","siamo piaciuti/e","siete piaciuti/e","sono piaciuti/e"], fut: ["piacerò","piacerai","piacerà","piaceremo","piacerete","piaceranno"], cond: ["piacerei","piaceresti","piacerebbe","piaceremmo","piacereste","piacerebbero"], sub: ["piaccia","piaccia","piaccia","piacciamo","piacciate","piacciano"] }
  },
  {
    v: "amare", ipa: "/aˈma.re/", t: "to love", cat: "emotion", catLabel: "Emotion",
    aux: "avere", pp: "amato", ger: "amando",
    meaning: "Strong love (romantic, family). Use 'voler bene' for affection between friends.",
    ex: [
      ["Ti amo.", "I love you (romantic)."],
      ["Amo l'Italia.", "I love Italy."],
      ["Amava la musica classica.", "He loved classical music."],
      ["Amiamo viaggiare.", "We love traveling."]
    ],
    note: "'Ti amo' is romantic. For family/friends, say 'ti voglio bene'.",
    conj: { pres: ["amo","ami","ama","amiamo","amate","amano"], imp: ["amavo","amavi","amava","amavamo","amavate","amavano"], pp: ["ho amato","hai amato","ha amato","abbiamo amato","avete amato","hanno amato"], fut: ["amerò","amerai","amerà","ameremo","amerete","ameranno"], cond: ["amerei","ameresti","amerebbe","ameremmo","amereste","amerebbero"], sub: ["ami","ami","ami","amiamo","amiate","amino"] }
  },
  {
    v: "conoscersi", ipa: "/koˈnoʃ.ʃer.si/", t: "to meet (each other)", cat: "emotion", catLabel: "Emotion",
    aux: "essere", pp: "conosciuto", ger: "conoscendosi",
    meaning: "Reciprocal reflexive of conoscere — 'meeting for the first time'.",
    ex: [
      ["Ci siamo conosciuti a Roma.", "We met in Rome."],
      ["Quando vi siete conosciuti?", "When did you two meet?"],
      ["Si sono conosciuti al lavoro.", "They met at work."],
      ["Piacere di conoscerti.", "Nice to meet you."]
    ],
    note: "Distinguish from 'incontrarsi' (to meet up, planned).",
    conj: { pres: ["mi conosco","ti conosci","si conosce","ci conosciamo","vi conoscete","si conoscono"], imp: ["mi conoscevo","ti conoscevi","si conosceva","ci conoscevamo","vi conoscevate","si conoscevano"], pp: ["mi sono conosciuto/a","ti sei conosciuto/a","si è conosciuto/a","ci siamo conosciuti/e","vi siete conosciuti/e","si sono conosciuti/e"], fut: ["mi conoscerò","ti conoscerai","si conoscerà","ci conosceremo","vi conoscerete","si conosceranno"], cond: ["mi conoscerei","ti conosceresti","si conoscerebbe","ci conosceremmo","vi conoscereste","si conoscerebbero"], sub: ["mi conosca","ti conosca","si conosca","ci conosciamo","vi conosciate","si conoscano"] }
  },

  // ============ ADDITIONAL ============
  {
    v: "diventare", ipa: "/di.venˈta.re/", t: "to become", cat: "extra", catLabel: "Additional",
    aux: "essere", pp: "diventato", ger: "diventando",
    meaning: "Change of state. Uses essere as auxiliary in compound tenses.",
    ex: [
      ["Voglio diventare medico.", "I want to become a doctor."],
      ["È diventato famoso.", "He became famous."],
      ["Sta diventando freddo.", "It's getting cold."],
      ["Sono diventati amici.", "They became friends."]
    ],
    conj: { pres: ["divento","diventi","diventa","diventiamo","diventate","diventano"], imp: ["diventavo","diventavi","diventava","diventavamo","diventavate","diventavano"], pp: ["sono diventato/a","sei diventato/a","è diventato/a","siamo diventati/e","siete diventati/e","sono diventati/e"], fut: ["diventerò","diventerai","diventerà","diventeremo","diventerete","diventeranno"], cond: ["diventerei","diventeresti","diventerebbe","diventeremmo","diventereste","diventerebbero"], sub: ["diventi","diventi","diventi","diventiamo","diventiate","diventino"] }
  },
  {
    v: "sembrare", ipa: "/semˈbra.re/", t: "to seem", cat: "extra", catLabel: "Additional",
    aux: "essere", pp: "sembrato", ger: "sembrando",
    meaning: "Often impersonal: 'mi sembra' = 'it seems to me'.",
    ex: [
      ["Sembra facile.", "It seems easy."],
      ["Mi sembra strano.", "It seems strange to me."],
      ["Sembri stanco.", "You seem tired."],
      ["È sembrata felice.", "She seemed happy."]
    ],
    conj: { pres: ["sembro","sembri","sembra","sembriamo","sembrate","sembrano"], imp: ["sembravo","sembravi","sembrava","sembravamo","sembravate","sembravano"], pp: ["sono sembrato/a","sei sembrato/a","è sembrato/a","siamo sembrati/e","siete sembrati/e","sono sembrati/e"], fut: ["sembrerò","sembrerai","sembrerà","sembreremo","sembrerete","sembreranno"], cond: ["sembrerei","sembreresti","sembrerebbe","sembreremmo","sembrereste","sembrerebbero"], sub: ["sembri","sembri","sembri","sembriamo","sembriate","sembrino"] }
  }
];

// Category palettes
const PALETTES = {
  auxiliary:    { lightBg: "#EEEDFE", lightFg: "#3C3489", border: "#7F77DD", pillBg: "#CECBF6", pillFg: "#26215C", accent: "#7F77DD" },
  modal:        { lightBg: "#E1F5EE", lightFg: "#085041", border: "#1D9E75", pillBg: "#9FE1CB", pillFg: "#04342C", accent: "#1D9E75" },
  communication:{ lightBg: "#E6F1FB", lightFg: "#0C447C", border: "#378ADD", pillBg: "#B5D4F4", pillFg: "#042C53", accent: "#378ADD" },
  cognition:    { lightBg: "#FBEAF0", lightFg: "#72243E", border: "#D4537E", pillBg: "#F4C0D1", pillFg: "#4B1528", accent: "#D4537E" },
  action:       { lightBg: "#FAEEDA", lightFg: "#633806", border: "#BA7517", pillBg: "#FAC775", pillFg: "#412402", accent: "#BA7517" },
  daily:        { lightBg: "#FAECE7", lightFg: "#712B13", border: "#D85A30", pillBg: "#F5C4B3", pillFg: "#4A1B0C", accent: "#D85A30" },
  emotion:      { lightBg: "#EAF3DE", lightFg: "#27500A", border: "#639922", pillBg: "#C0DD97", pillFg: "#173404", accent: "#639922" },
  extra:        { lightBg: "#F1EFE8", lightFg: "#444441", border: "#888780", pillBg: "#D3D1C7", pillFg: "#2C2C2A", accent: "#5F5E5A" }
};

// Tenses
const TENSES = [
  { key: "pres", label: "Present" },
  { key: "imp",  label: "Imperfect" },
  { key: "pp",   label: "Past" },
  { key: "fut",  label: "Future" },
  { key: "cond", label: "Conditional" },
  { key: "sub",  label: "Subjunctive" }
];

const PRONOUNS = ["io", "tu", "lui/lei", "noi", "voi", "loro"];

const CATEGORIES = [
  { key: "all",           label: "All categories" },
  { key: "auxiliary",     label: "Auxiliaries & core" },
  { key: "modal",         label: "Modals" },
  { key: "communication", label: "Communication" },
  { key: "cognition",     label: "Cognition" },
  { key: "action",        label: "Action & motion" },
  { key: "daily",         label: "Daily life" },
  { key: "emotion",       label: "Emotion & social" },
  { key: "extra",         label: "Additional" }
];