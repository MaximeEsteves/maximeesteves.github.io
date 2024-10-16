const box =[1 ,2, 3, 4, 5, 6, 7, 8, 9]
const image=[
    "jeux/indice/indicefacile.png",
    "jeux/indice/indicemoyen.png",
    "jeux/indice/indicedifficile.jpg", 
    "jeux/indice/indiceextreme.png"]

const titreJeux = document.querySelector("h2")
const resultatJeux = document.querySelector("h3")
const grille = document.querySelectorAll("p")
const jeuxFacile = document.getElementById("5")
const jeuxMoyen = document.getElementById("1")
const jeuxDifficile = document.getElementById("3")
const jeuxExtreme = document.getElementById("8")
const bouttonCommencer = document.getElementById("commencer")
const bouttonChanger = document.getElementById("changerFacile")
const bouttonValider = document.getElementById("valider")
const bouttonChangerMoyen = document.getElementById("changerMoyen")
const bouttonChangerDifficile = document.getElementById("changerDifficile")
const bouttonChangerExtreme = document.getElementById("changerExtreme")
const bouttonIndice = document.getElementById("indice")
const bouttonRejouer = document.getElementById("rejouer")
const temps = document.getElementById("timer")
const imageIndice = document.getElementById("imageIndice")


let compteurFacile = 0
let compteurMoyen = 5
let compteurDifficile = 1
let compteurExtreme = 8
let secondes = 0
let timerInterval
let click = 0