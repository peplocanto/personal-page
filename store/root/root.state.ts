import { ThemeState } from 'store/theme/theme.state';
import { UiState } from 'store/ui/ui.state';

export type RootStateKeyType = keyof RootState;

export interface RootState {
  theme?: ThemeState;
  ui?: UiState;
}
