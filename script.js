
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});


const themeToggle = document.getElementById("themeToggle");
const themeWipe = document.getElementById("themeWipe");

function switchTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", function () {
  themeWipe.classList.add("active");

  setTimeout(switchTheme, 500);

  setTimeout(function () {
    themeWipe.classList.remove("active");
  }, 650);
});
