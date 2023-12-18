
    const pseudoInput = document.querySelector('.placeholder_title');
    const validerBtn = document.querySelector('#valider_btn');

    validerBtn.addEventListener('click', () => {
        pseudo = pseudoInput.value;
        localStorage.setItem('pseudo', pseudo);
        document.location.href = "accueil.html";
    });
