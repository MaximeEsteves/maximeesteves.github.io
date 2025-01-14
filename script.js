$(window).scroll(function(){
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $(".appear").each(function(){
        const distanceFromTop = $(this).offset().top;

        // Vérifie si l'élément est dans la zone visible de la fenêtre
        if (distanceFromTop - scrollTop < windowHeight - 100) {
            console.log("Scroooooooool :)");
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
        { selector: '.titre-projet-js1 h1', text: "Site e-commerce" },
        { selector: '.titre-projet-js2 h1', text: "Application" },
        { selector: '.titre-jeux h1', text: "Les Jeux"},
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

if (document.body.getAttribute('data-page') === 'index') {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else{
            navbar.classList.remove('scrolled');
        }
        if(scrollPosition >= pageHeight){
            navbar.classList.remove('scrolled');
            console.log("fin de page");}
    });
}

// fin --------scrool-bar------  fin //


// Liste des projets ---debut--- //

let photosProjet = [
    {
        "nom":"Site e-commerce",
        "image":"images/logo_LMDN-04.svg",
        "lien": "projet-eCommerce.html"
    },
    {
        "nom":"Site portfolio",
        "image":"images/logo maroue.png",
        "lien": "projet-portfolio.html"
    },
    {
        "nom":"Jeux - La grille",
        "image":"images/log_jeux_logique.webp",
        "lien": "jeux.html"
    },
    {
        "nom":"Application Python",
        "image":"images/logo_app_python.webp",
        "lien": "application.html"
    }, 
    {
        "nom":"Jeux - Hanoï",
        "image":"images/logo_jeux_hanoi.png",
        "lien": "jeux.html#introductionJeu"
    }, 
];

// Liste des projets --- fin ---//
console.log(photosProjet[0]["lien"]);


let photoUne = document.getElementById("photoUne");
let photoUneHref = document.getElementById("photoUneHref");
let photoUneHover = document.getElementById("photoUneHover");

let photoDeux = document.getElementById("photoDeux");
let photoDeuxHref = document.getElementById("photoDeuxHref");
let photoDeuxHover = document.getElementById("photoDeuxHover");

let photoTrois = document.getElementById("photoTrois");
let photoTroisHref = document.getElementById("photoTroisHref");
let photoTroisHover = document.getElementById("photoTroisHover");

let boutonSuivant = document.getElementById("boutonSuivant");
let boutonPrecedent = document.getElementById("boutonPrecedent");

let i = 0;  // Initialiser l'indice à 0

// Initialisation des images
photoUne.src = photosProjet[i]["image"];
photoUneHref.href = photosProjet[i]["lien"];
photoUneHover.innerText = photosProjet[i]["nom"];

photoDeux.src = photosProjet[(i + 1) % photosProjet.length]["image"];
photoDeuxHref.href = photosProjet[(i + 1) % photosProjet.length]["lien"];
photoDeuxHover.innerText = photosProjet[(i + 1) % photosProjet.length]["nom"];

photoTrois.src = photosProjet[(i + 2) % photosProjet.length]["image"];
photoTroisHref.href = photosProjet[(i + 2) % photosProjet.length]["lien"];
photoTroisHover.innerText = photosProjet[(i + 2) % photosProjet.length]["nom"];

// Ajouter les événements aux boutons
boutonSuivant.addEventListener("click", passerAGauche);
boutonPrecedent.addEventListener("click", passerADroite);

function passerAGauche() {
    // On incrémente l'indice (cycle entre 0 et la longueur du tableau)
    i = (i + 1) % photosProjet.length; 

    // Mettre à jour les sources des images
    photoUne.src = photosProjet[i]["image"];
    photoUneHref.href = photosProjet[i]["lien"];
    photoUneHover.innerText = photosProjet[i]["nom"];
    
    photoDeux.src = photosProjet[(i + 1) % photosProjet.length]["image"];
    photoDeuxHref.href = photosProjet[(i + 1) % photosProjet.length]["lien"];
    photoDeuxHover.innerText = photosProjet[(i + 1) % photosProjet.length]["nom"];
    
    photoTrois.src = photosProjet[(i + 2) % photosProjet.length]["image"];
    photoTroisHref.href = photosProjet[(i + 2) % photosProjet.length]["lien"];
    photoTroisHover.innerText = photosProjet[(i + 2) % photosProjet.length]["nom"];
    
}

function passerADroite() {
    // On décrémente l'indice (cycle entre 0 et la longueur du tableau)
    i = (i - 1 + photosProjet.length) % photosProjet.length; 

    // Mettre à jour les sources des images
    photoUne.src = photosProjet[i]["image"];
    photoUneHref.href = photosProjet[i]["lien"];
    photoUneHover.innerText = photosProjet[i]["nom"];
    
    photoDeux.src = photosProjet[(i + 1) % photosProjet.length]["image"];
    photoDeuxHref.href = photosProjet[(i + 1) % photosProjet.length]["lien"];
    photoDeuxHover.innerText = photosProjet[(i + 1) % photosProjet.length]["nom"];
    
    photoTrois.src = photosProjet[(i + 2) % photosProjet.length]["image"];
    photoTroisHref.href = photosProjet[(i + 2) % photosProjet.length]["lien"];
    photoTroisHover.innerText = photosProjet[(i + 2) % photosProjet.length]["nom"];
    
}
