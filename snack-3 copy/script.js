// Calcola la somma dei primi 10 numeri di un array.

const myArray= [1 , 2, 32, 4, 5, 6, 17, 8, 9, 13, 11, 12, 13,];

let sum= 0;

let max= 0;

for(let i = 0 ; i <10; i++){
  sum += myArray[i];
  if(myArray[i]>max){
    max = myArray[i];
  }

}


console.log(sum);

let myMedia= sum / 10;

console.log(myMedia);

console.log(max);
