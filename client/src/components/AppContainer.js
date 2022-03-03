import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Cards from './pages/Cards';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Song') {
      return <Portfolio />;
    }
    if (currentPage === 'Cards') {
      return <Cards />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}