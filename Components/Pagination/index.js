const dataArray = Array(40)
  .fill(0)
  .map((_, idx) => `Product ${idx + 1}`);

const btnArray = Array(4)
  .fill(0)
  .map((_, idx) => idx + 1);

const dataContainer = document.querySelector("#data-container");
const btnContainer = document.querySelector("#btn-container");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let startIndex = 0;
let endIndex = 10;

const displayItems = (sI, eI) => {
  if (sI < 0 || eI > dataArray.length) return;
  startIndex = sI;
  endIndex = eI;
  if (startIndex <= 0) {
    prevBtn.setAttribute("disabled", "true");
    prevBtn.classList.add("disabled:cursor-not-allowed");
  }
  if (startIndex >= 10) {
    prevBtn.removeAttribute("disabled");
    prevBtn.classList.remove("disabled:cursor-not-allowed");
  }
  if (endIndex >= dataArray.length) {
      nextBtn.setAttribute("disabled", "true");
      nextBtn.classList.add("disabled:cursor-not-allowed");
  }
    if (endIndex <= dataArray.length - 10) {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove("disabled:cursor-not-allowed");
    }
  dataContainer.innerHTML = "";
  for (let i = sI; i < eI; i++) {
    const item = document.createElement("div");
    item.textContent = dataArray[i];
    item.setAttribute("class", "item");
    dataContainer.appendChild(item);
  }
};

const displayBtns = () => {
  btnArray.map((val, idx) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.classList.add("numeric-btns");
    btn.setAttribute("id", idx + 1);
    btn.textContent = val;
    btnContainer.appendChild(btn);
  });
};

prevBtn.addEventListener("click", () => {
  displayItems(startIndex - 10, endIndex - 10);
});

nextBtn.addEventListener("click", () => {
  displayItems(startIndex + 10, endIndex + 10);
});

btnContainer.addEventListener("click", (e) => {
  let startIdx = (parseInt(e.target.id) - 1) * 10;
  let endIdx = startIdx + 10;
  displayItems(startIdx, endIdx);
});

displayBtns();
displayItems(startIndex, endIndex);

// TODO: Create this function and call when click on button container like this changeBtnColor(e.target.id);
// HINT: Loop over all the numeric buttons and compare the id
