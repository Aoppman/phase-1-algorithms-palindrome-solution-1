function reversedString(word) {
  // create an array from the input string
  // reverse the array
  // create a string from the reversed array
  // return the reversed string
  return word.split("").reverse().join("");
};

function isPalindrome(word) {
  //reverse the input string 
  const reversedWord = reversedString(word);
  //if the reversed string is the same as the input
  return word === reversedWord;
};

/* 
  Add your pseudocode here
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

function 'reverseString' splits the letters of the string apart into an array
  and then reverses the array so that the orginial string is now backwards,
  it then rejoins the seperate letters in the array back into a reversed verion 
  of the original input string.

  Then the function 'isPalindrome' checks to see if the original
  input string and the newly returned input sting are a palindrome
  and returns true if so, otherwise returns false.

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
