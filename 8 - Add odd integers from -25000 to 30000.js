// Add odd integers from -25,000 to 30,000 and have the function return its final sum. Is there a short cut?

function addOddInts(){
  let sum = 0;

  for ( let num = -24999; num <= 29999; num+=2) {
      sum += num;
  }
  return sum;
}