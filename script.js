const petalsContainer = document.getElementById("petals");
const glitterContainer = document.getElementById("glitter");
const revealItems = document.querySelectorAll(".reveal");
const heroContent = document.querySelector(".hero-content");

function createPetal() {
  if (!petalsContainer) return;

  const petal = document.createElement("span");
  petal.classList.add("petal");

  const left = Math.random() * 100;
  const size = 8 + Math.random() * 10;
  const duration = 7 + Math.random() * 7;
  const delay = Math.random() * 2;
  const drift = `${(Math.random() * 180 - 90).toFixed(0)}px`;

  petal.style.left = `${left}vw`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 1.4}px`;
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `${delay}s`;
  petal.style.setProperty("--drift", drift);
  petal.style.opacity = (0.45 + Math.random() * 0.4).toFixed(2);

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000);
}

function createSparkle() {
  if (!glitterContainer) return;

  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");

  const left = Math.random() * 100;
  const size = 3 + Math.random() * 5;
  const duration = 5 + Math.random() * 6;
  const delay = Math.random() * 2;
  const drift = `${(Math.random() * 120 - 60).toFixed(0)}px`;

  sparkle.style.left = `${left}vw`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.animationDuration = `${duration}s`;
  sparkle.style.animationDelay = `${delay}s`;
  sparkle.style.setProperty("--spark-drift", drift);
  sparkle.style.opacity = (0.35 + Math.random() * 0.3).toFixed(2);

  glitterContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 18; i++) {
  createPetal();
}

for (let i = 0; i < 28; i++) {
  createSparkle();
}

setInterval(createPetal, 700);
setInterval(createSparkle, 320);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
  }

  const lamps = document.querySelectorAll(".lamp");
  lamps.forEach((lamp, index) => {
    const offset = scrollY * (0.02 + index * 0.003);
    lamp.style.transform = `translateY(${offset}px)`;
  });
});