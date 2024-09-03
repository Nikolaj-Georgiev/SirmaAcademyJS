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
    <section className='match'>
      <div className='match__container'>
        <aside className='match__team'>
          <div className='match__team-info'>
            <div className='match__team-flag'>
              <img
                src={match.teamA.flag}
                alt={`flag of ${match.teamA.name}`}
              />
            </div>
            <h3 className='match__team-manager'>{`Team Manager: ${match.teamA.manager}`}</h3>
            <ul className='match__team-list'>
              {match.teamA.players.map((player) => (
                <Player
                  key={player.id}
                  player={player}
                  cssClass={'match__team-player'}
                />
              ))}
            </ul>
          </div>
        </aside>
        <div className='match__details'>
          <div className='match__info'>
            <div className='match__team-name'>{match.teamA.name}</div>
            <div className='match__team-score'>{match.teamA.teamScore}</div>
            <div className='match__team-delimiter'>-</div>
            <div className='match__team-score'>{match.teamB.teamScore}</div>
            <div className='match__team-name'>{match.teamB.name}</div>
          </div>
        </div>

        <div className='match__field-view'>
          <ul className='match__field-view-list-team1'>
            {renderedTeamA.map((playersInPosition, index) => (
              <li key={index}>
                {playersInPosition.map((player) => (
                  <PlayerMini
                    key={player.id}
                    player={player}
                    cssClass={'match__field-view--team1-list-item'}
                  />
                ))}
              </li>
            ))}
          </ul>
          <div className='match__field-view-list-team2'>
            {renderedTeamB.map((playersInPosition, index) => (
              <li key={index}>
                {playersInPosition.map((player) => (
                  <PlayerMini
                    key={player.id}
                    player={player}
                    cssClass={'match__field-view--team1-list-item'}
                  />
                ))}
              </li>
            ))}
          </div>
        </div>
        <aside className='match__team'>
          <div className='match__team-info'>
            <div className='match__team-flag'>
              <img
                src={match.teamB.flag}
                alt={`flag of ${match.teamB.name}`}
              />
            </div>
            <h3 className='match__team-manager'>{`Team Manager: ${match.teamB.manager}`}</h3>
            <ul className='match__team-list'>
              {match.teamB.players.map((player) => (
                <Player
                  key={player.id}
                  player={player}
                  cssClass={'match__team-player'}
                />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
