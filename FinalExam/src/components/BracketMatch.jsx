import { useData } from '../context/DataContext';
import {
  getScoreFromMatch,
  getTeamById,
  getWinnerIdAndWinWayFromMatch,
} from '../utils/dataUtils';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

export default function BracketMatch({ match }) {
  const { teamsData } = useData();

  if (teamsData.loading) return <Loader text='Match info loading..' />;
  if (teamsData.error)
    return <ErrorComponent text='Cannot load teams data :(' />;

  console.log(teamsData);

  const matchInfoFn = (teams, match) => {
    const teamA = getTeamById(teams, match.ateamid);
    const teamB = getTeamById(teams, match.bteamid);
    const { winnerId, winWay } = getWinnerIdAndWinWayFromMatch(match);
    const { teamA: scoreA, teamB: scoreB } = getScoreFromMatch(match);

    return { teamA, teamB, winnerId, winWay, scoreA, scoreB };
  };

  const matchInfo = matchInfoFn(teamsData.data, match);
  console.log(matchInfo);
  return (
    <div className='bracket__match'>
      <div className='bracket__match-teams'>
        <div className='bracket__match-teams--info'>
          {matchInfo.teamA.name && <span>{matchInfo.teamA.name}</span>}
          {matchInfo.winnerId === matchInfo.teamA.id ? <span>Win</span> : null}
          {!matchInfo.winWay && matchInfo.winnerId === matchInfo.teamA.id && (
            <span>with penalties</span>
          )}
        </div>
        <div className='bracket__match-teams--info'>
          {matchInfo.teamB.name && <span>{matchInfo.teamB.name}</span>}
          {matchInfo.winnerId === matchInfo.teamB.id ? <span>Win</span> : null}
          {!matchInfo.winWay && matchInfo.winnerId === matchInfo.teamB.id && (
            <span>with penalties</span>
          )}
        </div>
      </div>
      <div className='bracket__match-score'>
        <div className='bracket__match-score--1'>{matchInfo.scoreA}</div>
        <div className='bracket__match-score--2'>{matchInfo.scoreB}</div>
      </div>
    </div>
  );
}
