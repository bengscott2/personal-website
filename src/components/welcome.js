import React from 'react';
import './welcome.css';
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';
const FadeOut = styled.div`animation: 2s ${keyframes`${fadeOut}`} `;

function Welcome() {

  return (
    <FadeOut>
      <div className='welcome-header'>
        Welcome.
      </div>
    </FadeOut>
  );
}

export default Welcome
