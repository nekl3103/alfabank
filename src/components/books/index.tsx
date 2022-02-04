import React from 'react';
import { Avatar, Card, Spin } from 'antd';
import cn from 'classnames';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import { Book } from 'types/books';

import imgBook from 'assets/book.png';
import cl from './styles.module.scss';

const { Meta } = Card;

const getAuthor = (author?: string | []) => {
  if (!author || !author.length) return null;
  const list = Array.isArray(author) ? author.join(', ') : author;

  return <p><b>Автор</b>: { list }</p>;
};

type TypeBooks = {
  data?: Book[];
  loading: boolean;
  isFilterByLike: boolean;
  onLike: (url: string) => void;
  onDelete: (url: string) => void;
};

export const Books = ({ data, loading, isFilterByLike, onLike, onDelete }: TypeBooks) => {

  const list = isFilterByLike ? data?.filter((item) => item.like) : data;

  return (
    <Spin tip="Loading..." spinning={ loading }>
      <div className={ cl.card_wrap }>
        { list?.map((item: Book, i: number) => (
          <Card
            key={ i }
            hoverable={ true }
            className={ cl.card }
            actions={ [
              <HeartOutlined className={ cn({ [cl.like]: item.like }) } onClick={ () => onLike(item.url) } key="love" />,
              <DeleteOutlined key="edit" onClick={ () => onDelete(item.url) } />,
            ] }
          >
            <Meta
              avatar={ <Avatar src={ imgBook } /> }
              title={ item.name }
            />
            <div className={ cl.info }>
              { getAuthor(item.authors) }
              <p><b>Страна</b>: { item.country }</p>
              <p><b>Издатель</b>: { item.publisher }</p>
              <p><b>Выпущено</b>: { item.released }</p>
              <p><b>Страниц</b>: { item.numberOfPages }</p>
            </div>
          </Card>
        )) }
      </div>
    </Spin >);
};
