// check if there are duplicates in function's arguments

function areThereDuplicates(arg1, arg2, arg3 ) {
    let sortedArgs = [...arguments].sort();
    for (let i = 0, j = 1; j < sortedArgs.length; i++, j++) {
        if (sortedArgs[i] === sortedArgs[j]) {
            return true;
        }
    }
    return false;
}

// check if there is a pair of elements in sorted array where the everage of pair equals target everage

function averagePair(arr, everage){
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let evPair = (arr[i] + arr[j]) / 2;
        if (evPair === everage) {
            return true;
        } else if (evPair > everage) {
            j--;
        } else if (evPair < everage) {
            i++;
        }
    }

    return false;
}

// check if characters from the first string appear somewhere in the secont string without order change

function isSubsequence(str1, str2) {
    let i = 0, j = 0;
    
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        } 
    }
    
    return i === str1.length;
}
