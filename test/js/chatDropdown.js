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
