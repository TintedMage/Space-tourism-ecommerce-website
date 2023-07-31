
const tagline = "A cosmic voyage awaits you!";
const taglineElement = document.getElementById("tagline");

let charIndex = 0;

function typeTagline() {
  if (charIndex < tagline.length) {
    taglineElement.innerHTML += tagline.charAt(charIndex);
    charIndex++;
    setTimeout(typeTagline, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeTagline();
});