import styled from 'styled-components';
import ShopProductImage from './ShopProductImage';
import {useState} from 'react';
import ShopProductDesc from './ShopProductDesc';
import SearchBar from '../../components/Search';

const Container = styled.div`
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const ShopSection = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 15px auto;
  display: block;
`;

const ShopProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 50px auto;
`;

export default function ShopDetail() {
  const [mainImage, setMainImage] = useState('메인이미지.jpg');

  return (
    <Container>
      <SearchBar />
      <InnerContainer>
        <ShopSection>Shop</ShopSection>
        <ShopProductContainer>
          <ShopProductImage
            images={[
              '이미지1.jpg',
              '이미지2.jpg',
              '이미지3.jpg',
              '이미지4.jpg',
            ]}
            mainImage={mainImage}
            onImageSelect={image => setMainImage(image)}
          />
          <ShopProductDesc />
        </ShopProductContainer>
      </InnerContainer>
    </Container>
  );
}
