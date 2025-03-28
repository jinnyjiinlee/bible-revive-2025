import styled from 'styled-components';
import { CommonLayoutSize } from '../components/CommonLayout.jsx';
import { BounceLoader } from 'react-spinners';

function LoadingTransitionPage() {
  return (
    <CommonLayoutSize>
      <LoaderStyle>
        <BounceLoader LoaderStyle color='#13061c' cssOverride={{}} loading size={90} speedMultiplier={0.1} />
      </LoaderStyle>
      <Text>내게 꼭 맞는 말씀을 찾았습니다.</Text>
    </CommonLayoutSize>
  );
}

export default LoadingTransitionPage;

const LoaderStyle = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 17px;
`;
