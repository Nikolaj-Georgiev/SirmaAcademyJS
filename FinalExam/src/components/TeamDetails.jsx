import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { getTeamByName } from '../utils/dataUtils';

function TeamDetails() {
  const { name } = useParams();
  const { teamsData } = useData();
  console.log(teamsData);

  // Проверете дали данните са заредени и няма грешка
  if (teamsData?.loading) return <div>Loading...</div>;
  if (teamsData?.error) return <div>Error: {teamsData.error}</div>;

  const team = getTeamByName(teamsData.data, name);

  if (!team) return <div>Team not found</div>;

  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {team.players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamDetails;
