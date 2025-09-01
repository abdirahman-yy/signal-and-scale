import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fafafa;
  min-height: 100vh;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: #0a0a0a;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  background: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0a0a0a;
    color: white;
    border-color: #0a0a0a;
  }
`;

const Title = styled.h1`
  color: #0a0a0a;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const EffectiveDate = styled.p`
  color: #707070;
  font-style: italic;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #0a0a0a;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #4a4a4a;
`;

const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #4a4a4a;
  
  strong {
    color: #0a0a0a;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal & Scale</BackLink>
      
      <Title>Privacy Policy</Title>
      <EffectiveDate>Effective date: September 1, 2025</EffectiveDate>
      <Paragraph>
        <strong>Entity:</strong> Signal and Scale LLC ("Signal & Scale," "we," "us," "our")<br/>
        <strong>Contact:</strong> privacy@signalandscale.studio
      </Paragraph>

      <Paragraph>
        <strong>Role clarity.</strong> For our website and outreach we are a data controller. When we process Client data in advertising platforms during campaigns, we act as a data processor on Client instructions (see our Data Processing Addendum (DPA)).
      </Paragraph>
      
      <Paragraph>
        <strong>Acronyms:</strong> On first use we spell out each term (e.g., Personally Identifiable Information (PII)). A glossary is at the end.
      </Paragraph>

      <SectionTitle>1) Information We Collect</SectionTitle>
      <List>
        <ListItem><strong>Contact & business information</strong> (name, email, company, role, meeting details).</ListItem>
        <ListItem><strong>Commercial information</strong> (goals, budgets, baseline metrics such as Customer Acquisition Cost (CAC)/Click-Through Rate (CTR)) needed to scope and measure work.</ListItem>
        <ListItem><strong>Creator information</strong> (name/handle, signed releases, Spark permissions).</ListItem>
        <ListItem><strong>Payment information</strong> (billing via our payment provider—we do not store full card numbers).</ListItem>
        <ListItem><strong>Technical data & cookies</strong> (Internet Protocol (IP) address, device/browser, pages viewed, analytics/cookie data).</ListItem>
        <ListItem><strong>Outreach data</strong> (email engagement, opt-outs, LinkedIn interactions).</ListItem>
        <ListItem><strong>Student data:</strong> We do not seek or require student PII. If such data is provided to us, we request removal and delete any copies we hold.</ListItem>
      </List>

      <SectionTitle>2) Sources of Information</SectionTitle>
      <Paragraph>
        Directly from you (forms, emails, meetings), from Clients (for campaign execution), from public sources (e.g., LinkedIn, company sites), and from service providers (analytics, Customer Relationship Management (CRM), payments).
      </Paragraph>

      <SectionTitle>3) How We Use Information (Purposes & Legal Bases)</SectionTitle>
      <List>
        <ListItem>Provide and improve Services (contract, legitimate interests).</ListItem>
        <ListItem>Communicate about Services and conduct relevant outreach (consent/legitimate interests; you may opt out at any time).</ListItem>
        <ListItem>Process payments and manage accounts (contract/legal obligation).</ListItem>
        <ListItem>Ensure security, prevent fraud, and meet compliance duties (legal obligation/legitimate interests).</ListItem>
        <ListItem>Produce anonymized/aggregated reporting and benchmarks (legitimate interests).</ListItem>
      </List>

      <SectionTitle>4) Cookies & Tracking</SectionTitle>
      <Paragraph>
        We use essential cookies and analytics to understand site usage. Where required, we obtain consent for non-essential cookies. You can manage preferences via our cookie banner or browser settings. We do not currently respond to Do Not Track signals.
      </Paragraph>

      <SectionTitle>5) Sharing of Information</SectionTitle>
      <Paragraph>We share personal information with:</Paragraph>
      <List>
        <ListItem>Service providers (e.g., Google Workspace, analytics, CRM/project tools, payment processors);</ListItem>
        <ListItem>Creators (only the data needed for briefs; no sensitive personal data);</ListItem>
        <ListItem>Professional advisors (legal/accounting);</ListItem>
        <ListItem>Authorities when required by law.</ListItem>
      </List>
      <Paragraph>
        We do not sell personal information and do not share it for cross-context behavioral advertising outside our Services. If certain analytics are considered a "sale/share" under state law, you may opt out via the cookie banner.
      </Paragraph>

      <SectionTitle>6) International Transfers</SectionTitle>
      <Paragraph>
        Where personal data is transferred internationally, we use appropriate safeguards such as Standard Contractual Clauses (SCCs). If we later participate in the Data Privacy Framework (DPF), we will update this Policy.
      </Paragraph>

      <SectionTitle>7) Security</SectionTitle>
      <Paragraph>
        We use technical and organizational measures including encryption in transit, role-based access, Two-Factor Authentication (2FA), and vendor diligence. No method is 100% secure.
      </Paragraph>
      <Paragraph>
        <strong>Breach notice:</strong> We will notify Client of a confirmed personal data breach within 72 hours and cooperate on remediation.
      </Paragraph>

      <SectionTitle>8) Retention</SectionTitle>
      <Paragraph>We retain data only as long as necessary, then delete or anonymize it. Typical periods:</Paragraph>
      <List>
        <ListItem><strong>Website leads:</strong> 12 months after last interaction (or sooner upon request).</ListItem>
        <ListItem><strong>Campaign records:</strong> 24 months after project close (audit/performance review).</ListItem>
        <ListItem><strong>Payment/tax records:</strong> 7 years (legal requirement).</ListItem>
        <ListItem><strong>Creator releases/rights windows:</strong> for the license term + 3 years.</ListItem>
      </List>

      <SectionTitle>9) Your Rights</SectionTitle>
      <Paragraph>Depending on your location, you may have rights to access, correct, delete, restrict/object, portability, and to opt out of marketing and certain analytics.</Paragraph>
      <List>
        <ListItem><strong>EU/UK:</strong> rights under General Data Protection Regulation (GDPR)/UK GDPR.</ListItem>
        <ListItem><strong>US states (e.g., CA/CO/CT/VA/UT):</strong> opt out of "sale/share," limit use of sensitive data where applicable, and appeal a decision by emailing privacy@signalandscale.studio with subject "Appeal."</ListItem>
      </List>
      <Paragraph>We verify requests and respond within statutory timelines.</Paragraph>

      <SectionTitle>10) Children's Privacy</SectionTitle>
      <Paragraph>
        Our Services are for business users and are not directed to children under 13 (or the local age of consent). We do not knowingly collect children's data. If you believe a child provided data, contact us to delete it.
      </Paragraph>

      <SectionTitle>11) Controller/Processor Addendum</SectionTitle>
      <Paragraph>
        When we act as your processor (campaign execution), we process personal data only on your documented instructions under our DPA (which includes SCCs and our security commitments). The DPA is available on request at privacy@signalandscale.studio.
      </Paragraph>

      <SectionTitle>12) Updates & Contact</SectionTitle>
      <Paragraph>
        We may update this Policy and will post the new date; where material, we will email active Clients. Continued use after changes means acceptance.
      </Paragraph>
      <Paragraph>
        <strong>Contact:</strong> privacy@signalandscale.studio — Signal and Scale LLC, Minneapolis, MN, USA.
      </Paragraph>

      <SectionTitle>Glossary (quick reference)</SectionTitle>
      <Paragraph>
        Personally Identifiable Information (PII); User-Generated Content (UGC); Customer Acquisition Cost (CAC); Click-Through Rate (CTR); Cost-Per-Click (CPC); Cost-Per-Acquisition (CPA); Return on Ad Spend (ROAS); Cost per Mille (CPM); Two-Factor Authentication (2FA); Data Processing Addendum (DPA); Standard Contractual Clauses (SCCs); General Data Protection Regulation (GDPR); California Consumer Privacy Act/Privacy Rights Act (CCPA/CPRA); Data Privacy Framework (DPF); Spark/Allowlisting; Fair Test/Parity.
      </Paragraph>
    </PageContainer>
  );
};

export default PrivacyPolicy; 