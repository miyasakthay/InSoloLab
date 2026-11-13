
// MENU RESPONSIVO

const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector("#navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ANIMAÇÃO AO ROLAR A PÁGINA

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


// ELEMENTOS QUE RECEBERÃO ANIMAÇÃO

document.querySelectorAll(
    ".intro, .service-card, .process, .step, .contact"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});