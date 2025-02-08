// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }

//   inner();
// }

// outer();

// function outer() {
//   let a = 10;
//   const obj = {};
//   return function inner() {
//     console.log(a, obj);
//   };
// }

// const innerF = outer();

// innerF();

// function counter() {
//   let count = 0;

//   return function increment() {
//     console.log(++count);
//   };
// }

// const incrementF = counter();

// incrementF();

// const myFunction = () => {
//   let a = 10;
//   setTimeout(() => {
//     console.log(a);
//   }, 2000);
// };

// myFunction();

// const btn = document.querySelector("#btn");
// const val = document.querySelector("#val");

// let count = 0;

// const incrementAndDisplay = () => {
//   val.textContent = ++count;
// };

// btn.addEventListener("click", incrementAndDisplay);

// const func1 = () => {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// };

// const func2 = () => {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// };

// func1();
// func2();


