// let x = { b: 1, c: 2 };
// let y = Object.values(x);
// console.log(y.length);

// let x = '{ "b": 1, "c": 2 }';
// let y = JSON.parse(x);
// console.log(typeof y, y); 

let UserObject = {
 firstName: "Pranshu",
 middleName : null,
 lastName: "Verma",
 age: 24,
 address : {
  houseNo : 1,
  street: "",
  city: "Lucknow",
 }
}

const filterObjFn = (obj) => {
  let newObj = {};
  for(const key in obj) {
    if(obj[key] !== null && typeof obj[key] === "object") {
      newObj[key] = filterObjFn(obj[key])
    } else if(obj[key]) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

let filterdObj = filterObjFn(UserObject);

console.log(filterdObj);
