function negToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
    return arr;
}

negToString([1,-2,34,-7]);