(function(){
  const $ = (sel, ctx)=> (ctx||document).querySelector(sel);
  const el = (tag, cls, html)=>{ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; };
  const escapeHtml = (s)=> (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // ---------- nav ----------
  function renderNav(){
    const wrap = $('#navLinks');
    SITE.nav.forEach(item=>{
      const a = el('a', null, escapeHtml(item.label));
      a.href = item.href;
      wrap.appendChild(a);
    });
    $('#logoText').textContent = SITE.hero.eyebrow ? 'ABHISHEK.D' : 'ABHISHEK.D';
  }

  function wireMobileNav(){
    const toggle = $('#navToggle');
    const links = $('#navLinks');
    toggle.addEventListener('click', ()=>{
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (e)=>{
      if(e.target.tagName === 'A'){ links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }

  function wireScrollSpy(){
    const links = Array.from(document.querySelectorAll('#navLinks a'));
    const sections = SITE.nav.map(n=>document.querySelector(n.href)).filter(Boolean);
    if(!sections.length) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const id = '#' + entry.target.id;
          links.forEach(l=> l.classList.toggle('current', l.getAttribute('href') === id));
        }
      });
    }, {rootMargin:'-40% 0px -50% 0px'});
    sections.forEach(s=>io.observe(s));
  }

  // ---------- hero ----------
  function renderHero(){
    const h = SITE.hero;
    $('#heroAvatar').src = h.avatar;
    $('#heroAvatar').alt = 'Portrait photo';
    $('#heroEyebrow').innerHTML = escapeHtml(h.eyebrow);
    $('#heroAvail').textContent = h.availability;
    $('#heroHeadline').innerHTML = h.headline.map(escapeHtml).join('<br>') + '<span class="cursor" aria-hidden="true"></span>';
    $('#heroSub').textContent = h.sub;
    $('#ctaPrimary').textContent = h.ctaPrimary.label + ' →';
    $('#ctaPrimary').href = h.ctaPrimary.href;
    $('#ctaSecondary').textContent = h.ctaSecondary.label;
    $('#ctaSecondary').href = h.ctaSecondary.href;
    const soc = $('#heroSocials');
    h.socials.forEach(s=>{
      const a = el('a', null, escapeHtml(s.label));
      a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
      soc.appendChild(a);
    });
  }

  // ---------- about ----------
  function renderAbout(){
    const bio = $('#aboutBio');
    SITE.about.bio.forEach(p=> bio.appendChild(el('p', null, escapeHtml(p))));
    const facts = $('#aboutFacts');
    SITE.about.facts.forEach(f=>{
      const row = el('div', 'fact-row');
      row.innerHTML = `<dt>${escapeHtml(f.label)}</dt><dd>${escapeHtml(f.value)}</dd>`;
      facts.appendChild(row);
    });
  }

  // ---------- projects ----------
  const STATUS_LABEL = {live:'● LIVE', bot:'● ACTIVE BOT', build:'● BUILDING'};
  let activeTag = 'All';

  function renderFilterChips(){
    const wrap = $('#filterChips');
    const tagSet = new Set();
    SITE.projects.forEach(p=> (p.tags||[]).forEach(t=>tagSet.add(t)));
    const tags = ['All', ...Array.from(tagSet)];
    tags.forEach(tag=>{
      const chip = el('button', 'chip' + (tag==='All' ? ' active' : ''), escapeHtml(tag));
      chip.type = 'button';
      chip.dataset.tag = tag;
      chip.addEventListener('click', ()=>{
        activeTag = tag;
        wrap.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.tag === tag));
        applyFilter();
      });
      wrap.appendChild(chip);
    });
  }

  function applyFilter(){
    document.querySelectorAll('#projectsList .card').forEach(card=>{
      const tags = (card.dataset.tags || '').split('|');
      const show = activeTag === 'All' || tags.includes(activeTag);
      card.classList.toggle('hidden-by-filter', !show);
    });
  }

  function renderProjects(){
    const list = $('#projectsList');
    SITE.projects.forEach(p=>{
      const card = el('div', 'card');
      card.dataset.tags = (p.tags||[]).join('|');
      const statusClass = p.status || 'build';
      const linkHtml = p.link
        ? `<a class="card-link" href="${escapeHtml(p.link)}" target="_blank" rel="noopener">${escapeHtml(p.linkLabel || 'View project →')}</a>`
        : `<span class="card-link" style="color:var(--text-dim);">${escapeHtml(p.linkLabel || 'Not live yet')}</span>`;
      card.innerHTML = `
        <div class="card-top">
          <div>
            <div class="card-title">${escapeHtml(p.emoji||'')} ${escapeHtml(p.name)}</div>
            ${p.meta ? `<div class="card-meta">${escapeHtml(p.meta)}</div>` : ''}
          </div>
          <span class="status ${statusClass}">${STATUS_LABEL[statusClass] || '● BUILDING'}</span>
        </div>
        <p class="card-desc">${escapeHtml(p.description)}</p>
        <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        ${linkHtml}
      `;
      list.appendChild(card);
    });
  }

  // ---------- skills ----------
  function renderSkills(){
    const wrap = $('#skillGroups');
    SITE.skillGroups.forEach(g=>{
      const group = el('div', 'skill-group');
      group.innerHTML = `<h3>${escapeHtml(g.title)}</h3><ul>${g.items.map(i=>`<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
      wrap.appendChild(group);
    });
  }

  // ---------- timeline ----------
  function renderTimeline(){
    const wrap = $('#timelineList');
    SITE.timeline.forEach(t=>{
      const row = el('div', 'commit');
      row.innerHTML = `
        <div class="commit-hash"><span class="hash">${escapeHtml(t.hash)}</span><br>${escapeHtml(t.date)}</div>
        <div class="commit-body">
          <span class="commit-tag ${escapeHtml(t.type||'added')}">${escapeHtml(t.type||'added')}</span>
          <div class="commit-title">${escapeHtml(t.title)}</div>
          <div class="commit-desc">${escapeHtml(t.description)}</div>
        </div>
      `;
      wrap.appendChild(row);
    });
  }

  // ---------- achievements (conditional) ----------
  function renderAchievements(){
    if(!SITE.achievements || !SITE.achievements.length) return;
    const section = $('#achievements');
    section.hidden = false;
    const grid = $('#achvGrid');
    SITE.achievements.forEach(a=>{
      const card = el('div', 'achv-card');
      const titleHtml = a.link
        ? `<a href="${escapeHtml(a.link)}" target="_blank" rel="noopener">${escapeHtml(a.title)}</a>`
        : escapeHtml(a.title);
      card.innerHTML = `<div class="achv-title">${titleHtml}</div><div class="achv-meta">${escapeHtml(a.meta||'')}</div>${a.description ? `<div class="achv-desc">${escapeHtml(a.description)}</div>` : ''}`;
      grid.appendChild(card);
    });
  }

  // ---------- contact ----------
  function renderContact(){
    const c = SITE.contact;
    $('#contactHeading').textContent = c.heading;
    $('#contactBody').textContent = c.body;
    const emailLink = $('#contactEmail');
    emailLink.textContent = c.email + ' →';
    emailLink.href = 'mailto:' + c.email;
    const li = SITE.hero.socials.find(s=>s.label === 'LinkedIn');
    if(li) $('#contactLinkedIn').href = li.url;
  }

  function wireContactForm(){
    const form = $('#contactForm');
    const msg = $('#formMsg');
    const submitBtn = $('#formSubmit');
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const endpoint = SITE.contact.formEndpoint;
      msg.className = 'form-msg';
      if(!endpoint || endpoint.includes('YOUR_FORM_ID')){
        msg.textContent = 'The contact form isn\u2019t connected yet — opening your email app instead.';
        msg.classList.add('show','error');
        const name = $('#cf-name').value, email = $('#cf-email').value, message = $('#cf-message').value;
        window.location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${encodeURIComponent(message + '\n\n' + email)}`;
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      try{
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if(res.ok){
          msg.textContent = 'Message sent — I\u2019ll get back to you soon.';
          msg.className = 'form-msg show success';
          form.reset();
        } else {
          throw new Error('Request failed');
        }
      }catch(err){
        msg.textContent = 'Something went wrong. Email me directly at ' + SITE.contact.email + '.';
        msg.className = 'form-msg show error';
      }finally{
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }

  // ---------- reveal on scroll ----------
  function wireReveal(){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.1});
    document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));
  }

  // ---------- init ----------
  document.title = SITE.meta.title;
  $('meta[name="description"]').setAttribute('content', SITE.meta.description);

  renderNav();
  renderHero();
  renderAbout();
  renderFilterChips();
  renderProjects();
  applyFilter();
  renderSkills();
  renderTimeline();
  renderAchievements();
  renderContact();

  wireMobileNav();
  wireScrollSpy();
  wireContactForm();
  wireReveal();
})();
