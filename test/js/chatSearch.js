// DOM이 완전히 로드된 후에 실행되도록 설정
document.addEventListener("DOMContentLoaded", () => {
  // 검색 입력 요소 가져오기
  const searchInput = document.querySelector(".chatSearchBox input");

  // 'keypress' 이벤트에 대한 리스너 추가
  searchInput.addEventListener("keypress", (event) => {
    // 'Enter' 키가 눌렸는지 확인
    if (event.key === "Enter") {
      // 입력 필드에서 검색어 가져오기
      const searchTerm = searchInput.value.trim().toLowerCase();

      // 모든 채팅 박스 요소 가져오기
      const chatBoxes = document.querySelectorAll(
        ".chatList .chatBox01, .chatList .chatBox02, .chatList .chatBox03, .chatList .chatBox04, .chatList .chatBox05, .chatList .chatBox06"
      );

      // 각 채팅 박스를 순회
      chatBoxes.forEach((chatBox) => {
        // 현재 채팅 박스 내의 h2 태그에서 이름 가져오기
        const nameElement = chatBox.querySelector("h2");
        const name = nameElement
          ? nameElement.textContent.trim().toLowerCase()
          : "";

        // 이름과 검색어를 비교
        if (name.includes(searchTerm)) {
          // 일치하는 경우, 채팅 박스를 표시
          chatBox.style.display = "flex";
        } else {
          // 일치하지 않는 경우, 채팅 박스를 숨기기
          chatBox.style.display = "none";
        }
      });
    }
  });
});
