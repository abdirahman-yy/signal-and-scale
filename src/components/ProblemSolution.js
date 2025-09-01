import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: #fafafa;
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionSubtext = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ComparisonPanel = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PanelTitle = styled.h3`
  font-size: 1.2rem;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PanelItem = styled.li`
  color: #4a4a4a;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative;
  padding-left: 1.2rem;
  
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: #707070;
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>The challenge</SectionTitle>
          <SectionSubtext>
            Student audiences tune out polished, generic ads. EdTech teams need credible creator content—but only if it's tested under a Fair Test that proves lift, not luck.
          </SectionSubtext>
        </motion.div>

        <ComparisonGrid>
          <ComparisonPanel
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PanelTitle>Current approach (why it fails)</PanelTitle>
            <PanelList>
              <PanelItem>Generic creative → low engagement and weak signal</PanelItem>
              <PanelItem>Inconsistent testing (no parity) → noisy reads and bad calls</PanelItem>
              <PanelItem>Slow iteration → winning hooks aren't found or funded</PanelItem>
            </PanelList>
          </ComparisonPanel>

          <ComparisonPanel
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PanelTitle>Our solution (what changes with us)</PanelTitle>
            <PanelList>
              <PanelItem>Creator-made UGC tailored to student/parent/teacher POVs</PanelItem>
              <PanelItem>Disciplined testing with parity, kill rules, and a 72h hold</PanelItem>
              <PanelItem>Daily throughput (4–6 variants/day) to explore hooks fast</PanelItem>
              <PanelItem>Winner funding to confirm real lift before scaling spend</PanelItem>
            </PanelList>
          </ComparisonPanel>
        </ComparisonGrid>
      </Container>
    </Section>
  );
};

export default ProblemSolution; 