import { Routes, Route } from 'react-router-dom';

import TeamDetails from './components/teams/TeamDetails';
import MatchDetails from './components/match/MatchDetails';
import Header from './components/Header';
import Players from './components/players/Players';
import HomePage from './components/HomePage';
import Groups from './components/Groups';
import Bracket from './components/bracket/Bracket';
import Teams from './components/teams/Teams';

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
          path='/matches/:matchId'
          element={<MatchDetails />}
        />
        {/* <Route
          path='/groups'
          element={<Groups />}
        /> */}
        <Route
          path='/teams'
          element={<Teams />}
        />
        <Route
          path='/bracket'
          element={<Bracket />}
        />
        {/* <Route
          path='/players'
          element={<Players />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
