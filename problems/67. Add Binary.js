// leetCode 67. Add Binary

var addBinary = function(a, b) {
    let res = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(a[i]); 
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        res = (sum % 2) + res; 
        carry = Math.floor(sum / 2); 
    }

    return res;
};

// test case
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"