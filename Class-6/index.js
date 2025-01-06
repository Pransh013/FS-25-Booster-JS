// Higher Order Functions
// A function which takes another function as argument or returns a function or both is called higher order function.

// First Class Citizens
// can be assigned to a variable
// can be passed as an argument to a function
// can be returned from a function

const arr = [1, 2, 3, 4, 5];
const square = (x) => x * x;
const cube = (x) => x * x * x;

function calculate(arr, cb) {
  let output = [];
  for(let i = 0; i< arr.length; i++) {
    output.push(cb(arr[i]));
  }
  return output;
}

// function calculateSquares(arr) {
//   let output = [];
//   for(let i = 0; i < arr.length; i++) {
//     output.push(arr[i] * arr[i]);
//   }
//   return output;
// }

// function calculateCubes(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] * arr[i] * arr[i]);
//   }
//   return output;
// }

console.log(calculate(arr, square));
console.log(calculate(arr, cube));

const calculateSquares = (x) => {
  return function() {
    return x * x;
  }
}

const res = calculateSquares(5);
console.log(res());

// IIFE
// Immediately Invoked Function Expression 
// IIFE are the functions that are executed as soon as they are defined.

(function greet() {
  console.log("Hello World");
})()

// function getData(showData) {
//   //
//   // const data =  
//   showData(data);
// }

// getData(showData);


