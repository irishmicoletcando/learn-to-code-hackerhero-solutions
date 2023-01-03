// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

function addSevenToMost(arr) {
  for ( let i = 0; i < arr.length; i++ ) {
    arr[i] = arr[i] + 7;   
  }
    
  // removes first element in arr
  arr.shift()
    
  return arr;
}


addSevenToMost([1,3,5])
addSevenToMost([1,3,5,7])
addSevenToMost([5,10,20])