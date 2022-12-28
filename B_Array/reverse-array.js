/* 
 #Créez un fichier reverse-array.js et résolvez la fonction ci - dessous:

  Ecrivez une fonction `reverseArray` qui accepte un tableau comme argument.

  La fonction doit retourner un tableau contenant les éléments du tableau d'origine dans l'ordre inverse.

 console.log(reverseArray(["Four", "Five", "Six", "Seven"])); // ['Seven', 'Six', 'Five', 'Four']
 console.log(reverseArray([6, 1, 7])); // [7, 1, 6]
*/

let reverseArray = function (arr) {
  let arra = [];
  for (i = arr.length - 1; i >= 0; i--) {
    arra.push(arr[i]);
  }
  return arra;
};

console.log(reverseArray(["Four", "Five", "Six", "Seven"])); // [ 'Seven', 'Six', 'Five', 'Four' ]
console.log(reverseArray([6, 1, 7])); // [ 7, 1, 6 ]
