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
  font-size: 3.2rem;
  color: #0a0a0a;
  margin: 0;
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtext = styled.p`
  font-size: 1.15rem;
  color: #4a4a4a;
  margin: 0;
  line-height: 1.6;
  letter-spacing: 0.01em;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const QuickFacts = styled(motion.div)`
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #4a4a4a;
  line-height: 1.6;
  
  .title {
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }
  
  .note {
    font-size: 0.75rem;
    color: #707070;
    margin-top: 0.5rem;
    font-style: italic;
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
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: transparent;
  color: #0a0a0a;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const ProofBar = styled(motion.div)`
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  padding: 1rem 2rem;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: #707070;
  text-align: center;
  letter-spacing: 0.02em;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const SplashImage = styled.div`
  width: 100%;
  height: 450px;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, ${props => props.isHovered ? '0.2' : '0.3'}) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, ${props => props.isHovered ? '0.1' : '0.2'}) 100%
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
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const StatsBar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, ${props => props.isHovered ? '0.9' : '0.8'});
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  transition: all 0.4s ease;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  color: white;
  
  .value {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
    letter-spacing: -0.01em;
  }
  
  .label {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  @media (max-width: 768px) {
    .value {
      font-size: 1rem;
    }
    .label {
      font-size: 0.6rem;
    }
  }
`;

const ImageOverlayContent = styled.div`
  text-align: center;
  z-index: 2;
  transition: all 0.4s ease;
  transform: ${props => props.isHovered ? 'translateY(-5px)' : 'translateY(0)'};
`;

const ContentSubtext = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 350px;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const MethodBanner = styled(motion.div)`
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  padding: 1.5rem 2rem;
  margin-top: 2rem;
  
  .title {
    font-size: 1rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 1rem;
  }
  
  .points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #4a4a4a;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    .points {
      grid-template-columns: 1fr;
    }
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, ${props => props.isHovered ? '0.9' : '0.8'});
  padding: 1.5rem 2rem;
  transition: all 0.4s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const OverlayText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  
  strong {
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [isHovered, setIsHovered] = useState(false);

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
                Lower EdTech Customer Acquisition Cost (CAC) with auditable UGC—validated in a 14-day Fair Test.
              </HeroTitle>
              <HeroSubtext>
                We ship disciplined, Spark-ready UGC and enforce parity (same budgets, placements, schedule, geo, attribution). We kill weak variants early and fund winners $300–$500 per variant to confirm lift. If we don't beat your control under parity, we part friends—no retainer obligation.
              </HeroSubtext>
              <CTAButtons>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <PrimaryCTA 
                    href="https://calendly.com/signalandscale-sales/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start a 14-day Fair Test
                  </PrimaryCTA>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <SecondaryCTA 
                    href="#scorecard" 
                  >
                    Preview a sample Scorecard
                  </SecondaryCTA>
                </motion.div>
              </CTAButtons>
              
              <QuickFacts
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="title">Quick facts</div>
                <strong>Timeline:</strong> 14 days<br/>
                <strong>Throughput:</strong> 7–10 UGC videos (4–6 variants/day)<br/>
                <strong>Ops discipline:</strong> 2 ops checks/day & nightly upload (7:00 PM CT)<br/>
                <strong>Win Gate:</strong> +30% CTR (72h hold) or −20% CAC vs control (parity held)<br/>
                <strong>Winner funding:</strong> $300–$500 per variant (to de-noise results)<br/>
                <div className="note">CTR = Click-Through Rate; CAC = Customer Acquisition Cost.</div>
              </QuickFacts>
            </TextContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SplashImage
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ImageOverlayContent isHovered={isHovered}>
                <ContentSubtext isHovered={isHovered}>
                  Auditable results under strict parity conditions
                </ContentSubtext>
              </ImageOverlayContent>
              
              <BottomOverlay isHovered={isHovered}>
                <OverlayText>
                  <strong>Method banner</strong><br />
                  Parity enforced: same budgets, placements, schedule, geo, attribution • Kill/Promote rules: kill &lt;0.5× CTR @ $150; promote &gt;1.3× CTR • 72h hold: confirm +30% CTR isn't a one-hour spike • Winner funding: $300–$500 per promising variant to validate lift • Win Packet: baseline, parity log, screenshots, Spark rights proof
                </OverlayText>
              </BottomOverlay>
            </SplashImage>
          </motion.div>
        </HeroContent>

        <ProofBar
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Parity enforced • Kill/Promote rules • 72h hold • Win Packet screenshots • Spark/allowlisting hygiene
        </ProofBar>
      </Container>
    </Section>
  );
};

export default Hero; 