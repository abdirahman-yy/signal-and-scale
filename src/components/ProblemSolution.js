import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  padding: 6rem 0;
  background: white;
  
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
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionIntro = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  max-width: 800px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
`;

const SourceNote = styled.p`
  font-size: 0.85rem;
  color: #707070;
  font-style: italic;
  margin-bottom: 3rem;
  letter-spacing: 0.01em;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Panel = styled(motion.div)`
  background: ${props => props.isActive ? '#f8f8f8' : '#fafafa'};
  padding: 2.5rem;
  border: 1px solid ${props => props.isActive ? '#d0d0d0' : '#e0e0e0'};
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a0a0a0 0%, #d0d0d0 100%);
    transform: scaleX(${props => props.isActive ? 1 : 0.3});
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    border-color: #d0d0d0;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    background: #f8f8f8;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SolutionPanel = styled(Panel)`
  background: ${props => props.isActive ? '#f5f5f5' : '#f8f8f8'};
  border: 1px solid ${props => props.isActive ? '#c0c0c0' : '#d0d0d0'};
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #0a0a0a 0%, #4a4a4a 100%);
    transform: scaleX(${props => props.isActive ? 1 : 0.3});
    transition: transform 0.4s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const PanelTitle = styled.h3`
  color: #0a0a0a;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const PanelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PanelItem = styled(motion.li)`
  padding: 0.8rem 0;
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.5;
  border-bottom: 1px solid #f0f0f0;
  opacity: ${props => props.isVisible ? 1 : 0.7};
  transform: translateX(${props => props.isVisible ? '0' : '-5px'});
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
`;

const VisualElement = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border: 2px solid ${props => props.isActive ? '#0a0a0a' : '#e0e0e0'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    width: ${props => props.isActive ? '16px' : '12px'};
    height: ${props => props.isActive ? '16px' : '12px'};
    border-radius: 50%;
    background: ${props => props.isSuccess ? (props.isActive ? '#0a0a0a' : '#4a4a4a') : (props.isActive ? '#666' : '#a0a0a0')};
    transition: all 0.3s ease;
  }
  
  &:hover {
    border-color: #0a0a0a;
    transform: scale(1.1);
  }
`;

const StatsOverlay = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border: 1px solid #e0e0e0;
  backdrop-filter: blur(10px);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '10px'});
  transition: all 0.4s ease;
`;

const StatText = styled.div`
  font-size: 0.85rem;
  color: #4a4a4a;
  line-height: 1.4;
  
  strong {
    color: #0a0a0a;
    font-weight: 600;
  }
`;

const ProblemSolution = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const problemItems = [
    "Traditional advertising fails to resonate with student audiences",
    "High customer acquisition costs strain marketing budgets",
    "Generic content lacks authenticity and trust",
    "Low conversion rates from standard advertising approaches",
    "Difficulty scaling effective marketing campaigns"
  ];

  const solutionItems = [
    "Authentic student testimonials and user experiences",
    "Cost-effective content creation with higher ROI",
    "Genuine stories that build trust and credibility",
    "Higher engagement rates through relatable content",
    "Scalable video content for multiple platforms"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <Section ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionTitle>The challenge</SectionTitle>
          <SectionIntro>
            EdTech CAC 60-80% higher with traditional ads, per 2025 EdTech Marketing Trends projection. 
            Traditional marketing approaches fail to connect with students who value authenticity over polished advertising.
          </SectionIntro>
          <SourceNote>
            Data projected from 2025 industry analysis and TikTok performance benchmarks
          </SourceNote>
          
          <ComparisonGrid>
            <Panel
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              isActive={activePanel === 'problem'}
              onClick={() => setActivePanel(activePanel === 'problem' ? null : 'problem')}
              onMouseEnter={() => setActivePanel('problem')}
              onMouseLeave={() => setActivePanel(null)}
            >
              <VisualElement
                initial={{ scale: 0, rotate: -90 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                isSuccess={false}
                isActive={activePanel === 'problem'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePanel(activePanel === 'problem' ? null : 'problem');
                }}
              />
              <PanelTitle>Current approach</PanelTitle>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <PanelList>
                  {problemItems.map((item, index) => (
                    <PanelItem 
                      key={index}
                      variants={itemVariants}
                      isVisible={activePanel === 'problem' || activePanel === null}
                    >
                      {item}
                    </PanelItem>
                  ))}
                </PanelList>
              </motion.div>
              <StatsOverlay isVisible={activePanel === 'problem'}>
                <StatText>
                  <strong>Industry Average:</strong><br />
                  $180 CAC for EdTech companies using traditional methods
                </StatText>
              </StatsOverlay>
            </Panel>
            
            <SolutionPanel
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              isActive={activePanel === 'solution'}
              onClick={() => setActivePanel(activePanel === 'solution' ? null : 'solution')}
              onMouseEnter={() => setActivePanel('solution')}
              onMouseLeave={() => setActivePanel(null)}
            >
              <VisualElement
                initial={{ scale: 0, rotate: 90 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                isSuccess={true}
                isActive={activePanel === 'solution'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePanel(activePanel === 'solution' ? null : 'solution');
                }}
              />
              <PanelTitle>Our solution</PanelTitle>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <PanelList>
                  {solutionItems.map((item, index) => (
                    <PanelItem 
                      key={index}
                      variants={itemVariants}
                      isVisible={activePanel === 'solution' || activePanel === null}
                    >
                      {item}
                    </PanelItem>
                  ))}
                </PanelList>
              </motion.div>
              <StatsOverlay isVisible={activePanel === 'solution'}>
                <StatText>
                  <strong>Our Target:</strong><br />
                  $135 CAC with 25% reduction goal for pilot participants
                </StatText>
              </StatsOverlay>
            </SolutionPanel>
          </ComparisonGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ProblemSolution; 