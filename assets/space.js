/* =========================================================
   Space time-lapse background: drifting, twinkling stars
   with the odd shooting star. Draws on a <canvas> behind the page.
   Turned off automatically for visitors who prefer less motion.
   ========================================================= */
(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "space";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, dpr = 1, stars = [], shooting = null;
  const colors = ["#ffffff", "#ffffff", "#ffffff", "#cfd8ff", "#ffe9b8", "#ffd1e3"];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round((W * H) / 3200);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() < 0.9 ? Math.random() * 1.1 + 0.2 : Math.random() * 1.6 + 1,
      depth: Math.random() * 0.9 + 0.1,          // bigger = closer = moves faster
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 1.5 + 0.5,
      color: colors[(Math.random() * colors.length) | 0]
    }));
    if (still) draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      if (!still) {
        // slow diagonal drift, like a night-sky time-lapse
        s.x -= 0.06 * s.depth;
        s.y += 0.025 * s.depth;
        if (s.x < -2) s.x = W + 2;
        if (s.y > H + 2) s.y = -2;
      }
      const tw = still ? 0.8 : 0.55 + 0.45 * Math.sin(t / 1000 * s.speed + s.phase);
      ctx.globalAlpha = tw;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      if (s.r > 1.4) { // soft glow on the brightest stars
        ctx.globalAlpha = tw * 0.18;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2); ctx.fill();
      }
    }
    // shooting star every few seconds
    if (!still) {
      if (!shooting && Math.random() < 0.004) {
        shooting = { x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, life: 0 };
      }
      if (shooting) {
        const s = shooting; s.life += 1;
        const len = 90, x2 = s.x - s.life * 7, y2 = s.y + s.life * 3.2;
        const g = ctx.createLinearGradient(x2, y2, x2 + len, y2 - len * 0.45);
        g.addColorStop(0, "rgba(255,255,255,.9)"); g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.globalAlpha = Math.max(0, 1 - s.life / 45);
        ctx.strokeStyle = g; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 + len, y2 - len * 0.45); ctx.stroke();
        if (s.life > 45) shooting = null;
      }
    }
    ctx.globalAlpha = 1;
  }

  function loop(t) { draw(t); requestAnimationFrame(loop); }

  window.addEventListener("resize", resize);
  resize();
  if (!still) requestAnimationFrame(loop);
})();
