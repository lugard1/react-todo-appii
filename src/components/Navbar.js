import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdClose } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiMenu } from 'react-icons/fi';

import './Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="nav-bar">
      <button
        type="button"
        onClick={handleToggle}
      >
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;