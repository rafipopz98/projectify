import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [open, setopen] = useState(false);

  const toggleMenu = () => {
    setopen(!open);
  };

  return (
    <Navbar>
      <Navleft>
        Projectify
      </Navleft>
      <BurgerMenu onClick={toggleMenu} open={open}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <Navright open={open}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </Navright>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  position: fixed;
  height: 80px;
  background: rgb(0, 0, 0);
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 786px) {
    justify-content: center;
  }
`;

const Navleft = styled.nav`
  display: flex;
  color: rgb(227, 230, 243);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 0 50px;
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 22px;
    z-index: 10;

    div {
      width: 30px;
      height: 3px;
      background-color: white;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

const Navright = styled.div`
  display: flex;
  align-items: flex-end;

  li {
    list-style: none;
    padding: 0 12px;
    a {
      color: rgb(227, 230, 243);
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      &:hover {
        color: rgb(20, 126, 251);
      }
    }
  }

  @media (max-width: 786px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: rgb(0, 0, 0);
    padding: 20px;

    li {
      margin-bottom: 10px;
    }
  }
`;
