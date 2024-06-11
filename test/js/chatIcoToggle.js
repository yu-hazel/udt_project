// 하트 딸깍이
const hearts = document.querySelectorAll("i.fa-heart");

hearts.forEach((each) => {
  each.addEventListener("click", function () {
    this.classList.toggle("red");
  });
});
