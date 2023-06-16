//1 foreach() -iterates over the array and each element invokes mulByTen function
const nums = [1,2,3,4];

let mulByTen=(element)=>console.log(element*10);

function display(nums,cb) {
  for (let i = 0; i < nums.length; i++) {
       cb(nums[i],i,nums);
  };
}


display(nums,mulByTen);
