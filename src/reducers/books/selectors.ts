import { RootState } from '../index';

export const selectBooks = (state: RootState) => state.books.list;
export const selectBooksLoading = (state: RootState) => state.books.loading;
