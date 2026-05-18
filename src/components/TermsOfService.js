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

const Summary = styled.div`
  border-left: 2px solid ${theme.accent};
  padding: 0.5rem 0 0.5rem 1.25rem;
  margin: 0 0 2.5rem;
  color: ${theme.textMuted};
  font-size: 1rem;
  line-height: 1.6;
`;

const TermsOfService = () => {
  return (
    <PageContainer>
      <BackLink to="/">← Back to Signal &amp; Scale</BackLink>

      <Title>Terms of Service</Title>
      <EffectiveDate>Effective April 26, 2026</EffectiveDate>
      <Paragraph>
        <strong>Entity.</strong> Signal and Scale LLC ("Signal &amp; Scale," "we," "us," "our"), San Francisco, California.
        <br />
        <strong>Contact.</strong> partnerships@signalandscale.studio
      </Paragraph>

      <Summary>
        <strong>The short version.</strong> These Terms govern campaigns we run between brands and creators we represent. We are the intermediary: we source creators, draft briefs, contract on both sides, manage execution, and report on performance. The brand pays Signal &amp; Scale; we pay creators. Content rights flow through our paper. If a campaign doesn't move forward, neither side owes the other anything beyond fees already earned.
      </Summary>

      <SectionTitle>1. About these terms</SectionTitle>
      <Paragraph>
        These Terms apply when you engage us — through a signed Order, an executed Statement of Work (SOW), or written confirmation of a campaign. Together with your Order, they form the agreement between Signal &amp; Scale and the brand engaging us ("Client," "you"). Where an Order conflicts with these Terms, the Order controls.
      </Paragraph>

      <SectionTitle>2. Definitions</SectionTitle>
      <List>
        <ListItem><strong>Services.</strong> Creator sourcing, shortlist curation, brief development, contract execution, campaign management, and performance reporting, as scoped in an Order.</ListItem>
        <ListItem><strong>Creator.</strong> An independent content creator we represent or introduce to you for a campaign.</ListItem>
        <ListItem><strong>Campaign.</strong> A defined scope of work involving one or more Creators, an agreed deliverable set, and a timeline.</ListItem>
        <ListItem><strong>Integration.</strong> Sponsored content placed inside a Creator's video, podcast, newsletter, or other regular publication.</ListItem>
        <ListItem><strong>Roster.</strong> The pool of Creators Signal &amp; Scale has working relationships with at any given time.</ListItem>
        <ListItem><strong>Order / SOW.</strong> A written statement of work — campaign scope, fees, timeline, deliverables, rights — that incorporates these Terms.</ListItem>
        <ListItem><strong>Deliverables.</strong> The Integration, supporting assets, and reporting agreed in an Order.</ListItem>
      </List>

      <SectionTitle>3. What the Services include</SectionTitle>
      <List>
        <ListItem>Sourcing and shortlisting Creators against your ICP and brief.</ListItem>
        <ListItem>Drafting briefs, talking points, and integration outlines (final scripts remain the Creator's editorial property unless otherwise agreed in writing).</ListItem>
        <ListItem>Contracting on both sides — with you for the Campaign, with Creators for the Integration.</ListItem>
        <ListItem>Managing timelines, approvals, and rights windows.</ListItem>
        <ListItem>Providing post-campaign performance reporting against the metrics scoped in the Order.</ListItem>
      </List>

      <SectionTitle>4. What the Services do not include</SectionTitle>
      <Paragraph>
        To set expectations clearly: we do not place or manage paid media, run ad accounts, or hold processor relationships in advertising platforms. We do not produce User-Generated Content (UGC), write final scripts, or direct Creator content beyond the agreed brief. We do not guarantee Creator availability, audience response, or specific business outcomes (see Section 10). We do not act as your employer, agent, or representative for matters outside the Campaigns we run. If you need any of the above, we'll tell you and recommend a partner.
      </Paragraph>

      <SectionTitle>5. Your responsibilities</SectionTitle>
      <List>
        <ListItem>Provide accurate product information, positioning, and Ideal Customer Profile (ICP) details.</ListItem>
        <ListItem>Approve, or give specific feedback on, Creator shortlists within the windows agreed in the Order.</ListItem>
        <ListItem>Review and sign off on integration briefs and final cuts within the windows agreed.</ListItem>
        <ListItem>Provide tracking links, promo codes, or Urchin Tracking Module (UTM) parameters needed for attribution.</ListItem>
        <ListItem>Pay invoices on time per Section 7.</ListItem>
      </List>
      <Paragraph>
        Delays in approvals can move Campaign timelines; we'll communicate when that happens.
      </Paragraph>

      <SectionTitle>6. Orders and SOWs</SectionTitle>
      <Paragraph>
        Each Campaign is captured in an Order or SOW that specifies scope, Creator (or Creator profile), fees, timeline, deliverables, rights window, and reporting. Orders are valid once countersigned. We may decline a Campaign before countersignature for any reason — including conflicts with existing Roster relationships or fit with our Roster's audience.
      </Paragraph>

      <SectionTitle>7. Fees and payment</SectionTitle>
      <List>
        <ListItem><strong>Per-campaign fee.</strong> A flat fee scoped per Campaign, plus pass-through Creator fees with a clearly disclosed margin. Invoiced 50% on Order signature, 50% on delivery, unless otherwise agreed.</ListItem>
        <ListItem><strong>Quarterly retainer.</strong> A fixed fee covering an agreed volume of Campaign capacity, invoiced in advance each quarter.</ListItem>
        <ListItem><strong>Pass-through costs.</strong> Creator fees, production costs, and approved expenses are billed at cost with the margin disclosed in the Order.</ListItem>
        <ListItem><strong>Payment terms.</strong> Net 14 from invoice date unless otherwise agreed. Late payments accrue interest at the lower of 1.5% per month or the maximum rate permitted by law. We may pause active Campaigns when invoices are more than 15 days overdue.</ListItem>
        <ListItem><strong>Taxes.</strong> Fees are exclusive of taxes, which are Client-paid.</ListItem>
      </List>

      <SectionTitle>8. Creator relationships</SectionTitle>
      <Paragraph>
        Signal &amp; Scale is the contracting intermediary between you and Creators. The brand pays Signal &amp; Scale; Signal &amp; Scale pays Creators. Creators sign separate agreements with us for each Campaign. During an active Campaign, you will not contact, contract with, or pay introduced Creators directly except through us. Informal contact (replying to a Creator's social post, attending the same event) is fine; soliciting Campaigns or commercial relationships outside our paper is not — see Section 12.
      </Paragraph>

      <SectionTitle>9. Content rights and licensing</SectionTitle>
      <Paragraph>
        Unless an Order specifies otherwise:
      </Paragraph>
      <List>
        <ListItem>The Creator owns the Integration as published.</ListItem>
        <ListItem>You receive a license to the Integration for the rights window scoped in the Order — typically 30 days of organic in-feed presence on the Creator's channel, plus the right to share or repost on your owned channels for that window.</ListItem>
        <ListItem>Whitelisting, allowlisting, or paid usage of the Integration as ad creative requires an explicit usage extension scoped and priced in the Order.</ListItem>
        <ListItem>Creators retain the right to keep the Integration on their channel after the rights window, subject to disclosure requirements.</ListItem>
      </List>
      <Paragraph>
        You may not edit, repurpose, or use the Integration outside the agreed rights window or scope without a written extension.
      </Paragraph>

      <SectionTitle>10. Performance and attribution</SectionTitle>
      <Paragraph>
        We provide reasonable attribution data — typically views, engagement, click-throughs from tracking links, and conversions where you share back the data — within 14 business days of Campaign close, in the format scoped in the Order.
      </Paragraph>
      <Paragraph>
        We do not guarantee specific business outcomes. Creator marketing depends on factors outside any party's control: audience composition, algorithmic distribution, timing, product fit, and the Integration's reception. We bring our best judgment and Roster relationships to every Campaign, but no metric, return, or pipeline figure is guaranteed.
      </Paragraph>

      <SectionTitle>11. Disclosure and compliance</SectionTitle>
      <Paragraph>
        Every Integration we run complies with Federal Trade Commission (FTC) endorsement guidelines and the Creator's platform-specific disclosure rules. You will not direct Creators to omit or obscure required disclosures, and we will refuse such direction.
      </Paragraph>

      <SectionTitle>12. Non-solicitation</SectionTitle>
      <Paragraph>
        For 12 months after a Creator is introduced to you through Signal &amp; Scale — whether via shortlist, brief, or executed Campaign — you agree not to:
      </Paragraph>
      <List>
        <ListItem>Engage that Creator directly for paid sponsored content;</ListItem>
        <ListItem>Engage that Creator through another agency, intermediary, or representative; or</ListItem>
        <ListItem>Solicit that Creator to leave our Roster.</ListItem>
      </List>
      <Paragraph>
        If you do, you will pay Signal &amp; Scale a fee equal to 30% of the contract value of the engagement, payable within 30 days. This Section survives termination of the Order or these Terms.
      </Paragraph>

      <SectionTitle>13. Confidentiality</SectionTitle>
      <Paragraph>
        Each party will keep the other's non-public information confidential and use it only for the Campaign. Confidential information includes Creator rates, internal product roadmaps, financial data, and Roster details. Standard exceptions apply (publicly available, independently developed, lawfully obtained from a third party). This Section survives termination for three years.
      </Paragraph>

      <SectionTitle>14. Intellectual property</SectionTitle>
      <Paragraph>
        We retain ownership of our Roster, briefs, scoring methodology, and any internal templates we use to run the Services. You retain ownership of your brand, product information, and assets. Each party grants the other a limited license to use the other's marks for the purpose of running the Campaign.
      </Paragraph>

      <SectionTitle>15. Indemnification</SectionTitle>
      <Paragraph>
        Each party will indemnify the other against third-party claims arising from its own breach of these Terms, its negligence, or its willful misconduct. You will additionally indemnify us against claims arising from product defects, regulatory issues with your product, or content you direct us or a Creator to publish that we flagged as risky in writing.
      </Paragraph>

      <SectionTitle>16. Limitation of liability</SectionTitle>
      <Paragraph>
        To the fullest extent permitted by law, neither party will be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits or lost data. Each party's total liability under these Terms is capped at the fees paid or payable under the Order giving rise to the claim during the 12 months preceding the claim. Carve-outs may apply for confidentiality and intellectual-property indemnification.
      </Paragraph>

      <SectionTitle>17. Term and termination</SectionTitle>
      <Paragraph>
        These Terms remain in effect while any Order is active. Either party may terminate an Order on 30 days' written notice; fees for work completed through the termination date are due. We may terminate immediately for non-payment more than 30 days overdue or for a material breach uncured 15 days after written notice. Sections 9, 10, 12, 13, 15, 16, and 18 survive termination.
      </Paragraph>

      <SectionTitle>18. Disputes and governing law</SectionTitle>
      <Paragraph>
        These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. The parties will attempt to resolve disputes through good-faith negotiation. Unresolved disputes will be heard in the state or federal courts located in San Francisco County, California, and each party consents to jurisdiction there. Either party may seek injunctive relief for confidentiality or intellectual-property matters in any court of competent jurisdiction.
      </Paragraph>

      <SectionTitle>19. Changes</SectionTitle>
      <Paragraph>
        We may update these Terms; the new version applies to Orders signed after the update. Material changes will be communicated to active Clients by email at least 30 days before they take effect.
      </Paragraph>

      <SectionTitle>20. Contact</SectionTitle>
      <Paragraph>
        Questions about these Terms: partnerships@signalandscale.studio. Signal and Scale LLC, San Francisco, CA.
      </Paragraph>
    </PageContainer>
  );
};

export default TermsOfService;
