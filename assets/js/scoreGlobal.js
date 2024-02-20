function getScoreGlobal() {
    const localScore = document.querySelector('#score_global');
    if (localScore) {
        let scoreTotal = localStorage.getItem('score_globale');
        if (scoreTotal) {
            localScore.textContent = scoreTotal + " pts";
        } else {
            console.log("Pas de score global dans le localStorage");
        }
    }
}

getScoreGlobal();