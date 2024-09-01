import { useData } from '../context/DataContext';
import { getPlayersFromTeam, getTeamByName } from '../utils/dataUtils';
import Player from './Player';

function TeamDetails() {
  const { teamsData } = useData();
  const { playersData } = useData();
  console.log(teamsData);
  console.log(playersData);

  if (teamsData?.loading) return <div>Loading...</div>;
  if (teamsData?.error) return <div>Error: {teamsData.error}</div>;

  const team = getTeamByName(teamsData.data, 'Germany');
  console.log(team);
  const players = getPlayersFromTeam(team.id, playersData.data);
  console.log(players);

  if (!team) return <div>Team not found</div>;

  return (
    <div>
      <ul>
        {players.map((player) => (
          // <li key={player.id}>{player.fullname}</li>
          <Player
            key={player.id}
            player={player}
          />
        ))}
      </ul>
    </div>
  );
}

export default TeamDetails;
