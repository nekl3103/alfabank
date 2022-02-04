import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBooks, likeBook } from 'reducers/books/actions';
import { selectBooks, selectBooksLoading } from 'reducers/books/selectors';

import { Layout } from 'components/ui/layout';
import { Filter } from 'components/books/filter';
import { Books } from 'components/books';

export const Home = () => {
  const put = useDispatch();
  const books = useSelector(selectBooks);
  const booksLoading = useSelector(selectBooksLoading);
  const [filterLike, setFilterLike] = useState(false);

  useEffect(() => {
    put(getBooks());
  }, []);

  const onLike = useCallback((url) => {
    put(likeBook(url));
  }, []);

  const onDelete = useCallback((url) => {
    put(deleteBooks(url));
  }, []);

  return (
    <Layout>
      <Filter checked={ filterLike } onChange={ setFilterLike } />

      <Books
        data={ books }
        loading={ booksLoading }
        isFilterByLike={ filterLike }
        onLike={ onLike }
        onDelete={ onDelete }
      />
    </Layout>
  );
};
