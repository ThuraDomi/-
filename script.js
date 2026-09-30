document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const reactionText = document.getElementById("reactionText");

  if (!yesBtn || !noBtn) return;

  let noCount = 0;
  const noMessages = [
    "Are you sure? 😭",
    "Okayyy but look at the YES button 😭❤️",
    "I’m still hoping 😔",
    "The YES button is becoming powerful now 😂",
    "I refuse to lose hope 😭❤️"
  ];

  noBtn.addEventListener("click", () => {
    noCount += 1;

    const scale = Math.min(1 + noCount * 0.22, 2.6);
    yesBtn.style.transform = `scale(${scale})`;

    const noScale = Math.max(1 - noCount * 0.05, 0.72);
    noBtn.style.transform = `scale(${noScale})`;

    reactionText.textContent =
      noMessages[Math.min(noCount - 1, noMessages.length - 1)];
  });

  yesBtn.addEventListener("click", () => {
    reactionText.textContent = "You just made me the happiest person alive 😭❤️";
    yesBtn.textContent = "YAYYYY ❤️";
    noBtn.style.opacity = "0.35";
    noBtn.disabled = true;
    launchConfetti();
  });
});

function launchConfetti() {
  const layer = document.getElementById("confetti-layer");
  if (!layer) return;

  const pieces = 90;

  for (let i = 0; i < pieces; i++) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 0.7 + "s";
    confetti.style.animationDuration = 2.2 + Math.random() * 1.7 + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.background = [
      "#ffffff",
      "#ffd3e2",
      "#ff8ab4",
      "#ff4f91",
      "#ffe29a"
    ][Math.floor(Math.random() * 5)];

    layer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4500);
  }
}
