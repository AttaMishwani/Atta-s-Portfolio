// let split = document.getElementsByClassName("split")


gsap.from(".home-txt",        { 
    duration: 1,
    opacity: 0,
    x: "-100%", // Reveal from left to center
    ease: "power2.out",
    // stagger: 0.1 // Stagger animation for each character
}
)


gsap.from(".navbar",        { 
    duration: 1,
    opacity: 0,
    y: "-100%", // Reveal from left to center
    ease: "power2.out",
    // stagger: 0.1 // Stagger animation for each character
}
)

// ABOUT SECTION
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".about-left", {
//   scrollTrigger: {
//     trigger: ".about-left",
//     start: "top 80%", // Adjust based on when you want the animation to start
//   },
//   top: "30%",
//   duration: 1,
//   opacity: 0,
//   x: "-100%", // Reveal from left to center
//   ease: "power2.out"
// });
// gsap.from(".about-right", {
//   scrollTrigger: {
//     trigger: ".about-left",
//     start: "top 80%", // Adjust based on when you want the animation to start
//   },
//   top: "30%",
//   duration: 1,
//   opacity: 0,
//   x: "100%", // Reveal from left to center
//   ease: "power2.out"
// });

// ABOUT SECTION