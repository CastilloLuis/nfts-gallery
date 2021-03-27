import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContainer } from './Layout.styles';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
