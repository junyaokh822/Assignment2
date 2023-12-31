//4. some() - The some() method tests whether at least one element in 
//the array passes the test implemented by the provided function. (return true or false)
const numbers = [1, 2, 3, 4, 5];
const hasEven = mySome(numbers, (num) => num % 2 === 0);

function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }


console.log(hasEven); 



