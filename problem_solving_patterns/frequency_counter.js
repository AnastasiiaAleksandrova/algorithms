// check if two srtings are anagrams

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let s1 = {};
  let s2 = {};
  for (let char of str1) {
    console.log(char);
    s1[char] = (s1[char] || 0) + 1;
  }
  for (let char of str2) {
    s2[char] = (s2[char] || 0) + 1;
  }
console.log(s1);
  for (let key in s1) {
    if (!(key in s2)) {
      return false;
    }
    if (s1[key] !== s2[key]) {
      return false;
    }
  }
  return true;
}



// check if two numbers have the same frequency of digits

function sameFrequency(n1, n2){
  return validAnagram(n1.toString(), n2.toString());
}

// check if there are duplicated in function's arguments

function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
