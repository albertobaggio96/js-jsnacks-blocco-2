// Calcola la somma dei primi 10 numeri di un array.

const myArray= [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];

let sum= 0;

for(let i = 0 ; i <10; i++){
  sum += myArray[i]
}

console.log(sum)

let myMedia= sum / 10
console.log(myMedia)