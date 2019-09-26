import React, { useState, useEffect } from 'react';
import Welcome from './welcome';
import Navbar from './navbar'

function Homepage(props) {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    handleFade()
  })

  function handleFade () {
    setTimeout(() => {
      setShowWelcome(false)
    }, 1600)
  }

  return (
    <div>
      {showWelcome ? <Welcome /> : <Navbar />}
    </div>
  );
}

export default Homepage
