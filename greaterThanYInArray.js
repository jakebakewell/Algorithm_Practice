function greaterThanY(arr, y) {
    let greaterThanSum = 0;
    if (arr.length < 1 || y == null || y == undefined) {
        console.log("Array must not be empty and y must be a valid number");
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            greaterThanSum += 1;
        }
    }
    console.log(`The number of values greater than ${y} in the array is ${greaterThanSum}`);
    return greaterThanSum;
}

greaterThanY([2,7,4,5,8,3], 4);