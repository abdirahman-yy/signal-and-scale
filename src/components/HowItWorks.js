import React from 'react';
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

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #0a0a0a;
  margin-bottom: 4rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

const TestSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled(motion.div)`
  background: #fafafa;
  border: 2px solid #e0e0e0;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -15px;
  left: 2rem;
  background: #0a0a0a;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  color: #0a0a0a;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: 0.5rem;
`;

const StepDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const GuaranteeSection = styled(motion.div)`
  background: #0a0a0a;
  color: white;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const GuaranteeTitle = styled.h3`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const GuaranteeText = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
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
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionTitle>The Fair Test (4 steps)</SectionTitle>
        </motion.div>

        <TestSteps>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.3 }
              }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GuaranteeTitle>Guarantee (clear, no refunds promise)</GuaranteeTitle>
          <GuaranteeText>
            If there's no win under parity, we part friends at Day-14—no retainer obligation.<br/>
            Pilot fees cover creative & ops; ad spend is client-funded directly.
          </GuaranteeText>
        </GuaranteeSection>
      </Container>
    </Section>
  );
};

export default FairTest; 