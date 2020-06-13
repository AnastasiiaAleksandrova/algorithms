function linearSearch(arr, el) {
    for (let ind in arr) {
        if (arr[ind] === el) return ind;
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 89, 5], 5)); 
console.log(linearSearch([1, 2, 3, 89, 5], 4)); 