import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

function Header() {
  const [open, setopen] = useState(false);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "rgb(20, 126, 251)", scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "rgb(227, 230, 243)", scale: 1 });
  };
  const navright = useRef();
  const navbar = useRef();
  useLayoutEffect(() => {
    gsap.from(navright.current, {
      // opacity: 0,
      // y:20,
      // duration:1
    });
    // gsap.to(navright.current, {
    //   opacity: 1,
    gsap.from(navbar.current,{
      opacity:0.9,
      y:20,
      duration:1
    // });
  }, []);
  })

  const toggleMenu = () => {
    setopen(!open);
  };

  return (
    <Navbar ref={navbar} className="Navbar">
      <Navleft
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="navleft"
      >
        Projezard
      </Navleft>
      <BurgerMenu onClick={toggleMenu} open={open}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <Navright ref={navright} className="navright" open={open}>
        <li className="links">
          <a className="atag" href="#home">
            Home
          </a>
        </li>
        <li className="links">
          <a className="atag" href="#about">
            About
          </a>
        </li>
        <li className="links">
          <a className="atag" href="#projects">
            Projects
          </a>
        </li>
        <li className="links">
          <a className="atag" href="#contact">
            Contact
          </a>
        </li>
      </Navright>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  position: fixed;
  z-index: 20;
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
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const Navright = styled.div`
  ${'' /* opacity: 0; */}
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
    display: ${({ open }) => (open ? "flex" : "none")};
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
