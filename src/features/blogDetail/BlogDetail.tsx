import styled from 'styled-components';
import Search from '../../components/Search';
import BlogDetailContent from './BlogDetailContent';
import BlogDetailRecent from './BlogDetailRecent';

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
`;

export default function BlogDetail() {
  return (
    <Container>
      <Search />
      <Title>Blog Details</Title>
      <BlogContainer>
        <BlogDetailContent />
        <BlogDetailRecent />
      </BlogContainer>
    </Container>
  );
}
