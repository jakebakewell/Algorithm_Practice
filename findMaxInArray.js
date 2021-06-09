function findMaxInArray(arr) {
    if (arr.length < 1) {
        console.log("Your array is empty");
        return
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}

findMaxInArray([3,1,5,34,23,8]);