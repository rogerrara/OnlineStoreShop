// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");  // turn to X
    navLinks.classList.toggle("show");     // slide menu
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
    });
});

// -------------------------------
// CART DROPDOWN
const cartIcon = document.getElementById("cartIcon");
const cartDropdown = document.getElementById("cartDropdown");

// Toggle cart dropdown on click
cartIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent click from closing immediately
    cartDropdown.classList.toggle("show-cart");
});

// Close cart if clicked outside
document.addEventListener("click", () => {
    cartDropdown.classList.remove("show-cart");
});

// Prevent closing when clicking inside cart
cartDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
});
