//5.The every() method tests whether all elements in the array
// pass the test implemented by the provided function. It returns a Boolean value.

const numbers = [11, 2, 93, 42, 45];

function customSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }

const lookForTwo = customSome(numbers, (num) => num === 2);
console.log(lookForTwo); 

