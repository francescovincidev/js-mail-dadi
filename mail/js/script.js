// creamo l'array
const emails = ["giacomogiacomo@gmail.com", "antonio.gioffredi@hotmail.com", "chiara.5mani@gmail.com", "teresamannino9@hotmail.com", "lorenzocatanzaro@hotmail.com"];


let message = "Non hai accesso al servizio";

//creamo le variabili e prendiamo i dati da html
let email = document.getElementById("email");
let btnEmail = document.getElementById("email-btn");


// Controlliamo l'email tramite il pulsante
btnEmail.addEventListener("click", function () {
    userEmail = (email.value).toLowerCase().trim();

    // ciclo per controlalre se l'email è presente
    for (let i = 0; i < emails.length; i++) {
        if (userEmail === emails[i]) {
            message = "Hai accesso al servizio"
        }

    }
    alert(message);
})
