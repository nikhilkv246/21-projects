const toggleBtn = document.getElementById("themeToggle");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.textContent = "🌞";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
const isLight = document.body.classList.contains("light-theme");
toggleBtn.textContent = isLight ? "🌞" : "🌙";

// Save theme
localStorage.setItem("theme", isLight ? "light" : "dark");
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Software Developer", "YouTuber", "Chess player"];

const eraseDelay = 50;
const typeDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, eraseDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typeDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});