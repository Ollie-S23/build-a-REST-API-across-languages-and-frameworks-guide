(function () {
  var KEY = 'goPgGuide.v6', FW = {"go": [["standard", "Standard (net/http)"], ["gin", "Gin"], ["echo", "Echo"], ["chi", "chi"], ["fiber", "Fiber"], ["huma", "Huma"]], "py": [["standard", "Standard (http.server)"], ["fastapi", "FastAPI"], ["flask", "Flask"], ["django", "Django"]], "rs": [["standard", "Standard (axum)"], ["actix", "Actix Web"], ["rocket", "Rocket"]], "php": [["standard", "Standard (plain PHP)"], ["slim", "Slim"]], "js": [["express", "Express"], ["fastify", "Fastify"]], "ts": [["express", "Express"], ["fastify", "Fastify"], ["nest", "NestJS"]]};
  var DEF = { lang: 'go', storage: 'sql', db: 'pg', view: 'all', fe: 'js' };
  var OPTDEF = { json: 1, table: 1, why: 1, fail: 1, ph: 1, doc: 1, more: 1, tips: 1, badges: 1, wide: 0, bigcode: 0 }, opt = {};   // 1 = on
  var VALID = { lang: ['py', 'go', 'rs', 'php', 'js', 'ts', 'all'], storage: ['sql', 'json', 'mem', 'all'], db: ['std', 'pg', 'mysql', 'maria', 'sqlite', 'mongo', 'all'], view: ['impl', 'all'], fe: ['js', 'ts', 'vuejs', 'vuets', 'reactjs', 'reactts', 'all'] };
  var st = {}, chosen = {}, k;   // chosen: the framework picked for each language
  for (k in DEF) st[k] = DEF[k];
  for (k in OPTDEF) opt[k] = OPTDEF[k];
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    for (k in DEF) if (VALID[k].indexOf(saved[k]) > -1) st[k] = saved[k];
    if (saved.opt && typeof saved.opt === 'object') for (k in OPTDEF) if (saved.opt[k] === 0 || saved.opt[k] === 1) opt[k] = saved.opt[k];
    if (saved.fws && typeof saved.fws === 'object') for (k in FW) if (typeof saved.fws[k] === 'string') chosen[k] = saved.fws[k];
  } catch (e) {}
  var jump = null;   // a link from the other part carries the choices in the hash: #step-10&f=<json>
  try {
    var hm = /^#([^&]*)&f=(.+)$/.exec(location.hash);
    if (hm) {
      var inc = JSON.parse(decodeURIComponent(hm[2])); jump = hm[1];
      for (k in DEF) if (VALID[k].indexOf(inc[k]) > -1) st[k] = inc[k];
      if (inc.fws && typeof inc.fws === 'object') for (k in FW) if (typeof inc.fws[k] === 'string') chosen[k] = inc.fws[k];
      if (inc.opt && typeof inc.opt === 'object') for (k in OPTDEF) if (inc.opt[k] === 0 || inc.opt[k] === 1) opt[k] = inc.opt[k];
    }
  } catch (e) {}
  document.addEventListener('click', function (ev) {   // links to the other part: add the current choices to the hash
    var a = ev.target.closest && ev.target.closest('a.ext');
    if (!a) return;
    var h = a.getAttribute('href').split('#')[0];
    a.setAttribute('href', h + '#' + (a.getAttribute('href').split('#')[1] || '').split('&')[0] + '&f=' + encodeURIComponent(JSON.stringify({ lang: st.lang, storage: st.storage, db: st.db, view: st.view, fe: st.fe, fws: chosen, opt: opt })));
  }, true);
  function fwOf(lang) {   // the framework for a language: the remembered one if valid, else the first (the default)
    var list = FW[lang];
    if (!list) return 'all';
    for (var i = 0; i < list.length; i++) if (list[i][0] === chosen[lang]) return chosen[lang];
    return list[0][0];
  }
  var fwSel = document.getElementById('fwsel');
  function fillFw() {
    var list = FW[st.lang], html = '';
    if (!list) html = '<option value="all">All</option>';
    else list.forEach(function (o) { html += '<option value="' + o[0] + '">' + o[1] + '</option>'; });
    fwSel.innerHTML = html;
    fwSel.disabled = !list || list.length < 2;
  }
  function apply() {
    // PHP forgets everything between requests, so the in-code store cannot work there: hide it and use the JSON file instead
    var memOpt = document.querySelector('#filters select[data-key="storage"] option[value="mem"]');
    if (st.lang === 'php' && st.storage === 'mem') st.storage = 'json';
    if (memOpt) { memOpt.disabled = st.lang === 'php'; memOpt.hidden = st.lang === 'php'; }
    var fw = fwOf(st.lang);
    document.body.setAttribute('data-fw', fw);
    for (var key in st) document.body.setAttribute('data-' + key, st[key]);
    // the body's data-db is the effective choice: the chosen database for SQL, otherwise the storage kind (or All)
    document.body.setAttribute('data-db', st.storage === 'sql' ? st.db : st.storage);
    var dbSel = document.querySelector('#filters select[data-key="db"]'); if (dbSel) dbSel.disabled = st.storage !== 'sql';
    document.querySelectorAll('#filters select').forEach(function (s) { s.value = s.dataset.key === 'fw' ? fw : st[s.dataset.key]; });
    var off = [], on = [];
    for (var o in OPTDEF) { var mode = document.querySelector('[data-opt="' + o + '"]').dataset.mode; if (mode === 'show' && !opt[o]) off.push(o); if (mode === 'add' && opt[o]) on.push(o); }
    document.body.setAttribute('data-off', off.join(' '));
    document.body.setAttribute('data-on', on.join(' '));
    document.querySelectorAll('[data-opt]').forEach(function (c) { c.checked = !!opt[c.dataset.opt]; });
    try { localStorage.setItem(KEY, JSON.stringify({ lang: st.lang, storage: st.storage, db: st.db, view: st.view, fe: st.fe, fws: chosen, opt: opt })); } catch (e) {}
  }
  document.querySelectorAll('#filters select').forEach(function (s) {
    s.addEventListener('change', function () {
      if (s.dataset.key === 'fw') { if (FW[st.lang]) chosen[st.lang] = s.value; }
      else { st[s.dataset.key] = s.value; if (s.dataset.key === 'lang') fillFw(); }
      apply();
    });
  });
  document.querySelectorAll('[data-opt]').forEach(function (c) { c.addEventListener('change', function () { opt[c.dataset.opt] = c.checked ? 1 : 0; apply(); }); });
  document.getElementById('optreset').addEventListener('click', function () { for (var o in OPTDEF) opt[o] = OPTDEF[o]; apply(); });
  document.getElementById('fltreset').addEventListener('click', function () {
    for (var key in DEF) st[key] = DEF[key];
    chosen = {};   // every language goes back to its first (default) framework
    fillFw();
    apply();
  });
  fillFw();
  apply();
  if (jump) { var jt = document.getElementById(jump); if (jt) setTimeout(function () { jt.scrollIntoView(); }, 50); }
  var hbtns = document.querySelectorAll('.hbtn');
  function closePanels(except) {
    hbtns.forEach(function (b) {
      var open = b === except;
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.getElementById(b.dataset.panel).hidden = !open;
    });
  }
  hbtns.forEach(function (b) {
    b.addEventListener('click', function () { closePanels(b.getAttribute('aria-expanded') === 'true' ? null : b); });
  });
  document.querySelectorAll('#p-chap a').forEach(function (a) { a.addEventListener('click', function () { closePanels(null); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePanels(null); });
  document.addEventListener('click', function (e) { if (!e.target.closest('#filters')) closePanels(null); });
  var cur = document.getElementById('curchap'), names = ['Install', 'Design', 'Structure', 'Connect', 'First call', 'CRUD', 'Request safety', 'Frontend', 'Accounts', 'Docs and Postman', 'Redis', 'Account safety', 'Web basics', 'Running it', 'API polish', 'Email', 'Ship', 'Companies and tags', 'Metrics', 'Webhooks', 'WebSockets', 'File uploads', 'Personal data and privacy', 'Other topics'];
  function whichChapter() {   // the last chapter whose top has scrolled past the header
    var n = 0;
    for (var i = 0; i < names.length; i++) { var el = document.getElementById('step-' + i); if (el && el.getBoundingClientRect().top < 140) n = i; }
    cur.textContent = n + ' ' + names[n];
  }
  window.addEventListener('scroll', whichChapter, { passive: true });
  whichChapter();
  var all = document.querySelectorAll('details.dd');
  document.getElementById('all').addEventListener('click', function () { all.forEach(function (d) { if (d.offsetParent !== null) d.open = true; }); });
  document.getElementById('none').addEventListener('click', function () { all.forEach(function (d) { d.open = false; }); });
  document.querySelectorAll('.cpy').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.closest('figure').querySelector('pre').textContent;
      var done = function (ok) { b.textContent = ok ? 'Copied' : 'Select and copy'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
      try { navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(text, done); }); }
      catch (e) { fallback(text, done); }
    });
  });
  function fallback(text, done) {
    var t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select(); var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(t); done(ok);
  }
})();
