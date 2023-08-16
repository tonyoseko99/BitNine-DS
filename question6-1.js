const palindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return str;
  } else {
    return reversed;
  }
};
console.log(palindrome("hello"));
console.log(palindrome("madam"));
console.log(palindrome("racecar"));
console.log(palindrome("civic"));
console.log(palindrome("level"));
