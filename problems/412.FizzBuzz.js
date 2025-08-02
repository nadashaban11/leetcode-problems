// LeetCode  412 - Fizz Buzz
// Time Complexity: O(n)

// Brute force soln

var fizzBuzz = function(n) {
    let answer = [n];
    for(let i = 0; i < n; i++){
        if((i+1) % 3 === 0 && (i+1) % 5 === 0 ){
            answer[i] = "FizzBuzz";
        }
        else if((i+1) % 3 === 0){
            answer[i] = "Fizz";
        }
        else if((i+1) % 5 === 0){
            answer[i] = "Buzz";
        }
        else{
            answer[i] = String(i+1);
        }
    }
    return answer;
};

// test
console.log(fizzBuzz(15)); 
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]