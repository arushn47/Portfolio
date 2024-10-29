window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const sidebar = document.querySelector(".side-bar");
const ham = document.querySelector(".ham");
const closeham = document.querySelector(".closeham");
const navLinks = document.querySelectorAll(".side-bar li a");

function showSidebar() {
    sidebar.classList.add("active");
    ham.style.display = "none";
    closeham.style.display = "block";
};

function hideSidebar() {
    sidebar.classList.remove("active");
    closeham.style.display = "none";
    if (window.innerWidth < 925) {
        ham.style.display = "block";
    }

    else {
        ham.style.display = "none";
    }
};

navLinks.forEach(link => {
    link.addEventListener("click", hideSidebar);
});

window.addEventListener('resize', hideSidebar);

const span = document.querySelector("span");
let typed = new Typed('span', {
    strings: ["Student at VIT Bhopal University", "Design Co-Lead at the EV Club", "Front-End Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 500,
    backDelay: 500,
    loop: true,
    loopDelay: 1000,
});

const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll(".nav-item a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            nav.forEach((link) => {
                link.classList.remove("active");
            });
            
            const link = document.querySelector(`.nav-item a[href*="${id}"]`);
            if (link) {
                link.classList.add("active");
            };
        };
    });
};

const body = document.querySelector("body");
const moon = document.querySelector(".fa-sun")

function toggleMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
    }

    else {
        body.classList.replace( "light-mode", "dark-mode");
    }

    if (moon.classList.contains('fa-sun')) {
        moon.classList.replace('fa-sun','fa-moon');
    }

    else {
        moon.classList.replace('fa-moon','fa-sun');
    }
};

document.querySelectorAll('.progress-bar').forEach(bar => {
    const percentage = bar.querySelector('.progress-value').textContent.trim().replace('%', '');
    bar.style.setProperty('--percentage', percentage);
});
