function swapFirstLast(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    console.log(arr);
    return arr;
}

swapFirstLast([12,4,5,6,7,8]);