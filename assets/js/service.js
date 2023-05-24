// Hamburger menu
const hamburger = document.querySelector(".nav-toggler");
const main_menu = document.querySelector(".links");
const menuItems = document.querySelectorAll(".menu-items");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active-menu")
  main_menu.classList.toggle("active-menu")
})
/* close hamburger menu on click */
function closeMenu(){
  hamburger.classList.remove("active-menu");
  main_menu.classList.remove("active-menu");
}

document.addEventListener('DOMContentLoaded', function() {

    const moreButtons = document.querySelectorAll('.morebtn');

    const servicesContainer = document.querySelector('.services-container');

    moreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const serviceName = button.parentNode.parentNode.dataset.name;
  
        const serviceDescription = document.querySelector(`.preview[data-target="${serviceName}"]`);
  
        serviceDescription.classList.add('showcase');

        servicesContainer.classList.add('blur');
      });
    });

    const closeButtons = document.querySelectorAll('.closePreview ');

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const popUp = closeButton.parentNode;

            popUp.classList.remove('showcase');

            servicesContainer.classList.remove('blur');
        });
    });
  });
  