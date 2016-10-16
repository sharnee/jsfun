/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

 var sumOfArray = function (numArray){
	var container = 0;
		for ( i=0; i< numArray.length; i = i+1){
        var element = numArray[i]
           container = container + element;
          container = container + numArray[i]
	}
   return container
  };

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function (numArray){
  var hightestNum = 0
  for (i= 0; i< numArray.length; i++){
    if (isNaN(numArray[i])){
      return NaN
    }
    if (numArray[i] > hightestNum){

      hightestNum = numArray[i]
    }
    }
  return hightestNum
}


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbal){
  
  symbal=symbal.toLowerCase()
  var myVowels = ["a","e","i","o","u"]
 for (i=0; i<myVowels.length; i++){
 if (symbal=== myVowels[i]){
       return true
     }
}
 return false 
};

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse =function (someString) {
  var outPutString = '';
  for (var i = someString.length - 1; i >= 0; i--)
    outPutString += someString[i];
  return outPutString;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")



/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

//how do you know if a numb is a multipule of 3 or 5

var fizzbuzz = function ( someNumN){
var numPush = ''
  for(var i=1; i<someNumN; i++){
    var mod5 = i % 5
    var mod3 = i % 3
//     var el = someNumN[i]
     if ( mod5 && mod3 === 0) {
       numPush = numPush + 'fizzbuzz'
    }else if (mod5 === 0) {
      numPush = numPush + 'buzz'
    } else if (mod3 === 0){
     numPush = numPush + 'fizz'
    }else{ 
     numPush = numPush + '.'
    }
  }
  return numPush
};

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE

// name the function
// create a container for outPutString
// split the string into individule strings
// using a for loop at the index 0 go down the string and compare each indivstring 
// find the length of each indiString and compare it to the length of the next indivstring
// keep the longest word and discard the shortest
// return the longest word
var longestWord = ' '
var findLongestWord = function (inputString){
  var splitString = inputString.split(' ')
  var splitLength = splitString[0].length;
  for (var i=1; i<splitString.length; i++){
    var indexLength = splitString[i].length;
          if (indexLength > splitLength){
            splitLength = indexLength
            longestWord = splitString[i]
  }
 }
 return longestWord
};
console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function () {

}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);







