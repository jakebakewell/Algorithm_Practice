function iBS(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end)/2);
        if (arr[middle] === num) {
            return console.log(`${num} occurs at array index ${middle}`);
        }
        if (num > arr[middle]) {
            start = middle + 1;
        }
        if (num < arr[middle]) {
            end = middle - 1;
        }
    }
    console.log("Target value not found in array");
}

var array = [1,2,6,9,15,16,19,33,55];
iBS(array, 33);
iBS(array, 7);