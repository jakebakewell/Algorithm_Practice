function createRandArray() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.random() * (101 - 0) + 0);
    }
    console.log(array);
    return array;
}

createRandArray();