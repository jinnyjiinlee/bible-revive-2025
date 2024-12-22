// 첫 번째 페이지와 두 번째 페이지를 선택
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// 버튼을 서택
const page1Button = document.getElementById('page1_button'); // 말씀 뽑기 버튼

// 첫 번째 페이지 -> 두번째 페이지 전환
page1Button.addEventListener('click', () => {
  page1.style.display = 'none'; // 첫 번째 페이지 숨기기
  page2.style.display = 'flex'; // 두 번째 페이지 보이기
});

setTimeout(() => {
  const loadingBox = document.querySelector('.loading-box');
  const resultMessage = document.getElementById('result-message');

  // 로딩 박스 숨기기
  loadingBox.style.display = 'none';

  // 메시지 표시
  resultMessage.style.display = 'block';
}, 5000); // 5초 후 실행

// 두 번째 페이지 -> 세 번째 페이지 전환
setTimeout(() => {
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');

  // 두 번째 페이지 숨기기
  page2.style.display = 'none';

  // 세 번째 페이지 보이기
  page3.style.display = 'flex';
}, 5000);
