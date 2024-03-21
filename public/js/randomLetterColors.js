// Cette fonction ajoute des couleurs à chaque lettre du texte à l'intérieur des balises ayant la classe "colors".
function addColors() {
    // Tableau de couleurs à utiliser pour colorer le texte.
    const colors = ["#118C8D", "#FE4DCE", "#4591F8", "#57C124", "#FB4444"];
    
    // Initialisation du compteur pour parcourir le tableau de couleurs.
    let compteur = 0;

    // Sélection de toutes les balises avec la classe "colors".
    let balises = document.querySelectorAll(".colors");

    // Parcours de chaque balise trouvée.
    for (let balise of balises) {
        // Récupération du texte à l'intérieur de la balise.
        let texte = balise.textContent;
        
        // Effacement du contenu de la balise.
        balise.textContent = "";

        // Parcours de chaque lettre du texte.
        for (let lettre of texte.split("")) {
            // Vérification si le compteur dépasse la longueur du tableau de couleurs.
            if (compteur >= colors.length) {
                compteur = 0; // Réinitialisation du compteur.
            }

            // Création d'un élément span pour chaque lettre.
            let element = document.createElement("span");
            
            // Attribution de la couleur correspondante à la lettre.
            element.style.color = colors[compteur];
            
            // Ajout de la lettre colorée à l'élément span.
            element.textContent = lettre;
            
            // Ajout de l'élément span à la balise.
            balise.appendChild(element);
            
            // Incrémentation du compteur pour passer à la couleur suivante.
            compteur++;
        }
    }
}

// Appel de la fonction pour ajouter des couleurs.
addColors();
