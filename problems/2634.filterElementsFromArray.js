// leetCode  2634 - Filter Elements from  Array

/**
 * Custom filter function without using Array.prototype.filter
 * Time Complexity: O(n) — where n is the length of the array
 * Space Complexity: O(n) — for storing the filtered result
 */

let filter = function (arr , cb){
    let filterd = [];
        for(let i= 0; i < arr.length; i++){
            if(cb(arr[i],i)){
                filterd.push(arr[i]);
            }
        }
    return filterd;
};

//tests

function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
let arr = [0,10,20,30];
let newArray = filter(arr, greaterThan10); // [20, 30]
console.log(newArray);
arr = [1,2,3];
newArray = filter(arr,firstIndex);
console.log(newArray);    // [ 1 ]


// using built-in function
function ans (arr , cb){
    return(arr.filter(cb));
}

arr = [0,10,20,30];
newArray = ans(arr, greaterThan10); // [20, 30]
console.log(newArray);
arr = [1,2,3];
newArray = ans(arr,firstIndex);
console.log(newArray);    // [ 1 ]