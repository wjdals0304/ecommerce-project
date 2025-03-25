import { Blog } from '@/types/blog';
import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';

interface BlogContentProps {
  blog: Blog;
}

function BlogContent({ blog }: BlogContentProps) {
  const { id, title, content, image, createdAt } = blog;

  return (
    <BlogItem key={id} onClick={() => router.push(`/blog/${id}`)}>
      <BlogImage src={image} alt={title} width={380} height={229} />
      <BlogDate>{createdAt.split('T')[0]}</BlogDate>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{content}</BlogDescription>
      <ReadMore>자세히 보기</ReadMore>
    </BlogItem>
  );
}

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const BlogImage = styled(Image)`
  border-radius: 10px;
  background-color: #d7d7d7;
  width: 100%;
  height: auto;
  max-width: 100%;
`;

const BlogDate = styled.span`
  font-size: 14px;
  font-weight: medium;
  color: #738088;
  margin-top: 25px;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-top: 10px;
  height: 50px;
`;

const BlogDescription = styled.p`
  font-size: 14px;
  font-weight: medium;
  color: #8e96a4;
  margin-top: 5px;
`;

const ReadMore = styled.button`
  font-size: 18px;
  font-weight: medium;
  color: #ffffff;
  background: #001c30;
  border: none;
  border-radius: 25px;
  margin-top: 25px;
  padding: 10px 151px;
  width: 100%;
  height: 39px;
  white-space: nowrap;
`;

export default BlogContent;
