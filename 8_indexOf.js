//8.The indexOf() method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
const pets = ['dog', 'cat', 'rabbit', 'hamster'];

function customIndexOf(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
    return -1;
}

const hamsterIndex = customIndexOf(pets, 'hamster');
console.log(hamsterIndex); 

const catIndex = customIndexOf(pets, 'cat');
console.log(catIndex); 

const eagleIndex = customIndexOf(pets, 'eagle');
console.log(eagleIndex); 
