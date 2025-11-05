import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
