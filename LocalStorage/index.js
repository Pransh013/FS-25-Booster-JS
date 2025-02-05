localStorage.setItem("name", "John");
localStorage.setItem("name", "John Doe");

const userData = {
    name : "Pranshu Verma",
    age: "24"
}

localStorage.setItem("userData", JSON.stringify(userData));

console.log( JSON.parse(localStorage.getItem("userData")));


// localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

// setTimeout(() => {
// }, 2000);

// localStorage.clear();

// Session Storage

sessionStorage.setItem("name", "Adam");
