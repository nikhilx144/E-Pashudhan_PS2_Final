import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Foot = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #222;
color: #fff;
padding: 1rem;
@media (max-width: 600px) {
  flex-wrap: wrap;
}
`;

const Alink = styled.a`
color: #fff;
text-decoration: none;
margin-left: 1rem;

@media (max-width: 600px) {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
`;

const Par = styled.p`
@media (max-width: 600px) {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
`;

const SocialLinks = styled.div`
margin-left: 1rem;

@media (max-width: 600px) {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
`;

const Links = styled.div`
margin-left: 1rem;

@media (max-width: 600px) {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
`;

const Footer = () => {
  return (
    <Foot>
      <Par>Copyright © {new Date().getFullYear()} E-Pashudhan</Par>
      <SocialLinks>
        <Alink href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#fff" />
        </Alink>
        <Alink href="https://www.youtube.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} color="#fff" />
        </Alink>
        <Alink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} color="#fff" />
        </Alink>
      </SocialLinks>
      <Links>
        <Alink href="/about">Terms and Policies</Alink>
        <Alink href="/contact">Support</Alink>
      </Links>
    </Foot>
  );
}

export default Footer