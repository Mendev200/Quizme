// Définition de la fonction pour récupérer et afficher le pseudo
function getPseudo() {
    const pseudoElement = document.querySelector(".pseudo"); // Sélection de l'élément HTML avec la classe ".pseudo"
    if (!localStorage.pseudo) { // Vérification de l'existence du pseudo dans le stockage local
        pseudoElement.textContent = "PSEUDO"; // Si le pseudo n'existe pas, affiche "PSEUDO" par défaut
    } else {
        pseudoElement.textContent = localStorage.pseudo; // Si le pseudo existe, affiche le pseudo stocké localement
    }
}

getPseudo(); // Appel de la fonction au chargement de la page pour afficher le pseudo
