function rSum(num) {
    if (num <= 1) {
        return num;
    }
    return num + rSum(num - 1);
}

console.log(rSum(5));