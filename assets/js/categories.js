const element1 = document.querySelector(".categorie_class");
const element2 = document.querySelector(".categorie_class2");
const element3 = document.querySelector(".categorie_class3");
const element4 = document.querySelector(".categorie_class4");

fetch("https://quiz.freefakeapi.io/api/categories?limit=4&random=true", {
  headers: { "Accept-Language": "fr_FR" },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // boucle pour récuperer l'id du theme selectionné
    for (let i = 0; i < data.length; i++) {
      const categoryName = data[i].name;
      const categoryId = data[i].id;
      if (i === 0) {
        element1.textContent = categoryName;
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
  .catch((error) => console.log("ERROR"));
