let toggleBtn = document.getElementById("toggle-btn");
let toggleclosebtn = document.getElementById("xmark");
let menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
let split = document.getElementsByClassName("split")
// console.log(split.innerHTML)

gsap.from(split,        { 
    duration: 1,
    opacity: 0,
    x: "-100%", // Reveal from left to center
    ease: "power2.out",
    stagger: 0.1 // Stagger animation for each character
}
)

toggleBtn.addEventListener("click", () => {
    // console.log("working")
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
});

toggleclosebtn.addEventListener("click",()=>{
    menu.classList.remove("active");
});



menuLinks.forEach(link =>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active")
    })
})




// const homeTxt = document.getElementById("home-txt");
// const text  = "A Frontend Developer building beautiful and functional websites with attention to detail and user experience";
// // const arr = text.split("");
// console.log(arr)





// const generateText = (text)=>{
// text.forEach(data => {
//     const span = document.createElement("span");
//     span.classList.add("char");
//     span.innerHTML = data;
//     homeTxt.appendChild(span)
// });
// }

// generateText(text);

// gsap.from(".char",{
//     y:100,
//     stagger:0.07,
//     delay:0.2,
//     ease:"back.out",
//     duration:2
// })