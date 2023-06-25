import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {
  const player = useSelector((state) => state.counter.value);
  const [className, setClassName] = useState('select-header');
  useEffect(() => {
    if (player === 0) {
      setClassName('select-header p1');
    } else if (player === 1) {
      setClassName('select-header p2');
    }
  }, [player]);

  return (
    <div className={className}>
      <div className="inner">
        <p>Player {player + 1} - Please Select a Character</p>
      </div>
      <Link className="start" to="/game">
        Start
      </Link>
    </div>
  );
}
