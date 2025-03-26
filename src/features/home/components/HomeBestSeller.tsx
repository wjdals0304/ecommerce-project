import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { BestSeller } from '@/types/home';
import Image from 'next/image';
import Link from 'next/link';
import rightIcon from 'public/images/home/rightIcon.svg';
import styled from 'styled-components';

const Section = styled.section`
  margin: 50px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const ViewAllLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;

const ProductContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 25px;
`;

const ProductLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  flex: 1;
`;

const Product = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  height: 148px;
  display: flex;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled(Image)`
  background-color: #d9d9d9;
  border-radius: 15px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 13px;
`;

const Category = styled.span`
  color: #666;
  font-size: 14px;
`;

const ProductTitle = styled.span`
  font-weight: bold;
  margin-top: 4px;
  font-size: 18px;
`;

const ShopNowButton = styled.button`
  background-color: #0a142f;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 15px;
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

const NewProduct = styled.div`
  background-color: #fff;
  padding: 33px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: none;
  width: 492px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NewArrivalTag = styled.span`
  margin-top: 30px;
  font-size: 32px;
  color: #000;
  margin-bottom: 10px;
`;

const NewProductTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  line-height: 1.2;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TitleLine = styled.span`
  display: block;
  white-space: nowrap;
`;

const ProductLink = styled(Link)`
  flex: none;
  width: 349px;
`;

interface HomeBestSellerProps {
  bestSellers: BestSeller[];
}

function HomeBestSeller({ bestSellers }: HomeBestSellerProps) {
  return (
    <Section>
      <TitleContainer>
        <Title>카테고리 별 베스트셀러</Title>
        <ViewAllLink href="/shop">
          더보기
          <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
        </ViewAllLink>
      </TitleContainer>
      <ProductContainer>
        <ProductLeft>
          {bestSellers.map(bestSeller => {
            const { id, images, name } = bestSeller.product;
            const { categoryName } = bestSeller;

            return (
              <ProductLink href={`${API_ENDPOINTS.PRODUCT}/${id}`} key={id}>
                <Product>
                  <ProductImage
                    src={images[0]}
                    alt={name}
                    width={118}
                    height={118}
                  />
                  <ProductContent>
                    <Category>{categoryName}</Category>
                    <ProductTitle>{name}</ProductTitle>
                    <ShopNowButton>지금 구매</ShopNowButton>
                  </ProductContent>
                </Product>
              </ProductLink>
            );
          })}
        </ProductLeft>
        <NewProduct>
          <NewArrivalTag>신상품</NewArrivalTag>
          <NewProductTitle>
            <TitleLine>더 쉽고 멋진</TitleLine>
            <TitleLine>삶을 만들어요</TitleLine>
          </NewProductTitle>
        </NewProduct>
      </ProductContainer>
    </Section>
  );
}

export default HomeBestSeller;
