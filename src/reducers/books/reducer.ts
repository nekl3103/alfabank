import { BooksActionTypes } from './action-types';
import { Book } from 'types/books';

export type BooksState = {
  loading: boolean;
  list: Book[];
};

export const initialState: BooksState = {
  loading: true,
  list: [],
};

export function bookReducer(state = initialState, action: any = {}): BooksState {
  switch (action.type) {
    case BooksActionTypes.GET_BOOKS_START:
      return {
        ...state,
        loading: true,
      };

    case BooksActionTypes.GET_BOOKS_FINISH:
      return {
        ...state,
        loading: false,
        list: action.response,
      };

    case BooksActionTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
      };

    case BooksActionTypes.LIKE_BOOK:
      return {
        ...state,
        list: state.list.map((item: any)=> item.url === action.url ? { ...item, like: !item.like } : { ...item }),
      };

    case BooksActionTypes.DELETE_BOOKS:
      return {
        ...state,
        list: state.list.filter((item: Book)=> item.url !== action.url),
      };

    default: return state;
  }
}
