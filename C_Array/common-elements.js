/*
 #Créez un fichier common - elements.js et résolvez la fonction ci - dessous:

 // Écrivez une fonction `commonElements` qui accepte deux tableaux en tant que arguments.
 // La fonction doit retourner un nouveau tableau contenant les éléments qui se trouvent dans 
 les deux tableaux d'entrée. L'ordre des éléments dans le tableau de sortie n'a pas d'importance 
 tant que la fonction renvoie les bons éléments.

 let arr1 = ["a", "c", "d", "b"];
 let arr2 = ["b", "a", "y"];
 console.log(commonElements(arr1, arr2)); // ['a', 'b']
 let arr3 = [4, 7];
 let arr4 = [32, 7, 1, 4];
 console.log(commonElements(arr3, arr4)); // [4, 7] ;
*/

function commonElements(arr1, arr2) {
    let arr3 = [];
    let i = 0;
    do {
        for (let x of arr2) {
            if (arr1[i] == x) {
                arr3.push(arr1[i]);
            }
        }
        i++;
    }
    while (i < arr1.length);
    console.log(arr3);
}

commonElements(["a", "c", "d", "b"], ["b", "a", "y"]);
commonElements([4, 7], [32, 7, 1, 4]);