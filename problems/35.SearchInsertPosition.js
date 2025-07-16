// leetCode 35 - Search Insert Position

// O(Log n)

// the most important idea here: (start) shows where to put the number to keep nums in order

var searchInsert = function(nums, target) {
    const idx = binarySearch(nums,target);
    return idx; 
};


function binarySearch(nums, n){
    let start = 0;
    let end = nums.length-1;
    let mid;
    while(end>=start){
        mid = Math.floor((start + end)/2);
        if(nums[mid] === n){
            return mid;
        }
        else if(nums[mid] < n){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return start;
}


// test cases
console.log(searchInsert([1,3,5,6],5)); // 2
console.log(searchInsert([1,3,5,6],2)); // 1
console.log(searchInsert([1,3,5,6],7)); // 4