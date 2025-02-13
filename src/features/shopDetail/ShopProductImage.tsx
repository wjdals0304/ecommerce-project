import styled from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
  width: 595px;
  height: auto;
`;

const ProductImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  display: block;
  background-color: #d7d7d7;
  border-radius: 15px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 25px;
`;

const Thumbnail = styled.img`
  border-radius: 14px;
  cursor: pointer;
  object-fit: cover;
  display: block;
  background-color: #d7d7d7;

  &:hover {
    opacity: 0.8;
  }
`;

export default function ShopProductImage({images}: {images: string[]}) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Container>
      <ProductImage
        src={mainImage}
        alt="상품 메인 이미지"
        width={595}
        height={400}
      />
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`상품 이미지 ${index + 1}`}
            width={131}
            height={131}
            onClick={() => setMainImage(image)}
          />
        ))}
      </ThumbnailContainer>
    </Container>
  );
}
