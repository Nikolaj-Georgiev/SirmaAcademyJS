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

  const matchInfo = () => {
    const teamA = getTeamById(teamsData, match.ateamid);
    const teamB = getTeamById(teamsData, match.bteamid);
    const { winnerId, winWay } = getWinnerIdAndWinWayFromMatch(match);
    const { teamA: scoreA, teamB: scoreB } = getScoreFromMatch(match);

    return { teamA, teamB, winnerId, winWay, scoreA, scoreB };
  };

  return (
    <div className='bracket__match'>
      <div className='bracket__match-teams'>
        <div className='bracket__match-teams--1'>
          {matchInfo.teamA.name}
          {matchInfo.winnerId === teamA.id ? <span>Win</span> : null}
          {!matchInfo.winWay && <span>with penalties</span>}
        </div>
        <div className='bracket__match-teams--2'>
          {teamB.name}
          {matchInfo.winnerId === teamB.id ? <span>Win</span> : null}
          {!matchInfo.winWay && <span>with penalties</span>}
        </div>
        <div className='bracket__match-score'>
          <div className='bracket__match-score--1'>{matchInfo.scoreA}</div>
          <div className='bracket__match-score--2'>{matchInfo.scoreB}</div>
        </div>
      </div>
    </div>
  );
}
