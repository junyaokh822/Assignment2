//1 foreach() -iterates over the array and invokes a callback
const nums = [1,2,3,4];
let squaresrt=(element)=>console.log(element*element);
function displayAllItems(nums,cb) {
  for (let i = 0; i < nums.length; i++) {
       cb(nums[i],i,nums);
  };
}
displayAllItems(nums,squaresrt);

// arr1.foreach(element=>console.log (element));


//2 Map - create a new array with the elements of the old array ad execute a function on each element
// let oldArray = [1, 2, 3, 4, 5];
// let newArray = oldArray.slice();
// function multiplyByTen(newArray) {
//   for ( let i = 0; i < newArray.length; i++) {
//     newArray[i] = newArray[i] * 10;
//   }
//   console.log(newArray);
  
// }
// console.log(multiplyByTen(newArray));


//3 Filter (not done)
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// function filterWords(words) {
//   for (let i = 0; i < words.length; i++) {
//     if ( words[i] > 6) {
//     words.push(words[i]);
//     }
//   }
// }
// console.log(filterWords(words));


//4 Some(Any)- test whether any element in an array pass the test
// const array = [12, 2, 34, 54, 50];
// function isOdd(array) {  
// for (let i = 0; i < array.length; i++) {
//   if (array % 2== 1) {
//       return true;
//     }
//     return false;
//   }
// }
// console.log(isOdd(array));


//5 Every- check whether all elements in an array pass the test
// const array1 = [1, 30, 39, 29, 10, 13];

//   function lessthan40(currentValue) {
//     for(let i =0; i < array1.length; i++) {
//       if(array1[i] >=40) {
//               return false; 
//             }
//           }
//           return true;
          
//   }
//   console.log(array1.every(lessthan40));


