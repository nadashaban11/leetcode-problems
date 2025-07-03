// LeetCode 2727 - Create Hello World Function

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Test
const f = createHelloWorld();
console.log(f()); // "Hello World"
