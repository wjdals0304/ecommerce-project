import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { FlashDeal } from '@/shared/types/home';
import { postRequest } from '@/shared/lib/apiClient';
import Image from 'next/image';
import Link from 'next/link';
import bagIcon from 'public/images/home/bag.svg';
import { toast } from 'react-toastify';
import styled from 'styled-components';
interface handleAddToCartProps {
  event: React.MouseEvent<HTMLButtonElement>;
  id: number;
}

interface HomePromoContentDealProps {
  flashDeal: FlashDeal;
}

async function handleAddToCart({ event, id }: handleAddToCartProps) {
  try {
    event.preventDefault();
    event.stopPropagation();

    await postRequest({
      url: API_ENDPOINTS.CART_ADD,
      data: {
        productId: id,
      },
    });
    toast.success('장바구니에 추가되었습니다!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
    });
  } catch (error) {
    console.error(error);
  }
}

export default function HomePromoContentDeal({
  flashDeal,
}: HomePromoContentDealProps) {
  const { id, images, name, originalPrice, price, stock, soldCount } =
    flashDeal;

  return (
    <ProductLink href={`${API_ENDPOINTS.PRODUCT}/${id}`} key={id}>
      <Product>
        <ProductImage>
          <Image src={images[0]} alt={name} width={149} height={200} />
        </ProductImage>
        <ProductInfo>
          <ProductTitle>{name}</ProductTitle>
          <PriceContainer>
            <OriginalPrice>{originalPrice.toLocaleString()}원</OriginalPrice>
            <SalePrice>{price.toLocaleString()}원</SalePrice>
          </PriceContainer>
          <Availability>
            재고: <Available>{stock}</Available>
          </Availability>
          <ProgressContainer>
            <ProgressBar>
              <ProgressFill>
                <ItemsSold>{soldCount}개 판매</ItemsSold>
              </ProgressFill>
            </ProgressBar>
          </ProgressContainer>
          <ButtonGroup>
            <AddToCart onClick={event => handleAddToCart({ event, id })}>
              <Image src={bagIcon} alt="bag" width={16} height={16} />
              장바구니
            </AddToCart>
          </ButtonGroup>
        </ProductInfo>
      </Product>
    </ProductLink>
  );
}

const ProductLink = styled(Link)`
  border-radius: 15px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(1) {
    background-color: #fff5e6;
  }
  &:nth-child(2) {
    background-color: #eeedf1;
  }
  &:nth-child(3) {
    background-color: #d2f1ca;
  }
`;

const Product = styled.div`
  display: flex;
  gap: 25px;
  padding: 25px;
  width: 100%;
`;

const ProductImage = styled.div`
  width: 149px;
  height: 200px;
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const OriginalPrice = styled.span`
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
`;

const SalePrice = styled.span`
  color: #1a1a1a;
  font-weight: bold;
  font-size: 18px;
`;

const Availability = styled.div`
  color: #666;
  margin-bottom: 10px;
`;

const Available = styled.span`
  color: #4caf50;
  font-weight: bold;
`;

const ProgressContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffa500, #ffd700);
  transition: width 0.3s ease;
`;

const ItemsSold = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AddToCart = styled.button`
  flex: 1;
  padding: 10px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
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
