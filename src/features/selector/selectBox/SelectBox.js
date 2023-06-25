import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { swap } from '../../counter/counterSlice';
import {
  player_one_change,
  player_two_change,
} from '../../field/box/characterSlice';

export function SelectBox({ emoji }) {
  const dispatch = useDispatch();
  const [className, setClassName] = useState('box');
  const player_turn = useSelector((state) => state.counter.value);
  const p1Character = useSelector(
    (state) => state.character.player_one_character,
  );
  const p2Character = useSelector(
    (state) => state.character.player_two_character,
  );
  let counter = 0;

  useEffect(() => {
    if (p1Character === emoji) {
      setClassName('box p1');
    } else if (p2Character === emoji) {
      setClassName('box p2');
    } else {
      setClassName('box');
    }
  }, [player_turn]);

  const select = () => {
    if (player_turn === 0) {
      dispatch(swap());
      dispatch(player_one_change(emoji));
    } else if (player_turn === 1) {
      dispatch(swap());
      dispatch(player_two_change(emoji));
    }
  };

  return (
    <div className={className} onClick={() => select()}>
      {emoji}
    </div>
  );
}
