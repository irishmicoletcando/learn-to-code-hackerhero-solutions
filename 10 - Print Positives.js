// Given an array, write a function that only prints/logs its positive value.

// For example, printPositives([-1,3,-5, 10]) prints/logs 3, 10.

function printPositives(arr) {
  for ( let num of arr ) {
    if ( num >= 0 ) {
      console.log(num);
    };
  };
}