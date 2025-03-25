import rightIcon from 'public/images/home/rightIcon.svg';
import Image from 'next/image';
import styled from 'styled-components';
import { LatestBlog } from '@/types/home';
import Link from 'next/link';

interface HomeBlogProps {
  latestBlogs: LatestBlog[];
}

function HomeBlog({ latestBlogs }: HomeBlogProps) {
  return (
    <BlogContainer>
      <BlogTitle>
        <TitleText>최신 블로그</TitleText>
        <ViewAll href="/blog">
          더보기{' '}
          <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
        </ViewAll>
      </BlogTitle>
      <BlogContents>
        {latestBlogs.map(latestBlog => {
          const { id, image, title, createdAt } = latestBlog;

          return (
            <BlogContent key={id}>
              <Link href={`/blog/${id}`}>
                <BlogItem>
                  <BlogImage src={image} alt={title} width={396} height={229} />
                  <ItemContent>
                    <ItemDate>{createdAt}</ItemDate>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemButton>더보기</ItemButton>
                  </ItemContent>
                </BlogItem>
              </Link>
            </BlogContent>
          );
        })}
      </BlogContents>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  margin: auto;
  padding: 80px 0;
`;

const BlogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const ViewAll = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;

const BlogContents = styled.div`
  display: flex;
  gap: 25px;
`;

const BlogContent = styled.div``;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  width: 100%;
  max-width: 396px;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled(Image)`
  object-fit: cover;
  background-color: #d7d7d7;
  border-radius: 8px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;
`;

const ItemDate = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

const ItemTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
`;

const ItemButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #fff;
  padding: 8px 24px;
  border-radius: 20px;
  border: none;
  margin-top: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #333;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default HomeBlog;
