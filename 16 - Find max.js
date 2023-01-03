// Given an array with multiple values, write a function that returns the maximum number in the array.

// For example, findMax([-3,3,5,7]) should return 7

function findMax(arr) {
  if ( arr.length < 1 ) {
    console.log("Array is empty.");
  } else {
    let largestNumber = arr[0];
  
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] >= largestNumber ) {
          largestNumber = arr[i];
        }
    }
    return largestNumber;
  }
}


findMax([-3,3,5,7])
findMax([-3,3,15,7])
findMax([13,3,5,7])
findMax([0,-3,-5,-7])
findMax([3])
findMax([-1,-3,-5,-7])