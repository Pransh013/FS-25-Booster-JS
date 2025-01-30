const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Successful");
  } else {
    reject("Not successful");
  }
})

promise.then((message) => console.log(message)).catch((message) => console.log(message));

const data = []



 getData((data) => {
  filterData(data, (filteredData) => {
    saveData(filteredData, (response) => {
      console.log(response);
    })
  })
})

getData((resolve, reject))
.then(filterData)
.then(saveData)
.catch((message) => console.log(message))

new Promise((resolve, reject) => {
  const status = true;
  let data = [];
  if(status) {
    resolve(data);
  } else {
    reject("Error Occured");
  }
})
.then()
.catch((message) => console.log(message))


document.addEventListener("click", someFn);

function addEventListener(event, cb) {
  const e = {};
  cb(e);
}

function someFn(e) {
  console.log(e)
}
