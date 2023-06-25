import React from 'react';
import { Box } from './box/Box';

export function Field() {
  const boxCount = 9; // Number of box elements

  // Generate an array of box elements
  const boxes = Array.from({ length: boxCount }, (_, index) => (
    <Box key={index} index={index} />
  ));

  return (
    <div className="game">
      <div className="field">{boxes}</div>
    </div>
  );
}
