import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
  padding: 5rem 0;
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #0a0a0a;
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtext = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  margin: 0;
  line-height: 1.6;
  max-width: 480px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  background: #0a0a0a;
  color: white;
  border: 1px solid #0a0a0a;
  transition: all 0.2s ease;
  
  &:hover {
    background: transparent;
    color: #0a0a0a;
  }
`;

const SecondaryCTA = styled.a`
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  background: transparent;
  color: #0a0a0a;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0a0a0a;
  }
`;

const QuickFacts = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #4a4a4a;
  line-height: 1.6;
  
  .title {
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.8rem;
  }
  
  .fact {
    margin-bottom: 0.4rem;
  }
  
  .legend {
    font-size: 0.75rem;
    color: #707070;
    margin-top: 0.8rem;
    font-style: italic;
  }
`;

const MediaCard = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 50%
  ),
  url('${process.env.PUBLIC_URL}/Image.png');
  background-size: cover;
  background-position: center;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  color: white;
  
  .title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .description {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Section ref={ref}>
      <Container>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TextContent>
              <HeroTitle>
                Lower EdTech CAC with auditable UGC — proven in a 14‑day fair test.
              </HeroTitle>
              <HeroSubtext>
                We ship disciplined, Spark‑ready UGC and enforce parity (same budgets, placements, schedule). If we don't beat your current set, we part friends.
              </HeroSubtext>
              <CTAButtons>
                <PrimaryCTA 
                  href="https://calendly.com/signalandscale-sales/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a Fair Test
                </PrimaryCTA>
                <SecondaryCTA href="#scorecard">
                  Preview a sample Scorecard
                </SecondaryCTA>
              </CTAButtons>
              
              <QuickFacts
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="title">Quick facts</div>
                <div className="fact"><strong>Timeline:</strong> 14 days</div>
                <div className="fact"><strong>Throughput:</strong> 7–10 UGC videos (4–6 variants/day)</div>
                <div className="fact"><strong>Ops discipline:</strong> 2 ops checks/day & nightly upload (7:00 PM CT)</div>
                <div className="fact"><strong>Win Gate:</strong> +30% CTR (72h hold) or −20% CAC vs control (parity held)</div>
                <div className="fact"><strong>Winner funding:</strong> $300–$500 per variant (to de-noise results)</div>
                <div className="legend">CTR = Click-Through Rate; CAC = Customer Acquisition Cost</div>
              </QuickFacts>
            </TextContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MediaCard>
              <MediaOverlay>
                <div className="title">Auditable results under strict parity</div>
                <div className="description">
                  Same budgets, placements, schedule. Kill weak variants early, fund winners $300-$500. If we don't beat control, we part friends.
                </div>
              </MediaOverlay>
            </MediaCard>
          </motion.div>
        </HeroContent>
      </Container>
    </Section>
  );
};

export default Hero; 