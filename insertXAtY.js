function insertXAtY(arr, x, y) {
    arr.splice(y, 0, x);
    console.log(arr);
    return arr;
}

insertXAtY([1,5,1,1,1], "Hello", 1);