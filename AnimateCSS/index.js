const container = document.querySelector(".carousel");
const children = document.querySelectorAll(".carousel-cell");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let activeIdx = 0;

const showActiveSlide = (activeIdx) => {
  children[activeIdx].classList.remove("hidden");
  children[activeIdx].classList.add("flex");
};

prev.addEventListener("click", () => {
  children[activeIdx].classList.remove("flex");
  children[activeIdx].classList.add("hidden");
  if (activeIdx - 1 < 0) {
    activeIdx = children.length - 1;
    showActiveSlide(activeIdx);
  } else {
    showActiveSlide(--activeIdx);
  }
});

next.addEventListener("click", () => {
  children[activeIdx].classList.remove("flex");
  children[activeIdx].classList.add("hidden");
  if (activeIdx + 1 > children.length - 1) {
    activeIdx = 0;
    showActiveSlide(activeIdx);
  } else {
    showActiveSlide(++activeIdx);
  }
});

setInterval(() => {
  children[activeIdx].classList.remove("flex");
  children[activeIdx].classList.add("hidden");
  if (activeIdx + 1 > children.length - 1) {
    activeIdx = 0;
    showActiveSlide(activeIdx);
  } else {
    showActiveSlide(++activeIdx);
  }
}, 2000);

showActiveSlide(activeIdx);
