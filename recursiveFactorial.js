function rFactorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * rFactorial(n - 1);
}

console.log(rFactorial(5));