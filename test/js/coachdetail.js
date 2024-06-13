// 하트 버튼을 눌렀을 때 하트가 빨간색으로 차오르도록 딸깍이 구현
const hearts = document.querySelectorAll("i.fa-heart");
    hearts.forEach((each) => {
      each.addEventListener("click", function () {
        this.classList.toggle("red");
      });
    });

    
// coachinfo의 스크롤과 웹 브라우저의 스크롤을 탑버튼을 누르게 되었을 시 위로 이동하도록 구현
document.querySelector('.scroll').addEventListener('click', function() {
  const coachInfo = document.querySelector('.coachInfo');
  coachInfo.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});