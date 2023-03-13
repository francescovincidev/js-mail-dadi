const emails = ["giacomogiacomo@gmail.com","antonio.gioffredi@hotmail.com","chiara.5mani@gmail.com","teresamannino9@hotmail.com","lorenzocatanzaro@hotmail.com"];

let message = "Non hai accesso al servizio";

let email = document.getElementById("email");
let btnEmail = document.getElementById("email-btn");

btnEmail.addEventListener("click", function() {
    userEmail = (email.value).toLowerCase().trim();

for (let i = 0; i < emails.length; i++){
    if (userEmail === emails[i]) {
        message = "Hai accesso al servizio"
    }
    
}
alert(message);
})
