function squareValues(arr) {
    if (arr.length < 1) {
        console.log("Your array is empty");
        return
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
    return arr;
}

squareValues([2,3,4,5,6]);