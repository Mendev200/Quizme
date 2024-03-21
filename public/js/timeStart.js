function getcategory() {
    let themeIdNumber = sessionStorage.getItem("categoryId"); // Récupère l'ID du thème sélectionné depuis le stockage de session

    // Requête pour récupérer les questions liées au thème spécifié
    fetch("https://quiz.freefakeapi.io/api/categories/" + themeIdNumber + "/questions?limit=10", {
        headers: { "Accept-Language": "fr_FR" }, // Spécification de la langue acceptée
    })
        .then((response) => {
            return response.json(); // Conversion de la réponse en JSON
        })
        .then((data) => {
            sessionStorage.questions = JSON.stringify(data); // Stockage des questions dans le stockage de session au format JSON
            sessionStorage.score_session = 0; // Initialisation du score de la session à 0
            sessionStorage.idQuestion = 0; // Initialisation de l'ID de la première question à 0
        })
        .catch((error) => console.log("ERROR" + error)); // Gestion des erreurs
}

// Fonction pour afficher le compte à rebours avant de commencer les questions
function countdown() {
    let count = 3; // Durée du compte à rebours en secondes
    let countdownElement = document.querySelector(".countdown"); // Sélection de l'élément HTML pour afficher le compte à rebours
    let letsText = document.querySelector(".pret"); // Sélection de l'élément HTML pour afficher "LET'S"
    let countdownInterval = setInterval(function () {
        countdownElement.innerText = count; // Affichage du décompte
        count--; // Décrémentation du compteur
        if (count < 0) {
            clearInterval(countdownInterval); // Arrêt du compte à rebours
            letsText.innerText = "LET'S"; // Affichage de "LET'S"
            countdownElement.style.color = "#57C124"; // Changement de couleur du texte
            countdownElement.innerText = "GO"; // Affichage de "GO"
            setTimeout(function () {
                document.location.href = "question.html"; // Redirection vers la page de questions après 1 seconde
            }, 1000);
        }
    }, 1000); // Interval de mise à jour du compte à rebours (1 seconde)
}

// Appel des fonctions pour récupérer les questions et démarrer le compte à rebours
getcategory();
countdown();
