import React from 'react'
import { func, string } from 'prop-types';
import { FiMoon, FiSun } from 'react-icons/fi';

import styled from 'styled-components';
const ThemeToggler = ({theme,  toggleTheme }) => {  
  const StyledIcon = styled.div`
  .styledLogo {
    animation-name: styledLogo-animation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    display: inline-block;
  }
  
  @keyframes styledLogo-animation {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1.1);
    }
  }
  
  `;
  return (
    <StyledIcon>  
        {theme === 'light' ? 
          <FiSun className='styledLogo' style={{color: '#FF4500', cursor: 'pointer'}} onClick={toggleTheme}/>:
          <FiMoon className='styledLogo' style={{color: '#E09E50', cursor: 'pointer'}} onClick={toggleTheme}/>
        }
    </StyledIcon>    
    );
};
ThemeToggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default ThemeToggler;