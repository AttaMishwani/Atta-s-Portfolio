let toggleBtn = document.getElementById("toggle-btn");
let toggleclosebtn = document.getElementById("xmark");
let menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");

// console.log(split.innerHTML)




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




// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert('Message sent: ' + result.message);
      form.reset(); // Optional: Reset the form after successful submission
    } catch (error) {
      alert('Error sending message.');
      console.error('Error:', error);
    }
  });
});
