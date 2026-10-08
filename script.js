const button = document.getElementById("release");

function createParticle() {
  const p = document.createElement("div");
  p.className = "particle";

  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(p);

  const x = (Math.random() - 0.5) * 120;
  const y = (Math.random() - 0.5) * 120;
  const time = 3000 + Math.random() * 5000;

  p.animate([
    { transform: "translate(0, 0)", opacity: 0 },
    { opacity: 0.7, offset: 0.2 },
    { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
  ], {
    duration: time,
    easing: "ease-in-out"
  });

  setTimeout(() => p.remove(), time);
}

setInterval(createParticle, 180);
