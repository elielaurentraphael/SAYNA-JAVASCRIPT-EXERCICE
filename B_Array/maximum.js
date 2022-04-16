/* 
 #Créez un fichier maximum.js et résolvez la fonction ci - dessous:

 // Ecrivez une fonction `maximum` qui accepte un tableau de nombres comme argument.

 // La fonction doit retourner le plus grand nombre du tableau. Si le tableau est vide, la fonction doit renvoyer null.

 console.log(maximum([4, 6, 3, 9])); // 7
 console.log(maximum([13, 15, 21, 11, 2])); // 19
 console.log(maximum([])); // null
*/

/*
function maximum(arr) {
    if (arr == null) {
        return null;
    } else {
        arr.sort(function(a, b) { return b - a });
        return arr[0];
    }
}
*/

function maximum(arr) {
    return Math.max.apply(null, arr);
}

console.log(maximum([4, 6, 3, 9]));
console.log(maximum([13, 15, 21, 11, 2]));
console.log(maximum([]));