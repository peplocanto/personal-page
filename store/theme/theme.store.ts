import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './theme.state';

export const initialState: ThemeState = {
  theme: 'light',
};

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<any | null>) => {
      state.theme = action.payload ?? initialState.theme;
    },
  },
});

export const { name, actions, reducer } = theme;
