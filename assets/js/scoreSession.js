//SCORE DU QUIZ EN COURS (SessionStorage)
const sessionScore = document.querySelector('.session_score');
let scoreSession = sessionStorage.score_session;

sessionScore.textContent = scoreSession + " pts";

// console.log(scoreSession);
