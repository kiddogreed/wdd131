document.addEventListener('DOMContentLoaded', function() {
// getdates.js
// Purpose: Dynamically set copyright year and last modified date in the footer

// Wait for the DOM to be fully loaded before running script
document.addEventListener('DOMContentLoaded', function() {
    // Get the span for the current year (for copyright)
    const yearSpan = document.getElementById('currentyear');
    // If the span exists, set its text to the current year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear(); // e.g., 2026
    }

    // Get the span for the last modified date
    const lastMod = document.getElementById('lastModified');
    // If the span exists, set its text to the document's last modified date
    if (lastMod) {
        lastMod.textContent = 'Last Modified: ' + document.lastModified;
    }
});
