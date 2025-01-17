let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pCountry = document.querySelector(".country");
let pScore = document.querySelector(".number");
let button = document.querySelector("button");
let section2 = document.querySelector(".section2");
let formContainer = document.querySelector("#formContainer");
let data = [
  {
    fname: "Pranshu",
    lname: "Verma",
    score: 40,
    country: "India",
    id: Date.now(),
  },
];

function editUser(idx) {
  let fNameInput = document.createElement("input");
  fNameInput.setAttribute("type", "text");
  fNameInput.setAttribute("value", `${data[idx].fname}`);
  let lNameInput = document.createElement("input");
  lNameInput.setAttribute("type", "text");
  lNameInput.setAttribute("value", `${data[idx].lname}`);

  let scoreInput = document.createElement("input");
  scoreInput.setAttribute("type", "number");
  scoreInput.value = data[idx].score;

  let saveBtn = document.createElement("button");
  saveBtn.innerHTML = "Save Changes";
  saveBtn.addEventListener("click", () => {
    data[idx].fname = fNameInput.value;
    data[idx].lname = lNameInput.value;
    data[idx].score = scoreInput.value;
    updateDataonUI();
    formContainer.innerHTML = "";
  });
  
  formContainer.innerHTML = "";
  formContainer.appendChild(fNameInput);
  formContainer.appendChild(lNameInput);
  formContainer.appendChild(scoreInput);
  formContainer.appendChild(saveBtn);
}

function activateButtons() {
  let buttons = document.querySelectorAll(".cards");
  buttons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      if (e.target.className === "del") {
        data.splice(index, 1);
        updateDataonUI();
      }
      if (e.target.className === "but1") {
        data[index].score += 5;
        updateDataonUI();
      }
      if (e.target.className === "but2") {
        data[index].score -= 5;
        updateDataonUI();
      }
      if (e.target.className === "edit") {
        editUser(index);
      }
    });
  });
}

function getDate() {
  let date = new Date();
  let month = date.toLocaleString("deafult", { month: "short" });
  let day = date.getDate();
  let year = date.getFullYear();
  let time = date.toLocaleTimeString();

  let finaldate = `${day} ${month} ${year}: ${time}`;
  return finaldate.toUpperCase();
}
function updateDataonUI() {
  data.sort((p1, p2) => {
    return p2.score - p1.score;
  });

  let showData = "";
  data.forEach((player) => {
    showData += `
     <div class="cards">
    <span>${player.fname}</span>
    <span>${player.lname}</span>
    <span>${getDate()}</span>
    <span>${player.country}</span>
    <span>${player.score}</span>
    <button class="del">🗑</button>
    <button class="but1">+5</button>
    <button class="but2">-5</button>
    <button class="edit">Edit</button>
    </div>
    `;
  });
  section2.innerHTML = showData;
  activateButtons();
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    fname.value === "" ||
    lname.value === "" ||
    pCountry.value == "" ||
    pScore.value === ""
  ) {
    alert("Please fill all fields");
    return;
  } else {
    let playerObj = {
      id: Date.now(),
      fname: fname.value,
      lname: lname.value,
      country: pCountry.value,
      score: parseInt(pScore.value),
    };

    data.push(playerObj);
    updateDataonUI();
    fname.value = "";
    lname.value = "";
    pCountry.value = "";
    pScore.value = "";
  }
});

updateDataonUI();
