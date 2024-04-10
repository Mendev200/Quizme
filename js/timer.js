let timerDuration = 30; // Durée initiale du minuteur en secondes
const secText = " sec"; // Texte à ajouter à la valeur du minuteur
const timerSec = document.querySelector('.timer_sec'); // Sélection de l'élément HTML pour afficher le minuteur

function updateTimer() {
    timerDuration--; // Décrémente la durée du minuteur à chaque appel de la fonction
    timerSec.textContent = timerDuration + secText; // Met à jour le contenu de l'élément HTML avec la nouvelle valeur du minuteur

    // Si la durée du minuteur est inférieure à 10 secondes, change la couleur du texte en rouge et ajoute un "0" devant la valeur du minuteur
    if (timerDuration < 10) {
        timerSec.style.color = "red";
        timerSec.textContent = "0" + timerDuration + secText;
    }

    // Si la durée du minuteur atteint 1 seconde, arrête le minuteur (clearInterval) et redirige vers une autre page après 1 seconde (setTimeout)
    if (timerDuration === 1) {
        clearInterval(timer);
        setTimeout(function () {
            document.location.href = "timeElapsed.html";
        }, 1000);
    }
}

// Appel de la fonction updateTimer toutes les 1000 millisecondes pour mettre à jour le minuteur
const timer = setInterval(updateTimer, 1000);
