import React from 'react';
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #0a0a0a;
  margin-bottom: 3rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const TestSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StepCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 1.8rem;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -12px;
  left: 1.8rem;
  background: #0a0a0a;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  color: #0a0a0a;
  margin-bottom: 0.8rem;
  font-weight: 500;
  margin-top: 0.3rem;
`;

const StepDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.5;
  margin: 0;
  font-size: 0.85rem;
`;

const GuaranteeSection = styled(motion.div)`
  background: #0a0a0a;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const GuaranteeText = styled.p`
  color: #e0e0e0;
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
`;

const FairTest = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const steps = [
    {
      title: "Day 0 — Baseline & Parity Plan",
      description: "Lock CTR/CPC/CAC baseline with screenshots. Document parity (budgets, placements, schedule, geo, attribution)."
    },
    {
      title: "Days 1–14 — Production & Testing", 
      description: "Ship 4–6 variants/day, run 2 ops checks/day, add 2–3 new hooks/48h, nightly upload by 7:00 PM CT."
    },
    {
      title: "Gates — Kill/Promote",
      description: "Kill if CTR < 0.5× control @ $150 or CAC > 1.3× control @ $300. Promote if CTR > 1.3× control; fund winners $300–$500/variant."
    },
    {
      title: "Win — Performance Thresholds",
      description: "Win = +30% CTR (held ≥72h) or −20% CAC under parity, with ≥2 funded winners."
    }
  ];

  return (
    <Section ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>The Fair Test (4 steps)</SectionTitle>
        </motion.div>

        <TestSteps>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 + (index * 0.1) }}
            >
              <StepNumber>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </TestSteps>

        <GuaranteeSection
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GuaranteeText>
            If there's no win under parity, we part friends at Day-14—no retainer obligation.
          </GuaranteeText>
        </GuaranteeSection>
      </Container>
    </Section>
  );
};

export default FairTest; 