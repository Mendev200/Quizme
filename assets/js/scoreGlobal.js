function getScoreGlobal() {
    const localScores = document.querySelectorAll('.score_global');
    if (localScores.length > 0) {
        let scoreTotal = sessionStorage.getItem('score_session'); // Utilisation de la clé correcte
        if (scoreTotal) {
            localScores.forEach(function(scoreElement) {
                scoreElement.textContent = scoreTotal + " pts";
            });
        } else {
            console.log("Pas de score global dans le sessionStorage");
        }
    }
}

getScoreGlobal();


