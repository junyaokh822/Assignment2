//11. object.key()-The Object.keys() static method 
//returns an array of a given object's own enumerable string-keyed property names.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  const keys = customKeys(person);
  
  function customKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  
  console.log(keys); // Output: ['name', 'age', 'city']