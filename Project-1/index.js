let colorList = document.querySelectorAll(".color-btn")

colorList.forEach((div) => {
    div.addEventListener("click", function(e) {
      document.body.style.backgroundColor = e.target.id;
    })
})
