/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];


let name= [];

let randomName;

let howMany= parseInt(prompt("quanti nomi"))

for(i= 0; i<howMany; i++){
  let random= Math.floor(Math.random()*names.length);
  randomName = `${names[random]} ${lastnames[random]}`;
  name.push(randomName);
}

console.log(name);
