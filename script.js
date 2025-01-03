// "포트폴리오 시작" 버튼 클릭 시 인트로 화면을 사라지게 하고 본문을 표시
document.getElementById("enter-btn").addEventListener("click", function () {
  // 배경과 인트로 화면 애니메이션을 통해 화면을 부드럽게 전환
  document.querySelector(".intro-container").style.opacity = 0;
  document.body.style.backgroundColor = "#f4f4f4";
  document.body.style.transition = "background-color 1s ease";

  setTimeout(function () {
    // 인트로 화면 숨기고 본문 내용 표시
    document.querySelector(".intro-container").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
  }, 1000);
});
