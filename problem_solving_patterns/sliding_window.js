// find max sum of subarray with the length of num

function maxSubarraySum(arr, num){
    if (arr.length < num) {
        return null;
    }
    let max = 0;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    max = sum;
    for (let i = num; i < arr.length; i++) {
        sum = sum - arr[i - num] + arr[i];
        max = Math.max(max, sum);
    }
    return max;
}

// return the minimum length of continuous subarray, where sum of elements is equal or greater than num
// return 0, if there is no

function minSubArrayLen(arr, num) {
    let start = 0;
    let end = 1;
    let result = Infinity;
    let sum = arr[start];
    while (start < arr.length) {
        if (sum >= num) {
            result = Math.min(result, end - start);
            sum -= arr[start];
            start++;
        } else if (sum < num && end <= arr.length) {
            sum += arr[end];
            end++;
        } else {
            break;
        }
    }
    return result === Infinity ? 0 : result;
}

// find longest substring with distinct characters

function findLongestSubstring(str){
    let seen = {};
    let start = 0;
    let end = 0;
    let result = 0;
    while (end < str.length) {
        if ((str[end] in seen) && (seen[str[end]] >= start)) {
            result = Math.max(result, end - start);
            start = seen[str[end]] + 1;
        }
        seen[str[end]] = end;
        end++;
    }
    return Math.max(result, end - start);
}
