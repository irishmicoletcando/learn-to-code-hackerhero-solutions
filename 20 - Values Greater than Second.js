// Given an array, write a function that prints values that are greater than its 2nd value in the array.

// For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at least 2 values. Have the function also return the sum of the numbers that were printed/logged.

function valGreaterThanSecond(arr) {
  let sum = 0;

  // checks if array has 2 or more elements
  if ( arr.length >= 2 ) {
  for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] > arr[1] ) {
          sum += arr[i]
          console.log(arr[i]);
      }
  } return sum;    
  }
}


valGreaterThanSecond([1,3,5,7,9,13])
valGreaterThanSecond([1,3,-5,7,-9,13]) 
valGreaterThanSecond([1,5,3,7,0,19])