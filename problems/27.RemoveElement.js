// leetCode 27 - Remove Element

// هعتبرها إني برجع بعدد الأرقام اللي اللي مش بتساوي ال val
// بعمل override للقيم بتاعة الأراي عشان اشيل منها ال val

// Time: O(n)

var removeElement = function(nums, val) {
    let idx = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[idx] = nums[i];
            idx++;
        }
    }
    return idx;
};

// test
console.log(removeElement([3,2,2,3],3)); // 2