var email = ["mario.rossi@gmail.com","giacomo.verdi@gmail.com","fabio.neri@gmail.com"];
var email_utente = prompt("Inserisci la tua email")
console.log(email_utente);
for (var i = 0; i < email.length; i++)
{
  if (email != email_utente) {
    var bool = 0;
  }
  else {
    var bool = 1;
  }
  console.log(email[i]);
  console.log(bool);
}

if (bool == 1) {
  alert("accesso ok")

} else {
  alert("non puoi accedere")
}
