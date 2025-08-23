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
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BenchmarkCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenchmarkCard = styled(motion.div)`
  background: white;
  border: 2px solid #e0e0e0;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const BenchmarkTitle = styled.div`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const BenchmarkText = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const BenchmarkLabel = styled.div`
  font-size: 0.8rem;
  color: #707070;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const ROIAnalysis = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const AnalysisTitle = styled.div`
  font-size: 1.4rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.01em;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MetricCard = styled(motion.div)`
  background: white;
  border: 2px solid #e0e0e0;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
  
  .value {
    font-size: 2rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }
  
  .label {
    font-size: 0.9rem;
    color: #707070;
    font-weight: 500;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .description {
    font-size: 0.8rem;
    color: #8a8a8a;
    line-height: 1.4;
  }
`;

const ROICalculation = styled.div`
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CalculationTitle = styled.div`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CalculationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const CalculationItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.8rem;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 0.85rem;
    color: #707070;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const Arrow = styled.div`
  font-size: 1.5rem;
  color: #707070;
  font-weight: 300;
`;

const SavingsHighlight = styled.div`
  background: #0a0a0a;
  color: white;
  padding: 1.5rem;
  text-align: center;
  
  .amount {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }
  
  .period {
    font-size: 0.9rem;
    color: #a0a0a0;
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
          <SectionTitle>Results preview</SectionTitle>
        </motion.div>

        <BenchmarkCards>
          <BenchmarkCard
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BenchmarkLabel>Industry Benchmark Analysis</BenchmarkLabel>
            <BenchmarkTitle>
              Targets 20-30% CAC reduction, with potential for 40% with pilot success based on 2025 TikTok trends. Genuine student stories that resonate with target audiences.
            </BenchmarkTitle>
          </BenchmarkCard>

          <BenchmarkCard
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BenchmarkLabel>Performance Metrics Projection</BenchmarkLabel>
            <BenchmarkTitle>
              Up to 3x higher engagement projected, based on 2025 Meta ad analytics. Pilot insights developing with authentic student creator content.
            </BenchmarkTitle>
          </BenchmarkCard>
        </BenchmarkCards>

        <ROIAnalysis
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnalysisTitle>ROI Impact Analysis for EdTech Companies</AnalysisTitle>
          
          <MetricsGrid>
            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">$50K</div>
              <div className="label">Monthly Ad Spend</div>
              <div className="description">Typical mid-tier EdTech budget</div>
            </MetricCard>

            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">25%</div>
              <div className="label">CAC Reduction</div>
              <div className="description">Target improvement with UGC</div>
            </MetricCard>

            <MetricCard
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="value">3x</div>
              <div className="label">Engagement Boost</div>
              <div className="description">vs traditional advertising</div>
            </MetricCard>
          </MetricsGrid>

          <ROICalculation>
            <CalculationTitle>Monthly Savings Calculation</CalculationTitle>
            <CalculationGrid>
              <CalculationItem>
                <div className="value">$200</div>
                <div className="label">Current CAC</div>
              </CalculationItem>
              <Arrow>→</Arrow>
              <CalculationItem>
                <div className="value">$150</div>
                <div className="label">Target CAC</div>
              </CalculationItem>
            </CalculationGrid>
          </ROICalculation>

          <SavingsHighlight>
            <div className="amount">$12,500 Monthly Savings</div>
            <div className="period">Based on 250 customer acquisitions per month</div>
          </SavingsHighlight>
        </ROIAnalysis>
      </Container>
    </Section>
  );
};

export default Testimonials; 