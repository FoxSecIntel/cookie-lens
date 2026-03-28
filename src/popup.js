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
    match: /^_gcl_au$/i,
    purpose: 'Google Ads conversion measurement.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^__utma$/i,
    purpose: 'Legacy Google Analytics campaign and session tracking.',
    category: 'Analytics'
  },
  {
    match: /^__utmb$/i,
    purpose: 'Legacy Google Analytics campaign and session tracking.',
    category: 'Analytics'
  },
  {
    match: /^__utmc$/i,
    purpose: 'Legacy Google Analytics campaign and session tracking.',
    category: 'Analytics'
  },
  {
    match: /^__utmz$/i,
    purpose: 'Legacy Google Analytics campaign and session tracking.',
    category: 'Analytics'
  },
  {
    match: /^_fbc$/i,
    purpose: 'Stores Facebook click ID for ad attribution.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^datr$/i,
    purpose: 'Facebook browser identification cookie.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^_uetsid$/i,
    purpose: 'Microsoft UET, tracks conversions and visitors from Bing Ads.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^_uetvid$/i,
    purpose: 'Microsoft UET, tracks conversions and visitors from Bing Ads.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^MUID$/i,
    purpose: 'Microsoft user identifier shared across Microsoft properties.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^CookieConsent$/i,
    purpose: 'Stores the user\'s cookie consent preferences.',
    category: 'Strictly Necessary'
  },
  {
    match: /^cookielawinfo-/i,
    purpose: 'Records GDPR cookie consent choices.',
    category: 'Strictly Necessary'
  },
  {
    match: /^__cf_bm$/i,
    purpose: 'Cloudflare bot management, short-lived token.',
    category: 'Strictly Necessary'
  },
  {
    match: /^cf_clearance$/i,
    purpose: 'Cloudflare challenge clearance token.',
    category: 'Strictly Necessary'
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
    match: /^bcookie$/i,
    purpose: 'LinkedIn browser and secure browser cookies for ad tracking.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^bscookie$/i,
    purpose: 'LinkedIn browser and secure browser cookies for ad tracking.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^lidc$/i,
    purpose: 'LinkedIn data centre routing.',
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
    match: /^_hjSessionUser_/i,
    purpose: 'Hotjar user sampling and session identification.',
    category: 'Analytics'
  },
  {
    match: /^_hjIncludedInSample$/i,
    purpose: 'Hotjar user sampling and session identification.',
    category: 'Analytics'
  },
  {
    match: /^_hj/i,
    purpose: 'Records interaction behaviour for usability analytics.',
    category: 'Analytics'
  },
  {
    match: /^__stripe_mid$/i,
    purpose: 'Stripe fraud prevention identifiers.',
    category: 'Strictly Necessary'
  },
  {
    match: /^__stripe_sid$/i,
    purpose: 'Stripe fraud prevention identifiers.',
    category: 'Strictly Necessary'
  },
  {
    match: /^__hssc$/i,
    purpose: 'HubSpot analytics and tracking cookies, extremely common on B2B sites.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^__hstc$/i,
    purpose: 'HubSpot analytics and tracking cookies, extremely common on B2B sites.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^hubspotutk$/i,
    purpose: 'HubSpot analytics and tracking cookies, extremely common on B2B sites.',
    category: 'Tracking/Marketing'
  },
  {
    match: /^intercom-/i,
    purpose: 'Intercom support widget session and user identification.',
    category: 'Functional'
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
  { match: /(retarget|remarketing|cid|click_id|gclid|msclkid)/i, category: 'Tracking/Marketing', purpose: 'Tracks ad click attribution and retargeting identifiers.' },
  { match: /(hubspot|hssc|hstc|hubspotutk)/i, category: 'Tracking/Marketing', purpose: 'HubSpot marketing and analytics tracking.' },
  { match: /(intercom)/i, category: 'Functional', purpose: 'Intercom customer support widget.' },
  { match: /(utm)/i, category: 'Tracking/Marketing', purpose: 'Campaign tracking parameters embedded in cookie names.' },
  { match: /(stripe|payment|checkout)/i, category: 'Strictly Necessary', purpose: 'Payment processing and fraud prevention.' },
  { match: /(ad|ads|track|pixel|fb|tt|marketing|campaign)/i, category: 'Tracking/Marketing', purpose: 'Tracks behaviour for advert measurement and targeting.' }
];

const CATEGORY_ORDER = ['Strictly Necessary', 'Functional', 'Analytics', 'Tracking/Marketing', 'Unknown'];

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
let currentTabHost = '';

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
    category: 'Unknown',
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
    'Tracking/Marketing': 0,
    'Unknown': 0
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

  els.countsRow.textContent = `Necessary ${counts['Strictly Necessary']} • Functional ${counts['Functional']} • Analytics ${counts['Analytics']} • Tracking ${counts['Tracking/Marketing']} • Unknown ${counts['Unknown']}`;
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

function interpretSecurityAttributes(cookie) {
  const attrs = [];

  attrs.push(
    cookie.secure
      ? {
          label: 'Secure',
          value: 'Yes',
          verdict: 'good',
          tooltip: 'Only transmitted over HTTPS — protects against network interception.'
        }
      : {
          label: 'Secure',
          value: 'No',
          verdict: 'risk',
          tooltip: 'Sent over HTTP — visible to anyone on the same network.'
        }
  );

  attrs.push(
    cookie.httpOnly
      ? {
          label: 'HttpOnly',
          value: 'Yes',
          verdict: 'good',
          tooltip: 'Inaccessible to JavaScript — reduces XSS attack risk.'
        }
      : {
          label: 'HttpOnly',
          value: 'No',
          verdict: 'warn',
          tooltip: 'Readable by JavaScript — vulnerable if XSS is present on this page.'
        }
  );

  if (cookie.sameSite === 'strict') {
    attrs.push({
      label: 'SameSite',
      value: 'Strict',
      verdict: 'good',
      tooltip: 'Never sent cross-site — strong CSRF protection.'
    });
  } else if (cookie.sameSite === 'lax') {
    attrs.push({
      label: 'SameSite',
      value: 'Lax',
      verdict: 'warn',
      tooltip: 'Sent on top-level navigation — moderate CSRF protection.'
    });
  } else if (cookie.sameSite === 'no_restriction') {
    attrs.push({
      label: 'SameSite',
      value: 'None',
      verdict: 'risk',
      tooltip: 'Sent on all cross-site requests — CSRF risk. Requires Secure flag to be valid.'
    });

    if (!cookie.secure) {
      attrs.push({
        label: 'Misconfigured',
        value: 'SameSite=None without Secure',
        verdict: 'risk',
        tooltip: 'SameSite=None is invalid without the Secure flag. Browsers may reject this cookie.'
      });
    }
  } else {
    attrs.push({
      label: 'SameSite',
      value: String(cookie.sameSite || 'Unknown'),
      verdict: 'neutral',
      tooltip: 'SameSite policy not recognised for this cookie.'
    });
  }

  const cookieDomainRaw = String(cookie.domain || '');
  const cookieDomain = cookieDomainRaw.replace(/^\./, '').toLowerCase();
  const host = String(currentTabHost || '').toLowerCase();
  const isFirstParty = !!host && !!cookieDomain && (host === cookieDomain || host.endsWith(`.${cookieDomain}`));

  attrs.push(
    isFirstParty
      ? {
          label: 'Domain',
          value: cookieDomainRaw || '(none)',
          verdict: 'neutral',
          tooltip: 'First-party cookie set by this site.'
        }
      : {
          label: 'Domain',
          value: cookieDomainRaw || '(none)',
          verdict: 'warn',
          tooltip: 'Third-party cookie — set by a different domain than the one you are visiting.'
        }
  );

  attrs.push({
    label: 'Path',
    value: String(cookie.path || '/'),
    verdict: 'neutral',
    tooltip: 'Cookie is scoped to this path and below.'
  });

  return attrs;
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

    const securityPills = document.createElement('div');
    securityPills.className = 'security-pills';
    const attributes = interpretSecurityAttributes(c.raw);
    for (const attr of attributes) {
      const pill = document.createElement('span');
      pill.className = `pill pill--${attr.verdict}`;
      const label = attr.verdict === 'risk' ? `⚠ ${attr.label}` : attr.label;
      pill.textContent = `${label}: ${attr.value}`;
      pill.title = attr.tooltip;
      securityPills.appendChild(pill);
    }

    const tag = document.createElement('span');
    tag.className = `tag ${c.category}`;
    tag.textContent = c.category;

    text.appendChild(primary);
    text.appendChild(secondary);
    text.appendChild(meta);
    text.appendChild(securityPills);
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
    currentTabHost = '';
    els.siteHost.textContent = 'No active tab URL detected';
    analysed = [];
    computeHealth([]);
    applyFilters();
    return;
  }

  currentTabHost = safeHostFromUrl(tab.url);
  els.siteHost.textContent = `Analysing: ${currentTabHost}`;

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
