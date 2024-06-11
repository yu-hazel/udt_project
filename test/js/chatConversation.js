// 채팅 서비스 기능
// HTML 요소 선택
const chatInput = document.getElementById("chatInput");
const chatRoomContents = document.querySelector(".chatRoomContents");

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

// 채팅창 기능
document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.getElementById("chatInput");
  const chatRoomContents = document.querySelector(".chatRoomContents");

  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // 기본 엔터 동작 방지
      const message = chatInput.value.trim();
      if (message !== "") {
        addMessageToChatRoom(message);
        chatInput.value = ""; // 입력 필드 초기화
      }
    }
  });

  function addMessageToChatRoom(message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "user"; // 유저 메시지로 지정

    const messageTxt = document.createElement("div");
    messageTxt.className = "userTxt";

    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;

    messageTxt.appendChild(messageSpan);
    messageDiv.appendChild(messageTxt);
    chatRoomContents.appendChild(messageDiv);

    // 새 메시지가 추가되면 자동 스크롤
    chatRoomContents.scrollTop = chatRoomContents.scrollHeight;
  }
});
