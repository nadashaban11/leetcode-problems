// leetCode 169. Majority Element

// Time Complexity: O(n logn)

var majorityElement = function(nums) {
    nums.sort();
    const maj = Math.floor(nums.length / 2);
    let cnt = 1;

    if(nums.length === 1) return nums[0];

    for(let i = 0; i < nums.length - 1; i++){

        if(nums[i] === nums[i+1]){
            cnt++;
        }
        else{
            cnt = 1;
        }

        if(cnt > maj){
            return nums[i];
        }
    }

};


// more efficient soln O(n)

var majorityElement = function(nums) {
    let cnt = 0;
    let cand = 0;

    for(let i of nums){
        if(cnt === 0){
            cand = i;
        }

        if(cand !== i){
            cnt--;
        }
        else{
            cnt++;
        }
    }

    return cand;
};

// test cases
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2