import styled from 'styled-components';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import router from 'next/router';

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
  cursor: pointer;
`;

const BlogImage = styled(Image)`
  border-radius: 15px;
  background-color: #d7d7d7;
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

interface BlogDetailRecentProps {
  recentPosts: Blog[];
}

export default function BlogDetailRecent({
  recentPosts,
}: BlogDetailRecentProps) {
  return (
    <Container>
      <Title>최근 게시글</Title>
      <BlogContainer>
        {recentPosts.map(({ id, title, image, createdAt }) => (
          <BlogItem key={id} onClick={() => router.push(`/blog/${id}`)}>
            <BlogImage src={image} alt={title} width={91} height={91} />
            <BlogContent>
              <BlogTitle>{title}</BlogTitle>
              <BlogDate>{createdAt.split('T')[0]}</BlogDate>
            </BlogContent>
          </BlogItem>
        ))}
      </BlogContainer>
    </Container>
  );
}
