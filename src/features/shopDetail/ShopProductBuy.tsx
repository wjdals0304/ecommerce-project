import styled from 'styled-components';
import Image from 'next/image';
import heartIcon from 'public/images/home/heartDark.svg';
import shareIcon from 'public/images/shop/share.svg';

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
`;

export default function ShopProductBuy() {
  return (
    <Container>
      <HeartButton>
        <Image src={heartIcon} alt="heart" width={27} height={27} />
      </HeartButton>
      <ShareButton>
        <Image src={shareIcon} alt="share" width={27} height={27} />
      </ShareButton>
      <AddToCartButton>Add to Cart</AddToCartButton>
      <BuyButton>Buy Now</BuyButton>
    </Container>
  );
}
