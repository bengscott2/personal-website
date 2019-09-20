import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Navbar() {

  return (
    <React.Fragment>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className='name-bar'
        >
          Benjamin Scott
        </Typography>
        <Toolbar className='navbar'>
          <Button size='small'>
            About Me
          </Button>
          <Button
            size='small'
            align='center'
            >
            Projects
          </Button>
          <Button size='small'>
            Fun Things
          </Button>
        </Toolbar>
    </React.Fragment>
  )
}

export default Navbar
