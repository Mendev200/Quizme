// Définition de la fonction pour permettre à l'utilisateur de modifier son pseudo
function editPseudo() {
    const pseudoInput = document.querySelector('.placeholder_title'); // Sélection de la zone de saisie du pseudo
    const validerBtn = document.querySelector('#valider_btn'); // Sélection du bouton de validation

    // Ajout d'un écouteur d'événements au clic sur le bouton de validation
    validerBtn.addEventListener('click', () => {
        // Récupération du pseudo saisi par l'utilisateur
        pseudo = pseudoInput.value;
        // Stockage du pseudo dans le stockage local du navigateur sous la clé "pseudo"
        localStorage.setItem('pseudo', pseudo);
        // Redirection vers la page d'accueil après avoir validé le pseudo
        document.location.href = "homepage.html";
    });
}

editPseudo(); // Appel de la fonction pour permettre à l'utilisateur de modifier son pseudo
