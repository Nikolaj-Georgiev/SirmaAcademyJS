import { Routes, Route } from 'react-router-dom';

import TeamDetails from './components/TeamDetails';
import MatchDetails from './components/MatchDetails';
import Header from './components/Header';
import Players from './components/Players';
import HomePage from './components/HomePage';
import Groups from './components/Groups';

function App() {
  return (
    <>
      {/* TODO: made button to HOME TEAMS PLAYERS the rest will be handled by links and clicks */}
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/matches/:matchId'
          element={<MatchDetails />}
        />
        <Route
          path='/groups'
          element={<Groups />}
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
