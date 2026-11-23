/* =========================================================
   Portfolio terminal: visitors type commands like "about".
   Opens with any button that has data-term, the >_ button,
   or Ctrl+K / Cmd+K. All text comes from content.js.
   ========================================================= */
(function () {
  const C = window.CONTENT;
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const user = (C.initials || "me").toLowerCase();

  // ---------- build the window ----------
  const wrap = document.createElement("div");
  wrap.className = "term-wrap";
  wrap.hidden = true;
  wrap.innerHTML = `
    <div class="term" role="dialog" aria-modal="true" aria-label="Portfolio terminal">
      <div class="term-bar">
        <button class="term-dot red" data-close aria-label="Close terminal"></button>
        <span class="term-dot yellow"></span><span class="term-dot green"></span>
        <span class="term-title">visitor@${esc(user)}-portfolio ~</span>
        <span class="term-keys">Ctrl+K to toggle</span>
      </div>
      <div class="term-body" id="termBody"></div>
      <form class="term-input" id="termForm" autocomplete="off">
        <span class="term-prompt">❯</span>
        <input id="termInput" type="text" spellcheck="false" autocapitalize="off" aria-label="Type a command" placeholder="type about and press Enter">
      </form>
    </div>`;
  document.body.appendChild(wrap);

  const fab = document.createElement("button");
  fab.className = "term-fab";
  fab.type = "button";
  fab.setAttribute("aria-label", "Open terminal (Ctrl+K)");
  fab.innerHTML = '<span>&gt;_</span>';
  document.body.appendChild(fab);

  const body = wrap.querySelector("#termBody");
  const input = wrap.querySelector("#termInput");
  const form = wrap.querySelector("#termForm");
  const history = [];
  let hIndex = 0, started = false;

  // ---------- output helpers ----------
  const print = (html, cls) => {
    const div = document.createElement("div");
    div.className = "t-line " + (cls || "");
    div.innerHTML = html;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  };
  const box = (lines) => {
    const w = Math.max(...lines.map((l) => l.length)) + 2;
    const top = "┌" + "─".repeat(w + 2) + "┐";
    const bot = "└" + "─".repeat(w + 2) + "┘";
    const mid = lines.map((l) => "│  " + esc(l) + " ".repeat(w - l.length) + "│");
    return `<pre class="t-box">${top}\n${mid.join("\n")}\n${bot}</pre>`;
  };
  const list = (rows) => `<pre class="t-pre">${rows.map((r) => esc(r)).join("\n")}</pre>`;
  const pages = { home: "./", about: "about.html", experience: "experience.html", projects: "projects.html" };

  // ---------- commands ----------
  const commands = {
    help: () => print(`<pre class="t-pre">Available commands:
  <b>about</b>        – who I am
  <b>experience</b>   – career timeline
  <b>projects</b>     – featured projects
  <b>skills</b>       – tools &amp; methods
  <b>education</b>    – degrees &amp; certificates
  <b>contact</b>      – get in touch
  <b>goto</b> &lt;page&gt;  – open home, about, experience or projects
  <b>clear</b>        – clear the screen
  <b>exit</b>         – close the terminal</pre>`),
    about: () => print(box(C.terminalAbout || [C.fullName, C.role])),
    experience: () => print(list((C.experience || []).map((j) => `▸ ${j.role}\n  ${j.company} · ${j.years}`))),
    projects: () => print(list((C.projects || []).map((p) => `▸ ${p.title} (${p.date})\n  ${p.summary}`))),
    skills: () => print(list((C.skills || []).map((g) => `${g.group}:\n  ${g.items.join(", ")}`))),
    education: () => print(list([
      ...(C.education || []).map((e) => `▸ ${e.degree} – ${e.school}`),
      "",
      ...(C.certifications || []).map((c) => `✓ ${c}`)
    ])),
    contact: () => print(`<pre class="t-pre">email    ${esc(C.email)}
phone    ${esc(C.phone)}${C.links.linkedin ? `\nlinkedin <a href="${esc(C.links.linkedin)}" target="_blank" rel="noopener">${esc(C.links.linkedin)}</a>` : ""}${C.links.github ? `\ngithub   <a href="${esc(C.links.github)}" target="_blank" rel="noopener">${esc(C.links.github)}</a>` : ""}</pre>`),
    goto: (arg) => {
      const href = pages[arg];
      if (!href) return print(`Usage: goto home | about | experience | projects`, "t-err");
      print(`Opening ${esc(arg)}…`, "t-ok");
      setTimeout(() => { window.location.href = href; }, 350);
    },
    clear: () => { body.innerHTML = ""; },
    exit: () => close()
  };
  const aliases = { whoami: "about", "who": "about", cv: "experience", work: "projects", ls: "help", "?": "help", cls: "clear", quit: "exit" };

  function run(raw) {
    const text = raw.trim();
    print(`<span class="t-prompt">❯</span> ${esc(text)}`, "t-cmd");
    if (!text) return;
    history.push(text); hIndex = history.length;
    let [cmd, ...rest] = text.toLowerCase().split(/\s+/);
    cmd = aliases[cmd] || cmd;
    if (commands[cmd]) commands[cmd](rest.join(" "));
    else print(`Command not found: ${esc(cmd)}. Type <b>help</b> to see the commands.`, "t-err");
  }

  // ---------- open / close ----------
  function open(cmd) {
    wrap.hidden = false;
    document.body.classList.add("term-open");
    if (!started) {
      started = true;
      print(`Portfolio Terminal v1.0 – type <b>help</b> for commands.`, "t-ok");
      print(`Tip: try <b>about</b>, then <b>projects</b>. ↑/↓ for history.`, "t-dim");
    }
    if (cmd) { input.value = cmd; input.select(); }
    setTimeout(() => input.focus(), 30);
  }
  function close() {
    wrap.hidden = true;
    document.body.classList.remove("term-open");
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); run(input.value); input.value = ""; });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && history.length) { hIndex = Math.max(0, hIndex - 1); input.value = history[hIndex]; e.preventDefault(); }
    if (e.key === "ArrowDown" && history.length) { hIndex = Math.min(history.length, hIndex + 1); input.value = history[hIndex] || ""; e.preventDefault(); }
  });
  wrap.addEventListener("click", (e) => { if (e.target === wrap || e.target.hasAttribute("data-close")) close(); });
  fab.addEventListener("click", () => (wrap.hidden ? open() : close()));
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-term]");
    if (b) { e.preventDefault(); open(b.dataset.term); }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); wrap.hidden ? open() : close(); }
    if (e.key === "Escape" && !wrap.hidden) close();
  });
})();
