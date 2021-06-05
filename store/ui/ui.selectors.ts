import { createSelector } from 'reselect';
import { RootState } from '../root/root.state';
import { UiState } from './ui.state';
import { initialState, name } from './ui.store';

const selectUiDomain = (state: RootState) => state[name] || initialState;

export const makeSelectActivePage = () =>
  createSelector(selectUiDomain, (substate: UiState) => substate.activePage);
