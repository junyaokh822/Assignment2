//2 Map() applies a given callback function to each element of an array and 
//returns a new array containing the results. 
const numbers = [1, 2, 3, 4, 5];
const doubled = myMap(numbers, (num) => num * 2);

function myMap(array, cb) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      const result = cb(array[i],i,array);
      results.push(result);
    } 
    return results;
  }
  
  
  console.log(doubled);



