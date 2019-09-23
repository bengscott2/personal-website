import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MuiToolbar.css'

function Navbar() {

  return (
    <div>
      <h1 className='name-bar'>BENJAMIN SCOTT</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>CV</li>
        <li  style={{float:'right'}}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
