//6.reduce - is a higher-order function available for arrays that applies a provided callback function 
//to reduce the array to a single value. It iterates over each element of the array and accumulates 
//a result by performing a specified operation on each element.
const numbers = [1, 2, 3, 4, 5];
const sum = myReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

function myReduce(array, callback, initialValue) {
    let start = 0;
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    if (initialValue === undefined) {
      start = 1;
    }
    for (let i = start; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    } 
    return accumulator;
  }

console.log(sum);

