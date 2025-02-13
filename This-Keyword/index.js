// const obj = {
//   name: "abcd",
//   printName: function () {
//     console.log(this);
//   },
// };

// const obj = {
//   name: "abcd",
//   printName: () => {
//     console.log(this);
//   },
// };

// obj.printName();

// function Student(name) {
//   this.name = name;
// }

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const student = new Student("Naveen");
// console.log(student);

// call, apply and bind

// const obj = {
//   name: "Naveen",
//   //   age: 24,
//   greet: function (age, address) {
//     console.log(`Hello, ${this.name}, ${age}, ${address}`);
//   },
// };

// // obj.greet(25);

// const obj2 = {
//   name: "Pranshu",
// };
// const data = [24, "addresses"];

// // obj.greet.call(obj2, 25, "adress");
// // obj.greet.apply(obj2, data);
// const greet2 = obj.greet.bind(obj2, ...data);
// greet2();
// console.log(obj2);
