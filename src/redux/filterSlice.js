import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterAction: (state, actions) => actions.payload,
  },
});
export const { changeFilterAction } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
