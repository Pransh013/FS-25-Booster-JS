// function add(x, y) {
//   return x + y;
// }

// const addThenDivide = (x, y) => (x + y) / 2;

// console.log(add(1, 2));

// const add = (x, y) => x + y;

// const addThenDivide = (x, y) => add(x, y) / 2;

// console.log(addThenDivide(10, 20));

// X, Y

// (X + Y) / (X - Y)

// (X + Y) * (X - Y)

// const multiply = (x, y) => x * y;
// const divide = (x, y) => x / y;
// console.log(multiply(10, 20));
// console.log(divide(10, 20));

// const general = (x, y, operation) => operation(x, y, (x, y) => x + y, (x, y) => x - y);

// console.log(
//   general(30, 20, function (x, y, add, diff) {
//     return add(x, y) * diff(x, y);
//   })
// );
// console.log(general(30, 15, (x, y, add, diff) => add(x, y) / diff(x,y)));



let obj = {
  name: "John",
  age: 30,
  city: "New York",
  printName: () => {
    console.log(this.name);
  },
};
obj.printName();

const s = "Hello";

console.log(s.split("").join(""));
