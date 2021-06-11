function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let arrInfo = {
        maxNum: max,
        minNum: min,
        avgNum: sum/arr.length
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`The max is: ${max}, the min is: ${min}, the average is: ${sum/arr.length}`);
    return arrInfo;
}

maxMinAvg([-2,3,20,6,-4,15]);