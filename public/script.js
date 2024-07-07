

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successPopup = document.getElementById('success-popup');
  const errorPopup = document.getElementById('error-popup');
  const toggleBtn = document.getElementById("toggle-btn");
  const toggleclosebtn = document.getElementById("xmark");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu-link");

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission
console.log("form is working")
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
        if (result.message === 'Message sent successfully!') {
          successPopup.classList.add('active');
          setTimeout(() => {
            successPopup.classList.remove('active');
          }, 3000);
        } else {
          errorPopup.classList.add('active');
          setTimeout(() => {
            errorPopup.classList.remove('active');
          }, 3000);
        }
        form.reset(); // Optional: Reset the form after successful submission
      } catch (error) {
        errorPopup.classList.add('active');
        setTimeout(() => {
          errorPopup.classList.remove('active');
        }, 3000);
        console.error('Error:', error);
      }
    });
  }


  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
        menu.classList.add("active");
      }
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

console.log("hello")