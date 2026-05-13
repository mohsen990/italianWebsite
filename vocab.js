// ============ VOCABULARY DATA ============

const VOCAB_CATEGORIES = [
  {
    key: "physical",
    label: "Physical Appearance",
    labelIt: "Aspetto Fisico",
    image: "Images/physical.png",
    accent: "#C84B31",
    bg: "rgba(200,75,49,0.08)",
    words: [
      { it: "alto/a", en: "tall",
        ex: [["Lui è molto alto.", "He is very tall."], ["Le modelle italiane sono spesso alte.", "Italian models are often tall."]] },
      { it: "basso/a", en: "short",
        ex: [["Mio fratello è basso.", "My brother is short."], ["Non sono né alta né bassa.", "I am neither tall nor short."]] },
      { it: "magro/a", en: "slim / thin",
        ex: [["È molto magra.", "She is very slim."], ["Da giovane ero magro.", "When I was young I was thin."]] },
      { it: "robusto/a", en: "sturdy / stocky",
        ex: [["È un uomo robusto.", "He is a sturdy man."], ["Mio nonno era robusto.", "My grandfather was stocky."]] },
      { it: "bello/a", en: "beautiful / handsome",
        ex: [["Che bella ragazza!", "What a beautiful girl!"], ["Roma è una bella città.", "Rome is a beautiful city."]] },
      { it: "i capelli", en: "hair",
        ex: [["Ha i capelli lunghi e biondi.", "She has long blonde hair."], ["Mi taglio i capelli ogni mese.", "I cut my hair every month."]] },
      { it: "gli occhi", en: "eyes",
        ex: [["Ha gli occhi azzurri.", "He has blue eyes."], ["I suoi occhi sono verdi.", "Her eyes are green."]] },
      { it: "biondo/a", en: "blonde",
        ex: [["Mia sorella è bionda.", "My sister is blonde."], ["Da bambino ero biondo.", "As a child I was blonde."]] },
      { it: "bruno/a", en: "dark-haired / brunette",
        ex: [["È una bella ragazza bruna.", "She is a beautiful brunette."], ["Preferisco i ragazzi bruni.", "I prefer dark-haired guys."]] },
      { it: "la barba", en: "beard",
        ex: [["Mio padre ha la barba.", "My father has a beard."], ["Mi faccio crescere la barba.", "I'm growing a beard."]] },
      { it: "giovane", en: "young",
        ex: [["È una donna giovane e dinamica.", "She is a young, dynamic woman."], ["Da giovane suonavo la chitarra.", "When I was young I played guitar."]] },
      { it: "vecchio/a", en: "old / elderly",
        ex: [["Mio nonno è molto vecchio.", "My grandfather is very old."], ["Questa chiesa è molto vecchia.", "This church is very old."]] }
    ]
  },
  {
    key: "personality",
    label: "Personality",
    labelIt: "Personalità",
    image: "Images/personality.png",
    accent: "#2980B9",
    bg: "rgba(41,128,185,0.08)",
    words: [
      { it: "simpatico/a", en: "friendly / likeable",
        ex: [["È una persona molto simpatica.", "He is a very likeable person."], ["I napoletani sono molto simpatici.", "Neapolitans are very friendly."]] },
      { it: "gentile", en: "kind / gentle",
        ex: [["Sei molto gentile, grazie!", "You are very kind, thank you!"], ["È sempre gentile con tutti.", "She is always kind to everyone."]] },
      { it: "timido/a", en: "shy / timid",
        ex: [["Da bambino ero molto timido.", "As a child I was very shy."], ["Non essere timida, parla!", "Don't be shy, speak up!"]] },
      { it: "coraggioso/a", en: "brave / courageous",
        ex: [["È stato molto coraggioso.", "He was very brave."], ["Sii coraggiosa e affronta le paure.", "Be brave and face your fears."]] },
      { it: "pigro/a", en: "lazy",
        ex: [["Non essere pigro, alzati!", "Don't be lazy, get up!"], ["Il mio gatto è pigro tutto il giorno.", "My cat is lazy all day."]] },
      { it: "onesto/a", en: "honest",
        ex: [["È una persona onesta e affidabile.", "He is an honest and reliable person."], ["Sii onesto con me.", "Be honest with me."]] },
      { it: "paziente", en: "patient",
        ex: [["Gli insegnanti devono essere pazienti.", "Teachers must be patient."], ["Sii paziente, arriveranno presto.", "Be patient, they will arrive soon."]] },
      { it: "intelligente", en: "intelligent / smart",
        ex: [["È una studentessa molto intelligente.", "She is a very intelligent student."], ["Che risposta intelligente!", "What a smart answer!"]] },
      { it: "creativo/a", en: "creative",
        ex: [["Gli artisti italiani sono molto creativi.", "Italian artists are very creative."], ["Ho bisogno di una soluzione creativa.", "I need a creative solution."]] },
      { it: "divertente", en: "funny / entertaining",
        ex: [["È un film molto divertente.", "It's a very funny film."], ["Marco è sempre molto divertente.", "Marco is always very entertaining."]] },
      { it: "serio/a", en: "serious",
        ex: [["È una persona molto seria nel lavoro.", "She is a very serious person at work."], ["Fai una faccia seria.", "You have a serious face."]] },
      { it: "generoso/a", en: "generous",
        ex: [["È molto generosa con i suoi amici.", "She is very generous with her friends."], ["Un gesto generoso.", "A generous gesture."]] }
    ]
  },
  {
    key: "emotions",
    label: "Emotions",
    labelIt: "Emozioni",
    image: "Images/emotions.png",
    accent: "#F39C12",
    bg: "rgba(243,156,18,0.08)",
    words: [
      { it: "felice", en: "happy",
        ex: [["Sono molto felice oggi!", "I am very happy today!"], ["Ti fa felice questa notizia?", "Does this news make you happy?"]] },
      { it: "triste", en: "sad",
        ex: [["È triste perché ha perso.", "He is sad because he lost."], ["Mi sento triste senza di te.", "I feel sad without you."]] },
      { it: "arrabbiato/a", en: "angry",
        ex: [["Perché sei arrabbiato?", "Why are you angry?"], ["Si è arrabbiata con il capo.", "She got angry with her boss."]] },
      { it: "spaventato/a", en: "scared / frightened",
        ex: [["Il bambino è spaventato dal tuono.", "The child is scared of thunder."], ["Ero spaventato durante il film.", "I was scared during the movie."]] },
      { it: "sorpreso/a", en: "surprised",
        ex: [["Sono rimasto sorpreso dalla notizia.", "I was surprised by the news."], ["Che faccia sorpresa!", "What a surprised face!"]] },
      { it: "emozionato/a", en: "excited / moved",
        ex: [["Sono emozionato per il viaggio.", "I am excited about the trip."], ["Era molto emozionata al matrimonio.", "She was very moved at the wedding."]] },
      { it: "preoccupato/a", en: "worried",
        ex: [["Sono preoccupato per mia madre.", "I am worried about my mother."], ["Non ti preoccupare, andrà bene.", "Don't worry, it will be fine."]] },
      { it: "annoiato/a", en: "bored",
        ex: [["Mi sono annoiato alla riunione.", "I got bored at the meeting."], ["I bambini sono annoiati.", "The children are bored."]] },
      { it: "innamorato/a", en: "in love",
        ex: [["È innamorato di Maria.", "He is in love with Maria."], ["Quando mi sono innamorata di te.", "When I fell in love with you."]] },
      { it: "orgoglioso/a", en: "proud",
        ex: [["Sono orgoglioso di te!", "I am proud of you!"], ["È orgogliosa del suo lavoro.", "She is proud of her work."]] },
      { it: "deluso/a", en: "disappointed",
        ex: [["Sono deluso dai risultati.", "I am disappointed by the results."], ["Non voglio essere delusa ancora.", "I don't want to be disappointed again."]] },
      { it: "rilassato/a", en: "relaxed",
        ex: [["Mi sento rilassato al mare.", "I feel relaxed at the beach."], ["Fai un respiro e rilassati.", "Take a breath and relax."]] }
    ]
  },
  {
    key: "bodyParts",
    label: "Body Parts",
    labelIt: "Parti del Corpo",
    image: "Images/bodyParts.png",
    accent: "#27AE60",
    bg: "rgba(39,174,96,0.08)",
    words: [
      { it: "la testa", en: "head",
        ex: [["Ho mal di testa.", "I have a headache."], ["Gira la testa a destra.", "Turn your head to the right."]] },
      { it: "i capelli", en: "hair",
        ex: [["Ha i capelli ricci e scuri.", "She has curly, dark hair."], ["Mi lavo i capelli ogni giorno.", "I wash my hair every day."]] },
      { it: "gli occhi", en: "eyes",
        ex: [["Chiudi gli occhi e ascolta.", "Close your eyes and listen."], ["Ha gli occhi marroni.", "He has brown eyes."]] },
      { it: "il naso", en: "nose",
        ex: [["Ho il naso che cola.", "My nose is running."], ["Il naso di Pinocchio era lungo.", "Pinocchio's nose was long."]] },
      { it: "la bocca", en: "mouth",
        ex: [["Apri la bocca, per favore.", "Open your mouth, please."], ["Non parlare con la bocca piena.", "Don't talk with your mouth full."]] },
      { it: "le orecchie", en: "ears",
        ex: [["Ho le orecchie fredde.", "My ears are cold."], ["Il cane ha le orecchie lunghe.", "The dog has long ears."]] },
      { it: "il collo", en: "neck",
        ex: [["Ho dolore al collo.", "I have pain in my neck."], ["Portava una collana al collo.", "She was wearing a necklace around her neck."]] },
      { it: "le spalle", en: "shoulders",
        ex: [["Ha le spalle larghe.", "He has broad shoulders."], ["Alzò le spalle.", "She shrugged her shoulders."]] },
      { it: "le braccia", en: "arms",
        ex: [["Aprì le braccia per abbracciarlo.", "She opened her arms to hug him."], ["Ha le braccia forti.", "He has strong arms."]] },
      { it: "le mani", en: "hands",
        ex: [["Lavati le mani prima di mangiare.", "Wash your hands before eating."], ["Aveva le mani fredde.", "She had cold hands."]] },
      { it: "le gambe", en: "legs",
        ex: [["Ho le gambe stanche.", "My legs are tired."], ["Correva veloce con le gambe lunghe.", "He ran fast with his long legs."]] },
      { it: "i piedi", en: "feet",
        ex: [["Ho mal di piedi.", "My feet hurt."], ["Togliti le scarpe ai piedi bagnati.", "Take off your shoes, my feet are wet."]] }
    ]
  },
  {
    key: "salute",
    label: "Health",
    labelIt: "Salute",
    image: "Images/salute.png",
    accent: "#17A2B8",
    bg: "rgba(23,162,184,0.08)",
    words: [
      { it: "la salute", en: "health",
        ex: [["La salute è la cosa più importante.", "Health is the most important thing."], ["Cin cin! Alla salute!", "Cheers! To your health!"]] },
      { it: "il medico", en: "doctor",
        ex: [["Devo andare dal medico.", "I need to go to the doctor."], ["Il medico mi ha prescritto delle medicine.", "The doctor prescribed me some medicine."]] },
      { it: "l'ospedale", en: "hospital",
        ex: [["È in ospedale da tre giorni.", "He has been in hospital for three days."], ["L'ospedale è vicino alla stazione.", "The hospital is near the station."]] },
      { it: "la febbre", en: "fever",
        ex: [["Ho la febbre a 38.", "I have a fever of 38°C."], ["Il bambino ha la febbre alta.", "The child has a high fever."]] },
      { it: "il raffreddore", en: "cold (illness)",
        ex: [["Ho preso il raffreddore.", "I caught a cold."], ["Con questo tempo ci si ammala facilmente.", "In this weather one gets sick easily."]] },
      { it: "mal di testa", en: "headache",
        ex: [["Ho un forte mal di testa.", "I have a strong headache."], ["Il mal di testa mi impedisce di lavorare.", "The headache prevents me from working."]] },
      { it: "la farmacia", en: "pharmacy",
        ex: [["Dov'è la farmacia più vicina?", "Where is the nearest pharmacy?"], ["La farmacia chiude alle otto.", "The pharmacy closes at eight."]] },
      { it: "la medicina", en: "medicine",
        ex: [["Prendi la medicina tre volte al giorno.", "Take the medicine three times a day."], ["Ho bisogno di una medicina per il dolore.", "I need medicine for the pain."]] },
      { it: "sano/a", en: "healthy",
        ex: [["Mangiare frutta è sano.", "Eating fruit is healthy."], ["È un bambino sano e robusto.", "He is a healthy and robust child."]] },
      { it: "guarire", en: "to heal / to recover",
        ex: [["Spero di guarire presto.", "I hope to recover soon."], ["Con il riposo, guarirai più velocemente.", "With rest, you will heal faster."]] },
      { it: "sentirsi male", en: "to feel sick / unwell",
        ex: [["Mi sento male, non posso venire.", "I feel sick, I can't come."], ["Si sente male dopo aver mangiato.", "She feels unwell after eating."]] },
      { it: "l'allergia", en: "allergy",
        ex: [["Ho un'allergia ai gatti.", "I have an allergy to cats."], ["L'allergia primaverile è molto comune.", "Spring allergies are very common."]] }
    ]
  },
  {
    key: "sport",
    label: "Sports",
    labelIt: "Sport",
    image: "Images/sport.png",
    accent: "#009246",
    bg: "rgba(0,146,70,0.08)",
    words: [
      { it: "il calcio", en: "football / soccer",
        ex: [["L'Italia ama il calcio.", "Italy loves football."], ["Gioco a calcio ogni sabato.", "I play football every Saturday."]] },
      { it: "il nuoto", en: "swimming",
        ex: [["Il nuoto è uno sport completo.", "Swimming is a complete sport."], ["Vado in piscina per il nuoto.", "I go to the pool for swimming."]] },
      { it: "il tennis", en: "tennis",
        ex: [["Hai voglia di giocare a tennis?", "Do you feel like playing tennis?"], ["Il tennis è uno sport elegante.", "Tennis is an elegant sport."]] },
      { it: "la corsa", en: "running",
        ex: [["Faccio la corsa ogni mattina.", "I go running every morning."], ["La maratona è una corsa lunga.", "The marathon is a long race."]] },
      { it: "la palestra", en: "gym",
        ex: [["Vado in palestra tre volte a settimana.", "I go to the gym three times a week."], ["La palestra è attrezzata bene.", "The gym is well equipped."]] },
      { it: "la squadra", en: "team",
        ex: [["La nostra squadra ha vinto.", "Our team won."], ["Faccio parte di una squadra di calcio.", "I'm part of a football team."]] },
      { it: "vincere", en: "to win",
        ex: [["L'Italia ha vinto il mondiale.", "Italy won the World Cup."], ["Voglio vincere questa partita.", "I want to win this game."]] },
      { it: "perdere", en: "to lose",
        ex: [["Non mi piace perdere.", "I don't like to lose."], ["Abbiamo perso tre a zero.", "We lost three to zero."]] },
      { it: "l'allenamento", en: "training / practice",
        ex: [["Abbiamo l'allenamento domani.", "We have training tomorrow."], ["L'allenamento dura due ore.", "Training lasts two hours."]] },
      { it: "la partita", en: "match / game",
        ex: [["Guardi la partita stasera?", "Are you watching the game tonight?"], ["La partita è iniziata alle otto.", "The game started at eight."]] },
      { it: "il campione", en: "champion",
        ex: [["È il campione del mondo.", "He is the world champion."], ["Una squadra di campioni.", "A team of champions."]] },
      { it: "lo sci", en: "skiing",
        ex: [["Vado a sciare sulle Alpi.", "I go skiing in the Alps."], ["Lo sci è popolare in montagna.", "Skiing is popular in the mountains."]] }
    ]
  },
  {
    key: "activity",
    label: "Activities",
    labelIt: "Attività",
    image: "Images/activity.png",
    accent: "#8E44AD",
    bg: "rgba(142,68,173,0.08)",
    words: [
      { it: "cucinare", en: "to cook",
        ex: [["Mi piace cucinare la pasta.", "I like cooking pasta."], ["Cucina benissimo sua nonna.", "His grandmother cooks very well."]] },
      { it: "leggere", en: "to read",
        ex: [["Leggo un libro ogni settimana.", "I read a book every week."], ["Amo leggere i romanzi italiani.", "I love reading Italian novels."]] },
      { it: "ballare", en: "to dance",
        ex: [["Gli italiani amano ballare.", "Italians love to dance."], ["Balli molto bene!", "You dance very well!"]] },
      { it: "cantare", en: "to sing",
        ex: [["Canta sotto la doccia ogni mattina.", "He sings in the shower every morning."], ["L'Italia è famosa per il canto.", "Italy is famous for singing."]] },
      { it: "dipingere", en: "to paint",
        ex: [["Leonardo da Vinci sapeva dipingere.", "Leonardo da Vinci knew how to paint."], ["Dipingo nel mio tempo libero.", "I paint in my free time."]] },
      { it: "viaggiare", en: "to travel",
        ex: [["Mi piace viaggiare in treno.", "I like traveling by train."], ["Viaggiare apre la mente.", "Traveling opens the mind."]] },
      { it: "fotografare", en: "to take photos",
        ex: [["Amo fotografare i paesaggi italiani.", "I love photographing Italian landscapes."], ["Posso fotografare questo piatto?", "Can I take a photo of this dish?"]] },
      { it: "fare spese", en: "to go shopping",
        ex: [["Vado a fare spese in centro.", "I'm going shopping downtown."], ["Mia madre adora fare spese.", "My mother loves shopping."]] },
      { it: "nuotare", en: "to swim",
        ex: [["Nuoto ogni mattina.", "I swim every morning."], ["I bambini imparano a nuotare presto.", "Children learn to swim early."]] },
      { it: "giocare", en: "to play",
        ex: [["I bambini giocano nel parco.", "The children play in the park."], ["Gioco a scacchi con mio nonno.", "I play chess with my grandfather."]] },
      { it: "fare una passeggiata", en: "to take a walk",
        ex: [["Facciamo una passeggiata in centro.", "Let's take a walk downtown."], ["Fa bene passeggiare dopo pranzo.", "It's good to walk after lunch."]] },
      { it: "guardare la TV", en: "to watch TV",
        ex: [["Guardo la TV la sera.", "I watch TV in the evening."], ["Cosa guardi in TV stasera?", "What are you watching on TV tonight?"]] }
    ]
  },
  {
    key: "sentimenti",
    label: "Feelings",
    labelIt: "Sentimenti",
    image: "Images/sentimenti.png",
    accent: "#CE2B37",
    bg: "rgba(206,43,55,0.08)",
    words: [
      { it: "l'amore", en: "love",
        ex: [["L'amore è cieco.", "Love is blind."], ["Ti voglio bene.", "I love you (family/friends)."]] },
      { it: "l'amicizia", en: "friendship",
        ex: [["L'amicizia è un tesoro prezioso.", "Friendship is a precious treasure."], ["La nostra amicizia dura da anni.", "Our friendship has lasted for years."]] },
      { it: "la speranza", en: "hope",
        ex: [["La speranza è l'ultima a morire.", "Hope dies last."], ["Ho la speranza di tornare presto.", "I have hope of returning soon."]] },
      { it: "la paura", en: "fear",
        ex: [["Ho paura del buio.", "I'm afraid of the dark."], ["Non avere paura, sono qui.", "Don't be afraid, I'm here."]] },
      { it: "la gioia", en: "joy",
        ex: [["I bambini portano tanta gioia.", "Children bring so much joy."], ["Salto di gioia!", "I'm jumping for joy!"]] },
      { it: "la tristezza", en: "sadness",
        ex: [["La tristezza è una parte della vita.", "Sadness is a part of life."], ["Ho gli occhi pieni di tristezza.", "My eyes are full of sadness."]] },
      { it: "la nostalgia", en: "nostalgia / homesickness",
        ex: [["Ho nostalgia di casa.", "I'm homesick."], ["La nostalgia dell'Italia mi prende spesso.", "Nostalgia for Italy often overcomes me."]] },
      { it: "la gratitudine", en: "gratitude",
        ex: [["Ti esprimo la mia gratitudine.", "I express my gratitude to you."], ["Con gratitudine, ti ringrazio.", "With gratitude, I thank you."]] },
      { it: "la fiducia", en: "trust / confidence",
        ex: [["Ho fiducia in te.", "I trust you."], ["La fiducia si guadagna nel tempo.", "Trust is earned over time."]] },
      { it: "l'orgoglio", en: "pride",
        ex: [["Provo orgoglio per i miei figli.", "I feel pride for my children."], ["L'orgoglio nazionale è forte in Italia.", "National pride is strong in Italy."]] },
      { it: "la compassione", en: "compassion",
        ex: [["Mostra compassione per gli altri.", "Show compassion for others."], ["Agisce sempre con compassione.", "She always acts with compassion."]] },
      { it: "il rimpianto", en: "regret",
        ex: [["Non ho rimpianti nella vita.", "I have no regrets in life."], ["Provo rimpianto per le cose non fatte.", "I feel regret for the things I didn't do."]] }
    ]
  },
  {
    key: "viaggo",
    label: "Travel",
    labelIt: "Viaggio",
    image: "Images/viaggo.png",
    accent: "#D4A017",
    bg: "rgba(212,160,23,0.08)",
    words: [
      { it: "il viaggio", en: "journey / trip",
        ex: [["Buon viaggio!", "Have a good trip!"], ["Il viaggio in treno è durato tre ore.", "The train journey lasted three hours."]] },
      { it: "l'aeroporto", en: "airport",
        ex: [["Ci vediamo all'aeroporto.", "See you at the airport."], ["L'aeroporto di Roma si chiama Fiumicino.", "Rome's airport is called Fiumicino."]] },
      { it: "la stazione", en: "train station",
        ex: [["La stazione è in centro.", "The station is in the city centre."], ["Dobbiamo prendere il treno alla stazione.", "We need to catch the train at the station."]] },
      { it: "l'albergo", en: "hotel",
        ex: [["L'albergo è vicino al mare.", "The hotel is near the sea."], ["Abbiamo prenotato un albergo a Roma.", "We booked a hotel in Rome."]] },
      { it: "il passaporto", en: "passport",
        ex: [["Non dimenticare il passaporto!", "Don't forget your passport!"], ["Il mio passaporto è scaduto.", "My passport has expired."]] },
      { it: "la valigia", en: "suitcase",
        ex: [["Ho perso la valigia in aeroporto.", "I lost my suitcase at the airport."], ["Faccio la valigia stasera.", "I'm packing my suitcase tonight."]] },
      { it: "il biglietto", en: "ticket",
        ex: [["Quanto costa il biglietto?", "How much does the ticket cost?"], ["Ho comprato il biglietto online.", "I bought the ticket online."]] },
      { it: "la mappa", en: "map",
        ex: [["Puoi mostrarmi sulla mappa?", "Can you show me on the map?"], ["Ho scaricato la mappa offline.", "I downloaded the map offline."]] },
      { it: "la vacanza", en: "vacation / holiday",
        ex: [["Quest'estate vado in vacanza in Sicilia.", "This summer I'm going on holiday to Sicily."], ["Le vacanze estive durano un mese.", "Summer holidays last a month."]] },
      { it: "il turista", en: "tourist",
        ex: [["Roma è piena di turisti in estate.", "Rome is full of tourists in summer."], ["È la prima volta che viene come turista.", "It's the first time he comes as a tourist."]] },
      { it: "la partenza", en: "departure",
        ex: [["La partenza è prevista per le dieci.", "The departure is scheduled for ten."], ["Ci prepariamo per la partenza.", "We are preparing for departure."]] },
      { it: "l'arrivo", en: "arrival",
        ex: [["L'arrivo è previsto per stasera.", "The arrival is expected this evening."], ["Chiamami all'arrivo.", "Call me when you arrive."]] }
    ]
  },
  {
    key: "food",
    label: "Food",
    labelIt: "Cibo",
    image: "Images/food.png",
    accent: "#E67E22",
    bg: "rgba(230,126,34,0.08)",
    words: [
      { it: "la pasta", en: "pasta",
        ex: [["La pasta è il piatto simbolo dell'Italia.", "Pasta is Italy's signature dish."], ["Cucino la pasta ogni giorno.", "I cook pasta every day."]] },
      { it: "il pane", en: "bread",
        ex: [["Compro il pane fresco ogni mattina.", "I buy fresh bread every morning."], ["Il pane fatto in casa è buonissimo.", "Homemade bread is delicious."]] },
      { it: "il formaggio", en: "cheese",
        ex: [["Il parmigiano è un formaggio italiano.", "Parmigiano is an Italian cheese."], ["Vuoi del formaggio con la pasta?", "Do you want some cheese with the pasta?"]] },
      { it: "la carne", en: "meat",
        ex: [["Non mangio carne, sono vegetariano.", "I don't eat meat, I'm vegetarian."], ["La carne alla brace è squisita.", "Grilled meat is delicious."]] },
      { it: "il pesce", en: "fish",
        ex: [["Il pesce fresco è il migliore.", "Fresh fish is the best."], ["Mangio pesce due volte a settimana.", "I eat fish twice a week."]] },
      { it: "le uova", en: "eggs",
        ex: [["Mi piacciono le uova strapazzate.", "I like scrambled eggs."], ["Hai delle uova in frigo?", "Do you have any eggs in the fridge?"]] },
      { it: "il riso", en: "rice",
        ex: [["Il risotto è un piatto tipico del nord.", "Risotto is a typical northern dish."], ["Cucino il riso in venti minuti.", "I cook rice in twenty minutes."]] },
      { it: "il pollo", en: "chicken",
        ex: [["Il pollo arrosto è il mio preferito.", "Roast chicken is my favourite."], ["Compro il pollo al mercato.", "I buy chicken at the market."]] },
      { it: "la zuppa", en: "soup",
        ex: [["La minestrone è una zuppa di verdure.", "Minestrone is a vegetable soup."], ["Una zuppa calda fa bene d'inverno.", "A hot soup is good in winter."]] },
      { it: "l'olio d'oliva", en: "olive oil",
        ex: [["L'olio d'oliva è fondamentale nella cucina italiana.", "Olive oil is essential in Italian cuisine."], ["Condisco l'insalata con olio d'oliva.", "I dress the salad with olive oil."]] },
      { it: "il sale", en: "salt",
        ex: [["Aggiungi un po' di sale alla pasta.", "Add a little salt to the pasta."], ["Attenzione, non mettere troppo sale!", "Careful, don't put too much salt!"]] },
      { it: "lo zucchero", en: "sugar",
        ex: [["Metto due cucchiaini di zucchero nel caffè.", "I put two teaspoons of sugar in coffee."], ["Questa torta ha troppo zucchero.", "This cake has too much sugar."]] }
    ]
  },
  {
    key: "frutta",
    label: "Fruit",
    labelIt: "Frutta",
    image: "Images/frutta.png",
    accent: "#FF6B6B",
    bg: "rgba(255,107,107,0.08)",
    words: [
      { it: "la mela", en: "apple",
        ex: [["Una mela al giorno leva il medico di torno.", "An apple a day keeps the doctor away."], ["Preferisco le mele rosse.", "I prefer red apples."]] },
      { it: "la banana", en: "banana",
        ex: [["Le banane sono ricche di potassio.", "Bananas are rich in potassium."], ["Mangio una banana prima di allenarmi.", "I eat a banana before working out."]] },
      { it: "l'arancia", en: "orange",
        ex: [["Le arance siciliane sono le più dolci.", "Sicilian oranges are the sweetest."], ["Faccio una spremuta di arancia ogni mattina.", "I make fresh orange juice every morning."]] },
      { it: "la fragola", en: "strawberry",
        ex: [["Le fragole con la panna sono deliziose.", "Strawberries with cream are delicious."], ["In primavera compro le fragole al mercato.", "In spring I buy strawberries at the market."]] },
      { it: "l'uva", en: "grapes",
        ex: [["L'uva italiana è molto dolce.", "Italian grapes are very sweet."], ["Il vino si fa con l'uva.", "Wine is made from grapes."]] },
      { it: "il limone", en: "lemon",
        ex: [["Metto il limone nel tè.", "I put lemon in tea."], ["Il limone di Amalfi è famoso nel mondo.", "The Amalfi lemon is famous worldwide."]] },
      { it: "la pera", en: "pear",
        ex: [["Le pere mature sono dolcissime.", "Ripe pears are very sweet."], ["Formaggio e pere è un abbinamento classico.", "Cheese and pears is a classic pairing."]] },
      { it: "la pesca", en: "peach",
        ex: [["Le pesche d'estate sono deliziose.", "Summer peaches are delicious."], ["Ho comprato un chilo di pesche.", "I bought a kilo of peaches."]] },
      { it: "l'anguria", en: "watermelon",
        ex: [["L'anguria è perfetta d'estate.", "Watermelon is perfect in summer."], ["Mangiamo l'anguria in spiaggia.", "We eat watermelon at the beach."]] },
      { it: "le ciliegie", en: "cherries",
        ex: [["Le ciliegie sono rosse e dolci.", "Cherries are red and sweet."], ["Una ciliegia tira l'altra!", "One cherry leads to another!"]] },
      { it: "il mango", en: "mango",
        ex: [["Il mango è un frutto tropicale.", "Mango is a tropical fruit."], ["Mi piace il succo di mango.", "I like mango juice."]] },
      { it: "l'ananas", en: "pineapple",
        ex: [["L'ananas è ottimo nello smoothie.", "Pineapple is great in a smoothie."], ["Compro l'ananas già tagliato.", "I buy pineapple already sliced."]] }
    ]
  },
  {
    key: "verdura",
    label: "Vegetables",
    labelIt: "Verdura",
    image: "Images/verdura.png",
    accent: "#2ECC71",
    bg: "rgba(46,204,113,0.08)",
    words: [
      { it: "la carota", en: "carrot",
        ex: [["Le carote fanno bene agli occhi.", "Carrots are good for the eyes."], ["Gratto le carote per l'insalata.", "I grate carrots for the salad."]] },
      { it: "il pomodoro", en: "tomato",
        ex: [["Il pomodoro è fondamentale nella cucina italiana.", "Tomato is fundamental in Italian cuisine."], ["I pomodori di San Marzano sono i migliori.", "San Marzano tomatoes are the best."]] },
      { it: "la cipolla", en: "onion",
        ex: [["Soffriggo la cipolla nell'olio.", "I sauté the onion in oil."], ["Tagliare le cipolle mi fa piangere.", "Cutting onions makes me cry."]] },
      { it: "l'aglio", en: "garlic",
        ex: [["L'aglio dà sapore al sugo.", "Garlic gives flavour to the sauce."], ["La bruschetta si fa con aglio e olio.", "Bruschetta is made with garlic and oil."]] },
      { it: "la patata", en: "potato",
        ex: [["Le patate fritte sono deliziose.", "French fries are delicious."], ["Faccio le patate al forno per cena.", "I make roast potatoes for dinner."]] },
      { it: "gli spinaci", en: "spinach",
        ex: [["Gli spinaci sono ricchi di ferro.", "Spinach is rich in iron."], ["Popeye ama gli spinaci!", "Popeye loves spinach!"]] },
      { it: "il peperone", en: "bell pepper",
        ex: [["I peperoni rossi sono i più dolci.", "Red peppers are the sweetest."], ["La peperonata è un piatto tipico.", "Peperonata is a typical dish."]] },
      { it: "la lattuga", en: "lettuce",
        ex: [["Metto la lattuga nell'insalata.", "I put lettuce in the salad."], ["La lattuga deve essere fresca e croccante.", "Lettuce must be fresh and crispy."]] },
      { it: "il cetriolo", en: "cucumber",
        ex: [["Il cetriolo è fresco e leggero.", "Cucumber is fresh and light."], ["Aggiungo il cetriolo alla macedonia di verdure.", "I add cucumber to the vegetable salad."]] },
      { it: "i funghi", en: "mushrooms",
        ex: [["I funghi porcini sono prelibati.", "Porcini mushrooms are a delicacy."], ["La pizza ai funghi è la mia preferita.", "Mushroom pizza is my favourite."]] },
      { it: "le zucchine", en: "zucchini / courgettes",
        ex: [["Le zucchine trifolate sono facili da fare.", "Sautéed zucchini is easy to make."], ["Taglio le zucchine a rondelle.", "I slice the zucchini into rounds."]] },
      { it: "il cavolo", en: "cabbage",
        ex: [["Il cavolo fa parte di una dieta sana.", "Cabbage is part of a healthy diet."], ["La zuppa di cavolo è molto nutriente.", "Cabbage soup is very nutritious."]] }
    ]
  },
  {
    key: "restaurant",
    label: "Restaurant",
    labelIt: "Ristorante",
    image: "Images/restaurant.png",
    accent: "#C0392B",
    bg: "rgba(192,57,43,0.08)",
    words: [
      { it: "il menu", en: "menu",
        ex: [["Posso vedere il menu, per favore?", "Can I see the menu, please?"], ["Il menu del giorno cambia ogni settimana.", "The daily menu changes every week."]] },
      { it: "il cameriere", en: "waiter",
        ex: [["Scusi, cameriere!", "Excuse me, waiter!"], ["Il cameriere è molto gentile.", "The waiter is very kind."]] },
      { it: "l'antipasto", en: "starter / appetizer",
        ex: [["Come antipasto prendo la bruschetta.", "As a starter I'll have bruschetta."], ["Gli antipasti italiani sono vari e saporiti.", "Italian starters are varied and tasty."]] },
      { it: "il primo piatto", en: "first course",
        ex: [["Come primo prendo gli spaghetti.", "For the first course I'll have spaghetti."], ["Il primo piatto è sempre la pasta o il risotto.", "The first course is always pasta or risotto."]] },
      { it: "il secondo piatto", en: "main course",
        ex: [["Come secondo ordino il pollo.", "For the main course I'll order chicken."], ["Il secondo è di solito carne o pesce.", "The main course is usually meat or fish."]] },
      { it: "il dolce", en: "dessert",
        ex: [["Per dolce voglio il tiramisù.", "For dessert I want tiramisu."], ["I dolci italiani sono famosi nel mondo.", "Italian desserts are famous worldwide."]] },
      { it: "il conto", en: "bill / check",
        ex: [["Ci porta il conto, per favore?", "Could you bring us the bill, please?"], ["Paghiamo il conto a metà.", "We split the bill."]] },
      { it: "prenotare", en: "to reserve / to book",
        ex: [["Ho prenotato un tavolo per due.", "I booked a table for two."], ["Bisogna prenotare con anticipo.", "You need to book in advance."]] },
      { it: "ordinare", en: "to order",
        ex: [["Siete pronti per ordinare?", "Are you ready to order?"], ["Ordino sempre la pizza margherita.", "I always order pizza margherita."]] },
      { it: "la prenotazione", en: "reservation",
        ex: [["Ho una prenotazione a nome Rossi.", "I have a reservation under the name Rossi."], ["La prenotazione è per le otto di sera.", "The reservation is for eight in the evening."]] },
      { it: "l'acqua", en: "water",
        ex: [["Acqua naturale o frizzante?", "Still or sparkling water?"], ["Un bicchiere d'acqua, per favore.", "A glass of water, please."]] },
      { it: "il vino", en: "wine",
        ex: [["Un bicchiere di vino rosso, per favore.", "A glass of red wine, please."], ["Il vino italiano è rinomato nel mondo.", "Italian wine is renowned worldwide."]] }
    ]
  },
  {
    key: "house",
    label: "Home",
    labelIt: "Casa",
    image: "Images/house.png",
    accent: "#7D5A3C",
    bg: "rgba(125,90,60,0.08)",
    words: [
      { it: "la cucina", en: "kitchen",
        ex: [["Cucino nella cucina ogni giorno.", "I cook in the kitchen every day."], ["La cucina è il cuore della casa.", "The kitchen is the heart of the home."]] },
      { it: "il bagno", en: "bathroom",
        ex: [["Il bagno è in fondo al corridoio.", "The bathroom is at the end of the hallway."], ["Faccio la doccia in bagno ogni mattina.", "I take a shower in the bathroom every morning."]] },
      { it: "il salotto", en: "living room",
        ex: [["Guardiamo la TV in salotto.", "We watch TV in the living room."], ["Il salotto è grande e luminoso.", "The living room is large and bright."]] },
      { it: "la camera da letto", en: "bedroom",
        ex: [["La camera da letto ha una finestra grande.", "The bedroom has a large window."], ["Dormo nella mia camera da letto.", "I sleep in my bedroom."]] },
      { it: "la finestra", en: "window",
        ex: [["Apri la finestra, per favore.", "Please open the window."], ["La finestra dà sul giardino.", "The window overlooks the garden."]] },
      { it: "la porta", en: "door",
        ex: [["Chiudi la porta, fa freddo!", "Close the door, it's cold!"], ["Bussa alla porta prima di entrare.", "Knock on the door before entering."]] },
      { it: "le scale", en: "stairs",
        ex: [["Salgo le scale ogni giorno.", "I climb the stairs every day."], ["Le scale portano al piano di sopra.", "The stairs lead to the upper floor."]] },
      { it: "il giardino", en: "garden",
        ex: [["I fiori del giardino sono bellissimi.", "The garden flowers are beautiful."], ["D'estate pranzo in giardino.", "In summer I have lunch in the garden."]] },
      { it: "il tetto", en: "roof",
        ex: [["Il tetto della casa è rosso.", "The roof of the house is red."], ["Piove, il tetto perde.", "It's raining, the roof is leaking."]] },
      { it: "il balcone", en: "balcony",
        ex: [["Faccio colazione sul balcone.", "I have breakfast on the balcony."], ["Dal balcone si vede il mare.", "From the balcony you can see the sea."]] },
      { it: "il divano", en: "sofa / couch",
        ex: [["Mi rilasso sul divano la sera.", "I relax on the sofa in the evening."], ["Il divano è comodo e morbido.", "The sofa is comfortable and soft."]] },
      { it: "il letto", en: "bed",
        ex: [["Faccio il letto ogni mattina.", "I make the bed every morning."], ["Il letto è grande e comodo.", "The bed is large and comfortable."]] }
    ]
  },
  {
    key: "meteo",
    label: "Weather",
    labelIt: "Meteo",
    image: "Images/meteo.png",
    accent: "#3498DB",
    bg: "rgba(52,152,219,0.08)",
    words: [
      { it: "il sole", en: "sun",
        ex: [["Oggi c'è il sole, andiamo al mare!", "Today it's sunny, let's go to the beach!"], ["Il sole tramonta a ovest.", "The sun sets in the west."]] },
      { it: "la pioggia", en: "rain",
        ex: [["La pioggia cade forte da stamattina.", "The rain has been falling hard since this morning."], ["Mi piace la pioggia d'autunno.", "I like autumn rain."]] },
      { it: "la neve", en: "snow",
        ex: [["In montagna cade molta neve d'inverno.", "A lot of snow falls in the mountains in winter."], ["I bambini amano giocare nella neve.", "Children love to play in the snow."]] },
      { it: "il vento", en: "wind",
        ex: [["Il vento oggi è molto forte.", "The wind today is very strong."], ["Un vento freddo soffia dal nord.", "A cold wind blows from the north."]] },
      { it: "la nuvola", en: "cloud",
        ex: [["Il cielo è coperto di nuvole.", "The sky is covered in clouds."], ["Quelle nuvole portano pioggia.", "Those clouds bring rain."]] },
      { it: "il temporale", en: "storm / thunderstorm",
        ex: [["Stanotte c'è stato un temporale forte.", "Last night there was a strong storm."], ["Il temporale è passato velocemente.", "The storm passed quickly."]] },
      { it: "caldo", en: "hot / warm",
        ex: [["Fa molto caldo in estate in Sicilia.", "It's very hot in summer in Sicily."], ["Hai caldo? Apro la finestra.", "Are you hot? I'll open the window."]] },
      { it: "freddo", en: "cold",
        ex: [["Fa freddo in montagna d'inverno.", "It's cold in the mountains in winter."], ["Ho freddo, mi metto il cappotto.", "I'm cold, I'll put on my coat."]] },
      { it: "la nebbia", en: "fog",
        ex: [["La nebbia è frequente in Pianura Padana.", "Fog is frequent in the Po Valley."], ["Non vedo niente, c'è troppa nebbia.", "I can't see anything, there's too much fog."]] },
      { it: "l'arcobaleno", en: "rainbow",
        ex: [["Dopo la pioggia è apparso un arcobaleno.", "After the rain a rainbow appeared."], ["L'arcobaleno ha sette colori.", "The rainbow has seven colours."]] },
      { it: "la temperatura", en: "temperature",
        ex: [["La temperatura oggi è di trenta gradi.", "The temperature today is thirty degrees."], ["La temperatura si abbassa di notte.", "The temperature drops at night."]] },
      { it: "l'ombrello", en: "umbrella",
        ex: [["Prendi l'ombrello, sta per piovere!", "Take an umbrella, it's about to rain!"], ["Ho dimenticato l'ombrello a casa.", "I forgot my umbrella at home."]] }
    ]
  },
  {
    key: "clothing",
    label: "Clothing",
    labelIt: "Abbigliamento",
    image: "Images/clothing.png",
    accent: "#9B59B6",
    bg: "rgba(155,89,182,0.08)",
    words: [
      { it: "la camicia", en: "shirt",
        ex: [["Indosso una camicia bianca al lavoro.", "I wear a white shirt to work."], ["Questa camicia è troppo grande.", "This shirt is too big."]] },
      { it: "i pantaloni", en: "trousers / pants",
        ex: [["Ho comprato dei pantaloni nuovi.", "I bought new trousers."], ["I pantaloni sono troppo stretti.", "The trousers are too tight."]] },
      { it: "la gonna", en: "skirt",
        ex: [["Mia sorella porta una gonna rossa.", "My sister is wearing a red skirt."], ["La gonna lunga è elegante.", "The long skirt is elegant."]] },
      { it: "il vestito", en: "dress / suit",
        ex: [["Che bel vestito! Dov'è lo hai comprato?", "What a beautiful dress! Where did you buy it?"], ["Metto il vestito elegante per la cena.", "I'll wear the elegant dress for dinner."]] },
      { it: "le scarpe", en: "shoes",
        ex: [["Queste scarpe mi fanno male ai piedi.", "These shoes hurt my feet."], ["Ho comprato un paio di scarpe nuove.", "I bought a new pair of shoes."]] },
      { it: "i calzini", en: "socks",
        ex: [["Indosso sempre i calzini di cotone.", "I always wear cotton socks."], ["Ho perso un calzino in lavatrice.", "I lost a sock in the washing machine."]] },
      { it: "la giacca", en: "jacket",
        ex: [["Prendo la giacca, fa fresco.", "I'll take my jacket, it's cool outside."], ["La giacca di pelle è moderna.", "The leather jacket is modern."]] },
      { it: "il cappotto", en: "coat",
        ex: [["D'inverno porto sempre il cappotto.", "In winter I always wear a coat."], ["Il cappotto beige è molto elegante.", "The beige coat is very elegant."]] },
      { it: "la borsa", en: "bag",
        ex: [["Ho una borsa nuova di Louis Vuitton.", "I have a new Louis Vuitton bag."], ["La borsa è pesante, cosa ci hai dentro?", "The bag is heavy, what do you have in it?"]] },
      { it: "il cappello", en: "hat",
        ex: [["In estate porto sempre un cappello.", "In summer I always wear a hat."], ["Il cappello ti sta benissimo!", "The hat looks great on you!"]] },
      { it: "la cintura", en: "belt",
        ex: [["Ho bisogno di una cintura per questi pantaloni.", "I need a belt for these trousers."], ["La cintura di pelle è classica.", "The leather belt is classic."]] },
      { it: "i guanti", en: "gloves",
        ex: [["D'inverno metto i guanti per il freddo.", "In winter I put on gloves for the cold."], ["Ho perso un guanto per strada.", "I lost a glove in the street."]] }
    ]
  },
  {
    key: "directions",
    label: "Directions",
    labelIt: "Direzioni",
    image: "Images/directions.png",
    accent: "#1ABC9C",
    bg: "rgba(26,188,156,0.08)",
    words: [
      { it: "a destra", en: "to the right",
        ex: [["Gira a destra al semaforo.", "Turn right at the traffic light."], ["La banca è a destra.", "The bank is on the right."]] },
      { it: "a sinistra", en: "to the left",
        ex: [["Il supermercato è a sinistra.", "The supermarket is on the left."], ["Svolta a sinistra qui.", "Turn left here."]] },
      { it: "sempre dritto", en: "straight ahead",
        ex: [["Vai sempre dritto per un chilometro.", "Go straight ahead for one kilometre."], ["La chiesa è sempre dritto.", "The church is straight ahead."]] },
      { it: "girare", en: "to turn",
        ex: [["Gira qui e poi vai dritto.", "Turn here and then go straight."], ["Dove devo girare?", "Where do I need to turn?"]] },
      { it: "la strada", en: "road / street",
        ex: [["Questa strada porta al centro.", "This road leads to the centre."], ["Come si chiama questa strada?", "What is this street called?"]] },
      { it: "l'incrocio", en: "crossroads / intersection",
        ex: [["Al prossimo incrocio gira a destra.", "At the next crossroads turn right."], ["C'è un semaforo all'incrocio.", "There is a traffic light at the intersection."]] },
      { it: "il semaforo", en: "traffic light",
        ex: [["Il semaforo è rosso, aspetta.", "The traffic light is red, wait."], ["Passa quando il semaforo diventa verde.", "Cross when the traffic light turns green."]] },
      { it: "vicino/a", en: "near / close",
        ex: [["La stazione è vicina a casa mia.", "The station is near my home."], ["C'è un bar vicino qui?", "Is there a café nearby?"]] },
      { it: "lontano/a", en: "far",
        ex: [["Il museo è lontano da qui?", "Is the museum far from here?"], ["No, non è molto lontano.", "No, it's not very far."]] },
      { it: "la piazza", en: "square / plaza",
        ex: [["Ci troviamo in piazza alle sei.", "We meet in the square at six."], ["Piazza Navona è bellissima.", "Piazza Navona is beautiful."]] },
      { it: "il ponte", en: "bridge",
        ex: [["Il Ponte Vecchio è a Firenze.", "Ponte Vecchio is in Florence."], ["Attraversa il ponte e gira a sinistra.", "Cross the bridge and turn left."]] },
      { it: "il quartiere", en: "neighbourhood",
        ex: [["Abito in un quartiere tranquillo.", "I live in a quiet neighbourhood."], ["Questo quartiere è molto animato.", "This neighbourhood is very lively."]] }
    ]
  },
  {
    key: "scuola",
    label: "School",
    labelIt: "Scuola",
    image: "Images/scuola.png",
    accent: "#F39C12",
    bg: "rgba(243,156,18,0.08)",
    words: [
      { it: "la scuola", en: "school",
        ex: [["Vado a scuola ogni mattina.", "I go to school every morning."], ["La scuola inizia a settembre.", "School starts in September."]] },
      { it: "il professore", en: "teacher (m.) / professor",
        ex: [["Il professore spiega la lezione.", "The teacher explains the lesson."], ["Il professore di matematica è severo.", "The maths teacher is strict."]] },
      { it: "lo studente", en: "student",
        ex: [["Sono uno studente universitario.", "I am a university student."], ["Gli studenti studiano per l'esame.", "The students are studying for the exam."]] },
      { it: "la classe", en: "class / classroom",
        ex: [["La mia classe ha venti studenti.", "My class has twenty students."], ["La classe è silenziosa durante la prova.", "The classroom is quiet during the test."]] },
      { it: "il libro", en: "book",
        ex: [["Ho dimenticato il libro a casa.", "I forgot the book at home."], ["Leggo il libro di storia.", "I'm reading the history book."]] },
      { it: "il quaderno", en: "notebook",
        ex: [["Scrivo gli appunti nel quaderno.", "I write my notes in the notebook."], ["Ho bisogno di un quaderno nuovo.", "I need a new notebook."]] },
      { it: "la penna", en: "pen",
        ex: [["Mi presti una penna?", "Can you lend me a pen?"], ["Scrivo sempre con la penna blu.", "I always write with a blue pen."]] },
      { it: "la lavagna", en: "blackboard / whiteboard",
        ex: [["La professoressa scrive sulla lavagna.", "The teacher writes on the board."], ["Puoi venire alla lavagna?", "Can you come to the board?"]] },
      { it: "i compiti", en: "homework",
        ex: [["Ho molti compiti da fare stasera.", "I have a lot of homework to do tonight."], ["Hai fatto i compiti?", "Have you done your homework?"]] },
      { it: "l'esame", en: "exam",
        ex: [["Ho un esame domani mattina.", "I have an exam tomorrow morning."], ["Ho superato l'esame con trenta!", "I passed the exam with top marks!"]] },
      { it: "il voto", en: "grade / mark",
        ex: [["Ho preso un bel voto in italiano.", "I got a good grade in Italian."], ["Il voto minimo per passare è sei.", "The minimum passing grade is six."]] },
      { it: "la biblioteca", en: "library",
        ex: [["Studio in biblioteca ogni pomeriggio.", "I study in the library every afternoon."], ["La biblioteca chiude alle venti.", "The library closes at eight."]] }
    ]
  },
  {
    key: "veicoli",
    label: "Vehicles",
    labelIt: "Veicoli",
    image: "Images/veicoli.png",
    accent: "#566573",
    bg: "rgba(86,101,115,0.08)",
    words: [
      { it: "la macchina", en: "car",
        ex: [["Ho comprato una macchina nuova.", "I bought a new car."], ["La macchina italiana più famosa è la Ferrari.", "The most famous Italian car is the Ferrari."]] },
      { it: "l'autobus", en: "bus",
        ex: [["Prendo l'autobus ogni mattina.", "I take the bus every morning."], ["L'autobus numero cinque va in centro.", "Bus number five goes to the centre."]] },
      { it: "il treno", en: "train",
        ex: [["Il treno per Milano parte alle otto.", "The train to Milan leaves at eight."], ["Preferisco viaggiare in treno.", "I prefer to travel by train."]] },
      { it: "la bicicletta", en: "bicycle",
        ex: [["Vado al lavoro in bicicletta.", "I go to work by bicycle."], ["La bicicletta è ecologica ed economica.", "The bicycle is ecological and economical."]] },
      { it: "la moto", en: "motorbike",
        ex: [["Mio fratello ha una moto rossa.", "My brother has a red motorbike."], ["La moto è veloce ma pericolosa.", "The motorbike is fast but dangerous."]] },
      { it: "l'aereo", en: "plane",
        ex: [["Prendiamo l'aereo per Roma.", "We're taking the plane to Rome."], ["L'aereo è il mezzo più veloce.", "The plane is the fastest means of transport."]] },
      { it: "la nave", en: "ship / boat",
        ex: [["Prendiamo la nave per la Sardegna.", "We're taking the ship to Sardinia."], ["La nave è grande e lussuosa.", "The ship is large and luxurious."]] },
      { it: "il tram", en: "tram",
        ex: [["Il tram numero due attraversa la città.", "Tram number two crosses the city."], ["Milano ha una rete di tram storica.", "Milan has a historic tram network."]] },
      { it: "il taxi", en: "taxi",
        ex: [["Chiamo un taxi per l'aeroporto.", "I'll call a taxi to the airport."], ["Il taxi è caro ma comodo.", "The taxi is expensive but convenient."]] },
      { it: "il camion", en: "truck",
        ex: [["Il camion trasporta le merci.", "The truck transports goods."], ["Un grande camion blocca la strada.", "A big truck is blocking the road."]] },
      { it: "il pullman", en: "coach / long-distance bus",
        ex: [["Prendo il pullman per Napoli.", "I'm taking the coach to Naples."], ["Il pullman è più economico del treno.", "The coach is cheaper than the train."]] },
      { it: "la metropolitana", en: "metro / subway",
        ex: [["Prendo la metropolitana ogni giorno.", "I take the metro every day."], ["Roma ha tre linee della metropolitana.", "Rome has three metro lines."]] }
    ]
  },
  {
    key: "posti",
    label: "Places in Town",
    labelIt: "Posti in Città",
    image: "Images/posti.png",
    accent: "#E74C3C",
    bg: "rgba(231,76,60,0.08)",
    words: [
      { it: "la chiesa", en: "church",
        ex: [["La chiesa è al centro del paese.", "The church is in the centre of the village."], ["Il Duomo di Milano è una chiesa famosa.", "The Milan Cathedral is a famous church."]] },
      { it: "il museo", en: "museum",
        ex: [["Gli Uffizi di Firenze sono un museo famoso.", "The Uffizi in Florence is a famous museum."], ["Vado al museo la domenica.", "I go to the museum on Sundays."]] },
      { it: "il parco", en: "park",
        ex: [["Passeggio nel parco ogni mattina.", "I walk in the park every morning."], ["Il parco è pieno di bambini il sabato.", "The park is full of children on Saturdays."]] },
      { it: "la banca", en: "bank",
        ex: [["Devo andare in banca a prelevare.", "I need to go to the bank to withdraw money."], ["La banca apre alle nove.", "The bank opens at nine."]] },
      { it: "l'ufficio postale", en: "post office",
        ex: [["Spedisco un pacco all'ufficio postale.", "I'm sending a parcel at the post office."], ["L'ufficio postale chiude alle tredici.", "The post office closes at one."]] },
      { it: "il mercato", en: "market",
        ex: [["Il mercato del sabato è molto animato.", "The Saturday market is very lively."], ["Compro la frutta fresca al mercato.", "I buy fresh fruit at the market."]] },
      { it: "il supermercato", en: "supermarket",
        ex: [["Faccio la spesa al supermercato ogni settimana.", "I do my shopping at the supermarket every week."], ["Il supermercato è aperto fino alle dieci.", "The supermarket is open until ten."]] },
      { it: "la farmacia", en: "pharmacy / chemist",
        ex: [["La farmacia è aperta tutta la notte.", "The pharmacy is open all night."], ["Compro le medicine in farmacia.", "I buy medicine at the pharmacy."]] },
      { it: "il cinema", en: "cinema / movie theatre",
        ex: [["Andiamo al cinema stasera?", "Shall we go to the cinema tonight?"], ["Il film inizia alle nove al cinema.", "The film starts at nine at the cinema."]] },
      { it: "il ristorante", en: "restaurant",
        ex: [["Ho prenotato un tavolo al ristorante.", "I booked a table at the restaurant."], ["Il ristorante è in centro città.", "The restaurant is in the city centre."]] },
      { it: "la piazza", en: "square / plaza",
        ex: [["Ci incontriamo in piazza a mezzogiorno.", "We meet in the square at noon."], ["La piazza è il cuore della città italiana.", "The square is the heart of the Italian city."]] },
      { it: "il castello", en: "castle",
        ex: [["Castel Sant'Angelo è a Roma.", "Castel Sant'Angelo is in Rome."], ["Il castello medievale domina la collina.", "The medieval castle dominates the hill."]] }
    ]
  }
];

// ============ VOCAB SPEAK ICON ============
const VOCAB_SPEAK_SVG_LG = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
const VOCAB_SPEAK_SVG_SM = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>`;
const VOCAB_CHEVRON_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>`;

// ============ VOCAB RENDER ============

function cleanSpeak(text) {
  return text.replace(/\/[ae]/gi, '').replace(/^(il |la |i |le |gli |l'|lo )/i, '').trim();
}

let vocabActiveCat = null;

function renderVocabSidebar() {
  const nav = document.getElementById('vocab-sidebar-nav');
  if (!nav) return;
  nav.innerHTML = VOCAB_CATEGORIES.map(cat => `
    <button class="vocab-sb-item${vocabActiveCat === cat.key ? ' vocab-sb-active' : ''}"
      data-cat="${cat.key}" style="--cat-accent:${cat.accent};" aria-label="${cat.label}">
      <img src="${cat.image}" alt="" class="vocab-sb-img" loading="lazy">
      <div class="vocab-sb-text">
        <span class="vocab-sb-it">${cat.labelIt}</span>
        <span class="vocab-sb-en">${cat.label}</span>
      </div>
      <span class="vocab-sb-count">${cat.words.length}</span>
    </button>
  `).join('');

  nav.querySelectorAll('.vocab-sb-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = VOCAB_CATEGORIES.find(c => c.key === btn.dataset.cat);
      if (cat) {
        closeSidebar();
        showVocabWords(cat);
      }
    });
  });
}

function openSidebar() {
  document.getElementById('vocab-sidebar').classList.add('vocab-sidebar-open');
  document.getElementById('vocab-sidebar-backdrop').classList.add('vocab-backdrop-visible');
}

function closeSidebar() {
  document.getElementById('vocab-sidebar').classList.remove('vocab-sidebar-open');
  document.getElementById('vocab-sidebar-backdrop').classList.remove('vocab-backdrop-visible');
}

function setVocabCatOpen(open) {
  document.querySelector('.vocab-layout')?.classList.toggle('vocab-layout-catopen', open);
}

function showVocabWelcome() {
  vocabActiveCat = null;
  setVocabCatOpen(false);
  renderVocabSidebar();

  const content = document.getElementById('vocab-content');
  content.innerHTML = `
    <div class="vocab-welcome">
      <div class="vocab-welcome-icon">📚</div>
      <h2 class="vocab-welcome-title">Vocabolario</h2>
      <p class="vocab-welcome-sub">Choose a theme to start learning Italian words</p>
      <div class="vocab-welcome-grid">
        ${VOCAB_CATEGORIES.map(cat => `
          <button class="vocab-welcome-card" data-cat="${cat.key}" style="--cat-accent:${cat.accent};--cat-bg:${cat.bg};">
            <img src="${cat.image}" alt="${cat.label}" class="vocab-welcome-img" loading="lazy">
            <span class="vocab-welcome-label">${cat.labelIt}</span>
            <span class="vocab-welcome-count">${cat.words.length} words</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  content.querySelectorAll('.vocab-welcome-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = VOCAB_CATEGORIES.find(c => c.key === card.dataset.cat);
      if (cat) showVocabWords(cat);
    });
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showVocabWords(cat) {
  vocabActiveCat = cat.key;
  setVocabCatOpen(true);
  renderVocabSidebar();
  closeSidebar();

  const content = document.getElementById('vocab-content');

  const wordsHtml = cat.words.map(word => {
    const speakText = cleanSpeak(word.it);
    const exHtml = word.ex.map(([it, en]) => `
      <div class="vocab-example-row">
        <div class="vocab-example-texts">
          <span class="vocab-ex-it">${it}</span>
          <span class="vocab-ex-en">${en}</span>
        </div>
        <button class="vocab-speak-sm" data-speak="${escapeHtml(it)}" title="Listen" style="--cat-accent:${cat.accent};">${VOCAB_SPEAK_SVG_SM}</button>
      </div>
    `).join('');

    return `
      <div class="vocab-word-card" style="--cat-accent:${cat.accent};--cat-bg:${cat.bg};">
        <div class="vocab-word-main">
          <div class="vocab-word-texts">
            <span class="vocab-word-it">${word.it}</span>
            <span class="vocab-word-en">${word.en}</span>
          </div>
          <div class="vocab-word-btns">
            <button class="vocab-speak-lg" data-speak="${escapeHtml(speakText)}" title="Listen" style="--cat-accent:${cat.accent};">${VOCAB_SPEAK_SVG_LG}</button>
            <button class="vocab-expand-btn" aria-expanded="false" aria-label="Show examples">${VOCAB_CHEVRON_SVG}</button>
          </div>
        </div>
        <div class="vocab-examples vocab-examples-hidden">${exHtml}</div>
      </div>
    `;
  }).join('');

  content.innerHTML = `
    <button class="vocab-back-btn" id="vocab-back-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      All categories
    </button>
    <div class="vocab-word-header-inner" style="--cat-accent:${cat.accent};--cat-bg:${cat.bg};">
      <div class="vocab-word-header-img-wrap">
        <img src="${cat.image}" alt="${cat.label}" class="vocab-word-header-img-full">
      </div>
      <div class="vocab-word-header-text">
        <h2 class="vocab-word-header-title">${cat.labelIt}</h2>
        <p class="vocab-word-header-sub">${cat.label} · ${cat.words.length} words</p>
      </div>
    </div>
    <div class="vocab-word-list">${wordsHtml}</div>
  `;

  document.getElementById('vocab-back-btn').addEventListener('click', showVocabWelcome);

  content.querySelectorAll('[data-speak]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (typeof speech !== 'undefined') speech.speak(btn.dataset.speak, btn);
    });
  });

  content.querySelectorAll('.vocab-word-card').forEach(card => {
    const expandBtn = card.querySelector('.vocab-expand-btn');
    const examples  = card.querySelector('.vocab-examples');
    function toggle(e) {
      if (e && e.target.closest('[data-speak]')) return;
      const open = expandBtn.getAttribute('aria-expanded') === 'true';
      expandBtn.setAttribute('aria-expanded', String(!open));
      expandBtn.classList.toggle('vocab-expanded', !open);
      examples.classList.toggle('vocab-examples-hidden', open);
    }
    expandBtn.addEventListener('click', e => { e.stopPropagation(); toggle(e); });
    card.addEventListener('click', toggle);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupVocab() {
  renderVocabSidebar();
  showVocabWelcome();

  document.getElementById('vocab-sidebar-toggle')?.addEventListener('click', openSidebar);
  document.getElementById('vocab-sidebar-close')?.addEventListener('click', closeSidebar);
  document.getElementById('vocab-sidebar-backdrop')?.addEventListener('click', closeSidebar);
}

document.addEventListener('DOMContentLoaded', setupVocab);
