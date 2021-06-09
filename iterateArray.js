function iterateArray(arr) {
    if (arr.length < 1) {
        console.log("Your array is empty");
        return
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

iterateArray([1,3,5,3,6,7]);