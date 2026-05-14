document.addEventListener('DOMContentLoaded', function() {

const bomBooks = [
  "1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon",
  "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"
];

const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

//Create a click event listener for the Add Chapter button with addEventListener.

// Within the Add Chapter button click event function block (between the opening and closing braces of the callback function { ... }), complete the following tasks:
// Check to make sure the input is not blank before completing the remaining tasks in this list. Use an if block that either provides a message or does nothing and returns the .focus() to the input field.

button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  const inputValue = input.value.trim();
  if (inputValue === '') {
    alert('Please enter a chapter name.');
    input.focus();
    return;
  }
  // Validate input — Only accept Book of Mormon books
  const valid = bomBooks.some(book => inputValue.toLowerCase().startsWith(book.toLowerCase()));
  if (!valid) {
    alert("Please enter a valid Book of Mormon book and chapter (e.g., 'Alma 32').");
    input.focus();
    return;
  }
    const li = document.createElement('li')
    li.textContent = inputValue;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = '';
    input.focus();
  })
 
});

// Add an event listener to the delete button that removes the li element when clicked.

// Ideas to consider
// Validate input — Only accept Book of Mormon books
// Limit to 10 entries — Enforce the "Top 10" constraint
// Prevent duplicates — Don't allow the same chapter to be added more than once
// Better UI feedback — Show warnings/confirmations
// Improve accessibility — Ensure the application is usable with screen readers and keyboard navigation
// Format input — Standardize the format of the input for consistency

