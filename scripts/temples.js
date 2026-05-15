// temples.js
// Purpose: Footer dynamic dates + hamburger navigation toggle

// ── Footer: current year ──────────────────────────────────────────
// Inserts the current year into the copyright span
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Inserts the file's last modified date into the footer paragraph
const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = 'Last Modified: ' + document.lastModified;
}

// ── Hamburger Menu ────────────────────────────────────────────────
// Select the hamburger button and the nav list
const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('nav ul');

// ☰ = open symbol (HTML entity &#9776;)
// ✕ = close symbol
const OPEN_ICON = '\u2630';   // ☰ hamburger
const CLOSE_ICON = '\u2715';  // ✕ close/X

if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener('click', () => {
        // Toggle the .open class on the nav list to show/hide it
        const isOpen = navList.classList.toggle('open');

        // Swap the button icon between ☰ and ✕
        hamburgerBtn.textContent = isOpen ? CLOSE_ICON : OPEN_ICON;

        // Update aria-expanded for accessibility
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });
}
