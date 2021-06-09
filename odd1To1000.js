function odd1To1000() {
    let i = 1;
    while (i < 1001) {
        if (i % 2 === 1) {
            console.log(i);
        }
        i++;
    }
}

odd1To1000();