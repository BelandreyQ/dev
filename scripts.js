document.addEventListener("DOMContentLoaded", () => {
    const menuTrigger = document.querySelector('[data-mobile-menu-trigger]');
    const lowerheader = document.getElementById("lower-header");

    menuTrigger.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            lowerheader.classList.toggle("open");
        }
    });
});