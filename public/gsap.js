
gsap.from(".navbar",{
   delay:0.4,
   opacity:0,
   duration:0.5,
   y:-60
});

gsap.from(".home-txt",{
  delay:0.4,
  opacity:0,
  duration:0.5,
  x:-100
});

gsap.from(".about-left",{
  delay:0.4,
  opacity:0,
  duration:0.5,
  x:-100,
  scrollTrigger: {
    trigger: ".about-left",
    scroller: "body",
    start: "top 60%",    
    end: "top 55%",
    scrub: 2
  }
})