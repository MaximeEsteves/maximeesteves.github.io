    bouttonRejouer.style.display = "none"
    imageIndice.style.display = "none"
    bouttonIndice.style.display = "none"
    bouttonChanger.style.display = "none"
    bouttonValider.style.display = "none"
    bouttonChangerMoyen.style.display = "none"
    bouttonChangerDifficile.style.display = "none"
    bouttonChangerExtreme.style.display = "none"




function initialiserBoutons() {
   
    bouttonCommencer.addEventListener("click", commencer, updateTimer);
    bouttonChanger.addEventListener("click", changerFacile);
    bouttonChangerMoyen.addEventListener("click", changerMoyen);
    bouttonChangerDifficile.addEventListener("click", changerDifficile);
    bouttonChangerExtreme.addEventListener("click", changerExtreme);
    bouttonValider.addEventListener("click", validerJeu);
    bouttonIndice.addEventListener("click", afficherIndice);
    bouttonRejouer.addEventListener("click", rejouer);
}

function afficherIndice() {
    if (titreJeux.innerText === "Facile") {
        imageIndice.src = image[0];
        console.log(image[0]);
        
    }
    if (titreJeux.innerText  === "Moyen") {
        imageIndice.src = image[1];
        console.log(image[1]);
    }
    if (titreJeux.innerText  === "Difficile") {
        imageIndice.src = image[2];
    }
    if (titreJeux.innerText  === "Extreme") {
        imageIndice.src = image[3];
    }
    
    bouttonIndice.style.display = "none"
    imageIndice.style.display = "block"
    

}

function updateTimer() {
    secondes++
    temps.innerText = secondes
}

function commencer(){
        if(!timerInterval){
            timerInterval = setInterval(updateTimer, 1000)
        bouttonCommencer.style.display = "none"
        bouttonIndice.style.display = "block"
        bouttonChanger.style.display = "block"
        bouttonValider.style.display = "block"
    };
}
function changerFacile() {
    jeuxFacile.innerText = box[compteurFacile];
    compteurFacile++;
    if (compteurFacile >= box.length) compteurFacile = 0;
}

function changerMoyen() {
    jeuxMoyen.innerText = box[compteurMoyen];
    compteurMoyen++;
    if (compteurMoyen >= box.length) compteurMoyen = 0;
}

function changerDifficile() {
    jeuxDifficile.innerText = box[compteurDifficile];
    compteurDifficile++;
    if (compteurDifficile >= box.length) compteurDifficile = 0;
}

function changerExtreme() {
    jeuxExtreme.innerText = box[compteurExtreme];
    compteurExtreme++;
    if (compteurExtreme >= box.length) compteurExtreme = 0;
}

function validerJeu() {
    if (titreJeux.innerText === "Facile") {
        if (jeuxFacile.innerText === "7") {
            resultatJeux.innerText = "Bravo ! niveau moyen ";
            bouttonChangerMoyen.style.display = "block";
            imageIndice.style.display = "none"
            bouttonIndice.style.display = "block"

            testMoyen();
        } else {
            resultatJeux.innerText = "C'est faux, essaye encore";
        }
    } else if (titreJeux.innerText === "Moyen") {
        if (jeuxFacile.innerText === "6" && jeuxMoyen.innerText === "6") {
            resultatJeux.innerText = "Bravo ! niveau difficile";
            bouttonChangerDifficile.style.display = "block";
            imageIndice.style.display = "none"
            bouttonIndice.style.display = "block"

            testDifficile();
        } else {
            resultatJeux.innerText = "C'est faux, essaye encore";
        }
    } else if (titreJeux.innerText === "Difficile") {
        if (jeuxFacile.innerText === "1" && jeuxMoyen.innerText === "7" && jeuxDifficile.innerText === "8") {
            resultatJeux.innerText = "Bravo ! niveau extreme";
            bouttonChangerExtreme.style.display = "block";
            imageIndice.style.display = "none"
            bouttonIndice.style.display = "block"

            testExtreme();
        } else {
            resultatJeux.innerText = "C'est faux, essaye encore";
        }
    } else if (titreJeux.innerText === "Extreme") {
        if (jeuxFacile.innerText === "2" && jeuxMoyen.innerText === "5" && jeuxDifficile.innerText === "7" && jeuxExtreme.innerText === "7") {
            bouttonRejouer.style.display = "block"
            imageIndice.style.display = "none"
            bouttonIndice.style.display = "block"
            

            finJeux();
        } else {
            resultatJeux.innerText = "C'est faux, essaye encore";
        }
    }
}

function testFacile() {
    titreJeux.innerHTML = "Facile";
}

function testMoyen() {
    titreJeux.innerHTML = "Moyen";
}

function testDifficile() {
    titreJeux.innerHTML = "Difficile";
}

function testExtreme() {
    titreJeux.innerHTML = "Extreme";
    
}

function rejouer() {
    secondes = 0
    temps.innerText = secondes;
    
   compteurFacile = 0
   compteurMoyen = 5
   compteurDifficile = 1
   compteurExtreme = 8
 

    resultatJeux.innerText = "Clique sur le bouton 'Commencer' puis utilise le bouton 'Click' pour jouer"
    titreJeux.innerText = "Facile";
    jeuxFacile.innerText = compteurFacile;
    jeuxMoyen.innerText = compteurMoyen;
    jeuxDifficile.innerText = compteurDifficile;
    jeuxExtreme.innerText = compteurExtreme;
    
    bouttonRejouer.style.display = "none";
    bouttonIndice.style.display = "none";
    imageIndice.style.display = "none";
    bouttonChanger.style.display = "none";
    bouttonValider.style.display = "none";
    bouttonChangerMoyen.style.display = "none";
    bouttonChangerDifficile.style.display = "none";
    bouttonChangerExtreme.style.display = "none";

    bouttonCommencer.style.display = "block";
    

    testFacile();

}



function finJeux() {
    clearInterval(timerInterval);
            timerInterval = null;

    resultatJeux.innerText = "Votre temps pour accomplir le test est de : " + secondes + " secondes";
    bouttonRejouer.style.display = "block"
    imageIndice.style.display = "none"
    bouttonIndice.style.display = "none"
    bouttonChanger.style.display = "none" 
    bouttonValider.style.display = "none"
    bouttonChangerMoyen.style.display = "none"
    bouttonChangerDifficile.style.display = "none"
    bouttonChangerExtreme.style.display = "none"
}


