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


// week 4 assignment: array of temple objects
// Think of this like a list of index cards — each card holds info about one temple.
// Each item inside the array is an "object" (a group of related info wrapped in curly braces {}).
// Each piece of info is written as: propertyName: "value"
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      //"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-lds-758904-wallpaper.jpg"
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52590,
    imageUrl:
      //"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-758904-wallpaper.jpg"
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 44048,
    imageUrl:
      // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-758904-wallpaper.jpg"
      "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-lds-758904-wallpaper.jpg"
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25",
    area: 26383,
    imageUrl:
      // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-758904-wallpaper.jpg"
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  }
];



// loop the array of temple objects and output the data for each temple in a formatted way
// function outputTemples(temples) {
//   temples.forEach(temple => {
//     console.log(`Temple Name: ${temple.templeName}`);
//     console.log(`Location: ${temple.location}`);
//     console.log(`Dedicated: ${temple.dedicated}`);
//     console.log(`Area: ${temple.area} sq ft`);
//     console.log(`Image URL: ${temple.imageUrl}`);
//     console.log('-----------------------------');
//   });   
// }
// test the function by calling it with the temples array
//outputTemples(temples);


//create custom filter function to filter temples by area greater than 50,000 sq ft
// .filter() goes through every item and only keeps the ones where the condition is true
const filterLargeTemples = (temples) => {
  return temples.filter(temple => temple.area > 50000); // keep temples bigger than 50,000 sq ft
}
//create custom filter function to filter temples by location in the United States
// .includes() checks if a string contains a certain word or phrase
const filterUSTemples = (temples) => {
  return temples.filter(temple => temple.location.includes('United States')); // keep only US temples
}


// ── Navigation Filtering ─────────────────────────────────────────
// Grab all the nav links that have a data-filter attribute (Home, Old, New, Large, Small)
const navLinks = document.querySelectorAll('nav a[data-filter]');

// Loop through each nav link and attach a click listener to each one
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // stop the page from jumping to the top (default behavior of <a href="#">)

    // Read which filter the user clicked (e.g. "old", "new", "large", "small", "home")
    const filter = link.getAttribute('data-filter');
    let filtered; // this will hold the narrowed-down list of temples

    // A switch is like a series of if/else — it checks what filter was clicked
    // parseInt() pulls just the year number out of the dedicated string (e.g. "1888, May, 21" → 1888)
    switch (filter) {
      case 'old':
        // Keep only temples dedicated before the year 1900
        filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
        break;
      case 'new':
        // Keep only temples dedicated after the year 2000
        filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
        break;
      case 'large':
        // Keep only temples with an area greater than 90,000 square feet
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        // Keep only temples with an area smaller than 10,000 square feet
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        // "Home" or anything else — show the full list, no filtering
        filtered = temples;
    }

    // Pass the filtered list to the card-builder function to redraw the page
    createTempleCards(filtered);
  });
});

// This function builds and displays temple cards on the page.
// It takes an array of temples, creates an HTML card for each one, and inserts them into the page.
function createTempleCards(filteredTemple) {
  // Find the container div on the page where the cards will be placed
  const container = document.querySelector('.temple-cards');

  // Safety check — if the container doesn't exist on this page, stop here
  if (!container) return;

  // Wipe out any cards that are already showing before drawing new ones
  container.innerHTML = '';

  // Go through each temple in the list one by one
  filteredTemple.forEach(temple => {
    // Create the HTML elements that will make up one card
    let card = document.createElement('section');  // the card wrapper
    let name = document.createElement('h2');       // temple name heading
    let location = document.createElement('p');    // location text
    let dedicated = document.createElement('p');   // dedication date text
    let area = document.createElement('p');        // area in sq ft text
    let image = document.createElement('img');     // temple photo

    // Fill each element with the matching data from the temple object
    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area} sq ft`;

    // Set the image source, alt text (for screen readers), and lazy loading
    // loading="lazy" means the browser only downloads the image when it scrolls into view
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', `${temple.templeName} Temple`);
    image.setAttribute('loading', 'lazy');

    // Place each piece of info inside the card, in order
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    // Finally, attach the finished card to the page container
    container.appendChild(card);
  });
}

// Render all temples on page load
// 'DOMContentLoaded' fires once the browser has finished reading and building the HTML.
// We wait for this event so that the .temple-cards container exists before we try to fill it.
document.addEventListener('DOMContentLoaded', () => {
  createTempleCards(temples); // show all 12 temples when the page first opens
});

