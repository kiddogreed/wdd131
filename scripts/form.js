// form.js
// Purpose: Populate the product select dynamically and set footer dates.

// Product data source
const products = [
  { id: "fc-1888", name: "flux capacitor",    averagerating: 4.5 },
  { id: "fc-2050", name: "power laces",        averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits",      averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer",     averagerating: 5.0 }
];

// Populate the product <select> with one <option> per product
const productSelect = document.getElementById('product-name');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;           // id used as the option value
  option.textContent = product.name;   // name displayed to the user
  productSelect.appendChild(option);
});

// Set footer copyright year and last-modified date
const yearEl = document.getElementById('currentyear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modEl = document.getElementById('lastModified');
if (modEl) modEl.textContent = 'Last Modified: ' + document.lastModified;
