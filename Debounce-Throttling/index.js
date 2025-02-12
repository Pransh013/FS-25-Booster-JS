const storedUserInfo = localStorage.getItem("userInformation");

// Function to store user information in local storage
function storeUserInfo() {
  let userInfo;
  if (storedUserInfo) {
    userInfo = JSON.parse(storedUserInfo);
    alert("Welcome back! Your information is already stored.");
  } else {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    // const country = prompt("Enter your country:");
    // const phoneNumber = prompt("Enter your phone number:");
    // const state = prompt("Enter your state:");
    // const city = prompt("Enter your city:");
    // const village = prompt("Enter your village:");

    userInfo = {
      firstName,
      lastName,
      // country,
      // phoneNumber,
      // state,
      // city,
      // village,
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));
  }

  console.log("display");

  // Display user information in the card
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  // document.getElementById("country").textContent = userInfo.country;
  // document.getElementById("phone-number").textContent = userInfo.phoneNumber;
  // document.getElementById("state").textContent = userInfo.state;
  // document.getElementById("city").textContent = userInfo.city;
  // document.getElementById("village").textContent = userInfo.village;
}

// Call the function to store user information
storeUserInfo();

function resetuserInfo() {
  localStorage.clear();
  alert("Your information is clear.");
  storeUserInfo();
}
