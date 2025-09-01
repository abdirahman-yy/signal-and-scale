import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
  padding: 6rem 0 8rem;
  
  @media (max-width: 768px) {
    padding: 4rem 0 6rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
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
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtext = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  margin: 0;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTARow = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: #0a0a0a;
  color: white;
  border: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background: #1a1a1a;
    transform: translateY(-1px);
  }
`;

const SecondaryCTA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  color: #0a0a0a;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    border-color: #0a0a0a;
    background: #fafafa;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MediaCard = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45) 0%,
    transparent 60%
  ),
  url('${process.env.PUBLIC_URL}/Image.png');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MediaOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem;
  color: white;
  border-radius: 0 0 12px 12px;
  
  .title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  
  .description {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
    font-family: 'Inter', sans-serif;
  }
`;

const QuickFacts = styled.div`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  
  .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 1.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  
  .fact-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .fact {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  
  .fact-label {
    font-size: 0.9rem;
    color: #707070;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    min-width: 100px;
  }
  
  .fact-value {
    font-size: 0.9rem;
    color: #0a0a0a;
    font-weight: 500;
    text-align: right;
    font-family: 'Inter', sans-serif;
    flex: 1;
  }
  
  .legend {
    font-size: 0.75rem;
    color: #8a8a8a;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #f0f0f0;
    font-style: italic;
    font-family: 'Inter', sans-serif;
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
  border-radius: 16px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
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
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
`;

const ScorecardSubtitle = styled.p`
  color: #707070;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
`;

const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.div`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  
  .tab-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  
  .tab-description {
    font-size: 0.75rem;
    color: #707070;
    font-family: 'Inter', sans-serif;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
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
        <HeroGrid>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TextContent>
              <HeroTitle>
                Lower EdTech CAC with auditable UGC — proven in a 14‑day fair test.
              </HeroTitle>
              <HeroSubtext>
                We ship disciplined, Spark‑ready UGC and enforce parity (same budgets, placements, schedule). If we don't beat your current set, we part friends.
              </HeroSubtext>
              <CTARow>
                <PrimaryCTA 
                  href="https://calendly.com/signalandscale-sales/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a Fair Test
                </PrimaryCTA>
                <SecondaryCTA onClick={() => setShowScorecard(true)}>
                  Preview a sample Scorecard
                </SecondaryCTA>
              </CTARow>
            </TextContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <MediaContainer>
              <MediaCard>
                <MediaOverlay>
                  <div className="title">Auditable results under strict parity</div>
                  <div className="description">
                    Same budgets, placements, schedule. Kill weak variants early, fund winners $300-$500. If we don't beat control, we part friends.
                  </div>
                </MediaOverlay>
              </MediaCard>
              
              <QuickFacts>
                <div className="title">Quick facts</div>
                <div className="fact-grid">
                  <div className="fact">
                    <span className="fact-label">Timeline:</span>
                    <span className="fact-value">14 days</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Throughput:</span>
                    <span className="fact-value">7–10 UGC videos (4–6 variants/day)</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Ops discipline:</span>
                    <span className="fact-value">2 ops checks/day & nightly upload (7:00 PM CT)</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Win Gate:</span>
                    <span className="fact-value">+30% CTR (72h hold) or −20% CAC vs control (parity held)</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Winner funding:</span>
                    <span className="fact-value">$300–$500 per variant (to de-noise results)</span>
                  </div>
                </div>
                <div className="legend">CTR = Click-Through Rate; CAC = Customer Acquisition Cost</div>
              </QuickFacts>
            </MediaContainer>
          </motion.div>
        </HeroGrid>
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
              
              <TabList>
                {scorecardTabs.map((tab, index) => (
                  <Tab key={index}>
                    <div className="tab-name">{tab.name}</div>
                    <div className="tab-description">{tab.description}</div>
                  </Tab>
                ))}
              </TabList>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Hero; 