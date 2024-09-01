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

  const { groupPhase, roundOf16, quarterFinals, semiFinals, final } =
    divideMatchesByStage(ascendingSortedMatches, CUTOFF_DATE);

  const groupedGroupPhaseMatches = getGroupedMatchesByDate(groupPhase);
  const groupedRoundOf16Matches = getGroupedMatchesByDate(roundOf16);
  const groupedQuarterFinalsMatches = getGroupedMatchesByDate(quarterFinals);
  const groupedSemiFinalsMatches = getGroupedMatchesByDate(semiFinals);
  const groupedFinalMatches = getGroupedMatchesByDate(final);

  return (
    <section className='home'>
      <h1 className='home__heading-primary'>Tournament Stages</h1>

      <div className='home__phase'>
        <h2 className='home__heading-secondary'>Group Phase</h2>
        <span></span>
        {renderMatches(groupedGroupPhaseMatches, 'Group Phase')}
      </div>
      <dir className='home__phase'>
        <h2 className='home__heading-secondary'>Round of 16</h2>
        <span></span>
        {renderMatches(groupedRoundOf16Matches, 'Round of 16')}
      </dir>
      <dir className='home__phase'>
        <h2 className='home__heading-secondary'>Quarter Finals</h2>
        <span></span>
        {renderMatches(groupedQuarterFinalsMatches, 'Quarter Finals')}
      </dir>
      <dir className='home__phase'>
        <h2 className='home__heading-secondary'>Semi Finals</h2>
        <span></span>
        {renderMatches(groupedSemiFinalsMatches, 'Semi Finals')}
      </dir>
      <dir className='home__phase'>
        <h2 className='home__heading-secondary'>Final</h2>
        <span></span>
        {renderMatches(groupedFinalMatches, 'Final')}
      </dir>
    </section>
  );
}

function renderMatches(groupedMatches, stageName) {
  console.log(`rendering: groupedMatches`);
  return Object.keys(groupedMatches).map((date) => {
    return (
      <div key={date}>
        <h3 className='home__heading-tertiary'>{`${stageName} - ${date}`}</h3>
        <ul className='home__list'>
          {groupedMatches[date].map((match) => (
            <Match
              key={match.id}
              match={match}
            />
          ))}
        </ul>
      </div>
    );
  });
}
