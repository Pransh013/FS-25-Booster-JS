const searchInput = document.querySelector("#searchInput");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

const fetchData = async (val) => {
  let users;
  const cacheData = JSON.parse(localStorage.getItem(val));
  if (cacheData) {
    users = cacheData;
  } else {
    const response = await fetch(`https://dummyjson.com/users/search?q=${val}`);
    const data = await response.json();
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

// let timer;
// const debouncedFetch = (query) => {
//   if (timer) clearTimeout(timer);
//   timer = setTimeout(() => {
//     fetchData(query);
//   }, 300);
// };

const throttledFetch = () => {
  let lastCall = 0;
  return () => {
    const now = Date.now();
    if (now - lastCall >= 2000) {
      lastCall = now;
      fetchData(searchInput.value);
      console.log("throttled call");
    }
  };
};

const fn = throttledFetch(searchInput.value);

searchInput.addEventListener("input", fn);
