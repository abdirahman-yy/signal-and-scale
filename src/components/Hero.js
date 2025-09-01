import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
  padding: 4rem 0;
  
  @media (max-width: 480px) {
    padding: 3rem 0;
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
  align-items: start;
  
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
  font-size: 3.5rem;
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

const HeroDescription = styled.p`
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

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  width: 220px;
  height: 50px;
  box-sizing: border-box;
  
  &:hover {
    background: transparent;
    color: #0a0a0a;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  color: #0a0a0a;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  width: 220px;
  height: 50px;
  box-sizing: border-box;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

const ImageContent = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
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
  background: rgba(0, 0, 0, ${props => props.isHovered ? '0.95' : '0.9'});
  color: white;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  transition: all 0.3s ease;
  transform: ${props => props.isHovered ? 'translateY(-2px)' : 'translateY(0)'};
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.7rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
  }
  
  .label {
    font-size: 0.7rem;
    color: #a0a0a0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  @media (max-width: 768px) {
    .number {
      font-size: 0.9rem;
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

const BottomOverlay = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, ${props => props.isHovered ? '0.98' : '0.95'});
  padding: 1.2rem;
  border: 1px solid #e0e0e0;
  backdrop-filter: blur(10px);
  z-index: 4;
  transition: all 0.3s ease;
  transform: ${props => props.isHovered ? 'translateY(-2px)' : 'translateY(0)'};
`;

const OverlayText = styled.div`
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.5;
  
  strong {
    color: #0a0a0a;
    font-weight: 600;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 3rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid #e0e0e0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #707070;
  
  &:hover {
    color: #0a0a0a;
  }
`;

const ScorecardTitle = styled.h3`
  font-size: 1.8rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
`;

const ScorecardSubtitle = styled.p`
  color: #707070;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const TabsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  /* Center the last item (7th card) */
  & > *:nth-child(7) {
    grid-column: 2 / 3;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    & > *:nth-child(7) {
      grid-column: auto;
    }
  }
`;

const TabCard = styled.div`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  
  .tab-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }
  
  .tab-description {
    font-size: 0.8rem;
    color: #707070;
    line-height: 1.4;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [isHovered, setIsHovered] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  const scorecardTabs = [
    { name: "Baseline", description: "Control CTR, CPC, CAC, daily budget, placements, schedule, geo, attribution" },
    { name: "Parity Log", description: "Day-by-day checks (budget delta %, placements/schedule/geo/attribution match)" },
    { name: "Variant Matrix", description: "Per variant: spend, impressions, clicks, conversions → CTR, CPC, CAC vs control" },
    { name: "Winner Spend", description: "Totals and whether $300–$500 was met (in-range vs over)" },
    { name: "72h Hold", description: "Hours accumulated since a variant started winning" },
    { name: "Readout", description: "Counts, gate hit?, recommended next step; reference the Win Packet" },
    { name: "Spark Log", description: "Handles, asset IDs, rights windows, extensions" }
  ];

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
              <HeroDescription>
                We ship disciplined, Spark‑ready UGC and enforce parity (same budgets, placements, schedule). If we don't beat your current set, we part friends.
              </HeroDescription>
              <CTAButtons>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <CTAButton 
                    href="https://calendly.com/signalandscale-sales/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start a Fair Test
                  </CTAButton>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <SecondaryButton onClick={() => setShowScorecard(true)}>
                    Preview a sample Scorecard
                  </SecondaryButton>
                </motion.div>
              </CTAButtons>
            </TextContent>
          </motion.div>

          <ImageContent
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SplashImage
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <StatsBar
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                isHovered={isHovered}
              >
                <StatItem>
                  <div className="number">20-30%</div>
                  <div className="label">CAC Reduction</div>
                </StatItem>
                <StatItem>
                  <div className="number">14 Days</div>
                  <div className="label">Timeline</div>
                </StatItem>
                <StatItem>
                  <div className="number">7-10</div>
                  <div className="label">UGC Videos</div>
                </StatItem>
              </StatsBar>
              
              <ImageOverlayContent isHovered={isHovered}>
                <ContentSubtext isHovered={isHovered}>
                  Auditable results under strict parity
                </ContentSubtext>
              </ImageOverlayContent>
              
              <BottomOverlay isHovered={isHovered}>
                <OverlayText>
                  <strong>Fair Test methodology</strong><br />
                  Same budgets, placements, schedule. Kill weak variants early, fund winners $300-$500. If we don't beat control, we part friends.
                </OverlayText>
              </BottomOverlay>
            </SplashImage>
          </ImageContent>
        </HeroContent>
      </Container>

      <AnimatePresence>
        {showScorecard && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowScorecard(false)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowScorecard(false)}>×</CloseButton>
              <ScorecardTitle>Pilot Scorecard Preview</ScorecardTitle>
              <ScorecardSubtitle>
                Illustrative. Actual access is view-only during your pilot.
              </ScorecardSubtitle>
              
              <TabsGrid>
                {scorecardTabs.map((tab, index) => (
                  <TabCard key={index}>
                    <div className="tab-name">{tab.name}</div>
                    <div className="tab-description">{tab.description}</div>
                  </TabCard>
                ))}
              </TabsGrid>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Hero; 