import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const PageContainer = styled.div`
  padding: 2.5rem 0 6rem;
  color: ${theme.text};
  line-height: 1.65;

  @media (max-width: 640px) {
    padding-top: 2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 3rem;
  color: ${theme.accent};
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 2.75rem;
  letter-spacing: -0.02em;
  color: ${theme.text};
  margin: 0 0 0.5rem;
  font-variation-settings: 'opsz' 144;
  line-height: 1.1;

  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
`;

const EffectiveDate = styled.p`
  color: ${theme.textMuted};
  font-size: 0.9rem;
  margin: 0 0 2.5rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.serif};
  font-weight: 500;
  font-size: 1.35rem;
  color: ${theme.text};
  margin: 2.5rem 0 0.75rem;
  letter-spacing: -0.005em;
  font-variation-settings: 'opsz' 36;
`;

const Paragraph = styled.p`
  margin: 0 0 1rem;
  color: ${theme.text};
  font-size: 1rem;
  line-height: 1.65;
`;

const List = styled.ul`
  margin: 0 0 1rem;
  padding-left: 1.25rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${theme.text};
  font-size: 1rem;
  line-height: 1.6;

  strong {
    font-weight: 500;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal &amp; Scale</BackLink>

      <Title>Privacy Policy</Title>
      <EffectiveDate>Effective April 26, 2026</EffectiveDate>
      <Paragraph>
        <strong>Entity.</strong> Signal and Scale LLC ("Signal &amp; Scale," "we," "us," "our"), San Francisco, California.
        <br />
        <strong>Contact.</strong> abdi@signalandscale.studio
      </Paragraph>

      <Paragraph>
        <strong>Our role.</strong> For our website, outreach, and Roster operations we are a data controller. When we process Client data on Client instructions inside campaign tooling, we act as a data processor under our Data Processing Addendum (DPA), available on request.
      </Paragraph>

      <SectionTitle>1. Information we collect</SectionTitle>
      <List>
        <ListItem><strong>Brand contacts.</strong> Name, role, business email, company, the content of inquiries and meetings, and the information you share when scoping a campaign (positioning, Ideal Customer Profile, goals, budgets).</ListItem>
        <ListItem><strong>Creator information.</strong> Name, channel handles, audience and rate information, signed releases, tax and payment information needed to pay out fees, and the content of communications.</ListItem>
        <ListItem><strong>Outreach data.</strong> Email engagement, opt-outs, LinkedIn interactions, and metadata from the contact tools we use to manage outreach.</ListItem>
        <ListItem><strong>Technical and website data.</strong> Internet Protocol (IP) address, device and browser type, pages viewed, referrer, and analytics events. Captured via cookies and similar technologies (see Section 4).</ListItem>
        <ListItem><strong>Payment information.</strong> Billing details processed by our payment provider; we do not store full card numbers.</ListItem>
      </List>
      <Paragraph>
        We do not request or knowingly collect children's data. If we receive it inadvertently, we delete it.
      </Paragraph>

      <SectionTitle>2. Sources</SectionTitle>
      <Paragraph>
        Directly from you (forms, emails, meetings), from Clients (for campaign execution), from Creators (for Roster onboarding), from public sources (LinkedIn, channel pages, company sites), and from our service providers.
      </Paragraph>

      <SectionTitle>3. How we use information</SectionTitle>
      <List>
        <ListItem>To provide and improve the Services (contractual basis or legitimate interests).</ListItem>
        <ListItem>To communicate with you about active or prospective campaigns (contract or legitimate interests; you may opt out of marketing at any time).</ListItem>
        <ListItem>To process payments to Creators and from Clients (contract; legal obligation for tax records).</ListItem>
        <ListItem>To meet legal, regulatory, and tax obligations.</ListItem>
        <ListItem>To produce anonymized or aggregated benchmarks and case studies (legitimate interests; we won't identify any individual Creator or Client without consent).</ListItem>
        <ListItem>To prevent fraud and protect the security of our Services.</ListItem>
      </List>

      <SectionTitle>4. Cookies and analytics</SectionTitle>
      <Paragraph>
        The site uses essential cookies to function and a privacy-respecting analytics tool to understand traffic and usage. We do not run ad-platform retargeting pixels on this site. Where required by law, we obtain consent for non-essential cookies via a banner. You can manage preferences through the banner or your browser settings. We do not currently respond to Do Not Track signals.
      </Paragraph>

      <SectionTitle>5. Who we share with</SectionTitle>
      <List>
        <ListItem><strong>Service providers</strong> running our infrastructure: email, Customer Relationship Management (CRM), accounting, project management, analytics, and payment processing.</ListItem>
        <ListItem><strong>Creators</strong> working on your campaign — only the information they need to produce the Integration.</ListItem>
        <ListItem><strong>Clients</strong> working on a campaign with one of our Creators — only the information they need to plan and approve.</ListItem>
        <ListItem><strong>Professional advisors</strong> (legal, accounting, insurance).</ListItem>
        <ListItem><strong>Authorities</strong> when required by law.</ListItem>
      </List>
      <Paragraph>
        We do not sell personal information. We do not share personal information for cross-context behavioral advertising. If certain analytics tools are deemed a "sale" or "share" under state privacy law, you may opt out via the cookie banner.
      </Paragraph>

      <SectionTitle>6. International transfers</SectionTitle>
      <Paragraph>
        Where we transfer personal data internationally, we use appropriate safeguards such as Standard Contractual Clauses (SCCs). If we later participate in the Data Privacy Framework (DPF), we will update this Policy.
      </Paragraph>

      <SectionTitle>7. Security</SectionTitle>
      <Paragraph>
        We use reasonable technical and organizational measures including encryption in transit, role-based access controls, Two-Factor Authentication (2FA) on critical systems, and ongoing vendor diligence. No method of transmission or storage is 100% secure.
      </Paragraph>
      <Paragraph>
        <strong>Breach notice.</strong> If a personal data breach is confirmed, we will notify affected Clients without undue delay, and in any event within 72 hours of confirmation.
      </Paragraph>

      <SectionTitle>8. Retention</SectionTitle>
      <Paragraph>
        We retain personal data only as long as necessary, then delete or anonymize it. Typical periods:
      </Paragraph>
      <List>
        <ListItem><strong>Website inquiries.</strong> 12 months from last interaction (sooner on request).</ListItem>
        <ListItem><strong>Campaign records.</strong> 24 months after campaign close.</ListItem>
        <ListItem><strong>Creator releases and rights records.</strong> Length of the licensed rights window plus 3 years.</ListItem>
        <ListItem><strong>Tax and payment records.</strong> 7 years (legal requirement).</ListItem>
      </List>

      <SectionTitle>9. Your rights</SectionTitle>
      <Paragraph>
        Depending on your location, you may have rights to access, correct, delete, restrict, port, or object to our processing of your personal information, and to opt out of marketing.
      </Paragraph>
      <List>
        <ListItem><strong>EU and UK residents</strong> have rights under the General Data Protection Regulation (GDPR) and UK GDPR.</ListItem>
        <ListItem><strong>California residents</strong> have rights under the California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA), including the right to know, delete, correct, opt out of sale or share, and limit use of sensitive personal information.</ListItem>
        <ListItem><strong>Other US states</strong> with comprehensive privacy laws (CO, CT, VA, UT, and others) — we honor equivalent rights.</ListItem>
      </List>
      <Paragraph>
        To exercise rights, email abdi@signalandscale.studio with the subject "Privacy Request." We may need to verify your identity before responding, and we'll respond within statutory timelines.
      </Paragraph>

      <SectionTitle>10. Controller and processor relationship</SectionTitle>
      <Paragraph>
        When we process Client personal data on Client instructions in campaign tooling, we act as a processor. Our DPA — including SCCs and security commitments — is available on request.
      </Paragraph>

      <SectionTitle>11. Children</SectionTitle>
      <Paragraph>
        The Services are for business users and are not directed to children under 13 (or the local age of consent). We do not knowingly collect children's data. If you believe a child provided data, contact us to delete it.
      </Paragraph>

      <SectionTitle>12. Changes</SectionTitle>
      <Paragraph>
        We may update this Policy. Material changes will be communicated to active Clients by email and posted with a new effective date.
      </Paragraph>

      <SectionTitle>13. Contact</SectionTitle>
      <Paragraph>
        Privacy questions: abdi@signalandscale.studio. Signal and Scale LLC, San Francisco, CA.
      </Paragraph>
    </PageContainer>
  );
};

export default PrivacyPolicy;
