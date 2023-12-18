// si id question est = à 10 tu changes le lien href

let idQuestion = Number(sessionStorage.idQuestion);

if (idQuestion == 10) {
    document.querySelector('a').setAttribute("href", "ecran_des_scores.html");
}