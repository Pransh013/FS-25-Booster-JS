const searchInput = document.querySelector("#searchInput");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

const fetchData = async (val) => {
  let users;
  const cacheData = JSON.parse(localStorage.getItem(val));
  if (cacheData) {
    console.log(cacheData);
    
    console.log("from local storage");
    users = cacheData;
  } else {
    const response = await fetch(`https://dummyjson.com/users/search?q=${val}`);
    const data = await response.json();
    console.log("api called");
    localStorage.setItem(val, JSON.stringify(data.users));
    users = data.users;
  }
  container.textContent = "";
  users.map((user) => {
    const nameBox = document.createElement("div");
    nameBox.setAttribute("id", "nameBox");
    nameBox.textContent = `${user.firstName} ${user.lastName}`;
    container.appendChild(nameBox);
  });
};

let timer;
const debouncedFetch = (query) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    fetchData(query);
  }, 300);
};

searchInput.addEventListener("input", () => {
  debouncedFetch(searchInput.value);
});
