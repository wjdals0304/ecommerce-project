import styled from 'styled-components';
import Image from 'next/image';
import heartIcon from 'public/images/home/heartDark.svg';
import shareIcon from 'public/images/shop/share.svg';
import {getStoredToken, postRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import Link from 'next/link';
import {toast} from 'react-toastify';
const Container = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 15px;
`;

const HeartButton = styled.button`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff;
`;

const ShareButton = styled.button`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff;
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
`;

export default function ShopProductBuy({productId}: {productId: string}) {
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
      <HeartButton>
        <Image src={heartIcon} alt="heart" width={27} height={27} />
      </HeartButton>
      <ShareButton>
        <Image src={shareIcon} alt="share" width={27} height={27} />
      </ShareButton>
      <AddToCartButton onClick={handleAddToCart}>장바구니 추가</AddToCartButton>
      <Link href="/cart">
        <BuyButton>구매하기</BuyButton>
      </Link>
    </Container>
  );
}
