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

  const teamA = getTeamById(teamsData.data, match.ateamid);
  const teamB = getTeamById(teamsData.data, match.bteamid);

  return (
    <li className='home__list-item'>
      <div className='home__team-card'>
        <p className='home__heading-tertiary home__team-name'>{`${teamA.name}`}</p>
        <img
          src={flagUrls.flagUrls[teamA.name]}
          alt={`${teamA.name} flag`}
          width='40'
          height='40'
          className='home__list-item--img'
        />
      </div>
      <p> vs </p>
      <div className='home__team-card'>
        <p className='home__heading-tertiary home__team-name'>{`${teamB.name}`}</p>
        <img
          src={flagUrls.flagUrls[teamB.name]}
          alt={`${teamA.name} flag`}
          width='40'
          height='40'
          className='home__list-item--img'
        />
      </div>
      <p className='home__list-item--text'>{` Score: ${match.score}`}</p>
    </li>
  );
}
