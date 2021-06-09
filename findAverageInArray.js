function findAverage(arr) {
    if (arr.length < 1) {
        console.log("Your array is emtpy");
        return
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum/arr.length);
    return sum/arr.length;
}

findAverage([2,3,5,8,1,9]);