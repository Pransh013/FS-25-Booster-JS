// const str = "abcd";
// const newStr = str.repeat(3);
// console.log(str, newStr);

// console.log(newStr.match(str));

const arr = [1, 2, 3, 4, 5];
// const square = (x) => x * x;
// Array.prototype.customMap = function (cb) {
//   let output = [];
//   for(let i = 0; i< this.length; i++) {
//     output.push(cb(this[i]));
//   }
//   return output;
// }
// // const output = customMap(arr, square);
// const output = arr.customMap(x => x * x * x)
// const squares = arr.map((val) => val * val);
// console.log(arr, squares, output);

// const filter = (x) => x >= 3;
// function customFilter(arr, cb) {
//   let output = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(cb(arr[i])) {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }
// const outputArr = customFilter(arr, filter);
// const output = arr.filter((x) => x >= 3)
// console.log(output, outputArr)

function arrSum (prev, curr) {
  return prev + curr;
}

Array.prototype.customReduce = function ( cb) {
  let output = 0;
  for(let i = 0; i < this.length; i++) {
    output = cb(output, this[i]);
  }
  return output;
}

// const sum = arr.customReduce(arrSum);
// const output = arr.reduce((sum, val) => sum + val, 0);
// console.log(arr, output, sum);

// arr.forEach((val, idx )=> console.log(val, idx));
// console.log(arr.flatMap((val) => [val, val * val]))

// const numbers = [45, 40, 90, 11, 25];
// let allOver18 = numbers.every(myFunction);
// let atleastOneOver18 = numbers.some(myFunction);
// console.log(allOver18, atleastOneOver18);

// function myFunction(value) {
//   return value > 18;
// }

// console.log(Array.from("Hello"));
// console.log("Hello".split(""));

