(() => {
  'use strict';
  const menu = document.querySelector('#menuToggle');
  const links = document.querySelector('#navLinks');
  if (menu && links) {
    const closeMenu = () => { links.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Buka menu'); };
    menu.addEventListener('click', () => {const opened=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Tutup menu':'Buka menu');});
    links.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => {if(e.key==='Escape'){closeMenu();}});
  }
  const year = document.querySelector('#year');
  if(year) year.textContent = new Date().getFullYear();
})();
