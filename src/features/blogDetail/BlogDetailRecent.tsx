import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;

const BlogItem = styled.div`
  display: flex;
  gap: 15px;
`;

const BlogImage = styled(Image)`
  border-radius: 15px;
  background-color: #d7d7d7;
  width: 91px !important;
  height: 91px !important;
  object-fit: cover;
  display: block;
`;

const BlogTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: #738088;
  margin-top: 10px;
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 100px 13px 15px;
  gap: 10px;
`;
// padding 이렇게 하는게 맞는지 확인 필요

export default function BlogDetailRecent() {
  return (
    <Container>
      <Title>Recent Posts</Title>
      <BlogContainer>
        {[1, 2, 3, 4, 5].map(item => (
          <BlogItem key={item}>
            <BlogImage
              src="/images/blog/blog-1.jpg"
              alt="Blog 1"
              width={91}
              height={91}
            />
            <BlogContent>
              <BlogTitle>TI gets $4.6bn in Chips Act funding</BlogTitle>
              <BlogDate>08 June 2024 Rodrigo</BlogDate>
            </BlogContent>
          </BlogItem>
        ))}
      </BlogContainer>
    </Container>
  );
}
