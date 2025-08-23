// leetCode 26. Remove Duplicates from Sorted Array

// Time: O(n)   

var removeDuplicates = function(nums) {
    let unique = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[unique] = nums[i]; 
            unique++;
        }
    }
   return unique;
};

//test 
let arr = [1, 1, 2];
let newLength = removeDuplicates(arr);
console.log(newLength); // 2
console.log(arr.slice(0, newLength)); // [1, 2]