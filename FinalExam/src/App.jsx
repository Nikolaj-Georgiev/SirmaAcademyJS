import { Routes, Route } from 'react-router-dom';

import TeamDetails from './components/TeamDetails';
import MatchDetails from './components/MatchDetails';
import Header from './components/Header';
import Players from './components/Players';
import HomePage from './components/HomePage';
import Groups from './components/Groups';
import Bracket from './components/Bracket';

function App() {
  // TODO: - deside should you pass data to the bracket from here, or get it in the component.!!(Second is better I think)
  const matches = [
    { team1: 'Team A', team5: 'Team B' },
    { team2: 'Team C', team6: 'Team D' },
    { team3: 'Team A', team7: 'Team B' },
    { team4: 'Team A', team8: 'Team B' },
  ];

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
        <Route
          path='/groups'
          element={<Groups />}
        />
        <Route
          path='/teams'
          element={<TeamDetails />}
        />
        <Route
          path='/bracket'
          element={<Bracket matches={matches} />}
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
