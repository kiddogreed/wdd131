# WDD 131 Home Page Assignment

This is my home page for the WDD 131 course at BYU-Idaho. It follows the [W01 Assignment instructions](https://byui-cse.github.io/wdd131-ww-course/week01/assignment-01.html).

## What I Did

1. Created folders: `styles`, `scripts`, and `images` in my project.
2. Made `index.html` in the root folder with:
	- Proper HTML structure (doctype, html, head, body)
	- Meta tags for charset, viewport, description, and author
	- A header with the course title and navigation links (LinkedIn, Canvas, Scripture, Final Project)
	- A main section with my name, two cards (About Me and Web Dev Resources), and local images
	- A footer with copyright and last modified date
3. Wrote CSS/experiment in `styles/base.css` for layout, colors, fonts (using Google Fonts), and responsive design. (mostly googling it)
4. Used Flexbox for navigation and Grid for the main layout.
5. Updated the **About Me** card layout to display content side-by-side:
	- "About Me" section: bio text on the left, profile photo on the right
	- "Makati Philippines" section: city/flag image on the left, description text on the right
	- Both sections stack vertically on smaller screens (below 700px) using a responsive media query
6. Added a hover effect to the navigation links.
7. Wrote JavaScript in `scripts/getdates.js` to show the current year and last modified date in the footer, and a dynamic greeting in the header.
8. Committed and pushed everything to GitHub.
9. Set up GitHub Pages in repo settings so my site is live at: [https://kiddogreed.github.io/wdd131/](https://kiddogreed.github.io/wdd131/)





## Testing and Auditing

- I used my browser's DevTools (F12) to check for JavaScript errors and inspect the page.
- I used DevTools CSS Overview to check color contrast.
- I ran Lighthouse in DevTools to check accessibility, best practices, and SEO.
- I used the WDD 131 Audit tool to self-check my HTML and CSS.

### Audit Results: Issues

- **Nav Links:** My `<nav>` contains only 3 `<a>` elements (Canvas, Scripture, Final Project). The audit expects at least 4 links in the `<nav>`. All other checks passed (HTML, CSS, accessibility, color contrast, structure, and naming conventions).

### Other Issues Addressed

- **Image Optimization:** All images are referenced correctly, have descriptive alt text, and are optimized to be under 125 kB for fast loading.
- **No <--marquee--> Used:** The deprecated <--marquee--> tag was removed. A modern CSS animation is used for any scrolling text effects.
- **No Inline or Embedded Styles:** All CSS is in external stylesheets, following best practices.
- **Color Usage Standardized:** All colors are now managed via CSS variables for consistency and maintainability.
- **Footer Contrast:** Footer background and text colors were adjusted to meet WCAG AAA contrast requirements.

## How to View

Just open [https://kiddogreed.github.io/wdd131/](https://kiddogreed.github.io/wdd131/) in your browser.

---

Made by John Russelle Domingo for WDD 131.

## Week 02: What I Did and Learned

- Made a Book of Mormon Top 10 list app (add, delete, and check chapters) with HTML, CSS, and JavaScript.
- Practiced making web pages look good on phones and computers using media queries and Google Fonts.
- Built a hamburger menu for small screens and learned how to show/hide navigation with JavaScript.
- Added a highlight to the current page in the menu (wayfinding).
- Practiced using JavaScript to change text on the page and debug code in the browser.
- Learned how to check and clean up user input, and give feedback if something is wrong.
- Improved my CSS for better layout and style on all devices.
- Fixed a W3C CSS parse error in `temples.css` caused by using a CSS variable inside `rgba()`.
- Fixed footer contrast on the temples page to meet WCAG AAA standards by switching text color to black.

## Week 03: What I Did and Learned

- Copied and organized starter CSS from CodePen into `styles/design.css`.
- Fixed padding and color contrast issues in `.callout` containers to meet WCAG AA/AAA standards.
- Left-aligned the `<h2>` heading and made it span two columns using CSS Grid.
- Used the CSS Overview tool in DevTools to check and improve color contrast.
- Replaced the deprecated `<marquee>` element with a modern `.banner` div for accessibility and usability.
- Laid out `<main>` content in two columns using `grid-template-columns` and made the `<h2>` span both columns with `grid-column`.
- Left-aligned the footer content for better readability.
- Updated README.md to reflect all recent changes and improvements.

## Week 04: What I Did and Learned

### Topics Covered
- **W04 Project: Website Subject** — chose a subject for my personal website and built the page around it
- **HTML advance Tables** — learned how to create and structure data tables using `<table>`, `<tr>`, `<th>`, and `<td>`
- **Lazy Loading Images** — learned how to use `loading="lazy"` on `<img>` elements to defer off-screen image loading
- **JavaScript Objects** — studied how to create and use JS objects to group related data under one variable
- **JavaScript Array Functions** — practiced built-in array methods like `filter()`, `map()`, and `forEach()` to work with lists of data

### What I Built
- Created `filtered-temples.html` as an enhanced version of `temples.html` with dynamic, filterable temple cards.
- Built a full JavaScript array of 12 temple objects, each with a name, location, dedication date, area, and image URL.
- Used JavaScript to dynamically generate every temple card on the page — no hardcoded HTML cards.
- Wired up the navigation links (Home, Old, New, Large, Small) to filter the temple array and redraw the cards.

### JavaScript Concepts Practiced
- **Arrays and objects** — stored all temple data in a structured list of JavaScript objects.
- **`forEach` loop** — iterated over each temple to build its card elements one by one.
- **`filter()`** — used array filtering to narrow down temples based on year, size, or location.
- **`parseInt()`** — extracted just the year number from the dedication date string to compare dates.
- **`createElement` and `appendChild`** — built HTML elements entirely in JavaScript and inserted them into the page.
- **`addEventListener`** — listened for clicks on nav links and responded by re-rendering the cards.
- **`DOMContentLoaded`** — learned to wait for the page to fully load before running JavaScript that touches the HTML.
- **`data-filter` attributes** — used custom HTML attributes to pass filter values from the nav links to JavaScript.

### CSS Concepts Practiced
- **CSS Grid** — used `display: grid` and `repeat(3, 1fr)` to arrange cards in a responsive 3-column layout.
- **`object-fit: cover`** — made all temple images the same height without stretching or distorting them.
- **CSS variables** — reused color values across the stylesheet with `var(--name)`.
- **Media queries** — applied different layouts for mobile (1 column) vs. desktop (3 columns).

### Challenges Overcome
- **Cards not showing at all** — the `nonutahLink.addEventListener` line was crashing the script because `#non-utah-link` didn't exist in the HTML. Since the error happened before `DOMContentLoaded`, no temples appeared. Fixed by wrapping it in a `null` check (`if (nonutahLink)`).
- **Function name mismatch** — the event handler called `createTempleCards()` but the function was named `templeCard()`. Renamed everything to `createTempleCards` consistently.
- **Static HTML blocking dynamic content** — leftover hardcoded `<figure>` elements from the original `temples.html` were still in `<main>`, causing duplicate and incorrect cards to appear. Removed them and replaced with a single `<div class="temple-cards"></div>`.
- **Broken HTML file** — `filtered-temples.html` was missing its closing `</main>`, footer, `</body>`, and `</html>` tags, which caused layout and rendering issues. Completed the file structure.
- **Uneven image sizes** — temple images from different sources had different aspect ratios, making the grid look messy. Fixed with `height: 200px` and `object-fit: cover` so every image fills its card uniformly.
- **CSS not styling JS-generated cards** — the original CSS had styles for `<figure>` elements but the JS created `<section>` elements. Added `.temple-cards section` styles to match the card look.
- **W3C CSS validation error** — the `box-shadow` on `.temple-cards section` used `rgba(var(--color-secondary-rgb), 0.15)`, which the W3C validator flags as invalid because `rgba()` requires literal numbers, not CSS variables. Fixed by replacing it with the direct value `rgba(140, 192, 235, 0.15)`. The 21 warnings from other `var(--color-*)` usages are expected behavior with CSS custom properties and can be safely ignored.

## Week 05: What I Did and Learned

### Site Plan (`project/siteplan.html`)
- Created a full **website planning document** for my project site, *John D's Web Gatherer* — a beginner's guide to static web scraping built with plain HTML, CSS, and JavaScript only (no frameworks).
- The plan covers six sections: site name, site purpose, visitor scenarios, color palette, typography choices, and wireframe sketches.
- Built CSS wireframes (no images) showing how the page looks on mobile and desktop.
- Applied the same color palette and fonts from the plan directly to the planning document itself.
- Fixed a **color contrast failure** (Lighthouse audit): wireframe label text was swapped from muted teal to lime cream on the dark blue background, bringing the contrast ratio up to ~7.3:1 (passes WCAG AA).
- Removed all **inline `style` attributes** from the color swatch elements and replaced them with CSS classes instead.

### Product Review Form (`form.html` + `review.html`)
- Built a **product review form** page from scratch using only HTML, CSS, and JavaScript.
- The form collects: product name (dropdown), star rating (1–5), install date, useful features (checkboxes), a written review, and an optional username.
- Product options in the dropdown are **generated by JavaScript** from an array — no hardcoded `<option>` tags.
- Star rating uses five radio buttons styled as clickable ★ icons with CSS — no images or libraries.
- When the form is submitted it goes to `review.html`, a thank-you confirmation page.
- `review.html` uses **`localStorage`** to count how many reviews have been submitted and shows the running total each visit.
- All CSS lives in `styles/form.css` — zero inline styles anywhere.

### Files Added / Changed
| File | What it does |
|---|---|
| `project/siteplan.html` | Website planning document |
| `project/styles/siteplan.css` | Styles for the site plan page |
| `form.html` | Product review input form |
| `review.html` | Submission confirmation + counter |
| `styles/form.css` | All form and confirmation styles |
| `scripts/form.js` | Populates the product dropdown from an array |
| `scripts/review.js` | Reads/writes the review counter in localStorage |

---

## Week 06: Final Project — John D's Web Gatherer 🕷️

### Where Week 05 Left Off (the Starting Point)
Week 05 produced a full site plan (`project/siteplan.html`) for *John D's Web Gatherer* — a beginner's guide to static web scraping. By the end of W05 I already had:

| W05 Deliverable | What it locked in for W06 |
|---|---|
| **Site name & purpose** — beginner scraping guide, pure HTML/CSS/JS | No scope-creep; I knew exactly what content to write |
| **Color palette** — Dark Amethyst `#0d0630`, Deep Space Blue `#18314f`, Muted Teal `#8bbeb2`, Lime Cream `#e6f9af` | Copied directly into `--css-variables` in `main.css` — zero guessing |
| **Typography** — Montserrat (headings) + Roboto (body), both from Google Fonts | Same `<link>` tag copy-pasted into every page's `<head>` |
| **3 visitor scenarios** — beginner, ethics-curious, messy-data person | Drove what *pages* I needed: Home (what is it?), Tools (what do I use?), Contact (ask a question) |
| **CSS wireframes** — mobile stacked / desktop 3-column | Confirmed the grid layout before writing a single line of real CSS |

*Decision: don't redesign in W06. The siteplan was the design. W06 was purely execution.*

---

### The Big Idea
Turn that blueprint into a real, working 4-page site. Think of it like a cookbook: the siteplan was the recipe card — Week 06 was actually cooking the meal.

---

### Pages Built

| Page | What it does | W05 connection |
|---|---|---|
| `index.html` | Home: hero, how-it-works steps, ethics FAQ, progress tracker | Scenario 1 (what is scraping?) + Scenario 2 (is it legal?) |
| `tools.html` | Filterable/searchable tool catalog (13 tools) + code snippet | Scenario 1 (what tools do I use?) |
| `contact.html` | Validated form with auto-save draft | Scenario 3 (I need help with my messy data) |
| `references.html` | Plain citation list | Required by assignment; linked from every footer |

---

### How I Built It 🔨

**Step 1 — Copy the palette into CSS variables**
Opened `siteplan.html`, grabbed the 5 hex codes from the color swatches section, and pasted them as `:root` variables in `styles/main.css`.
*Decision: CSS variables mean changing a color in one place updates the whole site — same trick used in the siteplan CSS itself.*

**Step 2 — Styles first, HTML second**
Built `styles/main.css` (mobile-first) and `styles/large.css` (tablet/desktop overrides) before writing any HTML.
*Decision: the wireframes already told me the layout — code the layout rules once, then all pages inherit them.*

**Step 3 — One shared JS file for common stuff**
`scripts/site.js` handles three things every page needs: hamburger nav toggle, footer year, and the progress tracker.
*Decision: one file instead of copy-pasting the same 3 functions across 4 pages.*

**Step 4 — Separate JS files for page-specific logic**
`scripts/tools.js` runs the tool catalog. `scripts/contact.js` handles the form.
*Decision: keeps each file small and focused — easier to debug and read.*

---

### JavaScript Checklist ✅ (Assignment Requirements)

| Requirement | Where it lives |
|---|---|
| More than one function | Every JS file has multiple named functions |
| DOM interaction (select, modify, listen) | `renderProgressTracker`, `renderTools`, `initContactForm` |
| Conditional branching | Topic toggle (add vs. remove), form validation checks, filter logic |
| Objects, arrays, array methods | `TOOLS` and `TOPICS` arrays; `.filter()`, `.map()`, `.forEach()`, `.push()`, `.splice()` |
| Template literals **exclusively** | All dynamic HTML strings use `` `backtick ${ }` `` — zero string concatenation |
| `localStorage` | Progress tracker saves/loads checked topics; contact form saves draft while typing |

---

### Emojis & Visual Design 🎨

Emojis pull double duty — decoration **and** meaning at zero image cost:
- 🕷️ = site identity (spider = web gatherer — the name pun made visual)
- ✅ / ⬜ = progress tracker tick boxes (everyone already knows what these mean)
- 🐍 / 📦 / 💻 = category icons on tool cards (Python snake, JS box, CLI terminal)
- 🔨 / ⚖️ / 💬 = feature card icons on the home page

*Decision: use emojis instead of loading an icon library. Saves a network request and keeps the HTML clean.*

---

### Challenges Overcome 💪

| Problem | What went wrong | How I fixed it |
|---|---|---|
| **Nav on desktop** | Hamburger button stays visible when screen is wide | Added `display:none` on `.nav-toggle` inside the `@media (min-width:768px)` block |
| **Progress bar fills but doesn't animate** | Width applied instantly after JS sets `style.width` | CSS `transition: width 0.5s ease` on `.progress-bar` makes it slide smoothly |
| **Form draft restores stale data** | Bad JSON in localStorage crashes `JSON.parse` | Wrapped `loadDraft` in `try/catch` — clears the bad key and silently moves on |
| **Tool search feeling broken** | Results vanish while typing because previous filter was reset | Stored `activeCategory` and `searchQuery` in module-level variables so both apply together |
| **`robots.txt` FAQ** | Needed a real `robots.txt` example URL that wouldn't break | Used `example.com` (IANA-reserved domain) — safe, predictable, always accessible |

---

### What I Learned 🧠

- **Plan first, build second.** The siteplan doc paid off — I never had to guess the colors, fonts, or layout during coding.
- **CSS variables are a superpower.** Changing `--teal` in one place updated every heading, button border, and focus ring across all four pages instantly.
- **`localStorage` is simple but fragile.** Always wrap reads in `try/catch` because any corrupted value will crash your whole script silently.
- **Template literals keep HTML readable.** Writing multi-line HTML strings with `${}` slots is far easier to scan than a wall of `+` concatenation.
- **Lazy loading is one attribute.** Adding `loading="lazy"` to the SVG diagram took 5 seconds and makes the page load faster on slow connections.

---

### Does It Actually Work? — Live Demo 🖥️

**Yes.** Open it here (once pushed to GitHub Pages):
👉 `https://kiddogreed.github.io/wdd131/project/index.html`

---

#### Page-by-page walkthrough

**🏠 Home (`index.html`)**
1. Open the page — the hero banner loads with a dark space-themed background
2. On mobile: tap **☰** in the top-right → nav slides open → tap **✕** to close it
3. Scroll down to **"Track Your Learning"** → click any topic checkbox → it turns ✅ and the progress bar fills
4. Close the tab, reopen the page → your checkboxes are still ticked *(localStorage at work)*
5. Click **Reset Progress** → everything clears back to 0%
6. Scroll to **Ethics & Best Practices** → click any FAQ question → the answer accordion opens/closes

**🔧 Tools (`tools.html`)**
1. All 13 tool cards load automatically — no page refresh needed
2. Click **Python** filter button → only Python tools show; button highlights
3. Click **All** → everything comes back
4. Type `"soup"` in the search box → only BeautifulSoup appears
5. Type something that matches nothing (e.g. `"xyz"`) → "No tools match" message appears
6. Clear the search → all tools reappear
7. Click **View docs ↗** on any card → opens the official docs in a new tab

**📬 Contact (`contact.html`)**
1. Start typing your name, email, and a message — then close the tab
2. Reopen the Contact page → your half-typed form is still there *(draft auto-save via localStorage)*
3. Hit **Send Message** with the form empty → red error messages appear under each required field
4. Fill in all fields correctly and click **Send Message** → form hides, green success message appears
5. Click **Clear Form** at any point → all fields reset

**📄 References (`references.html`)**
1. Linked from every page's footer — click "References" in the footer
2. Plain-text citations page, no styling needed

---

#### Quick sanity checks before submitting

| Check | How |
|---|---|
| No red console errors | DevTools → Console tab (F12) |
| Progress tracker saves on refresh | Check a topic → F5 → still checked |
| Form validates empty submit | Click Send with blank fields → errors appear |
| Hamburger works on narrow screen | Resize browser to < 768px → nav collapses |
| Last Modified shows in footer | Should display today's date (or file's actual modified date) |

---

### Future Improvements 🚀

| Idea | Why it would help |
|---|---|
| Add a "Beginner's First Scraper" page with a real step-by-step tutorial | The current site explains *what* scraping is but doesn't walk through a full working example |
| Dark/light theme toggle | Some users prefer a lighter background for reading long text |
| Tool comparison table | Side-by-side feature grid (speed, JS support, learning curve) would save visitors research time |
| Store contact submissions to a real backend | Right now the form just clears — connecting it to a service like Formspree would send a real email |
| Keyboard-accessible progress tracker | Currently click-only; adding `Enter`/`Space` key support would improve accessibility |
