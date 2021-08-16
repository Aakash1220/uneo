import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 0.8rem;
  height: 1.5rem;
  position: fixed;
  top: 3.5rem;
  right: 60px;
  z-index: 16;
  display: flex;
  justify-content: space-around;
    flex-flow: column nowrap;
    cursor:pointer;
 
  div {
    width: 20px;
   
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
   
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Hamburger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Hamburger