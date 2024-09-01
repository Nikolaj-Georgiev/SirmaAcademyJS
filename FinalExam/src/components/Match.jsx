import { useData } from '../context/DataContext';
import { getTeamById } from '../utils/dataUtils';

export default function Match({ match }) {
  const { teamsData } = useData();

  if (teamsData.loading) {
    return <div>Loading</div>;
  }

  const teamA = getTeamById(teamsData.data, match.ateamid);
  const teamB = getTeamById(teamsData.data, match.bteamid);

  return (
    <div>
      <p>{`${teamA.name} vs ${teamB.name}, Score: ${match.score}`}</p>
    </div>
  );
}
