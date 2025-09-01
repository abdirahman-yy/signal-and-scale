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
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
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
  border: 2px solid #e0e0e0;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    border-color: #0a0a0a;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProofTitle = styled.div`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ProofDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
`;

const ExampleMath = styled(motion.div)`
  background: white;
  border: 2px solid #e0e0e0;
  padding: 2.5rem;
  margin-top: 3rem;
  
  .title {
    font-size: 1.3rem;
    color: #0a0a0a;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .calculation {
    font-size: 1rem;
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .disclaimer {
    font-size: 0.8rem;
    color: #707070;
    font-style: italic;
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CTASection = styled(motion.div)`
  background: #0a0a0a;
  color: white;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
  
  .title {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  .subtitle {
    color: #a0a0a0;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: white;
  color: #0a0a0a;
  border: 1px solid white;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    background: transparent;
    color: white;
    transform: translateY(-1px);
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
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionTitle>What you'll see (proof artifacts)</SectionTitle>
        </motion.div>

        <ProofCards>
          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProofTitle>Pilot Scorecard (view-only)</ProofTitle>
            <ProofDescription>
              Baseline, parity checks, variant matrix, winner funding, rights windows
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProofTitle>Win Packet</ProofTitle>
            <ProofDescription>
              Control vs. winner screenshots + parity settings + Spark permissions
            </ProofDescription>
          </ProofCard>

          <ProofCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="title">Example math (illustrative, not a promise)</div>
          <div className="calculation">
            If your current CAC is $200 and you acquire 250 customers/month, a −20% CAC (our Win Gate option) would be $160, saving $10,000/month.
          </div>
          <div className="disclaimer">
            Illustrative only. Actual performance depends on your audience, offer, budget, and parity adherence.
          </div>
        </ExampleMath>

        <CTASection
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="title">Ready to run a Fair Test?</div>
          <div className="subtitle">Limited pilot slots each month.</div>
          <ViewButton 
            href="https://calendly.com/signalandscale-sales/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a consultation
          </ViewButton>
        </CTASection>
      </Container>
    </Section>
  );
};

export default Testimonials; 