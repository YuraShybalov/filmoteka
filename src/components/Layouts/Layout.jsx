import React from 'react';
import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';
import Container from './../container/container';

const Layout = () => {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
};

export default Layout;
