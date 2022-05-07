// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma
let aWord = prompt("Inserisci una parola");
//funzione che restituisce una parola al contrario
function reversedWord(word) {
    let reverseWord = "";
    for (let i = aWord.length -1; i >= 0; i--) {
        reverseWord += aWord[i];    
    }
    return reverseWord;
}
//salvo la variabile e chiamo la funzione
let reverseWord = reversedWord(aWord);
//SE la parola inserita è uguale alla parola inserita e invertita, la parola è palindroma.
if (reverseWord === aWord) {
    alert("la parola inserita è palindroma");
} else {
    alert("la parola inserita non è palindroma");
}    

    

