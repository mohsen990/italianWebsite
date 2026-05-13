# 🇮🇹 Lingua Italiana

An interactive Italian language learning website built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just a fast, self-hosted static site.

## Live Sections

| Section | Status | Description |
|---|---|---|
| 🔤 Verbs | ✅ Live | 60 essential verbs with full conjugations, 6 tenses, IPA, and audio |
| 📚 Vocabulary | ✅ Live | 240 words across 20 themed categories with images and example sentences |
| 💬 Phrases | ✅ Live | 96 essential phrases across 8 real-life situations with audio |
| 📖 Grammar | ✅ Live | 16 lessons (A1 + A2) with rules, tables, examples, and quizzes |
| 📖 Stories | 🔜 Soon | Graded short stories with vocabulary highlights |
| 🎯 Quiz | 🔜 Soon | Conjugation drills and sentence exercises |

## Features

- **Verb flashcards** — flip cards with front (verb + IPA) and back (full conjugation table, examples, notes). 6 tenses per verb, category filter, shuffle, and "mark known" tracking saved to localStorage
- **Audio pronunciation** — Web Speech API with Italian voice, normal and slow speed toggle
- **Vocabulary** — 20 categories (Food, Travel, Clothing, Weather, School, Vehicles, and more). Sidebar navigation, full-size category image, expand/collapse example sentences per word
- **Phrases** — 8 tabbed categories (Greetings, Polite Expressions, Introductions, Restaurant, Shopping, Directions, Travel, Emergencies). Colored accent per category, usage notes, per-phrase audio
- **Grammar** — A1 and A2 levels, topic grid, full lesson view (intro → rules → reference table → examples → tip), 3-question quiz with immediate feedback and score
- **Dark mode** — automatic via `prefers-color-scheme`
- **Responsive** — works on mobile, tablet, and desktop
- **No tracking** — fully self-hosted, no analytics, no cookies

## Project Structure

```
italianWebsite/
├── index.html        # Single-page app shell
├── styles.css        # All styles (~1700 lines)
├── app.js            # Navigation + verb flashcard logic
├── verbs.js          # Verb data (60 verbs, 6 tenses each)
├── vocab.js          # Vocabulary data (240 words) + render logic
├── grammar.js        # Grammar data (16 topics) + render logic
├── phrases.js        # Phrases data (96 phrases) + render logic
└── Images/
    ├── backgroundjpg.jpg
    ├── activity.png
    ├── bodyParts.png
    ├── clothing.png
    ├── directions.png
    ├── emotions.png
    ├── food.png
    ├── frutta.png
    ├── house.png
    ├── meteo.png
    ├── personality.png
    ├── physical.png
    ├── posti.png
    ├── restaurant.png
    ├── salute.png
    ├── scuola.png
    ├── sentimenti.png
    ├── sport.png
    ├── veicoli.png
    ├── verdura.png
    └── viaggo.png
```

## Running Locally

No build step required. Just open `index.html` in a browser, or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8000`.

## Tech Stack

- **HTML5** — semantic markup, single-page app structure
- **CSS3** — custom properties, CSS Grid, Flexbox, `prefers-color-scheme`, `color-mix()`
- **Vanilla JavaScript** — no frameworks or libraries
- **Web Speech API** — Italian TTS for pronunciation
- **localStorage** — persists "known verbs" across sessions

## Created By

**Mohsen** · [mohsen@gmail.com](mailto:mohsen@gmail.com)
