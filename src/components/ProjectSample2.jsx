

import React from 'react';
import styled from 'styled-components';

function Uwu() {
  return (
    <Container>
      <Description>
        <Textfield>
          <First>Lorem ipsum dolor sit</First>
          <Second>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam mollitia? Incidunt officia ex enim
            dolore voluptates. Alias impedit illo minus dolorum quae?
          </Second>
          <Lol>
            <a href="/">Code</a>
            <a href="/">Blog</a>
          </Lol>
        </Textfield>
        <Image />
      </Description>
    </Container>
  );
}

export default Uwu;

const Container = styled.div`
border-bottom:2px solid white;
padding:2rem;
  margin: 0 18%;

  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

const Description = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:rgba(255, 255, 255, 0.5) 0px 0px 10px 0px;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 100px;
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: 350px;
  width: 410px;
  background-image: url('/images/tesla-clone.png');
  object-fit: cover;
  object-position: top center;
  background-size: cover;
  border-radius: 17px;
  transition: all 8s ease-in-out;

  &:hover {
    cursor: pointer;
    background-position: bottom center;
  }

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
  text-align: center;
  text-transform: uppercase;
  color: rgb(45, 46, 50);
  line-height: 66px;
  font-size: 17px;
  font-weight: 700;
  margin-block-end: 20px;
  margin: bottom: 20px;
  margin-block: 20px 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Second = styled.div`
  color: rgb(118, 118, 118);
  font-family: Mulish, sans-serif;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-block-end: 10px;
  margin-bottom: 10px;
  line-height: 20px;
`;

const Lol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgb(118, 118, 118);
    font-weight: bold;
    column-gap: 10px;
    font-family: Poppins, sans-serif;
    justify-content: center;
    margin-top: 10px;
    row-gap: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px 0px;
    margin: 20px;
    padding: 10px;
  }
};

  ${'' /* @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;

    a {
      margin: 10px;
    }
  } */}
}
`