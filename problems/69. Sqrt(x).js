
// leetCode Problem: 69. Sqrt(x)

// Time: O(Sqrt(X))

var mySqrt = function(x) {
    let i = 0;
    while(i*i < x){
        i++;
    }
    if(i*i > x)
        return i - 1;
    return i;
};

//using built-in Math.sqrt()
// time: O(1)
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
}

// test cases
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2