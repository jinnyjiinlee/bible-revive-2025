import styled from 'styled-components';

function CommonLayoutSize({ children }) {
  return (
    <CenteredWrapper>
      <LayoutBox>{children}</LayoutBox>
    </CenteredWrapper>
  );
}

export default CommonLayoutSize;

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  height: 100vh;      
`;

const LayoutBox = styled.div`
  font-family: 'Pretendard';
  box-sizing: border-box;
  margin: auto;
  width: 375px;
  height: 667px;
  background: linear-gradient(135deg, #e5f2ff 20%, #ffe6f2 100%);

  border-radius: 8px;
  text-align: center;
`;
