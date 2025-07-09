// leetCode 2626 - Array Reduce Transformation
// This file includes two implementations of reduce:
// 1. Imperative style: using a for loop (explicit steps)
// 2. Declarative style: using the built-in Array.reduce (more expressive)
//
// Imperative: tells the computer *how* to do it (step by step).
// Declarative: tells the computer *what* result we want without focusing on how.
//
// Both achieve the same result, but the declarative approach is often cleaner and easier to read.


function reduce(nums,fn,init){
    let val = init;

    for(let i = 0; i < nums.length; i++){
        val = fn(val,nums[i]);
    }
    return val;
}

//test 
const fn = function sum(accum, curr) { return accum + curr; }
const nums = [1,2,3,4];
const init = 0;
console.log(reduce(nums,fn,init));


// using built-in
function reduce2(nums,fn,init){
    return nums.reduce(fn,init);
}
console.log(reduce2(nums,fn,init));