function iFibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[n]);
    return arr[n];
}

iFibonacci(4);
iFibonacci(0);
iFibonacci(1);
iFibonacci(6);