import StartPage from './pages/StartPage';
import LoadingIntroPage from './pages/LoadingIntroPage';
import LoadingTransitionPage from './pages/LoadingTransitionPage';
import ResultPage from './pages/ResultPage';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/loadingInt' element={<LoadingIntroPage />} />

        <Route path='/loadingTransition' element={<LoadingTransitionPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>

      {/* StartPage */}
      {/* 1) StartPage.jsx안에 컴포넌트를 만들기 */}
      {/* <StartPage /> */}

      {/* LoadingPage */}
      {/* <LoadingIntroPage /> */}
      {/* <LoadingTransitionPage /> */}

      {/* ResultPage  */}
      {/* <ResultPage /> */}
    </div>
  );
}

export default App;
