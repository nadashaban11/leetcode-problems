//leetCode  9 - Palindrome Number
// First approach (isPalindrome): uses string conversion 
// Second approach (isPalind): uses math only, more optimal


let isPalindrome = function(x) {
    let a = x.toString();
    let i = 0 , j = a.length - 1;
    while(i < a.length && j >= 0){
        if(a[i] !== a[j])return false;
        i++;
        j--;
    }
    return true; 
};

let isPalind=function (x){
    if(x<0) return false;
    let rev = 0;
    while(x>rev){
        rev =rev * 10 + x % 10;
        x = Math.floor(x/10);
    }
    if (x === rev || x === Math.floor(rev/10))
        return true;
    return false;
}


// test cases
console.log(isPalindrome(121));
console.log(isPalind(121));
console.log(isPalindrome(122));
console.log(isPalind(11));