import React from 'react';
import { useState, useEffect } from 'react';
import {
  swap,
  increment_turn,
  add_to_p1_score,
  add_to_p2_score,
} from '../../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Box({ index }) {
  const dispatch = useDispatch();
  const [box_character, setBoxCharacter] = useState('');
  const [filled, setFilled] = useState(false);
  const player_one_character = useSelector(
    (state) => state.character.player_one_character,
  );
  const player_two_character = useSelector(
    (state) => state.character.player_two_character,
  );
  const player_turn = useSelector((state) => state.counter.value);
  const turn = useSelector((state) => state.counter.turn);

  function fill() {
    if (filled !== true) {
      if (player_turn === 0) {
        setBoxCharacter(player_one_character);
        dispatch(add_to_p1_score(index));
      } else {
        setBoxCharacter(player_two_character);
        dispatch(add_to_p2_score(index));
      }
      dispatch(swap());
      setFilled(true);
      dispatch(increment_turn());
    }
  }

  useEffect(() => {
    if (turn === 0) {
      setBoxCharacter('');
      setFilled(false);
    }
  }, [turn]);

  return (
    <div className="box" onClick={() => fill()}>
      {box_character}
    </div>
  );
}
