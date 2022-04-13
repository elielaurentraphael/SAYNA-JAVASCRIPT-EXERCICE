function divisors(number) {
    var arr = [];
    var i = 1;
    while (i <= number) {
        if ((number % i) === 0 && i < number) {
            arr += i + ", ";
            i++;
        } else if (i === number) {
            arr += i
            i++;
        } else {
            i++;
        }
    }
    console.log("[" + arr + "]")
}

divisors(15)
divisors(7)
divisors(24)