import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createReducer } from './root.reducer';

export const store = configureStore({
  reducer: createReducer(),

  middleware: [...getDefaultMiddleware()],
  devTools:
    /* istanbul ignore next line */
    process.env.NODE_ENV !== 'production',
});
