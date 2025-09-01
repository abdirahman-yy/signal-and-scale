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

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProofCard = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProofTitle = styled.div`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const ProofDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
`;

const ExampleMath = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  
  .title {
    font-size: 1.4rem;
    color: #0a0a0a;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  
  .calculation {
    font-size: 1.1rem;
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .disclaimer {
    font-size: 0.85rem;
    color: #707070;
    font-style: italic;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Testimonials = () => {
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
            <SectionTitle>What you'll see</SectionTitle>
          </SectionHeader>
        </motion.div>

        <ProofGrid>
          <ProofCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProofTitle>Pilot Scorecard (view-only)</ProofTitle>
            <ProofDescription>
              Baseline, parity checks, variant matrix, winner funding, rights windows
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProofTitle>Win Packet</ProofTitle>
            <ProofDescription>
              Control vs. winner screenshots + parity settings + Spark permissions
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ProofTitle>Weekly readouts</ProofTitle>
            <ProofDescription>
              CTR/CPC/CAC trends, kills/promotions, next hooks
            </ProofDescription>
          </ProofCard>
        </ProofGrid>

        <ExampleMath
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="title">Example math (illustrative, not a promise)</div>
          <div className="calculation">
            If your current CAC is $200 and you acquire 250 customers/month, a −20% CAC (our Win Gate option) would be $160, saving $10,000/month.
          </div>
          <div className="disclaimer">
            Illustrative only. Actual performance depends on your audience, offer, budget, and parity adherence.
          </div>
        </ExampleMath>
      </Container>
    </Section>
  );
};

export default Testimonials; 