/*
 # Créez un fichier number-range.js et résolvez la fonction ci - dessous:

 // Ecrivez une fonction `numberRange(min, max, step)` qui accepte comme arguments trois nombres comme, `min`, `max`, et `step`. 

 // La fonction doit retourner tous les nombres entre `min` et `max` avec un intervalle de `step`.

 //`min` et `max` sont inclusifs.


 console.log(numberRange(10, 40, 5)); // [10, 15, 20, 25, 30, 35, 40]
 console.log(numberRange(14, 24, 3)); // [14, 17, 20, 23].
 console.log(nombreRange(8, 35, 6)); // [8, 14, 20, 26, 32]
*/

function numberRange(min, max, step) {
    let x = min - step;
    let arr = [];
    while (x <= max) {
        if (x <= max - 2 * step) {
            x += step;
            arr += x + ", ";
        } else {
            x += step;
            arr += x;
            break;
        }
    }
    console.log("[" + arr + "]");
}

numberRange(10, 40, 5);
numberRange(14, 24, 3);
numberRange(8, 35, 6);