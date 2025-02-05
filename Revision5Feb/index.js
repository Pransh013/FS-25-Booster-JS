const container = document.querySelector("#container");

let itemCount = 0;
const APIKEY = "Copy your Unsplash API Key here";

async function createItems() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=10`
  );

  const data = await response.json();
  console.log(data);

    data.map((img) => {
        const child = document.createElement("img");
        child.src = img?.urls?.small
        const childStyles = [
          "flex",
          "items-center",
          "justify-center",
          "border",
          "border-black",
          "rounded-md",
          "w-48",
          "aspect-square",
          "bg-gray-400",
          "flex-shrink-0",
          "object-cover",
        ];
        child.classList.add(...childStyles);
        container.appendChild(child);
      
  });
}

const handleScroll = () => {
  console.log("scroll");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    createItems();
  }
};

window.addEventListener("scroll", handleScroll);

createItems();
