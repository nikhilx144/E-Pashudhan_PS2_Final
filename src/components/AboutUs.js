import React from 'react';
import styled from 'styled-components';
import logo from '../assets/avatar.png'

const Div = styled.div`
padding: 2rem;
`;
const Div2 = styled.div`
background:#2196f3;
color:bisque;
display:flex;
justify-content: space-evenly;
align-items: center;
padding: 2rem;
margin: 20px 0;
border-radius: 20px;
@media (max-width: 600px) {
  flex-wrap: wrap;
  flex-direction: column;
}
`;
const About = styled.div`
background:white;
`;
const Team = styled.div`
padding: 2rem;
`;

const H1 = styled.h1`
padding: 0;
margin-bottom: 40px;
`;
const H3 = styled.h3`
padding: 0;
`;
const H6 = styled.h6`
justify-content:center;
`;
const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 0;
`;

const AboutUs = () => {
  return (
    <About style={{backgroundColor: `bisque`}}>
    <Div>
      <H1>About Us</H1>
      <p>We aim to provide the best quality products with easy access to sellers and plethora of information. We strive to provide a platform for creators to share their content and for users to discover new and interesting videos. Our mission is to give everyone a voice and show them the world.</p>
      <p>We also offer a premium service with additional features such as ad-free viewing, access to exclusive content, and more.</p>
      <p>Thank you for visiting E Pashudhan!</p>
    </Div>
    <Team>
      <H1>OUR TEAM</H1>
            <H3>Web Team</H3>
            <Div2>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Mithravarun</H6>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Nikhil</H6>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Maheedhar</H6>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Ethinic</H6>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Rahul</H6>
            </Div2>
            <H3>App Team</H3>
            <Div2>
            <Avatar src={logo} alt="Avatar"/>
              <H6>Karthik</H6>
              <Avatar src={logo} alt="Avatar"/>
              <H6>Vishnu</H6>
              <Avatar src={logo} alt="Avatar"/>
              <H6>Kausthuba</H6>
              <Avatar src={logo} alt="Avatar"/>
              <H6>Hemanth</H6>
              <Avatar src={logo} alt="Avatar"/>
              <H6>Praneeth</H6>
            </Div2>
      </Team>
    </About>
  );
}

export default AboutUs;
