function darkMode() {
    let body = document.querySelector("body");
    let darkMode = document.querySelector(".darkmode");
    let lightMode = document.querySelector(".lightmode");
    let navs = document.querySelectorAll('.nav-text');
    let details = document.querySelector(".details h1");
    let socials = document.querySelectorAll(".social i");
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
    darkMode.style.display = "none";
    lightMode.style.display = "flex";
    for (nav of navs) {
        nav.style.color = "#fff";
    }

    for (social of socials) {
        social.style.color = "#fff";
    }
    details.style.color = "#fff";

};

function lightMode() {
    let body = document.querySelector("body");
    let lightMode = document.querySelector(".lightmode");
    let darkMode = document.querySelector(".darkmode");
    let navs = document.querySelectorAll(".nav-text");
    let details = document.querySelector(".details h1");
    let socials = document.querySelectorAll(".social i");
    body.style.backgroundColor = "#faf5f1";
    body.style.color = "#4B3D3D";
    lightMode.style.display = "none";
    darkMode.style.display = "flex";
    for (nav of navs) {
        nav.style.color = "#4B3D3D";
    }
    for (social of socials) {
        social.style.color = "#4B3D3D";
    }
    details.style.color = "#444";
};

window.addEventListener("scroll", function() {
    let topBtn = this.document.querySelector(".top-btn");
    topBtn.classList.toggle("toggle", this.scrollY > 0);
});