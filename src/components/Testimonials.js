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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProofCard = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 2.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #0a0a0a 0%, #4a4a4a 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    border-color: #d0d0d0;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ProofTitle = styled.h3`
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
  font-size: 0.95rem;
`;

const ExampleMath = styled(motion.div)`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 3rem;
  text-align: center;
  
  .title {
    font-size: 1.4rem;
    color: #0a0a0a;
    font-weight: 500;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }
  
  .calculation {
    font-size: 1.1rem;
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .disclaimer {
    font-size: 0.85rem;
    color: #707070;
    font-style: italic;
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

  const cardVariants = {
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
        duration: 0.8,
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
          What you'll see
        </SectionTitle>
        
        <ContentWrapper>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ProofGrid>
              <ProofCard
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.3 }
                }}
              >
                <ProofTitle>Pilot Scorecard (view-only)</ProofTitle>
                <ProofDescription>
                  Baseline, parity checks, variant matrix, winner funding, rights windows
                </ProofDescription>
              </ProofCard>

              <ProofCard
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.3 }
                }}
              >
                <ProofTitle>Win Packet</ProofTitle>
                <ProofDescription>
                  Control vs. winner screenshots + parity settings + Spark permissions
                </ProofDescription>
              </ProofCard>

              <ProofCard
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.3 }
                }}
              >
                <ProofTitle>Weekly readouts</ProofTitle>
                <ProofDescription>
                  CTR/CPC/CAC trends, kills/promotions, next hooks
                </ProofDescription>
              </ProofCard>
            </ProofGrid>
          </motion.div>

          <ExampleMath
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="title">Example math (illustrative, not a promise)</div>
            <div className="calculation">
              If your current CAC is $200 and you acquire 250 customers/month, a −20% CAC (our Win Gate option) would be $160, saving $10,000/month.
            </div>
            <div className="disclaimer">
              Illustrative only. Actual performance depends on your audience, offer, budget, and parity adherence.
            </div>
          </ExampleMath>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Testimonials; 