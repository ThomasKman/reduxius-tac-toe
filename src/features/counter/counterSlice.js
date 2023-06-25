import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    turn: 0,
    player_one_score: [],
    player_two_score: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    max_turn: (state, action) => {
      state.turn = 9;
    },
    swap: (state) => {
      if (state.value === 1) {
        state.value = 0;
      } else {
        state.value = 1;
      }
    },
    increment_turn: (state) => {
      state.turn += 1;
    },
    reset_turn: (state) => {
      state.turn = 0;
      state.player_one_score = [];
      state.player_two_score = [];
    },
    add_to_p1_score: (state, action) => {
      let new_score = [...state.player_one_score, action.payload];
      state.player_one_score = new_score;
    },
    add_to_p2_score: (state, action) => {
      let new_score = [...state.player_two_score, action.payload];
      state.player_two_score = new_score;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  max_turn,
  swap,
  increment_turn,
  reset_turn,
  add_to_p1_score,
  add_to_p2_score,
  reset_scores,
} = counterSlice.actions;

export default counterSlice.reducer;
