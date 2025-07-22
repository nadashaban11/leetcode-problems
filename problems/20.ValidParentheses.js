// leetCode 20 - Valid Parentheses

var isValid = function(s) {
    if(s.length % 2) return false;
    let arr = [];
    for(const i of s){
        if(i === '(' || i === '{' || i === '['){
            arr.push(i);
        }
        else{
            if(i === ']' && arr[arr.length-1] === '['
            ||i === '}' && arr[arr.length-1] === '{'
            ||i === ')' && arr[arr.length-1] === '(')
                arr.pop();
            else{
                return false;
            }
        }
    } 
    if(arr.length === 0) return true;
    else return false;
};

// test 
console.log(isValid('{}[](]'));