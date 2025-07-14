// leetCode 349 - Intersection of Two Arrays
// Time: O(n + m)
// set => to remove duplicates

var intersection = function(nums1, nums2) {
    let setNums2 = new Set(nums2);
    let ans = new Set();   
    for(const i of nums1){
        if(setNums2.has(i)){
            ans.add(i);
        }
    }
    return Array.from(ans);
};

// test
const intersec = intersection([1,2,2,1],[2,2]);
console.log(intersec); // [ 2 ]