import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    player_one_character: '❌',
    player_two_character: '⭕️',
  },
  reducers: {
    player_one_change: (state, action) => {
      state.player_one_character = action.payload;
      console.log(action);
    },
    player_two_change: (state, action) => {
      state.player_two_character = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { player_one_change, player_two_change } = characterSlice.actions;

export default characterSlice.reducer;
