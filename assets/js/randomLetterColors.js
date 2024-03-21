document.addEventListener("DOMContentLoaded", function () {
    function addColors() {
        // Utilisation de const pour colors et balises car ils ne sont pas réassignés
        const colors = ["#118C8D", "#FE4DCE", "#4591F8", "#57C124", "#FB4444"];
        const balises = document.querySelectorAll(".colors");
        
        // Utilisation de forEach pour itérer sur les balises, et utilisation de const pour balise car elle est réassignée à chaque itération
        balises.forEach(balise => {
            let texte = balise.textContent;
            let newTexte = "";
            for (let i = 0; i < texte.length; i++) {
                // Utilisation du modulo (%) pour obtenir un index dans la plage des couleurs
                const color = colors[i % colors.length];
                // Utilisation de += pour construire la nouvelle chaîne de caractères une seule fois
                newTexte += `<span style="color: ${color}">${texte[i]}</span>`;
            }
            // Utilisation de innerHTML pour définir le contenu une seule fois
            balise.innerHTML = newTexte;
        });
    }
    
    addColors();
});



