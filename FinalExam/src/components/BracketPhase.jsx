import BracketMatch from './BracketMatch';

export default function BracketPhase({ phase, phaseName }) {
  return (
    <div className='bracket__phase'>
      <h3>{phaseName}</h3>
      {Object.entries(phase).map(([date, matches]) => (
        <div
          key={date}
          className='bracket__phase-date'
        >
          <h4>{date}</h4>
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
