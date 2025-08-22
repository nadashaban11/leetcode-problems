// leetCode 171. Excel Sheet Column Number

// Time: O(n)

var titleToNumber = function(columnTitle) {
    let p = 0;
    let ans = 0;
    for(let i = columnTitle.length - 1; i >= 0; i--){
        const cur = Number(columnTitle[i].charCodeAt(0) - 65) + 1;
        ans += cur * Math.pow(26,p);
        p++;
    }
    return ans;
};

// test cases
console.log(titleToNumber("A")); // 1
console.log(titleToNumber("Z")); // 26
console.log(titleToNumber("AA")); // 27
console.log(titleToNumber("AB")); // 28