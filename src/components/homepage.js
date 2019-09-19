import React, { useState, useEffect } from 'react';
import Welcome from './welcome';

function Homepage(props) {
  const [showWelcome, setShowWelcome] = useState(null)

  useEffect(() => {
    setShowWelcome(true)
  }, [setShowWelcome])

  return (
    showWelcome ? <Welcome /> : showWelcome
  );
}

export default Homepage
