function sumOdd() {
    let sum = 0;
    let i = 1;
    while (i < 5001) {
        if (i % 2 === 1) {
            sum += i;
        }
        i++;
    }
    console.log(sum);
}

sumOdd();