// leetCode 283. Move Zeroes

// Time: O(n)
var moveZeroes = function(nums) {
    let cnt = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[cnt] = nums[i];
            cnt++;
        }
    }
    for(let i = cnt; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

// test cases
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1,2,3])); // [1,2,3]