// -----  scroll bar ---- //
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    
    const startPoint = -10000; // Début de la ligne à 200 pixels du haut de la fenêtre
    const endPoint = documentHeight; // Point B en bas de la page
    
    const scrollPercentage = (scrollTop - startPoint) / (documentHeight - windowHeight - startPoint); // Calcul du pourcentage de défilement
    
    const line = document.getElementById('line');
    const line2 = document.getElementById('line2');

    line.style.height = scrollPercentage * (endPoint - startPoint) + 'px'; // Ajustement de la hauteur de la ligne 1
    line.style.top = startPoint + 'px';

    line2.style.height = scrollPercentage * (endPoint - startPoint) + 'px'; // Ajustement de la hauteur de la ligne 2
    line2.style.top = startPoint + 'px';
    
    if (scrollTop < startPoint) {
        line.style.display = 'none';
        line2.style.display = 'none';
    } else if (scrollTop > endPoint) {
        line.style.display = 'none';
        line2.style.display = 'none';
    } else {
        line.style.display = 'block';
        line2.style.display = 'block';
    }
});
