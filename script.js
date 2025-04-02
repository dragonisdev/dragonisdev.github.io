
function scrollToPackages() {
    document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

function scrollToDemos() {
    document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}


function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


function toggleMenu() {
    const navMenu = document.querySelector(".navbar ul");
    navMenu.classList.toggle("active");
}