import { combineReducers } from '@reduxjs/toolkit';
import * as theme from '../theme/theme.store';
import * as ui from '../ui/ui.store';

export function createReducer() {
  const rootReducer = combineReducers({
    [theme.name]: theme.reducer,
    [ui.name]: ui.reducer,
  });

  return rootReducer;
}
