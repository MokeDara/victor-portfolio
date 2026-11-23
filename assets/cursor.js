/* =========================================================
   Name lens: a square with corner handles that drifts slowly
   back and forth across your name on the home page, inverting
   the colours underneath. It does not follow the mouse.
   Turn it off with  cursorLens: false  in content.js.
   Visitors who prefer less motion see it resting still.
   ========================================================= */
(function () {
  const C = window.CONTENT || {};
  if (C.cursorLens === false) return;
  const box = document.querySelector(".name-box");
  if (!box) return;                                   // only on the home page
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // two layers that move together: the inverting square, and the handles on top
  const lens = document.createElement("div");
  lens.className = "lens";
  lens.setAttribute("aria-hidden", "true");
  const frame = document.createElement("div");
  frame.className = "lens-frame";
  frame.setAttribute("aria-hidden", "true");
  frame.innerHTML = '<i class="h tl"></i><i class="h tr"></i><i class="h bl"></i><i class="h br"></i>';
  document.body.append(lens, frame);
  const layers = [lens, frame];

  const SPEED = 2600;     // bigger = slower drift
  let shown = false;

  function tick(t) {
    const r = box.getBoundingClientRect();
    const onScreen = r.bottom > 40 && r.top < innerHeight - 40;
    const termOpen = document.body.classList.contains("term-open");
    const show = onScreen && !termOpen;
    if (show !== shown) { shown = show; layers.forEach((l) => l.classList.toggle("on", show)); }

    if (onScreen) {
      const size = Math.min(Math.max(r.height * 1.15, 120), 300);
      const travel = Math.max(0, r.width - size) / 2;
      const drift = still ? -0.45 : Math.sin(t / SPEED);    // -1 … 1, left ↔ right
      const x = r.left + r.width / 2 + drift * travel - size / 2;
      const y = r.top + r.height / 2 - size / 2;
      const s = size.toFixed(1) + "px";
      const tr = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      for (const l of layers) { l.style.width = l.style.height = s; l.style.transform = tr; }
    }
    if (!still) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
  if (still) {   // no animation loop: just keep it in place when the page scrolls or resizes
    const place = () => tick(0);
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
  }
})();
