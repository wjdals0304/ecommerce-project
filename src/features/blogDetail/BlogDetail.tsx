import styled from 'styled-components';
import Search from '../../components/Search';
import BlogDetailContent from './BlogDetailContent';
import BlogDetailRecent from './BlogDetailRecent';
import { BlogDetail as BlogDetailType } from '@/types/blog';
const Container = styled.div`
  background-color: #f5f7f8;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
`;

const BlogContainer = styled.div`
  display: flex;
  gap: 25px;
  width: 1240px;
  margin: 0 auto;
`;

interface BlogDetailProps {
  blogDetailData: BlogDetailType;
}

export default function BlogDetail({ blogDetailData }: BlogDetailProps) {
  const { blog, recentPosts } = blogDetailData;

  return (
    <Container>
      <Search />
      <Title>블로그 상세</Title>
      <BlogContainer>
        <BlogDetailContent blog={blog} />
        <BlogDetailRecent recentPosts={recentPosts} />
      </BlogContainer>
    </Container>
  );
}
