// import React from 'react'
// import styled from 'styled-components'

// function About() {
//   return (
//     <Container>
//       <Description>
//         <Image>
//         </Image>
//         <Textfield>
//           <First>
//             About Projectify
//           </First>
//           <Second>
//             Create your Projects <span>without hassles</span>
//           </Second>
//           <p>Projectify helps you to create projects within 2 clicks!!<br />Step-1:Choose Any Project(scroll down to explore more projects) <br />Step-2:Copy the code on your favorite compiler(ex: vs studio atom etc...) <br /> violla!!! You've  your own Project</p>
//         </Textfield>
//       </Description>
//     </Container>
//   )
// }

// export default About

// const Container = styled.div`

// `
// const Description = styled.div`
// ${'' /* height:100vh; */}
// padding-top:250px;
// display:flex;
// ${'' /* flex-wrap:wrap; */}
// justify-content:center;
// align-items:center;
// margin:0 18%;
// @media (max-width: 768px){
//   padding-top:120px;
//   padding-bottom:100px;
//   flex-direction:column;
// }
// `
// const Image = styled.div`
// height: 350px;
// width: 410px;
// background-image: url('/images/luffy.jpg');
// background-position:center bottom;
// background-size:cover;
// border-radius: 17px;
// @media (max-width: 460px){
//   height:350px;
//   width:310px;
// }  
// `
// const Textfield = styled.div`
// max-width:500px;
// padding:20px;
// p{
//     color:rgb(118,118,118);
//     font-family: Mulish,sans-serif;
//     font-size:17px;
//     font-weight:500;
//     line-height:26px;
// }
// `
// const First = styled.div`
//     color: rgb(20,126,251);
//     font-size: 17px;
//     font-weight: 700;
//     margin-block-end:10px;
//     margin-bottom:10px;
//     text-transform: uppercase;
// `
// const Second = styled.div`
//   color:rgb(45,46,50);
//   line-height:35px;
//   font-size:25px;
//   font-weight:700;
//   margin-block-end: 20px;
//   margin:bottom:20px;
//   span{
//     color:green;
//   }
// `

import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Container>
      <Description>
        <Image></Image>
        <Textfield>
          <First>About Projectify</First>
          <Second>
            Create your Projects <span>without hassles</span>
          </Second>
          <p>
            Projectify helps you to create projects within 2 clicks!!<br />
            Step-1: Choose Any Project (scroll down to explore more projects) <br />
            Step-2: Copy the code on your favorite compiler (ex: VS Studio, Atom, etc...) <br />
            Voila!!! You have your own Project
          </p>
        </Textfield>
      </Description>
    </Container>
  );
}

export default About;

const Container = styled.div``;

const Description = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 18%;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 100px;
    flex-direction: column;
    margin: 0 10px; /* Adjust the margin as needed */
  }
`;

const Image = styled.div`
  height: 350px;
  width: 410px;
  background-image: url('/images/luffy.jpg');
  background-position: center bottom;
  background-size: cover;
  border-radius: 17px;

  @media (max-width: 460px) {
    height: 350px;
    width: 310px;
  }
`;

const Textfield = styled.div`
  max-width: 500px;
  padding: 20px;

  p {
    color: rgb(118, 118, 118);
    font-family: Mulish, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 26px;
  }
`;

const First = styled.div`
  color: rgb(20, 126, 251);
  font-size: 17px;
  font-weight: 700;
  margin-block-end: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Second = styled.div`
  color: rgb(45, 46, 50);
  line-height: 35px;
  font-size: 25px;
  font-weight: 700;
  margin-block-end: 20px;
  margin-bottom: 20px;

  span {
    color: green;
  }
`;
