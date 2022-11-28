/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

let random= Math.floor(Math.random()*names.length)

let name= [];

let randomName

for(i= 0; i<names.length; i++){
  randomName = `${names[random]} ${lastnames[random]}`;
  name.push(randomName)
}

console.log(name)
