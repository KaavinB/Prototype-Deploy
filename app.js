/* ============================================================
   Faculty Search CoPilot — Prototype application
   All data is simulated. No backend, APIs, auth, or AI calls.
   ============================================================ */

/* ---------- Icon library (inline SVG, currentColor) ---------- */
const I = {
  logo: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="m2 16 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  macro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="7"/><rect x="12" y="7" width="3" height="11"/><rect x="17" y="13" width="3" height="5"/></svg>',
  meso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="18" cy="18" r="2"/><path d="m7 7 3 3m7-1-3 2m1 4-3-2"/></svg>',
  micro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="8" r="4"/><path d="M3 21a8 8 0 0 1 13-6"/><circle cx="18" cy="17" r="3"/><path d="m22 21-1.5-1.5"/></svg>',
  jd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  arrowUR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  chevDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.5V19l4 2v-8.5z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
  db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.5 1.5A4 4 0 0 0 6 19z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-2-2z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.9 6.4-6.4 2.9 2.9-6.4z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  user1: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.3-9.3M17 6l3 3M14 9l2 2"/></svg>',
  fingerprint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.5.5 3-.5 5"/><path d="M8 8a6 6 0 0 1 9 5c0 2-.3 4-1 5.5"/><path d="M5 11a8 8 0 0 1 13-6"/><path d="M12 12c0 3-.5 6-2 8"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg>',
  checkBig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
};
const ico = (n) => I[n] || '';

/* ---------- Navigation model ---------- */
const NAV = [
  { id: 'home', label: 'Home', icon: 'home', group: 'Workspace' },
  { id: 'search', label: 'Search', icon: 'search', group: 'Workspace' },
  { id: 'lenses', label: 'Three Lenses', icon: 'layers', group: 'Workspace' },
  { id: 'macro', label: 'Programs', icon: 'macro', group: 'Lenses' },
  { id: 'meso', label: 'Clusters', icon: 'meso', group: 'Lenses' },
  { id: 'micro', label: 'People', icon: 'micro', group: 'Lenses' },
];

/* ---------- Tooltip definitions ---------- */
const TIPS = {
  macro: ['Programs', 'Program-level pipeline view.'],
  meso: ['Clusters', 'Shows where research on a topic is concentrated.'],
  micro: ['People', 'Shows individual dissertation or candidate matches.'],
  cip: ['CIP', 'A classification code used to group academic programs.'],
  insttype: ['Institution Type', 'A category such as R1, AAU, public, private, or other institutional grouping.'],
  lq: ['Location Quotient', 'A simple signal showing whether an institution produces more research on this topic than expected.'],
  match: ['Match Strength', 'How closely a dissertation or candidate profile matches the query.'],
  verify: ['Verification Signal', 'Evidence used to estimate whether a candidate is still available.'],
};
const tip = (key) => {
  const t = TIPS[key]; if (!t) return '';
  return `<span class="tip"><span class="tip-trigger">i</span><span class="tip-body"><strong>${t[0]}</strong>${t[1]}</span></span>`;
};

/* ---------- Mock data ---------- */
const MACRO_ROWS = [
  { inst: 'Stanford University', prog: 'Bioengineering', count: 64, type: 'AAU / R1', tier: 'Top 10' },
  { inst: 'University of Michigan', prog: 'Biomedical Engineering', count: 58, type: 'AAU / R1', tier: 'Top 10' },
  { inst: 'UC San Diego', prog: 'Bioengineering', count: 52, type: 'AAU / R1', tier: 'Top 20' },
  { inst: 'Georgia Tech', prog: 'Bioengineering', count: 49, type: 'R1', tier: 'Top 20' },
  { inst: 'Johns Hopkins University', prog: 'Biomedical Engineering', count: 47, type: 'AAU / R1', tier: 'Top 10' },
  { inst: 'MIT', prog: 'Biological Engineering', count: 44, type: 'AAU / R1', tier: 'Top 10' },
  { inst: 'University of Washington', prog: 'Bioengineering', count: 41, type: 'AAU / R1', tier: 'Top 20' },
  { inst: 'Duke University', prog: 'Biomedical Engineering', count: 38, type: 'AAU / R1', tier: 'Top 20' },
];

const MESO_ROWS = [
  { inst: 'University of Chicago', field: 'Political Science', topic: 'Civil Conflict', share: 18, lq: 2.7, cluster: 'Signature Cluster' },
  { inst: 'Princeton University', field: 'Political Science', topic: 'Comparative Politics', share: 15, lq: 2.3, cluster: 'Strong Cluster' },
  { inst: 'University of Michigan', field: 'Political Science', topic: 'Civil War Studies', share: 12, lq: 1.9, cluster: 'Strong Cluster' },
  { inst: 'Duke University', field: 'Political Science', topic: 'Conflict Studies', share: 9, lq: 1.5, cluster: 'Notable Cluster' },
  { inst: 'Columbia University', field: 'Political Science', topic: 'Political Violence', share: 8, lq: 1.4, cluster: 'Notable Cluster' },
  { inst: 'Stanford University', field: 'Political Science', topic: 'Conflict & Security', share: 7, lq: 1.3, cluster: 'Notable Cluster' },
];

const MICRO_CANDS = [
  { name: 'Maya Chen', inst: 'University of Michigan', diss: 'External Intervention and Civil Conflict Duration', topics: ['Civil War', 'International Relations', 'Conflict Studies'], year: 2024, match: 94,
    why: [['Dissertation topic overlap', 96], ['Specialization keywords', 93], ['Methodological fit', 88], ['Recency of work', 90]] },
  { name: 'Daniel Okafor', inst: 'Princeton University', diss: 'Rebel Governance and International Recognition', topics: ['Comparative Politics', 'Civil Conflict', 'State Formation'], year: 2023, match: 89,
    why: [['Dissertation topic overlap', 91], ['Specialization keywords', 88], ['Methodological fit', 85], ['Recency of work', 84]] },
  { name: 'Sofia Ramirez', inst: 'Duke University', diss: 'Post-Conflict Institutions and Peacebuilding', topics: ['Peacebuilding', 'Civil War', 'Political Institutions'], year: 2024, match: 86,
    why: [['Dissertation topic overlap', 88], ['Specialization keywords', 84], ['Methodological fit', 82], ['Recency of work', 90]] },
];

const VERIFY_CANDS = [
  { name: 'Aisha Rahman', inst: 'Columbia University', area: 'Civil War, Political Violence', dept: 'Listed as job-market candidate', site: 'No placement signal found', status: 'available', statusLabel: 'Available', deptKind: 'ok', siteKind: 'ok' },
  { name: 'Thomas Berger', inst: 'Harvard University', area: 'Comparative Politics, Conflict', dept: 'Listed as job-market candidate', site: 'Personal site indicates incoming Assistant Professor appointment', status: 'placed', statusLabel: 'Placed / Excluded', deptKind: 'ok', siteKind: 'bad' },
  { name: 'Lena Park', inst: 'UC Berkeley', area: 'Rebel Governance, Civil Conflict', dept: 'Listed as candidate', site: 'Current CV updated this cycle', status: 'possible', statusLabel: 'Possibly Available', deptKind: 'ok', siteKind: 'warn' },
];

const RECENT_QUERIES = [
  { q: 'PhDs in bioengineering at AAU institutions', lens: 'macro', screen: 'macro' },
  { q: 'Which institutions produce significant research on civil wars?', lens: 'meso', screen: 'meso' },
  { q: 'PhDs focusing on international relations and civil war', lens: 'micro', screen: 'micro' },
  { q: 'Which candidates on civil wars are on the job market now?', lens: 'micro', screen: 'verify' },
  { q: 'Top 10 ranked programs in bioengineering', lens: 'macro', screen: 'macro' },
  { q: 'Find candidates working on energy systems', lens: 'micro', screen: 'micro' },
];

/* ---------- Query routing (simulated intent detection) ---------- */
function detectLens(q) {
  const s = (q || '').toLowerCase();
  if (/(job market|right now|available|on the market|this cycle|placed|hiring now|currently)/.test(s)) return { lens: 'micro', screen: 'verify' };
  if (/(candidate|dissertation|phd.*(focus|work)|individuals?|specializ|find candidates|profiles?)/.test(s)) return { lens: 'micro', screen: 'micro' };
  if (/(where|concentrat|cluster|research on|significant (research|work)|activity|produce.*research)/.test(s)) return { lens: 'meso', screen: 'meso' };
  if (/(analyze|job description|\bjd\b)/.test(s)) return { lens: 'jd', screen: 'jd' };
  return { lens: 'macro', screen: 'macro' };
}

/* ---------- App state ---------- */
const State = {
  current: 'landing',
  lastQuery: 'PhDs in bioengineering at AAU institutions',
  searchMode: 'ask',
  jdAnalyzed: false,
  authed: false,
};

/* ---------- Toast ---------- */
function toast(msg, icon = 'checkc', variant = 'success') {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; wrap.setAttribute('role', 'status'); wrap.setAttribute('aria-live', 'polite'); document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast ' + variant;
  t.innerHTML = `<span class="t-ic">${ico(icon)}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 3200);
}

/* Count-up microinteraction for KPI values — parses existing formatted text,
   respects reduced-motion, and preserves prefix/suffix/commas/decimals. */
function animateCounters(root) {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.querySelectorAll('.kpi-val').forEach(el => {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\D*?)([\d,]*\.?\d+)(\D*)$/);
    if (!m) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    const target = parseFloat(numStr.replace(/,/g, ''));
    if (!isFinite(target)) return;
    const decimals = (numStr.split('.')[1] || '').length;
    const grouped = numStr.includes(',');
    const fmt = (v) => {
      let s = v.toFixed(decimals);
      if (grouped) s = Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      return prefix + s + suffix;
    };
    const dur = 850, t0 = performance.now();
    el.textContent = fmt(0);
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = raw;
    };
    requestAnimationFrame(tick);
  });
}

/* ---------- Shell render ---------- */
function shell(content, activeNav) {
  return `
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark"><img src="rice-owl.jpg" class="brand-owl" alt="Rice owl" /></div>
        <div class="brand-text"><strong>Faculty Search</strong><span>CoPilot &nbsp;·&nbsp; Prototype</span></div>
      </div>
      <nav class="nav" role="navigation" aria-label="Primary">
        ${NAV.map((n, i) => `
          ${(i === 0 || NAV[i - 1].group !== n.group) ? `<div class="nav-label">${n.group}</div>` : ''}
          <button class="nav-item ${activeNav === n.id ? 'active' : ''}" onclick="App.go('${n.id}')" ${activeNav === n.id ? 'aria-current="page"' : ''}>
            ${ico(n.icon)}<span>${n.label}</span>
            ${n.badge ? `<span class="nav-badge badge-${n.badge}">${n.badge === 'live' ? 'Live' : 'Dev'}</span>` : ''}
          </button>`).join('')}
      </nav>
      <div class="sidebar-foot">
        <div class="proto-pill"><span class="dot"></span><span>Demo environment · simulated data only</span></div>
      </div>
    </aside>
    <div class="main">
      <header class="topbar">
        ${State.current === 'search' ? '' : `
        <div class="topbar-search">
          <span class="s-icon">${ico('search')}</span>
          <input id="topSearch" placeholder="Ask a faculty search question…"
            onkeydown="if(event.key==='Enter'){App.runQuery(this.value)}" />
          <span class="s-kbd">↵</span>
        </div>`}
        <div class="topbar-spacer"></div>
        <div class="topbar-actions">
          <button class="icon-btn" title="Notifications" aria-label="Notifications" onclick="App.toast('No new notifications in demo mode','bell','info')"><span class="ping"></span>${ico('bell')}</button>
          <button class="icon-btn" title="Three Lenses help" aria-label="Open Three Lenses help" onclick="App.go('lenses')">${ico('help')}</button>
          <button class="icon-btn" title="Sign out (simulated)" aria-label="Sign out" onclick="App.signOut()">${ico('logout')}</button>
          <button class="user-chip" title="Signed in via simulated SSO — click to sign out" aria-label="Demo User, Search Committee — sign out" onclick="App.signOut()">
            <div class="user-avatar">DU</div>
            <div class="user-meta"><strong>Demo User</strong><span>Search Committee</span></div>
          </button>
        </div>
      </header>
      <div class="canvas page-enter">${content}</div>
    </div>
  </div>`;
}

/* ============================================================
   Simulated SSO sign-in (clearly mock — no real authentication)
   ============================================================ */
function viewSSO() {
  return `
  <div class="idp-page">
    <div class="sso-ribbon">${ico('alert')} Simulated sign-in · Prototype only — no real authentication</div>

    <div class="idp-container">
      <div class="idp-header">
        <div class="idp-logo"><img src="rice-logo.jpg" class="idp-logo-img" alt="Rice University" /></div>
        <span class="idp-provider">Rice Identity Provider</span>
      </div>
      <div class="idp-bar"></div>

      <div class="idp-body">
        <div class="idp-left">
          <h2>Login to ESTHER</h2>
          <label class="idp-label" for="ssoUser">NetID</label>
          <input id="ssoUser" class="idp-input" type="text" autocomplete="off"
            onkeydown="if(event.key==='Enter'){document.getElementById('ssoPass').focus()}" />
          <label class="idp-label" for="ssoPass">Password</label>
          <input id="ssoPass" class="idp-input" type="password"
            onkeydown="if(event.key==='Enter'){App.ssoSignIn()}" />
          <button class="idp-login" onclick="App.ssoSignIn()">Login</button>
        </div>

        <div class="idp-right">
          <button class="idp-pin" onclick="App.toast('PIN login is simulated in this prototype','lock')">ESTHER PIN Login</button>
          <div class="idp-links">
            <a onclick="App.toast('NetID recovery is simulated in this prototype','help')">&rsaquo; Forgot your NetID?</a>
            <a onclick="App.toast('Password recovery is simulated in this prototype','help')">&rsaquo; Forgot your password?</a>
            <a onclick="App.toast('Help is simulated in this prototype','help')">&rsaquo; Need Help?</a>
          </div>
        </div>
      </div>

      <div class="idp-footer"></div>
    </div>

    <div class="idp-address">
      6100 Main St., Houston, TX 77005-1892<br/>
      Mailing Address: P.O. Box 1892, Houston, TX 77251-1892
    </div>
    <div class="idp-proto">
      Prototype controls:
      <a onclick="App.ssoSignIn(true)">Skip to demo (continue as Demo User)</a> ·
      <a onclick="App.go('landing')">Back to overview</a>
    </div>
  </div>`;
}

function animateSSO() {
  const card = document.getElementById('ssoCard');
  if (!card) return;
  card.innerHTML = `
    <div class="sso-loading">
      <div class="spinner"></div>
      <h3 id="ssoLoadTitle">Authenticating…</h3>
      <p id="ssoLoadSub">Verifying credentials with the university identity provider</p>
      <div class="sso-steps">
        <div class="sso-step" id="sso-s1"><span class="ss-ic">${ico('check')}</span> Credentials accepted</div>
        <div class="sso-step" id="sso-s2"><span class="ss-ic">${ico('check')}</span> Establishing secure session</div>
        <div class="sso-step" id="sso-s3"><span class="ss-ic">${ico('check')}</span> Authorizing workspace access</div>
      </div>
    </div>`;
  setTimeout(() => { const e = document.getElementById('sso-s1'); if (e) e.classList.add('done'); }, 500);
  setTimeout(() => { const e = document.getElementById('sso-s2'); if (e) e.classList.add('done'); }, 1000);
  setTimeout(() => {
    const e = document.getElementById('sso-s3'); if (e) e.classList.add('done');
    const t = document.getElementById('ssoLoadTitle'); if (t) t.textContent = 'Signed in';
    const s = document.getElementById('ssoLoadSub'); if (s) s.textContent = 'Redirecting to Faculty Search CoPilot…';
  }, 1500);
  setTimeout(() => { State.authed = true; App.render('search'); App.toast('Signed in as Demo User (simulated SSO)', 'shield'); }, 2300);
}

/* ---- Duo Universal Prompt replica (simulated 2FA push) ---- */
function duoLogo(size) {
  // Placeholder Duo-style wordmark (green). Replica for demo, not a real logo asset.
  return `<span class="duo-wordmark" style="font-size:${size || 15}px">
    <span class="duo-glyph">${ico('checkBig')}</span>Duo</span>`;
}

function viewDuo() {
  const code = 3 + Math.floor(Math.random() * 7); // verification code shown in many Duo pushes
  State._duoCode = code;
  return `
  <div class="duo-page">
    <div class="sso-ribbon">${ico('alert')} Simulated Duo prompt · Prototype only — no real authentication</div>
    <div class="duo-card" id="duoCard">
      <div class="duo-org">${ico('shield')}</div>
      <div class="duo-orgname">Rice University</div>
      <h1>Check for a Duo Push</h1>
      <div class="duo-illustration">
        <span class="duo-pulse"></span><span class="duo-pulse"></span><span class="duo-pulse"></span>
        <div class="duo-phone">${ico('smartphone')}<span class="duo-badge">${code}</span></div>
      </div>
      <p class="duo-sub">Verify it's you by approving the notification sent to your device.</p>
      <div class="duo-code">Tap <strong>${code}</strong> in your Duo Mobile app</div>
      <label class="duo-remember" onclick="App.toggleCheck(this)"><span class="box">${ico('check')}</span> Remember me for 7 days</label>
      <button class="duo-other" onclick="App.toast('Other authentication methods are simulated in this demo','smartphone')">Other options</button>
      <div class="duo-foot">
        <span class="duo-need"><a onclick="App.toast('Help is simulated in this prototype','help')">Need help?</a></span>
        <span class="duo-secured">Secured by ${duoLogo(13)}</span>
      </div>
    </div>
  </div>`;
}

function animateDuo() {
  // simulate the user approving the push, then success + redirect
  setTimeout(() => {
    const card = document.getElementById('duoCard');
    if (!card) return;
    card.classList.add('duo-success');
    card.innerHTML = `
      <div class="duo-org">${ico('shield')}</div>
      <div class="duo-orgname">Rice University</div>
      <div class="duo-check"><div class="duo-check-ring">${ico('checkBig')}</div></div>
      <h1>Approved</h1>
      <p class="duo-sub">You're verified. Redirecting to Faculty Search CoPilot…</p>
      <div class="duo-foot center-foot"><span class="duo-secured">Secured by ${duoLogo(13)}</span></div>`;
  }, 2600);
  setTimeout(() => { State.authed = true; App.render('search'); App.toast('Signed in via Duo (simulated 2FA)', 'shield'); }, 3700);
}

/* ============================================================
   SCREEN 1 — Landing
   ============================================================ */
function lensIcon(lens) { return lens === 'macro' ? 'macro' : lens === 'meso' ? 'meso' : 'micro'; }

function viewLanding() {
  const lensCards = [
    { k: 'macro', t: 'Programs', d: 'Scope national PhD pipelines by field, institution, ranking, and demographics.' },
    { k: 'meso', t: 'Clusters', d: 'Find where research activity concentrates around specific topics.' },
    { k: 'micro', t: 'People', d: 'Discover candidates and dissertation matches with relevant expertise.' },
  ];
  return `
  <div class="landing">
    <nav class="landing-nav">
      <div class="brand">
        <div class="brand-mark"><img src="rice-owl.jpg" class="brand-owl" alt="Rice owl" /></div>
        <div class="brand-text"><strong>Faculty Search CoPilot</strong><span>Search intelligence for committees</span></div>
      </div>
      <div class="landing-nav-links">
        <a onclick="App.go('lenses')">Three Lenses</a>
        <a onclick="App.go('empty')">Examples</a>
        <button class="btn btn-primary btn-sm" onclick="App.startDemo()">Start Demo ${ico('arrow')}</button>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-badge"><span class="dot"></span> Stakeholder demo · Prototype data only</div>
      <h1>Faculty Search <span class="grad">CoPilot</span></h1>
      <p class="subtitle">Transform faculty recruitment through data-guided search intelligence.</p>
      <p class="body">Explore academic talent pools, research concentrations, and candidate expertise through one natural-language interface.</p>
      <div class="hero-cta">
        <button class="btn btn-primary btn-lg" onclick="App.startDemo()">Start Demo ${ico('arrow')}</button>
        <button class="btn btn-ghost btn-lg" onclick="App.go('empty')">Explore Example Queries</button>
      </div>
    </section>

    <!-- Hero dashboard mockup -->
    <div class="hero-mock">
      <div class="mock-frame">
        <div class="mock-topbar">
          <span class="mock-dot" style="background:#f87171"></span>
          <span class="mock-dot" style="background:#fbbf24"></span>
          <span class="mock-dot" style="background:#34d399"></span>
          <div class="mock-search">${ico('search')}<span>PhDs in bioengineering at AAU institutions</span><span class="caret"></span></div>
        </div>
        <div class="mock-body">
          <div>
            <div class="mock-lens-row">
              ${lensCards.map(l => `<div class="mock-lens"><div class="ml-ic lens-ic ${l.k}" style="box-shadow:none">${ico(lensIcon(l.k))}</div><h5>${l.t}</h5><p>${l.k === 'macro' ? 'Program pipelines' : l.k === 'meso' ? 'Research clusters' : 'Candidate matches'}</p></div>`).join('')}
            </div>
            <div class="mock-chart-card">
              <h5>PhD completions by institution</h5>
              <div class="mock-bars">
                ${[80, 72, 65, 61, 55, 48, 42, 38].map((h, i) => `<div class="mb" style="height:${h}%; animation-delay:${i * 0.06}s"></div>`).join('')}
              </div>
            </div>
          </div>
          <div class="mock-side">
            <div class="mock-cand">
              <h5 style="margin-bottom:6px">Top candidate matches</h5>
              ${[['MC', 'Maya Chen', 'U. Michigan', '94%'], ['DO', 'Daniel Okafor', 'Princeton', '89%'], ['SR', 'Sofia Ramirez', 'Duke', '86%']].map(c => `
                <div class="mock-cand-row"><div class="mock-cand-av">${c[0]}</div><div class="mock-cand-info"><b>${c[1]}</b><span>${c[2]}</span></div><span class="mock-cand-pct">${c[3]}</span></div>`).join('')}
            </div>
            <div class="mock-insight">
              <h5>Insight</h5>
              <p>AAU institutions account for a large share of the visible pipeline in this field.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="landing-lenses">
      <div class="grid grid-3">
        ${lensCards.map(l => `
          <div class="card hoverable lens-card" onclick="App.go('lenses')">
            <span class="lens-arrow">${ico('arrowUR')}</span>
            <div class="lens-ic ${l.k}">${ico(lensIcon(l.k))}</div>
            <h3>${l.t}</h3>
            <p style="margin-top:10px">${l.d}</p>
          </div>`).join('')}
      </div>
    </section>

    <footer class="landing-foot">
      Faculty Search CoPilot · Prototype for stakeholder demonstration. All data, results, and verification signals are simulated.
    </footer>
  </div>`;
}

/* ============================================================
   SCREEN 2 — Search home
   ============================================================ */
const PLACEHOLDERS = [
  'PhDs in bioengineering at AAU institutions',
  'Where is research on urban infrastructure concentrated?',
  'Find candidates working on energy systems',
  'Analyze this job description for relevant PhD pipelines',
];
let phIdx = 0, phTimer = null;

function viewSearch() {
  const status = [
    { t: 'Programs', d: 'Program-level PhD pipelines', ic: 'macro', grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
    { t: 'Clusters', d: 'Research-activity clusters', ic: 'meso', grad: 'linear-gradient(135deg,#0891b2,#22d3ee)' },
    { t: 'People', d: 'Specialization matching', ic: 'micro', grad: 'linear-gradient(135deg,#6366f1,#a855f7)' },
    { t: 'People — Job Market', d: 'Job-market verification', ic: 'shield', grad: 'linear-gradient(135deg,#f59e0b,#f97316)' },
  ];
  const askMode = State.searchMode === 'ask';
  return shell(`
    <div class="search-hero">
      <h1>Start with one question.</h1>
      <p>Ask about a field, topic, institution type, job description, or candidate profile.</p>
      <div class="mode-toggle">
        <button class="${askMode ? 'active' : ''}" onclick="App.setMode('ask')">${ico('search')} Ask a question</button>
        <button class="${!askMode ? 'active' : ''}" onclick="App.setMode('jd')">${ico('doc')} Paste a job description</button>
      </div>
    </div>

    ${askMode ? `
    <div class="big-search">
      <span class="bs-icon">${ico('spark')}</span>
      <input id="bigSearch" class="bs-input" placeholder="${PLACEHOLDERS[0]}"
        onkeydown="if(event.key==='Enter'){App.runQuery(this.value)}" />
      <button class="btn btn-primary bs-go" onclick="App.runQuery(document.getElementById('bigSearch').value)">Search ${ico('arrow')}</button>
    </div>` : `
    <div class="grid grid-2" style="gap:24px;align-items:start">
      <div>
        <div class="big-search" style="max-width:none">
          <textarea id="jdBox" class="bs-input" placeholder="Paste a job description here…">${State.jdAnalyzed ? JD_TEXT : ''}</textarea>
        </div>
        <div style="margin-top:16px;display:flex;gap:10px">
          <button class="btn btn-primary" onclick="App.analyzeJD()">${ico('spark')} Analyze JD</button>
          <button class="btn btn-ghost" onclick="App.loadJD()">${ico('doc')} Load example</button>
        </div>
      </div>
      <div id="jdResults">
        ${State.jdAnalyzed ? jdResultsHTML() : `
        <div class="card" style="padding:40px;text-align:center">
          <div class="empty-ic" style="margin-bottom:16px">${ico('spark')}</div>
          <h3 style="font-size:18px;color:var(--navy-800);font-weight:700">Extraction appears here</h3>
          <p style="color:var(--text-soft);margin-top:8px;font-size:14px">Load the example or paste a description, then click <strong>Analyze JD</strong> to see simulated area extraction and recommended routes.</p>
        </div>`}
      </div>
    </div>`}

    <div class="guidance">
      ${ico('compass')}
      <p><strong>Tip.</strong> ${askMode ? 'Faculty Search CoPilot works best when you ask a concrete question about a field, topic, institution type, or candidate profile.' : 'Paste a full job posting and click Analyze JD to extract the core research areas, then jump into the recommended lenses.'}</p>
    </div>

    <div class="status-grid">
      <div class="section-head"><h3>What each lens does</h3></div>
      <div class="grid grid-4">
        ${status.map(s => `
          <div class="card hoverable status-card">
            <div class="sc-top">
              <div class="sc-ic" style="background:${s.grad}">${ico(s.ic)}</div>
            </div>
            <div><h4>${s.t}</h4><p>${s.d}</p></div>
          </div>`).join('')}
      </div>
    </div>

    <div class="status-grid" style="margin-top:36px">
      <div class="section-head"><h3>Recent demo queries</h3><span class="sub">Click any query to replay its routed result</span></div>
      <div class="chips">
        ${RECENT_QUERIES.map(r => `
          <button class="chip" onclick="App.runQuery('${r.q.replace(/'/g, "\\'")}')">
            <span class="chip-lens chip-${r.lens}">${r.lens}</span>${r.q}
          </button>`).join('')}
      </div>
    </div>
  `, 'search');
}

/* ============================================================
   SCREEN 3 — Three-lens overview
   ============================================================ */
function viewLenses() {
  const lenses = [
    { k: 'macro', t: 'Programs', sub: 'Program pipelines', tipKey: 'macro',
      d: 'Use this when you want to understand how many PhDs are produced in a field, by institution, ranking, demographics, or institution type.',
      ex: 'PhDs in bioengineering at AAU institutions', out: 'PhD counts by relevant programs and institutions.', screen: 'macro' },
    { k: 'meso', t: 'Clusters', sub: 'Research-activity clusters', tipKey: 'meso',
      d: 'Use this when you want to know where dissertation research on a specific topic is concentrated.',
      ex: 'Which institutions produce significant research on civil wars?', out: 'Institutions with strong or signature research concentrations.', screen: 'meso' },
    { k: 'micro', t: 'People', sub: 'Individual candidates', tipKey: 'micro',
      d: 'Use this when you want to find PhDs or job-market candidates with a specific research specialization.',
      ex: 'Candidates working on energy and sustainability', out: 'Candidate and dissertation matches with verification signals.', screen: 'micro' },
  ];
  return shell(`
    <div class="page-head">
      <div class="kicker"><span class="kdot"></span> Product overview</div>
      <h1>Three Lenses on the Talent Pool</h1>
      <p>How Faculty Search CoPilot maps questions to useful outputs.</p>
    </div>
    <div class="grid grid-3">
      ${lenses.map(l => `
        <div class="card hoverable lens-card">
          <div class="lens-ic ${l.k}">${ico(lensIcon(l.k))}</div>
          <h3>${l.t} ${tip(l.tipKey)}</h3>
          <div class="lens-sub">${l.sub}</div>
          <p>${l.d}</p>
          <div class="lens-meta">
            <div class="lm-row"><span class="lm-k">Example</span><span class="lm-v"><em>"${l.ex}"</em></span></div>
            <div class="lm-row"><span class="lm-k">Output</span><span class="lm-v">${l.out}</span></div>
          </div>
          <button class="btn btn-soft btn-sm btn-block" style="margin-top:18px" onclick="App.go('${l.screen}')">Open ${l.t} ${ico('arrow')}</button>
        </div>`).join('')}
    </div>

    <div class="divider"></div>
    <div class="insight">
      <div class="insight-icon">${ico('compass')}</div>
      <div>
        <h4>One natural-language interface, three depths of answer</h4>
        <p>Ask a question in plain language. CoPilot detects whether you need a program pipeline (Programs), a research concentration map (Clusters), or individual candidate matches (People) — and routes you to the right result automatically.</p>
      </div>
    </div>
  `, 'lenses');
}

/* ============================================================
   SCREEN 4 — Intent routing (animated), then results
   ============================================================ */
function viewRouting(query, target) {
  const order = ['macro', 'meso', 'micro'];
  const explains = {
    macro: ['Detected Lens: Programs', 'This query asks about program-level PhD pipelines.'],
    meso: ['Detected Lens: Clusters', 'This query asks where research activity is concentrated.'],
    micro: ['Detected Lens: People', 'This query asks for individual candidate or dissertation matches.'],
  };
  const e = explains[target.lens] || explains.macro;
  return shell(`
    <div class="routing-stage">
      <div class="routing-query">${ico('search')} ${query}</div>
      <div class="analyzing" id="analyzingTitle"><span class="spinner"></span> Analyzing query…</div>
      <div class="analyzing-sub" id="analyzingSub">Matching your question to the right lens</div>

      <div class="route-track">
        <div class="route-node" id="rn-start">
          <div class="rn-ic">${ico('search')}</div>
          <h5>Query</h5>
          <div class="rn-sub">Natural language</div>
        </div>
        <div class="route-line" id="rl-1"><span class="glow"></span></div>
        <div class="route-node ${target.lens}" id="rn-lens">
          <div class="rn-check">${ico('check')}</div>
          <div class="rn-ic">${ico(lensIcon(target.lens))}</div>
          <h5>${target.lens.charAt(0).toUpperCase() + target.lens.slice(1)} Lens</h5>
          <div class="rn-sub">Intent classifier</div>
        </div>
        <div class="route-line" id="rl-2"><span class="glow"></span></div>
        <div class="route-node" id="rn-out">
          <div class="rn-ic">${ico('layers')}</div>
          <h5>Results</h5>
          <div class="rn-sub">Mock output</div>
        </div>
      </div>

      <div class="route-explain" id="routeExplain" style="display:none">
        <h4>${e[0]}</h4>
        <p>${e[1]}</p>
        <div class="route-confidence">
          ${ico('bolt')} Routing confidence
          <span class="conf-track"><span class="conf-fill" style="width:${target.lens === 'macro' ? 96 : target.lens === 'meso' ? 92 : 90}%"></span></span>
          ${target.lens === 'macro' ? '96' : target.lens === 'meso' ? '92' : '90'}%
        </div>
      </div>
    </div>
  `, 'search');
}

function animateRouting(query, target) {
  // staged animation, then transition to results
  setTimeout(() => { const el = document.getElementById('rl-1'); if (el) el.classList.add('active'); }, 600);
  setTimeout(() => { const n = document.getElementById('rn-lens'); if (n) n.classList.add('detected'); }, 1000);
  setTimeout(() => {
    const t = document.getElementById('analyzingTitle');
    if (t) t.innerHTML = ico('checkc') + ' Lens detected';
    const s = document.getElementById('analyzingSub');
    if (s) s.textContent = 'Preparing your simulated result';
    const ex = document.getElementById('routeExplain'); if (ex) ex.style.display = 'block';
  }, 1100);
  setTimeout(() => { const el = document.getElementById('rl-2'); if (el) el.classList.add('active'); }, 1500);
  setTimeout(() => { const n = document.getElementById('rn-out'); if (n) n.classList.add('detected', target.lens); }, 1800);
  setTimeout(() => { App.render(target.screen); }, 2600);
}

/* ============================================================
   Shared results header
   ============================================================ */
function resultsHead(lens, title, desc, actions) {
  const label = lens === 'macro' ? 'Programs' : lens === 'meso' ? 'Clusters' : 'People';
  return `
    <div class="results-head">
      <div class="rh-left">
        <span class="lens-pill ${lens}">${ico(lensIcon(lens))} ${label} ${tip(lens)}</span>
        <h1>${title}</h1>
        <p>${desc}</p>
        <div style="margin-top:12px"><span class="sim-label">${ico('alert')} Simulated result · prototype data</span></div>
      </div>
      <div class="results-actions">${actions}</div>
    </div>`;
}

/* ============================================================
   SCREEN 5 — Macro results
   ============================================================ */
function viewMacro() {
  const maxCount = Math.max(...MACRO_ROWS.map(r => r.count));
  const kpis = [
    { v: '1,248', l: 'Total PhDs', ic: 'graduation', t: '+8.2% vs prior year', tk: 'up' },
    { v: '42', l: 'Institutions', ic: 'building', t: 'Across 21 states', tk: 'flat' },
    { v: '19', l: 'AAU Institutions', ic: 'award', t: '45% of pipeline', tk: 'up' },
    { v: '10', l: 'Top-Ranked Programs', ic: 'trend', t: 'Top-10 tier', tk: 'flat' },
  ];
  return shell(`
    ${resultsHead('macro', 'Programs: PhD Pipeline Scoping',
      'Program-level view of PhD production across relevant institutions.',
      `<button class="btn btn-soft btn-sm" onclick="App.go('meso')">${ico('meso')} Switch to Clusters</button>
       <button class="btn btn-primary btn-sm" onclick="App.toast('Mock report exported (demo)','download')">${ico('download')} Export mock report</button>`)}

    <div class="results-head" style="margin:0 0 20px"><div class="rh-left" style="margin-top:-8px"><span class="tag tag-blue">Query · "PhDs in bioengineering at AAU institutions"</span></div></div>

    <div class="with-filters">
      <aside class="filter-panel">
        <h4>${ico('filter')} Filters</h4>
        <div class="filter-group">
          <div class="fg-label">Field / CIP Area ${tip('cip')}</div>
          <div class="filter-opts">
            ${['Bioengineering', 'Biomedical Engineering', 'Biological Engineering'].map((o, i) => `
              <label class="f-check ${i < 2 ? 'on' : ''}" onclick="App.toggleCheck(this)"><span class="box">${ico('check')}</span>${o}</label>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Institution Type ${tip('insttype')}</div>
          <div class="f-pills">
            ${[['AAU', 1], ['R1', 1], ['Public', 0], ['Private', 0]].map(p => `<span class="f-pill ${p[1] ? 'on' : ''}" onclick="this.classList.toggle('on')">${p[0]}</span>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Ranking Range</div>
          <div class="f-slider"><span class="f-range" style="left:0;width:55%"></span><span class="f-knob" style="left:0"></span><span class="f-knob" style="left:55%"></span></div>
          <div class="flex-between" style="font-size:11px;color:var(--text-faint)"><span>Top 1</span><span>Top 30</span></div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Year Range</div>
          <div class="f-pills">
            ${['2020', '2021', '2022', '2023', '2024'].map((y, i) => `<span class="f-pill ${i > 1 ? 'on' : ''}" onclick="this.classList.toggle('on')">${y}</span>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Demographics</div>
          <div class="filter-opts">
            ${['All groups', 'First-generation', 'Underrepresented'].map((o, i) => `
              <label class="f-check ${i === 0 ? 'on' : ''}" onclick="App.toggleCheck(this)"><span class="box">${ico('check')}</span>${o}</label>`).join('')}
          </div>
        </div>
        <button class="btn btn-soft btn-sm btn-block" onclick="App.toast('Filters applied (demo)','filter')">Apply filters</button>
      </aside>

      <div>
        <div class="kpi-row">
          ${kpis.map(k => `
            <div class="kpi"><div class="kpi-icon">${ico(k.ic)}</div><div class="kpi-val">${k.v}</div><div class="kpi-label">${k.l}</div><div class="kpi-trend ${k.tk}">${k.tk === 'up' ? ico('trend') : ''}${k.t}</div></div>`).join('')}
        </div>

        <div class="card chart-card" style="margin-bottom:24px">
          <div class="section-head"><div><h3>${ico('macro')} PhD completions by institution</h3><div class="sub">Annual PhD completions · simulated</div></div><span class="sim-label">${ico('alert')} Mock chart</span></div>
          <div class="bar-chart">
            ${MACRO_ROWS.map((r, i) => `
              <div class="bar-col">
                <div class="bar-track">
                  <div class="bar ${r.type.includes('AAU') ? '' : 'alt'}" style="height:${(r.count / maxCount) * 100}%; animation-delay:${i * 0.08}s">
                    <span class="bar-val">${r.count}</span>
                  </div>
                </div>
                <div class="bar-lbl">${r.inst.replace('University', 'U.').replace(' of ', ' ')}</div>
              </div>`).join('')}
          </div>
          <div class="bubble-legend" style="margin-top:8px">
            <span class="legend-item"><span class="sw" style="background:linear-gradient(135deg,#1e3a8a,#3b82f6)"></span> AAU / R1</span>
            <span class="legend-item"><span class="sw" style="background:linear-gradient(180deg,#22d3ee,#06b6d4)"></span> R1 (non-AAU)</span>
          </div>
        </div>

        <div class="tbl-wrap" style="margin-bottom:24px">
          <div class="section-head" style="padding:18px 18px 0"><h3>Program pipeline detail</h3></div>
          <table>
            <thead><tr><th>Institution</th><th>Program</th><th>PhD Count</th><th>Institution Type ${tip('insttype')}</th><th>Ranking Tier</th></tr></thead>
            <tbody>
              ${MACRO_ROWS.map(r => `
                <tr>
                  <td class="inst">${r.inst}</td>
                  <td>${r.prog}</td>
                  <td><div class="cell-bar"><span class="num-strong">${r.count}</span><span class="track"><span class="fill" style="width:${(r.count / maxCount) * 100}%"></span></span></div></td>
                  <td><span class="tag ${r.type.includes('AAU') ? 'tag-blue' : 'tag-cyan'}">${r.type}</span></td>
                  <td><span class="tag">${r.tier}</span></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>

        <div class="insight">
          <div class="insight-icon">${ico('bolt')}</div>
          <div>
            <h4>Pipeline insight</h4>
            <p>AAU institutions account for a large share of the visible pipeline in this field, making them strong starting points for outreach.</p>
          </div>
        </div>
      </div>
    </div>
  `, 'macro');
}

/* ============================================================
   SCREEN 6 — Meso results
   ============================================================ */
function clusterClass(c) { return c === 'Signature Cluster' ? 'signature' : c === 'Strong Cluster' ? 'strong' : 'notable'; }
function clusterTag(c) { const k = clusterClass(c); return `<span class="tag ${k === 'signature' ? 'tag-blue' : k === 'strong' ? 'tag-cyan' : 'tag-violet'}">${c}</span>`; }

// Real geographic US map, projected with d3 geoAlbersUsa (see map-data.js)
function renderUSMap() {
  const M = window.US_MAP;
  if (!M) return `<div class="card chart-card"><p class="muted">Map data unavailable. Serve the folder over http (or include map-data.js).</p></div>`;
  const cls = (c) => c === 'Signature Cluster' ? 'signature' : c === 'Strong Cluster' ? 'strong' : 'notable';
  const gid = (c) => c === 'Signature Cluster' ? 'sigGrad' : c === 'Strong Cluster' ? 'strGrad' : 'notGrad';
  const radius = (share) => 9 + (share - 7) * 1.5;
  // label offsets keyed by short name to avoid collisions in the dense Northeast
  const LBL = {
    'U. Chicago': [0, 31, 'middle'], 'U. Michigan': [0, -19, 'middle'],
    'Columbia': [17, -5, 'start'], 'Princeton': [17, 16, 'start'],
    'Duke': [0, 31, 'middle'], 'Stanford': [0, 33, 'middle'],
  };
  // draw larger markers first so smaller ones stay visible on top (NYC/Princeton overlap)
  const drawOrder = M.universities.map((u, i) => ({ u, i })).sort((a, b) => b.u.share - a.u.share);
  return `
    <div class="card chart-card" style="margin-bottom:24px">
      <div class="section-head"><div><h3>${ico('meso')} Research concentration map</h3><div class="sub">Geographic view · marker size reflects research share · simulated</div></div><span class="sim-label">${ico('alert')} Mock visualization</span></div>
      <div class="us-map-stage">
        <svg viewBox="0 0 ${M.width} ${M.height}" class="us-map" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of the United States with research concentration markers">
          <defs>
            <linearGradient id="stateGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf1fb"/><stop offset="1" stop-color="#dbe6f4"/></linearGradient>
            <radialGradient id="sigGrad" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#1e3a8a"/></radialGradient>
            <radialGradient id="strGrad" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#0891b2"/></radialGradient>
            <radialGradient id="notGrad" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#6366f1"/></radialGradient>
            <filter id="mShadow" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f2247" flood-opacity="0.30"/></filter>
          </defs>
          <g class="us-states">${M.statePaths.map(p => `<path d="${p}" class="us-state"/>`).join('')}</g>
          <path d="${M.bordersPath}" class="us-borders"/>
          <g class="us-markers">
            ${drawOrder.map(({ u, i }) => {
              const r = radius(u.share), off = LBL[u.short] || [0, 30, 'middle'], g = gid(u.cluster);
              return `
              <g class="us-marker" style="animation-delay:${i * 0.1}s" onclick="App.toast('${u.name.replace(/'/g, "\\'")} · LQ ${u.lq} · ${u.cluster} (demo)','meso')">
                ${cls(u.cluster) === 'signature' ? `<circle cx="${u.x}" cy="${u.y}" r="${r}" class="marker-pulse" fill="url(#${g})"/>` : ''}
                <circle cx="${u.x}" cy="${u.y}" r="${r}" fill="url(#${g})" filter="url(#mShadow)" class="marker-dot"/>
                <text x="${u.x}" y="${u.y + 3.6}" text-anchor="middle" class="marker-val">${u.share}%</text>
                <text x="${u.x + off[0]}" y="${u.y + off[1]}" text-anchor="${off[2]}" class="marker-label">${u.short}</text>
              </g>`;
            }).join('')}
          </g>
        </svg>
      </div>
      <div class="bubble-legend">
        <span class="legend-item"><span class="sw" style="background:radial-gradient(circle at 35% 30%,#3b82f6,#1e3a8a)"></span> Signature Cluster</span>
        <span class="legend-item"><span class="sw" style="background:radial-gradient(circle at 35% 30%,#22d3ee,#0891b2)"></span> Strong Cluster</span>
        <span class="legend-item"><span class="sw" style="background:radial-gradient(circle at 35% 30%,#818cf8,#6366f1)"></span> Notable Cluster</span>
      </div>
    </div>`;
}

function viewMeso() {
  const kpis = [
    { v: '31', l: 'Institutions Found', ic: 'building' },
    { v: '286', l: 'Dissertation Matches', ic: 'doc' },
    { v: '5', l: 'Signature Clusters', ic: 'target' },
    { v: '11', l: 'Strong Clusters', ic: 'layers' },
  ];
  return shell(`
    ${resultsHead('meso', 'Clusters: Where Research Concentrates',
      'Identify institutions where dissertation research concentrates around a specific topic.',
      `<button class="btn btn-ghost btn-sm" onclick="App.go('micro')">${ico('micro')} View matching candidates</button>
       <button class="btn btn-soft btn-sm" onclick="App.go('macro')">${ico('macro')} Compare with Programs</button>
       <button class="btn btn-primary btn-sm" onclick="App.toast('Insight saved to workspace (demo)','save')">${ico('save')} Save mock insight</button>`)}

    <div class="results-head" style="margin:0 0 20px"><div class="rh-left" style="margin-top:-8px"><span class="tag tag-cyan">Query · "Which institutions produce significant research on civil wars in political science?"</span></div></div>

    <div class="kpi-row">
      ${kpis.map(k => `<div class="kpi"><div class="kpi-icon">${ico(k.ic)}</div><div class="kpi-val">${k.v}</div><div class="kpi-label">${k.l}</div></div>`).join('')}
    </div>

    ${renderUSMap()}

    <div class="tbl-wrap" style="margin-bottom:24px">
      <div class="section-head" style="padding:18px 18px 0"><h3>Cluster ranking</h3></div>
      <table>
        <thead><tr><th>Institution</th><th>Field</th><th>Topic</th><th>Research Share</th><th>Location Quotient ${tip('lq')}</th><th>Cluster Strength</th></tr></thead>
        <tbody>
          ${MESO_ROWS.map(r => `
            <tr>
              <td class="inst">${r.inst}</td>
              <td>${r.field}</td>
              <td>${r.topic}</td>
              <td><div class="cell-bar"><span class="num-strong">${r.share}%</span><span class="track"><span class="fill" style="width:${r.share * 5}%"></span></span></div></td>
              <td><span class="num-strong">${r.lq}</span></td>
              <td>${clusterTag(r.cluster)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div class="insight">
      <div class="insight-icon">${ico('compass')}</div>
      <div>
        <h4>Why this matters</h4>
        <p>This lens helps committees target institutions where relevant research activity is concentrated, instead of relying only on broad program categories.</p>
      </div>
    </div>
  `, 'meso');
}

/* ============================================================
   SCREEN 7 — Micro: specialization matching
   ============================================================ */
function matchRing(pct) {
  const c = 2 * Math.PI * 24;
  const off = c - (pct / 100) * c;
  return `<div class="match-ring"><svg viewBox="0 0 56 56">
    <circle cx="28" cy="28" r="24" fill="none" stroke="#e2e8f0" stroke-width="5"/>
    <circle cx="28" cy="28" r="24" fill="none" stroke="url(#mg)" stroke-width="5" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 28 28)"/>
    <text x="28" y="31" text-anchor="middle" class="mr-pct">${pct}%</text>
    <defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>
  </svg><div class="mr-lbl">Match ${tip('match')}</div></div>`;
}

function viewMicro() {
  const initials = (n) => n.split(' ').map(w => w[0]).join('');
  return shell(`
    ${resultsHead('micro', 'People: Specialization Matching',
      'Find individual PhDs whose dissertation topics match the search area.',
      `<button class="btn btn-soft btn-sm" onclick="App.go('verify')">${ico('shield')} Check current job market</button>
       <button class="btn btn-primary btn-sm" onclick="App.toast('Candidate shortlist saved (demo)','save')">${ico('save')} Save shortlist</button>`)}

    <div class="results-head" style="margin:0 0 20px"><div class="rh-left" style="margin-top:-8px"><span class="tag tag-violet">Query · "PhDs focusing on international relations and civil war"</span></div></div>

    <div class="with-filters">
      <aside class="filter-panel">
        <h4>${ico('filter')} Filters</h4>
        <div class="filter-group">
          <div class="fg-label">Research specialization</div>
          <div class="filter-opts">
            ${['Civil War', 'International Relations', 'Comparative Politics', 'Peacebuilding'].map((o, i) => `
              <label class="f-check ${i < 2 ? 'on' : ''}" onclick="App.toggleCheck(this)"><span class="box">${ico('check')}</span>${o}</label>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Institution type ${tip('insttype')}</div>
          <div class="f-pills">${[['AAU', 1], ['R1', 1], ['Private', 0]].map(p => `<span class="f-pill ${p[1] ? 'on' : ''}" onclick="this.classList.toggle('on')">${p[0]}</span>`).join('')}</div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Graduation year</div>
          <div class="f-pills">${['2022', '2023', '2024'].map((y, i) => `<span class="f-pill ${i > 0 ? 'on' : ''}" onclick="this.classList.toggle('on')">${y}</span>`).join('')}</div>
        </div>
        <div class="filter-group">
          <div class="fg-label">Match strength ${tip('match')}</div>
          <div class="f-slider"><span class="f-range" style="left:0;width:75%"></span><span class="f-knob" style="left:0"></span><span class="f-knob" style="left:75%"></span></div>
          <div class="flex-between" style="font-size:11px;color:var(--text-faint)"><span>80%</span><span>100%</span></div>
        </div>
        <button class="btn btn-soft btn-sm btn-block" onclick="App.toast('Filters applied (demo)','filter')">Apply filters</button>
      </aside>

      <div class="grid" style="gap:20px">
        ${MICRO_CANDS.map((c, i) => `
          <div class="card cand-card">
            <div class="cand-top">
              <div class="cand-avatar">${initials(c.name)}</div>
              <div class="cand-id">
                <h4>${c.name}</h4>
                <div class="cand-inst">${ico('building')} ${c.inst}</div>
              </div>
              ${matchRing(c.match)}
            </div>
            <div class="cand-diss">
              <div class="cd-label">Dissertation</div>
              <div class="cd-title">"${c.diss}"</div>
            </div>
            <div class="cand-topics">
              ${c.topics.map(t => `<span class="tag tag-blue">${t}</span>`).join('')}
            </div>
            <div class="cand-foot">
              <span class="cf-year">${ico('cal')} Graduated ${c.year}</span>
              <button class="why-toggle" onclick="App.toggleWhy(${i})">Why this matched ${ico('chevDown')}</button>
            </div>
            <div class="why-panel" id="why-${i}">
              <div class="why-inner">
                <h5>Match breakdown · simulated</h5>
                ${c.why.map(w => `
                  <div class="why-factor">
                    <span class="wf-name">${w[0]}</span>
                    <span class="wf-track"><span class="wf-fill" style="width:${w[1]}%"></span></span>
                    <span class="wf-pct">${w[1]}%</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  `, 'micro');
}

/* ============================================================
   SCREEN 8 — Micro: job-market verification
   ============================================================ */
function viewVerify() {
  const initials = (n) => n.split(' ').map(w => w[0]).join('');
  const statusIcon = (s) => s === 'available' ? 'checkc' : s === 'possible' ? 'clock' : 'x';
  const kindIcon = (k) => k === 'ok' ? 'checkc' : k === 'warn' ? 'clock' : k === 'bad' ? 'x' : 'eye';
  return shell(`
    ${resultsHead('micro', 'People: Current-Cycle Verification',
      'Simulated job-market verification using department-page and personal-site signals.',
      `<button class="btn btn-ghost btn-sm" onclick="App.go('micro')">${ico('micro')} Back to all matches</button>
       <button class="btn btn-primary btn-sm" onclick="App.toast('Verified shortlist saved (demo)','save')">${ico('save')} Save shortlist</button>`)}

    <div class="results-head" style="margin:0 0 20px"><div class="rh-left" style="margin-top:-8px">
      <span class="tag tag-violet">Query · "Which PhD candidates doing research on civil wars are on the job market right now?"</span>
      <span class="sim-label" style="margin-left:8px">${ico('shield')} Mock verification</span>
    </div></div>

    <div class="grid grid-3" style="margin-bottom:24px">
      ${VERIFY_CANDS.map(c => `
        <div class="card verify-card ${c.status}">
          <div class="flex-between" style="margin-bottom:16px">
            <div class="flex gap-sm" style="align-items:center">
              <div class="cand-avatar" style="width:42px;height:42px;font-size:14px;border-radius:12px">${initials(c.name)}</div>
              <div><h4 style="font-size:15px;font-weight:700;color:var(--navy-900)">${c.name}</h4><div style="font-size:12px;color:var(--text-soft)">${c.inst}</div></div>
            </div>
            <span class="status-badge ${c.status}">${ico(statusIcon(c.status))} ${c.statusLabel}</span>
          </div>
          <div style="font-size:12.5px;color:var(--text-soft);margin-bottom:12px"><strong style="color:var(--navy-800)">Research:</strong> ${c.area}</div>
          <div style="border-top:1px solid var(--border);padding-top:6px">
            <div class="signal-row">
              <div class="signal-ic ${c.deptKind}">${ico(kindIcon(c.deptKind))}</div>
              <div class="signal-info"><div class="si-label">Department-page signal</div><div class="si-val">${c.dept}</div></div>
            </div>
            <div class="signal-row">
              <div class="signal-ic ${c.siteKind}">${ico(kindIcon(c.siteKind))}</div>
              <div class="signal-info"><div class="si-label">Personal-site verification ${tip('verify')}</div><div class="si-val">${c.site}</div></div>
            </div>
          </div>
          <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <span style="font-size:11px;color:var(--text-faint);display:flex;align-items:center;gap:6px">${ico('clock')} Verified this cycle</span>
            <span class="tag ${c.status === 'available' ? 'tag-live' : c.status === 'possible' ? 'tag-dev' : ''}" ${c.status === 'placed' ? 'style="background:rgba(244,63,94,0.1);color:var(--rose-600)"' : ''}>${c.status === 'available' ? 'Recommended' : c.status === 'possible' ? 'Review' : 'Exclude'}</span>
          </div>
        </div>`).join('')}
    </div>

    <div class="insight">
      <div class="insight-icon">${ico('shield')}</div>
      <div>
        <h4>Verification insight</h4>
        <p>The verification step helps committees avoid spending time on candidates who appear to already be placed.</p>
      </div>
    </div>

    <div class="center" style="margin-top:24px"><span class="sim-label">${ico('alert')} Simulated prototype data — signals are illustrative and not from live sources</span></div>
  `, 'micro');
}

/* ============================================================
   JD Analysis — data + results markup (rendered inline in Search's JD mode)
   ============================================================ */
const JD_TEXT = `Assistant Professor — Energy & Sustainability (Tenure-Track, 2024)

The Department of Engineering invites applications for a tenure-track Assistant Professor position focused on energy systems and sustainability. We seek candidates whose research advances clean energy technologies, sustainable infrastructure, and climate adaptation.

Areas of interest include: energy systems modeling and optimization; renewable and grid-scale energy; infrastructure resilience; environmental and climate modeling; and adaptation strategies for the built environment. The successful candidate will establish an externally funded research program and contribute to graduate and undergraduate teaching.

Required: PhD in Engineering, Environmental Science, or a related field by the appointment start date; demonstrated research excellence; and a commitment to interdisciplinary collaboration.`;

const JD_AREAS = [
  ['Energy systems', 96], ['Sustainability', 93], ['Infrastructure resilience', 88], ['Environmental modeling', 84], ['Climate adaptation', 81],
];

function jdResultsHTML() {
  const routes = [
    { n: 1, lens: 'macro', t: 'Map JD to academic pipelines', d: 'Estimate how many PhDs are produced in these areas, by institution and ranking tier.', cta: 'Analyze Programs', grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', color: 'var(--royal-600)', screen: 'macro' },
    { n: 2, lens: 'meso', t: 'Find institutions with research clusters', d: 'Locate institutions where dissertation research on these topics is concentrated.', cta: 'Map Clusters', grad: 'linear-gradient(135deg,#0891b2,#22d3ee)', color: '#0e7490', screen: 'meso' },
    { n: 3, lens: 'micro', t: 'Find dissertation and candidate matches', d: 'Surface individual PhDs and dissertations matching the extracted specialization.', cta: 'Find People', grad: 'linear-gradient(135deg,#6366f1,#a855f7)', color: '#7c3aed', screen: 'micro' },
  ];
  return `
    <div class="card extract-panel" style="margin-bottom:24px">
      <div class="extract-head">
        <div class="eh-ic">${ico('spark')}<span class="scan"></span></div>
        <div><h3 style="font-size:16px;font-weight:700;color:var(--navy-900)">Extracted research areas</h3><div style="font-size:12.5px;color:var(--text-soft)">Simulated AI-style extraction</div></div>
        <span class="sim-label" style="margin-left:auto">${ico('alert')} Simulated</span>
      </div>
      <div class="extract-areas">
        ${JD_AREAS.map((a, i) => `
          <div class="extract-area" style="animation-delay:${i * 0.12}s">
            <div class="ea-num">${i + 1}</div>
            <div class="ea-name">${a[0]}</div>
            <div class="ea-conf"><span class="ea-track"><span class="ea-fill" style="width:${a[1]}%"></span></span><span class="ea-pct">${a[1]}%</span></div>
          </div>`).join('')}
      </div>
    </div>

    <div class="section-head"><h3>Recommended routes</h3></div>
    <div class="grid" style="gap:16px">
      ${routes.map(r => `
        <div class="card hoverable route-rec">
          <span class="rr-num">${r.n}</span>
          <div class="rr-ic" style="background:${r.grad}">${ico(lensIcon(r.lens))}</div>
          <div class="rr-lens" style="color:${r.color}">${r.lens.toUpperCase()} LENS</div>
          <h4>${r.t}</h4>
          <p style="margin-top:8px">${r.d}</p>
          <button class="btn btn-soft btn-sm" onclick="App.go('${r.screen}')">${r.cta} ${ico('arrow')}</button>
        </div>`).join('')}
    </div>`;
}

/* ============================================================
   SCREEN 12 — Empty state / examples
   ============================================================ */
function viewEmpty() {
  const groups = [
    { t: 'Pipeline questions', ic: 'macro', grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', qs: ['Top 10 ranked programs in bioengineering', 'PhDs in political science by institution type'] },
    { t: 'Research cluster questions', ic: 'meso', grad: 'linear-gradient(135deg,#0891b2,#22d3ee)', qs: ['Where is research on urban infrastructure concentrated?', 'Which institutions produce significant work on civil wars?'] },
    { t: 'Candidate questions', ic: 'micro', grad: 'linear-gradient(135deg,#6366f1,#a855f7)', qs: ['Find candidates working on energy systems', 'Show dissertations related to microbiology and bioengineering'] },
  ];
  return shell(`
    <div class="empty-state">
      <div class="empty-ic">${ico('search')}</div>
      <h2>Ask a question to begin.</h2>
      <p>Pick any example below, or type your own question in the search bar. Every example routes to a prebuilt, simulated result.</p>
    </div>
    <div class="example-groups">
      ${groups.map(g => `
        <div class="card example-group">
          <div class="eg-head"><div class="eg-ic" style="background:${g.grad}">${ico(g.ic)}</div><h4>${g.t}</h4></div>
          ${g.qs.map(q => `<div class="example-q" onclick="App.runQuery('${q.replace(/'/g, "\\'")}')">${ico('search')} ${q}</div>`).join('')}
        </div>`).join('')}
    </div>
    <div class="center" style="margin-top:36px">
      <button class="btn btn-primary" onclick="App.go('search')">Go to search ${ico('arrow')}</button>
    </div>
  `, 'search');
}

/* ============================================================
   Router
   ============================================================ */
const App = {
  go(screen) {
    if (screen === 'home') screen = 'search';
    this.render(screen);
  },

  render(screen) {
    State.current = screen;
    if (typeof tipEl !== 'undefined' && tipEl) tipEl.classList.remove('show'); // drop any open tooltip before swapping views
    const root = document.getElementById('app');
    let html;
    switch (screen) {
      case 'landing': html = viewLanding(); break;
      case 'sso': html = viewSSO(); break;
      case 'duo': html = viewDuo(); break;
      case 'search': html = viewSearch(); break;
      case 'lenses': html = viewLenses(); break;
      case 'macro': html = viewMacro(); break;
      case 'meso': html = viewMeso(); break;
      case 'micro': html = viewMicro(); break;
      case 'verify': html = viewVerify(); break;
      case 'empty': html = viewEmpty(); break;
      default: html = viewSearch();
    }
    root.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    if (screen === 'duo') animateDuo();
    if (screen !== 'landing') this.startPlaceholderRotation();
    animateCounters(root);
  },

  startDemo() { this.render(State.authed ? 'search' : 'sso'); },

  ssoSignIn(quick) {
    if (quick) { State.authed = true; this.render('search'); this.toast('Signed in as Demo User (simulated)', 'shield'); return; }
    const u = document.getElementById('ssoUser');
    if (u && !u.value.trim()) { u.value = 'demo.user'; }
    this.render('duo'); // rendering 'duo' kicks off the push animation
  },

  ssoReveal(el) {
    const inp = document.getElementById('ssoPass');
    if (!inp) return;
    inp.type = inp.type === 'password' ? 'text' : 'password';
  },

  signOut() { State.authed = false; this.render('sso'); this.toast('Signed out (simulated)', 'logout'); },

  startPlaceholderRotation() {
    if (phTimer) clearInterval(phTimer);
    const input = document.getElementById('bigSearch');
    if (!input) return;
    phTimer = setInterval(() => {
      phIdx = (phIdx + 1) % PLACEHOLDERS.length;
      input.setAttribute('placeholder', PLACEHOLDERS[phIdx]);
    }, 2800);
  },

  setMode(m) { State.searchMode = m; this.render('search'); },

  runQuery(q) {
    q = (q || '').trim();
    if (!q) { this.toast('Type a question to search', 'alert'); return; }
    State.lastQuery = q;
    const target = detectLens(q);
    if (target.lens === 'jd') { this.setMode('jd'); return; }
    // show routing screen, then animate to results
    const root = document.getElementById('app');
    root.innerHTML = viewRouting(q, target);
    window.scrollTo({ top: 0 });
    animateRouting(q, target);
  },

  toggleWhy(i) {
    const p = document.getElementById('why-' + i);
    const btn = p.previousElementSibling.querySelector('.why-toggle');
    p.classList.toggle('open');
    if (btn) btn.classList.toggle('open');
  },

  toggleCheck(el) { el.classList.toggle('on'); },

  loadJD() {
    State.jdAnalyzed = false;
    if (State.current !== 'search' || State.searchMode !== 'jd') { State.searchMode = 'jd'; this.render('search'); }
    const box = document.getElementById('jdBox'); if (box) { box.value = JD_TEXT; box.focus(); }
    this.toast('Example job description loaded', 'doc');
  },

  analyzeJD() {
    const box = document.getElementById('jdBox');
    if (box && !box.value.trim()) { box.value = JD_TEXT; }
    const target = document.getElementById('jdResults');
    target.innerHTML = `
      <div class="card extract-panel">
        <div class="extract-head">
          <div class="eh-ic">${ico('spark')}<span class="scan"></span></div>
          <div><h3 style="font-size:16px;font-weight:700;color:var(--navy-900)">Analyzing description…</h3><div style="font-size:12.5px;color:var(--text-soft)">Extracting research areas</div></div>
        </div>
        <div class="extract-areas">
          ${[0, 1, 2, 3, 4].map(() => `<div class="shimmer" style="height:52px;margin-bottom:4px"></div>`).join('')}
        </div>
      </div>`;
    setTimeout(() => { State.jdAnalyzed = true; document.getElementById('jdResults').innerHTML = jdResultsHTML(); this.toast('JD analyzed — 5 research areas extracted', 'spark'); }, 1400);
  },

  toast(msg, icon) { toast(msg, icon); },
};
window.App = App;

/* ---------- Tooltips ----------
   A single shared bubble lives directly under <body>, so it's never clipped or
   mispositioned by transformed/overflow-hidden ancestors (e.g. hoverable cards).
   On hover we copy the trigger's content into it and position it in viewport coords. */
let tipEl = null;
function getTipEl() {
  if (!tipEl) {
    tipEl = document.createElement('div');
    tipEl.className = 'tip-body';
    document.body.appendChild(tipEl);
  }
  return tipEl;
}
function positionTip(tip) {
  const src = tip.querySelector('.tip-body');
  if (!src) return;
  const g = getTipEl();
  g.innerHTML = src.innerHTML;
  g.classList.add('show');                                   // make it measurable + visible
  const t = tip.getBoundingClientRect();
  const bw = g.offsetWidth, bh = g.offsetHeight, m = 8;
  let left = t.left + t.width / 2 - bw / 2;
  left = Math.max(m, Math.min(left, window.innerWidth - bw - m));
  let top = t.top - bh - 10, below = false;
  if (top < m) { top = t.bottom + 10; below = true; }        // flip below if no room above
  g.style.left = left + 'px';
  g.style.top = top + 'px';
  const arrowX = Math.max(12, Math.min(t.left + t.width / 2 - left, bw - 12));
  g.style.setProperty('--arrow-x', arrowX + 'px');
  g.classList.toggle('below', below);
}
function hideTip() { if (tipEl) tipEl.classList.remove('show'); }
function initTips() {
  const show = (e) => { const tip = e.target.closest && e.target.closest('.tip'); if (tip) positionTip(tip); };
  const hide = (e) => { const tip = e.target.closest && e.target.closest('.tip'); if (!tip) return; if (e.relatedTarget && tip.contains(e.relatedTarget)) return; hideTip(); };
  document.addEventListener('mouseover', show);
  document.addEventListener('mouseout', hide);
  document.addEventListener('focusin', show);
  document.addEventListener('focusout', hide);
  // hide on scroll so it doesn't float away from its trigger
  window.addEventListener('scroll', hideTip, true);
}

document.addEventListener('DOMContentLoaded', () => { App.render('landing'); initTips(); });
