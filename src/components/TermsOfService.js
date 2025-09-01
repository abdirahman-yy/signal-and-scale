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

const Summary = styled.div`
  background: #f0f0f0;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  color: #4a4a4a;
`;

const TermsOfService = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal & Scale</BackLink>
      
      <Title>Terms of Service</Title>
      <EffectiveDate>Effective date: September 1, 2025</EffectiveDate>
      <Paragraph>
        <strong>Entity:</strong> Signal and Scale LLC ("Signal & Scale," "we," "us," "our")<br/>
        <strong>Website:</strong> signalandscale.studio<br/>
        <strong>Contact:</strong> sales@signalandscale.studio
      </Paragraph>

      <Summary>
        <strong>Plain-English summary (non-binding).</strong> We run 14-day pilots to test disciplined User-Generated Content (UGC) against your current ads under a Fair Test (strict parity on budgets, placements, schedule, geo, attribution). We kill weak variants early and fund winners $300–$500 per variant to confirm lift. If we don't beat your current set under parity, we part friends—no retainer obligation. You fund ad spend directly; our fees cover production and operations.
      </Summary>

      <Paragraph>
        <strong>Acronyms:</strong> On first use we spell out each term (e.g., Customer Acquisition Cost (CAC)). A glossary is at the end.
      </Paragraph>

      <SectionTitle>1) Definitions</SectionTitle>
      <List>
        <ListItem><strong>Client ("you")</strong> — the company or individual signing an Order Form/Statement of Work (SOW).</ListItem>
        <ListItem><strong>Services</strong> — creative production, pilot execution, media operations, analysis, and related consulting described in a SOW.</ListItem>
        <ListItem><strong>Deliverables</strong> — UGC assets, edits, reports, and documentation we produce.</ListItem>
        <ListItem><strong>Fair Test / Parity</strong> — same budgets, placements, schedule, geo, and attribution as the control. Any break must be logged; during a break, results are directional only.</ListItem>
        <ListItem><strong>Spark / Allowlisting</strong> — creator-handle permissions that enable paid distribution from a creator's profile (TikTok/Meta).</ListItem>
        <ListItem><strong>Pilot Scorecard</strong> — our workbook logging baseline, parity checks, variant performance, winner funding, and rights windows.</ListItem>
        <ListItem><strong>Win Packet</strong> — proof bundle (baseline, parity log, screenshots of control/best variant/settings, and rights proof).</ListItem>
      </List>

      <SectionTitle>2) Scope of Services</SectionTitle>
      <List>
        <ListItem><strong>Pilots (14 days).</strong> We produce 7–10 Spark-ready UGC videos, ship 4–6 variants/day, run parity-enforced tests in your ad account, conduct 2 ops checks/day, track rights windows (typically 30 days), and maintain the Pilot Scorecard.</ListItem>
        <ListItem><strong>Retainers (monthly).</strong> Ongoing throughput (12–24 variants/week), parity enforcement, weekly readouts, and a monthly deep dive.</ListItem>
        <ListItem><strong>Exclusions.</strong> Unless listed in the SOW, Services exclude ad spend, CRM/analytics implementation, landing-page build, legal review, localization, or community management.</ListItem>
        <ListItem><strong>Availability.</strong> Services are capacity-dependent; features may change with notice.</ListItem>
      </List>

      <SectionTitle>3) Client Responsibilities</SectionTitle>
      <Paragraph>
        You will: (a) grant required ad-account and tracking access; (b) maintain a stable control; (c) fund ad platforms directly; and (d) provide approvals/feedback within 2 business days.
      </Paragraph>

      <SectionTitle>4) Orders, Changes</SectionTitle>
      <Paragraph>
        Each engagement requires a signed Order Form/SOW (Deliverables, timeline, fees, Spark/allowlisting rights). Changes (new geos, reshoots, extra creators, new formats) require a written change order and may affect fees and timing.
      </Paragraph>

      <SectionTitle>5) Fees & Payment (Model: No-Win, No-Retainer)</SectionTitle>
      <List>
        <ListItem><strong>Pilots:</strong> 50% non-refundable deposit at signature; 50% balance Net 7 after the Day-14 readout, regardless of outcome.</ListItem>
        <ListItem><strong>Optional nudge:</strong> 10% credit (capped at $2,000) toward the first retainer month if started within 30 days of the readout.</ListItem>
        <ListItem><strong>Retainers:</strong> First month due at signature; then monthly in advance.</ListItem>
        <ListItem><strong>Ad spend:</strong> Client pays platforms directly (not part of our fees).</ListItem>
        <ListItem><strong>Late payments:</strong> Lesser of 1.5%/month or the lawful maximum; we may suspend Services after 5 business days' notice.</ListItem>
        <ListItem><strong>Taxes/processor fees:</strong> Client-paid.</ListItem>
      </List>

      <SectionTitle>6) Parity, Kill/Promote, Winner Funding, Win Gate</SectionTitle>
      <List>
        <ListItem><strong>Kill/Promote rules.</strong> We kill a variant if Click-Through Rate (CTR) is &lt;0.5× control after $150 in spend or Customer Acquisition Cost (CAC) is &gt;1.3× control after $300. We promote when CTR &gt;1.3× control.</ListItem>
        <ListItem><strong>Winner Funding Threshold.</strong> To confirm performance (CTR/Cost-Per-Click (CPC)), promising variants are additionally funded $300–$500 per variant (adjusted for Cost per Mille (CPM)/CPC, objective, and geo; specified in the SOW). If Client restricts funding below the agreed threshold or parity breaks, results are directional only and do not qualify as a "win."</ListItem>
        <ListItem><strong>Win Gate (what counts as a win).</strong> Either +30% CTR vs control held ≥72h, or −20% Customer Acquisition Cost (CAC) vs control, and ≥2 variants funded to the Winner Funding Threshold.</ListItem>
      </List>

      <SectionTitle>7) Ownership, Licenses, Publicity</SectionTitle>
      <List>
        <ListItem><strong>Client IP.</strong> You retain rights in your brands, content, and data.</ListItem>
        <ListItem><strong>Deliverables.</strong> Upon full payment, you receive ownership of commissioned raw footage (unless a creator agreement says otherwise) and a perpetual, worldwide license to edited exports for paid and organic use per the SOW.</ListItem>
        <ListItem><strong>Creator releases.</strong> We secure written releases (likeness/voice) and Spark/allowlisting. Spark windows are typically 30 days per asset per handle, renewable (limits appear in the SOW).</ListItem>
        <ListItem><strong>Our tools.</strong> We retain templates, scorecards, and processes; you receive an internal-use license to reports.</ListItem>
        <ListItem><strong>Publicity.</strong> We may reference anonymized performance unless you opt out in writing. Named logo/case study use requires your written consent.</ListItem>
      </List>

      <SectionTitle>8) Confidentiality</SectionTitle>
      <Paragraph>
        Mutual confidentiality: use only to perform the contract; protect with reasonable care; standard exceptions (public, independently developed, or lawfully obtained). Provide notice of compelled disclosure where lawful.
      </Paragraph>

      <SectionTitle>9) Data Protection & Platforms</SectionTitle>
      <List>
        <ListItem><strong>Roles.</strong> For website/outreach we are a data controller. In ad accounts we act as your processor under a Data Processing Addendum (DPA) available on request.</ListItem>
        <ListItem><strong>Transfers.</strong> We use Standard Contractual Clauses (SCCs) where required. If we later participate in the Data Privacy Framework (DPF), we'll update our Privacy Policy.</ListItem>
        <ListItem><strong>Subprocessors.</strong> We use vetted providers and remain responsible for them.</ListItem>
        <ListItem><strong>Platform dependency.</strong> Neither party is liable for platform actions (suspensions, policy rejections, delivery changes).</ListItem>
      </List>

      <SectionTitle>10) Warranties & Disclaimers</SectionTitle>
      <Paragraph>
        Each party warrants it has authority to enter this agreement. Client warrants its products, claims, targeting, and data comply with law and platform rules. Except as stated, Services are provided "as is"; we disclaim implied warranties (merchantability, fitness, non-infringement).
      </Paragraph>

      <SectionTitle>11) Indemnification</SectionTitle>
      <List>
        <ListItem><strong>By Client:</strong> claims arising from Client products, claims, offers, targeting, unlawful content, or failure to obtain rights.</ListItem>
        <ListItem><strong>By Signal & Scale:</strong> claims that our Deliverables (excluding Client materials) infringe third-party intellectual property or publicity rights.</ListItem>
      </List>

      <SectionTitle>12) Limitation of Liability</SectionTitle>
      <Paragraph>
        No indirect, incidental, special, consequential, or punitive damages or lost profits. Each party's aggregate liability is capped at fees paid or payable for the prior three (3) months under the applicable SOW. (Carve-outs may apply for confidentiality and IP indemnity.)
      </Paragraph>

      <SectionTitle>13) Term, Termination, Suspension</SectionTitle>
      <List>
        <ListItem><strong>Term.</strong> These Terms apply while any SOW is active.</ListItem>
        <ListItem><strong>Convenience (retainers).</strong> Either party may terminate with 30 days' written notice (fees already paid are non-refundable).</ListItem>
        <ListItem><strong>Cause.</strong> Either party may terminate for material breach not cured within 10 days after notice.</ListItem>
        <ListItem><strong>Suspension.</strong> We may suspend Services for non-payment, security risk, or legal violation.</ListItem>
        <ListItem><strong>Effect.</strong> Unpaid fees become due immediately; we deliver paid assets in progress.</ListItem>
      </List>

      <SectionTitle>14) Non-Solicitation (Creators)</SectionTitle>
      <Paragraph>
        During the engagement and for 6 months after, Client will not knowingly solicit creators we introduce for direct work in a way that circumvents our fees, unless permitted in the SOW.
      </Paragraph>

      <SectionTitle>15) Dispute Resolution</SectionTitle>
      <Paragraph>
        Governing law: Minnesota, USA (conflict-of-laws excluded). Disputes are resolved by binding arbitration in Minneapolis, MN under American Arbitration Association (AAA) Commercial Rules. No class actions. Either party may seek injunctive relief for IP/confidentiality in court, and small-claims court remains available.
      </Paragraph>

      <SectionTitle>16) Changes to These Terms</SectionTitle>
      <Paragraph>
        We may update these Terms for legal or operational reasons. We'll post the new effective date and email active Clients. Continued use means acceptance.
      </Paragraph>

      <SectionTitle>Glossary (quick reference)</SectionTitle>
      <Paragraph>
        User-Generated Content (UGC); Customer Acquisition Cost (CAC); Click-Through Rate (CTR); Cost-Per-Click (CPC); Cost-Per-Acquisition (CPA); Return on Ad Spend (ROAS); Cost per Mille (CPM); Service Level Agreement (SLA); Statement of Work (SOW); Master Services Agreement (MSA); Data Processing Addendum (DPA); Standard Contractual Clauses (SCCs); General Data Protection Regulation (GDPR); California Consumer Privacy Act/Privacy Rights Act (CCPA/CPRA); Personally Identifiable Information (PII); Urchin Tracking Module (UTM) parameters; Spark/Allowlisting; Fair Test/Parity; Win Packet.
      </Paragraph>
    </PageContainer>
  );
};

export default TermsOfService; 