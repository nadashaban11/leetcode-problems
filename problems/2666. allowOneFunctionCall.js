// leetCode  2666 - Allow One Function Call
// Creates a wrapper that allows the given function `cb` to be called only once.
// On the first call, it invokes `cb` with the provided arguments.
// On subsequent calls, it returns `undefined` and does not invoke `cb` again.

const once = function(cb){
    let calls = 1;
    return function(...args){
        if(calls === 1){
            calls++;
            return cb(...args);
        }
        else{
            return undefined;
        }
    }
};

// test
let fn = (a,b,c) => (a * b * c);
let res = once(fn);
console.log(res(1,2,3));
console.log(res(1,2,3));