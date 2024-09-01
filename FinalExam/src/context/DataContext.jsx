import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const playersData = useCSVData('/players.csv');
  const teamsData = useCSVData('/teams.csv');
  const recordsData = useCSVData('/records.csv');
  const matchesData = useCSVData('/matches.csv');

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
