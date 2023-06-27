function reverseString(word) {

}

function isPalindrome(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Break the string into an array
  Reverse the array
  Join back the array
  Check if its equal to the original string
  Return true or false
*/

/*
  My code takes a string and converts it to an array then reverses it 
  then rejoins the array into a string then checks if its equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

