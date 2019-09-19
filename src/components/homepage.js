import React, { useState, useEffect } from 'react';
import Welcome from './welcome';

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
    <div>
      {showWelcome ? <Welcome /> : null}
    </div>
  );
}

export default Homepage
