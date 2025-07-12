// leetCode 1 - Two Sum

// brute force
// Time Complexity: O(n^2)
function twoSum(arr , target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j];
            }
        }
    }
}

// optimal soln using hashMap
// Time Complexity: O(n)
function twoSum2(arr , target){
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        const ans = target - arr[i];
        if(map.has(ans)){
            return [map.get(ans), i];
        }
        map.set(arr[i], i);
    }
}

// Test cases
console.log(twoSum([2, 7, 1, 2], 9));   // [0, 1]
console.log(twoSum2([2, 7, 1, 2], 9));  // [0, 1]
