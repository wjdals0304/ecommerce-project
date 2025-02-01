import styled from 'styled-components';
import Search from '../../components/Search';
import BlogContent from './BlogContent';

function Blog() {
  return (
    <Container>
      <Search />
      <Title>Blog</Title>
      <BlogContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
          <BlogContent key={item} />
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
  justify-content: space-between;
  gap: 50px;
  padding: 50px 100px;
`;
