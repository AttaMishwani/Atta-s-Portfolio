document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const toggleclosebtn = document.getElementById("xmark");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu-link");

 

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  if (toggleclosebtn) {
    toggleclosebtn.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }

  if (menuLinks) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
});
