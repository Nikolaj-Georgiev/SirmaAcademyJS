export default function BracketLine({ x1, y1, x2, y2 }) {
  return (
    <svg
      className='bracket-line'
      // width={Math.max(x1, x2) + 10}
      // height={Math.max(y1, y2) + 10}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke='white'
        strokeWidth='1'
      />
    </svg>
  );
}
