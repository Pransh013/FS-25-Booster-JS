// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);


// let schedule = {};
// const isEmpty = (obj) => {
//   let keys = Object.keys(obj);
//   if (keys.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const getSum = (obj) => {
//   if (isEmpty(obj)) {
//     return 0;
//   }
//   let sum = 0;
//   for (const key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// };
// console.log(getSum(salaries));


// let calculator = {
//   read: function () {
//     const a_ = prompt("Enter the first number");
//     const b_ = prompt("Enter the second number");
//     this.a = a_;
//     this.b = b_;
//   },
//   sum: function () {
//     return parseInt(this.a) + parseInt(this.b);
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
