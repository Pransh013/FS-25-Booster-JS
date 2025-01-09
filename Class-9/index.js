let heading = document.getElementById("heading");
let heading2 = document.createElement("h2");
console.log(heading2);
document.body.appendChild(heading2);
heading2.innerText = "Hello, World! again";
console.log(heading);

heading.innerText = "Hello, World!";
heading.style.color = "blue";
