/*
 # Créez un fichier make-acronym.js et résolvez la fonction ci - dessous:

 Ecrivez une fonction `makeAcronym` qui accepte une chaîne de phrases comme argument.

 La fonction doit retourner une chaîne de caractères contenant le premier caractère de chaque mot 
    de la phrase en lettres capitales.

 console.log(makeAcronym("los Angeles")); // LA
 console.log(makeAcronym("same stuff different day")); // SSDD
 console.log(makeAcronym("Laugh out loud")); // LOL
 console.log(makeAcronym("don't over think stuff")); // DOTS
 */

let makeAcronym = function (phrase) {
  let arr = phrase.split(" ");
  let chai = [];
  for (const x of arr) {
    chai.push(x[0].toUpperCase());
  }
  return chai;
};

console.log(makeAcronym("los Angeles")); //  LA
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
