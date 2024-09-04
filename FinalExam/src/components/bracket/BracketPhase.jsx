import BracketMatch from './BracketMatch';
import BracketLines from './BracketLines';
import { COORDINATES } from '../../utils/config';

export default function BracketPhase({ phase, phaseName, cssId }) {
  return (
    <div className={`bracket__phase bracket__phase--${cssId}`}>
      <h3>{phaseName}</h3>
      {Object.entries(phase).map(([date, matches]) => (
        <div
          key={date}
          className='bracket__phase-date'
        >
          <h4>{date}</h4>
          <BracketLines
            key={date}
            coordinates={COORDINATES}
          />
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
