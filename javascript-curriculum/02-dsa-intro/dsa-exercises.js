//  Exercise 1 : Writing a function that takes a string and returns it reversed.
    function reverseString(str) {
        return str.split('').reverse().join('');
         }
           alert(reverseString("hello"));// Output : "olleh"

  

// Exercise 2: Finding the Maximum Number :
      function findLargestNumber(arr) {
           return Math.max(...arr);
            }
              alert(findLargestNumber([4, 1, 10, 2])); // Output: 10


// Exercise 3: Counting Vowels in a String 
const v = 'aeiouAEIOU';
let ct = 0;
           function countVowels(str) {
           for (let i = 0; i < str.length; i++) {
           if (v.includes(str[i].toLowerCase())) { ct++;}
              }
           return ct;
            }

// Exercise 4: Checking for Palindrome  
function isPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false; 
      }
    }
    return true;
  }
  
// Exercise 5: Sum of Even Numbers
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        sum += arr[i];      
      }
    }
    return sum; 
  }
  




  
