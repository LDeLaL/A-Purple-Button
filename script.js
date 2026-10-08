const button = document.getElementById("release");

button.addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 100;

    p.style.left = "50%";
    p.style.top = "50%";
    p.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    p.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 1000);
  }
});
