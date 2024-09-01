import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVData';
import useGetTeamsFlags from '../hooks/useGetTeamsFlags';
import { TEAMS } from '../utils/config';

const DataContext = createContext({
  playersData: [],
  teamsData: [],
  recordsData: [],
  matchesData: [],
  flagUrls: {},
});

export const DataProvider = ({ children }) => {
  const playersData = useCSVData('/players.csv');
  const teamsData = useCSVData('/teams.csv');
  const recordsData = useCSVData('/records.csv');
  const matchesData = useCSVData('/matches.csv');

  const flagUrls = useGetTeamsFlags(TEAMS);
  console.log(flagUrls);

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
