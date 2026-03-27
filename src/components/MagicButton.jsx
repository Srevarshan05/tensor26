import React from 'react';
import styled from 'styled-components';

const MagicButton = ({ className, href, children, color }) => {
  return (
    <StyledWrapper className={className} color={color}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button>{children || "Register Now"}</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }
  
  button {
   appearance: none;
   background-color: transparent;
   border: 0.125em solid ${props => props.color || '#0053db'};
   border-radius: 0.9375em;
   box-sizing: border-box;
   color: ${props => props.color || '#0053db'};
   cursor: pointer;
   display: inline-block;
   font-family: inherit;
   font-size: 18px;
   font-weight: 800;
   line-height: normal;
   margin: 0;
   min-height: 3.5em;
   min-width: 0;
   outline: none;
   padding: 1em 2.8em;
   text-align: center;
   text-decoration: none;
   transition: all 400ms cubic-bezier(.23, 1, 0.32, 1);
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   will-change: transform;
   text-transform: uppercase;
   letter-spacing: 0.05em;
  }

  button:disabled {
   pointer-events: none;
   opacity: 0.5;
  }

  button:hover {
   color: #fff;
   background-color: ${props => props.color || '#0053db'};
   box-shadow: rgba(0, 83, 219, 0.25) 0 8px 25px;
   transform: translateY(-3px);
  }

  button:active {
   box-shadow: none;
   transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    button {
      font-size: 16px;
      padding: 0.8em 2em;
    }
  }
`;

export default MagicButton;
