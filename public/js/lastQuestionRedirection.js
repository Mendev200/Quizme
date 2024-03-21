// Cette fonction vérifie si la question actuelle est la dernière question. Si c'est le cas, elle met à jour le lien de redirection vers "scoreScreen.html".
function lastQuestion() {
    // Récupération de l'ID de la question depuis le stockage de session et conversion en nombre.
    let idQuestion = Number(sessionStorage.idQuestion);
    
    // Vérification si l'ID de la question est égal à 10 (dernière question).
    if (idQuestion == 10) {
        // Mise à jour du lien de redirection vers "scoreScreen.html".
        document.querySelector('a').setAttribute("href", "scoreScreen.html");
    }
}

// Appel de la fonction pour vérifier si c'est la dernière question.
lastQuestion();
