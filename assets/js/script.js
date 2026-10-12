(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const grid = document.querySelector('#projectsGrid');
  const input = document.querySelector('#searchInput');
  const buttons = [...document.querySelectorAll('.filter')];
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#noResults');
  const dialog = document.querySelector('#projectDialog');
  const dialogContent = document.querySelector('#dialogContent');
  let category = 'semua';
  const safe = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  // Izinkan HTTPS dan path relatif lokal; tolak skema eksekusi serta URL protokol-relatif.
  const allowedUrl = value => {
    const url = String(value || '').trim();
    if (!url || /[\\\s]/.test(url) || url.startsWith('//')) return '';
    if (/^https:\/\//i.test(url)) { try { return new URL(url).href; } catch { return ''; } }
    return /^(?![a-z][a-z0-9+.-]*:)[a-z0-9_.-]+(?:\/[a-z0-9_.-]+)*\/?$/i.test(url) ? url : '';
  };
  projects.forEach(p => { p.playUrl = allowedUrl(p.playUrl); });
  const customIcons = {"game": "<svg class=\"ui-icon icon-game\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><path class=\"icon-fill\" d=\"M15 23h34l6 22q2 9-6 8l-9-9H24l-9 9q-8 1-6-8z\"/><path d=\"M15 23h34l6 22q2 9-6 8l-9-9H24l-9 9q-8 1-6-8zM22 30v12m-6-6h12M32 23v-7h9v-6\"/><circle class=\"icon-accent\" cx=\"43\" cy=\"32\" r=\"3\"/><circle class=\"icon-accent\" cx=\"49\" cy=\"39\" r=\"3\"/></svg>", "book": "<svg class=\"ui-icon icon-book\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><path class=\"icon-fill\" d=\"M8 15q12-6 24 3 12-9 24-3v35q-12-6-24 3-12-9-24-3z\"/><path d=\"M8 15q12-6 24 3 12-9 24-3v35q-12-6-24 3-12-9-24-3zM32 18v35M15 25l10 3m-10 6 10 3m14-10 10-3m-10 13 10-3\"/><path class=\"icon-accent\" d=\"m44 8 3-5 3 5 5 3-5 3-3 5-3-5-5-3z\"/></svg>", "arrow": "<svg class=\"ui-icon icon-arrow\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M16 48 48 16M19 16h29v29\"/></svg>", "play": "<svg class=\"ui-icon icon-play\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><path class=\"icon-fill\" d=\"m21 12 32 20-32 20z\"/><path d=\"m21 12 32 20-32 20z\"/></svg>"};
  function card(item) {
    const cover = item.image ? `<img class="cover-photo" src="${safe(item.image)}" alt="Sampul ${safe(item.title)}" loading="lazy" decoding="async" width="1280" height="720">` : `<div class="cover-icon" aria-hidden="true">${safe(item.icon)}</div>`;
    return `<article class="project-card"><div class="project-cover ${item.image ? 'has-photo' : ''}" style="--c1:${safe(item.colors[0])};--c2:${safe(item.colors[1])}">${cover}</div><div class="project-body"><div class="card-category"><span class="category-label ${item.category === 'game' ? 'label-game' : 'label-mpi'}">${item.category === 'game' ? 'Game Edukasi' : 'MPI'}</span><span class="level-label">${safe(item.level)}</span></div><h3>${safe(item.title)}</h3><div class="subject-line">${safe(item.subject)}</div><p class="project-description">${safe(item.description)}</p><div class="card-bottom"><div class="project-tags" aria-label="Perangkat penggunaan"><span>HP</span><span>Laptop</span><span>Tablet</span><span>IFP</span></div><div class="card-actions"><button type="button" class="button tertiary" data-details="${safe(item.id)}" aria-label="Lihat detail ${safe(item.title)}">Lihat Detail</button>${item.playUrl ? `<a class="button primary small" href="${safe(item.playUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Mainkan ${safe(item.title)} di tab baru">Mainkan <span aria-hidden="true">${customIcons.arrow}</span></a>` : '<span class="button disabled small">Segera Hadir</span>'}</div></div></div></article>`;
  }
  function render() {
    const query = input.value.trim().toLocaleLowerCase('id');
    const list = projects.filter(p => (category === 'semua' || p.category === category) && [p.title,p.subject,p.level,p.description].join(' ').toLocaleLowerCase('id').includes(query));
    grid.innerHTML = list.map(card).join('');
    count.textContent = `${list.length} karya ditampilkan`;
    empty.hidden = list.length > 0;
  }
  buttons.forEach(b => b.addEventListener('click', () => {category = b.dataset.category;buttons.forEach(x => {const yes=x===b;x.classList.toggle('active',yes);x.setAttribute('aria-pressed', String(yes));});render();}));
  input.addEventListener('input',render);
  grid.addEventListener('click', e => {const btn=e.target.closest('[data-details]');if(!btn)return;const p=projects.find(x=>x.id===btn.dataset.details);if(!p)return;
    dialogContent.innerHTML = `<div class="dialog-art ${p.image ? 'has-photo' : ''}" style="--c1:${safe(p.colors[0])};--c2:${safe(p.colors[1])}">${p.image ? `<img src="${safe(p.image)}" alt="Sampul ${safe(p.title)}">` : safe(p.icon)}</div><div class="dialog-body"><span class="section-kicker">${p.category==='game'?customIcons.game + ' GAME EDUKASI':customIcons.book + ' MEDIA PEMBELAJARAN INTERAKTIF'}</span><h2 id="dialogTitle">${safe(p.title)}</h2><p>${safe(p.description)}</p><div class="detail-facts"><span><b>Materi:</b> ${safe(p.subject)}</span><span><b>Jenjang:</b> ${safe(p.level)}</span><span><b>Perangkat:</b> HP, Laptop, Tablet, IFP</span></div><h3>Fitur Karya</h3><ul>${p.features.map(f=>`<li>${safe(f)}</li>`).join('')}</ul>${p.playUrl ? `<a class="button primary" href="${safe(p.playUrl)}" target="_blank" rel="noopener noreferrer">${customIcons.play} Buka Karya di Tab Baru</a>` : '<p class="not-ready">File asli belum ditambahkan ke website. Tombol main akan tersedia setelah integrasi.</p>'}</div>`;
    if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
  });
  const closeDialog = () => { if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); };
  document.querySelector('#closeDialog').addEventListener('click',closeDialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog();});
  render();
})();
