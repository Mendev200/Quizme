function lastQuestion() {
    let idQuestion = Number(sessionStorage.idQuestion);
    if (idQuestion == 10) {
        document.querySelector('a').setAttribute("href", "scoreScreen.html");
    }
}

lastQuestion();


