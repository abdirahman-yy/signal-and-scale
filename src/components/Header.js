import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderSection = styled.header`
  background: #0a0a0a;
  color: white;
  padding: 3rem 0;
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BrandName = styled(motion.h1)`
  font-size: 2.5rem;
  color: white;
  margin: 0;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <LogoContainer>
          <LogoImage src={`${process.env.PUBLIC_URL}/Black and White Star Symbol.png`} alt="Signal & Scale Studio Logo" />
        </LogoContainer>
        <BrandName
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Signal & Scale
        </BrandName>
      </Container>
    </HeaderSection>
  );
};

export default Header; 