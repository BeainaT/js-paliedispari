// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt("Scegli se giocare con pari o dispari");
let userNumber;
//Verifico che l'utente inserisca effettivamente un numero
do {
    userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
} while (isNaN(userNumber));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getNumber (num) {
    randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}
let pcNumber = getNumber();
console.log(pcNumber);
// Sommiamo i due numeri
let sum = pcNumber + userNumber;
console.log(sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result (num) {
    if (sum % 2 === 1) {
        return "dispari";
    }
    return "pari";
}
// Dichiariamo chi ha vinto.
if (result(sum) === userChoice) {
    console.log("user vince");
} else {
    console.log("user perde");
}