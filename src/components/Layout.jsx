import * as React from 'react';
import Footer from './Footer';
import '../styles/layout.css';
import '../styles/animations.css';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
