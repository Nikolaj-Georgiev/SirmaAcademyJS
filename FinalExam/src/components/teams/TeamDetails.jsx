import Player from '../players/Player';

export default function TeamDetails({ players }) {
  return (
    <aside className='teams__players'>
      <ul className='teams__players-list'>
        {players.map((player) => (
          <Player
            player={player}
            cssClass={`teams__players-player`}
          />
        ))}
      </ul>
    </aside>
  );
}
