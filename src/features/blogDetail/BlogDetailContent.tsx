import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  flex: 4;
  padding: 50px 25px 50px 100px;
`;

const BlogImage = styled(Image)`
  border-radius: 10px;
  background-color: #d7d7d7;
  width: 100% !important;
  height: auto !important;
  object-fit: cover;
  display: block;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-top: 25px;
`;

const BlogDate = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #738088;
  text-align: center;
  margin-top: 10px;
`;

const Content = styled.p`
  font-size: 24px;
  font-weight: medium;
  color: #8e96a4;
  margin-top: 25px;
  line-height: 1.5;
`;

export default function BlogDetailContent() {
  return (
    <Container>
      <BlogImage
        src="/images/blog/blog-1.jpg"
        alt="Blog 1"
        width={883}
        height={559}
      />
      <Title>Are Mainframes an Indicator of Banking Reliability?</Title>
      <BlogDate>2024-01-01</BlogDate>
      <Content>
        I was on a call with Broadcom last week. A representative from a bank
        was also on the call and talked about how their use of a mainframe
        computer was connected to their commitment to security, reliability, and
        availability for their customers. In an earlier IBM call with some
        banks, they all indicated that their use of the mainframe helped them
        make better decisions, as well. These conversations got me wondering if
        the recent failures of Silicon Valley Bank and First Republic Bank had
        something to do with whether they used mainframes. While this is a small
        sample, neither of the failed banks (according to this report) used
        mainframes, while JPMorgan Chase & Co., the bank that bought First
        Republic, does. There is a decent chance that banks using mainframes
        prioritize low risk, while banks that do not may be more willing to take
        unreasonable risks. With people currently concerned about where to put
        their money safely, one of the questions you should ask is, "Do you use
        a mainframe for your mission-critical applications?" Let's explore the
        relationship between mainframes and banking risks. Then we'll close with
        my Product of the Week, a little device that could allow your smartphone
        battery to last indefinitely. I had doubts, given how the device looked,
        but it does perform as advertised.
      </Content>
    </Container>
  );
}
