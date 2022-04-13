/*
 Créez un fichier divisors.js et résolvez la fonction ci-dessous :

 Ecrivez une fonction `divisors` qui accepte un nombre comme argument.

 La fonction doit retourner un tableau contenant tous les nombres positifs qui peuvent être divisés en arguments.


 console.log(divisors(15)) ; // [1, 3, 5, 15].
 console.log(divisors(7)) ; // [1, 7] (en anglais)
 console.log(divisors(24)) ; // [1, 2, 3, 4, 6, 8, 12, 24]
*/

function divisors(number) {
    var arr = [];
    var i = 1;
    while (i <= number) {
        if ((number % i) === 0 && i < number) {
            arr += i + ", ";
            i++;
        } else if (i === number) {
            arr += i;
            i++;
        } else {
            i++;
        }
    }
    console.log("[" + arr + "]")
}

divisors(15);
divisors(7);
divisors(24);