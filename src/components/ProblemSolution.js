import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #fafafa;
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtext = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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

const ComparisonPanel = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.isSuccess ? '#0a0a0a' : '#e0e0e0'};
    border-radius: 16px 16px 0 0;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const PanelTitle = styled.h3`
  font-size: 1.4rem;
  color: #0a0a0a;
  margin-bottom: 2rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
`;

const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PanelItem = styled.li`
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
  font-family: 'Inter', sans-serif;
  
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${props => props.isSuccess ? '#0a0a0a' : '#8a8a8a'};
    font-weight: 500;
  }
`;

const ProblemSolution = () => {
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
          <SectionHeader>
            <SectionTitle>The challenge</SectionTitle>
            <SectionSubtext>
              Student audiences tune out polished, generic ads. EdTech teams need credible creator content—but only if it's tested under a Fair Test that proves lift, not luck.
            </SectionSubtext>
          </SectionHeader>
        </motion.div>

        <ComparisonGrid>
          <ComparisonPanel
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            isSuccess={false}
          >
            <PanelTitle>Current approach (why it fails)</PanelTitle>
            <PanelList>
              <PanelItem isSuccess={false}>Generic creative → low engagement and weak signal</PanelItem>
              <PanelItem isSuccess={false}>Inconsistent testing (no parity) → noisy reads and bad calls</PanelItem>
              <PanelItem isSuccess={false}>Slow iteration → winning hooks aren't found or funded</PanelItem>
            </PanelList>
          </ComparisonPanel>

          <ComparisonPanel
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            isSuccess={true}
          >
            <PanelTitle>Our solution (what changes with us)</PanelTitle>
            <PanelList>
              <PanelItem isSuccess={true}>Creator-made UGC tailored to student/parent/teacher POVs</PanelItem>
              <PanelItem isSuccess={true}>Disciplined testing with parity, kill rules, and a 72h hold</PanelItem>
              <PanelItem isSuccess={true}>Daily throughput (4–6 variants/day) to explore hooks fast</PanelItem>
              <PanelItem isSuccess={true}>Winner funding to confirm real lift before scaling spend</PanelItem>
            </PanelList>
          </ComparisonPanel>
        </ComparisonGrid>
      </Container>
    </Section>
  );
};

export default ProblemSolution; 