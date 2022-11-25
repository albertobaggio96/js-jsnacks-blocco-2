// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let myArray= []

for(let i=0; i<6; i++){
  const myNumber = parseInt(prompt("inserisci un numero"));

  if (myNumber % 2 === 0){
    console.log(myNumber)
    myArray.push(myNumber)
  }
}

console.log(myArray)