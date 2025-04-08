import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CommonLayoutSize } from '../components/CommonLayout.jsx';
import { BounceLoader } from 'react-spinners';

import { TRANSITION_MESSAGE } from '../constants/loading.js';

function LoadingTransitionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result');
    }, 3000);
  });

  return (
    <CommonLayoutSize>
      <LoaderStyle>
        <BounceLoader LoaderStyle color='#13061c' cssOverride={{}} loading size={90} speedMultiplier={0.5} />
      </LoaderStyle>
      <Text>{TRANSITION_MESSAGE}</Text>
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
  margin-top: 30px;
  font-size: 17px;

  color: #272727;
  font-size: 17px;
  font-weight: 400;
`;
