// leetCode 1 - Two Sum

// brute force
//complexity : o(n^2)
function twoSum(arr , target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length && i!==j; j++){
            if(arr[i] + arr[j] === target){
                return [i,j];
            }
        }
    }
};

console.log(twoSum([2,7,1,2] , 9));