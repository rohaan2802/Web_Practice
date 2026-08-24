# Web_Practice

Front-end **course archive**: numbered HTML/CSS assignments, flexbox and media-query labs, Font Awesome / webfont experiments, vanilla JavaScript (DOM, Todo), and a large `Web_Practice_Data/` folder that includes extra labs plus an HTTrack copy of Tutorial Republic. This is **not** a single SPA — open each HTML file on its own.

**Author:** Mohammad Rohaan · **Roll:** 22I-2327 · **GitHub:** [rohaan2802](https://github.com/rohaan2802)

---

## Table of contents

1. [Problem and context](#problem-and-context)
2. [Suggested tour](#suggested-tour)
3. [Assignment 01 (HTML)](#assignment-01-html)
4. [Assignment 02 (HTML)](#assignment-02-html)
5. [Assignment 03 — Acme Web Design](#assignment-03--acme-web-design)
6. [Assignment 04 — WebPaint](#assignment-04--webpaint)
7. [Assignments 06–07](#assignments-0607)
8. [CSS labs](#css-labs)
9. [HTML labs](#html-labs)
10. [JavaScript labs](#javascript-labs)
11. [Web_Practice_Data](#web_practice_data)
12. [How to view](#how-to-view)
13. [Limitations](#limitations)
14. [Author](#author)

---

## Problem and context

A semester-long practice dump rather than one deployable site. Folders are named as the student created them (`Assignment 01 (HTML)`, `Assignment# 06`, `Java S/`). `Web_Practice_Data/Outlines.txt` lists a frontend/backend learning plan (HTML, CSS/Sass, Bootstrap, JavaScript/ES6, React/Vue, PHP/MySQL, Laravel, Python, example site types). That outline is a study list, not a description of what this repo implements.

Language (GitHub): HTML. Default branch: `main`. The Git tree is thousands of lines because of Font Awesome webfonts, HoverEffectIdeas images, and the Tutorial Republic offline mirror.

This working copy extracts `a01.html` and `flex.html` at the folder root; on GitHub they live at `Assignment 01 (HTML)/index.html` and `CSS/Flex box/flex.html`.

---

## Suggested tour

1. `Assignment 01 (HTML)/index.html` — semantic tags, nav, footer.
2. `Assignment 02 (HTML)/` — marquee, lists, iframe, forms, tables.
3. `Assignment 03(HTML)/img/home.html` — multi-page Acme-style site.
4. `CSS/Flex box/flex.html` and `nav.html`.
5. `CSS/@Media/index.html`.
6. `Assignment 04(CSS)/WebPaint/assig.html`.
7. `Assignment 07(CSS)/form 2.html`.
8. `Java S/TodoList/index.html` or `Java S/DOM/index.html`.

---

## Assignment 01 (HTML)

Extracted locally as `a01.html`. Title: **assignment 01**.

- Centered `<h1>` **Welcome To Online World!** inside `<strong>`.
- `<hr size="3" color="black" width="30%">`.
- Nav: **HOME** struck through with `<del>` (links to `index.html`), **About** → `pages/About.html`, **Contact** → `pages/Contact.html`. Font size 5.
- Headings *Introduction To React* and *Step-by-Step Guide* using `<ins>`, `<b>`, `<br>`, `<mark>`. Copy is React documentation-style prose; this is **markup practice**, not a React app.
- Footer: `© 1997 - 2020 Designed & Developed by M.Rohaan` plus Facebook and Instagram links.
- HTML comment: `Dry = Don't Repeat yourself`.

Related files: `Assignment 01 (HTML)/pages/About.html`, `pages/Contact.html`.

---

## Assignment 02 (HTML)

| File | What it actually contains |
|------|---------------------------|
| `index.html` | Dual `<marquee>`: vertical “Welcome to the Digital World / Online World”, horizontal “Welcome to the Online World” |
| `Q No. 2.html` | Nested `<ol type="I">` / `type="a"` / `type="1"` and `<ul type="circle|square">` list exercise |
| `Q No. 3.html` | YouTube embed iframe (`5rvkSr5uN1E`) |
| `Q No. 4.html` | Bordered table form: Name, Sex radios, Eye color `<select>` (only **green**), checkboxes (height/weight), athletic-ability textarea, **Enter my information** |
| `Q No. 5(a).html` | Employee table: Bill Gates / Steve Jobs / Larry Page / Mark Zukeberg, salaries, rowspan “Company Founder”, total **$4600** |
| `Q No. 5(b).html` | Nested table labelled “Example : Nested” (CI / All Genders / By Gender) |

---

## Assignment 03 — Acme Web Design

Three pages under `Assignment 03(HTML)/img/` sharing a dark header `#35424a` and red accent `#e8491d`:

| File | Role |
|------|------|
| `home.html` | Brand **Acme Web Design**; Home / About / Service; hero on `showcase.jpg` — **Affordable Professional Web Design**; newsletter email + **Subscribe** |
| `about.html` | About page (same nav pattern) |
| `service.html` | Service page |
| `showcase.jpg` | Hero background |

Home hero is a `background-image` cover at 60vh. Subscribe uses `type="button"` (no submit handler).

---

## Assignment 04 — WebPaint

`Assignment 04(CSS)/WebPaint/assig.html` + `style.css`. Title **Home Page**.

- Nav: logo `assets/img/logo.png`, links HOME (`.active`) / ABOUT / CONTACT / HELP / QUIT.
- Hero: **We are Webpaint** — “digital & branding agency based in Jupiter…”.
- CTA: **SEE PORTFOLIO**.
- Four icon columns all labelled **columbus** with `Design/icon.png`.
- **Our Featured Works** with filter links All / Graphic / Motion Design / Help.
- Twelve copies of `Design/img12.png` in `.imgs`.

Design folder also has `home.psd`, `img2.png`, `img4.png`, and `.lnk` shortcuts (`img5.lnk` … `img7.lnk`) that will not work on another machine.

---

## Assignments 06–07

| Path | Notes from tree / fetch |
|------|-------------------------|
| `Assignment# 06/index.html` | Landing-style page with `css/style.css` and `img/v4.jpg` |
| `Assignment 07(CSS)/form 2.html` | Title **Form Designing**. Grey framed form **From Validation**: userName, email, password, confirm password, Male/Female radios, licence checkbox, **Submit** as `type="button"`. Cursive type, `#333` / `#f5f5f5`, `box-shadow`. No JS validation despite the heading. |

---

## CSS labs

| Path | Exercise |
|------|----------|
| `CSS/Flex box/flex.html` | Teaching file: many **commented** `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items` experiments. Live: `.wrap` is `display: flex`, 99% × 500px, 3px black border. Three `#box` children (150×150, padding 20, margin 10): Item 1 `lightcoral` with **`flex-shrink: 2`**; Item 2 `aqua`; Item 3 `cornflowerblue`. Items 4–6 commented out. Uncomment `order`, `flex-grow`, `align-self` in lab. |
| `CSS/Flex box/nav.html` | Title **navigations**. Grey 100px flex nav: brand **Gaming Spot**; Home / About / service / Help; `justify-content: space-between`. |
| `CSS/@Media/index.html` | Two floated 50% `.box` columns (aqua / violet). `@media (max-width: 838px)` stacks to 100% and `float: none`. `@media (max-width: 1120px)` reduces `h1`/`p` size. Viewport meta has a typo: `width=<device-width>`. |
| `CSS/Fonts/index.html` | Poppins + Font Awesome (`css/Fonts/…`). |
| `CSS/Grid/gridprac.html` | CSS Grid practice. |
| `CSS/IMage Hover/` | Hover stylesheet + `img1.jpg`. |
| `CSS/Input.html`, `background1.html`, `bef&aft.html`, `imgbfr&aft.html`, `keyframes.html`, `positions.html` | One-off demos. |
| `CSS/borders/plain.html`, `plain 2.html` | Border experiments. |
| `CSS/pseudo class/` | `assignment 3.html`, `button.html`, `seudo class.html`. |
| `CSS/selectors/` | `selector 1.html` … `selector 4.html`, `last selectors.html`. |

---

## HTML labs

| Path | Topic |
|------|--------|
| `HTML/Forms.html`, `Items.html`, `Media.html` | Forms, lists/items, media |
| `HTML/Media/index.html` | Images `img1–3.jpg` + `vid/trailer.MKV` |
| `HTML/Table 1.html` | Seminar schedule table (XML / DTD / XPath / XSL days Mon–Wed, times) |
| `HTML/Table 2.html`, `Table 3.html` | Further table exercises |

---

## JavaScript labs

Folder is spelled **`Java S/`**.

| Path | Role |
|------|------|
| `Javascript/JsCrashCourse/` | Crash-course page + `js/main.js` (file may be empty in the tree) |
| `Javascript/index.html`, `modernjs/js.html` | Modern JS notes |
| `Javascript/operators.md` | Operators markdown |
| `if else/index.html`, `conditional.md`, `switch assign/` | Conditionals |
| `loop/index.html`, `objects/`, `Arrays/`, `Functions/`, `Function assign/` | Core language |
| `DOM/`, `DOM 2/`, `DOM 3/` | Bootstrap CSS + `js/main.js` + `DOMreference.md` |
| `Todo/` | Bootstrap + jQuery 3.4.1 + `js/main.js` |
| `TodoList/` | Title **Todo List**. Nav “ToDo Application”. Form: new task, priority Low/High, date, Submit. Search, High/Low priority lists with Font Awesome checkboxes. Sample task “Cool task” dated 12 March 2016. Script tag is `src="/js/main.js"` (site-root path — likely 404 unless a server maps it). Local file is `Java S/TodoList/js/main.js`. |
| `Java assignments/assign/scrip.html` | Extra assignment page |
| `emmet.pdf` | Emmet reference |

Vendored: Bootstrap min CSS/JS, jQuery, Font Awesome 4 min CSS.

---

## Web_Practice_Data

Parallel practice tree plus **third-party** material:

| Area | Contents |
|------|----------|
| `Css/FlexBox/`, `Grid/`, `Fonts/`, `MediaQueries/`, `NavBar/`, `keyFrames/` | Repeat labs (navbar logos for HTML/CSS/brush) |
| `Css/HoverEffectIdeas/` | Codrops-style hover demo (`index.html`, `index2.html`, `set1.css`/`set2.css`, 33 images, Font Awesome 4.2, feather/codrops icon fonts) |
| `Java S/` | Duplicate crash-course / loops / if-else |
| `List/`, `Tables/`, `Forms.html` | Extra HTML |
| `Outlines.txt` | Frontend/backend syllabus notes (see above) |
| `Tutorials Republic/` | **HTTrack** offline copy (`hts-cache/`, `hts-log.txt`, mirrored `www.tutorialrepublic.com` pages, jQuery/Bootstrap/CDN copies). Treat as a local tutorial mirror, not original coursework. |

Do not list every webfont or mirrored HTML file; they dominate `TREE.txt`.

---

## How to view

Prefer HTTP so relative CSS/JS and Font Awesome paths resolve:

```bash
python -m http.server 8080
```

Then open e.g.:

- [http://localhost:8080/Assignment%2001%20(HTML)/](http://localhost:8080/Assignment%2001%20(HTML)/)
- [http://localhost:8080/CSS/Flex%20box/flex.html](http://localhost:8080/CSS/Flex%20box/flex.html)
- [http://localhost:8080/CSS/@Media/index.html](http://localhost:8080/CSS/@Media/index.html)
- [http://localhost:8080/Assignment%2004(CSS)/WebPaint/assig.html](http://localhost:8080/Assignment%2004(CSS)/WebPaint/assig.html)

VS Code / Cursor Live Server works. Spaces and `#` in folder names must be URL-encoded. Keep Font Awesome `webfonts/` next to each assignment’s `all.css`.

No bundler. Open one file at a time.

---

## Limitations

- Not a unified site: duplicated labs under `Web_Practice_Data/` and `Java S/` vs `Web_Practice_Data/Java S/`.
- Many `href="#"` / `type="button"` forms with no validation or POST.
- `TodoList` script path `/js/main.js` is not relative.
- `@Media` viewport meta is malformed (`width=<device-width>`).
- Assignment 04 `.lnk` shortcuts and Jupiter/Webpaint copy are placeholder.
- Tutorial Republic mirror may be stale and is third-party copyrighted material.
- Confirm Font Awesome / webfont licences if you reuse icon packs.

**Possible extensions (not implemented):** a root gallery `index.html` linking every assignment; one shared `assets/` for Font Awesome.

---

## Author

**Mohammad Rohaan** · Roll **22I-2327** · [github.com/rohaan2802](https://github.com/rohaan2802)
