import styled from 'styled-components';

function StartPage() {
  return (
    <PhoneSizeBox>
      {/* 상단 happy 2025 */}
      <TopText>
        HAPPY <br /> 2025YEAR
      </TopText>

      {/* 중앙 메시지 영역 */}
      <MiddleSquare>
        <h1 style={{ paddingTop: '40px', fontSize: '32px' }}>말씀 새록</h1>
        <div style={{ paddingTop: '10px', fontSize: '13px', fontWeight: '150' }}>
          당신에게 주시는 따스한 말씀을
          <br />
          마음 깊이 품어보세요.
        </div>

        <Button style={{ marginTop: '30px' }}>말씀 뽑기</Button>
      </MiddleSquare>

      {/* 사용자 수 안내 */}
      <p style={{ fontSize: '15px', fontWeight: '130' }}>지금까지 1,345명이 새해를 말씀으로 시작했어요</p>

      {/* 하단 링크 */}
      <Footer>
        <a href='https://quilt-alpaca-b4b.notion.site/2025-16b31867c4b580ebaa40dd1c385ec985?pvs=4'>팀 소개</a>
        <a href='https://forms.gle/t96pkSw1EgE7t2766'>서비스 피드백하기</a>
      </Footer>
    </PhoneSizeBox>
  );
}

export default StartPage;

let PhoneSizeBox = styled.div`
  font-family: 'Pretendard';
  box-sizing: border-box;
  margin: auto;
  width: 375px;
  height: 667px;
  background: linear-gradient(135deg, #e5f2ff 20%, #ffe6f2 100%);

  border-radius: 8px;
  text-align: center;
`;

let TopText = styled.div`
  padding-top: 50px;

  font-family: 'Pretendard', sans-serif;
  line-height: 1.2; /* 가독성을 위해 줄 간격 추가 */

  font-size: 36px;
  font-weight: 100;
  color: #6d9dc5;
  letter-spacing: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

let MiddleSquare = styled.div`
  background: white;
  margin: 50px auto;

  width: 300px;
  height: 250px;
  border-radius: 20px;
`;

let Footer = styled.footer`
  margin-top: 90px;
  color: #b2a6a6;
  display: flex;
  justify-content: center;
  gap: 60px;

  font-size: 13px;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 300;
    transition: all 0.2s ease;
  }

  a:hover {
    text-decoration: underline;
    color: #a98ed0;
    transform: scale(1.05);
  }
`;

let Button = styled.button`
  background: #bba4f8;
  color: #ffffff;

  width: 117px;
  height: 38px;

  font-size: 16px;
  font-weight: 400;
  border-radius: 30px;
  border-width: 0px;

  &:hover {
    background: #a58cf5;
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
`;
