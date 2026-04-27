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
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.45;
  letter-spacing: -0.005em;
  color: ${theme.text};
  margin: 0;
  font-variation-settings: 'opsz' 36;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Pricing = () => {
  return (
    <Section>
      <Eyebrow>Pricing</Eyebrow>
      <Body>Per-campaign or quarterly retainer. Scoped after inquiry.</Body>
    </Section>
  );
};

export default Pricing;
