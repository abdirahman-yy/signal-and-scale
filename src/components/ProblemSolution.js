import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #fafafa;
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

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #707070;
  margin-bottom: 3rem;
  letter-spacing: 0.01em;
  font-style: italic;
`;

const PanelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Panel = styled(motion.div)`
  background: ${props => props.$isActive ? '#f8f8f8' : '#fafafa'};
  padding: 2.5rem;
  border: 1px solid ${props => props.$isActive ? '#d0d0d0' : '#e0e0e0'};
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #0a0a0a 0%, #4a4a4a 100%);
    transform: scaleX(${props => props.$isActive ? 1 : 0.3});
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SolutionPanel = styled(Panel)`
  background: ${props => props.$isActive ? '#f5f5f5' : '#f8f8f8'};
  border: 1px solid ${props => props.$isActive ? '#c0c0c0' : '#d0d0d0'};
  
  &:before {
    background: linear-gradient(90deg, #4a4a4a 0%, #0a0a0a 100%);
  }
  
  &:hover {
    background: #f2f2f2;
    border-color: #b0b0b0;
    transform: scaleX(${props => props.$isActive ? 1 : 0.3});
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const HeaderLine = styled.div`
  height: 1px;
  background: #d0d0d0;
  flex: 1;
`;

const PanelTitle = styled.h3`
  font-size: 1.3rem;
  color: #0a0a0a;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0;
`;

const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PanelItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  opacity: ${props => props.$isVisible ? 1 : 0.7};
  transform: translateX(${props => props.$isVisible ? '0' : '-5px'});
  transition: all 0.3s ease;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemBullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4a4a4a;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const ItemText = styled.span`
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TargetBox = styled(motion.div)`
  background: white;
  border: 2px solid ${props => props.$isActive ? '#0a0a0a' : '#e0e0e0'};
  padding: 1.5rem;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  
  .target-label {
    font-size: 0.8rem;
    color: #707070;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:before {
      content: '';
      width: ${props => props.$isActive ? '16px' : '12px'};
      height: ${props => props.$isActive ? '16px' : '12px'};
      border-radius: 50%;
      background: ${props => props.$isSuccess ? (props.$isActive ? '#0a0a0a' : '#4a4a4a') : (props.$isActive ? '#666' : '#a0a0a0')};
      transition: all 0.3s ease;
    }
  }
  
  .target-value {
    font-size: 1.1rem;
    color: #0a0a0a;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
`;

const StatsOverlay = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid #e0e0e0;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '10px'});
  transition: all 0.4s ease;
  pointer-events: none;
`;

const ROIAnalysis = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const AnalysisTitle = styled.div`
  font-size: 1.4rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.01em;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MetricCard = styled(motion.div)`
  background: white;
  border: 2px solid #e0e0e0;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  .value {
    font-size: 2rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }
  
  .label {
    font-size: 0.9rem;
    color: #707070;
    font-weight: 500;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .description {
    font-size: 0.8rem;
    color: #8a8a8a;
    line-height: 1.4;
  }
`;

const ROICalculation = styled.div`
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CalculationTitle = styled.div`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CalculationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const CalculationItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.8rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 0.85rem;
    color: #707070;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const Arrow = styled.div`
  font-size: 1.5rem;
  color: #707070;
  font-weight: 300;
`;

const SavingsHighlight = styled.div`
  background: #0a0a0a;
  color: white;
  padding: 1.5rem;
  text-align: center;
  
  .amount {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }
  
  .period {
    font-size: 0.9rem;
    color: #a0a0a0;
  }
`;

const ProblemSolution = () => {
  const [activePanel, setActivePanel] = useState(null);
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
          <SectionTitle>The challenge</SectionTitle>
          <SectionSubtitle>
            EdTech CAC 60-80% higher with traditional ads, per 2025 EdTech Marketing Trends projection. Traditional marketing approaches fail to connect with students who value authenticity over polished advertising.
          </SectionSubtitle>
          <SectionSubtitle>
            Data projected from 2025 industry analysis and TikTok performance benchmarks
          </SectionSubtitle>
        </motion.div>

        <PanelContainer>
          <Panel
            $isActive={activePanel === 'problem'}
            onMouseEnter={() => setActivePanel('problem')}
            onMouseLeave={() => setActivePanel(null)}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PanelHeader>
              <HeaderLine />
              <PanelTitle>Current approach</PanelTitle>
              <HeaderLine />
            </PanelHeader>
            
            <PanelList>
              <PanelItem $isVisible={activePanel === 'problem' || activePanel === null}>
                <ItemBullet />
                <ItemText>Traditional advertising fails to resonate with student audiences</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'problem' || activePanel === null}>
                <ItemBullet />
                <ItemText>High customer acquisition costs strain marketing budgets</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'problem' || activePanel === null}>
                <ItemBullet />
                <ItemText>Generic content lacks authenticity and trust</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'problem' || activePanel === null}>
                <ItemBullet />
                <ItemText>Low conversion rates from standard advertising approaches</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'problem' || activePanel === null}>
                <ItemBullet />
                <ItemText>Difficulty scaling effective marketing campaigns</ItemText>
              </PanelItem>
            </PanelList>
            
            <TargetBox
              $isSuccess={false}
              $isActive={activePanel === 'problem'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="target-label">Current Challenge</div>
              <div className="target-value">High CAC with low engagement rates</div>
            </TargetBox>
            
            <StatsOverlay $isVisible={activePanel === 'problem'}>
              <div style={{ fontSize: '0.85rem', color: '#4a4a4a' }}>
                Traditional advertising often results in 60-80% higher customer acquisition costs for EdTech companies
              </div>
            </StatsOverlay>
          </Panel>

          <SolutionPanel
            $isActive={activePanel === 'solution'}
            onMouseEnter={() => setActivePanel('solution')}
            onMouseLeave={() => setActivePanel(null)}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PanelHeader>
              <HeaderLine />
              <PanelTitle>Our solution</PanelTitle>
              <HeaderLine />
            </PanelHeader>
            
            <PanelList>
              <PanelItem $isVisible={activePanel === 'solution' || activePanel === null}>
                <ItemBullet />
                <ItemText>Authentic student testimonials and user experiences</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'solution' || activePanel === null}>
                <ItemBullet />
                <ItemText>Cost-effective content creation with higher ROI</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'solution' || activePanel === null}>
                <ItemBullet />
                <ItemText>Genuine stories that build trust and credibility</ItemText>
              </PanelItem>
              <PanelItem $isVisible={activePanel === 'solution' || activePanel === null}>
                <ItemBullet />
                <ItemText>Higher engagement rates through relatable content</ItemText>
              </PanelItem>
            </PanelList>
            
            <TargetBox
              $isSuccess={true}
              $isActive={activePanel === 'solution'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="target-label">Our Target</div>
              <div className="target-value">$135 CAC with 25% reduction goal for pilot participants</div>
            </TargetBox>
            
            <StatsOverlay $isVisible={activePanel === 'solution'}></StatsOverlay>
          </SolutionPanel>
        </PanelContainer>

        <ROIAnalysis
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnalysisTitle>ROI Impact Analysis for EdTech Companies</AnalysisTitle>
          
          <MetricsGrid>
            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">$50K</div>
              <div className="label">Monthly Ad Spend</div>
              <div className="description">Typical mid-tier EdTech budget</div>
            </MetricCard>

            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">25%</div>
              <div className="label">CAC Reduction</div>
              <div className="description">Target improvement with UGC</div>
            </MetricCard>

            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">3x</div>
              <div className="label">Engagement Boost</div>
              <div className="description">vs traditional advertising</div>
            </MetricCard>
          </MetricsGrid>

          <ROICalculation>
            <CalculationTitle>Monthly Savings Calculation</CalculationTitle>
            <CalculationGrid>
              <CalculationItem>
                <div className="value">$200</div>
                <div className="label">Current CAC</div>
              </CalculationItem>
              <Arrow>→</Arrow>
              <CalculationItem>
                <div className="value">$150</div>
                <div className="label">Target CAC</div>
              </CalculationItem>
            </CalculationGrid>
          </ROICalculation>

          <SavingsHighlight>
            <div className="amount">$12,500 Monthly Savings</div>
            <div className="period">Based on 250 customer acquisitions per month</div>
          </SavingsHighlight>
        </ROIAnalysis>
      </Container>
    </Section>
  );
};

export default ProblemSolution; 