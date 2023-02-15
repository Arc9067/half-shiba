const header = document.getElementById("header");
const scrollT = document.querySelector(".scroll");
const loader = document.querySelector(".loader");
const anchor = document.querySelectorAll("a");
const closeMenu = document.querySelector(".nav-close");
const mobileMenu = document.querySelector(".mobile-header");
const openNav = document.querySelector(".open-nav");
const NavLink = document.querySelectorAll(".nav-link");

ScrollReveal().reveal(".hometxt1", { delay: 300, reset: true });
ScrollReveal().reveal(".homeimg", { delay: 500, reset: true });
ScrollReveal().reveal(".abouttxt", { delay: 600, reset: true });
ScrollReveal().reveal(".aboutimg", { delay: 700, reset: true });
ScrollReveal().reveal(".step1", { delay: 100, reset: true });
ScrollReveal().reveal(".step2", { delay: 200, reset: true });
ScrollReveal().reveal(".step3", { delay: 300, reset: true });
ScrollReveal().reveal(".step4", { delay: 400, reset: true });
ScrollReveal().reveal(".step5", { delay: 500, reset: true });
ScrollReveal().reveal(".step6", { delay: 600, reset: true });
ScrollReveal().reveal(".step7", { delay: 700, reset: true });
ScrollReveal().reveal(".nftimg1", { delay: 100, reset: true });
ScrollReveal().reveal(".nftimg2", { delay: 200, reset: true });
ScrollReveal().reveal(".nftimg3", { delay: 300, reset: true });
ScrollReveal().reveal(".nftimg4", { delay: 400, reset: true });
ScrollReveal().reveal(".nftimg5", { delay: 500, reset: true });

window.addEventListener("scroll", () => {
  if (this.scrollY >= 50) {
    header.classList.add("header-col");
  } else {
    header.classList.remove("header-col");
  }

  if (this.scrollY >= 350) {
    scrollT.classList.add("scroll-up");
  } else {
    scrollT.classList.remove("scroll-up");
  }
});

gsap.from(".circle", {
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
  repeat: -1,
  yoyo: true,
});

window.addEventListener("load", () => {
  loader.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

openNav.addEventListener("click", () => {
  mobileMenu.style.display = "grid";
});

NavLink.forEach((ele) => {
  ele.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});
