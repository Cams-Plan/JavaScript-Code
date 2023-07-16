/* PROBLEM 1*/

// Using the modulo operator
// complete the function called even that takes in an integer
// and returns (not console.log) a boolean

// Complete the function below
const even = num => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  };
};

console.log(even(3)) // => false
console.log(even(4)) // => true

/* PROBLEM 2 */

// Using the modulo operator
// write a function called odd that takes in an integer
// and returns (not console.log) a boolean

// Write your function below
const odd = num => (num % 0) ? false:true;

console.log(odd(3)) // => true

/* PROBLEM 3 */

// complete the function called howManyEvens that takes in an integer and returns (not console.log) how many even numbers are in the array 

// Complete the function below
const howManyEvens = arr => {
  let result = 0;
  for (let num of arr) {
    if (arr[num] % 2 == 0){
      result ++;
    }
  };
  // You will need to define result
  return result
};


ar = [7, 19, 33, -5, -99, 6, 12]
console.log(howManyEvens(ar)) // =? 2

/* PROBLEM 4 */

// write a function called howManyOdds that takes in an integer and returns (not console.log) how many odd numbers are in the array 

// Write your function below
const howManyOdds = array => {
  let numOfOdds = 0;
  for (let num in array) { 
//     array[num] = Math.abs(array[num]);
    if (array[num] % 2 != 0) {
      numOfOdds ++;
    }
  };
  return numOfOdds;
};

ar = [7, 19, 33, -5, -99, 6, 12];

console.log(howManyOdds(ar)) // => 5

/* PROBLEM 5 */

// complete the function capitalise that takes in a word and returns a capitalised string

// Complete the function below
const capitalise = (word) => {
  let capitalisedWord = word.toUpperCase();
  
  // You will have to define the variable
  return capitalisedWord
}

console.log(capitalise("hELLo")) // => Hello
console.log(capitalise("betH")) // => Beth
console.log(capitalise("jaGaN")) // => Jagan
console.log(capitalise("sergI")) // => Sergi

/* PROBLEM 6 */

// complete the function swapcase that takes in a word and returns a swapcased string
// the lowercase letters will be uppercased and vice versa

// Complete the function below
const swapcase = (word) => {
  let new_word = "";
  for (letter in word){
    //If Check if uppercase
    if (word[letter] == word[letter].toUpperCase()){
      new_word += word[letter].toLowerCase(); //change to lowercase
    } else if (word[letter] != word[letter].toUpperCase()){
      new_word += word[letter].toUpperCase(); //change to uppercase
    };
  }
  return new_word
};

console.log(swapcase("hELLo")) // "HellO"
console.log(swapcase("betH")) // "BETh"
console.log(swapcase("jaGaN")) // "JAgAn"
console.log(swapcase("sergI")) // "SERGi"

/* PROBLEM 7 */

/* PROBLEM 11 */

// complete the sum function that takes in an array
// and returns (not console.log) the sum of its elements

// Complete the function below
const sum = (arr) => {
  result = 0;
  for (let num of arr){
    result +=num;
  }
  return result;
}

ar = [7, 19, 33, -5, -99, 6, 12]
console.log(sum(ar)) //=> -27

/* PROBLEM 8*/

/* PROBLEM 9 */
