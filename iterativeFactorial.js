function iFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    console.log(result);
    return result;
}

iFactorial(5);