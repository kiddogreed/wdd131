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
- **No <marquee> Used:** The deprecated <marquee> tag was removed. A modern CSS animation is used for any scrolling text effects.
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
