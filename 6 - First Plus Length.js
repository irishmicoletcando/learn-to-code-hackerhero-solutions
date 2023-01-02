// Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers.

function firstPlusLength(arr){
  // const arrayLength = arr.length
  // const firstNumber = arr[0]
  console.log(arr[0] + arr.length)
}


firstPlusLength([1,2,5])
firstPlusLength([3,0,2,5])
firstPlusLength([-5,0,2,5])
firstPlusLength([1])