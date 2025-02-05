const profilePic = document.getElementById("profile-pic");
const name = document.getElementById("name");
const company = document.getElementById("company");
const userLocation = document.getElementById("location");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const loader = document.getElementById("loader");
const profileCard = document.getElementById("profile-card");

const fetchGitHubProfile = async () => { 
    setTimeout(async () => {
        const response = await fetch("https://api.github.com/users/poojasoni986");
        const data = await response.json();
        profilePic.src = data.avatar_url;
        name.textContent = data.name;
        company.textContent = data.company ? data.company : "No company";
        userLocation.textContent = data.location ? data.location : "No location";
        followers.textContent = `Followers: ${data.followers}`;
        following.textContent = `Following: ${data.following}`;
        loader.classList.add("hidden");
        profileCard.classList.remove("hidden");
        profileCard.classList.add("flex");
        console.log(data);
    }, 1000)
}

fetchGitHubProfile();
