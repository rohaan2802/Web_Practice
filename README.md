# Web_Practice

Portfolio of **HTML, CSS, and JavaScript** course practice: numbered assignments (01-07), flexbox/media-query labs, fonts/icons experiments, and a large `Web_Practice_Data` mirror of tutorials and mini-projects (including Todo apps and DOM exercises).

---

## Overview

This repository is a front-end learning archive rather than a single deployable app. It demonstrates progressive web skills:

- Semantic multi-page HTML (About / Contact / services)
- CSS layout (Flexbox, Grid, media queries, keyframes, hover effects)
- Typography and Font Awesome usage
- Vanilla JavaScript (conditionals, loops, arrays, objects, DOM, Todo lists)

Open any `index.html` in a browser to review that exercise.

---

## Features

- **Assignments 01-03 (HTML):** Multi-page sites and early layout practice.
- **Assignment 04 (CSS) - WebPaint:** PSD-referenced landing with `style.css` and assets.
- **Assignment 06-07:** Additional page/CSS form work.
- **CSS labs:** `@Media`, Flex box (`flex.html`, `nav.html`), Fonts.
- **Java S:** Crash course pages, DOM labs, Todo / TodoList demos.
- **Web_Practice_Data:** Broader practice set (NavBar, Grid, HoverEffectIdeas, Tutorial Republic offline copies, etc.).

---

## Repository structure

```text
Web_Practice/
├── Assignment 01 (HTML)/
│   ├── index.html
│   └── pages/About.html | Contact.html
├── Assignment 02 (HTML)/          # Q No. 2-5 + index.html
├── Assignment 03(HTML)/img/       # home/about/service + showcase
├── Assignment 04(CSS)/WebPaint/   # assig.html, style.css, Design/, assets/
├── Assignment# 06/                # index.html + css/ + img/
├── Assignment 07(CSS)/            # form 2.html
├── CSS/
│   ├── @Media/index.html
│   ├── Flex box/flex.html | nav.html
│   └── Fonts/...
├── HTML/Media/
├── Java S/                        # DOM, Todo, Functions, loops, ...
└── Web_Practice_Data/             # Css/, Java S/, Tutorials Republic/, ...
```

---

## Build / run

No build step. Use any static server or open files directly.

```bash
# From repo root - example with Python
cd Web_Practice
python -m http.server 8080
# then visit http://localhost:8080/Assignment%2001%20(HTML)/
```

Or in VS Code: "Open with Live Server" on the target `index.html`.

**Suggested tour order**

1. `Assignment 01 (HTML)/index.html`
2. `CSS/Flex box/flex.html`
3. `CSS/@Media/index.html`
4. `Assignment 04(CSS)/WebPaint/assig.html`
5. `Java S/TodoList/index.html` or `Java S/DOM/index.html`

---

## Usage

- Prefer a local HTTP server when pages use relative assets or ES modules.
- Font Awesome / custom fonts are vendored under assignment `css/` folders - keep paths intact.
- `Web_Practice_Data/Tutorials Republic/` is offline reference material; not required to run graded assignments.

---

## Extending

- Consolidate repeated Font Awesome copies into a shared `assets/` tree.
- Add a top-level `index.html` gallery linking every assignment.
- Migrate one Flexbox/Grid lab to a small responsive component library.
- Introduce a simple bundler only if you start sharing SCSS or TS across labs.

---

## License

Educational practice work - third-party fonts/icons retain their own licenses.
