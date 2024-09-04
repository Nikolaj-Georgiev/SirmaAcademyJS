import { useData } from '../context/DataContext';

import BracketLine from './BracketLine';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

import {
  divideMatchesByStage,
  getGroupedMatchesByDate,
  getSortedMatchesByDate,
  getWinnerIdAndWinWayFromMatch,
} from '../utils/dataUtils';
import { CUTOFF_DATE } from '../utils/config';
import { PHASE_NAMES } from '../utils/config';

export default function Bracket() {
  const { matchesData } = useData();

  if (
    matchesData.loading ||
    !matchesData.data ||
    matchesData.data.length === 0
  ) {
    return <Loader />;
  }
  if (matchesData.error) {
    return <ErrorComponent />;
  }
  const ascendingSortedMatches = getSortedMatchesByDate(matchesData.data);

  const { roundOf16, quarterFinals, semiFinals, final } = divideMatchesByStage(
    ascendingSortedMatches,
    CUTOFF_DATE
  );

  const groupedRoundOf16Matches = getGroupedMatchesByDate(roundOf16);
  const groupedQuarterFinalsMatches = getGroupedMatchesByDate(quarterFinals);
  const groupedSemiFinalsMatches = getGroupedMatchesByDate(semiFinals);
  const groupedFinalMatches = getGroupedMatchesByDate(final);

  const phases = [
    groupedRoundOf16Matches,
    groupedQuarterFinalsMatches,
    groupedSemiFinalsMatches,
    groupedFinalMatches,
  ];
  console.log(phases);

  console.log(groupedRoundOf16Matches);
  // TODO:
  // 1. to add real data for the groups from Round of 16 further - done
  // 2. to remove the dummy data and fix the code for my needs
  return renderBracket(groupedRoundOf16Matches);
}

function renderBracket(datesWithMatches) {
  return (
    <div className='bracket'>
      {Object.entries(datesWithMatches).map(([date, matches], dateIndex) => (
        <div
          key={dateIndex}
          className='bracket-date'
        >
          <h3>{date}</h3>
          {
            <span>
              {/* {getWinnerIdAndWinWayFromMatch(matches[1])[1].toString()} */}
            </span>
          }
          {matches.map((match, matchIndex) => (
            <div
              key={matchIndex}
              className='match'
            >
              <div className='team'>{match.ateamid}</div>
              <div className='team'>{match.bteamid}</div>
              {/* {matchIndex % 2 === 0 && matchIndex < matches.length - 2 && ( */}
              <>
                <BracketLine
                  x1={100}
                  y1={50}
                  x2={150}
                  y2={50}
                />
                <BracketLine
                  x1={150}
                  y1={50}
                  x2={150}
                  y2={150}
                />
                <BracketLine
                  x1={150}
                  y1={150}
                  x2={100}
                  y2={150}
                />
                <BracketLine
                  x1={150}
                  y1={100}
                  x2={250}
                  y2={100}
                />
              </>
              {/* )} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
