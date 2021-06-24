function rBS(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return rBS(arr, l, mid - 1, x);
        return rBS(arr, mid + 1, r, x);
    }
    return -1;
}

let array = [-90,-19,0,2,12,29,33,190,320];
console.log(rBS(array, 0, array.length - 1, 190));
console.log(rBS(array, 0, array.length - 1, 10));