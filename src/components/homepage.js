import React, { useState, useEffect } from 'react';
import Welcome from './welcome';
import Navbar from './navbar'
import Container from '@material-ui/core/Container';
import './MuiContainer.css'

function Homepage(props) {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    handleFade()
  })

  function handleFade () {
    setTimeout(() => {
      setShowWelcome(false)
    }, 1800)
  }

  return (
    <Container>
      <div>
        {showWelcome ? <Welcome /> : <Navbar />}
      </div>
    </Container>
  );
}

export default Homepage
