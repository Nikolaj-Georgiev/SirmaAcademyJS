import { useData } from '../../context/DataContext';

import BracketLines from './BracketLines';
import BracketMatch from './BracketMatch';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

import {
  divideMatchesByStage,
  getGroupedMatchesByDate,
  getSortedMatchesByDate,
} from '../../utils/dataUtils';
import { CUTOFF_DATE } from '../../utils/config';
import { PHASE_NAMES } from '../../utils/config';
import BracketPhase from './BracketPhase';

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
  // 2. to remove the dummy data and fix the code for my needs - done
  // 3. if time to add dynamic coordinates!
  return renderBracket(phases, PHASE_NAMES);
}

function renderBracket(phases, phaseNames) {
  return (
    <div className='bracket'>
      {phases.map((phase, index) => (
        <BracketPhase
          key={phaseNames[index]}
          phase={phase}
          phaseName={phaseNames[index]}
        />
      ))}
    </div>
  );
}
