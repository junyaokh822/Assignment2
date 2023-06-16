//12. object.values() - The Object.values() static method returns an array 
//of a given object's own enumerable string-keyed property values.
const obj = {
    name: 'Jay',
    age: 20,
    city: 'New Jersey'
  };
  const values = objectValues(obj);

  function objectValues(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Object.values called on non-object');
    }
    const values = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  
  console.log(values); // Output: ['Jay', 20, 'New Jersey']
  
