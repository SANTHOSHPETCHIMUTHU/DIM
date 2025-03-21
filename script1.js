document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector("#animated-title h1");
  const text = title.textContent;
  title.textContent = ""; // Clear the original text

  // Wrap each letter in a span
  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
    span.classList.add("letter");
    span.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
    title.appendChild(span);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname.split("/").pop();
  document.querySelectorAll(".bottom-nav ul li a").forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
});
