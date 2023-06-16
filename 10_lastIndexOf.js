//10. lastIndexOf() -The lastIndexOf() method returns the last index at which a
//given element can be found in the array, or -1 if it is not present. 
//The array is searched backwards, starting at fromIndex.
const numbers = [1, 2, 3, 4, 3, 2, 1];

function myUnshift(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === num) {
        return i;
      }
    }
    return -1;
  }

const lastIndex = myUnshift(numbers, 3);
console.log(lastIndex); // Output: 4

const nonExistentIndex = myUnshift(numbers, 5);
console.log(nonExistentIndex); // Output: -1