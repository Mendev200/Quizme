// Sélection des éléments HTML avec les classes spécifiées
const element1 = document.querySelector(".categorie_class1");
const element2 = document.querySelector(".categorie_class2");
const element3 = document.querySelector(".categorie_class3");
const element4 = document.querySelector(".categorie_class4");

// Requête à l'API pour récupérer des catégories
fetch("https://quiz.freefakeapi.io/api/categories?limit=4&random=true", {
  headers: { "Accept-Language": "fr_FR" }, // Spécification de la langue acceptée
})
  .then((response) => {
    return response.json(); // Conversion de la réponse en JSON
  })
  .then((data) => {
    // Boucle pour traiter chaque catégorie récupérée
    for (let i = 0; i < data.length; i++) {
      const categoryName = data[i].name; // Nom de la catégorie
      const categoryId = data[i].id; // ID de la catégorie

      // Mise à jour du texte de l'élément correspondant selon l'index de la boucle
      if (i === 0) {
        element1.textContent = categoryName;
        // Ajout d'un écouteur d'événements pour stocker l'ID de la catégorie dans la session
        element1.addEventListener("click", () => {
          sessionStorage.setItem("categoryId", categoryId);
        });
      } else if (i === 1) {
        element2.textContent = categoryName;
        element2.addEventListener("click", () => {
          sessionStorage.setItem("categoryId", categoryId);
        });
      } else if (i === 2) {
        element3.textContent = categoryName;
        element3.addEventListener("click", () => {
          sessionStorage.setItem("categoryId", categoryId);
        });
      } else if (i === 3) {
        element4.textContent = categoryName;
        element4.addEventListener("click", () => {
          sessionStorage.setItem("categoryId", categoryId);
        });
      }
    }
  })
  .catch((error) => console.log("ERROR")); // Gestion des erreurs
