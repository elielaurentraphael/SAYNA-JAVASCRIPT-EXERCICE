/*
 #Créez un fichier longest-word.js et résolvez la fonction ci - dessous:

 // Ecrivez une fonction `longestWord` qui accepte une chaîne de phrase comme argument.

 // La fonction doit retourner le mot le plus long de la phrase. S'il y a une égalité, 
 elle renvoie le mot qui apparaît le plus tard.

 console.log(longestWord("I am pretty hungry")); // 'hungry' (faim)
 console.log(mot le plus long("nous devrions penser en dehors de la boîte")); // "à l'extérieur".
 console.log(longestWord("down the rabbit hole")); // "rabbit" (lapin)
 console.log(longestWord("elephant down")); // "elephant".
*/


function longestWord(phrase) {
    const arr = phrase.split(' ');
    let leng = [];
    for (let i = 0; i < arr.length; i++) {
        leng.push(arr[i].length);
    }
    return leng

    function maximum(leng) {
        return Math.max.apply(null, leng);
    }
}

console.log(longestWord("I am pretty hungry"));