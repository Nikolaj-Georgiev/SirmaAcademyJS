function palindromeCheck(word) {
  let length = word.length / 2;
  let isPalindrome = true;

  for (let i = 0; i <= length; i++) {
    if (word.charAt(i) != word.charAt(word.length - i - 1)) {
      isPalindrome = false;
      break;
    }
  }

  console.log(isPalindrome);
}


palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("racecar");

palindromeCheck("java");
palindromeCheck("madam");