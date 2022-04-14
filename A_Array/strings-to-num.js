/*
 # Créez un fichier strings-to-num.js et résolvez la fonction ci-dessous :
 // Ecrivez une fonction `stringsToNum` qui accepte un tableau de chaînes de caractères 
 comme argument.

 // La fonction doit renvoyer un nouveau tableau contenant les longueurs des éléments du 
 tableau d'origine.

 console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 4]
 console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
*/

function stringsToNum(tablo) {
    let leng = [];
    for (let i = 0; i < tablo.length; i++) {
        if (i == tablo.length - 1) {
            leng += tablo[i].length;
        } else { leng += tablo[i].length + ", "; }
    }
    console.log("[" + leng + "]");
}

stringsToNum(["orange", "game", "movie", "beau"]);
stringsToNum(["he", "off", "handmade"]);