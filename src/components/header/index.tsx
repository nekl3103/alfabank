import { Layout, Menu } from 'antd';
import React from 'react';

import cl from './styles.module.scss';

const { Header: AntdHeader } = Layout;

export const Header = () => (
  <AntdHeader className={ cl.header }>
    <div className={ cl.logo } />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['home'] }>
      <Menu.Item key="home">Книги</Menu.Item>
    </Menu>
  </AntdHeader>
);
