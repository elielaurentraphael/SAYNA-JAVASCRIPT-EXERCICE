/* 
 #Créez un fichier maximum.js et résolvez la fonction ci - dessous:

 // Ecrivez une fonction `maximum` qui accepte un tableau de nombres comme argument.

 // La fonction doit retourner le plus grand nombre du tableau. Si le tableau est vide, la fonction doit 
 renvoyer null.

 console.log(maximum([4, 6, 3, 9])); // 9
 console.log(maximum([13, 15, 21, 11, 2])); // 21
 console.log(maximum([])); // null
*/


function maximum(arr) {
    if (arr.length === 0) {
        return null;
    } else { return Math.max.apply(null, arr); }
}

console.log(maximum([4, 6, 3, 9])); // 9
console.log(maximum([13, 15, 21, 11, 2])); // 21
console.log(maximum([])); // null