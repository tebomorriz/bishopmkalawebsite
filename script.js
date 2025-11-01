var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
});

// ==============NAVLIST===============

const menuBtn = document.querySelector(".lnr-menu");
const navList = document.querySelector(".navlist");

menuBtn.onclick = function () {
  menuBtn.classList.toggle("lnr-cross-circle");
  navList.classList.toggle("active");
};

// ==============SCROLL REVEAL===============
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});
sr.reveal(".home-container", { delay: 200, origin: "bottom" });
sr.reveal(".home-btns", { delay: 200, distance: "90px", origin: "top" });
sr.reveal(".feature-container", { delay: 200, origin: "bottom" });
sr.reveal(".about-container .left", { delay: 200, origin: "left" });
sr.reveal(".about-container .right", { delay: 200, origin: "top" });
sr.reveal(".courses-container", { delay: 200, origin: "top" });
sr.reveal(".team-container", { delay: 200, origin: "bottom" });
sr.reveal(".blog-container", { delay: 200, origin: "left" });
sr.reveal(".contact-container .content", { delay: 200, origin: "bottom" });
sr.reveal(".contact-container .form", { delay: 200, origin: "top" });
sr.reveal(".footer-container", { delay: 200, origin: "top" });
