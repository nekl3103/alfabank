
import { combineReducers } from 'redux';

import { bookReducer } from './books/reducer';

export const rootReducer = combineReducers({
  books: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
