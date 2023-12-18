var themeIdNumber = sessionStorage.getItem("categoryId");

// SECTION QUESTIONS
fetch("https://quiz.freefakeapi.io/api/categories/" + themeIdNumber + "/questions?limit=10", {
    headers: { "Accept-Language": "fr_FR" },
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        sessionStorage.questions = JSON.stringify(data);
        sessionStorage.score_session = 0;
        sessionStorage.idQuestion = 0;
    })
    .catch((error) => console.log("ERROR" + error));






// 3.2.1 GO et REDIRECTION vers questions.html qui débute une série de 10 questions
function countdown() {

    var count = 3;
    var countdownElement = document.querySelector(".countdown");
    var letsText = document.querySelector(".pret");
    var countdownInterval = setInterval(function () {

        countdownElement.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            letsText.innerText = "LET'S";
            countdownElement.style.color = "#57C124";
            countdownElement.innerText = "GO";

            setTimeout(function () {
                document.location.href = "question.html";
            }, 1000);
        }
    }, 1000);
}

countdown();