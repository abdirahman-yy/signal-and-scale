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
  transition: all 0.3s ease;
  
  &:hover {
    background: #0a0a0a;
    color: white;
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
`;

const TermsOfService = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal & Scale</BackLink>
      
      <Title>Terms of Service</Title>
      <EffectiveDate>Effective Date: August 21, 2025</EffectiveDate>

      <Paragraph>
        Signal and Scale LLC ("we," "us," or "our") operates signalandscale.studio, providing user-generated content (UGC) services for EdTech companies to reduce customer acquisition costs (CAC) through TikTok Spark and Meta ads. By using our website, consultation forms, or services (collectively, "Services"), you ("User" or "Client") agree to these Terms of Service (ToS). If you do not agree, do not use our Services.
      </Paragraph>

      <SectionTitle>1. Services</SectionTitle>
      <Paragraph>We offer:</Paragraph>
      <List>
        <ListItem><strong>Pilot Programs:</strong> Selfie-style UGC videos and client-funded ad spend, deployed on TikTok Spark/Meta over a short-term period to reduce CAC.</ListItem>
        <ListItem><strong>Retainer Agreements:</strong> Ongoing UGC production, ad management, and KPI reporting (e.g., CAC, click-through rates).</ListItem>
        <ListItem><strong>Consultations:</strong> Free initial calls with EdTech CMOs to discuss pain points (e.g., high CAC) and service benefits.</ListItem>
      </List>
      <Paragraph>Services are subject to availability and our approval. We reserve the right to modify or discontinue Services without notice.</Paragraph>

      <SectionTitle>2. User Obligations</SectionTitle>
      <Paragraph>You agree to:</Paragraph>
      <List>
        <ListItem>Provide accurate information (e.g., name, email, company details) for consultations, pilots, or retainers.</ListItem>
        <ListItem>Be at least 13 years old to use our Services.</ListItem>
        <ListItem>Comply with applicable laws, including CAN-SPAM (no unauthorized outreach), GDPR (data rights), and FERPA (no student data misuse).</ListItem>
        <ListItem>Not misuse Services (e.g., submitting fake consultation forms, reverse-engineering campaign data, or sending spam).</ListItem>
        <ListItem>Not infringe on intellectual property (e.g., using UGC without permission).</ListItem>
      </List>
      <Paragraph>Violations may result in account termination and liability for damages.</Paragraph>

      <SectionTitle>3. Payment Terms</SectionTitle>
      <List>
        <ListItem><strong>Pilot Fees:</strong> Fees for pilot programs are due partially upfront upon signing the Statement of Work (SOW) via DocuSign, with the remainder due upon delivery. Fees include client-funded ad spend.</ListItem>
        <ListItem><strong>Retainer Fees:</strong> Fees for ongoing services are due partially upfront monthly, with the remainder due upon KPI report delivery.</ListItem>
        <ListItem><strong>Payment Method:</strong> Processed via our payment provider, with standard transaction fees (client-covered).</ListItem>
        <ListItem><strong>Performance Credits:</strong> If CAC reduction goals are not met within the agreed period (per final KPI report), clients receive a credit toward future services. No cash refunds.</ListItem>
        <ListItem><strong>Late Payments:</strong> Incur a modest monthly fee; services may be suspended until paid.</ListItem>
      </List>

      <SectionTitle>4. Intellectual Property</SectionTitle>
      <List>
        <ListItem><strong>Client Ownership:</strong> Upon full payment, clients own the IP rights to UGC videos produced under pilots or retainers.</ListItem>
        <ListItem><strong>Creator Agreements:</strong> Creators grant IP rights to clients via DocuSign, ensuring no third-party claims.</ListItem>
        <ListItem><strong>Our Rights:</strong> We retain rights to our website content, templates, and analytics tools (e.g., HubSpot reports). You may not reproduce or distribute these without permission.</ListItem>
        <ListItem><strong>User Content:</strong> You grant us a non-exclusive, royalty-free license to use consultation or campaign data (e.g., CAC metrics, ad goals) for service delivery and analytics.</ListItem>
      </List>

      <SectionTitle>5. Limitations of Liability</SectionTitle>
      <List>
        <ListItem><strong>No Guarantee:</strong> We aim to reduce CAC but do not guarantee results, as outcomes depend on client ad spend, audience, and market conditions.</ListItem>
        <ListItem><strong>Liability Cap:</strong> Our liability is limited to the fees paid for Services. We are not liable for indirect damages (e.g., lost profits).</ListItem>
        <ListItem><strong>Indemnification:</strong> You agree to indemnify us for claims arising from your misuse of Services, inaccurate data, or IP violations.</ListItem>
      </List>

      <SectionTitle>6. Termination</SectionTitle>
      <List>
        <ListItem><strong>By Us:</strong> We may terminate your access for ToS violations (e.g., unauthorized outreach, non-payment) with immediate notice. No refunds for partially completed services.</ListItem>
        <ListItem><strong>By You:</strong> Provide 30 days' written notice (sales@signalandscale.studio) for retainers; no refunds for pilots after start.</ListItem>
        <ListItem><strong>Post-Termination:</strong> Data deletion requests honored per Privacy Policy, except for legally required retention (e.g., payment records).</ListItem>
      </List>

      <SectionTitle>7. Compliance with Laws</SectionTitle>
      <Paragraph>We operate in compliance with:</Paragraph>
      <List>
        <ListItem><strong>CAN-SPAM:</strong> All emails include opt-out footers, no sends after evening hours (Central Time), unsubscribe requests honored within 10 days.</ListItem>
        <ListItem><strong>CCPA/GDPR:</strong> Users have access, correction, and deletion rights (privacy@signalandscale.studio).</ListItem>
        <ListItem><strong>FERPA:</strong> No student data collected; client data protected under strict agreements.</ListItem>
        <ListItem><strong>DPF:</strong> Certified for EU/UK/Switzerland data transfers.</ListItem>
      </List>
      <Paragraph>You agree to comply with these laws when using our Services.</Paragraph>

      <SectionTitle>8. Dispute Resolution</SectionTitle>
      <List>
        <ListItem><strong>Governing Law:</strong> Minnesota law applies.</ListItem>
        <ListItem><strong>Arbitration:</strong> Disputes resolved through binding arbitration in Minneapolis, MN, per American Arbitration Association rules. You waive class action rights.</ListItem>
        <ListItem><strong>Costs:</strong> Each party bears its own arbitration costs, unless otherwise ordered.</ListItem>
      </List>

      <SectionTitle>9. Updates to These Terms</SectionTitle>
      <Paragraph>We may update these ToS to reflect legal or operational changes. Updates will be posted on signalandscale.studio, with email notifications to users (via sales@signalandscale.studio). Continued use after updates constitutes acceptance.</Paragraph>

      <SectionTitle>10. Contact Us</SectionTitle>
      <Paragraph>For questions or notices, contact:</Paragraph>
      <List>
        <ListItem><strong>Email:</strong> sales@signalandscale.studio</ListItem>
        <ListItem><strong>Location:</strong> Signal and Scale LLC, Minneapolis, MN</ListItem>
        <ListItem><strong>Response Time:</strong> Within 30 days</ListItem>
      </List>

      <Paragraph>By using our Services, you agree to these Terms, ensuring a trusted partnership for EdTech UGC solutions.</Paragraph>
    </PageContainer>
  );
};

export default TermsOfService; 