const COOKIE_DICTIONARY = [
  {
    match: /^_ga/i,
    purpose: 'Anonymously tracks visits and pages to measure site performance.',
    category: 'Analytics'
  },
  {
    match: /^_gid/i,
    purpose: 'Tracks short session behaviour for analytics reporting.',
    category: 'Analytics'
  },
  {
    match: /^_fbp/i,
    purpose: 'Follows your browsing for advert attribution and audience targeting.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^__cfduid$/i,
    purpose: 'Helps protect the site with traffic filtering and bot defence.',
    category: 'Strictly Necessary'
  },
  {
    match: /^li_at$/i,
    purpose: 'Remembers your LinkedIn login session.',
    category: 'Functional'
  },
  {
    match: /^NID$/i,
    purpose: 'Stores Google preferences and may support advert personalisation.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^PHPSESSID$/i,
    purpose: 'Maintains your active session while you browse.',
    category: 'Strictly Necessary'
  },
  {
    match: /^JSESSIONID$/i,
    purpose: 'Keeps your server session active between page loads.',
    category: 'Strictly Necessary'
  },
  {
    match: /^_hj/i,
    purpose: 'Records interaction behaviour for usability analytics.',
    category: 'Analytics'
  },
  {
    match: /^_tt_enable_cookie$/i,
    purpose: 'Supports TikTok advert tracking and conversion measurement.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^_ttp$/i,
    purpose: 'Tracks advert interactions across sessions for targeting.',
    category: 'Tracking/Marketing'
  }
];

const FALLBACK_RULES = [
  { match: /(sess|session|csrf|xsrf|auth|login)/i, category: 'Strictly Necessary', purpose: 'Supports secure session handling and account access.' },
  { match: /(lang|locale|prefs|theme|consent)/i, category: 'Functional', purpose: 'Stores your site preferences and experience settings.' },
  { match: /(ga|analytics|matomo|amplitude|mixpanel)/i, category: 'Analytics', purpose: 'Measures page usage and feature performance.' },
  { match: /(ad|ads|track|pixel|fb|tt|marketing|campaign)/i, category: 'Tracking/Marketing', purpose: 'Tracks behaviour for advert measurement and targeting.' }
];

const CATEGORY_ORDER = ['Strictly Necessary', 'Functional', 'Analytics', 'Tracking/Marketing'];

const els = {
  siteHost: document.getElementById('siteHost'),
  refreshBtn: document.getElementById('refreshBtn'),
  healthBreakdown: document.getElementById('healthBreakdown'),
  barFunctional: document.getElementById('barFunctional'),
  barAnalytics: document.getElementById('barAnalytics'),
  barTracking: document.getElementById('barTracking'),
  countsRow: document.getElementById('countsRow'),
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  resultCount: document.getElementById('resultCount'),
  cookieList: document.getElementById('cookieList'),
  emptyState: document.getElementById('emptyState')
};

let analysed = [];

function safeHostFromUrl(url) {
  try {
    return new URL(url).host;
  } catch {
    return url || 'Unknown host';
  }
}

function classifyCookie(name) {
  for (const entry of COOKIE_DICTIONARY) {
    if (entry.match.test(name)) {
      return { purpose: entry.purpose, category: entry.category, confidence: 'High (Dictionary match)' };
    }
  }

  for (const rule of FALLBACK_RULES) {
    if (rule.match.test(name)) {
      return { purpose: rule.purpose, category: rule.category, confidence: 'Medium (Heuristic match)' };
    }
  }

  return {
    purpose: 'General storage cookie; purpose not clearly identified from local dictionary.',
    category: 'Functional',
    confidence: 'Low (Unknown cookie)'
  };
}

function humanDuration(cookie) {
  if (cookie.session) return 'Ends when you close the tab';
  if (!cookie.expirationDate) return 'No expiry information';

  const secondsLeft = Math.round(cookie.expirationDate - Date.now() / 1000);
  if (secondsLeft <= 0) return 'Already expired';

  const mins = Math.floor(secondsLeft / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years >= 1) return `Ends in ${years} year${years === 1 ? '' : 's'}`;
  if (days >= 1) return `Ends in ${days} day${days === 1 ? '' : 's'}`;
  if (hours >= 1) return `Ends in ${hours} hour${hours === 1 ? '' : 's'}`;
  return `Ends in ${mins} minute${mins === 1 ? '' : 's'}`;
}

function computeHealth(items) {
  const counts = {
    'Strictly Necessary': 0,
    'Functional': 0,
    'Analytics': 0,
    'Tracking/Marketing': 0
  };

  items.forEach((c) => {
    counts[c.category] = (counts[c.category] || 0) + 1;
  });

  const total = items.length || 1;
  const functionalShare = Math.round(((counts['Strictly Necessary'] + counts['Functional']) / total) * 100);
  const analyticsShare = Math.round((counts['Analytics'] / total) * 100);
  const trackingShare = Math.round((counts['Tracking/Marketing'] / total) * 100);

  els.healthBreakdown.textContent = `${functionalShare}% Functional • ${trackingShare}% Tracking`;
  els.barFunctional.style.width = `${functionalShare}%`;
  els.barAnalytics.style.width = `${analyticsShare}%`;
  els.barTracking.style.width = `${trackingShare}%`;

  els.countsRow.textContent = `Necessary ${counts['Strictly Necessary']} • Functional ${counts['Functional']} • Analytics ${counts['Analytics']} • Tracking ${counts['Tracking/Marketing']}`;
}

function copyCookieName(name, btn) {
  navigator.clipboard.writeText(name).then(() => {
    const original = btn.textContent;
    btn.textContent = '✓';
    btn.title = 'Copied!';
    setTimeout(() => {
      btn.textContent = original;
      btn.title = 'Copy Name';
    }, 650);
  }).catch(() => {
    btn.title = 'Copy failed';
  });
}

function renderList(items) {
  els.cookieList.innerHTML = '';

  if (items.length === 0) {
    els.emptyState.classList.remove('hidden');
    els.resultCount.textContent = '0 shown';
    return;
  }

  els.emptyState.classList.add('hidden');
  els.resultCount.textContent = `${items.length} shown`;

  for (const c of items) {
    const li = document.createElement('li');
    li.className = 'cookie-row';

    const text = document.createElement('div');
    text.className = 'cookie-text';

    const primary = document.createElement('div');
    primary.className = 'primary';
    primary.textContent = c.purpose;

    const secondary = document.createElement('div');
    secondary.className = 'secondary';
    secondary.textContent = c.name;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${humanDuration(c.raw)} • Confidence: ${c.confidence}`;

    const tag = document.createElement('span');
    tag.className = `tag ${c.category}`;
    tag.textContent = c.category;

    text.appendChild(primary);
    text.appendChild(secondary);
    text.appendChild(meta);
    text.appendChild(tag);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-icon';
    copyBtn.textContent = '⧉';
    copyBtn.title = 'Copy Name';
    copyBtn.addEventListener('click', () => copyCookieName(c.name, copyBtn));

    li.appendChild(text);
    li.appendChild(copyBtn);
    els.cookieList.appendChild(li);
  }
}

function applyFilters() {
  const query = (els.searchInput.value || '').toLowerCase().trim();
  const selectedCategory = els.categoryFilter.value;

  let filtered = analysed;

  if (selectedCategory !== 'all') {
    filtered = filtered.filter((c) => c.category === selectedCategory);
  }

  if (query) {
    filtered = filtered.filter((c) =>
      c.name.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query) ||
      c.purpose.toLowerCase().includes(query)
    );
  }

  filtered.sort((a, b) => {
    const aIdx = CATEGORY_ORDER.indexOf(a.category);
    const bIdx = CATEGORY_ORDER.indexOf(b.category);
    if (aIdx !== bIdx) return aIdx - bIdx;
    return a.name.localeCompare(b.name);
  });

  renderList(filtered);
}

async function analyseCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) {
    els.siteHost.textContent = 'No active tab URL detected';
    analysed = [];
    computeHealth([]);
    applyFilters();
    return;
  }

  els.siteHost.textContent = `Analysing: ${safeHostFromUrl(tab.url)}`;

  const cookies = await chrome.cookies.getAll({ url: tab.url });

  analysed = cookies.map((cookie) => {
    const classif = classifyCookie(cookie.name);
    return {
      name: cookie.name,
      purpose: classif.purpose,
      category: classif.category,
      confidence: classif.confidence,
      raw: cookie
    };
  });

  computeHealth(analysed);
  applyFilters();
}

els.refreshBtn.addEventListener('click', analyseCurrentTab);
els.searchInput.addEventListener('input', applyFilters);
els.categoryFilter.addEventListener('change', applyFilters);

analyseCurrentTab();
