import styled from 'styled-components';
import { CommonLayoutSize } from '../components/CommonLayout.jsx';
import { BounceLoader } from 'react-spinners';
import { ReactTyped } from 'react-typed';

function LoadingIntroPage() {
  return (
    <CommonLayoutSize>
      <LoaderStyle>
        <BounceLoader LoaderStyle color='#cdbbda' cssOverride={{}} loading size={90} speedMultiplier={0.9} />
      </LoaderStyle>

      <div>
        <StyledTyped
          MiddleText
          strings={['내게 맞는 새해 말씀을 불러오고 있어요!', '잠시만 기다려주세요...']}
          typeSpeed={70}
        />
        <br />
      </div>
    </CommonLayoutSize>
  );
}

export default LoadingIntroPage;

let StyledTyped = styled(ReactTyped)`
  display: block;
  margin-top: 30px;
  font-size: 15px;
  color: #444;
  font-weight: 300;
`;

const LoaderStyle = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
`;
