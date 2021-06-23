function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log(`${val} was found at index ${i}`);
            return true;
        }
    }
    console.log(`${val} does not exist in the array`);
    return false;
}

linearSearch([1,2,3,4,5,6], 4);
linearSearch([1,2,3,4,5,6], 30);