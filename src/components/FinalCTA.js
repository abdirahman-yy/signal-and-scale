import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #0a0a0a;
  color: white;
  padding: 4rem 0;
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  background: white;
  color: #0a0a0a;
  border: 1px solid white;
  transition: all 0.2s ease;
  
  &:hover {
    background: transparent;
    color: white;
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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