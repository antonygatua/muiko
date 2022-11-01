/* Typing animation */
var typed = new Typed(".typing", {
  strings:["", "Data Scientist", "", "Data Analyst", ""],
  typeSpeed: 80,
  backSpeed: 40,
  loop:true
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