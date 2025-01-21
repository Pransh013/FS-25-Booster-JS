let container = document.querySelector(".container");

let box = document.createElement("div");

let amt = 5000;

box.classList.add("container");

box.innerHTML = `<div class="cartItem">
        <p>Product1</p>
        <p>2x100</p>
      </div>
      <div class="cartItem">
        <p>Product1</p>
        <p>2x100</p>
      </div>
      <div class="cartItem">
        <p>Product1</p>
        <p>2x100</p>
      </div>
      <div class="cartItem">
        <p>Product1</p>
        <p>2x100</p>
      </div>
      <div class="cartItem">
        <p>Total</p>
        <p>${amt}</p>
      </div>
      `;

container.appendChild(box);


