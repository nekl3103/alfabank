import { call, put } from 'redux-saga/effects';
import { fetchers } from 'api';
import {
  getBooksError,
  getBooksFinish,
} from 'reducers/books/actions';

export function* getBooksRequest(): any {
  try {
    const response = yield call(fetchers.getBooks);

    yield put(getBooksFinish(response.data));
  } catch (error) {
    yield put(getBooksError());
  }
}
