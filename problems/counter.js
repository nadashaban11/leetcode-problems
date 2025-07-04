//leetCode 2620 - Counter

function createCounter(inp){
    let cnt = inp;
    return function(){
        return cnt++;
    };
};

// tests
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12