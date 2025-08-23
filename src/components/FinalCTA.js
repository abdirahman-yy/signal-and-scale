import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #0a0a0a;
  color: white;
  padding: 6rem 0;
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.2rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  max-width: 600px;
`;

const ConversionGoal = styled.p`
  font-size: 0.95rem;
  color: #c0c0c0;
  margin-bottom: 3rem;
  font-style: italic;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: white;
  color: #0a0a0a;
  border: 1px solid white;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    background: transparent;
    color: white;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
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
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <CTATitle>Ready to reduce your acquisition costs?</CTATitle>
          <CTADescription>
            Secure a spot this week—limited availability. 
            Discuss how authentic video content can transform your student acquisition strategy.
          </CTADescription>
          <ConversionGoal>
            Goal: 5% conversion rate from video views to pilot sign-ups
          </ConversionGoal>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <CTAButton 
              href="https://calendly.com/signalandscale-sales/30min" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule consultation—secure a spot this week
            </CTAButton>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FinalCTA; 