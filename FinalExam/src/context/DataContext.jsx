import { createContext, useContext } from 'react';
import useCSVData from '../hooks/useCSVData';
import useGetTeamsFlags from '../hooks/useGetTeamsFlags';
import { TEAMS } from '../utils/config';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { createRecordsIndexObj } from '../utils/dataUtils';

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

  if (
    playersData.loading ||
    teamsData.loading ||
    recordsData.loading ||
    matchesData.loading
  ) {
    return <Loader />;
  }

  if (
    playersData.error ||
    teamsData.error ||
    recordsData.error ||
    matchesData.error
  ) {
    return <Error />;
  }

  const recordsIndexObject = createRecordsIndexObj(recordsData.data);

  return (
    <DataContext.Provider
      value={{
        teamsData,
        matchesData,
        playersData,
        recordsData,
        flagUrls,
        recordsIndexObject,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const contextData = useContext(DataContext);
  return contextData;
};
