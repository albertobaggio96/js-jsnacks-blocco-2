// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numberArray= [2, 13, 15, 22, 45, 55, 75, 3, 1];

let sum= 0;



for(i=0; i<numberArray.length; i++){
  if(i % 2 === 1){
    sum += numberArray[i]
    console.log(sum)
  }
}

