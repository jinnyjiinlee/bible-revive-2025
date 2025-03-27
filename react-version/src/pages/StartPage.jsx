function StartPage() {
  return (
    <div>
      {/* 상단 happy 2025 */}
      <h2>HAPPY </h2>
      <h2>2025YEAR </h2>

      {/* 중앙 메시지 영역 */}
      <div>
        <h1>말씀 새록</h1>
        <p>당신에게 주시는 따스한 말씀을</p>
        <p>마음 깊이 품어보세요.</p>

        <button>말씀 뽑기</button>
      </div>

      {/* 사용자 수 안내 */}
      <p>지금까지 1,345명이 새해를 말씀으로 시작했어요.</p>

      {/* 하단 링크 */}
      <footer>
        <a href='#team'>팀 소개</a>
        <a href='feedback'>서비스 피드백하기</a>
      </footer>
    </div>
  );
}

export default StartPage;
