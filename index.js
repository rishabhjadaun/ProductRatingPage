let selectedRating = 0;
const selection = document.querySelectorAll(".btn");
const subBtn = document.querySelector(".sub");

for (var i = 0; i < 5; i++) {
  selection[i].addEventListener("click", function (e) {
    resetColor();
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    selectedRating = e.target.innerText;
    localStorage.setItem("data1", this.innerText);
    console.log(selectedRating);
  });
}

function resetColor() {
  for (var i = 0; i < 5; i++) {
    selection[i].style.backgroundColor = "hsl(216, 14%, 39%)";
  }
}

function spText() {
  if (selectedRating === 0) {
    document.querySelector(".m").innerHTML =
      "You have not selected any Rating.";
  } else {
    window.open("thnks.html", "_self");
  }
}

subBtn.addEventListener("click", function () {
  spText();
});
