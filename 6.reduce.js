//6.reduce
const numbers = [1, 2, 3, 4, 5];

function customReduce(array, callback, initialValue) {
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
const sum = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

