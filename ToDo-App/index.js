let task = document.querySelector("#task");
let submit = document.querySelector("#submit");
let right = document.querySelector("#right");

submit.addEventListener("click", () => {
  console.log(task.value);
  let newId = parseInt(right.children[right.children.length - 1].id) + 1;
  let newTask = document.createElement('div')
  newTask.innerText = task.value;
  newTask.setAttribute("id", newId);
  newTask.classList.add("task");
  right.appendChild(newTask);
  console.log(newTask)
})
