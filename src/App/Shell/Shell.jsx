import React from 'react';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';

import { Container } from '../../framework/ui';

export default function Shell({ children }) {
  return (
    <div>
      <TopNav />
      <Container>
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
