// leetCode 485 - Max Consecutive Ones

// Time: O(n)
var findMaxConsecutiveOnes = function(nums) {
    let l = 0;
    let maxi = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            l++;
        }
        if (i === nums.length-1 || nums[i]!==1){
            if(l > maxi){
                maxi = l;
            }
            l = 0;
        }
    }
    
    return maxi;
};
// test cases
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // Output: 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // Output: 2