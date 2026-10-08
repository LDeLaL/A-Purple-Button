const button = document.getElementById("release");

button.addEventListener("click", () => {

  for (let i = 0; i < 35; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 180;
    const size = 2 + Math.random() * 5;

    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = "50%";
    p.style.top = "50%";

    p.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    p.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }

  // 가끔 하트가 나옴
  if (Math.random() < 0.45) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♥";

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 150;

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1800);
  }
});
