import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { getTeamById } from '../../utils/dataUtils';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

export default function Match({ match }) {
  const { teamsData, flagUrls } = useData();
  const navigate = useNavigate();

  function handleSelectMatch(matchId) {
    navigate(`/matches/${matchId}`);
  }

  if (teamsData.loading || flagUrls.loading) {
    return <Loader />;
  }
  if (teamsData.error || flagUrls.error) {
    return <ErrorComponent />;
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
        <div className='home__list-item-image'>
          <img
            src={flagUrls.flagUrls[teamA.name]}
            alt={`${teamA.name} flag`}
            className='home__list-item-image--img'
          />
        </div>
      </div>
      <p> vs </p>
      <div className='home__team-card'>
        <p className='home__heading-tertiary home__team-name'>{`${teamB.name}`}</p>
        <div className='home__list-item-image'>
          <img
            src={flagUrls.flagUrls[teamB.name]}
            alt={`${teamA.name} flag`}
            className='home__list-item-image--img'
          />
        </div>
      </div>
      <p className='home__list-item--text'>{` Score: ${match.score}`}</p>
    </li>
  );
}
