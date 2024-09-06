import { useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import Loader from '../Loader';
import {
  getFilteredMatchPlayers,
  getMatchDetailsById,
  getMatchPlayersByPosition,
  getTeamFieldSchemaByTeamName,
} from '../../utils/dataUtils';
import Error from '../ErrorComponent';
import Player from '../players/Player';
import { FIELD_SCHEMA, POSITIONS } from '../../utils/config';
import PlayerMini from '../players/PlayerMini';
import useTeamFieldSchema from '../../hooks/useTeamFieldSchema';
import { useMemo } from 'react';
import MatchField from './MatchField';

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
  // console.log(match);

  const teamAFieldSchema = getTeamFieldSchemaByTeamName(
    match.teamA.name,
    FIELD_SCHEMA
  );
  const teamBFieldSchema = getTeamFieldSchemaByTeamName(
    match.teamB.name,
    FIELD_SCHEMA
  );
  // console.log(teamAFieldSchema);
  // console.log(teamBFieldSchema);

  const playersAByPosition = useMemo(
    () => getFilteredMatchPlayers(match.teamA.players, POSITIONS),
    [match.teamA.players]
  );
  const playersBByPosition = useMemo(
    () => getFilteredMatchPlayers(match.teamB.players, POSITIONS),
    [match.teamB.players]
  );

  const renderedTeamA = useTeamFieldSchema(
    teamAFieldSchema,
    playersAByPosition
  );
  const renderedTeamB = useTeamFieldSchema(
    teamBFieldSchema,
    playersBByPosition
  );
  // console.log(renderedTeamA);
  // console.log(renderedTeamB);

  return (
    <section className='match-details'>
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
          {playersAByPosition.map((player) => (
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
          <div className='match-details__info-name'>{match.teamA.name}</div>
          <div className='match-details__info-score'>
            {match.teamA.teamScore}
          </div>
          <div className='match-details__info-delimiter'>-</div>
          <div className='match-details__info-score'>
            {match.teamB.teamScore}
          </div>
          <div className='match-details__info-name'>{match.teamB.name}</div>
        </div>

        <div className='match-details__field'>
          <MatchField
            key={match.teamA.name}
            renderedTeam={renderedTeamA}
            cssId={1}
          />
          <MatchField
            key={match.teamB.name}
            renderedTeam={renderedTeamB}
            cssId={2}
          />
          {/* <MatchField renderedTeam={[...renderedTeamB].reverse()} /> if I decide to make it mirror view on the field */}
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
          {playersBByPosition.map((player) => (
            <Player
              key={player.id}
              player={player}
              cssClass={'match-details__team-player'}
            />
          ))}
        </ul>
      </aside>
    </section>
  );
}
