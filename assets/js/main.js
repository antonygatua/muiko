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
/* Typing animation */
var typed = new Typed(".typing", {
  strings:["", "Data Scientist", "", "Data Engineer", "", "Machine Learning Engineer", "", "Data Analyst"],
  typeSpeed: 80,
  backSpeed: 60,
  loop:true
})
// work description
const modalViews = document.querySelectorAll(".popup-outer"),
      modalBtns = document.querySelectorAll(".open-btn"),
      modalCloses = document.querySelectorAll(".popup-box-close"),
      sectImg = document.querySelector('.work-img'),
      sectInfo = document.querySelector('.work-info')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('show')
  sectImg.classList.add('modalClass')
  sectInfo.classList.add('modalClass')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('show')
    })
    sectImg.classList.remove('modalClass')
    sectInfo.classList.remove('modalClass')
  })
})
// Projects slider
let slides = document.querySelectorAll(".project-slider");
let index = 0;

/* Next function */
function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
/* prev function */
function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
/* auto play (slides change every 7sec) */
setInterval(next, 7000);

// Testimonial Slider
let userText = document.querySelectorAll(".user-text");
let userImg = document.querySelectorAll(".usr-img");
let i = 0;

/* ShowReview function */
function showReview(){
  userText[i].classList.remove('active');
  userImg[i].classList.remove('active');
  i = (i + 1) % userText.length;
  userText[i].classList.add('active');
  userImg[i].classList.add('active');
}
/* Autoplay, changes every 7sec */
setInterval(showReview, 7000)

// listen to the form submission
document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_t5qipk6";
  const templateID = "template_whqrasw";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});

// get all the toggle buttons
const toggleButtons = document.querySelectorAll('.faq-toggle');

// loop through all the toggle buttons and add a click event listener to each
toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // get the corresponding answer element
    const answer = this.parentElement.parentElement.querySelector('.faq-answer');
    // toggle the active class on the answer element
    answer.classList.toggle('active');
    // toggle the active class on the toggle button element
    this.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.more-btn');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var target = this.dataset.target;
      var description = document.getElementById(target);
      if (description) {
        description.classList.add('active');
      }
    });
  });

  var closeButtons = document.querySelectorAll('.close-popup');

  closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      var popup = this.closest('.pop-up');
      if (popup) {
        popup.classList.remove('active');
      }
    });
  });
});

