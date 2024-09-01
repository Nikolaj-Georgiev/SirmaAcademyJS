import { useData } from '../context/DataContext';
import {
  getGroupedMatchesByDate,
  getMatchesByDate,
  getSortedMatchesByDate,
} from '../utils/dataUtils';
import { CUTOFF_DATE } from '../utils/config';

export default function HomePage() {
  const { matchesData } = useData();
  const ascendingSortedMatches = getSortedMatchesByDate(matchesData.data);
  console.log(ascendingSortedMatches);

  const groupPhaseMatches = ascendingSortedMatches.filter(
    (match) => new Date(match.date) <= new Date(CUTOFF_DATE)
  );

  console.log(groupPhaseMatches);

  console.log(getGroupedMatchesByDate(ascendingSortedMatches));

  return <h1>This is a home page</h1>;
}
