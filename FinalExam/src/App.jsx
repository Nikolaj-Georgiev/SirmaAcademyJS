import { Routes, Route } from 'react-router-dom';

import TeamDetails from './components/TeamDetails';
import MatchDetails from './components/MatchDetails';
import Header from './components/Header';
import Players from './components/Players';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/matches'
          element={<MatchDetails />}
        />
        <Route
          path='/teams'
          element={<TeamDetails />}
        />
        <Route
          path='/players'
          element={<Players />}
        />
      </Routes>
    </>
  );
}

export default App;
