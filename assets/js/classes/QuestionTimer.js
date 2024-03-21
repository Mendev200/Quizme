class QuestionTimer {
    constructor(duration, secText) {
        this.timerDuration = duration;
        this.secText = secText;
    }

    start() {
        this.setupQuestion();
        this.startTimer();
    }

    setupQuestion() {
        // Récupérer l'identifiant du thème de la catégorie depuis le stockage de session
        let themeIdNumber = sessionStorage.getItem("categoryId");

        // Récupérer les données des questions depuis le stockage de session et les parser en JSON
        let data = JSON.parse(sessionStorage.questions);

        // Récupérer l'identifiant de la question depuis le stockage de session et le convertir en nombre
        let idQuestion = Number(sessionStorage.idQuestion);

        // Sélectionner l'élément contenant le texte de la question
        const element = document.querySelector(".question_texte");

        // Afficher le texte de la question
        element.textContent = data[idQuestion].text;

        // Sélectionner tous les boutons de réponse
        const elementReponse = document.querySelectorAll(".bouton_question ");

        // Boucler à travers chaque bouton de réponse et afficher le texte correspondant à la question
        elementReponse.forEach((choix, index) => {
            choix.textContent = data[idQuestion].answers[index].text;
        });

        // Sélectionner tous les choix de l'utilisateur
        const choixJoueur = document.querySelectorAll(".choix");

        // Ajouter un écouteur d'événement à chaque choix de l'utilisateur
        choixJoueur.forEach((element, index) => {
            element.addEventListener("click", function () {
                // Vérifier si la réponse choisie par l'utilisateur est correcte
                const isCorrect = data[idQuestion].answers[index].is_correct;

                // Incrémenter l'identifiant de la question dans le stockage de session
                sessionStorage.idQuestion++;

                // Mettre à jour le score de la session dans le stockage de session et dans le stockage local si la réponse est correcte
                if (isCorrect) {
                    sessionStorage.score_session = Number(sessionStorage.score_session) + 10;
                    localStorage.score_globale = Number(localStorage.score_globale) + 10;
                    // Rediriger vers la page de bonne réponse
                    window.location.href = "bonne_reponse.html";
                } else {
                    // Rediriger vers la page de mauvaise réponse si la réponse est incorrecte
                    window.location.href = "mauvaise_reponse.html";
                }
            });

            // Fonction pour afficher le score de la session
            function sessionScore() {
                const sessionScore = document.querySelector('.session_score');
                let scoreSession = sessionStorage.score_session;
                sessionScore.textContent = scoreSession + " pts";
            }

            // Appeler la fonction pour afficher le score de la session
            sessionScore();
        });
    }

    startTimer() {
        const timerSec = document.querySelector('.timer_sec');
        const timer = setInterval(updateTimer.bind(this), 1000);

        function updateTimer() {
            this.timerDuration--;
            timerSec.textContent = this.timerDuration + this.secText;

            if (this.timerDuration < 10) {
                timerSec.style.color = "red";
                timerSec.textContent = "0" + this.timerDuration + this.secText;
            }

            if (this.timerDuration === 0) {
                clearInterval(timer);
                setTimeout(function () {
                    document.location.href = "temps_ecoule.html";
                }, 1000);
            }
        }
    }
}


