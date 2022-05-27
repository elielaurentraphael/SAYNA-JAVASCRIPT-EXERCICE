/*
 Créez les fichiers ci-dessous dans le dossier A_array et résolvez les problèmes.

 # array_sum.js

 // Ecrivez une fonction `arraySum` qui accepte un tableau de nombres comme argument. 
 La fonction doit retourner la somme totale de tous les éléments du tableau.

 console.log(arraySum([6, 2, 3])) ; // 11
 console.log(arraySum([7, 6, -5, 2])) ; // 10
 console.log(arraySum([8])) ; // 8
 console.log(arraySum([])) ; // 0
*/

function arraySum(tableau) {
    let sum = 0;
    let i = 0;
    for (i = 0; i < tableau.length; i++) {
        sum += tableau[i];
    }
    console.log(sum);
}

arraySum([6, 2, 3]); // 11
arraySum([7, 6, -5, 2]); // 10
arraySum([8]); // 8
arraySum([]); // 0