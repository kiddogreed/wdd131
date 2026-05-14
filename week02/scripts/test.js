const name = document.getElementById("myName");

// Loop through each letter in the footer's name and display it in the footer
window.addEventListener('DOMContentLoaded', function() {
  const name = document.getElementById("myName");
  if (name) {
    let html = '';
    for (let letter of name.textContent) {
      // testing to see if the loop is working
      html += `<span>${letter}<br></span>`;
    }
    name.innerHTML = html;
  }
});

