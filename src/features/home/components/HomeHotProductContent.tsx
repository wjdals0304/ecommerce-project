import styled from 'styled-components';
import Image from 'next/image';
import { HotProduct } from '@/types/home';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';
import Link from 'next/link';
import { API_ENDPOINTS } from '@/config/apiEndPoint';

interface HomeHotProductContentProps {
  hotProducts: HotProduct[];
}

export default function HomeHotProductContent({
  hotProducts,
}: HomeHotProductContentProps) {
  return (
    <Content>
      {hotProducts.map(hotProduct => {
        const { id, images, name, rating, soldCount, price } = hotProduct;

        return (
          <ProductItem key={id}>
            <Link href={`${API_ENDPOINTS.PRODUCT}/${id}`}>
              <ImageContainer>
                <ProductImage
                  src={images[0]}
                  alt={name}
                  width={250}
                  height={250}
                />
                <Rating>
                  <Image src={starIcon} alt="star" width={18} height={18} />
                  <span>{rating}</span>
                </Rating>
              </ImageContainer>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemSold>{soldCount}개 판매</ItemSold>
                <BuySection>
                  <Price>{price.toLocaleString()}원</Price>
                  <BuyButton>구매하기</BuyButton>
                </BuySection>
              </ItemContent>
            </Link>
          </ProductItem>
        );
      })}
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 25px;
  border-radius: 15px;
  height: 447px;
`;

const ProductItem = styled.div`
  width: 25%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled(Image)`
  background-color: #d7d7d7;
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
  display: block;
`;

const Rating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 25px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const ItemSold = styled.span`
  font-size: 14px;
  color: #888888;
  margin-top: 5px;
`;

const BuySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ee9322;
`;

const BuyButton = styled.span`
  background-color: #001c30;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  width: fit-content;
  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #0a142f;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
