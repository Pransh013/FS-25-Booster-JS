console.log(a);
let a = 10;
console.log(a);

function add (a, b) {
  console.log(a + b);
}

add(5, 10);

add(10, 20);

function add(a, b) {
  console.log(a + b);
}

add(20, 15);

const arr = ["a", "b", "c"];
arr = ["a", "b", "z"];
console.log(arr);
arr[1] = 5;
console.log(arr);

// const arr = [1];
// let size = arr.push(5, 4, 30, 2);
// console.log(arr, size);
// let num = arr.pop();
// console.log(arr, "num " , num);

// let num = arr.shift();
// console.log(arr, num);

// let num = arr.unshift(50, 2, 1);
// console.log(arr, num, "Hello, world!");


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.slice(-5);
// console.log(arr, newArr);

const newArr2 = arr.splice(2, 40,);
console.log(arr, newArr2);

