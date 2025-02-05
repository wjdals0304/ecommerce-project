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

export default function ShopProductBuy() {
  const [mainImage, setMainImage] = useState('메인이미지.jpg');
  const images = ['이미지1.jpg', '이미지2.jpg', '이미지3.jpg', '이미지4.jpg'];

  return (
    <Container>
      <ProductImage
        src={mainImage}
        alt="상품 메인 이미지"
        width={595}
        height={607.5}
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
