// import React from 'react'
// import styled from 'styled-components'
// function Footer() {
//     return (
//         <Footers>
//             <Container>
//                 <Footerc>
//                     <h3>
//                         Copyright &#169; 2023 . All rights are reserved
//                     </h3>
//                     <FootercSocial>
//                     <a aria-label='linkedin'target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/rafipopz/">
//                         <img src="/images/linkedin.png" alt="/" />
//                     </a>
//                     <a aria-label='github'target="_blank" rel='noreferrer' href="https://github.com/rafipopz">
//                         <img src="/images/github.png" alt="/" />
//                     </a>
//                     </FootercSocial>
//                 </Footerc>
//             </Container>
//         </Footers>
//     )
// }

// export default Footer

// const Footers = styled.div`
// background-color:rgb(45,46,50);
// padding:50px;
// `
// const Container = styled.div`
// background-color:rgb(45,46,50);
// max-width:1070px;
// padding:0 40px;
// `
// const Footerc = styled.div`
// background-color:rgb(45,46,50);
// display:flex;
// justify-content:space-between;
// h3{
//     background-color:rgb(45,46,50);
//     color:white;
//     font-size:17px;
//     font-weight:700;
// }
// @media(max-width:768px){
//     flex-wrap:wrap;
//     flex-direction:column;
//     text-align:center;
// }
// `
// const FootercSocial=styled.div`
// background-color:rgb(45,46,50);
// display:flex;
// column-gap:20px;
// row-rap:20px;
// a{
//     background-color:rgb(45,46,50);
//     cursor:pointer;
//     color:rgb(85,26,139);
//     text-decoration-color:rgb(0,0,238);
//     img{
//         display:flex;
//   width:40px;
//   height:40px;
//   border-radius:50%;
//   @media(max-width:768px)a img {
//     background:red;
//     justify-content:center;
//     align-items:center;
//     text-align:center;
// }
//     }
// }

// `
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Footers>
      <Container>
        <Footerc>
          <h3>© 2023. All rights are reserved</h3>
          <FootercSocial>
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rafipopz/"
            >
              <img src="/images/linkedin.png" alt="/" />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rafipopz"
            >
              <img src="/images/github.png" alt="/" />
            </a>
          </FootercSocial>
        </Footerc>
      </Container>
    </Footers>
  );
}

export default Footer;

const Footers = styled.div`
  background-color: rgb(45, 46, 50);
  padding: 50px;
`;

const Container = styled.div`
  background-color: rgb(45, 46, 50);
  max-width: 1070px;
  padding: 0 40px;
  margin: 0 auto;
`;

const Footerc = styled.div`
  background-color: rgb(45, 46, 50);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    background-color: rgb(45, 46, 50);
    color: white;
    font-size: 17px;
    font-weight: 700;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
  }
`;

const FootercSocial = styled.div`
  background-color: rgb(45, 46, 50);
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    background-color: rgb(45, 46, 50);
    cursor: pointer;
    color: rgb(85, 26, 139);
    text-decoration-color: rgb(0, 0, 238);

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
