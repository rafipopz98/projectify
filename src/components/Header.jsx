import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Navbar>
            <Navleft>
                Projectify
            </Navleft>
            <Navright>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </Navright>
        </Navbar>
    )
}

export default Header

const Navbar = styled.nav`
position:fixed;
height:80px;
background:rgb(0,0,0);
box-shadow:rgba(255,255,255,0.5) 0px 0px 10px 0px;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:786px){
    justify-content:center;
    }
`
const Navleft = styled.nav`
display:flex;
 color:rgb(227, 230, 243);
cursor:pointer;
font-size:20px;
font-weight:700;
padding: 0 50px;

`
const Navright = styled.div`
display:flex;
align-items:flex-end;
li{
   
    list-style:none;
    padding:0 12px;
    a{
        color:rgb(227, 230, 243);
        text-decoration:none;
        font-size:18px;
        font-weight:600;
        &:hover{
            color: rgb(20,126,251);
        }
    }
}
@media (max-width:768px){
        display:none;
    }
`