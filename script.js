

window.onload = function () {

  /* ---------------- HERO SLIDER ---------------- */
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function changeSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");

    const text = slides[slideIndex].querySelector(".content");
    text.style.animation = "none";
    text.offsetHeight;
    text.style.animation = "fadeUp 1s ease forwards";

    slideIndex = (slideIndex + 1) % slides.length;
  }

  if (slides.length > 0) {
    changeSlide();
    setInterval(changeSlide, 3000);
  }

  /* ---------------- TESTIMONIAL SLIDER ---------------- */
  let rIndex = 0;
  const rSlides = document.querySelectorAll(".review-slide");
  const leftArrow = document.querySelector(".rev-arrow.left");
  const rightArrow = document.querySelector(".rev-arrow.right");

  function showReview(i) {
    rSlides.forEach(s => s.classList.remove("active"));
    rSlides[i].classList.add("active");
  }

  if (leftArrow && rightArrow && rSlides.length > 0) {
    leftArrow.onclick = () => {
      rIndex = (rIndex - 1 + rSlides.length) % rSlides.length;
      showReview(rIndex);
    };

    rightArrow.onclick = () => {
      rIndex = (rIndex + 1) % rSlides.length;
      showReview(rIndex);
    };

    setInterval(() => {
      rIndex = (rIndex + 1) % rSlides.length;
      showReview(rIndex);
    }, 2500);
  }

  /* ---------------- MOBILE MENU (FIXED) ---------------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  }

};
// Highlight active page in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".mobile-sidebar a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
