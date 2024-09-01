import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const teamsData = useCSVData('/teams.csv');
  const matchesData = useCSVData('/matches.csv');
  const playersData = useCSVData('/players.csv');
  const recordsData = useCSVData('/records.csv');

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
