import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import Loader from './Loader';
import {
  getMatchDetailsById,
  getTeamFieldSchemaByTeamName,
} from '../utils/dataUtils';
import Error from './ErrorComponent';
import Player from './Player';
import { FIELD_SCHEMA } from '../utils/config';
import PlayerMini from './PlayerMini';
import useTeamFieldSchema from '../hooks/useTeamFieldSchema';

export default function MatchDetails() {
  const { matchesData, flagUrls, teamsData, playersData, recordsIndexObject } =
    useData();

  const { matchId } = useParams();
  console.log(matchId);

  // TODO:
  // 1. add logic for extracting the teams and players with their records - done
  // 2. visualize teams on both size of the fields with names and records - done
  // 3. add data to visualize the players on their corresponding fields - done
  // 4. style the component

  if (
    matchesData.loading ||
    teamsData.loading ||
    playersData.loading ||
    flagUrls.loading
  ) {
    return <Loader text='Match details are loading..' />;
  }

  if (
    matchesData.error ||
    teamsData.error ||
    playersData.error ||
    flagUrls.error
  ) {
    return <Error />;
  }

  const match = getMatchDetailsById(
    matchId,
    matchesData.data,
    teamsData.data,
    playersData.data,
    recordsIndexObject,
    flagUrls.flagUrls
  );

  if (!match) {
    return <ErrorComponent />;
  }
  console.log(match);

  const teamAFieldSchema = getTeamFieldSchemaByTeamName(
    match.teamA.name,
    FIELD_SCHEMA
  );
  const teamBFieldSchema = getTeamFieldSchemaByTeamName(
    match.teamB.name,
    FIELD_SCHEMA
  );
  console.log(teamAFieldSchema);
  console.log(teamBFieldSchema);

  const renderedTeamA = useTeamFieldSchema(
    teamAFieldSchema,
    match.teamA.players
  );
  const renderedTeamB = useTeamFieldSchema(
    teamAFieldSchema,
    match.teamB.players
  );
  console.log(renderedTeamA);
  console.log(renderedTeamB);

  return (
    <section className='match-details'>
      <div className='match-details__container'>
        <aside className='match-details__team'>
          <div className='match-details__team-flag'>
            <img
              src={match.teamA.flag}
              alt={`flag of ${match.teamA.name}`}
              className='match-details__team-flag--img'
            />
          </div>
          <h3 className='match-details__team-manager'>
            <span>Team Manager:</span> <strong>{match.teamA.manager}</strong>
          </h3>
          <ul className='match-details__team-list'>
            {match.teamA.players.map((player) => (
              <Player
                key={player.id}
                player={player}
                cssClass={'match-details__team-player'}
              />
            ))}
          </ul>
        </aside>
        <div className='match-details__details'>
          <div className='match-details__info'>
            <div className='match-details__team-name'>{match.teamA.name}</div>
            <div className='match-details__team-score'>
              {match.teamA.teamScore}
            </div>
            <div className='match-details__team-delimiter'>-</div>
            <div className='match-details__team-score'>
              {match.teamB.teamScore}
            </div>
            <div className='match-details__team-name'>{match.teamB.name}</div>
          </div>

          <div className='match-details__field-view'>
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
                      cssClass={
                        'match-details__field-view-list-team--list-item1'
                      }
                    />
                  ))}
                </li>
              ))}
            </ul>
            <ul className='match-details__field-view-list-team'>
              {[...renderedTeamB].reverse().map((playersInPosition, index) => (
                <li
                  key={index}
                  className='match-details__field-view-list-team--line'
                >
                  {playersInPosition.map((player) => (
                    <PlayerMini
                      key={player.id}
                      player={player}
                      cssClass={
                        'match-details__field-view-list-team--list-item2'
                      }
                    />
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className='match-details__team'>
          <div className='match-details__team-flag'>
            <img
              src={match.teamB.flag}
              alt={`flag of ${match.teamB.name}`}
              className='match-details__team-flag--img'
            />
          </div>
          <h3 className='match-details__team-manager'>
            <span>Team Manager:</span> <strong>{match.teamB.manager}</strong>
          </h3>
          <ul className='match-details__team-list'>
            {match.teamB.players.map((player) => (
              <Player
                key={player.id}
                player={player}
                cssClass={'match-details__team-player'}
              />
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

// return (
//   <section className='match-details'>
//     <div className='match-details__container'>
//       <aside className='match-details__team'>
//         <div className='match-details__team-flag'>
//           <img
//             src={match.teamA.flag}
//             alt={`flag of ${match.teamA.name}`}
//             className='match-details__team-flag--img'
//           />
//         </div>
//         <h3 className='match-details__team-manager'>
//           <span>Team Manager:</span> <strong>{match.teamA.manager}</strong>
//         </h3>
//         <ul className='match-details__team-list'>
//           {match.teamA.players.map((player) => (
//             <Player
//               key={player.id}
//               player={player}
//               cssClass={'match-details__team-player'}
//             />
//           ))}
//         </ul>
//       </aside>
//       <div className='match-details__details'>
//         <div className='match-details__info'>
//           <div className='match-details__team-name'>{match.teamA.name}</div>
//           <div className='match-details__team-score'>
//             {match.teamA.teamScore}
//           </div>
//           <div className='match-details__team-delimiter'>-</div>
//           <div className='match-details__team-score'>
//             {match.teamB.teamScore}
//           </div>
//           <div className='match-details__team-name'>{match.teamB.name}</div>
//         </div>

//         <div className='field-view'>
//           <ul className='field-list'>
//             {renderedTeamA.map((playersInPosition, index) => (
//               <li
//                 key={index}
//                 className='field-list__line'
//               >
//                 {playersInPosition.map((player) => (
//                   <PlayerMini
//                     key={player.id}
//                     player={player}
//                     cssClass={'field-list__item--team1'}
//                   />
//                 ))}
//               </li>
//             ))}
//           </ul>
//           <ul className='field-list'>
//             {[...renderedTeamB].reverse().map((playersInPosition, index) => (
//               <li
//                 key={index}
//                 className='field-list__line'
//               >
//                 {playersInPosition.map((player) => (
//                   <PlayerMini
//                     key={player.id}
//                     player={player}
//                     cssClass={'field-list__item--team2'}
//                   />
//                 ))}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <aside className='match-details__team'>
//         <div className='match-details__team-flag'>
//           <img
//             src={match.teamB.flag}
//             alt={`flag of ${match.teamB.name}`}
//             className='match-details__team-flag--img'
//           />
//         </div>
//         <h3 className='match-details__team-manager'>
//           <span>Team Manager:</span> <strong>{match.teamB.manager}</strong>
//         </h3>
//         <ul className='match-details__team-list'>
//           {match.teamB.players.map((player) => (
//             <Player
//               key={player.id}
//               player={player}
//               cssClass={'match-details__team-player'}
//             />
//           ))}
//         </ul>
//       </aside>
//     </div>
//   </section>
// );
// }
