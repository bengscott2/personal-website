import React from 'react';
import './welcome.css';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} `;

function Welcome() {

  return (
    <Bounce><div className='welcome-header'>
      Welcome.
    </div></Bounce>
  );
}

export default Welcome
