import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CommonLayoutSize } from '../components/CommonLayout.jsx';
import { BounceLoader } from 'react-spinners';
import { ReactTyped } from 'react-typed';

import { LOADING, LOADER } from '../constants/loading.js';

function LoadingIntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/loadingTransition');
    }, LOADING.DELAY);
  });

  return (
    <CommonLayoutSize>
      <StyledLoader>
        <BounceLoader color='#cdbbda' loading size={LOADER.SIZE} speedMultiplier={LOADER.SPEED} />
      </StyledLoader>

      <div>
        <StyledTyped strings={LOADING.MESSAGES} typeSpeed={LOADING.TYPE_SPEED} />
      </div>
    </CommonLayoutSize>
  );
}

export default LoadingIntroPage;

const StyledTyped = styled(ReactTyped)`
  display: block;
  margin-top: 30px;

  color: #444;
  font-size: 15px;
  font-weight: 300;
`;

const StyledLoader = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
`;
