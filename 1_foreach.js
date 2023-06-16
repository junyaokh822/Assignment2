//1 foreach() -iterates over the array and each element invokes mulByTen function
const nums = [1,2,3,4];
let mulByTen=(element)=>console.log(element*10);

function myEach(nums,cb) {
  for (let i = 0; i < nums.length; i++) {
       cb(nums[i],i,nums);
  };
}

myEach(nums,mulByTen);
