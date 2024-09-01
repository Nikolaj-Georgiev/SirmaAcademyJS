import { useData } from '../context/DataContext';
import { getMatchesByDate, getSortedMatchesByDate } from '../utils/dataUtils';
import { CUTOFF_DATE } from '../utils/config';

export default function HomePage() {
  const { matchesData } = useData();
  const ascendingSortedMatches = getSortedMatchesByDate(matchesData.data);
  console.log(ascendingSortedMatches);

  const groupPhaseMatches = ascendingSortedMatches.filter(
    (match) => new Date(match.date) <= new Date(CUTOFF_DATE)
  );

  console.log(groupPhaseMatches);

  const { date, onDateMatches } = getMatchesByDate(groupPhaseMatches);
  console.log(date);
  console.log(onDateMatches);
  return <h1>This is a home page</h1>;
}
