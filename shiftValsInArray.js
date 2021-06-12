function shiftValues(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
    return arr;
}

shiftValues([1,5,6,-2,10]);