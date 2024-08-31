import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVDAta';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const teamsData = useCSVData('../../public/teams.csv');
  const matchesData = useCSVData('../../public/matches.csv');
  const playersData = useCSVData('../../public/players.csv');
  const recordsData = useCSVData('../../public/records.csv');

  return (
    <DataContext.Provider
      value={(teamsData, matchesData, playersData, recordsData)}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
