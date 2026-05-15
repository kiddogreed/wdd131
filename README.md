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
