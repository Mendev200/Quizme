document.addEventListener("DOMContentLoaded", function () {
    function lastQuestion() {
        let idQuestion = Number(sessionStorage.idQuestion);
        if (idQuestion == 10) {
            document.querySelector('a').setAttribute("href", "ecran_des_scores.html");
        }
    }

    lastQuestion();
});

