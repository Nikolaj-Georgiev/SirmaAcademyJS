import PlayerMini from '../players/PlayerMini';

export default function MatchField({ renderedTeam, cssId }) {
  return (
    <div className='match-details__field-container'>
      <ul className='match-details__field-team'>
        {renderedTeam.map((playersInPosition, index) => (
          <li
            key={index}
            className='match-details__field-team-line'
          >
            {playersInPosition.map((player) => (
              <PlayerMini
                key={player.id}
                player={player}
                cssClass={`match-details__field-team-line-item match-details__field-team-line-item--${cssId}`}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
