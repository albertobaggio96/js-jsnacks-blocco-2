// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let myNumber = parseInt(prompt("inserisci un numero"))

if(myNumber % 2 === 0){
  console.log(myNumber)
}else if (myNumber % 2 === 1){
  console.log(myNumber+1)
}else{
  console.log("non è un numero")
}