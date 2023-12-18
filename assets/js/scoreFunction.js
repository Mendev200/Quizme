// Initialisation du score global à 0
var scoreSession = 0;
var scoreGlobal = localStorage.score_globale;

// Boucle à travers les 10 questions
for (var i = 1; i <= 10; i++) {

    // Récupération de la réponse de l'utilisateur à la question i (ici, on suppose qu'on utilise prompt() pour récupérer la réponse)
    

    // Vérification si la réponse de l'utilisateur est correcte (ici, on suppose que la réponse correcte est 'a')
    if (reponseUtilisateur === "a") {
        // Ajout de 10 points au score global pour chaque bonne réponse
        scoreSession += 10;
    }
}



// Affichage du score global à la fin des 10 questions
console.log("Votre score de session est de " + scoreSession + " points !");
console.log("Et Votre score Global est de " + (Number(scoreGlobal) + Number(scoreSession)) + " points !");

console.log(Number(scoreGlobal) + Number(scoreSession))





// INCREMENT QUESTION DE 1 jusque 10


// function questionCountNumber() {

//     var count = 1;
//     var questionNumber = document.querySelector('.question_numbers');

//     var countdownInterval = setInterval(function () {

//         questionNumber.innerText = count;
//         count++;

//         if (count < 10) {

//             questionNumber.innerText = count++;

//         }
//     }, 1000);
// }

// questionCountNumber();

