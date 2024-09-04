// import { useEffect, useRef, useState } from 'react';
import BracketLine from './BracketLine';

export default function BracketLines({ coordinates }) {
  // IF TIME TODO DYNAMIC COORDINATES FOR BRACKET!!!
  // export default function BracketLines() {
  //   const [coordinates, setCoordinates] = useState([]);
  //   const bracketRef = useRef(null);
  //   useEffect(() => {
  //     if (bracketRef.current) {
  //       const rect = bracketRef.current.getBoundingClientRect();
  //       const x = Math.trunc(rect.x);
  //       const y = Math.trunc(rect.y);
  //       console.log(rect);
  //       const calculatedCoordinates = [
  //         { x1: x, y1: y, x2: x + 50, y2: y },
  //         { x1: x + 50, y1: y, x2: x + 50, y2: y + 100 },
  //         { x1: x + 50, y1: y + 100, x2: x, y2: y + 100 },
  //         { x1: x + 50, y1: y + 50 - 50, x2: x + 150, y2: y },
  //       ];
  //       setCoordinates(calculatedCoordinates);
  //     }
  //   }, []);

  return (
    <div
      // ref={bracketRef}
      className='bracket__lines'
    >
      {coordinates.map((coord, index) => (
        <BracketLine
          key={index}
          x1={coord.x1}
          y1={coord.y1}
          x2={coord.x2}
          y2={coord.y2}
        />
      ))}
    </div>
  );
}
