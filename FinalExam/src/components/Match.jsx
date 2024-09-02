import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { getTeamById } from '../utils/dataUtils';
import Loader from './Loader';

export default function Match({ match }) {
  const { teamsData, flagUrls } = useData();
  const navigate = useNavigate();

  function handleSelectMatch(matchId) {
    navigate(`/matches/${matchId}`);
  }

  if (teamsData.loading || flagUrls.loading) {
    return <Loader />;
  }

  const teamA = getTeamById(teamsData.data, match.ateamid);
  const teamB = getTeamById(teamsData.data, match.bteamid);

  return (
    <li
      className='home__list-item'
      onClick={() => handleSelectMatch(match.id)}
    >
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
