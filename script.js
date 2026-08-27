// Mobile Navbar

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close navbar after click

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Cursor Text Color Effect

const hoverElements = document.querySelectorAll(
    "h1, h2, .skill-card, .project-card, .nav-links a"
);

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {
        element.style.color = "#38bdf8";
    });

    element.addEventListener("mouseleave", () => {
        element.style.color = "";
    });

});
