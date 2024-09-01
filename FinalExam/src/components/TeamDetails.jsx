import { useData } from '../context/DataContext';
import { getTeamByName } from '../utils/dataUtils';

function TeamDetails() {
  const { teamsData } = useData();
  console.log(teamsData);

  if (teamsData?.loading) return <div>Loading...</div>;
  if (teamsData?.error) return <div>Error: {teamsData.error}</div>;

  const team = getTeamByName(teamsData.data, 'Germany');
  console.log(team);

  if (!team) return <div>Team not found</div>;

  return <div>{...team}</div>;
}

export default TeamDetails;
