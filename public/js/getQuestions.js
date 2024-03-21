// Récupération de l'ID du thème sélectionné depuis la session
let themeIdNumber = sessionStorage.getItem("categoryId");

// Récupération des questions depuis la session et conversion en objet JavaScript
let data = JSON.parse(sessionStorage.questions);

// Récupération de l'ID de la question depuis la session et conversion en nombre
let idQuestion = Number(sessionStorage.idQuestion);

// Sélection de l'élément HTML pour afficher le texte de la question
const element = document.querySelector(".question_texte");
element.textContent = data[idQuestion].text;

// Sélection de tous les boutons des réponses
const elementReponse = document.querySelectorAll(".bouton_question ");

// Récupération de la première réponse pour vérifier si elle est correcte et pour afficher son texte
const isCorrect = data[idQuestion].answers[0].is_correct;
const text = data[idQuestion].answers[0].text;

// Affichage des textes des réponses dans les boutons correspondants (0, 1, 2, 3)
elementReponse.forEach((choix, index) => {
    choix.textContent = data[idQuestion].answers[index].text;
});

// Écouteurs d'événements pour les choix du joueur
const choixJoueur = document.querySelectorAll(".choix");

choixJoueur.forEach((element, index) => {
    element.addEventListener("click", function () {
        // Vérification si la réponse choisie est correcte
        const isCorrect = data[idQuestion].answers[index].is_correct;
        
        // Incrémentation de l'ID de la question pour passer à la suivante
        sessionStorage.idQuestion++;

        // Redirection en fonction de la réponse choisie
        if (isCorrect) {
            // Si la réponse est correcte, ajoute 10 points à la session et redirige vers la page de réponse correcte
            sessionStorage.score_session = Number(sessionStorage.score_session) + 10;
            window.location.href = "rightAnswer.html";
        } else {
            // Si la réponse est incorrecte, redirige vers la page de réponse incorrecte
            window.location.href = "wrongAnswer.html";
        }
    });
});


