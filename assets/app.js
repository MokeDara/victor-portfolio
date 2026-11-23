/* =========================================================
   Builds every page from content.js.
   You normally never need to edit this file.
   ========================================================= */
(function () {
  const C = window.CONTENT;
  const page = document.body.dataset.page;
  const $ = (s) => document.querySelector(s);

  // ---------- small helpers ----------
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const each = (arr, fn) => (arr || []).map(fn).join("");

  const icons = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.8 18 5.1 18 5.1c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.6 2.3 4.5 6.2 4.5c2.2 0 3.6 1.2 4.3 2.4h3c.7-1.2 2.1-2.4 4.3-2.4 3.9 0 5.8 4.1 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>'
  };

  const arrowSvg = (cls) =>
    `<svg class="${cls}" viewBox="0 0 46 30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 26C14 22 26 14 40 5"/><path d="M31 5h9v8"/></svg>`;
  const sideArrow = '<svg viewBox="0 0 44 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 9c10 5 24 4 38-3"/><path d="M33 3l7 3-5 6"/></svg>';

  // Image or a coloured placeholder
  const img = (src, alt, label, a, b) =>
    src
      ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
      : `<div class="ph-art" style="--a:${a || "#2c55d1"};--b:${b || "#15130d"}"><span>${esc(label)}</span></div>`;
  const photo = (src, alt) => img(src, alt, C.initials, "#f2c443", "#f05a3c");

  const avatar = (cls) => { const s = C.avatar || C.photo; return `<div class="avatar ${cls || ""}">${s ? `<img src="${esc(s)}" alt="${esc(C.name)}">` : esc(C.initials)}</div>`; };

  const socials = () => {
    let s = "";
    if (C.links.linkedin) s += `<a class="social li" href="${esc(C.links.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>`;
    if (C.links.github) s += `<a class="social gh" href="${esc(C.links.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>`;
    s += `<a class="social mail" href="mailto:${esc(C.email)}" aria-label="Email">${icons.mail}</a>`;
    return s;
  };

  // ---------- NAV ----------
  const tabs = [
    ["index", "Home", "★", "./"],
    ["about", "About", "●", "about.html"],
    ["experience", "Experience", "■", "experience.html"],
    ["projects", "Projects", "◆", "projects.html"]
  ];
  $("#nav").outerHTML = `
  <nav class="nav" id="topnav">
    <div class="nav-left">
      <a class="logo" href="./" aria-label="Home">${esc(C.initials)}</a>
      <div class="nav-tabs" style="display:contents">
        ${each(tabs, ([id, label, ic, href]) => `<a class="tab ${page === id ? "active" : ""}" href="${href}"><span aria-hidden="true">${ic}</span>${label}</a>`)}
      </div>
      <button class="menu-btn" id="menuBtn" aria-label="Menu">MENU</button>
    </div>
    <div class="nav-right">
      ${socials()}
      <a class="btn-outline" href="#contact">${icons.heart} Contact</a>
    </div>
  </nav>`;
  // mobile menu
  const nav = $("#topnav");
  const tabsWrap = nav.querySelector(".nav-tabs");
  const fixMobile = () => { tabsWrap.style.display = window.innerWidth <= 880 ? "" : "contents"; };
  fixMobile(); window.addEventListener("resize", fixMobile);
  $("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));

  // ---------- SHARED SECTIONS ----------
  const smiley = `<svg class="smiley" viewBox="0 0 110 110"><circle cx="55" cy="55" r="52" fill="#f2c443" stroke="#15130d" stroke-width="3"/><rect x="38" y="34" width="7" height="18" rx="3.5" fill="#15130d"/><rect x="65" y="34" width="7" height="18" rx="3.5" fill="#15130d"/><circle cx="30" cy="62" r="7" fill="#f6908a"/><circle cx="80" cy="62" r="7" fill="#f6908a"/><path d="M33 66c10 16 34 16 44 0" fill="none" stroke="#15130d" stroke-width="4" stroke-linecap="round"/></svg>`;

  const contactSection = () => `
  <section class="contact" id="contact">
    <div class="wrap">
      ${smiley}
      <h2 class="display">Let's talk</h2>
      <p class="lead">${esc(C.contactLine)}</p>
      <div class="contact-card-wrap">
        <div class="profile-note">
          <div class="who">${avatar()} ${esc(C.name)}</div>
          ${esc(C.contactNote)}
        </div>
        <div class="contact-card">
          <div class="hand">let's make something together</div>
          <div class="display">Contact</div>
          <div class="row">
            <a class="link-arrow" href="mailto:${esc(C.email)}">Drop a line ↗</a>
            ${C.links.linkedin ? `<a class="link-arrow" href="${esc(C.links.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
            ${C.cvFile ? `<a class="link-arrow" href="${esc(C.cvFile)}" target="_blank" rel="noopener">Download CV ↓</a>` : ""}
          </div>
          <p class="mono" style="font-size:12px;margin:18px 0 0">${esc(C.email)} · ${esc(C.phone)}</p>
        </div>
      </div>
    </div>
  </section>`;

  const footer = () => `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-top">
        <div>
          <div class="display">${esc(C.name)}</div>
          <div class="role"><span class="dot"></span>${esc(C.role)}</div>
        </div>
        <div>
          <div class="footer-links">${each(tabs, ([, label, , href]) => `<a href="${href}">${label}</a>`)}</div>
          <div class="footer-social">${socials()}</div>
        </div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(C.fullName)}</span><span class="hand" style="font-size:16px">made with care</span></div>
    </div>
  </footer>`;

  const curve = `<svg class="curve-sep" viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 38 C300 -8 900 -8 1200 30" fill="none" stroke="#c9bfa8" stroke-width="1.5"/></svg>`;

  const chips = () => `<div class="chips">${each(C.chips, (c) =>
    `<span class="chip-pair"><span class="chip ${c.color}">${esc(c.label)}</span><span class="chip-emoji ${c.color}" aria-hidden="true">${c.emoji || ""}</span></span>`)}</div>`;

  const folderColors = { blue: ["#2c55d1", "#0e2a80"], ink: ["#3a372d", "#000"], yellow: ["#f05a3c", "#15130d"], pink: ["#2c55d1", "#15130d"] };
  // Folders stack on scroll: each tab sits a step further right,
  // so the tabs of the folders underneath stay visible.
  const folder = (p, i, id) => `
    <article class="folder f-${p.color || "blue"}" style="--i:${i}"${id ? ` id="${id}"` : ""}>
      <div class="folder-tab">✦ Project ${String(i + 1).padStart(2, "0")}</div>
      <div class="folder-body">
        <div class="folder-copy">
          ${p.date ? `<div class="meta"><span class="dot"></span>${esc(p.date)}</div>` : ""}
          <h3>${esc(p.title)}</h3>
          <div class="cat">${esc(p.category)}</div>
          <p>${esc(p.summary)}</p>
          ${p.points && p.points.length ? `<ul>${each(p.points, (x) => `<li>${esc(x)}</li>`)}</ul>` : ""}
          ${p.link ? `<a class="link-arrow" href="${esc(p.link)}" target="_blank" rel="noopener">${/github\.com/.test(p.link) ? "View on GitHub ↗" : "View live ↗"}</a>` : ""}
          <div class="tags">${each(p.tags, (t) => `<span class="tag">${esc(t)}</span>`)}</div>
        </div>
        <div class="shot taped">${img(p.image, p.title, p.title, ...(folderColors[p.color] || []))}</div>
      </div>
    </article>`;

  const pageHead = (kicker, title) =>
    `<header class="page-head"><div class="wrap"><div class="hand">${esc(kicker)}</div><h1 class="display">${esc(title)}</h1></div></header>`;

  // ---------- PAGES ----------
  let html = "";

  if (page === "index") {
    const n = C.heroNotes || [];
    const noteColors = ["c-mint", "c-sand", "c-yellow hand-note", "c-mint hand-note"];
    // where each sticker sits: 0 top-left, 1 top-right, 2 bottom-left, 3 bottom-right
    const slots = n.length === 3 ? [1, 2, 3] : [0, 1, 2, 3];
    html += `
    <section class="hero">
      <div class="wrap" style="position:relative">
        <div class="hero-kicker">my name is</div>
        <div class="hero-stage">
          ${each(n.slice(0, 4), (t, i) => { const s = slots[i]; return `<span class="note ${noteColors[s]} hn-${s}">${esc(t)}</span>`; })}
          ${arrowSvg("hero-arrow ha-l")}${arrowSvg("hero-arrow ha-r")}
          <div class="name-box"><div class="display">${esc(C.shortName)}</div></div>
        </div>
        <div><span class="hero-status"><span class="dot"></span>${esc(C.status)}</span></div>
        ${avatar("left")}${avatar("right")}
        <h1>${esc(C.headline)}</h1>
        <div class="hero-actions">
          <a class="btn" href="#contact"><span class="sq">↗</span>Contact me</a>
          <button class="btn-code" type="button" data-term=""><span class="prompt">&gt;</span> about<span class="caret"></span></button>
          <span class="hero-icons">
          ${C.links.github ? `<a class="hero-icon" href="${esc(C.links.github)}" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${icons.github}</a>` : ""}
          ${C.links.linkedin ? `<a class="hero-icon" href="${esc(C.links.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${icons.linkedin}</a>` : ""}
          </span>
        </div>
        <p class="term-hint">click the code button and type <b>about</b> ✦ or press Ctrl+K</p>
      </div>
    </section>
    ${curve}
    <section class="about-teaser">
      <div class="wrap">
        <div class="hand" style="text-align:left;font-size:17px;margin:-40px 0 30px">about me!</div>
        <div class="whats-up">what's up</div>
        <div class="about-grid">
          <div class="polaroid taped tilt-l"><div class="ph">${photo(C.photo, C.name)}</div><div class="cap">${new Date().getFullYear()}</div></div>
          <p class="big-hand">${esc(C.intro)}</p>
          <div class="polaroid taped tilt-r"><div class="ph">${img(C.workspacePhoto, "Workspace", "at work", "#1faa59", "#15130d")}</div><div class="cap">${esc(C.workspaceCaption || "suited up")}</div></div>
        </div>
        ${chips()}
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="section-title">
          <p class="kicker">explore my work!</p>
          <h2 class="display">Featured<br>Works</h2>
          <div class="tape-note">A few projects I helped plan, build and deliver.</div>
        </div>
        <div class="folder-stack">${each(C.projects, (p, i) => folder(p, i))}</div>
        <div class="worked">
          <p class="kicker">worked with</p>
          <div class="worked-row">${each(C.workedWith, (w) => `<span>${esc(w)}</span>`)}</div>
        </div>
      </div>
    </section>`;
  }

  if (page === "about") {
    const lastJob = (C.experience || []);
    html += pageHead("hello again!", "About");
    html += `
    <nav class="section-nav">
      <a href="#bio" class="c-yellow">● Main bio</a>
      <a href="#how" class="c-pink">◆ How I work</a>
      <a href="#work" class="c-blue">+ Work</a>
    </nav>
    <section id="bio" style="padding-top:30px">
      <div class="wrap">
        <span class="label">Main bio</span>
        <div class="boxed">
          <div class="bio-grid">
            <div>
              <p class="big-hand">${esc(C.intro)}</p>
              ${each(C.bio, (p) => `<p>${esc(p)}</p>`)}
              ${each(C.bioNotes, (p, i) => `<div class="sticky ${i % 2 ? "c-sand" : "c-sand"}">${esc(p)}</div>`)}
            </div>
            <div class="bio-photo">
              <div class="polaroid taped tilt-r" style="width:180px"><div class="ph">${photo(C.photo, C.name)}</div><div class="cap">${new Date().getFullYear()}</div></div>
              <span class="note c-yellow name-tag">${esc(C.shortName)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how">
      <div class="wrap">
        <span class="label pink">How I work</span>
        <div class="boxed pink">
          ${each(C.howIWork, (h) => `
            <div class="story-row">
              <div class="sticky c-${h.color || "sand"}"><h3>${esc(h.title)}</h3>${esc(h.text)}</div>
              <div class="arrow-note">${sideArrow}<span>${esc(h.note)}</span></div>
            </div>`)}
        </div>
      </div>
    </section>
    <section id="work">
      <div class="wrap">
        <span class="label blue">Work</span>
        <div class="boxed blue">
          <ul class="work-list">
            ${each(lastJob, (j) => `<li><span class="sq"></span><b>${esc(j.role)}</b><span class="co">${esc(j.company)}</span><span class="yr">${esc(j.years)}</span></li>`)}
          </ul>
        </div>
        <div style="margin-top:22px"><a class="btn" href="experience.html"><span class="sq">→</span>Full experience</a></div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <span class="label green">Skills</span>
        <div class="boxed green">
          ${chips()}
          <div style="margin-top:30px">
            ${each(C.skills, (g) => `<div class="skill-group"><h4>${esc(g.group)}</h4><div class="skill-items">${each(g.items, (s) => `<span>${esc(s)}</span>`)}</div></div>`)}
          </div>
          <p class="mono" style="font-size:12px;margin:10px 0 0">Languages: ${esc((C.languages || []).join(" · "))}</p>
        </div>
      </div>
    </section>`;
  }

  if (page === "experience") {
    html += pageHead("where I've been", "Experience");
    html += `
    <section style="padding-top:20px">
      <div class="wrap">
        <span class="label">Work</span>
        <div class="timeline">
          ${each(C.experience, (j) => `
          <div class="t-item">
            <div class="t-card">
              <div class="t-head">
                <div><h3>${esc(j.role)}</h3><div class="co">${esc(j.company)} · ${esc(j.location)}</div></div>
                <span class="t-date">${esc(j.dates)}</span>
              </div>
              ${j.highlight ? `<div class="t-highlight">★ ${esc(j.highlight)}</div>` : ""}
              <ul>${each(j.points, (p) => `<li>${esc(p)}</li>`)}</ul>
              <div class="tags">${each(j.tags, (t) => `<span class="tag">${esc(t)}</span>`)}</div>
            </div>
          </div>`)}
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <span class="label pink">Leadership</span>
        <div class="grid-2" style="margin-top:20px">
          ${each(C.leadership, (l) => `
          <div class="mini-card">
            <h4>${esc(l.role)}</h4><div class="co">${esc(l.company)}${l.dates ? " · " + esc(l.dates) : ""}</div>
            <ul>${each(l.points, (p) => `<li>${esc(p)}</li>`)}</ul>
          </div>`)}
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <span class="label blue">Education</span>
        <div class="grid-2" style="margin-top:20px">
          ${each(C.education, (e) => `
          <div class="mini-card">
            <h4>${esc(e.degree)}</h4><div class="co">${esc(e.school)}</div>
            <div class="mono" style="font-size:11px;margin-top:8px">${esc(e.dates)}</div>
            ${e.note ? `<div class="note-line">${esc(e.note)}</div>` : ""}
          </div>`)}
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <span class="label green">Certifications</span>
        <ul class="cert-list" style="margin-top:20px">${each(C.certifications, (c) => `<li>✓ ${esc(c)}</li>`)}</ul>
      </div>
    </section>`;
  }

  if (page === "projects") {
    const cols = { blue: ["#2c55d1", "#0e2a80"], ink: ["#3a372d", "#000"], yellow: ["#f2c443", "#f05a3c"], pink: ["#f6488a", "#2c55d1"] };
    html += pageHead("explore my work!", "Featured Works");
    html += `
    <section style="padding-top:30px">
      <div class="wrap">
        <div class="p-grid">
          ${each(C.projects, (p, i) => `
          <a class="p-card" href="./#p${i}">
            <div class="p-card-head"><span class="tabbed"><span class="dot" style="background:#15130d"></span>${esc(p.date || "Project " + String(i + 1).padStart(2, "0"))}</span></div>
            <div class="frame"><div class="shot">${img(p.image, p.title, p.title, ...(cols[p.color] || []))}</div></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.summary)}</p>
          </a>`)}
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="section-title" style="margin-bottom:40px"><p class="kicker">the details</p></div>
        <div class="folder-stack">${each(C.projects, (p, i) => folder(p, i, "pd" + i))}</div>
      </div>
    </section>`;
  }

  html += contactSection() + footer();
  $("#app").innerHTML = html;

  // Project cards on the Projects page scroll to their details
  if (page === "projects") {
    document.querySelectorAll(".p-card").forEach((a, i) => {
      a.setAttribute("href", "#pd" + i);
    });
  }
})();
