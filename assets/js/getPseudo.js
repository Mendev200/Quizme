
const pseudoElement = document.querySelector(".pseudo");

if (!localStorage.pseudo) {
    pseudoElement.textContent = "PSEUDO";
} else {
    pseudoElement.textContent = localStorage.pseudo;
}

addColors();