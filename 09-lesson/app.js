const navToggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggleBtn.addEventListener("click", function () {
  nav.classList.toggle("nav--visible");
  console.log("Button clicked!");
});
