import React from 'react'
import styled from 'styled-components'

function Homes() {
    return (
        <Container id="home">
            <Description>
                <Textfield>
                    <h1>
                        Projectify
                    </h1>
                    <p>
                        Worried about Projects,Worry Not!Projectify will handle all your projects and get your projects with 2 clicks!!!
                    </p>
                </Textfield>
                <Pic>
                </Pic>
            </Description>
        </Container>
    )
}

export default Homes

const Container = styled.div`
margin:0 18%;
`

const Description = styled.div`
height:80vh;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:768px){
    flex-direction:column;
    padding-top:70px;
    height:100vh;
}
`
const Textfield = styled.div`
max-width:450px;
padding:20px;
h1{
  color:rgb(45,46,50);
  line-height:66px;
  font-size:55px;
  font-weight:700;
  margin-top:20px;
  margin:bottom:20px;
  margin-block:20px 20px;    
}
p{
    color:rgb(118,118,118);
    font-family: Mulish,sans-serif;
    font-size:18px;
    font-weight:500;
    line-height:29px;
}
`

const Pic = styled.div`
width:350px;
height:350px;
background-image: url('/images/luffy.jpg');
background-position:center bottom;
background-size:cover;
border: 3px solid rgba(255,255,255,0.5);
border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
transition: all 1s ease-in-out;
animation: moving 8s ease-in-out infinite;
@keyframes moving{
   0 % {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}

50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
}
`