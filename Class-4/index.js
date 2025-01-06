let arr = [4, 8, 10, 12, 14,78, -4, -5];
const str = "abcde"
// arr.sort(function (a, b) {
//   return b - a;
// });

// const newArr = str.split(" ")
// const newString = newArr.join(", ")
// const str1 = newArr.toString();
// console.log( newArr, str1);

let arrr = [
    {name:"Ashish", score:"1000"},
    {name:"Mohit", score:"200"},
    {name:"Mansi", score:"300"},
    {name:"Abhishek", score:"250"},
    {name:"Yash", score:"150"}
]
arrr.sort(function(a,b){
    return parseInt(a.score) - parseInt(b.score);
});
// console.log(arrr);

// const str2 = "aaaaaa bcda"
// console.log(str2.replace("aaaaaa", "bbbbbb"));

// console.log(arr.length);
const newArr = new Array(10);
console.log(arr.concat(["arr", "break", 'c']));
newArr.fill();
console.log(newArr);




