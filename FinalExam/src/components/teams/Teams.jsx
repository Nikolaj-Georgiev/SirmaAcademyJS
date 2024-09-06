import { useState } from 'react';
import { useData } from '../../context/DataContext';
import Loader from '../Loader';
import { getPlayersFromTeam, getTeamById } from '../../utils/dataUtils';
import TeamDetails from './TeamDetails';

export default function Teams() {
  const [team, setTeam] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [players, setPlayers] = useState([]);
  const { teamsData, flagUrls, playersData } = useData();

  if (teamsData.loading) return <Loader text='Teams are loading...' />;
  if (teamsData.error) return <Error text='Cannot load teams...' />;
  if (playersData.loading) return <Loader text='Players are loading...' />;
  if (playersData.error) return <Error text='Cannot load players...' />;
  if (flagUrls.loading) return <Loader text='Flags are loading...' />;
  if (flagUrls.error) return <Error text='Cannot load flags...' />;

  const handleSelectTeam = (teamId) => {
    console.log(`team with id: ${teamId}`);
    setTeam(getTeamById(teamsData.data, teamId));
    setIsSelected(true);
    setPlayers(getPlayersFromTeam(teamId, playersData.data));
  };
  // console.log(team);
  // console.log(flagUrls.flagUrls);
  // console.log(players);

  return (
    <div className='teams'>
      <div className='teams__container'>
        <ul className='teams__list'>
          {teamsData.data.map((team) => (
            <li
              className='teams__list-team'
              key={team.id}
              onClick={() => handleSelectTeam(team.id)}
            >
              <div className='teams__list-team-flag'>
                <img
                  src={flagUrls.flagUrls[team.name]}
                  alt='Team flag'
                  className='teams__list-team-flag--img'
                />
              </div>
              <div> {team.name}</div>
              <div> {team.managerfullname}</div>
              <div> {`group: ${team.group}`}</div>
            </li>
          ))}
        </ul>
      </div>
      {isSelected && (
        <TeamDetails
          players={players}
          teamName={team.name}
        />
      )}
    </div>
  );
}
