//9. push() - The push() method adds the specified elements 
//to the end of an array and returns the new length of the array.
const numbers = [1, 2, 3];
const newLength = myPush(numbers, 4, 5, 6);

function myPush(array, ...items) {
    for (let i = 0; i < items.length; i++) {
      array[array.length] = items[i];
    } 
    return array.length;
  }  
  
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(newLength); // Output: 6

