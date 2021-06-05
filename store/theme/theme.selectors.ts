import { createSelector } from 'reselect';
import { RootState } from '../root/root.state';
import { ThemeState } from './theme.state';
import { initialState, name } from './theme.store';

const selectThemeDomain = (state: RootState) => state[name] || initialState;

export const makeSelectTheme = () =>
  createSelector(selectThemeDomain, (substate: ThemeState) => substate.theme);
