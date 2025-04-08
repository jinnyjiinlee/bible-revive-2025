import styled from 'styled-components';
import { CommonLayoutSize } from '../components/CommonLayout.jsx';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <CommonLayoutSize>
      {/* 상단 happy 2025 */}
      <Header>
        HAPPY <br /> 2025YEAR
      </Header>

      {/* 중앙 메시지 영역 */}
      <ContentContainer>
        <Title>말씀 새록</Title>
        <Text>
          당신에게 주시는 따스한 말씀을
          <br />
          마음 깊이 품어보세요.
        </Text>
        <StyledLinkButton to='/loadingInt'>말씀 뽑기</StyledLinkButton>
      </ContentContainer>

      {/* 사용자 수 안내 및 하단 링크 */}
      <Footer>
        <FooterText>서비스 및 개발자 정보를 아래 링크에서 확인해보세요!</FooterText>
        <LinkContainer>
          <a href='https://quilt-alpaca-b4b.notion.site/2025-16b31867c4b580ebaa40dd1c385ec985?pvs=4'>팀 소개</a>
          <a href='https://forms.gle/t96pkSw1EgE7t2766'>서비스 피드백하기</a>
        </LinkContainer>
      </Footer>
    </CommonLayoutSize>
  );
}

export default StartPage;

const Header = styled.div`
  padding-top: 50px;

  font-family: 'Pretendard', sans-serif;
  line-height: 1.2; /* 가독성을 위해 줄 간격 추가 */

  font-size: 36px;
  font-weight: 100;
  color: #6d9dc5;
  letter-spacing: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  padding-top: 40px;
  font-size: 32px;
`;

const Text = styled.div`
  padding-top: 10px;
  font-size: 13px;
  font-weight: 150;
`;

const ContentContainer = styled.div`
  background: white;
  margin: 50px auto;

  width: 300px;
  height: 250px;

  border-radius: 20px;
`;

const Footer = styled.div`
  padding-top: 70px;
`;

const FooterText = styled.div`
  color: #555;
  font-size: 14px;
  font-weight: 130;
`;

const LinkContainer = styled.footer`
  padding-top: 40px;

  display: flex;
  justify-content: center;
  gap: 60px;

  color: #878b8e;
  font-size: 13px;
  font-weight: 200;

  text-decoration: underline; /* 밑줄 추가 */
  cursor: pointer;
  transition: color 0.3s ease; /* 호버 시 부드러운 색상 전환 */

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

const StyledLinkButton = styled(Link)`
  background: #bba4f8;
  color: #ffffff;

  margin: 30px auto 0 auto;
  display: flex;
  justify-content: center;

  width: 117px;
  height: 38px;

  align-items: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 30px;
  border-width: 0px;

  text-decoration: none;

  &:hover {
    background: #a58cf5;
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
`;
