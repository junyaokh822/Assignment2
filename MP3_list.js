function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };    //rest point to the next node
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) { //iterate from head to null
      array.push(node.value);
    }  
    return array;
  }
  
  function prepend(value, list) { // add a new node to the beginning of a list
    return { value, rest: list };
  }
  
  function nth(list, index) { //return the value of the nth node in a list
    if (!list) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nth(list.rest, index - 1);
    }
  }
  
  console.log(arrayToList([10, 20]));
  // Output: {value: 10, rest: {value: 20, rest: null}}
  
  console.log(listToArray(arrayToList([10, 20, 30])));
  // Output: [10, 20, 30]
  
  console.log(prepend(10, prepend(20, null)));
  // Output: {value: 10, rest: {value: 20, rest: null}}
  
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // Output: 20
  