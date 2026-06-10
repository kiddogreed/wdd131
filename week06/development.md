W06 Project
Overview
The final website project is a comprehensive assessment that demonstrates your mastery of the course learning outcomes in HTML, CSS, and JavaScript. You will create a dynamic, responsive website that adheres to professional development standards.

Project Requirements
This project must be your own original design and development. You may not consult with or work with any other individual or group. The content and subject matter come from your topic proposal, and the site must be complete with no placeholders. You may reference images and text from other sources, and you must cite these on a separate references page.

Link the reference page (which does not need to be styled) in your website's footer.

Your project must meet the following functional and developmental specifications.

These are the minimum specifications for the project. You are encouraged to go above and beyond these requirements to demonstrate your mastery of the course learning outcomes.

Host your website project in your wdd131 GitHub Pages repository in the project folder you created for your siteplan.html document.
You can check the basic layout of your project folder and the siteplan.html document by using this quick audit tool.

The website must consist of at least three (3) pages with consistent navigation and visual theme suited to your target audience.
The site must have significant and relevant content that supports your website's purpose as outlined in your site plan.
The design must support accessibility, usability, visual appeal, and design principles.
Organize the pages with valid, standards-based HTML markup.
Apply valid CSS styling without unused or duplicate declarations and rules.
Make the site responsive for mobile (portrait and landscape) and larger screens while maintaining PARC design principles.
All images must be optimized.
Use a lazy loading technique to support progressive design.
Use an HTML form that meets the standards presented in the course.
Include dynamic elements created with JavaScript that demonstrate the following:
✔ Have more than one function,
✔ Include DOM interaction including selecting an element, modifying it, and listening for and reacting to events,
✔ Use conditional branching,
✔ Use objects, arrays, and array methods,
✔ Exclusively use template literals when building strings for output
✔ Use localStorage.
Ensure there are no spelling or grammatical errors.
Complete the project by the due date.
This course teaches you how to build dynamic and responsive websites using core web technologies: HTML, CSS, and JavaScript. Third-party templates, site builders, drag-and-drop tools, and designs based on existing websites are not permitted and will result in no credit for this project.

Testing
Use the browser's DevTools console to check for JavaScript runtime errors, or click the red error icon in the upper right corner of DevTools.
Use DevTools CSS Overview to check your color contrast.
Generate the DevTools Lighthouse report and run diagnostics for Performance, Accessibility, Best Practices, and SEO in both the mobile and desktop views.
Submission
Your project should be stored in its own subfolder within your wdd131 repository.
Return to Canvas and submit the project's URL.


---

## Steps to Build — John D's Web Gatherer

> Recipe-card version: what to create, in what order, and why each step matters.

---

### Phase 1 — Plan (do this before touching code)

**1. Lock in your topic & purpose**
Write 2 sentences: *what the site is about* and *who it's for.*
→ Mine: "A beginner's guide to static web scraping. For people who've never written a scraper."

**2. Define 3 visitor scenarios**
Ask "what question would a real visitor arrive with?" — one per scenario.
→ These become your pages. My 3 scenarios turned into Home, Tools, and Contact.

**3. Pick a color palette (5 colors max)**
Choose: background, card background, border/accent, heading color, body text.
→ Write down the hex codes — you'll paste them as CSS variables in Step 5.

**4. Choose 2 fonts from Google Fonts**
One for headings (personality), one for body (readability).
→ Grab the `<link>` snippet — you'll paste it into every page's `<head>`.

**5. Sketch wireframes (even on paper)**
Sketch mobile (stacked) and desktop (columns) layouts.
→ You don't need to build them in code. A photo of a napkin sketch works.

---

### Phase 2 — Setup

**6. Create the folder structure**
```
project/
  index.html
  tools.html
  contact.html
  references.html
  styles/
    main.css
    large.css
  scripts/
    site.js
    tools.js
    contact.js
  images/
```

**7. Build `styles/main.css` — mobile-first**
Start with `:root { }` and paste your 5 color variables and 2 font variables.
Then write base styles: reset, body, links, header, nav, footer.
*Do this before any HTML — it forces you to design the system once, not per-page.*

**8. Build `styles/large.css` — desktop overrides**
One `@media (min-width: 768px)` block. Key rules:
- Hide the hamburger button (`display: none`)
- Show nav as a horizontal row
- Switch card grid from 1-column to 3-column

---

### Phase 3 — Shared JavaScript (`site.js`)

**9. Write 3 functions that every page needs**

| Function | What it does |
|---|---|
| `initNav()` | Toggles the hamburger open/close; marks the active nav link |
| `initYear()` | Writes `new Date().getFullYear()` into `#year` in the footer |
| `renderProgressTracker(containerId)` | Builds the checklist from a `TOPICS` array using `.map()` + template literals |

**10. Add localStorage to the progress tracker**
- `loadProgress()` → `JSON.parse(localStorage.getItem('key'))`
- `saveProgress(arr)` → `localStorage.setItem('key', JSON.stringify(arr))`
- Toggle: if ID is in the array → remove it; if not → push it. *(This is your conditional branch.)*

**11. Fire everything on `DOMContentLoaded`**
```js
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initYear();
  renderProgressTracker('progress-container');
});
```

---

### Phase 4 — Page HTML (all 4 pages follow the same shell)

**12. Copy this shell into every `.html` file**
```html
<header>  ← logo + hamburger button + <nav> with 3 links  </header>
<main>    ← unique content per page                        </main>
<footer>  ← copyright, year span, references link         </footer>
<script src="scripts/site.js"></script>
```
*Same header/footer on every page = consistent navigation. Only `<main>` changes.*

**13. `index.html` — add these sections inside `<main>`**
- Hero banner (big heading + subtitle + CTA button)
- "How it works" ordered steps (4 steps: request → receive → parse → store)
- 3 feature cards linking to other pages
- `<div id="progress-container"></div>` ← JS fills this in
- Ethics FAQ using `<details>` / `<summary>` (no JS needed — browser handles open/close)

**14. `tools.html` — filterable catalog**
- Add `<div id="filter-bar"></div>` and `<div id="tool-grid"></div>`
- JS (`tools.js`) fills both — no hardcoded tool cards in the HTML
- Add `<script src="scripts/tools.js"></script>` at the bottom

**15. `contact.html` — the form**
- Wrap fields in `<fieldset>` + `<legend>` groups
- Required fields: name, email, experience (select), message (textarea)
- Add `<span class="field-error" id="fieldname-error"></span>` after each field ← JS writes error text here
- Add a hidden `<div id="success-message">` ← JS shows this after valid submit
- Add `<script src="scripts/contact.js"></script>` at the bottom

**16. `references.html` — plain HTML, no stylesheet needed**
List every library, article, and image source. Link it from every footer.

---

### Phase 5 — Page-Specific JavaScript

**17. `tools.js` — the catalog**
- Define `const TOOLS = [ { name, category, icon, description, url }, ... ]`
- `filterTools(category, query)` → uses `.filter()` on the array
- `buildToolCard(tool)` → returns one card's HTML as a template literal string
- `renderTools()` → sets `grid.innerHTML = filtered.map(buildToolCard).join('')`
- `initTools()` → builds filter buttons with `.map()`, wires click + search input events

**18. `contact.js` — the form**
- `collectFormData(form)` → returns an object `{ name, email, experience, message, newsletter }`
- `saveDraft(form)` → `localStorage.setItem(KEY, JSON.stringify(collectFormData(form)))`
- `loadDraft(form)` → reads localStorage and restores field values (wrap in `try/catch`)
- `validateForm(form)` → checks each field; calls `setFieldError(id, message)` per field; returns `true/false`
- `handleSubmit(e)` → `e.preventDefault()` → validate → show success div → clear localStorage

---

### Phase 6 — Polish & Test

**19. Add `loading="lazy"` to every `<img>`**
One attribute. Free performance improvement on slow connections.

**20. Run Lighthouse (DevTools → Lighthouse tab)**
Target: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.
Fix whatever it flags before submitting.

**21. Check DevTools CSS Overview**
Every text/background combo should pass WCAG AA contrast (ratio ≥ 4.5:1).

**22. Check the browser console for JS errors**
Open DevTools → Console. Zero red errors = ready to submit.

**23. Push to GitHub, enable Pages, submit the URL**
`Settings → Pages → Branch: main → /root` → copy the `https://username.github.io/wdd131/project/` URL.