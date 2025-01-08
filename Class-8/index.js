// const input = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["a", "d", "f"],
//   ["c", "a", "b"],
//   ["f", "d", "a"],
// ];

// let ans = {};
// for(let i = 0; i < input.length; i++) {
//   for(let j = 0; j < input[i].length; j++) {
//     const key = input[i][j];
//     if(ans[key]) {
//       ans[key] += 1;
//     } else {
//       ans[key] = 1;
//     }
//   }
// }

// input.flat().map((key) => {ans[key] ? ans[key] += 1 : ans[key] = 1;});
// console.log(ans);

// const objArr = [
//   {
//     name: 'Alice',
//     score: [20, 40, 30],
//   },
//   {
//     name: 'Bob',
//     score: [50, 60, 70]
//   },
//   {
//     name: 'Charlie',
//     score: [80, 90, 100]
//   },
// ];

// const avgArr = objArr.map((obj) => {
//   return {name : obj.name, avg: (obj.score.reduce((sum, val) => sum + val, 0) / obj.score.length)}
// })
// const filterArr = avgArr.filter((obj) => obj.avg > 50);
// console.log(filterArr, avgArr, objArr);

// const arr = [1, 2, [1, 2, 3, [4, 5, 6, [7, 8, 9]]]];
// console.log(arr.flat(Infinity));
// console.log(arr.flat(2));
// console.log(arr.flat());

// let obj = {
//   name: "Alice",
//   age: 25,
//   city: "Wonderland",
// }

// console.log(Object.hasOwn(obj, "name"));
// obj.marks = 30
// console.log(obj)

// console.log(Object.entries(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
