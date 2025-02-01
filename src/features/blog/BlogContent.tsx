import styled from 'styled-components';
import Image from 'next/image';

function BlogContent() {
  return (
    <>
      <BlogContainer>
        <BlogItem>
          <BlogImage
            src="/images/blog/blog-1.jpg"
            alt="Blog 1"
            width={380}
            height={229}
          />
          <BlogDate>08 June 2024 Rodrigo</BlogDate>
          <BlogTitle>TI gets $4.6bn in Chips Act funding</BlogTitle>
          <BlogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum ultrices velit, in facilisis nisl luctus a. Donec felis
            ipsum, eleifend lacinia fringilla sit amet, dictum eu...{' '}
          </BlogDescription>
          <ReadMore>Read More</ReadMore>
        </BlogItem>
      </BlogContainer>
    </>
  );
}

const BlogContainer = styled.div`
  width: 380px;
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogImage = styled(Image)`
  border-radius: 10px;
  background-color: #d7d7d7;
  width: 100%;
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
  text-align: center;
`;

export default BlogContent;
