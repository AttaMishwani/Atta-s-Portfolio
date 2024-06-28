let toggleBtn = document.getElementById("toggle-btn");
let toggleclosebtn = document.getElementById("xmark");
let menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");


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
