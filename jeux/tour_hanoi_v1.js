let proposition = document.querySelector("input")
let texte = document.getElementById("h3texte")
let recommencer = document.getElementById("btnRecommencerHanoi")
let nbrCoup = document.getElementById("deplacement")


recommencer.addEventListener("click", () =>{
    initJeu()
    nbrCoup.innerHTML = "Nombre de coup :"
    proposition.value = ""
    texte.innerHTML = "Entrer deux chiffres pour déplacer un disque (exemple: 12)"
    jeu.nbDeCoup = 0
});

proposition.addEventListener("keydown" ,(event) =>{
    if(event.key === "Enter"){
        texte.innerHTML = `Vous avez déplacé le disque de la tour: ${proposition.value[0]} sur la tour ${proposition.value[1]}`
       input(proposition.value.split(""))
       proposition.value = ""
       nbrCoup.innerHTML = "Nombre de coup: " + jeu.nbDeCoup
    }
});



let jeu = {
    tours: [
        [3,2,1],
        [],
        []
    ],
    nbDeCoup: 0,
    tailleDisqueMin: 35, 
    incrementTailleDisque: 55
};

function input (input) {
    solution = []
    for(let i = 0; i < input.length; i++){
        if(input[i] >= 1 && input[i] <= 3){
            solution[solution.length] = input[i]
        }
    }
    if (solution.length !== 2) {
        
        texte.innerHTML = "Vous devez entrer 2 chiffres de 1 à 3"
        
    }else{
        const tourDebut = solution[0] - 1; 
        const tourDestination = solution[1] - 1; 
        
        if (jeu.tours[tourDebut].length > 0) {
            if (jeu.tours[tourDestination].length === 0 || jeu.tours[tourDebut].at(-1) < jeu.tours[tourDestination].at(-1)) {
                
                const disque = jeu.tours[tourDebut].pop();
                jeu.tours[tourDestination].push(disque);
                jeu.nbDeCoup++
            } else {
                texte.innerHTML = "Impossible, le disque à déplacer est trop grand."
            }
            
        } else {
            texte.innerHTML = "La tour est vide, il n'y a aucun disque à déplacer."
        }
    }
    if (jeu.tours[2].length >= 3) {
        if (jeu.nbDeCoup <= 7) {
            texte.innerHTML = `Jeu terminé ! \<br> Vous avez utilisé ${jeu.nbDeCoup} coups, c'est le meilleur score pour finir le jeu !`
             
        } else {
            texte.innerHTML = `Jeu terminé ! \<br> Vous avez utilisé ${jeu.nbDeCoup} coups pour finir le jeu`
        }

    }
        
    affichageTours(jeu.tours[0], jeu.tours[1], jeu.tours[2])

   
};


let tourA = document.getElementById("tourA")
 let tourB = document.getElementById("tourB")
 let tourC = document.getElementById("tourC")

 function construireDisque(taille) {
    let disque = document.createElement("div"); // Crée un nouvel élément disque
    disque.setAttribute("class", "disque");     // Ajoute la classe CSS
    disque.style.width = `${taille}px`;         // Définit la largeur du disque
    return disque;                              // Retourne l'élément créé
}



function construireTour(tour) {
    let container = document.createDocumentFragment(); // Fragment pour améliorer la performance
    for (let i = 2; i >= 0; i--) {
        if (i < tour.length) {
           let taille = jeu.tailleDisqueMin + (tour[i] * jeu.incrementTailleDisque);
        let disque = construireDisque(taille);         // Crée un disque avec la taille calculée
        container.appendChild(disque);                 // Ajoute le disque au container 
        }
        
    }
    return container; // Retourne le fragment contenant tous les disques
}

// Fonction pour afficher les trois tours
function affichageTours(tour1, tour2, tour3) {
    // Vider le contenu actuel des tours
    tourA.innerHTML = "";
    tourB.innerHTML = "";
    tourC.innerHTML = "";

    // Ajouter les disques à chaque tour
    tourA.appendChild(construireTour(tour1));
    tourB.appendChild(construireTour(tour2));
    tourC.appendChild(construireTour(tour3));
}




function afficherEtat() {
affichageTours(jeu.tours[0], jeu.tours[1], jeu.tours[2])
}


function initJeu(){
    jeu.tours[0] = [3,2,1]
    jeu.tours[1] = []
    jeu.tours[2] = []
    affichageTours(jeu.tours[0], jeu.tours[1], jeu.tours[2])
}

 afficherEtat();
