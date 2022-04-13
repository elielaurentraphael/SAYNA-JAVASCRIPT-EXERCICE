function divisors(number) {
    var text = [];
    var i = 1;
    while (i <= number) {
        if ((number % i) === 0 && i < number) {
            text += i + ", ";
            i++;
        } else if (i === number) {
            text += i
        } else {
            i++;
        }
    }
    console.log("[" + text + "]")
}

divisors(24)