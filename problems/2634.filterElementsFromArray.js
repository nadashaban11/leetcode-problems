// leetCode  2634 - Filter Elements from  Array



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