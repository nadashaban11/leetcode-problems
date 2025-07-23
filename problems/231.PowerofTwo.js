// leetCode 231 - Power of Two

// Time: O(1)
var isPowerOfTwo = function(n) {
    return (n !== 0 && Math.log2(n) === Math.floor(Math.log2(n)));
};

// Time: O(log n)
var isPowerOfTwo = function(n) {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2) return false;
        n = n / 2;
    }

    return true;
};


// test cases

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(10));