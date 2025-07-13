// leetCode 268 - Missing Number
// Time Complexity: O(n)
// Space Complexity: O(1)

var missingNumber = function(nums) {
    const allNums = (nums.length * (nums.length + 1)) / 2;
    const missed = allNums - addNums(nums);
    return missed;
};

function addNums(nums){
    let res = 0;
    for(const i of nums)
        res += i;
    return res;    
}

// test cases
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0, 1, 2])); // 3
console.log(missingNumber([0])); // 1
