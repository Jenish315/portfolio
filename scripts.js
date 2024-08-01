// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('theme-toggle');
    let isDarkMode = false;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    themeToggle.addEventListener('click', function() {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggle.textContent = '🌙'; // Moon icon
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Sun icon
        }
        isDarkMode = !isDarkMode;
    });
});
