function eliminateNegs(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}

eliminateNegs([-2,3,5,6,-5,7,-9]);