// leetCode 2665 - CounterII

function createCounter(n){
    let init = n;
    return {
        increment : ()=>{
            return ++n;
        },
        decrement : ()=>{
            return --n;
        },
        reset : ()=>{
            n = init;
            return init;
        }
    }
}

// test cases
const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0