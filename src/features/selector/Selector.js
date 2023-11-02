import React from 'react';
import { SelectBox } from './selectBox/SelectBox';

export function Selector() {
  // Generate an array of box elements
  const emojis = [
    '❌',
    '⭕️',
    '🦴',
    '😂',
    '🤡',
    '👶',
    '👻',
    '👓',
    '🙀',
    '👽',
    '🤖',
    '🎃',
    '🐶',
    '🦊',
    '🐼',
    '🧦',
    '🧛‍♀️',
    '🍍',
    '🍺',
    '⚽️',
    '🏎',
  ];
  let boxes = [];
  emojis.forEach((emoji) => {
    boxes.push(<SelectBox emoji={emoji} />);
  });

  return (
    <div className="select">
      <div className="selector">{boxes}</div>
    </div>
  );
}
