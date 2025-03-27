import StartPage from './pages/StartPage';
import LoadingIntroPage from './pages/LoadingIntroPage';
import LoadingTransitionPage from './pages/LoadingTransitionPage';

function App() {
  return (
    <div>
      {/* StartPage */}
      {/* 1) StartPage.jsx안에 컴포넌트를 만들기 */}
      {/* <StartPage /> */}

      {/* LoadingPage */}
      {/* <LoadingIntroPage /> */}
      <LoadingTransitionPage />

      {/* ResultPage  */}
    </div>
  );
}

export default App;
