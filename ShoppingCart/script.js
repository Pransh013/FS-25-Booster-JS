// let x = { b: 1, c: 2 };
// let y = Object.values(x);
// console.log(y.length);

// let x = '{ "b": 1, "c": 2 }';
// let y = JSON.parse(x);
// console.log(typeof y, y); 

// let UserObject = {
//  firstName: "Pranshu",
//  middleName : null,
//  lastName: "Verma",
//  age: 24,
//  address : {
//   houseNo : 1,
//   street: "",
//   city: "Lucknow",
//  }
// }

// const filterObjFn = (obj) => {
//   let newObj = {};
//   for(const key in obj) {
//     if(obj[key] !== null && typeof obj[key] === "object") {
//       newObj[key] = filterObjFn(obj[key])
//     } else if(obj[key]) {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj;
// }
// let filterdObj = filterObjFn(UserObject);
// console.log(filterdObj);

// var num = 10;
// var num = 8;
// console.log(num);

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Ayush";
//   let age = 21;
// }
// sayHi();

// function getAge() {
//   "use strict"
//   age = 21;
//   console.log(age);
// }
// getAge();

// console.log(+"1234");
// console.log(!"Ayush");

// let number = 0;
// console.log(number++);
// console.log(++number); 
// console.log(number);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

// String.prototype.giveAyushPizza = () => {
//   return "Just give Ayush pizza already!";
// };
// const name = "Ayush";
// console.log(name.giveAyushPizza());

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi());

// console.log(typeof typeof 1);

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

// console.log([...'Ayush']);

// var a = 10;
// var b = a;
// b = 20;

// console.log(a);
// console.log(b);

// var a = "Ayush";
// var b = a;
// b = "Verma";

// console.log(a);
// console.log(b);

// function sum() {
//   return arguments.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3));

// function sum(...arguments) {
//   return arguments.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1, 2, 3, 4));

// console.log(1 == "1");
// console.log(false == '0');
// console.log(true == "1");
// console.log("1" == "01");
// console.log(10 == 5 + 5);

// console.log("1" - (-1));
// console.log("1" + -"1");

// let lang = "javascript";
// (function () {
//   let lang = "java";
// })();

// console.log(lang);
// (function () {
//   var lang2 = "java";
// })();

// console.log(lang2);

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); //t
// console.log(a === b); //f
// console.log(b === c); //f

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });
