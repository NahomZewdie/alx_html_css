const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Function to toggle the mobile menu visibility
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Add event listener to the hamburger button
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close the mobile menu when a link inside it is clicked
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Optional: Close the mobile menu if clicked outside (e.g., on the dark overlay itself)
mobileMenu.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});