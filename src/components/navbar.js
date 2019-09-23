import React from 'react';
import './navbar.css'

function Navbar() {

  return (
    <div>
      <h1 className='name-bar'>Benjamin Scott</h1>
      <div>
        <ul className='nav-bar'>
          <li>Home</li>
          <li>Projects</li>
          <li>CV</li>
          <li  style={{float:'right'}}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
