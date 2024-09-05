export default function BracketLine({ x1, y1, x2, y2 }) {
  return (
    <svg
      className='bracket__line'
      width='100%'
      height='100%'
      // preserveAspectRatio='none'
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke='white'
        strokeWidth='2'
      />
    </svg>
  );
}
