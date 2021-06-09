function arrayWithOdds() {
    let newArr = [];
    for (let i = 0; i < 256; i++) {
        if (i % 2 === 1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
    return newArr;
}

arrayWithOdds();