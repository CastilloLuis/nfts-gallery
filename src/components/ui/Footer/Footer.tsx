import React from 'react';
import {
  FooterContainer,
  FooterLinks
} from './Footer.styles';

interface FooterProps {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://twitter.com" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://discord.com" target="_blank">
          <i className="fab fa-discord"></i>
        </a>
      </FooterLinks>
    </FooterContainer>
  )
}

export default Footer;
