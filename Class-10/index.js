let heading = document.getElementById('heading');
let section = document.getElementById("first-section");
let heading2 = document.createElement("h2");

let heading3 = document.querySelector("#heading");
let para2 = document.querySelectorAll(".para");
console.log(heading3, para2)
// const para = document.getElementsByClassName("para");
// heading.innerHTML = "Page"
// for(let i = 0; i < para.length; i++){
//     console.log(para[i].innerHTML)
// }

para2.forEach((element) => {
  console.log(element.innerHTML);
})
