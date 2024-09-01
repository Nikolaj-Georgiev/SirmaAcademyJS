import { useData } from '../context/DataContext';
import {
  divideMatchesByStage,
  getGroupedMatchesByDate,
  getSortedMatchesByDate,
} from '../utils/dataUtils';
import { CUTOFF_DATE } from '../utils/config';
import Match from './Match';
import Loader from './Loader';

export default function HomePage() {
  const { matchesData } = useData();

  if (
    matchesData.loading ||
    !matchesData.data ||
    matchesData.data.length === 0
  ) {
    return <Loader />;
  }
  const ascendingSortedMatches = getSortedMatchesByDate(matchesData.data);
  console.log(ascendingSortedMatches);

  const { groupPhase, roundOf16, quarterFinals, semiFinals, final } =
    divideMatchesByStage(ascendingSortedMatches, CUTOFF_DATE);

  const groupedGroupPhaseMatches = getGroupedMatchesByDate(groupPhase);
  console.log('Groupe Phase:', groupedGroupPhaseMatches);
  const groupedRoundOf16Matches = getGroupedMatchesByDate(roundOf16);
  console.log('round of 16:', groupedRoundOf16Matches);
  const groupedQuarterFinalsMatches = getGroupedMatchesByDate(quarterFinals);
  console.log('quarter final:', groupedQuarterFinalsMatches);
  const groupedSemiFinalsMatches = getGroupedMatchesByDate(semiFinals);
  console.log('semi final:', groupedSemiFinalsMatches);
  const groupedFinalMatches = getGroupedMatchesByDate(final);
  console.log('final:', groupedFinalMatches);

  return (
    <section>
      <h2>Group Phase</h2>
      {renderMatches(groupedGroupPhaseMatches, 'Group Phase')}

      <h2>Round of 16</h2>
      {renderMatches(groupedRoundOf16Matches, 'Round of 16')}

      <h2>Quarter Finals</h2>
      {renderMatches(groupedQuarterFinalsMatches, 'Quarter Finals')}

      <h2>Semi Finals</h2>
      {renderMatches(groupedSemiFinalsMatches, 'Semi Finals')}

      <h2>Final</h2>
      {renderMatches(groupedFinalMatches, 'Final')}
    </section>
  );
}

function renderMatches(groupedMatches, stageName) {
  console.log(`rendering: groupedMatches`);
  return Object.keys(groupedMatches).map((date) => {
    return (
      <div key={date}>
        <h3>{`${stageName} - ${date}`}</h3>
        {groupedMatches[date].map((match) => (
          <Match
            key={match.id}
            match={match}
          />
        ))}
      </div>
    );
  });
}
