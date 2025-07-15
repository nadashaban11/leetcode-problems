//leetCode 3131 - Find the Integer Added to Array I

// Time: O(n logn)
var addedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    return nums2[0] - nums1[0];
};

// Time: O(n)
var addedInteger = function(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1);
};

// ✅ Test cases:
console.log(addedInteger([2, 6, 4], [9, 7, 5]));        // 3
console.log(addedInteger([10], [5]));                   // -5
console.log(addedInteger([1, 2, 3], [4, 5, 6]));         // 3