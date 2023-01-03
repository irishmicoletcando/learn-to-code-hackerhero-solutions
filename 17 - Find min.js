// Given an array with multiple values, write a function that returns the minimum value in the array.

// For example findMin([0,3,-5]) should return -5.

function findMin(arr) {
  if ( arr.length < 1 ) {
    console.log("Array is empty.");
  } else {
    let smallestNumber = arr[0];
  
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] <= smallestNumber ) {
          smallestNumber = arr[i];
        }
    }
    return smallestNumber;
  }
}


findMin([0,3,-5])
findMin([-3,-5,-7])
findMin([-3,5,7])
findMin([3,5,7])