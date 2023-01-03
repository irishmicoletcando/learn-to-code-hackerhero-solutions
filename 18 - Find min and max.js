// Given an array with multiple values, write a function that returns a new array with two elements. The first value in the new array should be the minimum value in the original array. The second value in the new array should be the maximum value in the original array.

// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].

function findMinMax(arr) {
  let minMaxArr = [];
  let minNumber = arr[0];
  let maxNumber = arr[0];

  if ( arr.length < 1 ) {
      console.log("Array is empty.");
  } else {
      for ( let i = 0; i < arr.length; i++ ) {
        // finding smallest number
          if ( arr[i] < minNumber ) {
              minNumber = arr[i];
          } 
         // finding largest number 
          if ( arr[i] >= maxNumber ) {
              maxNumber = arr[i];
          }
      } 
      minMaxArr.push(minNumber);
      minMaxArr.push(maxNumber);
      return minMaxArr;
  }
}


findMinMax([1,3,5])
findMinMax([-1,3,5])
findMinMax([-1,-3,-5])
findMinMax([-1, -3, 10])