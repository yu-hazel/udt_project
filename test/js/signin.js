// 우동테 signin js

// 비밀번호 일치 확인
function passwordConfirm() {
    var password = document.getElementById("userPass").value;
    var confirmPassword = document.getElementById("userPassCheck").value;

    // 비밀번호와 비밀번호 확인이 같은지 확인
    if (password != confirmPassword) {
        // 불일치할 경우 경고 메시지를 표시
        document.getElementById("passConfirmError").style.display = 'block';
    } else {
        // 일치할 경우 경고 메시지를 지우고, 유효성 검사 통과
        document.getElementById("passConfirmError").style.display = 'none';
    }
}

// 비밀번호 placeholder 토글
function changePlaceholder() {
    const passWordInput = document.getElementById('userPass');
    if (window.innerWidth < 767) {
        passWordInput.placeholder = "문자, 숫자, 특수문자 포함 8~20자";
    } else {
        passWordInput.placeholder = "비밀번호를 입력하세요 (문자, 숫자, 특수문자 포함 8~20자)";
    }
}

// 비밀번호 유효성 검사
function validatePassword() {
    const passWordInput = document.getElementById('userPass');
    const errorMessage = document.getElementById('passValError');
    const password = passWordInput.value;

    // 입력된 비밀번호가 없을 때는 유효성 검사를 수행하지 않음
    if (password.trim() === "") {
        errorMessage.style.display = 'none';
        return true;
    }

    const minLength = 8;
    const maxLength = 20;
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (password.length < minLength || password.length > maxLength || !regex.test(password)) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}

function attachEventListeners() {
    const passWordInput = document.getElementById('userPass');
    passWordInput.addEventListener('input', validatePassword);
    passWordInput.addEventListener('blur', validatePassword); // 비밀번호 입력이 끝날 때 검사

    const passCheckInput = document.getElementById('userPassCheck');
    passCheckInput.addEventListener('input', passwordConfirm);

    window.addEventListener('resize', changePlaceholder);
    changePlaceholder(); // 페이지가 로드될 때 placeholder 업데이트
}

window.addEventListener('DOMContentLoaded', function() {
    attachEventListeners();
    passwordConfirm();
    validatePassword(); // 페이지 로드 시에도 한 번 유효성 검사를 수행하여 에러 메시지를 감춤
});

// 도메인리스트 토글
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

// 생년월일
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