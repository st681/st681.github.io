// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

