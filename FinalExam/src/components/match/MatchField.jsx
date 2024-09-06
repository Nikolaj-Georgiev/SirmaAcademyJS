export default function MatchField({fieldSchema, players}){return(
  <ul className='match-details__field-view-list-team'>
            {renderedTeamA.map((playersInPosition, index) => (
              <li
                key={index}
                className='match-details__field-view-list-team--line'
              >
                {playersInPosition.map((player) => (
                  <PlayerMini
                    key={player.id}
                    player={player}
                    cssClass={'match-details__field-view-list-team--list-item1'}
                  />
                ))}
              </li>
            ))}
);}