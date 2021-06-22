function removeNegatives(arr) {
    let i = 0;
    while (i !== arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        if (arr[i] > 0) {
            i++;
        }
    }
    console.log(arr);
    return arr;
}

removeNegatives([1,-2,-3,6,-9,-1,8]);