color palette

Colors: #048bbf, #8c9592, #c1d7e1, #efdedf, #644b3c

theme: beach


HTML skeleton

Header:

A single, centered page title at the very top, labeled "La Union".
No navigation bar or menu.
Hero Image:

Directly below the title, there is a large, full-width hero image.
The image spans the main content area and serves as a strong visual introduction.
Main Content Area:

Contains exactly two vertically stacked cards/sections:
Data Card:
The first (top) card is labeled "Data".
Intended for displaying data, statistics, or key information about La Union.
The card is visually separated (e.g., with a border or background) from the rest of the content.
Weather Card:
The second (bottom) card is labeled "Weather".
Intended for displaying weather information relevant to La Union.
Also visually separated as a card/box. (I also notice to add icon for weather check wireframe to validate)
Footer:

Located at the very bottom of the page.
Centered horizontally.
Contains placeholder text (such as copyright).
Layout/Responsiveness:

The two cards ("Data" and "Weather") are stacked vertically in both wide (desktop) and mobile views.
The design is clean, minimal, and easy to read.
No sidebars, galleries, contact forms, or navigation links are present.

wireframe: ![alt text](MyWireFrame.png)
external link: https://app.moqups.com/unsaved/7b8ec48b/view/page/ad64222d5

---

# How We Built This Page — Step by Step

## Step 1: Create Files in Right Places

- Created `place.html` in main `wdd131` folder
- Created `styles/place.css` for base (mobile) styles
- Created `styles/place-large.css` for wide screen styles
- Created `scripts/place.js` for JavaScript

---

## Step 2: Write HTML Structure

- Started with standard HTML5 boilerplate (`<!DOCTYPE html>`, `<head>`, `<body>`)
- Added charset, viewport, author, keywords, and description meta tags
- Linked both CSS files — base CSS first, then large-screen CSS second (order matters!)
- Linked Google Fonts for nice typography
- Added `<script src="scripts/place.js" defer>` — `defer` means JS runs after page loads
- Built page layout:
  - `<header>` — page title "La Union"
  - `<main>` with a `<section class="hero">` inside
  - Inside hero: a `<picture>` for responsive image, a Data card div, a Weather card div
  - `<footer>` with copyright year and last modified date placeholders

---

## Step 3: Add Responsive Hero Image Using picture + srcset

- Used `<picture>` element so browser picks best image size for screen
- Added `<source srcset="..." media="(min-width: 900px)">` for wide screens
- Added `<source srcset="..." media="(min-width: 600px)">` for medium screens
- Added `<img src="...">` as fallback for small screens or old browsers
- Used `.webp` format for all hero images (smaller file size, faster loading)

---

## Step 4: Add Weather Icon

- **Mobile view:** Used an SVG file (`weather.svg`) inside a `<span class="weather-img">` in Weather heading — SVG stays sharp at any size
- **Wide view:** Used a CSS `::after` pseudo-element to show the ⛅ emoticon next to "Weather" heading — no extra HTML needed, purely CSS

---

## Step 5: Write Base CSS (place.css)

- Set global color and spacing variables in `:root` so colors are easy to change in one place
- Styled `body`, `header`, `footer` with consistent colors from color palette
- Made `.hero` a flex column so image stacks above cards in mobile
- Styled cards (`.card`) with white background, rounded corners, and shadow
- Centered card headings in mobile view
- Centered SVG weather icon below Weather heading in mobile
- Added `.visually-hidden` class for accessibility (hides decorative headings visually but keeps them for screen readers)

---

## Step 6: Write Wide-Screen CSS (place-large.css)

- At 900px and wider, hero image becomes full browser width using `100vw`
- Hero image (`<picture>`) is absolutely positioned to fill hero area as background
- Data card is pinned to top-left corner of hero image using `position: absolute`
- Weather card is pinned to bottom-right corner
- Card headings become colored bars that float above each card
- ⛅ emoticon appears via `::after` pseudo-element on Weather heading
- SVG icon span is hidden in wide view
- Added mobile reset rules in `@media (max-width: 899px)` to undo any wide-view styles that leak to small screens

---

## Step 7: Write JavaScript (place.js)

- Used `document.getElementById('currentyear')` to show current year in footer automatically
- Used `document.lastModified` to show when page was last saved in footer
- Defined static weather values (`tempF = 30`, `windSpeedMph = 10`) matching page content
- Wrote `calculateWindChill(tempF, windSpeedMph)` function using official NWS formula
- Checked conditions before calling function:
  - Only calculate if temperature is 50°F or below AND wind speed is faster than 3 mph
  - If conditions not met, display "N/A" instead
- Displayed result in `#windChill` element on page

---

## Key Things Learned

| Topic | What Was Done |
|---|---|
| HTML structure | Semantic tags: header, main, section, footer |
| Responsive images | `<picture>` with `srcset` and WebP format |
| Weather icon | SVG for mobile, CSS `::after` emoticon for wide view |
| CSS organization | Two files: base (mobile-first) + large screen overrides |
| CSS variables | All colors and spacing defined in `:root` |
| Media queries | `max-width: 899px` for mobile, `min-width: 900px` for wide |
| JavaScript | Dynamic year, last modified date, wind chill calculation |
| Accessibility | Visually hidden headings, alt text on images |
