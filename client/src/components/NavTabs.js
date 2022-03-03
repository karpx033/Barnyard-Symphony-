import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#cards"
          onClick={() => handlePageChange('Cards')}
          className={currentPage === 'Cards' ? 'nav-link active' : 'nav-link'}
        >
          Cards
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#song"
          onClick={() => handlePageChange('Song')}
          className={currentPage === 'Song' ? 'nav-link active' : 'nav-link'}
        >
          Song
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;