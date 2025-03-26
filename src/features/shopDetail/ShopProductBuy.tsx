import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { postRequest } from '@/utils/apiClient';
import Link from 'next/link';
import { toast } from 'react-toastify';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 15px;
`;

const AddToCartButton = styled.button`
  width: 217px;
  height: 58px;
  border-radius: 55px;
  border: none;
  background-color: #f5f7f8;
  color: #001c30;
  font-size: 24px;
  font-weight: medium;
  border: 2px solid #8e96a4;
  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #f5f7f8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BuyButton = styled.button`
  width: 217px;
  height: 58px;
  border-radius: 55px;
  border: none;
  background-color: #001c30;
  color: #ffffff;
  font-size: 24px;
  font-weight: medium;
  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #001c30;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function ShopProductBuy({ productId }: { productId: string }) {
  const handleAddToCart = async () => {
    try {
      await postRequest({
        url: API_ENDPOINTS.CART_ADD,
        data: {
          productId: parseInt(productId),
        },
      });
      toast.success('장바구니 추가 성공');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <AddToCartButton onClick={handleAddToCart}>장바구니 추가</AddToCartButton>
      <Link href="/cart">
        <BuyButton>구매하기</BuyButton>
      </Link>
    </Container>
  );
}
