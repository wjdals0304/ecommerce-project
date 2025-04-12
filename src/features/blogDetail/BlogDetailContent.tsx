import styled from 'styled-components';
import Image from 'next/image';
import { Blog } from '@/shared/types/blog';

const Container = styled.div`
  flex: 4;
  padding: 50px 25px 50px 0;
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

interface BlogDetailContentProps {
  blog: Blog;
}

export default function BlogDetailContent({ blog }: BlogDetailContentProps) {
  const { title, content, image, createdAt } = blog;

  return (
    <Container>
      <BlogImage src={image} alt={title} width={883} height={559} />
      <Title>{title}</Title>
      <BlogDate>{createdAt.split('T')[0]}</BlogDate>
      <Content>{content}</Content>
    </Container>
  );
}
