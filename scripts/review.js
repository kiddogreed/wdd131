// review.js
// Purpose: Increment and display the total review submission count using localStorage.

// Read the current count from localStorage (default 0 if not set)
let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);

// Increment because this page load represents a new completed review
reviewCount += 1;

// Persist the updated count
localStorage.setItem('reviewCount', reviewCount);

// Display the count in the confirmation message
const countEl = document.getElementById('review-count');
if (countEl) {
  countEl.textContent = reviewCount;
}

// Populate the footer year / last-modified fields if present
const yearEl = document.getElementById('currentyear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modEl = document.getElementById('lastModified');
if (modEl) modEl.textContent = `Last Modified: ${document.lastModified}`;
