import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVData';

const DataContext = createContext({
  playersData: [],
  teamsData: [],
  recordsData: [],
  matchesData: [],
});

export const DataProvider = ({ children }) => {
  const playersData = useCSVData('/players.csv');
  const teamsData = useCSVData('/teams.csv');
  const recordsData = useCSVData('/records.csv');
  const matchesData = useCSVData('/matches.csv');
  console.log(matchesData);

  return (
    <DataContext.Provider
      value={{ teamsData, matchesData, playersData, recordsData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const contextData = useContext(DataContext);
  return contextData;
};
