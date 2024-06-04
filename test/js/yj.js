const pay = document.querySelectorAll('.table03 > span')[1];
const pay2 = document.querySelectorAll('.paymentCheck > div > span')[1];


const updatePay = function () {
  let payValue = parseInt(num.innerText) * 160000;
  discount = payValue - 20000;
  pay.innerText = `${payValue.toLocaleString()} 원`;
  pay2.innerText = `${payValue.toLocaleString()} 원`;
  payFinal.innerText = `${discount.toLocaleString()} 원`;
};

downBtn.addEventListener('click', function () {
  //id num으로 감싸져 있는 1 텍스트를 버튼이 눌릴 때마다 1씩 증가
  if (parseInt(num.innerText) > 1) {
    num.innerText = parseInt(num.innerText) - 1;
    updatePay();
  }
  else {
    alert('1개월 아래로 내려갈 수 없습니다.');
  }
});

upBtn.addEventListener('click', function () {
  num.innerText = parseInt(num.innerText) + 1;
  updatePay();
});