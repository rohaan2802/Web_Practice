# Web_Practice

Front-end **course archive**: numbered HTML/CSS assignments, flexbox and media-query labs, Font Awesome / webfont experiments, and vanilla JS (DOM, Todo). Not a single SPA — open each `index.html` on its own.

**Author:** M. Rohaan · [rohaan2802](https://github.com/rohaan2802)

---

## Table of contents

1. [Suggested tour](#suggested-tour)
2. [Assignment 01 (`a01.html`)](#assignment-01-a01html)
3. [Flexbox lab (`flex.html`)](#flexbox-lab-flexhtml)
4. [Rest of the tree](#rest-of-the-tree)
5. [How to view](#how-to-view)

---

## Suggested tour

1. `Assignment 01 (HTML)/index.html` or extracted `a01.html`  
2. `CSS/Flex box/flex.html`  
3. `CSS/@Media/index.html`  
4. `Assignment 04(CSS)/WebPaint/assig.html`  
5. `Java S/TodoList/index.html` or `Java S/DOM/index.html`

---

## Assignment 01 (`a01.html`)

Early semantic/presentational HTML (pre-CSS-layout):

- Centered `<h1>` “Welcome To Online World!”
- `<hr>` + nav: Home (struck through `del`), **About**, **Contact** (`pages/About.html`, `pages/Contact.html`)
- Headings: *Introduction To React*, *Step-by-Step Guide* with `<b>`, `<br>`, `<mark>`
- Footer: `© 1997 - 2020 Designed & Developed by M.Rohaan` + Facebook/Instagram links
- HTML comment: `Dry = Don't Repeat yourself`

This is markup practice (align, font size, ins/del), not a React app.

---

## Flexbox lab (`flex.html`)

Title: **Flex Box**. Teaching file with **many commented** `flex-direction` / `flex-wrap` / `justify-content` / `align-items` experiments.

Active layout:

- `.wrap`: `display: flex`, 99% width, 500px height, 3px black border  
- Three `#box` children (150×150, padding 20, margin 10):  
  - Item 1 `lightcoral`, **`flex-shrink: 2`**  
  - Item 2 `aqua`  
  - Item 3 `cornflowerblue`  
- Extra items 4–6 commented out  

Uncomment `flex-flow`, `order`, `flex-grow`, `align-self` to demonstrate those properties in lab.

---

## Rest of the tree

| Area | Contents |
|------|----------|
| Assignment 02–03 | Multi-page HTML, images/showcase |
| Assignment 04 WebPaint | PSD-referenced landing + `style.css` |
| Assignment 06–07 | Further pages / form CSS |
| `CSS/@Media` | Breakpoints |
| `CSS/Fonts` | Typography |
| `Java S/` | Crash course, loops, arrays, DOM, Todo |
| `Web_Practice_Data/` | Extra NavBar/Grid/Hover labs, Tutorial Republic offline copies |

Vendored Font Awesome / fonts must stay at the relative paths used by each assignment.

---

## How to view

```bash
python -m http.server 8080
# http://localhost:8080/Assignment%2001%20(HTML)/
```

Or VS Code Live Server. Prefer HTTP when many relative assets exist.

---

## Extending

- Root gallery `index.html` linking every assignment.  
- One shared `assets/` for Font Awesome.  
- Keep this repo as a **timeline of skills**, not a production site.

---

## Author

**M. Rohaan** · [rohaan2802](https://github.com/rohaan2802)
