class Pseudo {
    static editPseudo() {
        const pseudoInput = document.querySelector('.placeholder_title');
        const validerBtn = document.querySelector('#valider_btn');
        
        // Vérifier si les éléments existent
        if (!pseudoInput || !validerBtn) {
            console.error("Les éléments requis pour l'édition du pseudo n'ont pas été trouvés.");
            return;
        }
        
        validerBtn.addEventListener('click', () => {
            let pseudo = pseudoInput.value;
            localStorage.setItem('pseudo', pseudo);
            document.location.href = "accueil.html";
        });
    }

    static getPseudo() {
        const pseudoElement = document.querySelector("#pseudo");
        
        // Vérifier si l'élément existe
        if (!pseudoElement) {
            console.error("L'élément requis pour l'affichage du pseudo n'a pas été trouvé.");
            return;
        }

        if (!localStorage.pseudo) {
            pseudoElement.textContent = "PSEUDO";
        } else {
            pseudoElement.textContent = localStorage.pseudo;
        }
    }
}

