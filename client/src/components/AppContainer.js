import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Cards from './pages/Cards';
import Home from './pages/Home';
import Song from './pages/Song';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Song') {
      return <Song />;
    }
    if (currentPage === 'Cards') {
      return <Cards />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}