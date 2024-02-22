// Définition d'une classe nommée Pseudo
class Pseudo {
    // Méthode statique pour éditer le pseudo
    static editPseudo() {
        // Récupération des éléments du DOM nécessaires
        const pseudoInput = document.querySelector('.placeholder_title'); // Récupère un élément avec la classe 'placeholder_title'
        const validerBtn = document.querySelector('#valider_btn'); // Récupère un élément avec l'ID 'valider_btn'
        
        // Vérification si les éléments ont été trouvés
        if (!pseudoInput || !validerBtn) { // Si un des éléments n'a pas été trouvé
            console.error("Les éléments requis pour l'édition du pseudo n'ont pas été trouvés."); // Affiche un message d'erreur dans la console
            return; // Sort de la fonction
        }
        
        // Ajout d'un écouteur d'événement sur le clic du bouton de validation
        validerBtn.addEventListener('click', () => {
            let pseudo = pseudoInput.value; // Récupère la valeur saisie dans l'input pseudo
            localStorage.setItem('pseudo', pseudo); // Stocke le pseudo dans le localStorage du navigateur
            document.location.href = "accueil.html"; // Redirige vers la page accueil.html
        });
    }

    // Méthode statique pour obtenir le pseudo
    static getPseudo() {
        const pseudoElement = document.querySelector("#pseudo"); // Récupère un élément avec l'ID 'pseudo'
        
        // Vérification si l'élément a été trouvé
        if (!pseudoElement) { // Si l'élément n'a pas été trouvé
            console.error("L'élément requis pour l'affichage du pseudo n'a pas été trouvé."); // Affiche un message d'erreur dans la console
            return; // Sort de la fonction
        }

        // Vérification si un pseudo est déjà stocké dans le localStorage
        if (!localStorage.pseudo) { // Si aucun pseudo n'est stocké
            pseudoElement.textContent = "PSEUDO"; // Affiche "PSEUDO" dans l'élément pseudo
        } else {
            pseudoElement.textContent = localStorage.pseudo; // Affiche le pseudo stocké dans l'élément pseudo
        }
    }
}
