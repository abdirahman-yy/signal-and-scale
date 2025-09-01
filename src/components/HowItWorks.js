import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -12px;
  left: 2rem;
  background: #0a0a0a;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const StepDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
`;

const GuaranteeStrip = styled(motion.div)`
  background: #0a0a0a;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 16px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const GuaranteeText = styled.p`
  color: #e0e0e0;
  line-height: 1.5;
  margin: 0;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <SectionTitle>The Fair Test (4 steps)</SectionTitle>
          </SectionHeader>
        </motion.div>

        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 + (index * 0.1) }}
            >
              <StepNumber>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>

        <GuaranteeStrip
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GuaranteeText>
            If there's no win under parity, we part friends at Day-14—no retainer obligation.
          </GuaranteeText>
        </GuaranteeStrip>
      </Container>
    </Section>
  );
};

export default FairTest; 