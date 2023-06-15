//2 Map applies a given callback function to each element of an array and returns a new array containing the results. 
const numbers = [1, 2, 3, 4, 5];

function customMap(array, callback) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i]);
      results.push(result);
    } 
    return results;
  }
  
  const doubled = customMap(numbers, (num) => num * 2);
  console.log(doubled);



