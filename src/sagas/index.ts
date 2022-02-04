import {
  all,
  takeEvery,
} from 'redux-saga/effects';
import { BooksActionTypes } from 'reducers/books/action-types';

import { getBooksRequest } from './books/get';

export default function* sagas() {
  yield all([
    takeEvery(BooksActionTypes.GET_BOOKS_START, getBooksRequest),
  ]);
}
