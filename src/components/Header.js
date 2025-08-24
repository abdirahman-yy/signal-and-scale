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
`;

const BrandName = styled(motion.h1)`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTagline = styled(motion.p)`
  font-size: 0.95rem;
  color: #8a8a8a;
  font-weight: 300;
  letter-spacing: 0.02em;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <BrandName
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Signal & Scale
        </BrandName>
        <SubTagline
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          UGC for EdTech
        </SubTagline>
      </Container>
    </HeaderSection>
  );
};

export default Header; 