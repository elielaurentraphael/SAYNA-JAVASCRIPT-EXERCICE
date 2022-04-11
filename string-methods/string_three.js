let phrase = "Let the cat out of the bag";
console.log(phrase[phrase.length]); // undefined
console.log(phrase[phrase.length - 1]); // g
console.log(phrase[phrase.length - 2]); // a
const i = 7;
const char = phrase[i];
console.log(char); // " " (space)
console.log(phrase.indexOf(char)); // 3
console.log(phrase.slice(2, 8)); // "t the "
console.log("abcdefg".slice(1, 3)); // "bc"
console.log("abcdefg".slice(2)); // "cdefg"
console.log("abcdefg".slice(4)); // "efg"
console.log("abcdefg".slice(2, -1)); // "cdef"
console.log("abcdefg".slice(2, -2)); // "cde"