// getdates.js
// Purpose: Dynamically set copyright year and last modified date in the footer and show a greeting

document.addEventListener('DOMContentLoaded', function() {
    // Dynamic greeting based on time of day
    const greetingDiv = document.getElementById('greeting');
    if (greetingDiv) {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';
        if (hour < 12) {
            greeting = 'Good morning!';
        } else if (hour < 18) {
            greeting = 'Good afternoon!';
        } else {
            greeting = 'Good evening!';
        }
        greetingDiv.textContent = greeting;
    }

    // Get the span for the current year (for copyright)
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Get the span for the last modified date
    const lastMod = document.getElementById('lastModified');
    if (lastMod) {
        lastMod.textContent = 'Last Modified: ' + document.lastModified;
    }
});