import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderSection = styled.header`
  padding: 2.5rem 0 0;

  @media (max-width: 640px) {
    padding: 2rem 0 0;
  }
`;

const LogoLink = styled(Link)`
  display: inline-block;
  line-height: 0;

  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  display: block;
  height: 44px;
  width: auto;

  @media (max-width: 640px) {
    height: 36px;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <LogoLink to="/" aria-label="Signal & Scale — home">
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/brand/signal-scale-email.png`}
          alt="Signal & Scale"
        />
      </LogoLink>
    </HeaderSection>
  );
};

export default Header;
