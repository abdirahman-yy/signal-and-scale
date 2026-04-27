import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Section = styled.section`
  padding: 7rem 0 0;

  @media (max-width: 640px) {
    padding: 4.5rem 0 0;
  }
`;

const Eyebrow = styled.div`
  font-family: ${theme.sans};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${theme.textMuted};
  margin-bottom: 1.75rem;
`;

const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Step = styled.li`
  display: grid;
  grid-template-columns: 3rem 1fr;
  align-items: baseline;
  gap: 1rem;
  padding: 1.1rem 0;
  border-top: 1px solid ${theme.rule};

  &:last-child {
    border-bottom: 1px solid ${theme.rule};
  }

  @media (max-width: 640px) {
    grid-template-columns: 2.25rem 1fr;
    gap: 0.75rem;
    padding: 1rem 0;
  }
`;

const Numeral = styled.span`
  font-family: ${theme.serif};
  font-weight: 300;
  font-size: 1.1rem;
  color: ${theme.accent};
  font-variation-settings: 'opsz' 14;
  font-variant-numeric: tabular-nums;
`;

const StepBody = styled.div`
  font-size: 1.05rem;
  line-height: 1.55;
  color: ${theme.text};

  strong {
    font-weight: 500;
  }

  span {
    color: ${theme.textMuted};
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const steps = [
  { label: 'Inquiry', detail: 'Tell us your product and goal.' },
  { label: 'Shortlist', detail: '5–8 creators matched to your ICP.' },
  { label: 'Execution', detail: 'Briefs, contracts, timelines, rights.' },
  { label: 'Report', detail: 'Full attribution post-campaign.' },
];

const HowItWorks = () => {
  return (
    <Section>
      <Eyebrow>How it works</Eyebrow>
      <Steps>
        {steps.map((step, i) => (
          <Step key={step.label}>
            <Numeral>{String(i + 1).padStart(2, '0')}</Numeral>
            <StepBody>
              <strong>{step.label}</strong> <span>— {step.detail}</span>
            </StepBody>
          </Step>
        ))}
      </Steps>
    </Section>
  );
};

export default HowItWorks;
