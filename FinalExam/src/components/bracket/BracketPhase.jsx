import BracketMatch from './BracketMatch';
import BracketLines from './BracketLines';
import { COORDINATES } from '../../utils/config';

export default function BracketPhase({ phase, phaseName, cssId }) {
  return (
    <div className={`bracket__phase bracket__phase--${cssId}`}>
      <h3>{phaseName}</h3>
      {Object.entries(phase).map(([date, matches], index) => (
        <div
          key={date}
          className={`bracket__phase-date bracket__phase-date--${index + 1}`}
        >
          <h4>{date}</h4>
          {phaseName !== 'Final' &&
            !(
              phaseName === 'Semi Final' &&
              index == Object.entries(phase).length - 1
            ) && (
              <BracketLines
                key={date}
                coordinates={
                  date === '6/29/2024' ? COORDINATES[1] : COORDINATES[0]
                }
              />
            )}
          {}
          {matches.map((match) => (
            <BracketMatch
              key={match.id}
              match={match}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
