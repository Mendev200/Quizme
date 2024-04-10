// Fonction pour afficher le score de la session
function sessionScore() {
    const sessionScoreElement = document.querySelector('.session_score'); // Sélection de l'élément HTML pour afficher le score de la session
    const scoreGlobal = document.getElementById("score_global"); // Sélection de l'élément HTML pour afficher le score global
    let scoreSession = sessionStorage.score_session; // Récupération du score de la session depuis le stockage de session

    // Vérification si le score de session existe et n'est pas null
    if (scoreSession !== null && !isNaN(scoreSession)) {
        sessionScoreElement.textContent = scoreSession + " pts"; // Affichage du score de session
        // Vérification si l'élément pour afficher le score global existe
        if (scoreGlobal !== null) {
            scoreGlobal.textContent = scoreSession + " pts"; // Affichage du score global
        }
    } else {
        sessionScoreElement.textContent = "Score indisponible"; // Affichage d'un message si le score de session est indisponible
        // Effacer le contenu du score global si le score de session est indisponible
        if (scoreGlobal !== null) {
            scoreGlobal.textContent = "";
        }
    }
}

// Appel de la fonction pour afficher le score de la session
sessionScore();
