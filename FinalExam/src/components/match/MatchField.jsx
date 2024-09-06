import PlayerMini from '../players/PlayerMini';

export default function MatchField({ renderedTeam, cssId }) {
  return (
    <ul className='match-details__field-view-list-team'>
      {renderedTeam.map((playersInPosition, index) => (
        <li
          key={index}
          className='match-details__field-view-list-team--line'
        >
          {playersInPosition.map((player) => (
            <PlayerMini
              key={player.id}
              player={player}
              cssClass={`match-details__field-view-list-team--list-item${cssId}`}
            />
          ))}
        </li>
      ))}
    </ul>
  );
}
