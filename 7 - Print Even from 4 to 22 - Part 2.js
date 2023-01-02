// Create a function that prints/logs all the even numbers from 4 to 22.

// Have it also return the sum of all the numbers that were printed.

function printEven4to22() {
  let sum = 0;

  for ( let num = 4; num <= 22; num+=2 ) {
    // displays even numbers from 4 to 22  
    console.log(num) 
    // adds even numbers to get the sum and return it
    sum += num
  }
  return sum
}