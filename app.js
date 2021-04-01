//modify the CSS contact navlist

var contact = document.getElementById("contact");
var width = 0;

window.addEventListener("resize", function() {
    width = window.innerWidth;
    if (width < 720) {
      contact.className = "list";
    } else {
      contact.className = "list ctn";
    }
});

//Menu

var on = true;

const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".nav-list");
const menuItem = document.querySelectorAll(".list");


// main toggle
menuToggle.addEventListener("click", () => {
  toggle();
  on = !on
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuToggle.classList.contains("on")) {
      toggle()
      on = !on
    }
  });
});

function toggle() {
  menuItems.classList.toggle("on");
  menuToggle.classList.toggle("on");
}

// Scroll to top

const scrolltotop = document.querySelector("#scrolltotop");
scrolltotop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    scrolltotop.style.opacity = 1;
  } else {
    scrolltotop.style.opacity = 0;
  }
});

// Contact

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {

  // Get Dark mode from local storage
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");
    
  //  Set Local storage for Dark Mode
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});
  

