// Responsive nav menu toggle (adapted from Web Dev Tutorials on YouTube)
// Source: https://www.youtube.com/watch?v=flItyHiDm7E
// Accessed April 2025 | Adapted for use in SI539 W25 Final Clinet Project
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.getElementById("year").innerHTML = new Date().getFullYear();