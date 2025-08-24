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
  background: #0a0a0a;
  min-height: 100vh;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
    color: white;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const EffectiveDate = styled.p`
  color: #a0a0a0;
  font-style: italic;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #d0d0d0;
`;

const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #d0d0d0;
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal & Scale</BackLink>
      
      <Title>Privacy Policy</Title>
      <EffectiveDate>Effective Date: August 21, 2025</EffectiveDate>

      <Paragraph>
        Signal and Scale LLC ("we," "us," or "our") operates signalandscale.studio, providing user-generated content (UGC) services for EdTech companies to reduce customer acquisition costs (CAC) through TikTok Spark and Meta ads. We are committed to protecting your privacy and complying with applicable data protection laws, including the California Consumer Privacy Act (CCPA), General Data Protection Regulation (GDPR), CAN-SPAM Act, and Family Educational Rights and Privacy Act (FERPA) for EdTech-related data. This Privacy Policy explains how we collect, use, share, and protect your personal information.
      </Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>We collect minimal personal information necessary for our services:</Paragraph>
      <List>
        <ListItem><strong>Contact Information:</strong> Name, email address, company name, and job title provided during consultation sign-ups, email outreach responses, or service agreements.</ListItem>
        <ListItem><strong>Business Information:</strong> Details related to your organization (e.g., employee count, ad spend, CAC metrics) shared during consultations or logged in HubSpot for campaign tracking.</ListItem>
        <ListItem><strong>Payment Information:</strong> Billing details processed securely through our payment provider for service fees.</ListItem>
        <ListItem><strong>Technical Data:</strong> IP addresses, browser types, and device information collected via HubSpot analytics or website cookies to improve user experience.</ListItem>
        <ListItem><strong>Marketing Data:</strong> Preferences and responses from email outreach (e.g., Apollo/Instantly campaigns) or LinkedIn DMs, including opt-out requests.</ListItem>
      </List>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>We use your information to:</Paragraph>
      <List>
        <ListItem>Provide and manage UGC services, including pilot programs and ongoing agreements.</ListItem>
        <ListItem>Schedule and conduct consultations with EdTech CMOs (e.g., via Zoom or Calendly).</ListItem>
        <ListItem>Execute email outreach and track responses in HubSpot.</ListItem>
        <ListItem>Process payments securely through our payment provider.</ListItem>
        <ListItem>Comply with legal obligations (e.g., CAN-SPAM opt-outs, GDPR data rights).</ListItem>
        <ListItem>Analyze website performance and campaign effectiveness using HubSpot analytics.</ListItem>
        <ListItem>Improve our services through aggregated, anonymized data.</ListItem>
      </List>

      <SectionTitle>3. How We Share Your Information</SectionTitle>
      <Paragraph>We share your information only as necessary:</Paragraph>
      <List>
        <ListItem><strong>Service Providers:</strong> With trusted third parties (e.g., Google Workspace for outreach email accounts, Apollo/Instantly for email campaigns, HubSpot for lead tracking, payment providers) under strict data protection agreements.</ListItem>
        <ListItem><strong>Virtual Assistants (VAs):</strong> With our Growth VA for outreach and AdOps/CreatorOps VA for creator briefs, limited to operational needs (e.g., lead names, emails) via secure tools (Slack, DocuSign).</ListItem>
        <ListItem><strong>Creators:</strong> With UGC creators for brief creation, sharing only campaign-specific data (e.g., ad goals, no sensitive client data).</ListItem>
        <ListItem><strong>Legal Compliance:</strong> To comply with legal requests (e.g., government inquiries) or protect our rights, with minimal disclosure.</ListItem>
        <ListItem><strong>Business Transfers:</strong> In case of mergers or acquisitions, subject to Data Privacy Framework (DPF) Principles for EU/UK/Switzerland data.</ListItem>
      </List>
      <Paragraph>We do not sell, rent, or share your data for marketing purposes beyond our services.</Paragraph>

      <SectionTitle>4. Data Security</SectionTitle>
      <Paragraph>We implement industry-standard safeguards, including:</Paragraph>
      <List>
        <ListItem><strong>Encryption:</strong> Data in transit (e.g., via HTTPS) and at rest (e.g., in HubSpot, payment systems).</ListItem>
        <ListItem><strong>Access Controls:</strong> Two-factor authentication (2FA) on Google Workspace accounts (e.g., outreach and sales emails), with restricted VA access (user-level only).</ListItem>
        <ListItem><strong>Email Security:</strong> SPF/DKIM/DMARC for outreach email accounts to ensure high deliverability and prevent phishing.</ListItem>
        <ListItem><strong>Monitoring:</strong> Daily reviews of VA actions (e.g., email drafts, Apollo/Instantly logs) to detect unauthorized access.</ListItem>
      </List>
      <Paragraph>No internet transmission is fully secure, but we strive to protect your data.</Paragraph>

      <SectionTitle>5. Your Data Protection Rights</SectionTitle>
      <Paragraph>Depending on your location (e.g., California, EU), you have the following rights:</Paragraph>
      <List>
        <ListItem><strong>Access:</strong> Request a copy of your personal data (e.g., consultation sign-up details).</ListItem>
        <ListItem><strong>Correction:</strong> Update inaccurate or incomplete data.</ListItem>
        <ListItem><strong>Deletion:</strong> Request deletion of your data (e.g., after opt-out or service completion), subject to legal retention requirements. Upon receiving a deletion request at privacy@signalandscale.studio, we will process it within 30 days and send an email confirmation detailing the data deleted (e.g., contact information, consultation records), unless legally required to retain certain records (e.g., payment data).</ListItem>
        <ListItem><strong>Opt-Out:</strong> Unsubscribe from email outreach (via footer links in emails) or opt out of cookies (via website cookie consent tool).</ListItem>
        <ListItem><strong>Non-Discrimination:</strong> We do not discriminate against users exercising these rights.</ListItem>
      </List>
      <Paragraph>To exercise your rights, contact us at privacy@signalandscale.studio. We respond within 30 days (CCPA/GDPR compliant).</Paragraph>

      <SectionTitle>6. Cookies and Tracking</SectionTitle>
      <Paragraph>We use cookies and HubSpot analytics to:</Paragraph>
      <List>
        <ListItem>Track website interactions (e.g., consultation form clicks).</ListItem>
        <ListItem>Measure campaign performance (e.g., email open rates).</ListItem>
        <ListItem>Improve user experience (e.g., site navigation).</ListItem>
      </List>
      <Paragraph>You can opt out of cookies via our website's cookie consent tool or browser settings. Disabling cookies may limit functionality. We obtain explicit consent for non-essential cookies in compliance with GDPR Article 6(1)(a).</Paragraph>

      <SectionTitle>7. Data Retention</SectionTitle>
      <Paragraph>We retain data only as long as necessary:</Paragraph>
      <List>
        <ListItem><strong>Consultation Data:</strong> Deleted 30 days after opt-out or service completion, unless opted in for ongoing services.</ListItem>
        <ListItem><strong>Payment Data:</strong> Retained per our payment provider's policies (e.g., for tax purposes).</ListItem>
        <ListItem><strong>Campaign Data:</strong> Aggregated/anonymized after 90 days for analytics.</ListItem>
      </List>

      <SectionTitle>8. Compliance with Laws</SectionTitle>
      <Paragraph>We comply with:</Paragraph>
      <List>
        <ListItem><strong>CAN-SPAM:</strong> Opt-out footers in all emails, no sends after evening hours (Central Time), unsubscribe requests honored within 10 days.</ListItem>
        <ListItem><strong>CCPA:</strong> California residents can request access/deletion (privacy@signalandscale.studio).</ListItem>
        <ListItem><strong>GDPR:</strong> EU residents have access, correction, deletion, and data portability rights.</ListItem>
        <ListItem><strong>FERPA:</strong> No student data collected; EdTech client data (e.g., campaign metrics) protected under strict agreements.</ListItem>
        <ListItem><strong>DPF:</strong> Certified for EU/UK/Switzerland data transfers to the U.S.</ListItem>
      </List>

      <SectionTitle>9. Third-Party Links</SectionTitle>
      <Paragraph>Our website may link to third-party sites (e.g., TikTok, Meta). We are not responsible for their privacy practices. Review their policies before engaging.</Paragraph>

      <SectionTitle>10. Updates to This Policy</SectionTitle>
      <Paragraph>We may update this Privacy Policy to reflect legal or operational changes. Updates will be posted on signalandscale.studio, with email notifications to users (e.g., via sales@signalandscale.studio). Continued use after updates constitutes acceptance.</Paragraph>

      <SectionTitle>11. Contact Us</SectionTitle>
      <Paragraph>For questions or to exercise your rights, contact:</Paragraph>
      <List>
        <ListItem><strong>Email:</strong> privacy@signalandscale.studio</ListItem>
        <ListItem><strong>Location:</strong> Signal and Scale LLC, Minneapolis, MN</ListItem>
        <ListItem><strong>Response Time:</strong> Within 30 days</ListItem>
      </List>

      <Paragraph>This Privacy Policy ensures transparency, protects your data, and supports our mission to deliver trusted UGC services.</Paragraph>
    </PageContainer>
  );
};

export default PrivacyPolicy; 