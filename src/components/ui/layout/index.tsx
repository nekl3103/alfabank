import { Layout as Layouts } from 'antd';
import React from 'react';

import { Header } from '../../header';
import styles from './styles.module.scss';

const { Content, Footer } = Layouts;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => (
  <div className={ styles.container }>
    <Header />
    <Content className={ styles.content }>
      <div className={ styles.wrap }> { children }</div>
    </Content>
    <Footer style={ { textAlign: 'center' } }>© 2022</Footer>
  </div>
);
