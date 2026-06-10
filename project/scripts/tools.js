// ============================================================
// John D's Web Gatherer — tools.js
// Filterable, searchable tool catalog
// ============================================================

// --- Tool data: array of tool objects ---
const TOOLS = [
  {
    name:        'Requests',
    category:    'python',
    icon:        '🐍',
    description: 'The de-facto HTTP library for Python. Makes sending GET/POST requests simple, handling cookies, sessions, and headers with minimal boilerplate.',
    url:         'https://requests.readthedocs.io',
  },
  {
    name:        'BeautifulSoup 4',
    category:    'python',
    icon:        '🍵',
    description: 'A Python library for parsing HTML and XML. Lets you navigate, search, and modify a parse tree using CSS selectors or tag names.',
    url:         'https://www.crummy.com/software/BeautifulSoup/',
  },
  {
    name:        'Scrapy',
    category:    'python',
    icon:        '🕷️',
    description: 'A full-featured Python crawling framework. Handles request scheduling, item pipelines, and data export — ideal for large-scale scraping projects.',
    url:         'https://scrapy.org',
  },
  {
    name:        'lxml',
    category:    'python',
    icon:        '📄',
    description: 'A fast XML and HTML parser written in C. Integrates with BeautifulSoup for a significant speed boost when processing large documents.',
    url:         'https://lxml.de',
  },
  {
    name:        'httpx',
    category:    'python',
    icon:        '⚡',
    description: 'A next-generation HTTP client for Python with async/await support. A modern drop-in replacement for Requests with HTTP/2 capability.',
    url:         'https://www.python-httpx.org',
  },
  {
    name:        'Playwright (Python)',
    category:    'python',
    icon:        '🎭',
    description: "Microsoft's browser automation library for Python. Drives real Chromium, Firefox, or WebKit browsers — essential for JavaScript-rendered pages.",
    url:         'https://playwright.dev/python/',
  },
  {
    name:        'Cheerio',
    category:    'javascript',
    icon:        '📦',
    description: "jQuery-like HTML parsing for Node.js. Lightweight and fast — perfect if you're comfortable with CSS selectors and want server-side DOM traversal.",
    url:         'https://cheerio.js.org',
  },
  {
    name:        'Puppeteer',
    category:    'javascript',
    icon:        '🤖',
    description: "Google's Node.js library for controlling headless Chrome or Chromium. Ideal for scraping single-page apps that rely on JavaScript rendering.",
    url:         'https://pptr.dev',
  },
  {
    name:        'Playwright (Node)',
    category:    'javascript',
    icon:        '🎭',
    description: 'The Node.js version of Playwright — cross-browser, async-first, with a powerful selector engine and built-in network interception.',
    url:         'https://playwright.dev',
  },
  {
    name:        'Got',
    category:    'javascript',
    icon:        '🌐',
    description: 'A human-friendly and powerful HTTP request library for Node.js. Supports streaming, pagination helpers, and automatic retry logic.',
    url:         'https://github.com/sindresorhus/got',
  },
  {
    name:        'curl',
    category:    'cli',
    icon:        '💻',
    description: 'The classic command-line URL transfer tool. Great for quick one-off tests, page downloads, and header inspection without writing any code.',
    url:         'https://curl.se',
  },
  {
    name:        'wget',
    category:    'cli',
    icon:        '⬇️',
    description: 'A non-interactive network downloader that supports recursive website mirroring and automatic retries on failure.',
    url:         'https://www.gnu.org/software/wget/',
  },
  {
    name:        'jq',
    category:    'cli',
    icon:        '🔍',
    description: 'A lightweight command-line JSON processor. Indispensable for slicing, filtering, and reshaping JSON data returned from APIs or scrapers.',
    url:         'https://jqlang.github.io/jq/',
  },
];

// --- Human-readable category labels ---
const CATEGORY_LABELS = {
  all:        'All',
  python:     'Python',
  javascript: 'JavaScript',
  cli:        'CLI',
};

// --- Build one tool card via template literal ---
function buildToolCard(tool) {
  const badgeClass = `badge-${tool.category}`;
  return `
    <article class="card" data-category="${tool.category}">
      <span class="tool-badge ${badgeClass}">${CATEGORY_LABELS[tool.category]}</span>
      <div class="card-icon" aria-hidden="true">${tool.icon}</div>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a class="tool-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">
        View docs ↗
      </a>
    </article>`;
}

// --- Filter tools by category and search query using array methods ---
function filterTools(category, query) {
  return TOOLS.filter(tool => {
    const matchesCategory = category === 'all' || tool.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q
      || tool.name.toLowerCase().includes(q)
      || tool.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}

// --- Render filtered tool cards into the grid ---
function renderTools(category, query) {
  const grid = document.getElementById('tool-grid');
  if (!grid) return;

  const filtered = filterTools(category, query);

  // Conditional branching: show message if nothing matches
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-results">No tools match your search. Try a different filter or keyword.</p>`;
    return;
  }

  // Use array .map() + template literals to build all cards
  grid.innerHTML = filtered.map(buildToolCard).join('');
}

// --- Active filter state ---
let activeCategory = 'all';
let searchQuery    = '';

// --- Initialize tools page ---
function initTools() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) return;

  // Build filter buttons + search input using template literals
  const buttonHTML = Object.entries(CATEGORY_LABELS).map(([key, label]) =>
    `<button class="filter-btn${key === 'all' ? ' active' : ''}" data-category="${key}">${label}</button>`
  ).join('');

  const searchHTML = `
    <input
      type="search"
      id="search-input"
      class="search-input"
      placeholder="Search tools…"
      aria-label="Search tools"
    >`;

  filterBar.innerHTML = buttonHTML + searchHTML;

  const searchInput = document.getElementById('search-input');

  // Filter button click using event delegation
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    activeCategory = btn.dataset.category;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTools(activeCategory, searchQuery);
  });

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderTools(activeCategory, searchQuery);
    });
  }

  // Initial render — all tools
  renderTools('all', '');
}

document.addEventListener('DOMContentLoaded', initTools);
