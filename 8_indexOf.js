//8.The indexOf() method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
const pets = ['dog', 'cat', 'rabbit', 'hamster'];

function myIndexOf(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
    return -1;
}

const hamsterIndex = myIndexOf(pets, 'hamster');
console.log(hamsterIndex); 

const catIndex = myIndexOf(pets, 'cat');
console.log(catIndex); 

const eagleIndex = myIndexOf(pets, 'eagle');
console.log(eagleIndex); 
