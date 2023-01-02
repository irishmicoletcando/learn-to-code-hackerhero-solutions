// Given an array of multiple values, write a function that returns the sum of its numbers.

// For example, findSum([1,2,3]) should return 6.

function findSum(arr){
  let sum = 0;

  for (let i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  } 
  return sum;
}

findSum([1,2,3])
findSum([1,3,5])
findSum([-1,2,-3])
findSum([-2,0,2])