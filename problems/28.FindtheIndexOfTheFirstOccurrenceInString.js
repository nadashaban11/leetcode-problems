// leetCode 28 - Find the Index of the First Occurrence in a String

// brute force O(n * m)

var strStr = function(haystack, needle) {
    let j = 0;
    let idx ;
    for(let i = 0; i < haystack.length; i++){
        idx = i;
        if(haystack[i] === needle[j]){
            j++;
        }
        else{
            i = i - j;
            j = 0;
        }
        if(j === needle.length)
            return idx + 1 - needle.length;   
    }
    
    return -1;
};

// using built-in indexOf
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// test cases

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "bleetoba")); // -1