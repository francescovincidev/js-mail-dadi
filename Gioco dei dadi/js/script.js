
// inseriamo un numero da 1 a 6
let userNumber = document.getElementById("gamer-number");
let btnGame = document.getElementById("btnGame");

let pcNumber;

let message = "";


btnGame.addEventListener("click", function () {
    userNumber = parseInt(userNumber.value);
    // Generiamo un numero da i a 6 per il pc
    pcNumber = Math.floor(Math.random() * 6) + 1;

    // se il valore non è compreso fra 1 e 6 o non è un numero dai errore
    if (userNumber < 0 || userNumber > 6 || isNaN(userNumber)) {
        alert("Inserisci un numero da 1 a 6, ricarica la pagina");
    } else {

        // se tutto è regolare  
        if (userNumber > pcNumber) {
            message = "HAI VINTO!!!";

        } else if (userNumber === pcNumber) {
            message = "Pari";

        } else {
            message = "Hai perso, ha vinto il computer :(";
        }

        // output
        document.getElementById("computer-number").innerHTML += `${pcNumber}`;
        document.getElementById("winner").innerHTML = `${message}`;

    }

})

