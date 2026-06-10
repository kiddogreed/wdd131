// ============================================================
// John D's Web Gatherer — site.js
// Shared: nav toggle, footer year, learning progress tracker
// ============================================================

// --- Learning topics data (objects in an array) ---
const TOPICS = [
  { id: 'what-is-scraping', label: 'What is web scraping?' },
  { id: 'http-requests',    label: 'How HTTP requests work' },
  { id: 'html-structure',   label: 'Parsing HTML structure' },
  { id: 'beautifulsoup',    label: 'Using BeautifulSoup' },
  { id: 'requests-lib',     label: 'Python requests library' },
  { id: 'data-storage',     label: 'Storing data (CSV / JSON)' },
  { id: 'ethics',           label: 'Ethics & robots.txt' },
  { id: 'rate-limiting',    label: 'Rate limiting & politeness' },
];
// Each topic has a unique 'id' (used for tracking) and a human-friendly 'label'
// --- Load completed topic IDs from localStorage ---
function loadProgress() {
  try {
    const raw = localStorage.getItem('wg-progress');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// --- Persist completed topic IDs to localStorage ---
function saveProgress(completed) {
  localStorage.setItem('wg-progress', JSON.stringify(completed));
}

// --- Calculate completion percentage ---
function calcPercent(completed) {
  return Math.round((completed.length / TOPICS.length) * 100);
}

// --- Build the full progress tracker HTML using template literals ---
function renderProgressTracker(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const completed = loadProgress();
  const percent   = calcPercent(completed);

  // Use array method .map() to build each topic list item
  const topicItems = TOPICS.map(topic => {
    const isDone = completed.includes(topic.id);
    return `
      <li
        class="topic-item${isDone ? ' done' : ''}"
        data-id="${topic.id}"
        role="button"
        tabindex="0"
        aria-pressed="${isDone}"
        title="Click to mark as ${isDone ? 'incomplete' : 'complete'}"
      >
        <span class="topic-check" aria-hidden="true">${isDone ? '✅' : '⬜'}</span>
        <span class="topic-label">${topic.label}</span>
      </li>`;
  }).join('');

  container.innerHTML = `
    <div class="progress-tracker">
      <h3>📚 My Learning Progress</h3>
      <div
        class="progress-bar-container"
        role="progressbar"
        aria-valuenow="${percent}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Learning progress: ${percent}%"
      >
        <div class="progress-bar" style="width: ${percent}%"></div>
      </div>
      <p style="font-size:0.85rem; margin-bottom:1rem; opacity:0.75">
        ${percent}% complete &nbsp;·&nbsp; ${completed.length} of ${TOPICS.length} topics
      </p>
      <ul class="topic-list">${topicItems}</ul>
      <div style="margin-top:0.75rem">
        <button class="btn btn-outline" id="reset-progress" style="font-size:0.8rem; padding:0.3rem 0.9rem">
          Reset Progress
        </button>
      </div>
    </div>`;

  // Attach click/keyboard events to each topic item
  container.querySelectorAll('.topic-item').forEach(item => {
    const toggle = () => toggleTopic(item.dataset.id, containerId);
    item.addEventListener('click', toggle);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  // Reset button
  const resetBtn = document.getElementById('reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm('Reset all learning progress?')) {
        saveProgress([]);
        renderProgressTracker(containerId);
      }
    });
  }
}

// --- Toggle a single topic's done state ---
function toggleTopic(topicId, containerId) {
  const completed = loadProgress();
  const idx = completed.indexOf(topicId);

  // Conditional branching: add if missing, remove if present
  if (idx === -1) {
    completed.push(topicId);
  } else {
    completed.splice(idx, 1);
  }

  saveProgress(completed);
  renderProgressTracker(containerId);
}

// --- Hamburger nav toggle ---
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // Mark active link based on current filename
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// --- Inject current year into footer ---
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// --- Inject last modified date into footer ---
function initLastModified() {
  const el = document.getElementById('lastModified');
  if (!el) return;
  const date = new Date(document.lastModified);
  el.textContent = `Last Modified: ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
}

// --- Boot on DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initYear();
  initLastModified();
  renderProgressTracker('progress-container');
});
