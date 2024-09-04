import BracketLine from './BracketLine';

export default function BracketLines({ coordinates }) {
  return (
    <>
      {coordinates.map((coord, index) => (
        <BracketLine
          key={index}
          x1={coord.x1}
          y1={coord.y1}
          x2={coord.x2}
          y2={coord.y2}
        />
      ))}
    </>
  );
}
