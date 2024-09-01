import { useData } from '../context/DataContext';
import { getTeamById } from '../utils/dataUtils';

export default function Match({ match }) {
  const { teamsData, flagUrls } = useData();

  if (teamsData.loading) {
    return <span class='loader'></span>;
  }

  if (flagUrls.loading) {
    return <span class='loader'></span>;
  }

  console.log(flagUrls);
  const teamA = getTeamById(teamsData.data, match.ateamid);
  const teamB = getTeamById(teamsData.data, match.bteamid);

  return (
    <div>
      <p>{`${teamA.name}`}</p>
      <img
        src={flagUrls.flagUrls[teamA.name]}
        alt={`${teamA.name} flag`}
        width='100'
      />
      <p> vs </p>
      <p>{`${teamB.name}`}</p>
      <img
        src={flagUrls.flagUrls[teamB.name]}
        alt={`${teamA.name} flag`}
        width='100'
      />
      <p>{` Score: ${match.score}`}</p>
    </div>
  );
}
