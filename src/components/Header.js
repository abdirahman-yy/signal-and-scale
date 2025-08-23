import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderSection = styled.header`
  background: #0a0a0a;
  color: white;
  padding: 3rem 0;
  border-bottom: 1px solid #1a1a1a;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  color: white;
  margin-bottom: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #a0a0a0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #707070;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Logo>Signal & Scale</Logo>
          <Tagline>User-generated content for EdTech companies</Tagline>
          <Subtitle>Reduce acquisition costs through authentic video content</Subtitle>
        </motion.div>
      </Container>
    </HeaderSection>
  );
};

export default Header; 