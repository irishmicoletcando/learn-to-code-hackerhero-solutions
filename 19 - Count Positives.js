// Given array of numbers, create function to replace last value with number of positive values.

// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  let positiveNumArr = [];
  let positiveNumArrLength = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] >= 0 ) {
        positiveNumArr.push(arr[i]);
    }
  }
  positiveNumArrLength = positiveNumArr.length;

  // deleting last element in arr
  arr.pop();

  // replacing the last element we removed with length of positiveNumArr
  arr.push(positiveNumArrLength);

  return arr;

  // or

  // let count = 0;

  // for ( let i = 0; i < arr.length; i++ ) {
  //   if ( arr[i] >= 0 ) {
  //       count++;
  //   }
  // }

  // arr[arr.length-1] = count;
  // return arr;  
}

countPositives([-1,1,1,1])
countPositives([-1,-5,-5,10])
countPositives([1,2,3,2])