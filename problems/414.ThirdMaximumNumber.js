// leetCode  414 - Third Maximum Number

// Time: O(n logn)
var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a);
    const set = new Set(nums);
    let c = 1;
    if(nums.length <= 2 || set.size <= 2)
        return nums[0];
    for(const i of set){
        if(c === 3){
            return i;
        }
        c++;
    }

};

// test cases

console.log(thirdMax([3, 2, 1]));       // 1
console.log(thirdMax([1, 2]));          // 2
console.log(thirdMax([2, 2, 3, 1]));    // 1
console.log(thirdMax([5, 2, 2]));       // 5