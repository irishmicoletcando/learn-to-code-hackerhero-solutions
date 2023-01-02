// Given an array, write a function that returns a new array where each negative value was converted to a positive value.

// For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array should remain as positive, so that each number in the new array is all positive.

function bePositive(arr) {
    const positiveNumbersArr = [];

    for ( let num of arr ) {
        if ( num < 0 ) {
            num = num * -1;
            positiveNumbersArr.push(num);
        } else {
            positiveNumbersArr.push(num);
        }
    } 

    return positiveNumbersArr;

    // or 

    // for ( let i = 0; i < arr.length; i++ ) {
    //     if ( arr[i] < 0 ) {
    //         arr[i] = arr[i] * -1;
    //     }
    // } 
    
    // return arr
}

bePositive([-1,-3,-5])
bePositive([-1,-3,-5, 7, -9])
bePositive([0,2,4, -6, -8])
bePositive([-1])