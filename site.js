/* STUDIO HONG — shared site behaviour (nav, work cards, video modal) */
(function () {
  const GENRES = window.STUDIO_HONG_GENRES || [];
  const WORKS = window.STUDIO_HONG_WORKS || [];
  const genreOf = (k) => GENRES.find((g) => g.key === k) || { ko: '', en: k };
  const genresOf = (w) => (Array.isArray(w.genre) ? w.genre : [w.genre]).filter(Boolean);
  const hasGenre = (w, k) => genresOf(w).includes(k);
  function genreLabel(w) {
    const gs = genresOf(w).map(genreOf);
    if (!gs.length) return '<div class="work-genre tbd-genre">장르 확인 필요</div>';
    return `<div class="work-genre">${gs.map((g) => esc(g.ko)).join(' / ')}<span>${gs.map((g) => esc(g.en)).join(' / ')}</span></div>`;
  }

  /* ---------- nav ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.mobile-menu a').forEach((a) =>
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---------- work card ---------- */
  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function workCard(w, i, opts = {}) {
    const hasVideo = !!w.youtubeId;
    const tag = hasVideo ? 'button' : 'div';
    const thumbSrc = w.thumb || (hasVideo ? `https://i.ytimg.com/vi/${w.youtubeId}/maxresdefault.jpg` : '');
    const num = String(i + 1).padStart(2, '0');

    const thumb = thumbSrc
      ? `<img src="${esc(thumbSrc)}" alt="${esc(w.title)}" loading="lazy" ${!w.thumb && hasVideo ? `onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${w.youtubeId}/hqdefault.jpg'"` : ''}>`
      : `<div class="thumb-empty"><b>${num}</b>썸네일 · 유튜브 링크 입력 예정</div>`;

    const info = [w.year, w.runtime].filter(Boolean).join(' · ');
    return `
      <${tag} class="work ${opts.lead ? 'lead' : ''}" ${hasVideo ? `data-yt="${esc(w.youtubeId)}" data-idx="${i}" aria-label="${esc(w.title || '작품')} 재생"` : ''}>
        <div class="work-thumb">
          ${thumb}
          ${hasVideo ? '<span class="play"><i></i>PLAY</span>' : ''}
        </div>
        <div class="work-meta">
          ${genreLabel(w)}
          <div class="work-info">${esc(info)}</div>
          ${w.title ? `<h3 class="work-title">${esc(w.title)}</h3>` : `<h3 class="work-title tbd">작품 제목 입력 예정</h3>`}
          ${w.desc ? `<p class="work-desc">${esc(w.desc)}</p>` : `<p class="work-desc tbd">짧은 작품 소개 입력 예정</p>`}
        </div>
      </${tag}>`;
  }

  /* ---------- modal ---------- */
  let modal;
  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <button class="modal-close" aria-label="닫기">×</button>
      <div class="modal-inner">
        <div class="modal-frame"></div>
        <div class="modal-cap"><div class="cap-l"></div><a class="cap-r" target="_blank" rel="noopener">YouTube에서 보기 ↗</a></div>
      </div>`;
    document.body.appendChild(modal);
    const close = () => {
      modal.classList.remove('open');
      setTimeout(() => (modal.querySelector('.modal-frame').innerHTML = ''), 300);
    };
    modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('.modal-close')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    return modal;
  }

  function openVideo(id, w) {
    const m = ensureModal();
    m.querySelector('.modal-frame').innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="${esc(w && w.title)}"></iframe>`;
    const gs = w ? genresOf(w).map((k) => genreOf(k).ko).join(' / ') : '';
    m.querySelector('.cap-l').innerHTML = `<span class="work-genre">${esc(gs)}</span>&nbsp;&nbsp;${esc((w && w.title) || '')}`;
    m.querySelector('.cap-r').href = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
    requestAnimationFrame(() => m.classList.add('open'));
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.work[data-yt]');
    if (!card) return;
    openVideo(card.dataset.yt, WORKS[+card.dataset.idx]);
  });

  /* ---------- reveal ---------- */
  function observeReveals(root = document) {
    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    root.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
  }

  window.StudioHong = { GENRES, WORKS, genreOf, genresOf, hasGenre, workCard, openVideo, observeReveals, esc };
})();
