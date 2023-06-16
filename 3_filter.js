//3. The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test 
//implemented by the provided function.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);

function myFilter(array, cb) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i, array)) {
        results.push(array[i]);
      }
    }
    return results;
  }

  console.log(evenNumbers); 
  