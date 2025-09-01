import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #0a0a0a;
  color: white;
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.2rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2.5rem;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: white;
  color: #0a0a0a;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
  }
`;

const FinalCTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Section ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <CTATitle>Ready to run a Fair Test?</CTATitle>
          <CTADescription>
            Limited pilot slots each month.
          </CTADescription>
          <CTAButton 
            href="https://calendly.com/signalandscale-sales/30min" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a consultation
          </CTAButton>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FinalCTA; 