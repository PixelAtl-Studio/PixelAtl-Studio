const links = document.querySelectorAll("nav a, .cta a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        const targetPage = e.target.getAttribute("data-page"); // Obtén el valor de data-page

        if (targetPage) { // Verifica que targetPage no sea null o undefined
            pages.forEach(page => page.classList.remove("active")); // Oculta todas las páginas
            const targetElement = document.getElementById(targetPage); // Encuentra la página objetivo
            if (targetElement) {
                targetElement.classList.add("active"); // Muestra la página objetivo
            } else {
                console.error(`No se encontró una página con id: ${targetPage}`); // Error si no se encuentra la página
            }
        } else {
            console.error("El enlace no tiene un atributo data-page válido."); // Error si no se encuentra el data-page
        }
    });
});
