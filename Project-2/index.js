let light = document.querySelector("#light");
let dark = document.querySelector("#dark");

let activeTheme = "light";

light.addEventListener("click", () => {
  activeTheme = "light";
  toggleTheme(activeTheme)
});

dark.addEventListener("click", () => {
  activeTheme = "dark";
  toggleTheme(activeTheme);
});

function toggleTheme(activeTheme) {
  if (activeTheme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
}
