$(window).scroll(function(){
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $(".appear").each(function(){
        const distanceFromTop = $(this).offset().top;

        // Vérifie si l'élément est dans la zone visible de la fenêtre
        if (distanceFromTop - scrollTop < windowHeight - 100) {
            console.log("Salut :)");
            const delaiAnim = $(this).data("delai");
            $(this).delay(delaiAnim).animate({
                top: 0,
                opacity: 1
            });
        }
    });
});

// --------TEXTE ACCUEIL------   //
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { selector: '.titre-projet h1', text: "Découvrez mon profil" },
        { selector: '.titre-projet-js h1', text: "Site web - portfolio" },
        { selector: '.titre-projet-js1 h1', text: "Site e-commerce" }
    ];
    const delay = 90; 

    function displayText(container, text) {
        let index = 0;
        function type() {
            if (index < text.length) {
                container.textContent += text[index];
                index++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    projects.forEach(project => {
        const container = document.querySelector(project.selector);
        if (container) {
            displayText(container, project.text);
        }
    });
});
// fin --------TEXTE ACCUEIL------  fin //

// début --------scrool-bar------  début //

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// fin --------scrool-bar------  fin //
