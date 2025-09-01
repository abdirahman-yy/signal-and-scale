import React from 'react';
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
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionIntro = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
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
  background: white;
  padding: 2.5rem;
  border: 1px solid #e0e0e0;
  transition: all 0.4s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    border-color: #d0d0d0;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a0a0a0 0%, #d0d0d0 100%);
    transform: scaleX(0.3);
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SolutionPanel = styled(Panel)`
  &:before {
    background: linear-gradient(90deg, #0a0a0a 0%, #4a4a4a 100%);
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

const PanelItem = styled.li`
  padding: 0.8rem 0;
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.5;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
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
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionTitle>The challenge</SectionTitle>
          <SectionIntro>
            Student audiences tune out polished, generic ads. EdTech teams need credible creator content—but only if it's tested under a Fair Test that proves lift, not luck.
          </SectionIntro>
        </motion.div>

        <ComparisonGrid>
          <Panel
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
          >
            <PanelTitle>Current approach (why it fails)</PanelTitle>
            <PanelList>
              <PanelItem>Generic creative → low engagement and weak signal</PanelItem>
              <PanelItem>Inconsistent testing (no parity) → noisy reads and bad calls</PanelItem>
              <PanelItem>Slow iteration → winning hooks aren't found or funded</PanelItem>
            </PanelList>
          </Panel>

          <SolutionPanel
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
          >
            <PanelTitle>Our solution (what changes with us)</PanelTitle>
            <PanelList>
              <PanelItem>Creator-made UGC tailored to student/parent/teacher POVs</PanelItem>
              <PanelItem>Disciplined testing with parity, kill rules, and a 72h hold</PanelItem>
              <PanelItem>Daily throughput (4–6 variants/day) to explore hooks fast</PanelItem>
              <PanelItem>Winner funding to confirm real lift before scaling spend</PanelItem>
            </PanelList>
          </SolutionPanel>
        </ComparisonGrid>
      </Container>
    </Section>
  );
};

export default ProblemSolution; 