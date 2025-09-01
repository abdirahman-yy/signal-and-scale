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

const SectionTitle = styled(motion.h2)`
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

const StepsContainer = styled.div`
  position: relative;
`;

const ConnectionLine = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e0e0e0 20%, #e0e0e0 80%, transparent 100%);
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Step = styled(motion.div)`
  background: #fafafa;
  padding: 2.5rem;
  border: 1px solid #e0e0e0;
  transition: all 0.4s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    border-color: #d0d0d0;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const StepIndicator = styled(motion.div)`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #4a4a4a;
  
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin: 0 auto 1.5rem;
  }
`;

const StepTitle = styled(motion.h3)`
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const StepDescription = styled(motion.p)`
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  margin: 0;
`;

const GuaranteeSection = styled(motion.div)`
  background: #0a0a0a;
  color: white;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const GuaranteeText = styled.p`
  color: #e0e0e0;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <Section ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The Fair Test (4 steps)
        </SectionTitle>
        
        <StepsContainer>
          <ConnectionLine
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <StepsGrid>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  variants={stepVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                >
                  <StepIndicator
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </StepIndicator>
                  <StepTitle
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1.1 + (index * 0.1) }}
                  >
                    {step.title}
                  </StepTitle>
                  <StepDescription
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  >
                    {step.description}
                  </StepDescription>
                </Step>
              ))}
            </StepsGrid>
          </motion.div>
        </StepsContainer>

        <GuaranteeSection
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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