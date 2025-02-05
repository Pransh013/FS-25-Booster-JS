const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

// console.log(users.map(userData => `${userData.firstName} ${userData.lastName}`))
// users.map(userData => console.log(`${userData.firstName} ${userData.lastName}`))

// console.log(
//   users.filter((userData) => userData.age >= 20 && userData.age <= 50).map(userData => `${userData.firstName} ${userData.lastName}`)
// );

// console.log(
//   users.reduce((acc, userData) => {
//     if (acc[userData.age]) {
//       acc[userData.age]++;
//     } else {
//       acc[userData.age] = 1;
//     }

//     return acc;
//   }, {})
// );

let student = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
  { name: "John", rollNumber: 16, marks: 35 },
];

// console.log(student.reduce((acc, userData) => acc + userData.marks, 0));

// console.log(student.filter(studentData => studentData.marks > 60).map(studentData => studentData.name));

// console.log(student.map(studentData => {
//     if (studentData.marks < 60) studentData.marks += 20;
//     return studentData;
// }).filter(studentData => studentData.marks > 60).reduce((acc, studentData) => acc + studentData.marks, 0))
