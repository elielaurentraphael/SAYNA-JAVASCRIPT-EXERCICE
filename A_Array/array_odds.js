/*
 Créez un fichier array_odds.js et résolvez la fonction ci-dessous :

 Ecrivez une fonction `arrayOdds` qui accepte un tableau de nombres comme argument. 
 La fonction doit retourner un nombre représentant le nombre d'éléments impairs dans le tableau.

 console.log(arrayOdds([4, 7, 2, 5, 9])) ; // 3
 console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; // 4
 console.log(arrayOdds([100, 40, 4])) ; // 0
*/

function arrayOdds(Array) {
    var x = Array.length;
    var i = 0;
    var y = 0;
    while (i < x) {
        if (Array[i] % 2 !== 0) {
            y++;
            i++;
        } else {
            i++
        }
    }
    console.log(y);
}

arrayOdds([4, 7, 2, 5, 9]);
arrayOdds([11, 31, 58, 99, 21, 60]);
arrayOdds([100, 40, 4]);