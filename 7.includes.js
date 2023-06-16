//7.includes() check whether an array contains a certain item
const pets = ['dog', 'cat', 'rabbit', 'hamster'];

function customIncludes(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return true;
      }
    }
    return false;
  }
  
  const hasCat = customIncludes(pets, 'cat');
  console.log(hasCat); 
  
  const hasEagle = customIncludes(pets, 'eagle');
  console.log(hasEagle); 
  