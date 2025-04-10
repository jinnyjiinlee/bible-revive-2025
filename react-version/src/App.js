import StartPage from './pages/StartPage';
import LoadingIntroPage from './pages/LoadingIntroPage';
import LoadingTransitionPage from './pages/LoadingTransitionPage';
import ResultPage from './pages/ResultPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/loadingInt' element={<LoadingIntroPage />} />

        <Route path='/loadingTransition' element={<LoadingTransitionPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
