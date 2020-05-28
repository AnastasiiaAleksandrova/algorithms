function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let s1 = {};
  let s2 = {};
  for (let char in str1) {
    s1[char] = (s1[char] || 0) + 1;
  }
  for (let char in str2) {
    s2[char] = (s2[char] || 0) + 2;
  }

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

console.log(validAnagram("qwerty", "ytrewq"));
