document.getElementById("velemenyUrlap").addEventListener("submit", function(event) {
    let nevMezo = document.getElementById("nev");
    let emailMezo = document.getElementById("email");
    let velemenyMezo = document.getElementById("velemeny");

    if (nevMezo.value.trim() === "") {
        alert("A név megadása kötelező!");
        event.preventDefault();
        return;
    }

    if (emailMezo.value.trim() === "") {
        alert("Az e-mail megadása kötelező!");
        event.preventDefault();
        return;
    }

    if (velemenyMezo.value.trim() === "") {
        alert("A vélemény megadása kötelező!");
        event.preventDefault();
        return;
    }

    
    alert("Véleményed sikeresen elküldve!");

    
    nevMezo.value = "";
    emailMezo.value = "";
    velemenyMezo.value = "";

    event.preventDefault(); 
});