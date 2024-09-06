import { useData } from '../../context/DataContext';
import ErrorComponent from '../ErrorComponent';
import Player from '../players/Player';

export default function TeamDetails({ players, teamName }) {
  const { flagUrls } = useData();

  if (flagUrls.loading) return <Loader text='Flags are loading...' />;
  if (flagUrls.error) return <ErrorComponent text='Cannot load flags...' />;

  console.log(players);
  console.log(teamName);
  return (
    <aside className='teams__players'>
      <ul
        key={'players-list'}
        className='teams__players-list'
      >
        <li
          key={'flag'}
          className='teams__players-player'
        >
          <img
            className='teams__players-player--img'
            src={flagUrls.flagUrls[teamName]}
            alt='team flag'
          />
        </li>
        <li
          key={'headings'}
          className='teams__players-player'
        >
          <p>№</p>
          <p>Full Name</p>
          <p>Position</p>
        </li>
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            cssClass={`teams__players-player`}
          />
        ))}
      </ul>
    </aside>
  );
}
