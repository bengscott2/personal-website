import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './navbar.css'

function Navbar() {

  return (
    <React.Fragment>
      <Container>
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
        </Toolbar>
      </Container>
    </React.Fragment>
  )
}

export default Navbar
