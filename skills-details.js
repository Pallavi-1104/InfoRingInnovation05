// Simple scroll reveal for elements with data-animate
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animate]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});

// Trigger on load also (for hero)
window.addEventListener("load", () => {
  document.querySelectorAll("[data-animate]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});
