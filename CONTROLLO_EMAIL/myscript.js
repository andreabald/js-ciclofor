var email = ["mail-1@gmail.com","mail-2@gmail.com","mail-3@gmail.com","mail-4@gmail.com","mail-5@gmail.com"];
var email_utente = prompt("Inserisci la tua email")

for (var i = 0; i < email.length; i++)
{
  if (email[i] == email_utente) {
    var bool = 1;
  }
}

if (bool == 1) {
  alert("Accesso autorizzato")

} else {
  alert("La tua e-mail non è nella lista")
}
