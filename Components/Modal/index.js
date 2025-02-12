const modal = document.querySelector("#modal");
const btn = document.querySelector("#btn");
const closebtn = document.querySelector("#close");
const blur = document.querySelector("#blur");

btn.addEventListener("click", () => {
  blur.classList.remove("hidden");
  blur.classList.add("flex");
});

closebtn.addEventListener("click", () => {
  blur.classList.add("hidden");
  blur.classList.remove("flex");
});

// TODO: Clicking on blur area should also close the modal
// HINT: Event Propagation