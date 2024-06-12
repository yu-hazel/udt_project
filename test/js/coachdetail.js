document.addEventListener("DOMContentLoaded", function () {
  // 모든 fa-heart 클래스를 가진 요소들을 선택
  const heartIcons = document.querySelectorAll(".fa-heart");
  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      // 클릭할 때마다 'red' 클래스를 토글
      icon.classList.toggle("red");
    });
  });
});