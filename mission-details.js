// Reveal on scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animate]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});
