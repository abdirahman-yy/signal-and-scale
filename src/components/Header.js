import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const HeaderSection = styled.header`
  padding: 2.5rem 0 0;

  @media (max-width: 640px) {
    padding: 2rem 0 0;
  }
`;

const Wordmark = styled(Link)`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -0.01em;
  color: ${theme.text};
  text-decoration: none;
  font-variation-settings: 'opsz' 14;

  &:hover {
    text-decoration: none;
    color: ${theme.accent};
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <Wordmark to="/">Signal &amp; Scale</Wordmark>
    </HeaderSection>
  );
};

export default Header;
