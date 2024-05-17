// signin 페이지 js

document.querySelector('.domainBt').addEventListener('click', function () {
    const domainList = document.querySelector('.domainList');
    domainList.classList.toggle('active');
});

document.querySelectorAll('.domainOption').forEach(function (domainButton) {
    domainButton.addEventListener('click', function () {
        const domainBt = document.querySelector('.domainBt');
        domainBt.textContent = this.textContent;

        // 선택한 후 도메인 리스트 숨기기
        document.querySelector('.domainList').classList.remove('active');
    });
});
const yearSelect = document.getElementById('birthYear');
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= 1900; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}
const monthSelect = document.getElementById('birthMonth');
for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.text = month;
    monthSelect.appendChild(option);
}
const daySelect = document.getElementById('birthDay');
for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.text = day;
    daySelect.appendChild(option);
}