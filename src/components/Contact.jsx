import React from 'react'
import styled from 'styled-components'
function Contact() {
  return (
    <Section id="contact">
    <Container>
    <Content>
      <ContactTitle>
      <p>contact</p>
      <h3>Feel Free to Contact</h3>
      </ContactTitle>
      <ContactIcon>
        <ContactIconBox>
          <img src="/images/location.png" alt="/"/>
          <ContactInfo>
            <h3>Location</h3>
            <p>Banglore,India</p>
          </ContactInfo>
        </ContactIconBox>
        <ContactIconBox>
          <img src="/images/mail.png" alt="/"/>
          <ContactInfo>
            <h3>Mail</h3>
            <a  target="_blank" href="mailto:itsrealrafi@gmail.com">itsrealrafi@gmail.com</a>
          </ContactInfo>
        </ContactIconBox>
      </ContactIcon>
    </Content>
    </Container>
    </Section>
  )
}

export default Contact

const Section=styled.div`
color:white;
padding:110px 0;
`
const Container=styled.div`
max-width:1070px;
padding:0 40px;
`
const Content=styled.div`
display:flex;
flex-direction:column;
`
const ContactTitle=styled.div`
p{
  color:rgb(20,126,251);
  font:size:17px;
  font-weight:700;
  margin-block-end:10px;
  margin-bottom:10px;
  text-transform:uppercase;
}
h3{
  color:rgb(45,46,50);
  font-size:25px;
  font-weight:700;
}
`
const ContactIcon=styled.div`
display:flex;
column-gap:80px;
flex-wrap:wrap;
margin-top:60px;
row-gap:80px;
`
const ContactIconBox=styled.div`
display:flex;
align-items:center;
column-gap:15px;
row-gap:15px;
img{
  width:40px;
  height:40px;
  border-radius:50%;
  box-shadow:rgba(255,255,255,0.5) 0px 0px 10px 0px;
  padding:5px;
}
`
const ContactInfo=styled.div`
display:flex;
flex-direction:column;
column-gap:5px;
row-gap:5px;
h3{
  color:rgb(45,46,50);
  fonst-size:17px;
  font-weight:700px;
}
p{
  color:rgb(118,118,118);
  cursor:pointer;
  fonst-size:17px;
  text-decoration-color:rgb(118,118,118);
  text-decoration-line:none;
  text-decoration-style:solid;
  text-decoration-thickness:auto;
}p:hover{
  color:rgb(20,126,251);
}
a{
  color:rgb(118,118,118);
  cursor:pointer;
  fonst-size:17px;
  ${'' /* text-decoration-color:rgb(118,118,118); */}
  text-decoration:none;
  text-decoration-style:solid;
  text-decoration-thickness:auto;
}
`