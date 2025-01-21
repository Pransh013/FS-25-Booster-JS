// const obj = {
//   id: 1,
//   name: "John",
//   age: 30,
// }

// let keyArr = [];

// for(const key in obj) {
//   keyArr.push([key, obj[key]]);
// }

// console.log(Object.entries(obj));


// console.log(keyArr);


(function (a) {
  return (function () {
    console.log(a);
    a = 23;
    console.log(a);
  })();
})(45);

let newArray = new Array(700).fill("♥");
function bigFunc(element) {
  return newArray[element];
}
console.log(bigFunc(300));
console.log(bigFunc(400));


