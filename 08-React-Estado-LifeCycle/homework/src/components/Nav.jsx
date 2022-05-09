import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='nav'>
      <img className='logoHenry' src={Logo} alt="Logo Henry" />
      <h3 className='logoHenry'>Henry - Weather App</h3>
      <SearchBar  onSearch={onSearch} />
    </div>
  );
};

export default Nav;
