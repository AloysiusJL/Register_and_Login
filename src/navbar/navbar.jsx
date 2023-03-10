import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a
          role='button'
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-start'>
          <a className='navbar-item'>Home</a>
          <a className='navbar-item'>
            <Link to='/List'>
                List
            </Link>
        </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                <Link to='/SignUP'>
                    <strong>Sign up</strong>
                </Link>
                </a>
                <a class="button is-light">
                    Log in
                </a>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
