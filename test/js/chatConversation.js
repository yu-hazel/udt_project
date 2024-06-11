// 채팅 서비스 기능

// HTML 요소 선택
const chatInput = document.getElementById("chatInput");
const chatRoomContents = document.querySelector(".chatRoomContents");
const sendButton = document.querySelector(".fa-paper-plane"); // 전송 버튼 선택

// 현재 시간 가져오기
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// 채팅을 추가하는 함수
function addChat() {
  const userMessage = chatInput.value;
  if (userMessage.trim() === "") return; // 빈 메시지 무시

  const currentTime = getCurrentTime();

  // 유저 메시지 추가
  const userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.innerHTML = `
    <p class="userTime">${currentTime}</p>
    <div class="userTxt">
      <span>${userMessage}</span>
    </div>
  `;
  chatRoomContents.appendChild(userDiv);

  // 코치 메시지 추가
  const coachDiv = document.createElement("div");
  coachDiv.className = "coach";
  coachDiv.innerHTML = `
    <img src="/udt_project/test/img/profile_2.png" alt="코치 프로필 사진">
    <div class="coachTxt">
      <span>${userMessage} 답변</span>
    </div>
    <p class="coachTime">${currentTime}</p>
  `;
  chatRoomContents.appendChild(coachDiv);

  // 채팅 입력창 비우기
  chatInput.value = "";

  // 새 메시지가 추가될 때 스크롤을 아래로 이동
  chatRoomContents.scrollTop = chatRoomContents.scrollHeight;
}

// 엔터 키 이벤트 리스너 추가
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addChat();
  }
});

// 전송 버튼 클릭 이벤트 리스너 추가
sendButton.addEventListener("click", () => {
  addChat();
});
