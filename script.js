// Mobile menu
document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".sidebar").classList.toggle("open");
};

// Dark / Light toggle
document.querySelector(".theme-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Active menu on scroll
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
