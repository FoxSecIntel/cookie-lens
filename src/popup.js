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
    match: /^OptanonConsent$/i,
    purpose: 'Stores your cookie consent choices made via the OneTrust consent banner.',
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
  exportBtn: document.getElementById('exportBtn'),
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
let currentHost = '';
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

function getRiskBand(score) {
  if (score <= 2) return { grade: 'A', label: 'Low risk', colour: '#4caf82' };
  if (score <= 4) return { grade: 'B', label: 'Moderate', colour: '#7bc67e' };
  if (score <= 6) return { grade: 'C', label: 'Elevated', colour: '#e6a817' };
  if (score <= 8) return { grade: 'D', label: 'High risk', colour: '#e05252' };
  return { grade: 'F', label: 'Critical', colour: '#b71c1c' };
}

function scoreCookie(item, currentHost) {
  const cookie = item.raw;
  const baseByCategory = {
    'Strictly Necessary': 0,
    'Functional': 1,
    'Analytics': 3,
    'Tracking/Marketing': 5,
    'Unknown': 4
  };

  let score = baseByCategory[item.category] ?? 4;

  if (!cookie.secure) score += 2;
  if (!cookie.httpOnly) score += 1;
  if (cookie.sameSite === 'no_restriction') score += 2;
  if (cookie.sameSite === 'lax') score += 1;
  if (cookie.sameSite === 'no_restriction' && !cookie.secure) score += 1;

  const cookieDomainRaw = String(cookie.domain || '');
  const cookieDomain = cookieDomainRaw.replace(/^\./, '').toLowerCase();
  const host = String(currentHost || '').toLowerCase();
  const isFirstParty = !!host && !!cookieDomain && (host === cookieDomain || host.endsWith(`.${cookieDomain}`));
  if (!isFirstParty) score += 1;

  score = Math.min(score, 10);
  const band = getRiskBand(score);

  return {
    score,
    grade: band.grade,
    label: band.label,
    colour: band.colour
  };
}

function hexToRgba(hex, alpha) {
  const cleaned = String(hex || '').replace('#', '');
  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

  const avgScore = items.length
    ? Math.round(items.reduce((sum, c) => sum + (Number(c.score) || 0), 0) / items.length)
    : 0;
  const pageBand = getRiskBand(avgScore);

  els.healthBreakdown.innerHTML = `${functionalShare}% Functional • ${trackingShare}% Tracking • Page risk: <span style="color: ${pageBand.colour}">${pageBand.grade} (${avgScore}/10)</span>`;
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

    const riskBadge = document.createElement('div');
    riskBadge.className = 'risk-badge';
    riskBadge.style.borderColor = c.scoreColour;
    riskBadge.style.color = c.scoreColour;
    riskBadge.style.background = hexToRgba(c.scoreColour, 0.15);
    riskBadge.title = c.label;

    const riskGrade = document.createElement('div');
    riskGrade.className = 'risk-badge__grade';
    riskGrade.textContent = c.grade;

    const riskScore = document.createElement('div');
    riskScore.className = 'risk-badge__score';
    riskScore.textContent = `${c.score}/10`;

    riskBadge.appendChild(riskGrade);
    riskBadge.appendChild(riskScore);

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

    li.appendChild(riskBadge);
    li.appendChild(text);
    li.appendChild(copyBtn);
    els.cookieList.appendChild(li);
  }
}

function buildReportData() {
  const generated = new Date().toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' });
  const counts = {
    'Strictly Necessary': 0,
    'Functional': 0,
    'Analytics': 0,
    'Tracking/Marketing': 0,
    'Unknown': 0
  };

  for (const item of analysed) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }

  const pageRiskScore = Math.round(analysed.reduce((sum, c) => sum + c.score, 0) / (analysed.length || 1));
  const pageRiskBand = getRiskBand(pageRiskScore);
  const hostWithoutWww = String(currentHost || '').replace(/^www\./, '');

  const cookies = analysed
    .map((cookie) => ({
      name: cookie.name,
      grade: cookie.grade,
      score: cookie.score,
      scoreColour: cookie.scoreColour,
      category: cookie.category,
      purpose: cookie.purpose,
      confidence: cookie.confidence,
      duration: humanDuration(cookie.raw),
      secure: cookie.raw.secure,
      httpOnly: cookie.raw.httpOnly,
      sameSite: cookie.raw.sameSite,
      domain: cookie.raw.domain,
      path: cookie.raw.path,
      thirdParty: !String(cookie.raw.domain || '').includes(hostWithoutWww)
    }))
    .sort((a, b) => b.score - a.score);

  const trackingRatio = Math.round(((counts['Tracking/Marketing'] + counts['Unknown']) / (analysed.length || 1)) * 100);

  return {
    site: currentHost,
    generated,
    pageRiskScore,
    pageRiskGrade: pageRiskBand.grade,
    pageRiskLabel: pageRiskBand.label,
    pageRiskColour: pageRiskBand.colour,
    totalCookies: analysed.length,
    counts,
    trackingRatio,
    cookies
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateHtmlReport(data) {
  const verdicts = {
    A: 'This site uses cookies responsibly.',
    B: 'This site has a few cookies worth noting.',
    C: 'This site has elevated cookie risk — review tracking cookies.',
    D: 'This site has high cookie risk — several cookies are poorly configured.',
    F: 'This site has critical cookie risk — immediate review recommended.'
  };
  const verdict = verdicts[data.pageRiskGrade] || '';

  const categories = ['Strictly Necessary', 'Functional', 'Analytics', 'Tracking/Marketing', 'Unknown'];
  const countCards = categories.map((cat) => {
    const count = data.counts[cat] || 0;
    return `<div class="count-card"><div class="count-label">${escapeHtml(cat)}</div><div class="count-value">${count}</div></div>`;
  }).join('');

  const barSegments = categories.map((cat) => {
    const count = data.counts[cat] || 0;
    const width = data.totalCookies ? ((count / data.totalCookies) * 100) : 0;
    const colours = {
      'Strictly Necessary': '#4caf82',
      'Functional': '#4caf82',
      'Analytics': '#e6a817',
      'Tracking/Marketing': '#e05252',
      'Unknown': '#8888aa'
    };
    return `<div class="hseg" style="width:${width}%;background:${colours[cat]}"></div>`;
  }).join('');

  const cookieCards = data.cookies.map((c) => {
    const sameSiteDisplay = c.sameSite === 'no_restriction' ? 'None' : c.sameSite;
    const secureDot = c.secure ? '🟢' : '🔴';
    const httpOnlyDot = c.httpOnly ? '🟢' : '🟡';
    const sameSiteDot = c.sameSite === 'strict' ? '🟢' : (c.sameSite === 'lax' ? '🟡' : (c.sameSite === 'no_restriction' ? '🔴' : '🟡'));
    return `<article class="cookie-card" style="border-left:${c.score >= 7 ? `3px solid ${c.scoreColour}` : '3px solid transparent'}">
      <div class="cookie-top">
        <div class="risk" style="color:${c.scoreColour};border-color:${c.scoreColour};background:${hexToRgba(c.scoreColour, 0.15)}">
          <div class="risk-grade">${escapeHtml(c.grade)}</div>
          <div class="risk-score">${escapeHtml(c.score)}/10</div>
        </div>
        <div class="cookie-heading">
          <strong>${escapeHtml(c.name)}</strong>
          <span class="cat">${escapeHtml(c.category)}</span>
        </div>
      </div>
      <div class="purpose">${escapeHtml(c.purpose)}</div>
      <div class="attrs">
        <span>${secureDot} Secure: ${c.secure ? 'Yes' : 'No'}</span>
        <span>${httpOnlyDot} HttpOnly: ${c.httpOnly ? 'Yes' : 'No'}</span>
        <span>${sameSiteDot} SameSite: ${escapeHtml(String(sameSiteDisplay || 'Unknown'))}</span>
        <span>Domain: ${escapeHtml(String(c.domain || '(none)'))}</span>
        <span>Path: ${escapeHtml(String(c.path || '/'))}</span>
      </div>
      <div class="meta">Confidence: ${escapeHtml(c.confidence)} • Expiry: ${escapeHtml(c.duration)}</div>
    </article>`;
  }).join('');

  const warningLine = data.trackingRatio >= 25
    ? `<div class="warn">⚠ ${data.trackingRatio}% of cookies are Tracking or Unknown</div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cookie Lens Report</title>
  <style>
    body{background:#0f0f17;color:#e8e8f0;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
    .wrap{max-width:760px;margin:0 auto;padding:2rem}
    .muted{color:#9ca3af}
    .head{display:flex;justify-content:space-between;align-items:center;gap:1rem}
    h1{margin:0 0 .5rem 0;font-size:2rem}
    .grade{min-width:86px;height:86px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;font-weight:700;border:1px solid}
    .verdict{margin:.75rem 0 0 0}
    .summary{margin-top:1rem;padding:1rem;border:1px solid #2b2b3a;border-radius:12px;background:#141422}
    .counts{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.5rem}
    .count-card{background:#1a1a28;border:1px solid #2d2d3d;border-radius:10px;padding:.6rem}
    .count-label{font-size:.72rem;color:#a1a1b8}
    .count-value{font-size:1.1rem;font-weight:700}
    .warn{margin-top:.75rem;color:#e6a817}
    .health{margin-top:.75rem;display:flex;height:10px;border-radius:999px;overflow:hidden;background:#232337;border:1px solid #2e2e44}
    .cookies{margin-top:1rem;display:grid;gap:.6rem}
    .cookie-card{background:#151524;border:1px solid #2b2b3a;border-radius:10px;padding:.75rem}
    .cookie-top{display:flex;align-items:center;gap:.75rem}
    .risk{width:44px;height:44px;border-radius:8px;border:1px solid;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}
    .risk-grade{font-size:16px;font-weight:600;line-height:1}
    .risk-score{font-size:10px;margin-top:2px;opacity:.85}
    .cookie-heading{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}
    .cat{font-size:.75rem;padding:.1rem .45rem;border:1px solid #3a3a4f;border-radius:999px;color:#c6c6db}
    .purpose{margin-top:.45rem}
    .attrs{margin-top:.45rem;display:flex;flex-wrap:wrap;gap:.6rem;font-size:.85rem}
    .meta{margin-top:.45rem;color:#9ca3af;font-size:.82rem}
    .footer{margin-top:1rem;color:#a5a5bd;font-size:.9rem}
    .actions{margin-top:1rem;display:flex;gap:.5rem}
    button{background:#1f2937;color:#e8e8f0;border:1px solid #334155;border-radius:8px;padding:.45rem .75rem;cursor:pointer}
    a{color:#8ab4ff}
    @media print {.no-print{display:none!important}}
  </style>
</head>
<body>
  <div class="wrap">
    <header class="head">
      <div>
        <h1>🍪 Cookie Lens</h1>
        <div class="muted">${escapeHtml(data.site)}</div>
        <div class="muted">${escapeHtml(data.generated)}</div>
      </div>
      <div class="grade" style="color:${data.pageRiskColour};border-color:${data.pageRiskColour};background:${hexToRgba(data.pageRiskColour, 0.15)}">${escapeHtml(data.pageRiskGrade)}</div>
    </header>
    <p class="verdict">${escapeHtml(verdict)}</p>
    <section class="summary">
      <div class="counts">${countCards}</div>
      ${warningLine}
      <div class="health">${barSegments}</div>
    </section>
    <section class="cookies">${cookieCards}</section>
    <footer class="footer">
      <div>Generated by Cookie Lens Chrome Extension</div>
      <div><a href="https://github.com/FoxSecIntel/cookie-lens" target="_blank" rel="noreferrer">https://github.com/FoxSecIntel/cookie-lens</a></div>
      <div>This report is for informational purposes only.</div>
    </footer>
    <div class="actions no-print">
      <button onclick="window.print()">Print / Save as PDF</button>
      <button onclick="window.close()">Close</button>
    </div>
  </div>
</body>
</html>`;
}

function generateTextSummary(data) {
  const lines = [];
  lines.push(`Cookie Lens Report — ${data.site}`);
  lines.push(`Generated: ${data.generated}`);
  lines.push(`Page Risk: ${data.pageRiskGrade} (${data.pageRiskScore}/10) — ${data.pageRiskLabel}`);
  lines.push(`Cookies: ${data.totalCookies} total`);
  lines.push(`Necessary: ${data.counts['Strictly Necessary']} | Functional: ${data.counts['Functional']} | Analytics: ${data.counts['Analytics']} | Tracking: ${data.counts['Tracking/Marketing']} | Unknown: ${data.counts['Unknown']}`);
  lines.push(`Tracking + Unknown: ${data.trackingRatio}%`);
  lines.push('');
  lines.push('Highest risk cookies (score 5 and above):');

  const highRisk = data.cookies.filter((c) => c.score >= 5);
  if (highRisk.length === 0) {
    lines.push('No high-risk cookies detected.');
  } else {
    for (const c of highRisk) {
      const sameSiteValue = c.sameSite === 'no_restriction' ? 'None' : c.sameSite;
      lines.push(` [${c.grade} ${c.score}/10] ${c.name} — ${c.category} — Secure:${c.secure ? 'Yes' : 'No'}, HttpOnly:${c.httpOnly ? 'Yes' : 'No'}, SameSite:${sameSiteValue}`);
    }
  }

  lines.push('');
  lines.push('Generated by Cookie Lens — https://github.com/FoxSecIntel/cookie-lens');
  return lines.join('\n');
}

async function exportReport() {
  const data = buildReportData();
  const html = generateHtmlReport(data);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const filename = `cookie-lens-${data.site.replace(/[^a-z0-9]/gi, '-')}-${Date.now()}.html`;
  chrome.downloads.download({
    url: url,
    filename: filename,
    saveAs: false
  });

  const text = generateTextSummary(data);
  await navigator.clipboard.writeText(text);

  const btn = els.exportBtn;
  const original = btn.textContent;
  btn.textContent = '✓';
  btn.title = 'Report opened — summary copied to clipboard';
  setTimeout(() => {
    btn.textContent = original;
    btn.title = 'Export report';
  }, 1500);
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
    currentHost = '';
    currentTabHost = '';
    els.siteHost.textContent = 'No active tab URL detected';
    analysed = [];
    computeHealth([]);
    applyFilters();
    return;
  }

  currentHost = safeHostFromUrl(tab.url);
  currentTabHost = currentHost;
  els.siteHost.textContent = `Analysing: ${currentTabHost}`;

  const cookies = await chrome.cookies.getAll({ url: tab.url });

  analysed = cookies.map((cookie) => {
    const classif = classifyCookie(cookie.name);
    const scoring = scoreCookie({ category: classif.category, raw: cookie }, currentHost);
    return {
      name: cookie.name,
      purpose: classif.purpose,
      category: classif.category,
      confidence: classif.confidence,
      score: scoring.score,
      grade: scoring.grade,
      label: scoring.label,
      scoreColour: scoring.colour,
      raw: cookie
    };
  });

  computeHealth(analysed);
  applyFilters();
}

els.exportBtn.addEventListener('click', exportReport);
els.refreshBtn.addEventListener('click', analyseCurrentTab);
els.searchInput.addEventListener('input', applyFilters);
els.categoryFilter.addEventListener('change', applyFilters);

analyseCurrentTab();
