(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  $('#y').textContent = new Date().getFullYear();

  // Mobile menu
  const menu = $('#menu'), nav = $('#nav');
  const setMenu = o => { nav.classList.toggle('open', o); menu.setAttribute('aria-expanded', o); };
  menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('#nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Soil probe simulation (illustrative)
  const depths = [10, 20, 30, 40, 60], root = [20, 30, 40];
  const box = $('#layers'), verdict = $('#verdict');
  box.innerHTML = depths.map(d => `<div class="layer${root.includes(d) ? ' root' : ''}"><span>${d} cm</span><div class="bar"><i></i></div><b>0%</b></div>`).join('');
  const rows = $$('.layer', box);
  let t = 0;
  const tick = () => {
    t += 1;
    const vals = depths.map((d, i) => Math.round(Math.min(95, Math.max(8, 52 + 30 * Math.sin(t / 3.2 - i * 0.7) + i * 4))));
    rows.forEach((r, i) => { $('i', r).style.width = vals[i] + '%'; $('b', r).textContent = vals[i] + '%'; });
    const avg = depths.reduce((s, d, i) => s + (root.includes(d) ? vals[i] : 0), 0) / root.length;
    verdict.textContent = avg < 45 ? `Root zone at ${Math.round(avg)}%: irrigate` : `Root zone at ${Math.round(avg)}%: hold, soil is fine`;
  };
  tick();
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(tick, 1900);

  // Icons (Simple Icons CDN; text label stays if an icon is missing)
  const icon = (slug, cls = 'ico') => { const i = new Image(); i.className = cls; i.alt = ''; i.loading = 'lazy'; i.src = `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`; i.onerror = () => i.remove(); return i; };
  $$('[data-i]').forEach(el => el.prepend(icon(el.dataset.i)));
  const mq = $('#mq');
  const stack = [['c','C'],['cplusplus','C++'],['python','Python'],['arduino','Arduino'],['espressif','ESP32'],['stmicroelectronics','STM32'],['raspberrypi','Raspberry Pi'],['tensorflow','TensorFlow'],['opencv','OpenCV'],['kicad','KiCad'],['altiumdesigner','Altium'],['sqlite','SQLite'],['mqtt','MQTT'],['docker','Docker'],['git','Git'],['javascript','JavaScript']];
  [...stack, ...stack].forEach(([s, n]) => { const sp = document.createElement('span'); sp.append(icon(s), n); mq.append(sp); });

  // FLA7PRO platform link: paste the URL in data-url on #platform in index.html
  const pl = $('#platform'), url = pl.dataset.url.trim();
  if (url) { pl.href = url; pl.target = '_blank'; pl.rel = 'noopener'; } else { pl.setAttribute('aria-disabled', 'true'); pl.textContent = 'Platform link coming soon'; }

  // Tilt
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) $$('.tilt').forEach(t => {
    t.addEventListener('pointermove', e => { const b = t.getBoundingClientRect(); t.style.setProperty('--ry', ((e.clientX - b.left) / b.width - .5) * 8 + 'deg'); t.style.setProperty('--rx', (.5 - (e.clientY - b.top) / b.height) * 8 + 'deg'); });
    t.addEventListener('pointerleave', () => { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); });
  });

  // Reveal for timeline entries and project cards only
  const rv = $$('.time li, .skills > div, .comp article, .certs div, .cgrid a');
  rv.forEach((el, i) => { el.classList.add('rv'); el.style.transitionDelay = (i % 3) * 80 + 'ms'; });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  rv.forEach(el => io.observe(el));

  // Cursor spotlight on cards
  $$('.card').forEach(c => c.addEventListener('pointermove', e => {
    const b = c.getBoundingClientRect();
    c.style.setProperty('--x', e.clientX - b.left + 'px');
    c.style.setProperty('--y', e.clientY - b.top + 'px');
  }));

  // PCB lightbox
  const lb = $('#lb'), lbImg = $('img', lb);
  $$('.shots button').forEach(b => b.addEventListener('click', () => { lbImg.src = b.dataset.src; lbImg.alt = $('img', b).alt; lb.showModal(); }));
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
})();
