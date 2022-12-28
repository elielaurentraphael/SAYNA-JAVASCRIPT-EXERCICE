/*
 #Créez un fichier longest-word.js et résolvez la fonction ci - dessous:

 Ecrivez une fonction `longestWord` qui accepte une chaîne de phrase comme argument.

 La fonction doit retourner le mot le plus long de la phrase. S'il y a une égalité, 
 elle renvoie le mot qui apparaît le plus tard.

 console.log(longestWord("I am pretty hungry")); // 'hungry' (faim)
 console.log(mot le plus long("nous devrions penser en dehors de la boîte")); // "à l'extérieur".
 console.log(longestWord("down the rabbit hole")); // "rabbit" (lapin)
 console.log(longestWord("elephant down")); // "elephant".
*/

/* function longestWord(phrase) {
  const arr = phrase.split(" ");
  let x;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && x.length === arr[i].length) {
      x = arr[i];
    } else if (i > 0 && x.length < arr[i].length) {
      x = arr[i];
    } else if (i > 0 && x.length > arr[i].length) {
      x = x;
    } else {
      x = arr[i];
    }
  }
  return x;
} */

function longestWord(phrase) {
  const arr = phrase.split(" ");

  function length(string) {
    return string.length;
  }
  const arr1 = arr.map(length);
  let arr2 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === Math.max(...arr1)) {
      let count = arr2.push(i);
    }
  }
  return arr[Math.max(...arr2)];
}

console.log(longestWord("I am pretty hungry")); // hungry
console.log(longestWord("nous devrions penser en dehors de la boîte")); // devrions
console.log(longestWord("down the rabbit hole")); // rabbit
console.log(longestWord("elephant down")); // elephant
