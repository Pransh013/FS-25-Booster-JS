// function f() {
//   console.log(a);
// }

// f();
// console.log(a);

// console.log(a);
// for(let i = 0; i < 10; i++) {
//   let a = 10;
//   console.log(a);
// }

// DRY

// function operation(val) {
//   return val + 10;
// }

// console.log([1, 2, 3].map(function (val) {
//   return val + 10;
// }));

// console.log([1, 2, 3].map(operation));

// function myMap(arr, cb) {
//   let output = [];
//   for(let i = 0; i < arr.length; i++) {
//     output.push(arr[i])
//   }
//   return output;
// }

// function myMap(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] + 15);
//   }
//   return output;
// }

// console.log(myMap([2, 3, 4]));

// const func1 = () => {
//   let a = 10;
//   return
// }

// const val = function () {
//   console.log(a);
// };
// val();
// Custom Fetch

fetch("api");

const myFetch = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(options.method || "GET");
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve(response);
        } else {
          reject("Error");
        }
      }
    };

    request.onerror = (error) => reject(error)
    request.send(url)
  });
};

myFetch().then().catch()
