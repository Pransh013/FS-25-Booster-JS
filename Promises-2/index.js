// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const status = true;
//     if (status) {
//       resolve(userData);
//     } else {
//       reject("Not successful");
//     }
//   }, 1000);
// });

// promise
// .then((userData) => {
//   console.log(userData);
// })
// .catch((message) => {
//   console.log(message);
// })

// console.log(promise);

// Callback Hell / Pyramid of Doom / Inversion of Control

loginUser("user1", "12345678", function (err, userData) {
  if (err) {
    console.log(err);
  } else {
    const userId = userData.userId;
    fetchData(userId, (err, items) => {
      if (err) {
        console.log(err);
      } else {
        selectItems(items, (err, selectedItems) => {
          if (err) {
            console.log(err);
          } else {
            goToCart(selectedItems, (err, cartStatus) => {
              if (err) {
                console.log(err);
              } else {
                proceedToPayment(cartStatus, (err, paymentStatus) => {
                  if (err) {
                    console.log(err);
                  } else {
                    orderDelivered('', (err, message) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log(message);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

// function loginUser(username, password, callback) {
//   setTimeout(() => {
//     if (username === "user1" && password === "12345678") {
//       callback(null, { userId: 1, username: username });
//     } else {
//       callback("Invalid credentials", null);
//     }
//   }, 1000);
// }

// function fetchData(userId, callback) {
//   setTimeout(() => {
//     if (userId === 1) {
//       callback(null, ["Pizza", "Burger", "Cake"]);
//     } else {
//       callback("Invalid userId", null);
//     }
//   }, 1000);
// }

// function selectItems(items, callback) {
//   setTimeout(() => {
//     if (items.length > 0) {
//       callback(null, [...items]);
//     } else {
//       callback("No items available", null);
//     }
//   }, 1000);
// }

// function goToCart(selectedItems, callback) {
//   setTimeout(() => {
//     if (selectedItems.length > 0) {
//       callback(null, `Items added`);
//     } else {
//       callback("Items not selected", null);
//     }
//   }, 1000);
// }

// function proceedToPayment(cartStatus, callback) {
//   setTimeout(() => {
//     if (cartStatus === "Items added") {
//       callback(null, "Payment Successful");
//     } else {
//       callback("Payment failed", null);
//     }
//   }, 1000);
// }

// function orderDelivered(paymentStatus, callback) {
//   setTimeout(() => {
//     if (paymentStatus === "Payment Successful") {
//       callback(null, "Order Delivered");
//     } else {
//       callback("Not delivered", null);
//     }
//   }, 1000);
// }

// Using Promise

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user1" && password === "12345678") {
        resolve({ userId: 1, username: username });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

function fetchData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve(["Pizza", "Burger", "Cake"]);
      } else {
        reject("Invalid userId");
      }
    }, 1000);
  });
}

function selectItems(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (items.length > 0) {
        resolve([...items]);
      } else {
        reject("No items available");
      }
    }, 1000);
  });
}

function goToCart(selectedItems) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedItems.length > 0) {
        resolve(`Items added`);
      } else {
        reject("Items not selected");
      }
    }, 1000);
  });
}

function proceedToPayment(cartStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cartStatus === "Items added") {
        resolve("Payment Successful");
      } else {
        reject("Payment failed");
      }
    }, 1000);
  });
}

function orderDelivered(paymentStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentStatus === "Payment Successful") {
        resolve("Order Delivered");
      } else {
        reject("Not delivered");
      }
    }, 1000);
  });
}

// loginUser("user1", "12345678")
//   .then((userData) => fetchData(userData.userId))
//   .then((items) => selectItems([items]))
//   .then((selectedItems) => goToCart(selectedItems))
//   .then((cartStatus) => proceedToPayment(cartStatus))
//   .then((paymentStatus) => orderDelivered(paymentStatus))
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// async/await

const orderFlow = async () => {
  try {
    const userData = await loginUser("user2", "12345678");
    console.log(userData);
    
    const fetchedData = await fetchData(userData.userId);
    console.log(fetchedData);

    const selectedItems = await selectItems(fetchedData);
    console.log(selectedItems);

    const cartStatus = await goToCart(selectedItems);
    console.log(cartStatus);

    const paymentStatus = await proceedToPayment(cartStatus);
    console.log(paymentStatus);

    const orderStatus = await orderDelivered(paymentStatus);
    console.log(orderStatus);
  } catch (error) {
    console.log(error);
  }
};

// orderFlow();

// Promise Methods

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const status = true;
//     if (status) resolve("Successful Promise1");
//     else reject("Not successful Promise1");
//   }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   const status = false;
//   if (status) resolve("Successful Promise2");
//   else reject("Not successful Promise2");
// });
// const promise3 = new Promise((resolve, reject) => {
//   const status = true;
//   if (status) resolve("Successful Promise3");
//   else reject("Not successful Promise3");
// });

// Promise.resolve("Successful").then(val => console.log(val));
// Promise.reject("Not Successful").catch(err => console.log(err));

// Promise.all([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((message) => {
//     console.log("catch");
//     console.log(message);
//   });

// fetch("https://api.gitub.com/users/Pransh013")
//   .then((rawData) => rawData.json())
//   .then((jsonData) => console.log(jsonData))
// .catch((err) => console.log(err));

// const user = {
//   name: "abc",
//   age: 24,
// };

// const getData = async () => {
//   try {
//     const data = await fetch("https://api.github.com/users/Pransh013/repos");
//     const jsonData = await data.json();
//     console.log(jsonData);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

// Array.prototype.customMap = function (cb) {
//   let outputArr = [];
//   for (let i = 0; i < this.length; i++) {
//     outputArr.push(cb(this[i]));
//   }
//   return outputArr;
// };

// const arr = [1, 2, 3]
// const newarr = [1, 2, 3, 4]

// let modifiedArr = arr.customMap((val) => val*10)

// console.log(modifiedArr);
