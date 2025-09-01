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
  margin-bottom: 3rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProofCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProofCard = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ProofTitle = styled.div`
  font-size: 1rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

const ProofDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.5;
  margin: 0;
  font-size: 0.85rem;
`;

const ExampleMath = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  margin-top: 2rem;
  
  .title {
    font-size: 1.2rem;
    color: #0a0a0a;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .calculation {
    font-size: 0.95rem;
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .disclaimer {
    font-size: 0.8rem;
    color: #707070;
    font-style: italic;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>What you'll see</SectionTitle>
        </motion.div>

        <ProofCards>
          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProofTitle>Pilot Scorecard (view-only)</ProofTitle>
            <ProofDescription>
              Baseline, parity checks, variant matrix, winner funding, rights windows
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProofTitle>Win Packet</ProofTitle>
            <ProofDescription>
              Control vs. winner screenshots + parity settings + Spark permissions
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ProofTitle>Weekly readouts</ProofTitle>
            <ProofDescription>
              CTR/CPC/CAC trends, kills/promotions, next hooks
            </ProofDescription>
          </ProofCard>
        </ProofCards>

        <ExampleMath
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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