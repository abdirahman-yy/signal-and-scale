import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
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

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  max-width: 500px;
`;

const Eyebrow = styled.div`
  font-size: 0.85rem;
  color: #707070;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #0a0a0a;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubhead = styled.p`
  font-size: 1.15rem;
  color: #4a4a4a;
  margin-bottom: 3rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

const PrimaryCTA = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: #0a0a0a;
  color: white;
  border: 1px solid #0a0a0a;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    background: transparent;
    color: #0a0a0a;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const SecondaryCTA = styled.a`
  color: #0a0a0a;
  text-decoration: underline;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4a4a4a;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 450px;
  background: url('${process.env.PUBLIC_URL}/Image.png');
  background-size: cover;
  background-position: center;
  border: 1px solid #e0e0e0;
  transition: all 0.4s ease;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const TrustChips = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const TrustChip = styled.div`
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: #4a4a4a;
  border-radius: 2px;
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSecondaryCTA = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section ref={ref}>
      <Container>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TextContent>
              <Eyebrow>UGC for EdTech</Eyebrow>
              
              <HeroTitle>Cut EdTech CAC with authentic student videos</HeroTitle>
              
              <HeroSubhead>
                Start a <strong>paid pilot</strong> to test student-made creative fast. Choose a <strong>7-day production sprint</strong> (ad-ready assets) or a <strong>14-day pilot</strong> (content + early learnings). We handle creators, Spark/allowlisting, and clean QA.
              </HeroSubhead>
              
              <CTAContainer>
                <PrimaryCTA 
                  href="https://calendly.com/signalandscale-sales/30min?utm_source=site&utm_medium=cta&utm_campaign=paid_pilot" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a paid pilot →
                </PrimaryCTA>
                
                <SecondaryCTA onClick={handleSecondaryCTA}>
                  See how it works
                </SecondaryCTA>
              </CTAContainer>
              
              <TrustChips>
                <TrustChip>Pilot launches fast</TrustChip>
                <TrustChip>Full usage rights</TrustChip>
                <TrustChip>Clean QA + UTMs</TrustChip>
              </TrustChips>
            </TextContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ImageContainer>
              <HeroImage alt="Student working on a laptop in a bright study space" />
            </ImageContainer>
          </motion.div>
        </HeroContent>
      </Container>
    </Section>
  );
};

export default Hero; 