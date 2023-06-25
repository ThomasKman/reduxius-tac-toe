import React, { useState, useEffect } from 'react';
import { reset_turn, max_turn } from '../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Header() {
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.counter.turn);
  const counter = useSelector((state) => state.counter.value);
  const [character, setCharacter] = useState('');
  const [previousCharacter, setPreviousCharacter] = useState('');

  const player_one_character = useSelector(
    (state) => state.character.player_one_character,
  );
  const player_two_character = useSelector(
    (state) => state.character.player_two_character,
  );
  const player_one_score = useSelector(
    (state) => state.counter.player_one_score,
  );
  const player_two_score = useSelector(
    (state) => state.counter.player_two_score,
  );

  const [won, setWon] = useState(false);

  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWin(board) {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board.includes(a) && board.includes(b) && board.includes(c)) {
        setWon(true);
        dispatch(max_turn());
      }
    }
  }

  const reset = () => {
    dispatch(reset_turn());
    setWon(false);
  };

  useEffect(() => {
    setPreviousCharacter(character);
    if (counter === 0) {
      setCharacter(player_one_character);
      checkWin(player_two_score);
    } else if (counter === 1) {
      setCharacter(player_two_character);
      checkWin(player_one_score);
    }
  }, [turn]);

  return (
    <div className="header">
      {turn < 9 && <p>Player turn: {character}</p>}
      {turn === 9 && <p>Game Over</p>}

      {won && (
        <>
          <div className="wonon" onClick={reset}>
            <div className="won">Player {previousCharacter} Won!!!</div>
            <div className="won">Player {previousCharacter} Won!!!</div>
            <div className="won">Player {previousCharacter} Won!!!</div>
          </div>
          <div className="backdrop" onClick={reset} />
        </>
      )}
      {turn === 9 && (
        <button className="reset" onClick={() => reset()}>
          Reset!
        </button>
      )}
    </div>
  );
}
