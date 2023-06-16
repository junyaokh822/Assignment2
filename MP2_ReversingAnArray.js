function reverseArray(array) {
  let r = [];
  for (let i = array.length - 1; i >= 0; i--) {
    r.push(array[i]);
  }
  return r;
}

function reverseArrayInPlace(array) {
  let begin = 0;
  let end = array.length - 1;
  while (begin < end) {
    let temp = array[begin];
    array[begin] = array[end];
    array[end] = temp;
    begin++;
    end--;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// Output: ["C", "B", "A"]
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// Output: [5, 4, 3, 2, 1]
