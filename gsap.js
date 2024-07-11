

// Navbar animation
gsap.from(".navbar", {
  delay: 0.4,
  opacity: 0,
  duration: 0.5,
  y: -60
});

// Home text animation
gsap.from(".home-txt", {
  delay: 0.4,
  opacity: 0,
  duration: 0.5,
  x: -100
});

// About section animations
gsap.from(".about-right-txt", {
  delay: 2,
  opacity: 0,
  duration: 0.5,
  x: 100,
  scrollTrigger: {
    trigger: ".about-right-txt",
    scroller: "body",
    start: "top 50%"
  }
});

gsap.from(".about-left-img", {
  delay: 2,
  opacity: 0,
  duration: 0.5,
  x: -100,
  scrollTrigger: {
    trigger: ".about-left-img",
    scroller: "body",
    start: "top 50%"
  }
});



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
