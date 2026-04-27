import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Section = styled.section`
  padding: 5.5rem 0 0;

  @media (max-width: 640px) {
    padding: 3.5rem 0 0;
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

const WhatWeDo = () => {
  return (
    <Section>
      <Eyebrow>What we do</Eyebrow>
      <Body>
        In productivity and knowledge-work, fit beats reach. A 200K-subscriber
        creator whose audience already pays for SaaS will outperform a 2M
        generalist every time. We curate creators across productivity, dev
        tools, AI, and knowledge work — and run the deal end-to-end.
      </Body>
    </Section>
  );
};

export default WhatWeDo;
