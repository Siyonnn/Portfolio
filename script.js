// ===== HAMBURGER MENU =====
// Shows and hides the nav links on small screens.

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Open or close the menu when the hamburger button is clicked
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const links = navLinks.querySelectorAll("a");

// Close the menu after a link is clicked
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// ===== DARK / LIGHT MODE =====
// The round button at the bottom right switches the color theme.

const themeToggle = document.getElementById("themeToggle");
const themeWipe = document.getElementById("themeWipe");

// Switches between dark and light, and remembers the choice
function switchTheme() {
  document.body.classList.toggle("dark");

  // Save the choice so it stays after the page is refreshed
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Use dark mode right away if it was chosen on a previous visit
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Play the red wave animation, then switch the theme
themeToggle.addEventListener("click", function () {
  // Cover the screen with the waves
  themeWipe.classList.add("active");

  // Change the colors while the screen is covered (after half a second)
  setTimeout(switchTheme, 500);

  // Remove the waves to show the new theme
  setTimeout(function () {
    themeWipe.classList.remove("active");
  }, 650);
});
