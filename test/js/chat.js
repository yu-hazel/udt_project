// 토글하면 하트 색 바뀌는 기능
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

// 드롭다운 기능
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".chatDropdownBtn");
  const dropdownList = document.querySelector(".chatDropdownList");
  const option1 = document.querySelector(".chatDropdownOption01");
  const option2 = document.querySelector(".chatDropdownOption02");
  const dropdownBtnText = dropdownBtn.childNodes[0]; // 텍스트 노드
  const dropdownBtnImg = dropdownBtn.querySelector("img"); // 이미지 요소

  dropdownBtn.addEventListener("click", function () {
    if (
      dropdownList.style.display === "none" ||
      dropdownList.style.display === ""
    ) {
      dropdownList.style.display = "block";
    } else {
      dropdownList.style.display = "none";
    }
  });

  option1.addEventListener("click", function () {
    dropdownBtnText.nodeValue = "전체";
    dropdownList.style.display = "none";
  });

  option2.addEventListener("click", function () {
    dropdownBtnText.nodeValue = "찜 목록";
    dropdownList.style.display = "none";
  });
});

// 채팅창 기능
document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.getElementById("chatInput");
  const chatRoom = document.querySelector(".chatRoom");

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
    chatRoom.appendChild(messageDiv);

    // 새 메시지가 추가되면 자동 스크롤
    chatRoom.scrollTop = chatRoom.scrollHeight;
  }
});

// // 채팅창 기능 + 코치 자동 문구 기능
// document.addEventListener("DOMContentLoaded", function () {
//   const chatInput = document.getElementById("chatInput");
//   const chatRoom = document.querySelector(".chatRoom");

//   chatInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault(); // 기본 엔터 동작 방지
//       const message = chatInput.value.trim();
//       if (message !== "") {
//         addUserMessage(message);
//         addCoachMessage(
//           "지금은 연락 가능한 시간이 아닙니다. 다음에 다시 연락해주세요 😃"
//         );
//         chatInput.value = ""; // 입력 필드 초기화
//       }
//     }
//   });

//   function addUserMessage(message) {
//     const messageDiv = document.createElement("div");
//     messageDiv.className = "user"; // 유저 메시지로 지정
//     const messageTxt = document.createElement("div");
//     messageTxt.className = "userTxt";
//     const messageSpan = document.createElement("span");
//     messageSpan.textContent = message;

//     messageTxt.appendChild(messageSpan);
//     messageDiv.appendChild(messageTxt);
//     chatRoom.appendChild(messageDiv);

//     // 새 메시지가 추가되면 자동 스크롤
//     chatRoom.scrollTop = chatRoom.scrollHeight;
//   }

//   function addCoachMessage(message) {
//     const messageDiv = document.createElement("div");
//     messageDiv.className = "coach"; // 코치 메시지로 지정

//     const coachImg = document.createElement("img"); // 코치 프로필 이미지
//     coachImg.src = "/udt/test/img/iprofile_2png.png";
//     coachImg.alt = "코치 프로필 사진";
//     messageDiv.appendChild(coachImg);

//     const messageTxt = document.createElement("div");
//     messageTxt.className = "coachTxt";

//     // 코치 메시지 텍스트 설정
//     messageTxt.textContent = message;

//     messageDiv.appendChild(messageTxt);
//     chatRoom.appendChild(messageDiv);

//     // 새 메시지가 추가되면 자동 스크롤
//     chatRoom.scrollTop = chatRoom.scrollHeight;
//   }
// });

// 추가적으로 구현하고 싶은 부분
// 1. 왼쪽 검색바에 코치 이름을 적으면 해당 코치만 나옴
// 2. 드롭다운에서 '찜 목록'을 누르면 하트모양을 누른 코치만 나옴
// 3. 채팅 텍스트 입력창 밑의 아이콘을 누르면 동작함(웃는 이모티콘은 이모지가,
// 사진을 누르면 사진첩이)
