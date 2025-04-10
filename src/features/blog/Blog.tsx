import styled from 'styled-components';
import Search from '../../components/Search';
import BlogContent from './BlogContent';
import { BlogResponse } from '@/types/blog';

interface BlogProps {
  blogPosts: BlogResponse;
}

function Blog({ blogPosts }: BlogProps) {
  return (
    <Container>
      <Search />
      <Title>블로그</Title>
      <BlogContainer>
        {blogPosts.blogs.map(blog => (
          <BlogContent key={blog.id} blog={blog} />
        ))}
      </BlogContainer>
    </Container>
  );
}

export default Blog;

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1240px;
  gap: 50px;
  margin: auto;
  padding: 50px 0;
`;
