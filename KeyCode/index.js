let box1 = document.querySelector("#box1");
let text = document.querySelector("#text");
let box2 = document.createElement("div");


document.addEventListener("keydown", (e) => {
  let keyPressed;
  if(e.shiftKey && e.key !== "Shift") {
    keyPressed = `Shift + ${e.key}`
  } else if (e.ctrlKey && e.key !== "Control") {
    keyPressed = `Control + ${e.key}`;
  } else if (e.altKey && e.key !== "Alt") {
    keyPressed = `Alt + ${e.key}`;
  } else {
    if (e.key === " ") keyPressed = "Space";
    else keyPressed = e.key;
  }
  text.innerHTML = `You pressed ${keyPressed}`;
  box2.innerHTML = `Key code is ${e.keyCode}`
  box2.classList.add(
    "w-1/4", "h-20", "border", "shadow-lg", "rounded-md", "flex", "items-center", "justify-center"
  );
  document.body.appendChild(box2);
})
