// leetCode 1929 - Concatenation of Array
// Both solutions have a time complexity of O(n).


// brute force soln
var getConcatenation = function(nums) {
    let concat = [], cur = 0;
    for(let i = 0; i < 2*nums.length; i++){
        concat[i] = nums[cur % nums.length];
        cur++;
    }
    return concat;
};

// using built in function
var getConcatenation = function(nums) {
    return nums.concat(nums)
}


// test
console.log(getConcatenation([1,2,1]));