import { Pages } from '@domain/Pages';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiState } from './ui.state';

export const initialState: UiState = {
  activePage: undefined,
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<Pages>) => {
      state.activePage = action.payload ?? initialState.activePage;
    },
  },
});

export const { name, actions, reducer } = ui;
