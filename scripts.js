document.addEventListener("DOMContentLoaded", () => {
    const extrabutton = document.getElementById("extra-button");
    const lowerheader = document.getElementById("lower-header");

    extrabutton.addEventListener("click", () => {
        lowerheader.classList.toggle("open");
    });
});