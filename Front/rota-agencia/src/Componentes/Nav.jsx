import React, { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4 text-black fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-3xl font-semibold" href="/">Mi Sitio</a>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="menu-icon"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
          <li className="nav-item">
            <a className="nav-link" href="/quienes-somos">¿Quiénes Somos?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/que-hacemos">¿Qué Hacemos?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
