
let themeIdNumber = sessionStorage.getItem("categoryId");
let data = JSON.parse(sessionStorage.questions);
let idQuestion = Number(sessionStorage.idQuestion);

// debugger
// SECTION QUESTIONS
// // AFFICHER LA QUESTION
const element = document.querySelector(".question_texte");
element.textContent = data[idQuestion].text;

const elementReponse = document.querySelectorAll(".bouton_question ");
const isCorrect = data[idQuestion].answers[0].is_correct;
const text = data[idQuestion].answers[0].text;

// AFFICHER 4 REPONSES (0,1,2,3)
elementReponse.forEach((choix, index) => {
    choix.textContent = data[idQuestion].answers[index].text;
});

// // ECOUTER LE CHOIX DU JOUER ET REDIRIGER EN FONCTION DE LA REPONSE
const choixJoueur = document.querySelectorAll(".choix");

choixJoueur.forEach((element, index) => {
    element.addEventListener("click", function () {
        const isCorrect = data[idQuestion].answers[index].is_correct;
        sessionStorage.idQuestion++;
        // debugger
        if (isCorrect) {

            // AJOUTER +10 POINTS en sessionStorage
            sessionStorage.score_session = Number(sessionStorage.score_session) + 10;

            // AJOUTER +10 POINTS en localStorage
            localStorage.score_globale = Number(localStorage.score_globale) + 10;


            window.location.href = "bonne_reponse.html";
        } else {
            window.location.href = "mauvaise_reponse.html";
        }
    });

    function sessionScore() {
        const sessionScore = document.querySelector('.session_score');
        let scoreSession = sessionStorage.score_session;
        sessionScore.textContent = scoreSession + " pts";
    }

    sessionScore();
});



