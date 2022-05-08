// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt("Scegli se giocare con pari o dispari");
// dichiaro variabile booleana per verificare input utente
let choice = true;
while (choice) {
    // finchè input utente è !== da pari e dispari chiedo di ripetere l'operazione
    if (userChoice !== "pari" && userChoice !== "dispari") {
        userChoice = prompt("Scegli con cosa vuoi giocare. Puoi scrivere solo pari o dispari!");
    } else {
        //altrimenti la mia condizione diventa falsa, quindi esco dal ciclo.
        choice = false;
    }
}
let userNumber;
//Verifico che l'utente inserisca effettivamente un numero
let range = true;
//finchè l'utente inserisce una parola o un numero fuori dal range eseguo ciclo
while (isNaN(userNumber) || range) {
    userNumber =  Number(prompt("per favore, inserisci un numero compreso tra 1 e 5"));
    do {
        // Se il numero inserito è < 1 o > 5 chiedo di inserire il valore nel range richiesto
        if (userNumber < 1 || userNumber > 5) {
            userNumber = Number(prompt("Il numero deve essere compreso tra 1 e 5"));
        } else {
            //altrimenti il numero è nel range richiesto, quindi esco dal ciclo
            range = false;
        }
    } while (range); //questa validazione riguarda solo il range
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let pcNumber = getNumber(1, 5);
// Sommiamo i due numeri
let sum = pcNumber + userNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result (num) {
    if (sum % 2 === 1) {
        return "dispari";
    }
    return "pari";
}
// Dichiariamo chi ha vinto.
if (result(sum) === userChoice) {
    document.querySelector(".result").innerHTML = `Complimenti, hai vinto!!<br>(la somma è ${sum}!)`;

} else {
    document.querySelector(".result").innerHTML = `Mi dispiace, hai perso!<br>(la somma è ${sum}!)`;
}
//Stampo su DOM
document.querySelector(".choice").innerHTML = `la tua scelta è:<br>${userChoice}`;
document.querySelector(".user").innerHTML = `il tuo numero:<br>${userNumber}`;
document.querySelector(".cpu").innerHTML = `il numero del pc:<br>${pcNumber}`
