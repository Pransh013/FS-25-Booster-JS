let btn = document.querySelector("#btn");
let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");

btn.addEventListener("click", () => {
  console.log("button clicked")
}, false)
outer.addEventListener("click", () => {
  console.log("outer clicked")
}, false)
inner.addEventListener("click", () => {
  console.log("inner clicked")
}, true)

document.body.addEventListener("keydown", (e) => {
  console.log(e)
})
