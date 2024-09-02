import BracketLine from './BracketLine';

export default function Bracket({ matches }) {
  // TODO:
  // 1. to add real data for the groups from Round of 16 further
  // 2. to remove the dummy data and fix the code for my needs
  return (
    <div className='bracket'>
      {matches.map((match, index) => (
        <div
          key={index}
          className='match'
        >
          <div className='team'>{match.team1}</div>
          <div className='team'>{match.team2}</div>
          {index % 2 === 0 && index < matches.length - 2 && (
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
          )}
        </div>
      ))}
    </div>
  );
}
