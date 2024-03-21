function addColors() {
    const colors = ["#118C8D", "#FE4DCE", "#4591F8", "#57C124", "#FB4444",];
    let compteur = 0;
    let balises = document.querySelectorAll(".colors");
    for (let balise of balises) {
        let texte = balise.textContent;
        balise.textContent = "";
        for (let lettre of texte.split("")) {
            if (compteur >= colors.length) {
                compteur = 0;
            }
            let element = document.createElement("span");
            element.style.color = colors[compteur];
            element.textContent = lettre;
            balise.appendChild(element);
            compteur++;
        }
    }
}

addColors();



