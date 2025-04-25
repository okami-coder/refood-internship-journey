  # Which exercise did you enjoy the most? Why?
I enjoyed the palindrome checker the most because it’s fun to see how simple logic can solve something cool like word reversal.
# 2. Which JavaScript method or approach did you use for each task?
EXERCISE 1 : Used .split(), .reverse(), and .join()
EXERCISE 2 : Using Math.max + spread
EXERCISE 3 :Used a for loop with an if
EXERCISE 4 : Used a for loop to compare characters
EXERCISE 5 :Even number sum: Used a for loop with an if check for even numbers
#  Can you improve any of your solutions to be shorter or cleaner?

//  Exercise 1 : Writing a function that takes a string and returns it reversed.

    function reverseString(str) {
        return str.split('').reverse().join('');
         }
           alert(reverseString("hello"));// Output : "olleh"
  
 Improved Version:
const reverseString = str => [...str].reverse().join('');
alert(reverseString("hello"));  // Output: "olleh"


---------------------------------------------------------------------------------------

// Exercise 2: Finding the Maximum Number :

      function findLargestNumber(arr) {
           return Math.max(...arr);
            }
              alert(findLargestNumber([4, 1, 10, 2])); // Output: 10

Improved Version:

const findLargestNumber = arr => Math.max(...arr);
alert(findLargestNumber([4, 1, 10, 2])); // Output: 10

-------------------------------------------------------------------------------------------

// Exercise 3: Counting Vowels in a String 
const v = 'aeiouAEIOU';
let ct = 0;
           function countVowels(str) {
           for (let i = 0; i < str.length; i++) {
           if (v.includes(str[i].toLowerCase())) { ct++;}
              }
           return ct;
            }

Improved Version:

const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

-------------------------------------------------------------------------------------------

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

Improved Version:

const isPalindrome = word => {
  word = word.toLowerCase();
  return word === [...word].reverse().join('');
};

-----------------------------------------------------------------------------------------------

  
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

  Improved Version:

  const sumEvenNumbers = arr =>
  arr.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);


