// Write a function that returns the product of 2 numbers
function product(x, y) {
  return y * x 
}


// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0){
    return true;
  }else{
    return false
  }
};

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a < b){
    return b;
  }else{
    return a;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
}


// Calculate the sum of an array of numbers
 function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i <sumArray.length; i++){
    sum = sum + sumArray[i];
    }
    return sum;
  }



// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  var num = 0;
  for (var i = 0; i <maxOfArray.length; i++){
    return Math.max(numbers)
    }
  
  }


// Return the longest string in an array
function longestString(strings) {
  var longestWord = 0;
  for(var i = 0; i < longestString.length; i++){
    if(longestString[i].length > longestWord){
	longestWord = longestString[i].length;
     }
  }
  return longestWord;
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)){
  return true;
}else {
  return false
}
}
// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
