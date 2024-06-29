let split = document.getElementsByClassName("split")


gsap.from(split,        { 
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

