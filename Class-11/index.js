// let box = document.querySelector('#box');
// let text = document.querySelector('#text');

// box.style.backgroundColor = 'green';
// box.style.margin = '20px';
// box.style.padding = '10px';
// box.style.height = '200px';
// box.style.width = '200px';
// box.style.border = '2px solid black';

// text.style.textAlign = 'center';
// text.style.fontSize = '40px';
// text.style.fontWeight = '400';
// text.style.color = 'white';


const cb = function (e) {
  console.log(e);
  box.style.backgroundColor = "blue";
};

box.addEventListener("mouseover", cb);
console.log("listener added");
box.removeEventListener("mouseover", cb);
console.log("listener removed");

document.body.addEventListener("keyup", function (e) {
  console.log(e);
  console.log("keyup");
});

document.body.addEventListener("keydown", function (e) {
  console.log(e);
  console.log("keydown");
});

document.body.addEventListener("keypress", function (e) {
  console.log(e);
  console.log("keypress");
});
