import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Cards from './pages/Cards';
import Home from './pages/Home';
import Song from './pages/Song';
import Login from  './pages/Login';
import Signup from './pages/Signup';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Login');

  const renderPage = () => {
    if (currentPage === 'Song') {
      return <Song />;
    }
    if (currentPage === 'Cards') {
      return <Cards />;
    }
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'Signup') {
      return <Signup />
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}