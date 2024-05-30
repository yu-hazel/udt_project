const btn = document.querySelector(".btn-select");
const list = document.querySelector(".list-member");
btn.addEventListener("click", () => {
  btn.classList.toggle("on");
});
list.addEventListener("click", event => {
  if (event.target.nodeName === "BUTTON") {
    btn.innerText = event.target.innerText;
    btn.classList.remove("on");
  }
});

const selectArea = document.querySelector("div.reservation");

// 사이드바 클릭 시 나오는 스크립트
menu.addEventListener("click", function () {
  selectArea.classList.toggle("show-sidebar");
});