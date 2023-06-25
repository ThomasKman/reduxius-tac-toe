import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    player_one_character: '💩',
    player_two_character: '🙀',
  },
  reducers: {
    player_one_change: (state, action) => {
      state.player_one_character = action.payload;
    },
    player_two_change: (state, action) => {
      state.player_two_character = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { swap } = characterSlice.actions;

export default characterSlice.reducer;
