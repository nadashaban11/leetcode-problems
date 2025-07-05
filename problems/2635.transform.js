//leetCode 2635 - Apply Transform over each Element in Array 


let map = (arr , cb)=>{
    let newArr = [];
    arr.forEach((element, ind) => {
        newArr[ind]=cb(element , ind);
    });
    return newArr;
};


// another soln
let map2 = (arr,cb)=>{
    return arr.map(cb);
};


// third soln
let map3 = (arr,cb)=>{
    let ans = [];
    for(let i in arr){
        ans[i] = cb(arr[i],Number(i));
    }
    return ans;
}

//test
function plusOne(n) { return n + 1; };
let arr = [1,2,3];
let transformed = map(arr,plusOne);
console.log(transformed);
transformed = map2(arr,plusOne);
console.log(transformed);
transformed = map3(arr,plusOne);
console.log(transformed);
