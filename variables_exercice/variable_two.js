let mango;
console.log(mango); // undefined
mango = 10; // premier assignement
console.log(mango); // 10
mango + 1; // expression invalide
console.log(mango); // 10
mango += 1; // incrementation valide
console.log(mango); // 11
let banana = mango;
console.log(banana); // 11
banana = banana / 2;
console.log(banana); // 5.5
console.log(mango) // 11