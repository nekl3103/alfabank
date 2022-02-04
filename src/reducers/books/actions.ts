import * as Api from 'types/api';

import {
  BooksActionTypes,
} from './action-types';

export const getBooks = () => ({
  type: BooksActionTypes.GET_BOOKS_START,
});

export const getBooksError = () => ({
  type: BooksActionTypes.GET_BOOKS_ERROR,
});

export const getBooksFinish = (response: Api.GetBooksResponse) => ({
  type: BooksActionTypes.GET_BOOKS_FINISH,
  response,
});

export const deleteBooks = (url: string) => ({
  type: BooksActionTypes.DELETE_BOOKS,
  url,
});

export const likeBook = (url: string) => ({
  type: BooksActionTypes.LIKE_BOOK,
  url,
});
